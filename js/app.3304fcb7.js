(function(){"use strict";var t={500:function(t,n,e){var r=e(751),i=e(641);const o=(0,i.Lk)("h1",null,"Ninja Reaction Timer",-1),s=["disabled"];function a(t,n,e,r,a,l){const c=(0,i.g2)("Block"),u=(0,i.g2)("Result");return(0,i.uX)(),(0,i.CE)(i.FK,null,[o,(0,i.Lk)("button",{onClick:n[0]||(n[0]=(...t)=>l.start&&l.start(...t)),disabled:a.isPlaying},"play",8,s),a.isPlaying?((0,i.uX)(),(0,i.Wv)(c,{key:0,delay:a.delay,onEnd:l.endGame},null,8,["delay","onEnd"])):(0,i.Q3)("",!0),a.showResults?((0,i.uX)(),(0,i.Wv)(u,{key:1,score:a.score},null,8,["score"])):(0,i.Q3)("",!0)],64)}function l(t,n,e,r,o,s){return o.showBlock?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"block",onClick:n[0]||(n[0]=(...t)=>s.stopTimer&&s.stopTimer(...t))}," click me ")):(0,i.Q3)("",!0)}var c={props:["delay"],data(){return{showBlock:!1,timer:null,reactionTime:0}},mounted(){setTimeout((()=>{this.showBlock=!0,this.startTimer()}),this.delay)},methods:{startTimer(){this.timer=setInterval((()=>{this.reactionTime+=10}),10)},stopTimer(){clearInterval(this.timer),this.$emit("end",this.reactionTime)}}},u=e(262);const h=(0,u.A)(c,[["render",l]]);var d=h,f=e(33);const p={class:"rank"};function m(t,n,e,r,o,s){return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("p",null,"Reaction Time: "+(0,f.v_)(o.displayScore)+" s",1),(0,i.Lk)("p",p,(0,f.v_)(o.rank),1)],64)}var v={props:["score"],data(){return{rank:null,displayScore:null}},mounted(){this.displayScore=this.score/1e3,this.score<250?this.rank="Ninja Fingers":this.score<400?this.rank="Rapid Reflexes":this.rank="Snail pace..."}};const k=(0,u.A)(v,[["render",m]]);var y=k,b={name:"App",components:{Block:d,Result:y},data(){return{isPlaying:!1,delay:null,score:null,showResults:!1}},methods:{start(){this.delay=400+900*Math.random(),this.isPlaying=!0,this.showResults=!1},endGame(t){this.score=t,this.isPlaying=!1,this.showResults=!0}}};const g=(0,u.A)(b,[["render",a]]);var w=g;(0,r.Ef)(w).mount("#app")}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,i,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],o=t[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){t.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,i,o]}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var i,o,s=r[0],a=r[1],l=r[2],c=0;if(s.some((function(n){return 0!==t[n]}))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(l)var u=l(e)}for(n&&n(r);c<s.length;c++)o=s[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(u)},r=self["webpackChunkreaction_timer"]=self["webpackChunkreaction_timer"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(500)}));r=e.O(r)})();
//# sourceMappingURL=app.3304fcb7.js.map