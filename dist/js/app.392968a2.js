(function(){"use strict";var n={7800:function(n,t,r){var e=r(9242),o=r(3396);const i=(0,o._)("h1",null,"Welcome",-1);function u(n,t,r,e,u,a){const s=(0,o.up)("LoginView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o.Wm)(s)],64)}function a(n,t,r,e,i,u){const a=(0,o.up)("LoginForm");return(0,o.wg)(),(0,o.j4)(a)}const s=(0,o._)("label",null,"Email",-1),c=(0,o._)("label",{for:""},null,-1);function l(n,t,r,i,u,a){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("form",null,[s,(0,o.wy)((0,o._)("input",{type:"text",name:"",id:"","onUpdate:modelValue":t[0]||(t[0]=n=>u.id=n)},null,512),[[e.nr,u.id]]),c,(0,o.wy)((0,o._)("input",{type:"password",name:"",id:"","onUpdate:modelValue":t[1]||(t[1]=n=>u.password=n)},null,512),[[e.nr,u.password]]),(0,o._)("button",{type:"submit",onClick:t[2]||(t[2]=(0,e.iM)((n=>a.handleData()),["prevent"]))},"login")])])}var f=r(1020),p=r(4161);class d{async userAuth(n){try{const t=await p.Z.post("https://amused-gray-zebra.cyclic.app/login",n),r=await t.data;return r}catch(t){return!1}}}const h=new d,w=(0,f.Q_)("userstore",{actions:{async loginUser(n){const t=await h.userAuth(n);console.log(t)}}});class v{constructor(n,t){this.email=n,this.password=t}}var m={data(){return{id:"",password:""}},setup(){const n=w();return{userStore:n}},methods:{handleData(){const n=new v(this.id,this.password);this.userStore.loginUser(n)}}},g=r(89);const b=(0,g.Z)(m,[["render",l]]);var y=b,_={components:{LoginForm:y}};const O=(0,g.Z)(_,[["render",a]]);var j=O,k={name:"App",components:{LoginView:j}};const x=(0,g.Z)(k,[["render",u]]);var D=x;const L=(0,f.WB)();(0,e.ri)(D).use(L).mount("#app")}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e].call(i.exports,i,i.exports,r),i.exports}r.m=n,function(){var n=[];r.O=function(t,e,o,i){if(!e){var u=1/0;for(l=0;l<n.length;l++){e=n[l][0],o=n[l][1],i=n[l][2];for(var a=!0,s=0;s<e.length;s++)(!1&i||u>=i)&&Object.keys(r.O).every((function(n){return r.O[n](e[s])}))?e.splice(s--,1):(a=!1,i<u&&(u=i));if(a){n.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[e,o,i]}}(),function(){r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,{a:t}),t}}(),function(){r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={143:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,i,u=e[0],a=e[1],s=e[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var l=s(r)}for(t&&t(e);c<u.length;c++)i=u[c],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(l)},e=self["webpackChunknew_arch_002"]=self["webpackChunknew_arch_002"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(7800)}));e=r.O(e)})();
//# sourceMappingURL=app.392968a2.js.map