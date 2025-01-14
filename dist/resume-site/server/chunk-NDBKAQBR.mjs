import './polyfills.server.mjs';
import{$ as y2,A as z0,Aa as S0,B as p1,Ba as w0,C as u1,Ca as T0,D as h1,Da as D0,E as L2,Ea as k0,F as M2,G as C2,H as B1,Ha as E0,I as v1,J as H1,K,L as j,La as O0,M as L0,Ma as A0,N as G1,O as _,Oa as R0,P as k,Pa as Q1,Q as _2,Qa as P0,R as M0,S as V1,T as b2,U as n1,V as b,W as s1,X as U1,Y as r,Z as f,_ as M,a as P1,aa as x1,b as F,ba as R,c as r0,ca as j1,d as u2,da as W1,e as h2,ea as $1,f as V,fa as C0,g as f0,ga as N1,h as b1,ha as S1,i as d0,ia as d,j as I1,ja as _0,k as y1,ka as b0,l as m0,la as y0,m as p0,ma as N,n as T,o as u0,oa as v0,p as g2,q as D,r as y,s as h0,sa as v2,t as F1,u as L,ua as q1,v as g0,va as x0,w as x,wa as i1,x as v,y as U,ya as Y1,z as z2,za as N0}from"./chunk-63MIO7B7.mjs";import{a as p2,b as o0}from"./chunk-VVCT4QZE.mjs";function x2(c){c||(z0(x2),c=L(H1));let s=new P1(e=>c.onDestroy(e.next.bind(e)));return e=>e.pipe(T(s))}var P4=["*"];var I4=["dialog"];var I0={animation:!0,transitionTimerDelayMs:5},F0=(()=>{class c{constructor(){this.animation=I0.animation}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();function F4(c){let{transitionDelay:s,transitionDuration:e}=window.getComputedStyle(c),t=parseFloat(s),n=parseFloat(e);return(t+n)*1e3}function B0(c){return typeof c=="string"}function a1(c){return c!=null}function B4(c){return c&&c.then}function H0(c){return(c||document.body).getBoundingClientRect()}function H4(c){return s=>new P1(e=>{let t=l=>c.run(()=>e.next(l)),n=l=>c.run(()=>e.error(l)),i=()=>c.run(()=>e.complete());return s.subscribe({next:t,error:n,complete:i})})}var G4=()=>{},{transitionTimerDelayMs:V4}=I0,J1=new Map,l1=(c,s,e,t)=>{let n=t.context||{},i=J1.get(s);if(i)switch(t.runningTransition){case"continue":return r0;case"stop":c.run(()=>i.transition$.complete()),n=Object.assign(i.context,n),J1.delete(s)}let l=e(s,t.animation,n)||G4;if(!t.animation||window.getComputedStyle(s).transitionProperty==="none")return c.run(()=>l()),u2(void 0).pipe(H4(c));let a=new F,p=new F,m=a.pipe(m0(!0));J1.set(s,{transition$:a,complete:()=>{p.next(),p.complete()},context:n});let h=F4(s);return c.runOutsideAngular(()=>{let z=V(s,"transitionend").pipe(T(m),b1(({target:S})=>S===s)),g=f0(h+V4).pipe(T(m));d0(g,z,p).pipe(T(m)).subscribe(()=>{J1.delete(s),c.run(()=>{l(),a.next(),a.complete()})})}),a.asObservable()};var G0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var V0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var U0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})(),j0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var W=function(c){return c[c.Tab=9]="Tab",c[c.Enter=13]="Enter",c[c.Escape=27]="Escape",c[c.Space=32]="Space",c[c.PageUp=33]="PageUp",c[c.PageDown=34]="PageDown",c[c.End=35]="End",c[c.Home=36]="Home",c[c.ArrowLeft=37]="ArrowLeft",c[c.ArrowUp=38]="ArrowUp",c[c.ArrowRight=39]="ArrowRight",c[c.ArrowDown=40]="ArrowDown",c}(W||{});var qc=(()=>{let c=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,s=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(c()||s()):!1})();var U4=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function W0(c){let s=Array.from(c.querySelectorAll(U4)).filter(e=>e.tabIndex!==-1);return[s[0],s[s.length-1]]}var j4=(c,s,e,t=!1)=>{c.runOutsideAngular(()=>{let n=V(s,"focusin").pipe(T(e),h2(i=>i.target));V(s,"keydown").pipe(T(e),b1(i=>i.which===W.Tab),g2(n)).subscribe(([i,l])=>{let[a,p]=W0(s);(l===a||l===s)&&i.shiftKey&&(p.focus(),i.preventDefault()),l===p&&!i.shiftKey&&(a.focus(),i.preventDefault())}),t&&V(s,"click").pipe(T(e),g2(n),h2(i=>i[1])).subscribe(i=>i.focus())})};var Yc=new Date(1882,10,12),Qc=new Date(2174,10,25);var Jc=1e3*60*60*24;var w2=1080,W4=24*w2,$4=12*w2+793,Kc=29*W4+$4,Xc=11*w2+204;var $0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var q0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})(),q4=(()=>{class c{constructor(){this._ngbConfig=L(F0),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),g1=class{constructor(s,e,t){this.nodes=s,this.viewRef=e,this.componentRef=t}};var Y4=(()=>{class c{constructor(){this._document=L(i1)}hide(){let e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),t=this._document.body,n=t.style,{overflow:i,paddingRight:l}=n;if(e>0){let a=parseFloat(window.getComputedStyle(t).paddingRight);n.paddingRight=`${a+e}px`}return n.overflow="hidden",()=>{e>0&&(n.paddingRight=l),n.overflow=i}}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),Q4=(()=>{class c{constructor(){this._nativeElement=L(K).nativeElement,this._zone=L(V1)}ngOnInit(){this._zone.onStable.asObservable().pipe(y1(1)).subscribe(()=>{l1(this._zone,this._nativeElement,(e,t)=>{t&&H0(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return l1(this._zone,this._nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=x({type:c,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(t,n){t&2&&(U1("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),s1("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[N],decls:0,vars:0,template:function(t,n){},encapsulation:2})}}return c})(),K1=class{update(s){}close(s){}dismiss(s){}},J4=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],K4=["animation","backdropClass"],N2=class{_applyWindowOptions(s,e){J4.forEach(t=>{a1(e[t])&&(s[t]=e[t])})}_applyBackdropOptions(s,e){K4.forEach(t=>{a1(e[t])&&(s[t]=e[t])})}update(s){this._applyWindowOptions(this._windowCmptRef.instance,s),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,s)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(T(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(T(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(s,e,t,n){this._windowCmptRef=s,this._contentRef=e,this._backdropCmptRef=t,this._beforeDismiss=n,this._closed=new F,this._dismissed=new F,this._hidden=new F,s.instance.dismissEvent.subscribe(i=>{this.dismiss(i)}),this.result=new Promise((i,l)=>{this._resolve=i,this._reject=l}),this.result.then(null,()=>{})}close(s){this._windowCmptRef&&(this._closed.next(s),this._resolve(s),this._removeModalElements())}_dismiss(s){this._dismissed.next(s),this._reject(s),this._removeModalElements()}dismiss(s){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(s);else{let e=this._beforeDismiss();B4(e)?e.then(t=>{t!==!1&&this._dismiss(s)},()=>{}):e!==!1&&this._dismiss(s)}}_removeModalElements(){let s=this._windowCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():u2(void 0);s.subscribe(()=>{let{nativeElement:t}=this._windowCmptRef.location;t.parentNode.removeChild(t),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),I1(s,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},S2=function(c){return c[c.BACKDROP_CLICK=0]="BACKDROP_CLICK",c[c.ESC=1]="ESC",c}(S2||{}),X4=(()=>{class c{constructor(){this._document=L(i1),this._elRef=L(K),this._zone=L(V1),this._closed$=new F,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new j,this.shown=new F,this.hidden=new F}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":B0(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(y1(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:e}=this._elRef,t={animation:this.animation,runningTransition:"stop"},n=l1(this._zone,e,()=>e.classList.remove("show"),t),i=l1(this._zone,this._dialogEl.nativeElement,()=>{},t),l=I1(n,i);return l.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),l}_show(){let e={animation:this.animation,runningTransition:"continue"},t=l1(this._zone,this._elRef.nativeElement,(i,l)=>{l&&H0(i),i.classList.add("show")},e),n=l1(this._zone,this._dialogEl.nativeElement,()=>{},e);I1(t,n).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{V(e,"keydown").pipe(T(this._closed$),b1(n=>n.which===W.Escape)).subscribe(n=>{this.keyboard?requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(S2.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let t=!1;V(this._dialogEl.nativeElement,"mousedown").pipe(T(this._closed$),u0(()=>t=!1),p0(()=>V(e,"mouseup").pipe(T(this._closed$),y1(1))),b1(({target:n})=>e===n)).subscribe(()=>{t=!0}),V(e,"click").pipe(T(this._closed$)).subscribe(({target:n})=>{e===n&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!t&&this._zone.run(()=>this.dismiss(S2.BACKDROP_CLICK))),t=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){let t=e.querySelector("[ngbAutofocus]"),n=W0(e)[0];(t||n||e).focus()}}_restoreFocus(){let e=this._document.body,t=this._elWithFocus,n;t&&t.focus&&e.contains(t)?n=t:n=e,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&l1(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=x({type:c,selectors:[["ngb-modal-window"]],viewQuery:function(t,n){if(t&1&&C0(I4,7),t&2){let i;N1(i=S1())&&(n._dialogEl=i.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(t,n){t&2&&(n1("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),U1("modal d-block"+(n.windowClass?" "+n.windowClass:"")),s1("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[N],ngContentSelectors:P4,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(t,n){t&1&&(j1(),r(0,"div",1,0)(2,"div",2),W1(3),f()()),t&2&&U1("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2})}}return c})(),Z4=(()=>{class c{constructor(){this._applicationRef=L(v0),this._injector=L(v1),this._environmentInjector=L(z2),this._document=L(i1),this._scrollBar=L(Y4),this._activeWindowCmptHasChanged=new F,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new j;let e=L(V1);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let t=this._windowCmpts[this._windowCmpts.length-1];j4(e,t.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(t.location.nativeElement)}})}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,t,n){let i=n.container instanceof HTMLElement?n.container:a1(n.container)?this._document.querySelector(n.container):this._document.body;if(!i)throw new Error(`The specified modal container "${n.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let l=new K1;e=n.injector||e;let a=e.get(z2,null)||this._environmentInjector,p=this._getContentRef(e,a,t,l,n),m=n.backdrop!==!1?this._attachBackdrop(i):void 0,h=this._attachWindowComponent(i,p.nodes),z=new N2(h,p,m,n.beforeDismiss);return this._registerModalRef(z),this._registerWindowCmpt(h),z.hidden.pipe(y1(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),l.close=g=>{z.close(g)},l.dismiss=g=>{z.dismiss(g)},l.update=g=>{z.update(g)},z.update(n),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),m&&m.instance&&m.changeDetectorRef.detectChanges(),h.changeDetectorRef.detectChanges(),z}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(t=>t.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let t=q1(Q4,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(t.hostView),e.appendChild(t.location.nativeElement),t}_attachWindowComponent(e,t){let n=q1(X4,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:t});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_getContentRef(e,t,n,i,l){return n?n instanceof _2?this._createFromTemplateRef(n,i):B0(n)?this._createFromString(n):this._createFromComponent(e,t,n,i,l):new g1([])}_createFromTemplateRef(e,t){let n={$implicit:t,close(l){t.close(l)},dismiss(l){t.dismiss(l)}},i=e.createEmbeddedView(n);return this._applicationRef.attachView(i),new g1([i.rootNodes],i)}_createFromString(e){let t=this._document.createTextNode(`${e}`);return new g1([[t]])}_createFromComponent(e,t,n,i,l){let a=v1.create({providers:[{provide:K1,useValue:i}],parent:e}),p=q1(n,{environmentInjector:t,elementInjector:a}),m=p.location.nativeElement;return l.scrollable&&m.classList.add("component-host-scrollable"),this._applicationRef.attachView(p.hostView),new g1([[m]],p.hostView,p)}_setAriaHidden(e){let t=e.parentElement;t&&e!==this._document.body&&(Array.from(t.children).forEach(n=>{n!==e&&n.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}),this._setAriaHidden(t))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,t)=>{e?t.setAttribute("aria-hidden",e):t.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){let t=()=>{let n=this._modalRefs.indexOf(e);n>-1&&(this._modalRefs.splice(n,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(t,t)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{let t=this._windowCmpts.indexOf(e);t>-1&&(this._windowCmpts.splice(t,1),this._activeWindowCmptHasChanged.next())})}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),c6=(()=>{class c{constructor(){this._injector=L(v1),this._modalStack=L(Z4),this._config=L(q4)}open(e,t={}){let n=p2(o0(p2({},this._config),{animation:this._config.animation}),t);return this._modalStack.open(this._injector,e,n)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),Y0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({providers:[c6]})}}return c})(),e6=(()=>{class c{constructor(){this._ngbConfig=L(F0),this.destroyOnHide=!0,this.orientation="horizontal",this.roles="tablist",this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),Q0=c=>a1(c)&&c!=="",t6=0,n6=(()=>{class c{constructor(){this.templateRef=L(_2)}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275dir=U({type:c,selectors:[["ng-template","ngbNavContent",""]],standalone:!0})}}return c})(),J0=(()=>{class c{constructor(e){this.role=e,this.nav=L(w1)}static{this.\u0275fac=function(t){return new(t||c)(B1("role"))}}static{this.\u0275dir=U({type:c,selectors:[["","ngbNavItem","",5,"ng-container"]],hostVars:1,hostBindings:function(t,n){t&2&&n1("role",n.role?n.role:n.nav.roles?"presentation":void 0)},standalone:!0})}}return c})(),X1=(()=>{class c{constructor(){this._nav=L(w1),this._nativeElement=L(K).nativeElement,this.disabled=!1,this.shown=new j,this.hidden=new j}ngAfterContentChecked(){this.contentTpl=this.contentTpls.first}ngOnInit(){a1(this.domId)||(this.domId=`ngb-nav-${t6++}`)}get active(){return this._nav.activeId===this.id}get id(){return Q0(this._id)?this._id:this.domId}get panelDomId(){return`${this.domId}-panel`}isPanelInDom(){return(a1(this.destroyOnHide)?!this.destroyOnHide:!this._nav.destroyOnHide)||this.active}isNgContainer(){return this._nativeElement.nodeType===Node.COMMENT_NODE}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275dir=U({type:c,selectors:[["","ngbNavItem",""]],contentQueries:function(t,n,i){if(t&1&&$1(i,n6,4),t&2){let l;N1(l=S1())&&(n.contentTpls=l)}},hostVars:2,hostBindings:function(t,n){t&2&&s1("nav-item",!0)},inputs:{destroyOnHide:"destroyOnHide",disabled:"disabled",domId:"domId",_id:[g0.None,"ngbNavItem","_id"]},outputs:{shown:"shown",hidden:"hidden"},exportAs:["ngbNavItem"],standalone:!0})}}return c})(),w1=(()=>{class c{constructor(e){this.role=e,this._config=L(e6),this._cd=L(v2),this._document=L(i1),this._nativeElement=L(K).nativeElement,this.destroyRef=L(H1),this._navigatingWithKeyboard=!1,this.activeIdChange=new j,this.animation=this._config.animation,this.destroyOnHide=this._config.destroyOnHide,this.orientation=this._config.orientation,this.roles=this._config.roles,this.keyboard=this._config.keyboard,this.shown=new j,this.hidden=new j,this.navItemChange$=new F,this.navChange=new j}click(e){e.disabled||this._updateActiveId(e.id)}onFocusout({relatedTarget:e}){this._nativeElement.contains(e)||(this._navigatingWithKeyboard=!1)}onKeyDown(e){if(this.roles!=="tablist"||!this.keyboard)return;let t=e.which,n=this.links.filter(a=>!a.navItem.disabled),{length:i}=n,l=-1;if(n.forEach((a,p)=>{a.nativeElement===this._document.activeElement&&(l=p)}),i){switch(t){case W.ArrowUp:case W.ArrowLeft:l=(l-1+i)%i;break;case W.ArrowRight:case W.ArrowDown:l=(l+1)%i;break;case W.Home:l=0;break;case W.End:l=i-1;break}this.keyboard==="changeWithArrows"&&this.select(n[l].navItem.id),n[l].nativeElement.focus(),this._navigatingWithKeyboard=!0,e.preventDefault()}}select(e){this._updateActiveId(e,!1)}ngAfterContentInit(){if(!a1(this.activeId)){let e=this.items.first?this.items.first.id:null;Q0(e)&&(this._updateActiveId(e,!1),this._cd.detectChanges())}this.items.changes.pipe(x2(this.destroyRef)).subscribe(()=>this._notifyItemChanged(this.activeId))}ngOnChanges({activeId:e}){e&&!e.firstChange&&this._notifyItemChanged(e.currentValue)}_updateActiveId(e,t=!0){if(this.activeId!==e){let n=!1;t&&this.navChange.emit({activeId:this.activeId,nextId:e,preventDefault:()=>{n=!0}}),n||(this.activeId=e,this.activeIdChange.emit(e),this._notifyItemChanged(e))}}_notifyItemChanged(e){this.navItemChange$.next(this._getItemById(e))}_getItemById(e){return this.items&&this.items.find(t=>t.id===e)||null}static{this.\u0275fac=function(t){return new(t||c)(B1("role"))}}static{this.\u0275dir=U({type:c,selectors:[["","ngbNav",""]],contentQueries:function(t,n,i){if(t&1&&($1(i,X1,4),$1(i,Z1,5)),t&2){let l;N1(l=S1())&&(n.items=l),N1(l=S1())&&(n.links=l)}},hostVars:6,hostBindings:function(t,n){t&1&&R("keydown.arrowLeft",function(l){return n.onKeyDown(l)})("keydown.arrowRight",function(l){return n.onKeyDown(l)})("keydown.arrowDown",function(l){return n.onKeyDown(l)})("keydown.arrowUp",function(l){return n.onKeyDown(l)})("keydown.Home",function(l){return n.onKeyDown(l)})("keydown.End",function(l){return n.onKeyDown(l)})("focusout",function(l){return n.onFocusout(l)}),t&2&&(n1("aria-orientation",n.orientation==="vertical"&&n.roles==="tablist"?"vertical":void 0)("role",n.role?n.role:n.roles?"tablist":void 0),s1("nav",!0)("flex-column",n.orientation==="vertical"))},inputs:{activeId:"activeId",animation:"animation",destroyOnHide:"destroyOnHide",orientation:"orientation",roles:"roles",keyboard:"keyboard"},outputs:{activeIdChange:"activeIdChange",shown:"shown",hidden:"hidden",navChange:"navChange"},exportAs:["ngbNav"],standalone:!0,features:[p1]})}}return c})(),Z1=(()=>{class c{constructor(e){this.role=e,this.navItem=L(X1),this.nav=L(w1),this.nativeElement=L(K).nativeElement}get tabindex(){return this.nav.keyboard===!1?this.navItem.disabled?-1:void 0:this.nav._navigatingWithKeyboard||this.navItem.disabled||!this.navItem.active?-1:void 0}static{this.\u0275fac=function(t){return new(t||c)(B1("role"))}}static{this.\u0275dir=U({type:c,selectors:[["","ngbNavLink",""]],hostVars:14,hostBindings:function(t,n){t&2&&(x1("id",n.navItem.domId),n1("role",n.role?n.role:n.nav.roles?"tab":void 0)("tabindex",n.tabindex)("aria-controls",n.navItem.isPanelInDom()?n.navItem.panelDomId:null)("aria-selected",n.navItem.active)("aria-disabled",n.navItem.disabled),s1("nav-link",!0)("nav-item",n.navItem.isNgContainer())("active",n.navItem.active)("disabled",n.navItem.disabled))},standalone:!0})}}return c})(),K0=(()=>{class c extends Z1{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=C2(c)))(n||c)}})()}static{this.\u0275dir=U({type:c,selectors:[["button","ngbNavLink",""]],hostAttrs:["type","button"],hostVars:1,hostBindings:function(t,n){t&1&&R("click",function(){return n.nav.click(n.navItem)}),t&2&&x1("disabled",n.navItem.disabled)},standalone:!0,features:[b2]})}}return c})();var X0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var Z0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var c3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var e3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var t3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var n3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var s3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var i3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var l3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var Zc=new h0("live announcer delay",{providedIn:"root",factory:()=>100});var a3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var o3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})(),s6=[G0,V0,U0,j0,$0,q0,Y0,X0,o3,Z0,c3,e3,t3,n3,s3,i3,l3,a3],c2=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({imports:[s6,G0,V0,U0,j0,$0,q0,Y0,X0,o3,Z0,c3,e3,t3,n3,s3,i3,l3,a3]})}}return c})();var f3=(()=>{class c{clearThemes(){this.document.body.classList.remove(O.LIGHT),this.document.body.classList.remove(O.DARK)}init(){let e=null;typeof window<"u"&&(e=O[localStorage.getItem(r3)],console.log("Initial theme: "+e),e==null&&(window.matchMedia("(prefers-color-scheme: dark)").matches?e=O.DARK:e=O.LIGHT)),this.currentTheme=e??O.LIGHT,this.clearThemes(),this.document.body.classList.add(this.currentTheme)}toggleTheme(){this.clearThemes();let e=this.currentTheme===O.LIGHT?O.DARK:O.LIGHT;this.currentTheme=e,this.document.body.classList.add(e),localStorage.setItem(r3,e.toUpperCase())}constructor(e){this.document=e,this.currentTheme=O.LIGHT,this.init()}static{this.\u0275fac=function(t){return new(t||c)(F1(i1))}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),r3="preferredTheme",O=function(c){return c.LIGHT="light",c.DARK="dark",c}(O||{});var d3={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]};var m3={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};function a6(c,s,e){return(s=r6(s))in c?Object.defineProperty(c,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[s]=e,c}function p3(c,s){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(c);s&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,t)}return e}function o(c){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?p3(Object(e),!0).forEach(function(t){a6(c,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):p3(Object(e)).forEach(function(t){Object.defineProperty(c,t,Object.getOwnPropertyDescriptor(e,t))})}return c}function o6(c,s){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var t=e.call(c,s||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(c)}function r6(c){var s=o6(c,"string");return typeof s=="symbol"?s:s+""}var u3=()=>{},K2={},H3={},G3=null,V3={mark:u3,measure:u3};try{typeof window<"u"&&(K2=window),typeof document<"u"&&(H3=document),typeof MutationObserver<"u"&&(G3=MutationObserver),typeof performance<"u"&&(V3=performance)}catch{}var{userAgent:h3=""}=K2.navigator||{},Z=K2,C=H3,g3=G3,e2=V3,ne=!!Z.document,Q=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",U3=~h3.indexOf("MSIE")||~h3.indexOf("Trident/"),f6=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,d6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,j3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},m6={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},W3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w="classic",a2="duotone",p6="sharp",u6="sharp-duotone",$3=[w,a2,p6,u6],h6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},g6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},z6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),L6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},M6=["fak","fa-kit","fakd","fa-kit-duotone"],z3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},C6=["kit"],_6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},b6=["fak","fakd"],y6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},L3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},t2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},v6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],x6=["fak","fa-kit","fakd","fa-kit-duotone"],N6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},S6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},w6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},A2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},T6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],R2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...v6,...T6],D6=["solid","regular","light","thin","duotone","brands"],q3=[1,2,3,4,5,6,7,8,9,10],k6=q3.concat([11,12,13,14,15,16,17,18,19,20]),E6=[...Object.keys(w6),...D6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",t2.GROUP,t2.SWAP_OPACITY,t2.PRIMARY,t2.SECONDARY].concat(q3.map(c=>"".concat(c,"x"))).concat(k6.map(c=>"w-".concat(c))),O6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},q="___FONT_AWESOME___",P2=16,Y3="fa",Q3="svg-inline--fa",r1="data-fa-i2svg",I2="data-fa-pseudo-element",A6="data-fa-pseudo-element-pending",X2="data-prefix",Z2="data-icon",M3="fontawesome-i2svg",R6="async",P6=["HTML","HEAD","STYLE","SCRIPT"],J3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function A1(c){return new Proxy(c,{get(s,e){return e in s?s[e]:s[w]}})}var K3=o({},j3);K3[w]=o(o(o(o({},{"fa-duotone":"duotone"}),j3[w]),z3.kit),z3["kit-duotone"]);var I6=A1(K3),F2=o({},L6);F2[w]=o(o(o(o({},{duotone:"fad"}),F2[w]),L3.kit),L3["kit-duotone"]);var C3=A1(F2),B2=o({},A2);B2[w]=o(o({},B2[w]),y6.kit);var c0=A1(B2),H2=o({},S6);H2[w]=o(o({},H2[w]),_6.kit);var se=A1(H2),F6=f6,X3="fa-layers-text",B6=d6,H6=o({},h6),ie=A1(H6),G6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],T2=m6,V6=[...C6,...E6],D1=Z.FontAwesomeConfig||{};function U6(c){var s=C.querySelector("script["+c+"]");if(s)return s.getAttribute(c)}function j6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[e,t]=s,n=j6(U6(e));n!=null&&(D1[t]=n)});var Z3={styleDefault:"solid",familyDefault:w,cssPrefix:Y3,replacementClass:Q3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};D1.familyPrefix&&(D1.cssPrefix=D1.familyPrefix);var M1=o(o({},Z3),D1);M1.autoReplaceSvg||(M1.observeMutations=!1);var u={};Object.keys(Z3).forEach(c=>{Object.defineProperty(u,c,{enumerable:!0,set:function(s){M1[c]=s,k1.forEach(e=>e(u))},get:function(){return M1[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(c){M1.cssPrefix=c,k1.forEach(s=>s(u))},get:function(){return M1.cssPrefix}});Z.FontAwesomeConfig=u;var k1=[];function W6(c){return k1.push(c),()=>{k1.splice(k1.indexOf(c),1)}}var X=P2,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $6(c){if(!c||!Q)return;let s=C.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=c;let e=C.head.childNodes,t=null;for(let n=e.length-1;n>-1;n--){let i=e[n],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(t=i)}return C.head.insertBefore(s,t),c}var q6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function E1(){let c=12,s="";for(;c-- >0;)s+=q6[Math.random()*62|0];return s}function C1(c){let s=[];for(let e=(c||[]).length>>>0;e--;)s[e]=c[e];return s}function e0(c){return c.classList?C1(c.classList):(c.getAttribute("class")||"").split(" ").filter(s=>s)}function c4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Y6(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,'="').concat(c4(c[e]),'" '),"").trim()}function o2(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,": ").concat(c[e].trim(),";"),"")}function t0(c){return c.size!==B.size||c.x!==B.x||c.y!==B.y||c.rotate!==B.rotate||c.flipX||c.flipY}function Q6(c){let{transform:s,containerWidth:e,iconWidth:t}=c,n={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),a="rotate(".concat(s.rotate," 0 0)"),p={transform:"".concat(i," ").concat(l," ").concat(a)},m={transform:"translate(".concat(t/2*-1," -256)")};return{outer:n,inner:p,path:m}}function J6(c){let{transform:s,width:e=P2,height:t=P2,startCentered:n=!1}=c,i="";return n&&U3?i+="translate(".concat(s.x/X-e/2,"em, ").concat(s.y/X-t/2,"em) "):n?i+="translate(calc(-50% + ".concat(s.x/X,"em), calc(-50% + ").concat(s.y/X,"em)) "):i+="translate(".concat(s.x/X,"em, ").concat(s.y/X,"em) "),i+="scale(".concat(s.size/X*(s.flipX?-1:1),", ").concat(s.size/X*(s.flipY?-1:1),") "),i+="rotate(".concat(s.rotate,"deg) "),i}var K6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function e4(){let c=Y3,s=Q3,e=u.cssPrefix,t=u.replacementClass,n=K6;if(e!==c||t!==s){let i=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),a=new RegExp("\\.".concat(s),"g");n=n.replace(i,".".concat(e,"-")).replace(l,"--".concat(e,"-")).replace(a,".".concat(t))}return n}var _3=!1;function D2(){u.autoAddCss&&!_3&&($6(e4()),_3=!0)}var X6={mixout(){return{dom:{css:e4,insertCss:D2}}},hooks(){return{beforeDOMElementCreation(){D2()},beforeI2svg(){D2()}}}},Y=Z||{};Y[q]||(Y[q]={});Y[q].styles||(Y[q].styles={});Y[q].hooks||(Y[q].hooks={});Y[q].shims||(Y[q].shims=[]);var H=Y[q],t4=[],n4=function(){C.removeEventListener("DOMContentLoaded",n4),i2=1,t4.map(c=>c())},i2=!1;Q&&(i2=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),i2||C.addEventListener("DOMContentLoaded",n4));function Z6(c){Q&&(i2?setTimeout(c,0):t4.push(c))}function R1(c){let{tag:s,attributes:e={},children:t=[]}=c;return typeof c=="string"?c4(c):"<".concat(s," ").concat(Y6(e),">").concat(t.map(R1).join(""),"</").concat(s,">")}function b3(c,s,e){if(c&&c[s]&&c[s][e])return{prefix:s,iconName:e,icon:c[s][e]}}var c8=function(s,e){return function(t,n,i,l){return s.call(e,t,n,i,l)}},k2=function(s,e,t,n){var i=Object.keys(s),l=i.length,a=n!==void 0?c8(e,n):e,p,m,h;for(t===void 0?(p=1,h=s[i[0]]):(p=0,h=t);p<l;p++)m=i[p],h=a(h,s[m],m,s);return h};function e8(c){let s=[],e=0,t=c.length;for(;e<t;){let n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<t){let i=c.charCodeAt(e++);(i&64512)==56320?s.push(((n&1023)<<10)+(i&1023)+65536):(s.push(n),e--)}else s.push(n)}return s}function G2(c){let s=e8(c);return s.length===1?s[0].toString(16):null}function t8(c,s){let e=c.length,t=c.charCodeAt(s),n;return t>=55296&&t<=56319&&e>s+1&&(n=c.charCodeAt(s+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function y3(c){return Object.keys(c).reduce((s,e)=>{let t=c[e];return!!t.icon?s[t.iconName]=t.icon:s[e]=t,s},{})}function V2(c,s){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:t=!1}=e,n=y3(s);typeof H.hooks.addPack=="function"&&!t?H.hooks.addPack(c,y3(s)):H.styles[c]=o(o({},H.styles[c]||{}),n),c==="fas"&&V2("fa",s)}var{styles:O1,shims:n8}=H,s4=Object.keys(c0),s8=s4.reduce((c,s)=>(c[s]=Object.keys(c0[s]),c),{}),n0=null,i4={},l4={},a4={},o4={},r4={};function i8(c){return~V6.indexOf(c)}function l8(c,s){let e=s.split("-"),t=e[0],n=e.slice(1).join("-");return t===c&&n!==""&&!i8(n)?n:null}var f4=()=>{let c=t=>k2(O1,(n,i,l)=>(n[l]=k2(i,t,{}),n),{});i4=c((t,n,i)=>(n[3]&&(t[n[3]]=i),n[2]&&n[2].filter(a=>typeof a=="number").forEach(a=>{t[a.toString(16)]=i}),t)),l4=c((t,n,i)=>(t[i]=i,n[2]&&n[2].filter(a=>typeof a=="string").forEach(a=>{t[a]=i}),t)),r4=c((t,n,i)=>{let l=n[2];return t[i]=i,l.forEach(a=>{t[a]=i}),t});let s="far"in O1||u.autoFetchSvg,e=k2(n8,(t,n)=>{let i=n[0],l=n[1],a=n[2];return l==="far"&&!s&&(l="fas"),typeof i=="string"&&(t.names[i]={prefix:l,iconName:a}),typeof i=="number"&&(t.unicodes[i.toString(16)]={prefix:l,iconName:a}),t},{names:{},unicodes:{}});a4=e.names,o4=e.unicodes,n0=r2(u.styleDefault,{family:u.familyDefault})};W6(c=>{n0=r2(c.styleDefault,{family:u.familyDefault})});f4();function s0(c,s){return(i4[c]||{})[s]}function a8(c,s){return(l4[c]||{})[s]}function o1(c,s){return(r4[c]||{})[s]}function d4(c){return a4[c]||{prefix:null,iconName:null}}function o8(c){let s=o4[c],e=s0("fas",c);return s||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function c1(){return n0}var m4=()=>({prefix:null,iconName:null,rest:[]});function r8(c){let s=w,e=s4.reduce((t,n)=>(t[n]="".concat(u.cssPrefix,"-").concat(n),t),{});return $3.forEach(t=>{(c.includes(e[t])||c.some(n=>s8[t].includes(n)))&&(s=t)}),s}function r2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=w}=s,t=I6[e][c];if(e===a2&&!c)return"fad";let n=C3[e][c]||C3[e][t],i=c in H.styles?c:null;return n||i||null}function f8(c){let s=[],e=null;return c.forEach(t=>{let n=l8(u.cssPrefix,t);n?e=n:t&&s.push(t)}),{iconName:e,rest:s}}function v3(c){return c.sort().filter((s,e,t)=>t.indexOf(s)===e)}function f2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=s,t=null,n=R2.concat(x6),i=v3(c.filter(z=>n.includes(z))),l=v3(c.filter(z=>!R2.includes(z))),a=i.filter(z=>(t=z,!W3.includes(z))),[p=null]=a,m=r8(i),h=o(o({},f8(l)),{},{prefix:r2(p,{family:m})});return o(o(o({},h),u8({values:c,family:m,styles:O1,config:u,canonical:h,givenPrefix:t})),d8(e,t,h))}function d8(c,s,e){let{prefix:t,iconName:n}=e;if(c||!t||!n)return{prefix:t,iconName:n};let i=s==="fa"?d4(n):{},l=o1(t,n);return n=i.iconName||l||n,t=i.prefix||t,t==="far"&&!O1.far&&O1.fas&&!u.autoFetchSvg&&(t="fas"),{prefix:t,iconName:n}}var m8=$3.filter(c=>c!==w||c!==a2),p8=Object.keys(A2).filter(c=>c!==w).map(c=>Object.keys(A2[c])).flat();function u8(c){let{values:s,family:e,canonical:t,givenPrefix:n="",styles:i={},config:l={}}=c,a=e===a2,p=s.includes("fa-duotone")||s.includes("fad"),m=l.familyDefault==="duotone",h=t.prefix==="fad"||t.prefix==="fa-duotone";if(!a&&(p||m||h)&&(t.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(t.prefix="fab"),!t.prefix&&m8.includes(e)&&(Object.keys(i).find(g=>p8.includes(g))||l.autoFetchSvg)){let g=z6.get(e).defaultShortPrefixId;t.prefix=g,t.iconName=o1(t.prefix,t.iconName)||t.iconName}return(t.prefix==="fa"||n==="fa")&&(t.prefix=c1()||"fas"),t}var U2=class{constructor(){this.definitions={}}add(){for(var s=arguments.length,e=new Array(s),t=0;t<s;t++)e[t]=arguments[t];let n=e.reduce(this._pullDefinitions,{});Object.keys(n).forEach(i=>{this.definitions[i]=o(o({},this.definitions[i]||{}),n[i]),V2(i,n[i]);let l=c0[w][i];l&&V2(l,n[i]),f4()})}reset(){this.definitions={}}_pullDefinitions(s,e){let t=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(t).map(n=>{let{prefix:i,iconName:l,icon:a}=t[n],p=a[2];s[i]||(s[i]={}),p.length>0&&p.forEach(m=>{typeof m=="string"&&(s[i][m]=a)}),s[i][l]=a}),s}},x3=[],z1={},L1={},h8=Object.keys(L1);function g8(c,s){let{mixoutsTo:e}=s;return x3=c,z1={},Object.keys(L1).forEach(t=>{h8.indexOf(t)===-1&&delete L1[t]}),x3.forEach(t=>{let n=t.mixout?t.mixout():{};if(Object.keys(n).forEach(i=>{typeof n[i]=="function"&&(e[i]=n[i]),typeof n[i]=="object"&&Object.keys(n[i]).forEach(l=>{e[i]||(e[i]={}),e[i][l]=n[i][l]})}),t.hooks){let i=t.hooks();Object.keys(i).forEach(l=>{z1[l]||(z1[l]=[]),z1[l].push(i[l])})}t.provides&&t.provides(L1)}),e}function j2(c,s){for(var e=arguments.length,t=new Array(e>2?e-2:0),n=2;n<e;n++)t[n-2]=arguments[n];return(z1[c]||[]).forEach(l=>{s=l.apply(null,[s,...t])}),s}function f1(c){for(var s=arguments.length,e=new Array(s>1?s-1:0),t=1;t<s;t++)e[t-1]=arguments[t];(z1[c]||[]).forEach(i=>{i.apply(null,e)})}function e1(){let c=arguments[0],s=Array.prototype.slice.call(arguments,1);return L1[c]?L1[c].apply(null,s):void 0}function W2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:s}=c,e=c.prefix||c1();if(s)return s=o1(e,s)||s,b3(p4.definitions,e,s)||b3(H.styles,e,s)}var p4=new U2,z8=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,f1("noAuto")},L8={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(f1("beforeI2svg",c),e1("pseudoElements2svg",c),e1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s}=c;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Z6(()=>{C8({autoReplaceSvgRoot:s}),f1("watch",c)})}},M8={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:o1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let s=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=r2(c[0]);return{prefix:e,iconName:o1(e,s)||s}}if(typeof c=="string"&&(c.indexOf("".concat(u.cssPrefix,"-"))>-1||c.match(F6))){let s=f2(c.split(" "),{skipLookups:!0});return{prefix:s.prefix||c1(),iconName:o1(s.prefix,s.iconName)||s.iconName}}if(typeof c=="string"){let s=c1();return{prefix:s,iconName:o1(s,c)||c}}}},A={noAuto:z8,config:u,dom:L8,parse:M8,library:p4,findIconDefinition:W2,toHtml:R1},C8=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s=C}=c;(Object.keys(H.styles).length>0||u.autoFetchSvg)&&Q&&u.autoReplaceSvg&&A.dom.i2svg({node:s})};function d2(c,s){return Object.defineProperty(c,"abstract",{get:s}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>R1(e))}}),Object.defineProperty(c,"node",{get:function(){if(!Q)return;let e=C.createElement("div");return e.innerHTML=c.html,e.children}}),c}function _8(c){let{children:s,main:e,mask:t,attributes:n,styles:i,transform:l}=c;if(t0(l)&&e.found&&!t.found){let{width:a,height:p}=e,m={x:a/p/2,y:.5};n.style=o2(o(o({},i),{},{"transform-origin":"".concat(m.x+l.x/16,"em ").concat(m.y+l.y/16,"em")}))}return[{tag:"svg",attributes:n,children:s}]}function b8(c){let{prefix:s,iconName:e,children:t,attributes:n,symbol:i}=c,l=i===!0?"".concat(s,"-").concat(u.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},n),{},{id:l}),children:t}]}]}function i0(c){let{icons:{main:s,mask:e},prefix:t,iconName:n,transform:i,symbol:l,title:a,maskId:p,titleId:m,extra:h,watchable:z=!1}=c,{width:g,height:S}=e.found?e:s,J=b6.includes(t),t1=[u.replacementClass,n?"".concat(u.cssPrefix,"-").concat(n):""].filter(m1=>h.classes.indexOf(m1)===-1).filter(m1=>m1!==""||!!m1).concat(h.classes).join(" "),P={children:[],attributes:o(o({},h.attributes),{},{"data-prefix":t,"data-icon":n,class:t1,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(S)})},G=J&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/S*16*.0625,"em")}:{};z&&(P.attributes[r1]=""),a&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(m||E1())},children:[a]}),delete P.attributes.title);let E=o(o({},P),{},{prefix:t,iconName:n,main:s,mask:e,maskId:p,transform:i,symbol:l,styles:o(o({},G),h.styles)}),{children:I,attributes:d1}=e.found&&s.found?e1("generateAbstractMask",E)||{children:[],attributes:{}}:e1("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=I,E.attributes=d1,l?b8(E):_8(E)}function N3(c){let{content:s,width:e,height:t,transform:n,title:i,extra:l,watchable:a=!1}=c,p=o(o(o({},l.attributes),i?{title:i}:{}),{},{class:l.classes.join(" ")});a&&(p[r1]="");let m=o({},l.styles);t0(n)&&(m.transform=J6({transform:n,startCentered:!0,width:e,height:t}),m["-webkit-transform"]=m.transform);let h=o2(m);h.length>0&&(p.style=h);let z=[];return z.push({tag:"span",attributes:p,children:[s]}),i&&z.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),z}function y8(c){let{content:s,title:e,extra:t}=c,n=o(o(o({},t.attributes),e?{title:e}:{}),{},{class:t.classes.join(" ")}),i=o2(t.styles);i.length>0&&(n.style=i);let l=[];return l.push({tag:"span",attributes:n,children:[s]}),e&&l.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),l}var{styles:E2}=H;function $2(c){let s=c[0],e=c[1],[t]=c.slice(4),n=null;return Array.isArray(t)?n={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(T2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(T2.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(T2.PRIMARY),fill:"currentColor",d:t[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:s,height:e,icon:n}}var v8={found:!1,width:512,height:512};function x8(c,s){!J3&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(s,'" is missing.'))}function q2(c,s){let e=s;return s==="fa"&&u.styleDefault!==null&&(s=c1()),new Promise((t,n)=>{if(e==="fa"){let i=d4(c)||{};c=i.iconName||c,s=i.prefix||s}if(c&&s&&E2[s]&&E2[s][c]){let i=E2[s][c];return t($2(i))}x8(c,s),t(o(o({},v8),{},{icon:u.showMissingIcons&&c?e1("missingIconAbstract")||{}:{}}))})}var S3=()=>{},Y2=u.measurePerformance&&e2&&e2.mark&&e2.measure?e2:{mark:S3,measure:S3},T1='FA "6.7.2"',N8=c=>(Y2.mark("".concat(T1," ").concat(c," begins")),()=>u4(c)),u4=c=>{Y2.mark("".concat(T1," ").concat(c," ends")),Y2.measure("".concat(T1," ").concat(c),"".concat(T1," ").concat(c," begins"),"".concat(T1," ").concat(c," ends"))},l0={begin:N8,end:u4},n2=()=>{};function w3(c){return typeof(c.getAttribute?c.getAttribute(r1):null)=="string"}function S8(c){let s=c.getAttribute?c.getAttribute(X2):null,e=c.getAttribute?c.getAttribute(Z2):null;return s&&e}function w8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function T8(){return u.autoReplaceSvg===!0?s2.replace:s2[u.autoReplaceSvg]||s2.replace}function D8(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function k8(c){return C.createElement(c)}function h4(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?D8:k8}=s;if(typeof c=="string")return C.createTextNode(c);let t=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){t.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){t.appendChild(h4(i,{ceFn:e}))}),t}function E8(c){let s=" ".concat(c.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}var s2={replace:function(c){let s=c[0];if(s.parentNode)if(c[1].forEach(e=>{s.parentNode.insertBefore(h4(e),s)}),s.getAttribute(r1)===null&&u.keepOriginalSource){let e=C.createComment(E8(s));s.parentNode.replaceChild(e,s)}else s.remove()},nest:function(c){let s=c[0],e=c[1];if(~e0(s).indexOf(u.replacementClass))return s2.replace(c);let t=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let i=e[0].attributes.class.split(" ").reduce((l,a)=>(a===u.replacementClass||a.match(t)?l.toSvg.push(a):l.toNode.push(a),l),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",i.toNode.join(" "))}let n=e.map(i=>R1(i)).join(`
`);s.setAttribute(r1,""),s.innerHTML=n}};function T3(c){c()}function g4(c,s){let e=typeof s=="function"?s:n2;if(c.length===0)e();else{let t=T3;u.mutateApproach===R6&&(t=Z.requestAnimationFrame||T3),t(()=>{let n=T8(),i=l0.begin("mutate");c.map(n),i(),e()})}}var a0=!1;function z4(){a0=!0}function Q2(){a0=!1}var l2=null;function D3(c){if(!g3||!u.observeMutations)return;let{treeCallback:s=n2,nodeCallback:e=n2,pseudoElementsCallback:t=n2,observeMutationsRoot:n=C}=c;l2=new g3(i=>{if(a0)return;let l=c1();C1(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!w3(a.addedNodes[0])&&(u.searchPseudoElements&&t(a.target),s(a.target)),a.type==="attributes"&&a.target.parentNode&&u.searchPseudoElements&&t(a.target.parentNode),a.type==="attributes"&&w3(a.target)&&~G6.indexOf(a.attributeName))if(a.attributeName==="class"&&S8(a.target)){let{prefix:p,iconName:m}=f2(e0(a.target));a.target.setAttribute(X2,p||l),m&&a.target.setAttribute(Z2,m)}else w8(a.target)&&e(a.target)})}),Q&&l2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function O8(){l2&&l2.disconnect()}function A8(c){let s=c.getAttribute("style"),e=[];return s&&(e=s.split(";").reduce((t,n)=>{let i=n.split(":"),l=i[0],a=i.slice(1);return l&&a.length>0&&(t[l]=a.join(":").trim()),t},{})),e}function R8(c){let s=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),t=c.innerText!==void 0?c.innerText.trim():"",n=f2(e0(c));return n.prefix||(n.prefix=c1()),s&&e&&(n.prefix=s,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&t.length>0&&(n.iconName=a8(n.prefix,c.innerText)||s0(n.prefix,G2(c.innerText))),!n.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function P8(c){let s=C1(c.attributes).reduce((n,i)=>(n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n),{}),e=c.getAttribute("title"),t=c.getAttribute("data-fa-title-id");return u.autoA11y&&(e?s["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(t||E1()):(s["aria-hidden"]="true",s.focusable="false")),s}function I8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:t,rest:n}=R8(c),i=P8(c),l=j2("parseNodeAttributes",{},c),a=s.styleParser?A8(c):[];return o({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:a,attributes:i}},l)}var{styles:F8}=H;function L4(c){let s=u.autoReplaceSvg==="nest"?k3(c,{styleParser:!1}):k3(c);return~s.extra.classes.indexOf(X3)?e1("generateLayersText",c,s):e1("generateSvgReplacementMutation",c,s)}function B8(){return[...M6,...R2]}function E3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();let e=C.documentElement.classList,t=h=>e.add("".concat(M3,"-").concat(h)),n=h=>e.remove("".concat(M3,"-").concat(h)),i=u.autoFetchSvg?B8():W3.concat(Object.keys(F8));i.includes("fa")||i.push("fa");let l=[".".concat(X3,":not([").concat(r1,"])")].concat(i.map(h=>".".concat(h,":not([").concat(r1,"])"))).join(", ");if(l.length===0)return Promise.resolve();let a=[];try{a=C1(c.querySelectorAll(l))}catch{}if(a.length>0)t("pending"),n("complete");else return Promise.resolve();let p=l0.begin("onTree"),m=a.reduce((h,z)=>{try{let g=L4(z);g&&h.push(g)}catch(g){J3||g.name==="MissingIcon"&&console.error(g)}return h},[]);return new Promise((h,z)=>{Promise.all(m).then(g=>{g4(g,()=>{t("active"),t("complete"),n("pending"),typeof s=="function"&&s(),p(),h()})}).catch(g=>{p(),z(g)})})}function H8(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;L4(c).then(e=>{e&&g4([e],s)})}function G8(c){return function(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(s||{}).icon?s:W2(s||{}),{mask:n}=e;return n&&(n=(n||{}).icon?n:W2(n||{})),c(t,o(o({},e),{},{mask:n}))}}var V8=function(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=B,symbol:t=!1,mask:n=null,maskId:i=null,title:l=null,titleId:a=null,classes:p=[],attributes:m={},styles:h={}}=s;if(!c)return;let{prefix:z,iconName:g,icon:S}=c;return d2(o({type:"icon"},c),()=>(f1("beforeDOMElementCreation",{iconDefinition:c,params:s}),u.autoA11y&&(l?m["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||E1()):(m["aria-hidden"]="true",m.focusable="false")),i0({icons:{main:$2(S),mask:n?$2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:g,transform:o(o({},B),e),symbol:t,title:l,maskId:i,titleId:a,extra:{attributes:m,styles:h,classes:p}})))},U8={mixout(){return{icon:G8(V8)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=E3,c.nodeCallback=H8,c}}},provides(c){c.i2svg=function(s){let{node:e=C,callback:t=()=>{}}=s;return E3(e,t)},c.generateSvgReplacementMutation=function(s,e){let{iconName:t,title:n,titleId:i,prefix:l,transform:a,symbol:p,mask:m,maskId:h,extra:z}=e;return new Promise((g,S)=>{Promise.all([q2(t,l),m.iconName?q2(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(J=>{let[t1,P]=J;g([s,i0({icons:{main:t1,mask:P},prefix:l,iconName:t,transform:a,symbol:p,maskId:h,title:n,titleId:i,extra:z,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(s){let{children:e,attributes:t,main:n,transform:i,styles:l}=s,a=o2(l);a.length>0&&(t.style=a);let p;return t0(i)&&(p=e1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),e.push(p||n.icon),{children:e,attributes:t}}}},j8={mixout(){return{layer(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=s;return d2({type:"layer"},()=>{f1("beforeDOMElementCreation",{assembler:c,params:s});let t=[];return c(n=>{Array.isArray(n)?n.map(i=>{t=t.concat(i.abstract)}):t=t.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...e].join(" ")},children:t}]})}}}},W8={mixout(){return{counter(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:t=[],attributes:n={},styles:i={}}=s;return d2({type:"counter",content:c},()=>(f1("beforeDOMElementCreation",{content:c,params:s}),y8({content:c.toString(),title:e,extra:{attributes:n,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...t]}})))}}}},$8={mixout(){return{text(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=B,title:t=null,classes:n=[],attributes:i={},styles:l={}}=s;return d2({type:"text",content:c},()=>(f1("beforeDOMElementCreation",{content:c,params:s}),N3({content:c,transform:o(o({},B),e),title:t,extra:{attributes:i,styles:l,classes:["".concat(u.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(s,e){let{title:t,transform:n,extra:i}=e,l=null,a=null;if(U3){let p=parseInt(getComputedStyle(s).fontSize,10),m=s.getBoundingClientRect();l=m.width/p,a=m.height/p}return u.autoA11y&&!t&&(i.attributes["aria-hidden"]="true"),Promise.resolve([s,N3({content:s.innerHTML,width:l,height:a,transform:n,title:t,extra:i,watchable:!0})])}}},q8=new RegExp('"',"ug"),O3=[1105920,1112319],A3=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),g6),O6),N6),J2=Object.keys(A3).reduce((c,s)=>(c[s.toLowerCase()]=A3[s],c),{}),Y8=Object.keys(J2).reduce((c,s)=>{let e=J2[s];return c[s]=e[900]||[...Object.entries(e)][0][1],c},{});function Q8(c){let s=c.replace(q8,""),e=t8(s,0),t=e>=O3[0]&&e<=O3[1],n=s.length===2?s[0]===s[1]:!1;return{value:G2(n?s[0]:s),isSecondary:t||n}}function J8(c,s){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(s),n=isNaN(t)?"normal":t;return(J2[e]||{})[n]||Y8[e]}function R3(c,s){let e="".concat(A6).concat(s.replace(":","-"));return new Promise((t,n)=>{if(c.getAttribute(e)!==null)return t();let l=C1(c.children).filter(g=>g.getAttribute(I2)===s)[0],a=Z.getComputedStyle(c,s),p=a.getPropertyValue("font-family"),m=p.match(B6),h=a.getPropertyValue("font-weight"),z=a.getPropertyValue("content");if(l&&!m)return c.removeChild(l),t();if(m&&z!=="none"&&z!==""){let g=a.getPropertyValue("content"),S=J8(p,h),{value:J,isSecondary:t1}=Q8(g),P=m[0].startsWith("FontAwesome"),G=s0(S,J),E=G;if(P){let I=o8(J);I.iconName&&I.prefix&&(G=I.iconName,S=I.prefix)}if(G&&!t1&&(!l||l.getAttribute(X2)!==S||l.getAttribute(Z2)!==E)){c.setAttribute(e,E),l&&c.removeChild(l);let I=I8(),{extra:d1}=I;d1.attributes[I2]=s,q2(G,S).then(m1=>{let A4=i0(o(o({},I),{},{icons:{main:m1,mask:m4()},prefix:S,iconName:E,extra:d1,watchable:!0})),m2=C.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?c.insertBefore(m2,c.firstChild):c.appendChild(m2),m2.outerHTML=A4.map(R4=>R1(R4)).join(`
`),c.removeAttribute(e),t()}).catch(n)}else t()}else t()})}function K8(c){return Promise.all([R3(c,"::before"),R3(c,"::after")])}function X8(c){return c.parentNode!==document.head&&!~P6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(I2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function P3(c){if(Q)return new Promise((s,e)=>{let t=C1(c.querySelectorAll("*")).filter(X8).map(K8),n=l0.begin("searchPseudoElements");z4(),Promise.all(t).then(()=>{n(),Q2(),s()}).catch(()=>{n(),Q2(),e()})})}var Z8={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=P3,c}}},provides(c){c.pseudoElements2svg=function(s){let{node:e=C}=s;u.searchPseudoElements&&P3(e)}}},I3=!1,c5={mixout(){return{dom:{unwatch(){z4(),I3=!0}}}},hooks(){return{bootstrap(){D3(j2("mutationObserverCallbacks",{}))},noAuto(){O8()},watch(c){let{observeMutationsRoot:s}=c;I3?Q2():D3(j2("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},F3=c=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,t)=>{let n=t.toLowerCase().split("-"),i=n[0],l=n.slice(1).join("-");if(i&&l==="h")return e.flipX=!0,e;if(i&&l==="v")return e.flipY=!0,e;if(l=parseFloat(l),isNaN(l))return e;switch(i){case"grow":e.size=e.size+l;break;case"shrink":e.size=e.size-l;break;case"left":e.x=e.x-l;break;case"right":e.x=e.x+l;break;case"up":e.y=e.y-l;break;case"down":e.y=e.y+l;break;case"rotate":e.rotate=e.rotate+l;break}return e},s)},e5={mixout(){return{parse:{transform:c=>F3(c)}}},hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-transform");return e&&(c.transform=F3(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(s){let{main:e,transform:t,containerWidth:n,iconWidth:i}=s,l={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),p="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),m="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(a," ").concat(p," ").concat(m)},z={transform:"translate(".concat(i/2*-1," -256)")},g={outer:l,inner:h,path:z};return{tag:"g",attributes:o({},g.outer),children:[{tag:"g",attributes:o({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),g.path)}]}]}}}},O2={x:0,y:0,width:"100%",height:"100%"};function B3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||s)&&(c.attributes.fill="black"),c}function t5(c){return c.tag==="g"?c.children:[c]}var n5={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-mask"),t=e?f2(e.split(" ").map(n=>n.trim())):m4();return t.prefix||(t.prefix=c1()),c.mask=t,c.maskId=s.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(s){let{children:e,attributes:t,main:n,mask:i,maskId:l,transform:a}=s,{width:p,icon:m}=n,{width:h,icon:z}=i,g=Q6({transform:a,containerWidth:h,iconWidth:p}),S={tag:"rect",attributes:o(o({},O2),{},{fill:"white"})},J=m.children?{children:m.children.map(B3)}:{},t1={tag:"g",attributes:o({},g.inner),children:[B3(o({tag:m.tag,attributes:o(o({},m.attributes),g.path)},J))]},P={tag:"g",attributes:o({},g.outer),children:[t1]},G="mask-".concat(l||E1()),E="clip-".concat(l||E1()),I={tag:"mask",attributes:o(o({},O2),{},{id:G,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,P]},d1={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:t5(z)},I]};return e.push(d1,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(G,")")},O2)}),{children:e,attributes:t}}}},s5={provides(c){let s=!1;Z.matchMedia&&(s=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],t={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},t),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=o(o({},n),{},{attributeName:"opacity"}),l={tag:"circle",attributes:o(o({},t),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||l.children.push({tag:"animate",attributes:o(o({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(l),e.push({tag:"path",attributes:o(o({},t),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),s||e.push({tag:"path",attributes:o(o({},t),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},i5={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-symbol"),t=e===null?!1:e===""?!0:e;return c.symbol=t,c}}}},l5=[X6,U8,j8,W8,$8,Z8,c5,e5,n5,s5,i5];g8(l5,{mixoutsTo:A});var le=A.noAuto,ae=A.config,oe=A.library,re=A.dom,M4=A.parse,fe=A.findIconDefinition,de=A.toHtml,C4=A.icon,me=A.layer,a5=A.text,o5=A.counter;var r5=["*"],f5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},d5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},m5=c=>{let s={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(s).map(e=>s[e]?e:null).filter(e=>e)},p5=c=>c.prefix!==void 0&&c.iconName!==void 0,u5=(c,s)=>p5(c)?c:typeof c=="string"?{prefix:s,iconName:c}:{prefix:c[0],iconName:c[1]},h5=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),g5=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let t of e){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let n of t.icon[2])typeof n=="string"&&(this.definitions[t.prefix][n]=t)}}addIconPacks(...e){for(let t of e){let n=Object.keys(t).map(i=>t[i]);this.addIcons(...n)}}getIconDefinition(e,t){return e in this.definitions&&t in this.definitions[e]?this.definitions[e][t]:null}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),z5=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275dir=U({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[p1]})}}return c})(),L5=(()=>{class c{constructor(e,t){this.renderer=e,this.elementRef=t}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(t){return new(t||c)(k(M0),k(K))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[p1,N],ngContentSelectors:r5,decls:1,vars:0,template:function(t,n){t&1&&(j1(),W1(0))},encapsulation:2})}}return c})(),_4=(()=>{class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,t,n,i,l){this.sanitizer=e,this.config=t,this.iconLibrary=n,this.stackItem=i,this.classes=[],l!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){d5();return}if(e){let t=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(t);if(n!=null){let i=this.buildParams();this.renderIcon(n,i)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let t=u5(e,this.config.defaultPrefix);if("icon"in t)return t;let n=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return n??(f5(t),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},t=typeof this.transform=="string"?M4.transform(this.transform):this.transform;return{title:this.title,transform:t,classes:[...m5(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,t){let n=C4(e,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}static{this.\u0275fac=function(t){return new(t||c)(k(D0),k(h5),k(g5),k(z5,8),k(L5,8))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,n){t&2&&(x1("innerHTML",n.renderedIconHTML,L0),n1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[p1,N],decls:0,vars:0,template:function(t,n){},encapsulation:2})}}return c})();var b4=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=v({type:c})}static{this.\u0275inj=y({})}}return c})();var y4=(()=>{class c{constructor(){this.pfpUrl="/assets/pfp.jpg",this.javaIcon="/assets/icons/java.png",this.junitIcon="/assets/icons/junit5.png",this.mockitoIcon="/assets/icons/mockito.png",this.mavenIcon="/assets/icons/maven.png",this.postgresIcon="/assets/icons/postgres.png",this.jenkinsIcon="/assets/icons/jenkins.png",this.rabbitmqIcon="/assets/icons/rabbitmq.png",this.kafkaIcon="/assets/icons/kafka.png",this.tomcatIcon="/assets/icons/tomcat.png",this.linuxIcon="/assets/icons/linux.png",this.linkedInURL=_1}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=x({type:c,selectors:[["home-page"]],standalone:!0,features:[N],decls:88,vars:11,consts:[[1,"pfp-center-header"],["width","300","height","300","priority","","alt","An outdoor photograph of a young man with long black hair and glasses leaning against a brick wall, wearing a black shirt.",1,"pfp",3,"ngSrc"],[1,"home-page-body-text"],[1,"skills-list"],["width","50","height","50",1,"skill-icon",3,"ngSrc"],[1,"skill-icon"],[3,"href"],[1,"footer"]],template:function(t,n){t&1&&(r(0,"figure",0)(1,"h1"),d(2,"Chris Loftis"),f(),M(3,"img",1),f(),M(4,"br"),r(5,"article",2)(6,"section")(7,"p"),d(8," I am a Senior Software Developer looking for a development role. My primary experience is with backend systems, databases and Java middleware, but I am open to trying new things. Prior to my current job, I did not anticipate that I would ever write code in strange telephony XML dialects. After that, I'm open to trying pretty much anything. "),f()(),r(9,"section")(10,"p"),d(11," I have been writing Java professionally for three years and for personal projects for eleven. I strive to create software that is scaleable, maintainable, testable and documented. I enjoy working on cross-functional teams and I believe communication is key to shipping quality software. "),f()(),r(12,"section")(13,"p"),d(14," My ideal role is a position that allows me to meet with product owners/stakeholders to understand their needs, then work with a team to architect, design and implement a software solution. It puts me at a table with other engineers where we talk about the approach we want to take and how our components will integrate with one another. It enables me to learn from subject matter experts and my team members. It provides me with the resources to grow my domain understanding and my abilities as a software engineer. "),f()(),r(15,"section")(16,"h4"),d(17,"Education"),f(),r(18,"p"),d(19," Bachelor of Science in Computer Science (B.S.C.S) With Honors from South Carolina Honors College "),f()(),r(20,"section")(21,"h4"),d(22,"Skills and Technologies"),f(),r(23,"ul",3)(24,"li"),M(25,"img",4),d(26," Java "),f(),r(27,"li"),M(28,"img",4),d(29," JUnit5 "),f(),r(30,"li"),M(31,"img",4),d(32," Mockito "),f(),r(33,"li"),M(34,"img",4),d(35," Maven "),f(),r(36,"li"),M(37,"img",4),d(38," Postgres "),f(),r(39,"li"),M(40,"img",4),d(41," Jenkins "),f(),r(42,"li"),M(43,"img",4),d(44," RabbitMQ "),f(),r(45,"li"),M(46,"img",4),d(47," Apache Tomcat "),f(),r(48,"li"),M(49,"img",4),d(50," Linux "),f(),r(51,"li"),M(52,"div",5),d(53," Job fairs & recruiting "),f(),r(54,"li"),M(55,"div",5),d(56," REST APIs "),f(),r(57,"li"),M(58,"div",5),d(59," Websockets "),f(),r(60,"li"),M(61,"div",5),d(62," Scrum/Agile team member "),f(),r(63,"li"),M(64,"div",5),d(65," SQL Database Design "),f(),r(66,"li"),M(67,"div",5),d(68," SMS systems "),f(),r(69,"li"),M(70,"div",5),d(71," Avaya telephony "),f(),r(72,"li"),M(73,"div",5),d(74," C++ "),f(),r(75,"li"),M(76,"div",5),d(77," Jira "),f()()(),r(78,"section")(79,"h4"),d(80,"Contact"),f(),r(81,"p"),d(82," You can contact me via email at chris[at]chriswantsajob.com or message me on "),r(83,"a",6),d(84,"LinkedIn"),f(),d(85,". "),f()(),r(86,"footer",7),d(87," Copyright \xA9 2025 Chris Loftis "),f()()),t&2&&(_(3),b("ngSrc",n.pfpUrl),_(22),b("ngSrc",n.javaIcon),_(3),b("ngSrc",n.junitIcon),_(3),b("ngSrc",n.mockitoIcon),_(3),b("ngSrc",n.mavenIcon),_(3),b("ngSrc",n.postgresIcon),_(3),b("ngSrc",n.jenkinsIcon),_(3),b("ngSrc",n.rabbitmqIcon),_(3),b("ngSrc",n.tomcatIcon),_(3),b("ngSrc",n.linuxIcon),_(34),b("href",n.linkedInURL,G1))},dependencies:[c2,Y1],styles:[".pfp-center-header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;flex-direction:column;font-family:serif;margin-top:20px}.pfp-center-header[_ngcontent-%COMP%]   .pfp[_ngcontent-%COMP%]{border-radius:100%}.home-page-body-text[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}@media (min-width: 506px){.home-page-body-text[_ngcontent-%COMP%]{width:50%}.skills-list[_ngcontent-%COMP%]{columns:2}}@media (max-width: 506px){.home-page-body-text[_ngcontent-%COMP%]{width:80%}.skills-list[_ngcontent-%COMP%]{columns:1}}.skills-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center;gap:1em;break-inside:avoid-column;overflow:hidden}.footer[_ngcontent-%COMP%]{margin-top:40px;text-align:center;color:var(--onBackground)}.skill-icon[_ngcontent-%COMP%]{height:2em;width:2em;display:inline;fill:var(--onBackground)}"]})}}return c})();var v4=(()=>{class c{constructor(e){this.http=e}downloadFile(e){return this.http.get(e,{responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||c)(F1(N0))}}static{this.\u0275prov=D({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();var x4=(()=>{class c{constructor(e){this.fileService=e,this.linkedInURL=_1}downloadResume(){this.fileService.downloadFile("/assets/resume.pdf").subscribe(t=>{let n=document.createElement("a"),i=URL.createObjectURL(t);n.href=i,n.download="chris-loftis-resume.pdf",n.click(),URL.revokeObjectURL(i)})}static{this.\u0275fac=function(t){return new(t||c)(k(v4))}}static{this.\u0275cmp=x({type:c,selectors:[["resume-component"]],standalone:!0,features:[N],decls:10,vars:1,consts:[[1,"resume-box"],[1,"btn","resume-button",3,"click"],[3,"href"]],template:function(t,n){t&1&&(r(0,"div",0)(1,"p"),d(2," You can download a copy of my resume with the button below. "),f(),r(3,"p")(4,"button",1),R("click",function(){return n.downloadResume()}),d(5,"Download Resume"),f()(),r(6,"p"),d(7," I am reachable via email at chris[at]chriswantsajob.com and on "),r(8,"a",2),d(9,"LinkedIn"),f()()()),t&2&&(_(8),b("href",n.linkedInURL,G1))},styles:[".resume-button[_ngcontent-%COMP%]{background-color:var(--primary);color:var(--onPrimary)}.resume-box[_ngcontent-%COMP%]{padding:2em;display:flex;flex-wrap:nowrap;flex-direction:column;align-items:center;text-align:center}"]})}}return c})();var N4=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-page-not-found"]],standalone:!0,features:[N],decls:7,vars:0,consts:[["routerLink","/home"]],template:function(t,n){t&1&&(r(0,"h1"),d(1,"Page Not Found"),f(),r(2,"p"),d(3,"There's no webpage at this URL. Maybe you'd like to visit the "),r(4,"a",0),d(5,"Home page"),f(),d(6," instead"),f())},dependencies:[Q1]})}}return c})();var S4=(()=>{class c{constructor(){this.swampfoxLogoUrl="/assets/swampfox-logo.png",this.mlegLogoUrl="/assets/mleg-logo.png"}openWebsite(e){window.open(e)}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-experience-page"]],standalone:!0,features:[N],decls:74,vars:2,consts:[[1,"experience-page"],[1,"job-entry"],[1,"job-left-div"],[1,"job-headers"],["href","https://www.swampfoxinc.com"],[1,"spread-elems"],[1,"job-responsibilities"],[1,"job-picture-div"],["width","300","height","128","priority","","alt","The logo for Swampfox Technologies Inc.",1,"job-img",3,"click","ngSrc"],["href","https://mleg.cse.sc.edu/"],["href","https://pubs.acs.org/doi/10.1021/acs.jpca.0c08103"],["width","300","height","128","priority","","alt","The logo for Machine Learning Evolutionary Group",1,"job-img",3,"click","ngSrc"]],template:function(t,n){t&1&&(r(0,"article",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2")(5,"a",4),d(6,"Swampfox Technologies, Inc."),f(),d(7," (3 years) Columbia, SC"),f(),r(8,"h6",5)(9,"span"),d(10,"Senior Software Developer"),f(),r(11,"span"),d(12,"Jan 2024 \u2013 Present"),f()(),r(13,"h6",5)(14,"span"),d(15,"Software Developer"),f(),r(16,"span"),d(17,"May 2023 \u2013 Jan 2024"),f()(),r(18,"h6",5)(19,"span"),d(20,"Product Development Intern"),f(),r(21,"span"),d(22,"May 2022 \u2013 May 2023"),f()(),r(23,"section",6)(24,"ul")(25,"li"),d(26,"Developed and maintained telecom software that powers large enterprise company call centers"),f(),r(27,"li"),d(28,"Worked with other software developers, QA engineers and project managers on Scrum teams"),f(),r(29,"li"),d(30,"Served as technical lead/owner of mission critical software components for high-availability systems"),f(),r(31,"li"),d(32,"Met with project managers, engineers and stakeholders from other companies to understand their needs and develop custom systems to integrate with their proprietary infrastructure"),f(),r(33,"li"),d(34,"Triaged and debugged live issues with high-volume production call centers during emergencies"),f(),r(35,"li"),d(36,"Wrote documentation and automated tests to ensure project and code maintainability"),f(),r(37,"li"),d(38,"Served as a mentor and a technical resource for interns during their projects"),f()()()(),r(39,"div",7)(40,"img",8),R("click",function(){return n.openWebsite("https://www.swampfoxinc.com")}),f()()()(),M(41,"hr"),r(42,"section",1)(43,"div",2)(44,"div",3)(45,"h2")(46,"a",9),d(47,"University of South Carolina"),f(),d(48," (1.5 years) Columbia, SC"),f(),r(49,"h6",5)(50,"span"),d(51,"Undergraduate Research Assistant"),f(),r(52,"span"),d(53,"September 2019 \u2013 December 2020"),f()(),r(54,"section",6)(55,"ul")(56,"li"),d(57,"Analyzed scientific problems to apply artificial intelligence and deep learning models."),f(),r(58,"li"),d(59,"Studied and implemented existing machine, deep learning, and evolutionary programming models within larger systems to solve novel problems. "),f(),r(60,"li"),d(61,"Rapidly learned new libraries and frameworks to implement them in more complex programs. "),f(),r(62,"li"),d(63,"Generated and analyzed charts and statistics to find flaws and improvements with models."),f(),r(64,"li")(65,"a",10),d(66,"Wrote and contributed to research articles"),f(),d(67," within the fields of Computer Science/Materials Design. "),f(),r(68,"li"),d(69,"Preprocessed raw data and transformed it into a format interpreted by machine learning models. "),f(),r(70,"li"),d(71,"Cooperated with a team of researchers and experts to further the field of Computational Materials Design."),f()()()(),r(72,"div",7)(73,"img",11),R("click",function(){return n.openWebsite("https://mleg.cse.sc.edu")}),f()()()()()),t&2&&(_(40),b("ngSrc",n.swampfoxLogoUrl),_(33),b("ngSrc",n.mlegLogoUrl))},dependencies:[Y1],styles:[".experience-page[_ngcontent-%COMP%]{margin:2em}.spread-elems[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px dotted var(--onBackground)}.job-entry[_ngcontent-%COMP%]{width:100%}@media (min-width: 506px){.job-entry[_ngcontent-%COMP%]   .job-left-div[_ngcontent-%COMP%]{display:flex;gap:5em}}.job-entry[_ngcontent-%COMP%]   .job-headers[_ngcontent-%COMP%]{flex:3}.job-entry[_ngcontent-%COMP%]   .job-picture-div[_ngcontent-%COMP%]{flex:1}.job-entry[_ngcontent-%COMP%]   .job-picture-div[_ngcontent-%COMP%]   .job-img[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer}"]})}}return c})();var w4=[{path:"home",component:y4},{path:"resume",component:x4},{path:"experience",component:S4},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:N4}];var T4={providers:[P0(w4),k0(),S0()]},_1="https://www.linkedin.com/in/chris-loftis-004335191/",D4="https://www.github.com/iron-condor";var k4=(()=>{class c{constructor(e,t){this.themeToggleService=e,this.router=t,this.moonIcon=m3,this.sunIcon=d3,this.themeIconAnimation=void 0,this.active=0,t.events.subscribe(n=>{n instanceof O0&&(this.active=this.getActiveTab(n.urlAfterRedirects))})}getActiveTab(e){switch(e){case"/":case"/home":return 1;case"/experience":return 2;case"/resume":return 3;default:return 0}}getCurrentTheme(){return this.themeToggleService.currentTheme==O.LIGHT?this.sunIcon:this.moonIcon}getThemeAnimation(){return this.themeIconAnimation}toggleTheme(){this.themeIconAnimation="bounce",this.themeToggleService.toggleTheme(),setTimeout(()=>{this.themeIconAnimation=void 0},500)}openGithub(){location.href=D4}openLinkedin(){location.href=_1}static{this.\u0275fac=function(t){return new(t||c)(k(f3),k(R0))}}static{this.\u0275cmp=x({type:c,selectors:[["nav-bar"]],standalone:!0,features:[N],decls:29,vars:6,consts:[["nav","ngbNav"],["ngbNav","",1,"nav-tabs","nav-bar",3,"activeIdChange","activeId"],[3,"ngbNavItem"],["ngbNavLink","","routerLink","/home","ariaCurrentWhenActive","page",1,"btn"],["ngbNavLink","","routerLink","/experience","ariaCurrentWhenActive","page",1,"btn"],["ngbNavLink","","routerLink","/resume","ariaCurrentWhenActive","page",1,"btn"],[1,"float-end-group"],[1,"btn","btn-tertiary",3,"click"],["for","linkedinIcon"],["width","32","height","32","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"linkedin-icon","v-align-middle","color-fg-default"],["d","M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"],["d","M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"],["d","M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"],["fill-rule","evenodd","clip-rule","evenodd","d","M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"],["for","githubIcon"],["id","githubIcon","height","32","aria-hidden","true","viewBox","0 0 24 24","version","1.1","width","32","data-view-component","true",1,"octicon","octicon-mark-github","v-align-middle","color-fg-default"],["d","M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"],["id","themeToggleButton",1,"btn","btn-tertiary",3,"click"],["for","themeToggleIcon"],["id","themeToggleIcon","size","xl",3,"icon","animation"]],template:function(t,n){if(t&1){let i=y2();r(0,"ul",1,0),y0("activeIdChange",function(a){return u1(i),b0(n.active,a)||(n.active=a),h1(a)}),r(2,"li",2)(3,"button",3),d(4,"Home"),f()(),r(5,"li",2)(6,"button",4),d(7,"Experience"),f()(),r(8,"li",2)(9,"button",5),d(10,"Resume"),f()(),r(11,"div",6)(12,"button",7),R("click",function(){return u1(i),h1(n.openLinkedin())}),r(13,"label",8),d(14,"LinkedIn"),f(),L2(),r(15,"svg",9),M(16,"path",10)(17,"path",11)(18,"path",12)(19,"path",13),f()(),M2(),r(20,"button",7),R("click",function(){return u1(i),h1(n.openGithub())}),r(21,"label",14),d(22,"Github"),f(),L2(),r(23,"svg",15),M(24,"path",16),f()(),M2(),r(25,"button",17),R("click",function(){return u1(i),h1(n.toggleTheme())}),r(26,"label",18),d(27,"Theme"),f(),M(28,"fa-icon",19),f()()()}t&2&&(_0("activeId",n.active),_(2),b("ngbNavItem",1),_(3),b("ngbNavItem",2),_(3),b("ngbNavItem",3),_(20),b("icon",n.getCurrentTheme())("animation",n.getThemeAnimation()))},dependencies:[c2,w1,X1,J0,K0,Z1,Q1,b4,_4],styles:[".nav-bar[_ngcontent-%COMP%]{background-color:var(--primary);display:flex}.nav-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(.active){color:var(--onPrimary)}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;border:0px}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:5px;cursor:pointer}.nav-bar[_ngcontent-%COMP%]   .octicon-mark-github[_ngcontent-%COMP%], .nav-bar[_ngcontent-%COMP%]   .linkedin-icon[_ngcontent-%COMP%]{fill:var(--onPrimary)}@media (min-width: 506px){.nav-bar[_ngcontent-%COMP%]{border-bottom:0px}.nav-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{height:43px;border-bottom-left-radius:0%;border-bottom-right-radius:0%}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]{margin-left:auto}}"]})}}return c})();var E4=(()=>{class c{constructor(){this.title="Chris Loftis"}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-root"]],standalone:!0,features:[N],decls:2,vars:0,template:function(t,n){t&1&&M(0,"nav-bar")(1,"router-outlet")},dependencies:[A0,k4,w0]})}}return c})();var _5={providers:[E0()]},O4=x0(T4,_5);var b5=()=>T0(E4,O4),i7=b5;export{i7 as a};
