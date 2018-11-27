import axios from 'axios'

/**
 * 项目配置信息
 */

/* *测试环境* */

/**正式环境**/
let prod = {

  // 新房测试地址
  NEW_HOUSE: 'https://www.guoanfamily.com/',
  // 租房测试地址
  RENT_HOUSE: 'https://www.guoanfamily.com/',
  PAY: "https://www.guoanfamily.com/",
  // 个人中心地址
  PERSONAL_CENTER: 'https://www.guoanfamily.com/',

  // 业主委托查询接口
  OWNER_URL: 'https://www.guoanfamily.com/',
  UPLOAD_IMAGE: `//www.guoanfamily.com/agenthouseWeb/CommonController/uploadFile`,
  IMAGE_PATH: '//img.guoanfamily.com/',

  IMAGE_COLLECTION: '//www.guoanfamily.com/pc/#/MyDtail?'
}
/***打包时务必配置好环境变量****/
//测试
let ConfigUrl = prod;

//正式
// let ConfigUrl = prod;

//定义fetch函数，config为配置
var guoanPlugins = function () {}

function fetch(config) {
  let Authorization = '';
  try {
    Authorization = localStorage.getItem('token');
  } catch (error) {
    Authorization = '';
  }
  //返回promise对象
  return new Promise((resolve, reject) => {
    //创建axios实例，把基本的配置放进去
    const instance = axios.create({
      //定义请求文件类型
      headers: {
        'Content-Type': 'application/json',
        Authorization: Authorization,
      },
      // 请求超时
      timeout: 5000,
    });
    //请求成功后执行的函数
    instance(config).then(res => {
      resolve(res.data);
      //失败后执行的函数
    }).catch(err => {
      console.log(err);
      reject(err);
    })
  });
}

// 不请求token 的回调方法
function ntFetch(config) {

  //返回promise对象
  return new Promise((resolve, reject) => {
    //创建axios实例，把基本的配置放进去
    const instance = axios.create({
      //定义请求文件类型
      headers: {
        'Content-Type': 'application/json',
      },
      // 请求超时
      timeout: 5000,
    });
    //请求成功后执行的函数
    instance(config).then(res => {
      resolve(res.data);
      //失败后执行的函数
    }).catch(err => {
      console.log(err);
      reject(err);
    })
  });
}
/**********封装axios的方法*************/
let AjaxFn = guoanPlugins.prototype.Axios = function (url, type, data = {}, opinion = {
  interfaceType: ""
}) {
  // 刷新token的方法
  let tokenState = function (res, url, state) {
    if (res.code == 4) { //代表token失效
      //判断是否有standbyToken
      let standbyToken = localStorage.getItem('standbyToken');
      if (!standbyToken) {
        if (window)
          // 没有备用token就去登录页面。
          window.location.href = 'https://www.guoanfamily.com/login/login';
      } else {
        // 刷新token 接口
        let tokenUrl = `/user/userLoginController/unionloginByToken?standbyToken=${standbyToken}`;
        return AjaxFn(tokenUrl, 'get', {}, {
          interfaceType: 'PERSONAL_CENTER'
        }).then(response => {
          if (response.code == 200) {
            if (window) {
              // 存入新的token和新的备用token
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('standbyToken', response.data.standbyToken);
              // 处理url，防止url前缀地址拼接重复。
              let newUrl = url.replace(ConfigUrl[opinion.interfaceType], '');
              // 重新调用请求数据接口。返回数据。
              return AjaxFn(newUrl, type, data = {}, {
                interfaceType: state
              });
            }
          }
        })
      }
    } else {
      return res;
    }
  }
  //如果type为空，默认为post方法，也可以自己改成get
  if (type === 'get' || !type) {
    type = 'get';
    url = ConfigUrl[opinion.interfaceType] + url;
    return fetch({
      url: url,
      method: type,
      data: data,
    }).then(res => {
      console.log('请求接口', url);
      return tokenState(res, url, opinion.interfaceType);
    }).catch(err => {
      console.log(err);
    })
  } else {
    type = 'post';
    url = ConfigUrl[opinion.interfaceType] + url;
    return fetch({
        url: url,
        method: type,
        data: data,
      })
      .then(res => {
        console.log('请求接口', url);
        return tokenState(res, url, opinion.interfaceType);
      }).catch(err => {
        console.log(err);
      })
  }
}

// 没有token的get接口请求
guoanPlugins.prototype.ntGet = (url,
  opinion = {
    interfaceType: ""
  }) => {
  url = ConfigUrl[opinion.interfaceType] + url;
  return ntFetch({
    url: url,
    method: 'get',
  }).then(res => { 
    return res;
  }).catch(err => {
    console.log(err);
  })
}

// 没有token的psot接口请求
guoanPlugins.prototype.ntPost = (url, data = {},
  opinion = {
    interfaceType: ""
  }) => {
  url = ConfigUrl[opinion.interfaceType] + url;
  return ntFetch({
    url: url,
    method: 'post',
    data: data,
  }).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  })
}


/**
 * 获取storage中的对象
 * @param key
 */
guoanPlugins.prototype.getStorage = key => {
  let value = window.localStorage.getItem(key);
  try {
    value = JSON.parse(value);
  } catch (e) {
    return value;
  }
  return value;
};

/**
 * 设置、清空Storage中的对象
 * @param key
 * @param value
 */
guoanPlugins.prototype.setStorage = (key, value) => {
  if (value === undefined) {
    window.localStorage.removeItem(key);
  } else {
    if (typeof value === "object") {
      value = JSON.stringify(value)
    }

    window.localStorage.setItem(key, value);
  }
};
/**
 * 获取展示文件的url
 * @param fileName
 * @param w
 * @param h
 * @returns {string}
 */
guoanPlugins.prototype.concatFileUrl = (fileName, w, h) => {
  let size = "";
  if (w !== undefined && h !== undefined) {
    size = `?imageView2/0/w/${w}/h/${h}`;
  }
  return config.IMAGE_PATH + `${fileName}${size}`;
};



/**
 * 扩展时间对象，增加Format方法
 */
(function () {
  /*对Date的扩展，将 Date 转化为指定格式的String
   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   例子：
   (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
   (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
   支持时间格式化*/
  Date.prototype.Format = function (fmt) { //author: meizz
    let o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
}())

/**
 * 获取展示文件的url
 * @param fileName
 * @param w
 * @param h
 * @returns {string}
 */
guoanPlugins.prototype.concatFileUrl = (fileName, w, h) => {
  let size = "";
  if (w !== undefined && h !== undefined) {
    size = `?imageView2/0/w/${w}/h/${h}`;
  }
  return ConfigUrl.IMAGE_PATH + `${fileName}${size}`;
};

// 过去新房详情页楼盘不同类型图片长度
guoanPlugins.prototype.onFilterImg = (arr, type, num) => {
  let arroy = arr.filter(items => {
    return items[type] == num;
  });
  return arroy;
};

// 判空
guoanPlugins.prototype.notEmpty = (value) => {
  if (value === null || value === undefined || value === "null" || value === "undefined" || value === "") {
    return true;
  } else {
    return false;
  }
}

var objFn = new guoanPlugins();
export {
  objFn
};
