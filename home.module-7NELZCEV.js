import"./chunk-LQJJ74MW.js";import{a as dt,b as pt,c as ut,d as mt,f as ht,g as gt,h as St,i as wt}from"./chunk-OBTVVZPQ.js";import{z as W}from"./chunk-U2PZ57NC.js";import{a as ft}from"./chunk-ZQD7SGU4.js";import"./chunk-UYZ3ES5K.js";import{$ as u,A as T,Bb as M,Eb as x,Fa as L,Fb as it,Fc as at,Gb as N,Hb as P,Sa as q,Ub as ot,W as E,Wa as a,X as J,Ya as w,bb as b,db as h,eb as d,fb as p,ga as v,gb as C,ha as m,ia as X,ka as _,kb as Z,la as $,m as V,ma as G,mb as Q,ob as D,q as S,s as B,t as Y,tb as y,tc as nt,ub as O,uc as rt,vb as tt,wb as et,wc as lt,x as A,yc as st,zc as ct}from"./chunk-T32M5PFD.js";import{a as z,b as j}from"./chunk-5K6JWRWX.js";function Et(e,t,o,i){let n=window&&!!window.document&&window.document.documentElement,r=n&&t?window:o;if(e&&(r=e&&n&&typeof e=="string"?bt(e,o.nativeElement,i):e,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function bt(e,t,o){return(o?window.document:t).querySelector(e)}function F(e){return e&&!e.firstChange}function Ot(){return typeof window<"u"}var Nt={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},Pt={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"},K=class{constructor(t=!0){this.vertical=t,this.propsMap=t?Nt:Pt}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}};function Wt(e,t,o){return!!(e&&t||!o&&t)}function Ft({windowElement:e,axis:t}){return Kt({axis:t,isWindow:Rt(e)},e)}function Kt(e,t){let o=e.isWindow||t&&!t.nativeElement?t:t.nativeElement;return j(z({},e),{container:o})}function Rt(e){return["Window","global"].some(o=>Object.prototype.toString.call(e).includes(o))}function U(e,t){return e?t.document.documentElement:null}function yt(e,t){let o=zt(t);return t.isWindow?kt(o,e,t):Ut(o,e,t)}function kt(e,t,o){let{axis:i,container:n,isWindow:r}=o,{offsetHeightKey:l,clientHeightKey:c}=Tt(i),f=e+Ct(U(r,n),i,r),s=vt(t.nativeElement,r,l,c),g=jt(t.nativeElement,i,r)+s;return{height:e,scrolled:f,totalToScroll:g,isWindow:r}}function Ut(e,t,o){let{axis:i,container:n}=o,r=n[i.scrollTopKey()],l=n[i.scrollHeightKey()];return{height:e,scrolled:r,totalToScroll:l,isWindow:!1}}function Tt(e){return{offsetHeightKey:e.offsetHeightKey(),clientHeightKey:e.clientHeightKey()}}function zt({container:e,isWindow:t,axis:o}){let{offsetHeightKey:i,clientHeightKey:n}=Tt(o);return vt(e,t,i,n)}function vt(e,t,o,i){if(isNaN(e[o])){let n=U(t,e);return n?n[i]:0}else return e[o]}function jt(e,t,o){let i=t.topKey();if(e.getBoundingClientRect)return e.getBoundingClientRect()[i]+Ct(e,t,o)}function Ct(e,t,o){let i=t.pageYOffsetKey(),n=t.scrollTopKey(),r=t.offsetTopKey();return isNaN(window.pageYOffset)?U(o,e)[n]:e.ownerDocument?e.ownerDocument.defaultView[i]:e[r]}function Vt(e,t={down:0,up:0},o){let i,n;if(e.totalToScroll<=0)return!1;let r=e.isWindow?e.scrolled:e.height+e.scrolled;if(o)i=(e.totalToScroll-r)/e.totalToScroll,n=(t?.down?t.down:0)/10;else{let c=e.scrolled+(e.totalToScroll-r);i=e.scrolled/c,n=(t?.up?t.up:0)/10}return i<=n}function Bt(e,t){return e<t.scrolled}function Yt(e,t,o){let i=Bt(e,t);return{fire:Vt(t,o,i),scrollDown:i}}var R=class{constructor({totalToScroll:t}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=t}updateScrollPosition(t){return this.lastScrollPosition=t}updateTotalToScroll(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}updateScroll(t,o){this.updateScrollPosition(t),this.updateTotalToScroll(o)}updateTriggeredFlag(t,o){o?this.triggered.down=t:this.triggered.up=t}isTriggeredScroll(t,o){return o?this.triggered.down===t:this.triggered.up===t}};function At(e){let{scrollContainer:t,scrollWindow:o,element:i,fromRoot:n}=e,r=Ft({axis:new K(!e.horizontal),windowElement:Et(t,o,i,n)}),l=new R({totalToScroll:yt(i,r)}),c={container:r.container,throttle:e.throttle},f={up:e.upDistance,down:e.downDistance};return Jt(c).pipe(B(()=>V(yt(i,r))),S(s=>Xt(l.lastScrollPosition,s,f)),E(({stats:s})=>l.updateScroll(s.scrolled,s.totalToScroll)),T(({fire:s,scrollDown:g,stats:{totalToScroll:It}})=>Wt(e.alwaysCallback,s,l.isTriggeredScroll(It,g))),E(({scrollDown:s,stats:{totalToScroll:g}})=>{l.updateTriggeredFlag(g,s)}),S(_t))}function Jt(e){let t=A(e.container,"scroll");return e.throttle&&(t=t.pipe(J(e.throttle,void 0,{leading:!0,trailing:!0}))),t}function Xt(e,t,o){let{scrollDown:i,fire:n}=Yt(e,t,o);return{scrollDown:i,fire:n,stats:t}}var k={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function _t(e){let{scrollDown:t,stats:{scrolled:o}}=e;return{type:t?k.DOWN:k.UP,payload:{currentScrollPosition:o}}}var Dt=(()=>{let t=class{constructor(i,n){this.element=i,this.zone=n,this.scrolled=new P,this.scrolledUp=new P,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:i,infiniteScrollDisabled:n,infiniteScrollDistance:r}){let l=F(i),c=F(n),f=F(r),s=!c&&!this.infiniteScrollDisabled||c&&!n.currentValue||f;(l||c||f)&&(this.destroyScroller(),s&&this.setup())}setup(){Ot()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=At({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(i=>this.handleOnScroll(i))})}handleOnScroll({type:i,payload:n}){let r=i===k.DOWN?this.scrolled:this.scrolledUp;$t(r)&&this.zone.run(()=>r.emit(n))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)(w(q),w(ot))}})(),(()=>{t.\u0275dir=X({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[_]})})(),e})();function $t(e){return e.observed??e.observers.length>0}var Mt=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275mod=m({type:t})})(),(()=>{t.\u0275inj=u({})})(),e})();function Lt(e,t){if(e&1&&(d(0,"article",4)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),y(4),x(5,"slice"),p(),d(6,"mat-card-subtitle"),y(7),x(8,"date"),p()(),C(9,"img",5),d(10,"mat-card-content")(11,"div",6)(12,"div",7)(13,"div",8)(14,"a",9),y(15),x(16,"slice"),p()()(),d(17,"div",7)(18,"article"),y(19),p()()()()()()),e&2){let o=t.$implicit,i=D(2);a(4),O(N(5,7,o.title,0,100)),a(3),et("",o.author,", ",it(8,11,o.publishedAt),""),a(2),h("ngSrc",o.urlToImage||i.defaultImage),a(5),h("href",o.url,L),a(1),tt("",N(16,13,o.url,0,24),"..."),a(4),O(o.content)}}function qt(e,t){if(e&1){let o=Z();d(0,"section",2),Q("scrolled",function(){$(o);let n=D();return G(n.onScroll())}),b(1,Lt,20,17,"article",3),p()}if(e&2){let o=D();h("infiniteScrollDistance",o.distance)("infiniteScrollThrottle",o.throttle)("infiniteScrollContainer",o.selector)("fromRoot",!0),a(1),h("ngForOf",o.items)("ngForTrackBy",o.trackByFn)}}var xt=(()=>{let t=class{constructor(i){this.appService=i,this.allItems=[],this.items=[],this.selector=".main-panel",this.throttle=0,this.distance=2,this.page=1,this.perPage=100,this.ngSrcset="640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w",this.defaultImage="assets/img/no-image-icon.png"}ngOnInit(){this.items$=this.appService.getNews().pipe(S(i=>i.articles),Y(),T(i=>i.urlToImage!==null)),this.items$.subscribe({next:i=>{i&&(this.allItems=i,this.items.push(i))}})}onScroll(){this.page<this.items.total_pages&&(this.items=this.appService.paginator(this.allItems,++this.page,this.perPage))}trackByFn(i,n){return n.title}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)(w(ft))}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-news"]],standalone:!0,features:[M],decls:2,vars:1,consts:[[1,"container"],["class","row main-panel","infinite-scroll","",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollContainer","fromRoot","scrolled",4,"ngIf"],["infinite-scroll","",1,"row","main-panel",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollContainer","fromRoot","scrolled"],["class","col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-12","col-xs-12","col-sm-12","col-md-6","col-lg-4","col-xl-3","col-xxl-3"],["mat-card-image","","alt","Photo","lazy","","fill","","sizes","100vw",1,"app-card-image",3,"ngSrc"],[1,"row"],[1,"col-12"],[1,"app-card-url"],["target","_blank","rel","noopener noreferrer",3,"href"]],template:function(n,r){n&1&&(d(0,"div",0),b(1,qt,2,6,"section",1),p()),n&2&&(a(1),h("ngIf",r.items))},dependencies:[rt,Mt,Dt,nt,St,dt,ut,ht,gt,mt,pt,st,lt,at],styles:[".app-card-image[_ngcontent-%COMP%]{max-height:300px;position:relative!important}.app-card-url[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}"]})})(),e})();var I=(()=>{let t=class{constructor(){}ngOnInit(){}},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275cmp=v({type:t,selectors:[["app-home-view"]],standalone:!0,features:[M],decls:2,vars:0,consts:[["icon","home","title","Home"]],template:function(n,r){n&1&&C(0,"app-header-view",0)(1,"app-news")},dependencies:[wt,xt]})})(),e})();var Qt=[{path:"",component:I}],Ht=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275mod=m({type:t})})(),(()=>{t.\u0275inj=u({imports:[W.forChild(Qt),W]})})(),e})();var be=(()=>{let t=class{},e=t;return(()=>{t.\u0275fac=function(n){return new(n||t)}})(),(()=>{t.\u0275mod=m({type:t})})(),(()=>{t.\u0275inj=u({imports:[ct,Ht,I]})})(),e})();export{be as HomeModule};
