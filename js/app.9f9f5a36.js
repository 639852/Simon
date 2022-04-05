(function(){"use strict";var n={855:function(n,e,t){var r=t(963),i=t(252),l=t(577),u=(0,i._)("h1",null,"Simon Says",-1),a={ref:"fields"},o=(0,i._)("h2",null,"Difficulty",-1),c={ref:"difficulty"},s=(0,i.Uk)(" Easy "),f=(0,i.Uk)(" Normal "),h=(0,i.Uk)(" Hard ");function p(n,e,t,r,p,v){return(0,i.wg)(),(0,i.iD)(i.HY,null,[u,(0,i._)("ul",a,[(0,i._)("li",{class:"blue",onClick:e[0]||(e[0]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.play&&n.play.apply(n,e)})}),(0,i._)("li",{class:"red",onClick:e[1]||(e[1]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.play&&n.play.apply(n,e)})}),(0,i._)("li",{class:"yellow",onClick:e[2]||(e[2]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.play&&n.play.apply(n,e)})}),(0,i._)("li",{class:"green",onClick:e[3]||(e[3]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.play&&n.play.apply(n,e)})})],512),(0,i._)("div",null,[o,(0,i._)("div",c,[(0,i._)("label",null,[(0,i._)("input",{type:"radio",value:"easy",name:"difficulty",checked:"",onChange:e[4]||(e[4]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.changeDifficulty&&n.changeDifficulty.apply(n,e)})},null,32),s]),(0,i._)("label",null,[(0,i._)("input",{type:"radio",value:"normal",name:"difficulty",onChange:e[5]||(e[5]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.changeDifficulty&&n.changeDifficulty.apply(n,e)})},null,32),f]),(0,i._)("label",null,[(0,i._)("input",{type:"radio",value:"hard",name:"difficulty",onChange:e[6]||(e[6]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.changeDifficulty&&n.changeDifficulty.apply(n,e)})},null,32),h])],512)]),(0,i._)("div",null,[(0,i._)("h2",null,"Round: "+(0,l.zw)(n.counter),1),(0,i._)("button",{class:"button",onClick:e[7]||(e[7]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.start&&n.start.apply(n,e)})},"Start")])],64)}var v=t(655),d=t(262),y=(0,i.aZ)({name:"App",data:function(){return{counter:0,difficulty:"easy",prevIndex:1/0}},setup:function(){var n=(0,d.iH)(),e=[];return{fields:n,sequence:e}},methods:{start:function(){return(0,v.mG)(this,void 0,void 0,(function(){var n,e;return(0,v.Jh)(this,(function(t){switch(t.label){case 0:switch(this.sequence.length>0&&(this.counter=0),this.difficulty){case"easy":n=1500;break;case"normal":n=1e3;break;default:n=400;break}this.counter++,e=0,t.label=1;case 1:return e<this.counter?[4,this.cycle(n)]:[3,4];case 2:t.sent(),t.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},cycle:function(n){var e;return(0,v.mG)(this,void 0,void 0,(function(){var t,r,i,l;return(0,v.Jh)(this,(function(u){switch(u.label){case 0:return t=Math.floor(4*Math.random()),r=t===this.prevIndex?Math.abs(t-3):t,i=null===(e=this.fields)||void 0===e?void 0:e.children[r],l=new Audio("sounds/".concat(r+1,".mp3")),this.prevIndex=r,this.sequence.push("".concat(null===i||void 0===i?void 0:i.className)),null===i||void 0===i||i.setAttribute("style","filter: none;"),l.play(),[4,new Promise((function(e){return setTimeout((function(){e(null===i||void 0===i?void 0:i.removeAttribute("style"))}),n)}))];case 1:return u.sent(),[2]}}))}))},play:function(n){var e;if(!(this.sequence.length<=0)){var t=n.target,r=(null===(e=t.parentElement)||void 0===e?void 0:e.children)||[],i=Array.from(r).indexOf(t),l=new Audio("sounds/".concat(i+1,".mp3"));t.className===this.sequence[0]?(this.sequence.shift(),l.play()):(alert("Game over"),this.sequence=[],this.counter=0),this.sequence.length<=0&&this.counter>0&&setTimeout(this.start,1e3)}},changeDifficulty:function(n){this.difficulty=n.target.value}}}),g=t(744);const m=(0,g.Z)(y,[["render",p]]);var b=m;(0,r.ri)(b).mount("#app")}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var l=e[r]={exports:{}};return n[r](l,l.exports,t),l.exports}t.m=n,function(){var n=[];t.O=function(e,r,i,l){if(!r){var u=1/0;for(s=0;s<n.length;s++){r=n[s][0],i=n[s][1],l=n[s][2];for(var a=!0,o=0;o<r.length;o++)(!1&l||u>=l)&&Object.keys(t.O).every((function(n){return t.O[n](r[o])}))?r.splice(o--,1):(a=!1,l<u&&(u=l));if(a){n.splice(s--,1);var c=i();void 0!==c&&(e=c)}}return e}l=l||0;for(var s=n.length;s>0&&n[s-1][2]>l;s--)n[s]=n[s-1];n[s]=[r,i,l]}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var i,l,u=r[0],a=r[1],o=r[2],c=0;if(u.some((function(e){return 0!==n[e]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(o)var s=o(t)}for(e&&e(r);c<u.length;c++)l=u[c],t.o(n,l)&&n[l]&&n[l][0](),n[l]=0;return t.O(s)},r=self["webpackChunksimon"]=self["webpackChunksimon"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(855)}));r=t.O(r)})();
//# sourceMappingURL=app.9f9f5a36.js.map