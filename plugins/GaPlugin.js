export default class {
    constructor() {

    }
    install(Vue, options) {
        this.installPrototype(Vue);
    }
    installPrototype(Vue) {
        //   成功的提示消息
        Vue.prototype.$showMsgTip = function(msg, type = 'success') {
            this.$message({
                message: msg,
                type: type,
                customClass: 'form-error',
                showClose: true,
                duration: 2000,
            });
        };
        // 错误的提示消息
        Vue.prototype.$showErrorTip = function(msg) {
            this.$message.error({
                message: msg,
                customClass: 'form-error',
                showClose: true,
                duration: 2000,
            });
        };
        // Confirm 提示消息
        Vue.prototype.$showConfirm = function(msg, cb = () => {}, type = 'warning') {
            this.$confirm(msg, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: type
            }).then(() => {
                cb();
            }).catch(() => {
                this.$message({
                    message: "取消操作",
                    type: 'info',
                    customClass: 'form-error',
                    showClose: true,
                    duration: 2000,
                });
            });
        };
        Vue.prototype.uuidFn = function() {
            // return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
}