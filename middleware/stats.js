import { objFn } from "~/plugins/axios.js"
export default (req) => {
    let UUID = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    let post_data = {}
    if (req.from) {
        post_data = {
            id: UUID,
            platform: "pcWebPage",
            bs: req.store.state.pageName[req.route.path] ? req.store.state.pageName[req.route.path].bs : "com",
            req_url: req.route.path,
            url_from: req.from.path,
            pid: req.store.state.uuidData.Pid,
            url_name: req.store.state.pageName[req.route.path] ? req.store.state.pageName[req.route.path].name : "国安家",
            tid: req.store.state.uuidData.Tid
        }
        objFn.Axios("tongji/save/reportHtmlRecord", "post", post_data, { interfaceType: "NEW_HOUSE" })
    } else {

    }

    return;
}