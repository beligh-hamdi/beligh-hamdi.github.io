"use strict";(self.webpackChunkbeligh_hamdi=self.webpackChunkbeligh_hamdi||[]).push([[63],{5063:(xt,y,s)=>{s.r(y),s.d(y,{HomeModule:()=>Ct});var g=s(4755),D=s(9812),m=s(4004),U=s(8189),C=s(9300),d=s(6012),n=s(2223),F=s(9646),K=s(4968),z=s(5577),x=s(8505),A=s(4986),R=s(4482),H=s(5403),b=s(8421),Y=s(5963);function J(t,e,o,i){const l=window&&!!window.document&&window.document.documentElement;let r=l&&e?window:o;if(t&&(r=t&&l&&"string"==typeof t?function V(t,e,o){return(o?window.document:e).querySelector(t)}(t,o.nativeElement,i):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function S(t){return t&&!t.firstChange}const L={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},Q={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class X{constructor(e=!0){this.vertical=e,this.propsMap=e?L:Q}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function q(t){return["Window","global"].some(o=>Object.prototype.toString.call(t).includes(o))}function w(t,e){return t?e.document.documentElement:null}function I(t,e){const o=function et({container:t,isWindow:e,axis:o}){const{offsetHeightKey:i,clientHeightKey:l}=O(o);return N(t,e,i,l)}(e);return e.isWindow?function _(t,e,o){const{axis:i,container:l,isWindow:r}=o,{offsetHeightKey:c,clientHeightKey:u}=O(i),a=t+M(w(r,l),i,r),f=N(e.nativeElement,r,c,u),p=function ot(t,e,o){const i=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[i]+M(t,e,o)}(e.nativeElement,i,r)+f;return{height:t,scrolled:a,totalToScroll:p,isWindow:r}}(o,t,e):function tt(t,e,o){const{axis:i,container:l}=o;return{height:t,scrolled:l[i.scrollTopKey()],totalToScroll:l[i.scrollHeightKey()],isWindow:!1}}(o,0,e)}function O(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function N(t,e,o,i){if(isNaN(t[o])){const l=w(e,t);return l?l[i]:0}return t[o]}function M(t,e,o){const i=e.pageYOffsetKey(),l=e.scrollTopKey(),r=e.offsetTopKey();return isNaN(window.pageYOffset)?w(o,t)[l]:t.ownerDocument?t.ownerDocument.defaultView[i]:t[r]}function nt(t,e={down:0,up:0},o){let i,l;if(t.totalToScroll<=0)return!1;const r=t.isWindow?t.scrolled:t.height+t.scrolled;return o?(i=(t.totalToScroll-r)/t.totalToScroll,l=(e?.down?e.down:0)/10):(i=t.scrolled/(t.scrolled+(t.totalToScroll-r)),l=(e?.up?e.up:0)/10),i<=l}class ct{constructor({totalToScroll:e}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=e}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,o){this.updateScrollPosition(e),this.updateTotalToScroll(o)}updateTriggeredFlag(e,o){o?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,o){return o?this.triggered.down===e:this.triggered.up===e}}function at(t){const{scrollContainer:e,scrollWindow:o,element:i,fromRoot:l}=t,r=function $({windowElement:t,axis:e}){return function k(t,e){const o=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return{...t,container:o}}({axis:e,isWindow:q(t)},t)}({axis:new X(!t.horizontal),windowElement:J(e,o,i,l)}),c=new ct({totalToScroll:I(i,r)}),a={up:t.upDistance,down:t.downDistance};return function ft(t){let e=(0,K.R)(t.container,"scroll");return t.throttle&&(e=e.pipe(function B(t,e=A.z,o){const i=(0,Y.H)(t,e);return function Z(t,e){return(0,R.e)((o,i)=>{const{leading:l=!0,trailing:r=!1}=e??{};let c=!1,u=null,a=null,f=!1;const p=()=>{a?.unsubscribe(),a=null,r&&(P(),f&&i.complete())},v=()=>{a=null,f&&i.complete()},E=h=>a=(0,b.Xf)(t(h)).subscribe((0,H.x)(i,p,v)),P=()=>{if(c){c=!1;const h=u;u=null,i.next(h),!f&&E(h)}};o.subscribe((0,H.x)(i,h=>{c=!0,u=h,(!a||a.closed)&&(l?P():E(h))},()=>{f=!0,(!(r&&c&&a)||a.closed)&&i.complete()}))})}(()=>i,o)}(t.throttle,void 0,{leading:!0,trailing:!0}))),e}({container:r.container,throttle:t.throttle}).pipe((0,z.z)(()=>(0,F.of)(I(i,r))),(0,m.U)(f=>function ut(t,e,o){const{scrollDown:i,fire:l}=function lt(t,e,o){const i=function it(t,e){return t<e.scrolled}(t,e);return{fire:nt(e,o,i),scrollDown:i}}(t,e,o);return{scrollDown:i,fire:l,stats:e}}(c.lastScrollPosition,f,a)),(0,x.b)(({stats:f})=>c.updateScroll(f.scrolled,f.totalToScroll)),(0,C.h)(({fire:f,scrollDown:p,stats:{totalToScroll:v}})=>function G(t,e,o){return!!(t&&e||!o&&e)}(t.alwaysCallback,f,c.isTriggeredScroll(v,p))),(0,x.b)(({scrollDown:f,stats:{totalToScroll:p}})=>{c.updateTriggeredFlag(p,f)}),(0,m.U)(dt))}const T={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function dt(t){const{scrollDown:e,stats:{scrolled:o}}=t;return{type:e?T.DOWN:T.UP,payload:{currentScrollPosition:o}}}let pt=(()=>{class t{constructor(o,i){this.element=o,this.zone=i,this.scrolled=new n.vpe,this.scrolledUp=new n.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:o,infiniteScrollDisabled:i,infiniteScrollDistance:l}){const r=S(o),c=S(i),u=S(l),a=!c&&!this.infiniteScrollDisabled||c&&!i.currentValue||u;(r||c||u)&&(this.destroyScroller(),a&&this.setup())}setup(){(function j(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=at({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(o=>this.handleOnScroll(o))})}handleOnScroll({type:o,payload:i}){const l=o===T.DOWN?this.scrolled:this.scrolledUp;(function ht(t){return t.observed??t.observers.length>0})(l)&&this.zone.run(()=>l.emit(i))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(n.SBq),n.Y36(n.R0b))},t.\u0275dir=n.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[n.TTD]}),t})(),gt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({}),t})();var mt=s(9288);function St(t,e){if(1&t&&(n.TgZ(0,"article",4)(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title"),n._uU(4),n.ALo(5,"slice"),n.qZA(),n.TgZ(6,"mat-card-subtitle"),n._uU(7),n.ALo(8,"date"),n.qZA()(),n._UZ(9,"img",5),n.TgZ(10,"mat-card-content")(11,"div",6)(12,"div",7)(13,"div",8)(14,"a",9),n._uU(15),n.ALo(16,"slice"),n.qZA()()(),n.TgZ(17,"div",7)(18,"article"),n._uU(19),n.qZA()()()()()()),2&t){const o=e.$implicit,i=n.oxw(2);n.xp6(4),n.Oqu(n.Dn7(5,7,o.title,0,100)),n.xp6(3),n.AsE("",o.author,", ",n.lcZ(8,11,o.publishedAt),""),n.xp6(2),n.Q6J("ngSrc",o.urlToImage||i.defaultImage),n.xp6(5),n.Q6J("href",o.url,n.LSH),n.xp6(1),n.hij("",n.Dn7(16,13,o.url,0,24),"..."),n.xp6(4),n.Oqu(o.content)}}function wt(t,e){if(1&t){const o=n.EpF();n.TgZ(0,"section",2),n.NdJ("scrolled",function(){n.CHM(o);const l=n.oxw();return n.KtG(l.onScroll())}),n.YNc(1,St,20,17,"article",3),n.qZA()}if(2&t){const o=n.oxw();n.Q6J("infiniteScrollDistance",o.distance)("infiniteScrollThrottle",o.throttle)("infiniteScrollContainer",o.selector)("fromRoot",!0),n.xp6(1),n.Q6J("ngForOf",o.items)("ngForTrackBy",o.trackByFn)}}let Tt=(()=>{class t{constructor(o){this.appService=o,this.allItems=[],this.items=[],this.selector=".main-panel",this.throttle=0,this.distance=2,this.page=1,this.perPage=100,this.ngSrcset="640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w",this.defaultImage="assets/img/no-image-icon.png"}ngOnInit(){this.items$=this.appService.getNews().pipe((0,m.U)(o=>o.articles),(0,U.J)(),(0,C.h)(o=>null!==o.urlToImage)),this.items$.subscribe({next:o=>{o&&(this.allItems=o,this.items.push(o))}})}onScroll(){this.page<this.items.total_pages&&(this.items=this.appService.paginator(this.allItems,++this.page,this.perPage))}trackByFn(o,i){return i.title}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(mt.z))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-news"]],standalone:!0,features:[n.jDz],decls:2,vars:1,consts:[[1,"container"],["class","row main-panel","infinite-scroll","",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollContainer","fromRoot","scrolled",4,"ngIf"],["infinite-scroll","",1,"row","main-panel",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollContainer","fromRoot","scrolled"],["class","col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-12","col-xs-12","col-sm-12","col-md-6","col-lg-4","col-xl-3","col-xxl-3"],["mat-card-image","","alt","Photo","lazy","","fill","","sizes","100vw",1,"app-card-image",3,"ngSrc"],[1,"row"],[1,"col-12"],[1,"app-card-url"],["target","_blank","rel","noopener noreferrer",3,"href"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0),n.YNc(1,wt,2,6,"section",1),n.qZA()),2&o&&(n.xp6(1),n.Q6J("ngIf",i.items))},dependencies:[g.O5,gt,pt,g.ax,d.QW,d.a8,d.dn,d.dk,d.G2,d.$j,d.n5,g.OU,g.uU,g.Zd],styles:[".app-card-image[_ngcontent-%COMP%]{max-height:300px;position:relative!important}.app-card-url[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px}"]}),t})();var vt=s(2051);let W=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home-view"]],standalone:!0,features:[n.jDz],decls:2,vars:0,consts:[["icon","home","title","Home"]],template:function(o,i){1&o&&n._UZ(0,"app-header-view",0)(1,"app-news")},dependencies:[vt.S,Tt]}),t})();const yt=[{path:"",component:W}];let Dt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[D.Bz.forChild(yt),D.Bz]}),t})(),Ct=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.ez,Dt,W]}),t})()}}]);