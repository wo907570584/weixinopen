"use strict";

function init() {
    var e = require("../config/urlConfig.js");
    _exports = function(o) {
        var r = require("../common/request/request.js"),
            t = { url: e.CLIENTREPORT_URL, body: JSON.stringify({ client_useinfo: o }), method: "post", needToken: 1 };
        r(t, function(e, o, r) {})
    }
}
var _exports;
init(), module.exports = _exports;
