parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KmwN":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;var o={toolPanel:void 0,utilsButton:void 0,processDefinitionId:void 0,processDefinitionKey:void 0,jobs:void 0};exports.data=o;
    },{}],"UnXq":[function(require,module,exports) {
        "use strict";function e(e){document.head.appendChild(n(e))}function t(e){document.body.appendChild(n(e))}function n(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}function o(e){return e.replace(/[\u00A0-\u9999<>\&]/g,function(e){return"&#"+e.charCodeAt(0)+";"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.addBodyNode=t,exports.addHeadNode=e,exports.encodeStrHtml=o,exports.htmlToElement=n;
    },{}],"OEA4":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PROCESS_INFORMATION_CLASS=exports.ADDRESS=void 0;var e="process-information";exports.PROCESS_INFORMATION_CLASS=e;var o=function(){return window.location.href.substring(0,window.location.href.indexOf("/camunda"))};exports.ADDRESS=o;
    },{}],"s6Ou":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ProcessPanel=void 0;var e=require("./utils"),t=require("./cockpit"),n=require("./data"),i="camunda-utils-process-panel",o="definition_id",c="definition_key",r="<style>\n    #".concat(i," {\n        width: 100%;\n    } \n    #").concat(i," div {\n        font-size: 20px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-align: center;\n        margin-bottom: 10px;\n    }\n</style>"),d=function(){function d(t){(0,e.addHeadNode)(r),t.addChild('\n            <div id="'.concat(i,'">\n                <div class="').concat(o,'"></div>\n                <div class="').concat(c,'"></div>\n            </div>\n        ')),this.hide()}return d.prototype.hide=function(){this.getDiv().style.display="none"},d.prototype.show=function(){var e=document.querySelector(".".concat(o));n.data.processDefinitionId=document.querySelector(".".concat(t.PROCESS_INFORMATION_CLASS," .definition-id")).textContent.trim();var i=document.querySelector(".".concat(c));n.data.processDefinitionKey=document.querySelector(".".concat(t.PROCESS_INFORMATION_CLASS," .definition-key")).textContent.trim(),e.innerText="Definition ID = ".concat(n.data.processDefinitionId),i.innerText="Process = ".concat(n.data.processDefinitionKey),this.getDiv().style.display="block"},d.prototype.getDiv=function(){return document.querySelector("#".concat(i))},d}();exports.ProcessPanel=d;
    },{"./utils":"UnXq","./cockpit":"OEA4","./data":"KmwN"}],"NhW5":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CamundaService=void 0;var e=require("./cockpit"),t=function(e,t,n,r){return new(n||(n=Promise))(function(o,c){function i(e){try{a(r.next(e))}catch(t){c(t)}}function s(e){try{a(r.throw(e))}catch(t){c(t)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,s)}a((r=r.apply(e,t||[])).next())})},n=function(e,t){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(s){c=[6,s],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},r=function(){function r(){}return r.prototype.searchJobs=function(r,o){return void 0===r&&(r=void 0),void 0===o&&(o=void 0),t(this,void 0,Promise,function(){var t,c,i;return n(this,function(n){switch(n.label){case 0:if(t=(0,e.ADDRESS)(),!r&&!o)throw"processDefinitionId processDefinitionKey is empty";return c={method:"get",headers:new Headers},i=r?"processDefinitionId=".concat(r):"processDefinitionKey=".concat(o),[4,fetch("".concat(t,"/rest/job?").concat(i,"&withException=true"),c).then(function(e){if(200!==e.status)throw"200 status expected, but ".concat(e.status," received; ADDRESS(): ").concat(t);return e.json()}).catch(function(e){return console.log(e),[]})];case 1:return[2,n.sent()]}})})},r.prototype.retry=function(r){return t(this,void 0,void 0,function(){var t,o,c;return n(this,function(n){switch(n.label){case 0:return(t=new Headers).append("Content-Type","application/json"),o={method:"PUT",headers:t,body:JSON.stringify({retries:1})},[4,fetch("".concat((0,e.ADDRESS)(),"/rest/job/").concat(r,"/retries"),o)];case 1:if(204!==(c=n.sent()).status)throw"204 status expected, but ".concat(c.status," received");return[2]}})})},r.prototype.deleteProcessInstance=function(r){return t(this,void 0,void 0,function(){var t,o;return n(this,function(n){switch(n.label){case 0:return t={method:"DELETE",headers:new Headers},[4,fetch("".concat((0,e.ADDRESS)(),"/rest/process-instance/").concat(r),t)];case 1:if(204!==(o=n.sent()).status)throw"204 status expected, but ".concat(o.status," received");return[2]}})})},r.instance=new r,r}();exports.CamundaService=r;
    },{"./cockpit":"OEA4"}],"wFSW":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.JobsPanel=void 0;var n=require("./data"),t=require("./utils"),e=require("./CamundaService"),o=function(n,t,e,o){return new(e||(e=Promise))(function(i,r){function c(n){try{a(o.next(n))}catch(t){r(t)}}function s(n){try{a(o.throw(n))}catch(t){r(t)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e(function(n){n(t)})).then(c,s)}a((o=o.apply(n,t||[])).next())})},i=function(n,t){var e,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;c;)try{if(e=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=t.call(n,c)}catch(s){r=[6,s],o=0}finally{e=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},r="camunda-utils-jobs-panel",c="process_panel_controller",s="incident_jobs_count",a="<style>\n    #".concat(r," {\n        width: 100%;\n    } \n    #").concat(r," div {\n        font-size: 20px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-align: center;\n        margin-bottom: 20px;\n    }\n    .").concat(c," button {\n        font-size: 24px;\n    }\n</style>"),u=function(){function u(n,e){this.refresh=e,(0,t.addHeadNode)(a),n.addChild('\n            <div id="'.concat(r,'">\n                <div class="').concat(s,'"></div>\n                <div class="').concat(c,'">\n                    <button>Scan definition id incidents</button>\n                    <button>Scan process incidents</button>\n                </div>\n            </div>\n        '));var o=document.querySelector(".".concat(c," > button:nth-child(1)")),i=document.querySelector(".".concat(c," > button:nth-child(2)"));o.onclick=this.scanDefinitionJobs.bind(this),i.onclick=this.scanProcessJobs.bind(this),this.hide()}return u.prototype.show=function(){this.getDiv().style.display="block",this.refreshIncidentCount()},u.prototype.hide=function(){this.getDiv().style.display="none"},u.prototype.scanDefinitionJobs=function(){return o(this,void 0,void 0,function(){var t;return i(this,function(o){switch(o.label){case 0:return t=n.data,[4,e.CamundaService.instance.searchJobs(n.data.processDefinitionId)];case 1:return t.jobs=o.sent(),this.refreshIncidentCount(),this.logJobs(),this.refresh(),[2]}})})},u.prototype.scanProcessJobs=function(){return o(this,void 0,void 0,function(){var t,o;return i(this,function(i){switch(i.label){case 0:return t=n.data,[4,e.CamundaService.instance.searchJobs(void 0,n.data.processDefinitionKey)];case 1:return t.jobs=i.sent(),o=n.data.jobs.length,document.querySelector(".".concat(s)).textContent="Process incident count = ".concat(o),this.logJobs(),this.refresh(),[2]}})})},u.prototype.logJobs=function(){var t=n.data.jobs.length,e=n.data.jobs.map(function(n){return n.processDefinitionId.split(":")[1]});console.log("Found ".concat(t," incidents. Affected versions: ").concat(Array.from(new Set(e))))},u.prototype.refreshIncidentCount=function(){var t;if(n.data.jobs){var e=(null===(t=n.data.jobs)||void 0===t?void 0:t.length)||0;document.querySelector(".".concat(s)).textContent="Definition incident count = ".concat(e)}},u.prototype.getDiv=function(){return document.querySelector("#".concat(r))},u}();exports.JobsPanel=u;
    },{"./data":"KmwN","./utils":"UnXq","./CamundaService":"NhW5"}],"C5sR":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.JobsController=void 0;var t=require("./data"),e=require("./utils"),n=require("./CamundaService"),o=function(t,e,n,o){return new(n||(n=Promise))(function(r,i){function c(t){try{l(o.next(t))}catch(e){i(e)}}function s(t){try{l(o.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(c,s)}l((o=o.apply(t,e||[])).next())})},r=function(t,e){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},i="camunda-utils-jobs-controller",c="jobs_controller",s="jobs_progress",l="<style>\n    #".concat(i," {\n        width: 100%;\n    } \n    #").concat(i," div {\n        font-size: 20px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-align: center;\n        margin-bottom: 10px;\n    }\n    .").concat(c," button {\n        font-size: 24px;\n    }\n</style>"),u=function(){function u(t,n){this.refresh=n,(0,e.addHeadNode)(l),t.addChild('\n            <div id="'.concat(i,'">\n                <div class="').concat(c,'">\n                    <button>Retry</button>\n                    <button>Delete</button>\n                    <button>Filter incident</button>\n                    <button>Print</button>\n                    <button>Print unique</button>\n                </div>\n            </div>\n        '));var o=document.querySelector(".".concat(c," > button:nth-child(1)")),r=document.querySelector(".".concat(c," > button:nth-child(2)")),s=document.querySelector(".".concat(c," > button:nth-child(3)")),u=document.querySelector(".".concat(c," > button:nth-child(4)")),a=document.querySelector(".".concat(c," > button:nth-child(5)"));this.buttons=[o,r,s,u,a],o.onclick=this.retry.bind(this),r.onclick=this.delete.bind(this),s.onclick=this.filter.bind(this),u.onclick=this.print.bind(this),a.onclick=this.printUnique.bind(this),this.hide()}return u.prototype.show=function(){this.getDiv().style.display="block"},u.prototype.hide=function(){this.getDiv().style.display="none"},u.prototype.retry=function(){return o(this,void 0,void 0,function(){var e,i=this;return r(this,function(c){switch(c.label){case 0:return e=t.data.jobs,window.confirm("Retry ".concat(null==e?void 0:e.length," incidents?"))?(this.enableButtons(!1),[4,this.doWithProgress(e,function(t){return o(i,void 0,void 0,function(){var e;return r(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),console.log("Try to retry job ".concat(t.id,".")),[4,n.CamundaService.instance.retry(t.id)];case 1:return o.sent(),console.log("Job ".concat(t.id," retried.")),[3,3];case 2:return e=o.sent(),console.log("Job ".concat(t.id," retry failed.")),console.error(e),[3,3];case 3:return[2]}})})})]):[2];case 1:return c.sent(),alert("Done!"),this.enableButtons(!0),[2]}})})},u.prototype.delete=function(){return o(this,void 0,void 0,function(){var e,i=this;return r(this,function(c){switch(c.label){case 0:return e=t.data.jobs,window.confirm("Delete ".concat(null==e?void 0:e.length," incidents?"))?(this.enableButtons(!1),[4,this.doWithProgress(e,function(t){return o(i,void 0,void 0,function(){var e;return r(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),console.log("Try to delete job ".concat(t.id,".")),[4,n.CamundaService.instance.deleteProcessInstance(t.processInstanceId)];case 1:return o.sent(),console.log("Job ".concat(t.id," deleted.")),[3,3];case 2:return e=o.sent(),console.log("Job ".concat(t.id," delete failed.")),console.error(e),[3,3];case 3:return[2]}})})})]):[2];case 1:return c.sent(),alert("Done!"),this.enableButtons(!0),[2]}})})},u.prototype.filter=function(){var e,n,o=prompt("Filter by exceptionMessage");o&&(t.data.jobs=null===(e=t.data.jobs)||void 0===e?void 0:e.filter(function(t){return t.exceptionMessage===o}),console.log("".concat(null===(n=t.data.jobs)||void 0===n?void 0:n.length," jobs filtered")),this.refresh())},u.prototype.print=function(){var e=JSON.stringify(t.data.jobs,null,"\t");console.log(e)},u.prototype.printUnique=function(){var e,n=new Map;null===(e=t.data.jobs)||void 0===e||e.forEach(function(t){return n.set(t.exceptionMessage,t)});var o=JSON.stringify(Array.from(n.values()),null,"\t");console.log("Unique result by exception cont: ".concat(n.size)),console.log(o)},u.prototype.doWithProgress=function(t,n){return o(this,void 0,void 0,function(){var o,i,c,l,u,a;return r(this,function(r){switch(r.label){case 0:o=(0,e.htmlToElement)('\n            <div class="'.concat(s,'">\n                <progress id="file" max="100" value="0"></progress>\n            </div>\n        ')),this.getDiv().appendChild(o),i=document.querySelector(".".concat(s," progress")),c=100/t.length,l=0,u=t,r.label=1;case 1:return l<u.length?(a=u[l],[4,n(a)]):[3,4];case 2:r.sent(),i.value+=c,r.label=3;case 3:return l++,[3,1];case 4:return i.parentElement.remove(),[2]}})})},u.prototype.enableButtons=function(t){this.buttons.forEach(function(e){return e.disabled=!t})},u.prototype.getDiv=function(){return document.querySelector("#".concat(i))},u}();exports.JobsController=u;
    },{"./data":"KmwN","./utils":"UnXq","./CamundaService":"NhW5"}],"W7T5":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ToolPanel=void 0;var t=require("./data"),n=require("./utils"),e=require("./ProcessPanel"),o=require("./cockpit"),r=require("./JobsPanel"),i=require("./JobsController"),s="camunda-utils-tool-panel",l="<style>\n    #".concat(s," {\n         position: fixed;\n         left: 50%;\n         top: 50%;\n         z-index: 2000;\n         background-color: aquamarine;\n         font-size: 24px;\n         border-style: dashed;\n         padding: 5px;\n         transform: translate(-50%, -50%);\n         width: 80%;\n         min-width: 700px;\n    } \n    #").concat(s," .close_button {\n        height: 25px;\n    }\n    \n    #").concat(s," .close_button button {\n        float: right;\n        height: 25px;\n        font-family: Arial;\n        font-size: 15px;\n    }\n    \n    #").concat(s," .error {\n        background-color: #ff7f7f;\n    }\n</style>"),a=function(){function a(){this.errors=[],(0,n.addHeadNode)(l),(0,n.addBodyNode)('\n        <div id="'.concat(s,'">\n            <div class="close_button">\n                <button>x</button>\n            </div>\n        </div>')),document.querySelector("#".concat(s," .close_button")).onclick=this.close.bind(this),this.processPanel=new e.ProcessPanel(this),this.jobsPanel=new r.JobsPanel(this,this.renderContent.bind(this)),this.jobsController=new i.JobsController(this,this.renderContent.bind(this)),this.renderContent()}return a.prototype.show=function(){this.getDiv().style.display="block",this.renderContent()},a.prototype.renderContent=function(){document.querySelector(".".concat(o.PROCESS_INFORMATION_CLASS))&&(this.processPanel.show(),this.jobsPanel.show()),t.data.jobs&&t.data.jobs.length>0&&this.jobsController.show()},a.prototype.addChild=function(t){var e=(0,n.htmlToElement)(t);this.getDiv().appendChild(e)},a.prototype.close=function(){var n,e=this;this.errors.forEach(function(t){return e.getDiv().removeChild(t)}),this.errors=[],this.getDiv().style.display="none",this.processPanel.hide(),null===(n=t.data.utilsButton)||void 0===n||n.show(!0)},a.prototype.getDiv=function(){return document.querySelector("#".concat(s))},a}();exports.ToolPanel=a;
    },{"./data":"KmwN","./utils":"UnXq","./ProcessPanel":"s6Ou","./cockpit":"OEA4","./JobsPanel":"wFSW","./JobsController":"C5sR"}],"yeNQ":[function(require,module,exports) {
        "use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UtilsButton=void 0;var t=require("./data"),o=require("./ToolPanel"),n=require("./utils"),e="camunda-utils-button",i="<style>\n    #".concat(e," {\n         position: fixed;\n         right: 50%;\n         top: 10px;\n         z-index: 2000;\n         background-color: aquamarine;\n         font-size: 24px;\n         border-style: dashed;\n         padding: 5px;\n         cursor: pointer;\n    } \n</style>"),a=function(){function a(){(0,n.addHeadNode)(i),(0,n.addBodyNode)('<div id="'.concat(e,'">UTILS</div>')),this.getDiv().onclick=this.click.bind(this),t.data.utilsButton=this}return a.prototype.show=function(t){this.getDiv().style.display=t?"block":"none"},a.prototype.click=function(){t.data.toolPanel?t.data.toolPanel.show():t.data.toolPanel=new o.ToolPanel,this.show(!1)},a.prototype.getDiv=function(){return document.querySelector("#".concat(e))},a}();exports.UtilsButton=a;
    },{"./data":"KmwN","./ToolPanel":"W7T5","./utils":"UnXq"}],"QCba":[function(require,module,exports) {
        "use strict";var t=require("./UtilsButton");new t.UtilsButton;
    },{"./UtilsButton":"yeNQ"}]},{},["QCba"], null)
//# sourceMappingURL=/bundle.js.map