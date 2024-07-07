(function(){"use strict";var t={296:function(t,a,e){var o=e(322),n=e(641);function r(t,a,e,o,r,s){const i=(0,n.g2)("Navbar"),c=(0,n.g2)("Home"),u=(0,n.g2)("About"),l=(0,n.g2)("Projects"),m=(0,n.g2)("Contact");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(i),(0,n.bF)(c,{msg:"Welcome to Your Vue.js App"}),(0,n.bF)(u),(0,n.bF)(l),(0,n.bF)(m)],64)}const s={class:"navbar"},i=(0,n.Fv)('<div class="container" data-v-64ae5607><a href="#home" class="navbar-logo" data-v-64ae5607>Kamil</a><div class="navbar-links" data-v-64ae5607><a href="#about" class="navbar-item" data-v-64ae5607>About</a><a href="#projects" class="navbar-item" data-v-64ae5607>Projects</a><a href="#contact" class="navbar-item" data-v-64ae5607>Contact</a></div></div>',1),c=[i];function u(t,a,e,o,r,i){return(0,n.uX)(),(0,n.CE)("nav",s,c)}var l={name:"AppNavbar"},m=e(262);const d=(0,m.A)(l,[["render",u],["__scopeId","data-v-64ae5607"]]);var p=d;const v=t=>((0,n.Qi)("data-v-367479c7"),t=t(),(0,n.jt)(),t),f={id:"home",class:"home"},b=v((()=>(0,n.Lk)("div",{class:"home_section"},[(0,n.Lk)("h1",{class:"uppercase"},[(0,n.eW)("Hi, ich bin"),(0,n.Lk)("br"),(0,n.eW)("Kamil")]),(0,n.Lk)("p",null,"This is the home page of my portfolio.")],-1))),h=[b];function k(t,a,e,o,r,s){return(0,n.uX)(),(0,n.CE)("div",f,h)}var g={name:"AppHome"};const L=(0,m.A)(g,[["render",k],["__scopeId","data-v-367479c7"]]);var j=L;const _=t=>((0,n.Qi)("data-v-e3ad8722"),t=t(),(0,n.jt)(),t),A={id:"about",class:"about_section about master_section"},y=_((()=>(0,n.Lk)("h2",null,"About Me",-1))),C=[y];function D(t,a,e,o,r,s){return(0,n.uX)(),(0,n.CE)("div",A,C)}var E={name:"AppAbout"};const w=(0,m.A)(E,[["render",D],["__scopeId","data-v-e3ad8722"]]);var O=w,P=e(644);const F=t=>((0,n.Qi)("data-v-dc6dbab2"),t=t(),(0,n.jt)(),t),S={id:"projects",class:"portfolio"},x={class:"master_section"},X=F((()=>(0,n.Lk)("h2",null,"Projects",-1))),I={class:"projects"};function H(t,a,e,o,r,s){return(0,n.uX)(),(0,n.CE)("div",S,[(0,n.Lk)("div",x,[X,(0,n.Lk)("div",I,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.projects,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.id,class:"project"},[(0,n.Lk)("h3",null,(0,P.v_)(t.title),1),(0,n.Lk)("p",null,(0,P.v_)(t.description),1),(0,n.Lk)("p",null,"Tools used: "+(0,P.v_)(t.tools),1)])))),128))])])])}var T={name:"AppProjects",data(){return{projects:[{id:1,title:"Postident",description:"dummy text",tools:"Vue.js, HTML, CSS"},{id:2,title:"Post und Paket 24/7",description:"dummy text",tools:"React, JavaScript, Tailwind CSS"}]}}};const q=(0,m.A)(T,[["render",H],["__scopeId","data-v-dc6dbab2"]]);var M=q;const V=t=>((0,n.Qi)("data-v-5741efb2"),t=t(),(0,n.jt)(),t),J={id:"contact",class:"contact"},K={class:"contact_section master_section"},N=V((()=>(0,n.Lk)("h2",null,"Contact Me",-1))),Q=V((()=>(0,n.Lk)("p",null,"If you have any questions or inquiries, feel free to reach out to me.",-1))),U={class:"form-group"},W=V((()=>(0,n.Lk)("label",{for:"name"},"Name:",-1))),R={class:"form-group"},Y=V((()=>(0,n.Lk)("label",{for:"email"},"Email:",-1))),$={class:"form-group"},z=V((()=>(0,n.Lk)("label",{for:"message"},"Message:",-1))),B=V((()=>(0,n.Lk)("button",{type:"submit"},"Send Message",-1)));function G(t,a,e,r,s,i){return(0,n.uX)(),(0,n.CE)("div",J,[(0,n.Lk)("div",K,[N,Q,(0,n.Lk)("form",{onSubmit:a[3]||(a[3]=(0,o.D$)(((...t)=>i.handleSubmit&&i.handleSubmit(...t)),["prevent"]))},[(0,n.Lk)("div",U,[W,(0,n.bo)((0,n.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":a[0]||(a[0]=t=>s.formData.name=t),required:""},null,512),[[o.Jo,s.formData.name]])]),(0,n.Lk)("div",R,[Y,(0,n.bo)((0,n.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":a[1]||(a[1]=t=>s.formData.email=t),required:""},null,512),[[o.Jo,s.formData.email]])]),(0,n.Lk)("div",$,[z,(0,n.bo)((0,n.Lk)("textarea",{id:"message","onUpdate:modelValue":a[2]||(a[2]=t=>s.formData.message=t),rows:"5",required:""},null,512),[[o.Jo,s.formData.message]])]),B],32)])])}var Z={name:"AppContact",data(){return{formData:{name:"",email:"",message:""}}},methods:{handleSubmit(){console.log("Form submitted with data:",this.formData),this.formData.name="",this.formData.email="",this.formData.message=""}}};const tt=(0,m.A)(Z,[["render",G],["__scopeId","data-v-5741efb2"]]);var at=tt,et={name:"App",components:{Navbar:p,Home:j,About:O,Projects:M,Contact:at}};const ot=(0,m.A)(et,[["render",r]]);var nt=ot,rt=e(220);const st=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:O},{path:"/projects",name:"Projects",component:M},{path:"/contact",name:"Contact",component:at}],it=(0,rt.aE)({history:(0,rt.LA)("/kamil-smolinski/"),routes:st});var ct=it;const ut=(0,o.Ef)(nt);ut.use(ct),ut.mount("#app")}},a={};function e(o){var n=a[o];if(void 0!==n)return n.exports;var r=a[o]={exports:{}};return t[o](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(a,o,n,r){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],n=t[l][1],r=t[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||s>=r)&&Object.keys(e.O).every((function(t){return e.O[t](o[c])}))?o.splice(c--,1):(i=!1,r<s&&(s=r));if(i){t.splice(l--,1);var u=n();void 0!==u&&(a=u)}}return a}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[o,n,r]}}(),function(){e.d=function(t,a){for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,o){var n,r,s=o[0],i=o[1],c=o[2],u=0;if(s.some((function(a){return 0!==t[a]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(c)var l=c(e)}for(a&&a(o);u<s.length;u++)r=s[u],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(l)},o=self["webpackChunkkamil_smolinski"]=self["webpackChunkkamil_smolinski"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(296)}));o=e.O(o)})();
//# sourceMappingURL=app.07d719d5.js.map