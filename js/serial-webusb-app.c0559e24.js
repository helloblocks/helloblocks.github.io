(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["serial-webusb-app","serial-base"],{"002f":function(e,t,r){"use strict";r.r(t),function(e){var n=r("1da1"),i=r("d4ec"),a=r("bee2"),u=r("262e"),c=r("2caf"),s=(r("96cf"),r("7db0"),r("d3b7"),r("25f0"),r("9091")),o=navigator,l=o.usb;console.log("using webusb");var h=function(t){Object(u["a"])(s,t);var r=Object(c["a"])(s);function s(){var e;return Object(i["a"])(this,s),e=r.call(this),e.requestRequired=!0,e.devices=JSON.parse(localStorage.deviceNames||"[]"),e._currentDevice=null,e._rl=!1,e.implementation="webusb",e}return Object(a["a"])(s,[{key:"_getDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.getDevices();case 2:return r=e.sent,e.abrupt("return",r.find((function(e){return e.serialNumber===t}))||null);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_readLoop",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this._currentDevice&&this._currentDevice.opened){t.next=3;break}return this._rl=!1,t.abrupt("return");case 3:return this._rl=!0,t.next=6,this._currentDevice.transferIn(5,64);case 6:r=t.sent,this.emit("data",e.from(r.data.buffer)),this.mute||this.emit("message",e.from(r.data.buffer).toString(this.encoding));case 9:case"end":return t.stop()}}),t,this)})));function r(){return t.apply(this,arguments)}return r}()},{key:"requestDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.requestDevice({filters:[{classCode:2}]});case 2:return t=e.sent,e.next=5,this.getDeviceName(t.serialNumber);case 5:if(!e.sent){e.next=10;break}console.log(this.getDeviceName(t.serialNumber)),this.setCurrentDevice(t.serialNumber),e.next=11;break;case 10:this.emit("deviceNamePrompt",t.serialNumber);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this._getDevice(t);case 2:return e.abrupt("return",!!e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setCurrentDevice",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.isDevice(t);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return this._currentDevice&&this.disconnect(),e.next=7,this._getDevice(t);case 7:return this._currentDevice=e.sent,this.currentDevice=t,this.emit("currentDevice",t),e.prev=10,e.next=13,this.connect();case 13:e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](10),"Access denied."===e.t0.message&&this.emit("errorPrompt","access_denied"),console.error([e.t0]);case 19:case"end":return e.stop()}}),e,this,[[10,15]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"writeBuff",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this._currentDevice.transferOut(4,t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"write",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.mute){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.writeBuff(e.from(r,this.encoding));case 4:case"end":return t.stop()}}),t,this)})));function r(e){return t.apply(this,arguments)}return r}()},{key:"connect",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._currentDevice&&!this._currentDevice.opened){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._getDevice(this.currentDevice);case 4:return t=e.sent,console.log(1,this._currentDevice,t),e.next=8,t.open();case 8:return console.log(2),e.next=11,this._currentDevice.setConfiguration(1);case 11:return console.log(3),r=this._currentDevice.configuration.interfaces[0].interfaceNumber,e.next=15,this._currentDevice.claimInterface(r);case 15:return console.log(4),e.next=18,this._currentDevice.controlTransferOut({requestType:"class",recipient:"interface",request:34,value:1,index:2});case 18:console.log(5),this.emit("connected",this.currentDevice),console.log(6),this._rl||this._readLoop();case 22:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"disconnect",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._currentDevice&&this._currentDevice.opened){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._currentDevice.close();case 4:this.connected=!1,this.emit("disconnect",this.currentDevice);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setDeviceName",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.isDevice(t);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:this.devices.push({value:t,name:r}),localStorage.deviceNames=JSON.stringify(this.devices),this.setCurrentDevice(t);case 7:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}]),s}(s["default"]);t["default"]=h}.call(this,r("1c35").Buffer)},"53ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0");function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}},9091:function(e,t,r){"use strict";r.r(t),function(e){var n=r("5530"),i=r("53ca"),a=r("1da1"),u=r("d4ec"),c=r("bee2"),s=r("262e"),o=r("2caf"),l=(r("96cf"),r("a9e3"),r("d3b7"),r("3ca3"),r("ddb0"),r("d81d"),r("4de4"),r("159b"),r("b64b"),r("25f0"),r("b0c0"),r("7db0"),r("fb6a"),r("faa1")),h=r.n(l),v={dtr:"dataTerminalReady",rts:"requestToSend",brk:"break",cts:"clearToSend",dsr:"dataSetReady",dcd:"dataCarrierDetect"},f=function(t){Object(s["a"])(l,t);var r=Object(o["a"])(l);function l(){var e;return Object(u["a"])(this,l),e=r.call(this),e.requestRequired=!1,e.mute=!1,e.baud=Number(sessionStorage.currentBaudRate)||9600,e.lastBaud=9600,e.encoding="ascii",e.devices=[],e.currentDevice=null,e.connected=!1,e.implementation="basic",e.serial=null,e.DEBUG=!0,e}return Object(c["a"])(l,[{key:"install",value:function(e){e.$serial=this,e.prototype.$serial=this}},{key:"requestDevice",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"listDevices",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.devices.map((function(e){return r.isDevice(e.value)})));case 2:return t=e.sent,e.abrupt("return",this.devices.filter((function(e,r){return t[r]})));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isDevice",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setCurrentDevice",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.currentDevice=t;case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setBaud",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.DEBUG&&console.log("setting speed",t),!this.serial){e.next=4;break}return e.next=4,this.serial.update({baudRate:t});case 4:return this.baud=t,sessionStorage.currentBaudRate=t,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"resetBaud",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.setBaud(this.lastBaud);case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setMute",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.mute=t;case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_transSignal",value:function(e){var t={};return"object"===Object(i["a"])(e)&&(t=Object(n["a"])({},e)),"on"!==e&&!0!==e||(t={dtr:!0,rts:!0}),"off"!==e&&!1!==e||(t={dtr:!1,rts:!1}),Object.keys(v).forEach((function(e){"boolean"===typeof t[e]&&(t[v[e]]=t[e]),"boolean"===typeof t[v[e]]&&(t[e]=t[v[e]])})),t}},{key:"setSignals",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==(r=this.serial)&&void 0!==r&&r.isOpen){e.next=2;break}throw new Error("Cannot write to closed port.");case 2:return this.DEBUG&&console.log("signaling",t),n=this._transSignal(t),e.abrupt("return",this.serial.set(n));case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSignals",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==(t=this.serial)&&void 0!==t&&t.isOpen){e.next=2;break}throw new Error("Cannot read closed port.");case 2:return e.next=4,this.serial.get();case 4:return r=e.sent,e.abrupt("return",this._transSignal(r));case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"readBuff",value:function(){var e=this;return new Promise((function(t,r){var n;return null===(n=e.serial)||void 0===n?void 0:n.read((function(e,n){n?r(n):t()}))}))}},{key:"writeBuff",value:function(e){var t=this;return this.DEBUG&&console.log("write",e.toString("hex")),new Promise((function(r,n){return t.serial.write(e,(function(e){e?n(e):r()}))}))}},{key:"connect",value:function(){var e=this;if(!this.serial)throw new Error("Cannot connect to un-initiated device.");return!this._currentDevice||this.serial.isOpen?(this.DEBUG&&console.log("skipping connect"),Promise.resolve()):new Promise((function(t,r){return e.serial.open((function(n){return n?r(n):(e.connected=!0,e.emit("connected",e.currentDevice),t())}))}))}},{key:"disconnect",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._currentDevice&&null!==(t=this.serial)&&void 0!==t&&t.isOpen){e.next=2;break}return e.abrupt("return");case 2:return this.serial.pause(),e.next=5,this.serial.close();case 5:this.serial.resume(),this.connected=!1,this.emit("disconnect",this.currentDevice),this.emit("close"),this.DEBUG&&console.log("disconnected");case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"setDeviceName",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.isDevice(t);case 2:if(!e.sent){e.next=4;break}this.devices.push({value:t,name:r});case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getDeviceName",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.devices.find((function(e){return e.value===t}))||{name:""}).name);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"isOpen",get:function(){return this.connected}},{key:"path",get:function(){return this.implementation}},{key:"baudRate",get:function(){return this.baud}},{key:"open",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:function(){},e.prev=1,e.next=4,this.connect();case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](1),null===t||void 0===t||t(e.t0),e.abrupt("return");case 10:null===t||void 0===t||t();case 11:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:function(){},e.prev=2,!t.baudRate){e.next=6;break}return e.next=6,this.setBaud(t.baudRate);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](2),null===r||void 0===r||r(e.t0),e.abrupt("return");case 12:null===r||void 0===r||r();case 13:case"end":return e.stop()}}),e,this,[[2,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"close",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:function(){},e.prev=1,e.next=4,this.disconnect();case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](1),null===t||void 0===t||t(e.t0),e.abrupt("return");case 10:null===t||void 0===t||t();case 11:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"set",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},r=n.length>1&&void 0!==n[1]?n[1]:function(){},e.prev=2,e.next=5,this.setSignals(t);case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e["catch"](2),null===r||void 0===r||r(e.t0),e.abrupt("return");case 11:null===r||void 0===r||r();case 12:case"end":return e.stop()}}),e,this,[[2,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:function(){},r={},e.prev=2,e.next=5,this.getSignals();case 5:r=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](2),null===t||void 0===t||t(e.t0,null),e.abrupt("return");case 12:null===t||void 0===t||t(null,r);case 13:case"end":return e.stop()}}),e,this,[[2,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"read",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.readBuff();case 2:return r=e.sent,e.abrupt("return",r&&r.slice(0,Math.min(r.length,t||1/0)));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"drain",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};null===e||void 0===e||e()}},{key:"flush",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};null===e||void 0===e||e()}},{key:"pause",value:function(){var e,t;null===(e=this.serial)||void 0===e||null===(t=e.paused)||void 0===t||t.call(e)}},{key:"resume",value:function(){var e,t;null===(e=this.serial)||void 0===e||null===(t=e.resume)||void 0===t||t.call(e)}},{key:"write",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n,i,a,u,c=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=c.length>1&&void 0!==c[1]?c[1]:null,a=c.length>2&&void 0!==c[2]?c[2]:function(){},"function"===typeof i&&(a=i,i=null),!this.mute||"string"!==typeof r){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,this.writeBuff("string"===typeof r?e.from(r,i||this.encoding):r);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t["catch"](5),null===(u=a)||void 0===u||u(t.t0),t.abrupt("return");case 14:null===(n=a)||void 0===n||n();case 15:case"end":return t.stop()}}),t,this,[[5,10]])})));function r(e){return t.apply(this,arguments)}return r}()}]),l}(h.a);t["default"]=f}.call(this,r("1c35").Buffer)}}]);
//# sourceMappingURL=serial-webusb-app.c0559e24.js.map