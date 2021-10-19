(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["serial-nav-app","serial-base"],{"53ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}},9091:function(e,t,r){"use strict";r.r(t),function(e){var n=r("5530"),i=r("53ca"),a=r("1da1"),u=r("d4ec"),s=r("bee2"),c=r("262e"),o=r("2caf"),l=(r("96cf"),r("a9e3"),r("d3b7"),r("3ca3"),r("ddb0"),r("d81d"),r("4de4"),r("159b"),r("b64b"),r("25f0"),r("b0c0"),r("7db0"),r("fb6a"),r("faa1")),h=r.n(l),f={dtr:"dataTerminalReady",rts:"requestToSend",brk:"break",cts:"clearToSend",dsr:"dataSetReady",dcd:"dataCarrierDetect"},p=function(t){Object(c["a"])(l,t);var r=Object(o["a"])(l);function l(){var e;return Object(u["a"])(this,l),e=r.call(this),e.requestRequired=!1,e.mute=!1,e.baud=Number(sessionStorage.currentBaudRate)||9600,e.lastBaud=9600,e.encoding="ascii",e.devices=[],e.currentDevice=null,e.connected=!1,e.implementation="basic",e.serial=null,e.DEBUG=!!Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG,e}return Object(s["a"])(l,[{key:"install",value:function(e){e.$serial=this,e.prototype.$serial=this}},{key:"requestDevice",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"listDevices",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.devices.map((function(e){return r.isDevice(e.value)})));case 2:return t=e.sent,e.abrupt("return",this.devices.filter((function(e,r){return t[r]})));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isDevice",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setCurrentDevice",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.currentDevice=t;case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setBaud",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.DEBUG&&console.log("setting speed",t),!this.serial){e.next=4;break}return e.next=4,this.serial.update({baudRate:t});case 4:return this.baud=t,sessionStorage.currentBaudRate=t,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"resetBaud",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.setBaud(this.lastBaud);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setMute",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.mute=t;case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_transSignal",value:function(e){var t={};return"object"===Object(i["a"])(e)&&(t=Object(n["a"])({},e)),"on"!==e&&!0!==e||(t={dtr:!0,rts:!0}),"off"!==e&&!1!==e||(t={dtr:!1,rts:!1}),Object.keys(f).forEach((function(e){"boolean"===typeof t[e]&&(t[f[e]]=t[e]),"boolean"===typeof t[f[e]]&&(t[e]=t[f[e]])})),t}},{key:"setSignals",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==(r=this.serial)&&void 0!==r&&r.isOpen){e.next=2;break}throw new Error("Cannot write to closed port.");case 2:return this.DEBUG&&console.log("signaling",t),n=this._transSignal(t),e.abrupt("return",this.serial.set(n));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSignals",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==(t=this.serial)&&void 0!==t&&t.isOpen){e.next=2;break}throw new Error("Cannot read closed port.");case 2:return e.next=4,this.serial.get();case 4:return r=e.sent,e.abrupt("return",this._transSignal(r));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"readBuff",value:function(){var e=this;return new Promise((function(t,r){var n;return null===(n=e.serial)||void 0===n?void 0:n.read((function(e,n){n?r(n):t()}))}))}},{key:"writeBuff",value:function(e){var t=this;return this.DEBUG&&console.log("write",e.toString("hex")),new Promise((function(r,n){return t.serial.write(e,(function(e){e?n(e):r()}))}))}},{key:"connect",value:function(){var e=this;if(!this.serial)throw new Error("Cannot connect to un-initiated device.");return!this._currentDevice||this.serial.isOpen?(this.DEBUG&&console.log("skipping connect"),Promise.resolve()):new Promise((function(t,r){return e.serial.open((function(n){return n?r(n):(e.connected=!0,e.emit("connected",e.currentDevice),t())}))}))}},{key:"disconnect",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._currentDevice&&null!==(t=this.serial)&&void 0!==t&&t.isOpen){e.next=2;break}return e.abrupt("return");case 2:return this.serial.pause(),e.next=5,this.serial.close();case 5:this.serial.resume(),this.connected=!1,this.emit("disconnect",this.currentDevice),this.emit("close"),this.DEBUG&&console.log("disconnected");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setDeviceName",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.isDevice(t);case 2:if(!e.sent){e.next=4;break}this.devices.push({value:t,name:r});case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getDeviceName",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.devices.find((function(e){return e.value===t}))||{name:""}).name);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"isOpen",get:function(){return this.connected}},{key:"path",get:function(){return this.implementation}},{key:"baudRate",get:function(){return this.baud}},{key:"open",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:function(){},e.prev=1,e.next=4,this.connect();case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](1),null===t||void 0===t||t(e.t0),e.abrupt("return");case 10:null===t||void 0===t||t();case 11:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:function(){},e.prev=2,!t.baudRate){e.next=6;break}return e.next=6,this.setBaud(t.baudRate);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](2),null===r||void 0===r||r(e.t0),e.abrupt("return");case 12:null===r||void 0===r||r();case 13:case"end":return e.stop()}}),e,this,[[2,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"close",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:function(){},e.prev=1,e.next=4,this.disconnect();case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](1),null===t||void 0===t||t(e.t0),e.abrupt("return");case 10:null===t||void 0===t||t();case 11:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"set",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:function(){},e.prev=2,e.next=5,this.setSignals(t);case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e["catch"](2),null===r||void 0===r||r(e.t0),e.abrupt("return");case 11:null===r||void 0===r||r();case 12:case"end":return e.stop()}}),e,this,[[2,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:function(){},r={},e.prev=2,e.next=5,this.getSignals();case 5:r=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](2),null===t||void 0===t||t(e.t0,null),e.abrupt("return");case 12:null===t||void 0===t||t(null,r);case 13:case"end":return e.stop()}}),e,this,[[2,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"read",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.readBuff();case 2:return r=e.sent,e.abrupt("return",r&&r.slice(0,Math.min(r.length,t||1/0)));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"drain",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};null===e||void 0===e||e()}},{key:"flush",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};null===e||void 0===e||e()}},{key:"pause",value:function(){var e,t;null===(e=this.serial)||void 0===e||null===(t=e.paused)||void 0===t||t.call(e)}},{key:"resume",value:function(){var e,t;null===(e=this.serial)||void 0===e||null===(t=e.resume)||void 0===t||t.call(e)}},{key:"write",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n,i,a,u,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=s.length>1&&void 0!==s[1]?s[1]:null,a=s.length>2&&void 0!==s[2]?s[2]:function(){},"function"===typeof i&&(a=i,i=null),!this.mute||"string"!==typeof r){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,this.writeBuff("string"===typeof r?e.from(r,i||this.encoding):r);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t["catch"](5),null===(u=a)||void 0===u||u(t.t0),t.abrupt("return");case 14:null===(n=a)||void 0===n||n();case 15:case"end":return t.stop()}}),t,this,[[5,10]])})));function r(e){return t.apply(this,arguments)}return r}()}]),l}(h.a);t["default"]=p}.call(this,r("1c35").Buffer)},be9f:function(e,t,r){"use strict";r.r(t),function(e){var n=r("1da1"),i=r("d4ec"),a=r("bee2"),u=r("257e"),s=r("262e"),c=r("2caf"),o=(r("96cf"),r("d3b7"),r("25f0"),r("99af"),r("7db0"),r("2b0e")),l=r("6830"),h=r.n(l),f=r("9091"),p=navigator,v=p.serial;console.log("using navserial");var d=function(t){Object(s["a"])(l,t);var r=Object(c["a"])(l);function l(){var t;return Object(i["a"])(this,l),t=r.call(this),t.requestRequired=!0,t.devices=JSON.parse(localStorage.portNames||"[]"),t._currentDevice=null,t.implementation="navserial",t.handlesSelect=!0,t._dataHandler=function(r){t._lastRead=r,t.DEBUG&&console.log("read",e.from(r).toString("hex")),t.mute||t.emit("message",r.toString(t.encoding)),t.emit("data",r)},t._openHandler=function(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];(e=t).emit.apply(e,["open"].concat(n))},t._closeHandler=function(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];(e=t).emit.apply(e,["close"].concat(n))},t._errorHandler=function(){for(var e,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];(e=t).emit.apply(e,["close"].concat(n)),t._currentDevice=null,o["default"].set(Object(u["a"])(t),"currentDevice",null),t.serial&&t._unregisterSerial(),t.emit("currentDevice",null)},t._initSerial(),t}return Object(a["a"])(l,[{key:"_getDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"requestDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.requestPort({classCode:2,filters:[{usbVendorId:6790,usbProductId:29987}]});case 3:t=e.sent,this.setCurrentDevice(t),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.emit("serialPortCancel",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"isDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this._getDevice(t);case 2:return e.abrupt("return",!!e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_registerSerial",value:function(e){this.serial=new h.a(e,{baudRate:this.baud,autoOpen:!1}),this.serial.on("data",this._dataHandler),this.serial.on("open",this._openHandler),this.serial.on("close",this._closeHandler),this.serial.on("error",this._errorHandler)}},{key:"_unregisterSerial",value:function(){this.serial.off("data",this._dataHandler),this.serial.off("open",this._openHandler),this.serial.off("close",this._closeHandler)}},{key:"setCurrentDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.isDevice(t);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:if(!this.connected){e.next=7;break}return e.next=7,this.disconnect();case 7:return e.next=9,this._getDevice(t);case 9:return this._currentDevice=e.sent,o["default"].set(this,"currentDevice",t),this.serial&&this._unregisterSerial(),this._registerSerial(t),this.emit("currentDevice",t),e.prev=14,e.next=17,this.connect();case 17:window.localStorage.lastNavSerialPort=JSON.stringify(t.getInfo()),e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](14),"Access denied."===e.t0.message&&this.emit("errorPrompt","access_denied"),console.error(e.t0);case 24:this.DEBUG&&console.log(t,t.getInfo());case 25:case"end":return e.stop()}}),e,this,[[14,20]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"disconnectDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.connected){e.next=3;break}return e.next=3,this.disconnect();case 3:this._currentDevice=null,o["default"].set(this,"currentDevice",null),this.serial&&this._unregisterSerial(),this.emit("currentDevice",null);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"_initSerial",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=JSON.parse(window.localStorage.lastNavSerialPort||"{}"),r=t.usbProductId,n=t.usbVendorId,n&&r){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v.getPorts();case 5:i=e.sent,a=i.find((function(e){var t=e.getInfo();return r===t.usbProductId&&n===t.usbVendorId})),a&&this.setCurrentDevice(a);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setDeviceName",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.isDevice(t);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.devices.push({value:t,name:r}),localStorage.portNames=JSON.stringify(this.devices),this.setCurrentDevice(t);case 7:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}]),l}(f["default"]);t["default"]=d}.call(this,r("1c35").Buffer)}}]);
//# sourceMappingURL=serial-nav-app.d40f7de0.js.map