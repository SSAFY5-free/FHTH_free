(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/FHTH_free/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"039a":function(e,t,n){"use strict";n("7174")},1:function(e,t){},3057:function(e,t,n){"use strict";n("9414")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[null==e.check?n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/login"}},[e._v("로그인")]),e._v(" | "),n("router-link",{attrs:{to:"/signup"}},[e._v("회원가입")])],1):e._e(),n("router-view")],1)},a=[],i=n("5530"),s=n("2f62"),u=n("2b27"),c=n.n(u),l={components:{},methods:{check:function(){return c.a.get("accessToken")}},computed:Object(i["a"])({},Object(s["c"])("userInfo",["accessToken"])),mounted:function(){}},d=l,m=(n("034f"),n("2877")),f=Object(m["a"])(d,r,a,!1,null,null,null),p=f.exports,v=n("1da1"),b=(n("96cf"),n("8c4f")),_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"400px",margin:"auto"},attrs:{id:"Login"}},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"100px",model:e.form}},[o("el-form-item",{attrs:{label:"email"}},[o("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),o("el-form-item",{attrs:{label:"pw"}},[o("el-input",{model:{value:e.form.pw,callback:function(t){e.$set(e.form,"pw",t)},expression:"form.pw"}})],1)],1),o("span",[o("el-button",{attrs:{plain:"",disabled:""}},[e._v("cancel")]),o("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("Login")])],1)],1)},h=[],g=(n("d3b7"),n("bc3a")),w=n.n(g),x="https://54.180.202.172:443/",k={IP_AWS:x},O=w.a.create({baseURL:k.IP_AWS});O.interceptors.request.use(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.timeout=1e4,t.headers["x-access-token"]=c.a.get("accessToken"),t.headers["Content-Type"]="application/json",e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return console.log("axios request error : ",e),Promise.reject(e)})),O.interceptors.response.use((function(e){try{return e}catch(t){console.error("[axios.interceptors.response] response : ",t.message)}}),function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.reject(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var y={login:function(e,t){var n=O.post("/unauth/getAccessToken",{email:e,pw:t});return console.log(n),n},signup:function(e){return O.post("/unauth/addAccount",e)}},R={getRobots_id:function(){return O.post("/auth/getRobots")},verifyRobot:function(e){return O.post("/unauth/verifyRobot",{form:e})},getModules:function(e){return console.log("robotAPI _ GETMODULES : "),O.post("/auth/getModules",{robot_id:e})},getModule:function(e){return console.log("robotAPI _ GETMODULE : "),O.post("/auth/getModule",{module_id:e})}},T={data:function(){return{labelPosition:"left",form:{email:"",pw:""}}},methods:{login:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.form,o=n.email,r=n.pw,o&&r){t.next=3;break}return t.abrupt("return",alert("이메일과 비밀번호를 입력해주세요"));case 3:return t.next=5,y.login(o,r).then((function(t){var n=t.data;n.accessToken?(e.$store.commit("userInfo/loginToken",{accessToken:n.accessToken}),e.$router.push("/main")):(alert("이메일과 비밀번호를 다시 입력해주세요"),e.form.pw="")}));case 5:case"end":return t.stop()}}),t)})))()}}},E=T,j=(n("039a"),Object(m["a"])(E,_,h,!1,null,null,null)),S=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"SignUp"}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.form,"status-icon":"","label-width":"120px"}},[n("el-form-item",{attrs:{label:"id"}},[n("el-input",{attrs:{type:"id",autocomplete:"off"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("el-form-item",{attrs:{label:"pw"}},[n("el-input",{attrs:{type:"id",autocomplete:"off"},model:{value:e.form.pw,callback:function(t){e.$set(e.form,"pw",t)},expression:"form.pw"}})],1),n("el-form-item",{attrs:{label:"",size:"normal"}}),n("div",{attrs:{id:"registedDevices"}},e._l(e.form.lstRobot,(function(t){return n("el-form-item",{key:t.id,attrs:{label:String(t.validation),size:"normal"}},[n("add-Robot",{attrs:{form_id:t.id},on:{update:e.validationCheck}})],1)})),1),n("el-form-item",[n("el-button",{on:{click:e.addDomain}},[e._v("새 디바이스")]),n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("회원 가입")])],1)],1)],1)},C=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"addDevice"}},[n("el-input",{staticClass:"input-with-select",attrs:{id:"robot.id",placeholder:"시리얼 코드"},on:{change:e.validationCheck},model:{value:e.form.serial,callback:function(t){e.$set(e.form,"serial",t)},expression:"form.serial"}})],1)},I=[],D={props:["form_id"],data:function(){return{form:{serial:""}}},methods:{validationCheck:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R.verifyRobot(e.form);case 2:n=t.sent.data.result,e.$emit("update",{id:e.form_id,validation:n});case 4:case"end":return t.stop()}}),t)})))()}}},P=D,A=(n("3057"),Object(m["a"])(P,$,I,!1,null,null,null)),L=A.exports,U={components:{addRobot:L},data:function(){return{form:{email:"",pw:"",lstRobot:[{id:0,type:"",serial:"",validation:0}]},lstRobotCount:0,deviceList:[]}},methods:{onSubmit:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.signup(e.form);case 2:n=t.sent,console.log(n);case 4:case"end":return t.stop()}}),t)})))()},addDomain:function(){this.form.lstRobot.push({id:++this.lstRobotCount,type:"",serial:"",validation:0})},validationCheck:function(e){console.log(e),this.form.lstRobot[e.id].validation=e.validation}},created:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},G=U,V=Object(m["a"])(G,M,C,!1,null,null,null),z=V.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bc",staticStyle:{height:"100%"},attrs:{id:"main"}},[n("div",{staticClass:"bc",staticStyle:{display:"flex","justify-content":"space-between"},attrs:{id:"nav"}},[e._v(" "+e._s(e.curModule)+" "),n("div",{staticClass:"bc",attrs:{id:"logo"}},[e._v("로고")]),e._m(0)]),n("robot"),n("div",{staticClass:"bc",attrs:{id:"mainView"}},[n("modules"),n("module-view",{staticClass:"bc",attrs:{module:e.curModule}})],1)],1)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bc",staticStyle:{display:"flex"},attrs:{id:"userInfo"}},[n("div",[e._v("유저 아이디")]),n("div",[e._v("설정")]),n("div",[e._v("로그아웃")])])}],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bc",attrs:{id:"Robot"}},[e._v(" "+e._s(e.robots[e.cur.robot_idx].id)+" "),n("div",{staticStyle:{display:"flex"}},[n("el-dropdown",{attrs:{"split-button":"",type:"primary"}},[e._v(" Default "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("Action 1")]),n("el-dropdown-item",[e._v("Action 2")]),n("el-dropdown-item",[e._v("Action 3")]),n("el-dropdown-item",[e._v("Action 4")])],1)],1)],1),n("div",{staticClass:"bc",staticStyle:{widht:"400px",height:"300px",margin:"40px 30px"}}),e._m(0)])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bc",staticStyle:{display:"flex"},attrs:{id:"KeyPad"}},[n("div",[n("div",[e._v("1")]),n("div",[e._v("2")]),n("div",[e._v("3")])]),n("div",[n("div",[e._v("4")]),n("div",[e._v("5")]),n("div",[e._v("6")])]),n("div",[n("div",[e._v("7")]),n("div",[e._v("8")]),n("div",[e._v("9")])])])}],X={computed:Object(i["a"])({},Object(s["c"])("mainInfo",["robots","cur"])),methods:{},mounted:function(){return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},method:function(){}},q=X,J=Object(m["a"])(q,H,W,!1,null,null,null),K=J.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ModuleView"}},[n("div",{staticClass:"bc",attrs:{id:"ModuleContent"}},[n("el-dropdown",{attrs:{"split-button":"",type:"primary"}},[e._v(" Default "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("Action 1")]),n("el-dropdown-item",[e._v("Action 2")]),n("el-dropdown-item",[e._v("Action 3")]),n("el-dropdown-item",[e._v("Action 4")])],1)],1),e._v(" ModuleView ")],1),e._v(" "+e._s(this.$store.state.mainInfo.cur.module_idx)+" "),"60ed95d495b7ee1cccc3b484"==e.module.type_id?n("dev1",{attrs:{module:e.module}}):e._e(),"60ed95d695b7ee1cccc3b486"==e.module.type_id?n("dev2",{attrs:{module:e.module}}):e._e()],1)},Q=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bc",attrs:{id:"dev1"}},[n("p",[e._v("dev1")]),n("p",[e._v("status of "+e._s(e.module.name))]),e._v(" "+e._s(e.module.module_data.value1)+" "+e._s(e.module.module_data.value2)+" "),n("p",[n("el-button",{attrs:{type:"primary",size:"default"},on:{click:e.onClick}},[e._v("밥주기")])],1)])},Z=[],ee={props:["module"],methods:{onClick:function(){console.log("zz")}}},te=ee,ne=Object(m["a"])(te,Y,Z,!1,null,null,null),oe=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dev2"}},[e._v(" dev2 "+e._s(e.module.module_data.value1)+" ")])},ae=[],ie={props:["module"]},se=ie,ue=Object(m["a"])(se,re,ae,!1,null,null,null),ce=ue.exports,le={components:{dev1:oe,dev2:ce},props:["module"],mounted:function(){var e=this;console.log("mounted"),this.$socket.on("module",(function(t){var n=t.module_data;e.$store.commit("mainInfo/SET_MODULE_DATA",{module_data:n})})),setInterval((function(){e.$socket.emit("module",e.module)}),2e3)}},de=le,me=Object(m["a"])(de,N,Q,!1,null,null,null),fe=me.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bc",attrs:{id:"Modules"}},e._l(e.robots[e.cur.robot_idx].modules,(function(t,o){return n("el-button",{key:t.id,staticStyle:{height:"100px",width:"100px",margin:"0px"},attrs:{type:"primary",size:"default"},on:{click:function(t){return e.onClick(o)}}},[e._v(" "+e._s(t.name)+" ")])})),1)},ve=[],be={components:{},computed:Object(i["a"])({},Object(s["c"])("mainInfo",["robots","cur"])),methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])("mainInfo",["SET_CUR_MODULE_IDX"])),{},{onClick:function(e){this.$store.commit("mainInfo/SET_CUR_MODULE_IDX",e)},getModule:function(e,t){var n=this;return Object(v["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log("mi : ",e,t),o.prev=1,o.next=4,R.getModule(e.id);case 4:r=o.sent.data,console.log("receive : data"),o.next=12;break;case 8:o.prev=8,o.t0=o["catch"](1),r="fail",console.log(o.t0);case 12:console.log("md : ",r,n.connect_count);case 13:case"end":return o.stop()}}),o,null,[[1,8]])})))()}}),data:function(){return{connect_count:[0]}},mounted:function(){for(var e=this.robots[this.cur.robot_idx].modules,t=0;t<e.length;t++)this.getModule(e[t])}},_e=be,he=Object(m["a"])(_e,pe,ve,!1,null,null,null),ge=he.exports,we={components:{Robot:K,ModuleView:fe,Modules:ge},computed:Object(i["a"])(Object(i["a"])({},Object(s["c"])("mainInfo",["robots","cur"])),{},{curModule:function(){return this.$store.state.mainInfo.robots[this.$store.state.mainInfo.cur.robot_idx].modules[this.$store.state.mainInfo.cur.module_idx]}}),mounted:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch("mainInfo/GET_ROBOTS_FROM_SERVER");case 1:case"end":return t.stop()}}),t)})))()}},xe=we,ke=Object(m["a"])(xe,F,B,!1,null,null,null),Oe=ke.exports;o["default"].use(b["a"]);var ye=[{path:"/login",name:"login",component:S},{path:"/signup",name:"signup",component:z},{path:"/main",name:"main",component:Oe}],Re=new b["a"]({mode:"history",base:"/FHTH_free/",routes:ye});Re.beforeEach(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t,n,o){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!c.a.get("accessToken")){e.next=3;break}return console.log("router : pair success"),e.abrupt("return",o());case 3:if(null!==c.a.get("accessToken")){e.next=10;break}if("/login"!==t.path&&"/signup"!==t.path){e.next=8;break}return e.abrupt("return",o());case 8:return alert("세션 권한이 없습니다."),e.abrupt("return",o({path:"/login"}));case 10:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}());var Te=Re,Ee=(n("d81d"),{namespaced:!0,state:{host:"http://localhost:8080",accessToken:null,user_email:""},mutations:{SET_MODULES:function(e,t){},SET_MODULE:function(e,t){var n=t.robot_id,o=t.module_id,r=t.module_data;e.robots[n][o]=r},SET_ROBOTS_ID:function(e,t){console.log("payload",t),t.map((function(t){e.robots[t]={}})),console.log("userInfo : ",e.robots)},loginToken:function(e,t){console.log("login/loinToken"),c.a.set("accessToken",t.accessToken,"1h"),e.accessToken=t.accessToken},removeToken:function(){console.log("login/removeToken"),c.a.remove("accessToken")}},getters:{getToken:function(){var e=c.a.get("accessToken");return{access:e}}},actions:{login:function(e,t){var n=e.commit;return new Promise((function(e,o){w.a.post("/signup",t).then((function(t){n("loginToken",t.data.auth_info),e(t)})).catch((function(e){o(e.message)}))}))},refreshToken:function(e){var t=e.commit;return new Promise((function(e,n){w.a.post("/v1/auth/certify").then((function(n){t("refreshToken",n.data.auth_info),e(n.data.auth_info)})).catch((function(e){n(e.config.data)}))}))},logout:function(e){var t=e.commit;t("removeToken"),location.reload()}}}),je=Ee,Se={namespaced:!0,state:{robots:[{id:"",modules:[{id:"",type_id:"",module_data:{},clickable:!1}]}],cur:{robot_idx:0,module_idx:0},socket:{}},mutations:{SET_ROBOTS:function(e,t){e.robots=t},SET_CUR_MODULE_IDX:function(e,t){e.cur.module_idx=t},SET_MODULE_CLICKABLE:function(e,t){var n=t.module_id,o=t.value;e.robots[e.cur.robot_idx].modules[n].clickable=o},SET_MODULE_DATA:function(e,t){var n=t.module_data;e.robots[e.cur.robot_idx].modules[e.cur.module_idx].module_data=n}},getters:{GET_CURRENT_MODULE:function(e){return e.robots[e.cur.robot_idx].modules[e.cur.module_idx]}},actions:{GET_ROBOTS_FROM_SERVER:function(e){return Object(v["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,o=e.dispatch,t.next=3,R.getRobots_id();case 3:return r=t.sent.data,console.log("robots_id : ",r),t.next=7,r.reduce(function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.then();case 2:return r=e.sent,r.push({id:n,modules:[]}),e.next=6,o("GET_MODULES",n);case 6:return a=e.sent,console.log("modules_id : ",a),a.map((function(e){e["clickable"]=!1})),r[r.length-1]["modules"]=a,e.abrupt("return",Promise.resolve(r));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Promise.resolve([]));case 7:n.robots=t.sent,console.log("SET init result : ",n.robots);case 9:case"end":return t.stop()}}),t)})))()},GET_MODULES:function(e,t){return Object(v["a"])(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("GET_MODULES ID :",t),e.next=3,R.getModules(t);case 3:for(n=e.sent,o=n.data,r=0;r<o.length;r++)o[r]["time"]=new Date;return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))()}}},Me=Se;o["default"].use(s["a"]);var Ce=new s["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{userInfo:je,mainInfo:Me}}),$e=(n("812b"),n("5c96")),Ie=n.n($e),De=(n("0fae"),n("8055")),Pe=n.n(De);o["default"].config.productionTip=!1,o["default"].use(Ie.a);var Ae=Pe()(k.IP_AWS,{withCredentials:!0,extraHeaders:{"my-custom-header":"abcd"}});o["default"].prototype.$socket=Ae,new o["default"]({router:Te,store:Ce,render:function(e){return e(p)}}).$mount("#app")},7174:function(e,t,n){},"812b":function(e,t,n){},"85ec":function(e,t,n){},9414:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.96545804.js.map