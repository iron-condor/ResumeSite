import './polyfills.server.mjs';
import{$ as T2,A as C0,Aa as D0,B as C1,Ba as k0,C as _1,Ca as E0,D as b1,Da as O0,E as v2,Ea as A0,F as x2,G as N2,H as Y1,Ha as R0,I as E1,J as Q1,K as e1,L as Y,La as I0,M as _0,Ma as P0,N as J1,O as M,Oa as F0,P as E,Pa as s2,Q as S2,Qa as B0,R as b0,S as K1,T as w2,U as o1,V as C,W as r1,X as X1,Y as o,Z as r,_,a as $1,aa as O1,b as G,ba as F,c as d0,ca as Z1,d as C2,da as c2,e as _2,ea as e2,f as W,fa as y0,g as p0,ga as A1,h as D1,ha as R1,i as u0,ia as m,j as W1,ja as v0,k as k1,ka as x0,l as h0,la as N0,m as g0,ma as w,n as D,o as L0,oa as S0,p as b2,q as k,r as x,s as z0,sa as D2,t as q1,u as z,ua as t2,v as M0,va as w0,w as S,wa as f1,x as N,y as q,ya as n2,z as y2,za as T0}from"./chunk-63MIO7B7.mjs";import{a as p,b as v}from"./chunk-VVCT4QZE.mjs";function k2(c){c||(C0(k2),c=z(Q1));let s=new $1(e=>c.onDestroy(e.next.bind(e)));return e=>e.pipe(D(s))}var A4=["*"];var R4=["dialog"];var H0={animation:!0,transitionTimerDelayMs:5},G0=(()=>{class c{constructor(){this.animation=H0.animation}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();function I4(c){let{transitionDelay:s,transitionDuration:e}=window.getComputedStyle(c),t=parseFloat(s),n=parseFloat(e);return(t+n)*1e3}function V0(c){return typeof c=="string"}function d1(c){return c!=null}function P4(c){return c&&c.then}function U0(c){return(c||document.body).getBoundingClientRect()}function F4(c){return s=>new $1(e=>{let t=l=>c.run(()=>e.next(l)),n=l=>c.run(()=>e.error(l)),i=()=>c.run(()=>e.complete());return s.subscribe({next:t,error:n,complete:i})})}var B4=()=>{},{transitionTimerDelayMs:H4}=H0,i2=new Map,m1=(c,s,e,t)=>{let n=t.context||{},i=i2.get(s);if(i)switch(t.runningTransition){case"continue":return d0;case"stop":c.run(()=>i.transition$.complete()),n=Object.assign(i.context,n),i2.delete(s)}let l=e(s,t.animation,n)||B4;if(!t.animation||window.getComputedStyle(s).transitionProperty==="none")return c.run(()=>l()),C2(void 0).pipe(F4(c));let a=new G,f=new G,d=a.pipe(h0(!0));i2.set(s,{transition$:a,complete:()=>{f.next(),f.complete()},context:n});let h=I4(s);return c.runOutsideAngular(()=>{let L=W(s,"transitionend").pipe(D(d),D1(({target:T})=>T===s)),g=p0(h+H4).pipe(D(d));u0(g,L,f).pipe(D(d)).subscribe(()=>{i2.delete(s),c.run(()=>{l(),a.next(),a.complete()})})}),a.asObservable()};var j0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var $0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var W0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})(),q0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var Q=function(c){return c[c.Tab=9]="Tab",c[c.Enter=13]="Enter",c[c.Escape=27]="Escape",c[c.Space=32]="Space",c[c.PageUp=33]="PageUp",c[c.PageDown=34]="PageDown",c[c.End=35]="End",c[c.Home=36]="Home",c[c.ArrowLeft=37]="ArrowLeft",c[c.ArrowUp=38]="ArrowUp",c[c.ArrowRight=39]="ArrowRight",c[c.ArrowDown=40]="ArrowDown",c}(Q||{});var Dc=(()=>{let c=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,s=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(c()||s()):!1})();var G4=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function Y0(c){let s=Array.from(c.querySelectorAll(G4)).filter(e=>e.tabIndex!==-1);return[s[0],s[s.length-1]]}var V4=(c,s,e,t=!1)=>{c.runOutsideAngular(()=>{let n=W(s,"focusin").pipe(D(e),_2(i=>i.target));W(s,"keydown").pipe(D(e),D1(i=>i.which===Q.Tab),b2(n)).subscribe(([i,l])=>{let[a,f]=Y0(s);(l===a||l===s)&&i.shiftKey&&(f.focus(),i.preventDefault()),l===f&&!i.shiftKey&&(a.focus(),i.preventDefault())}),t&&W(s,"click").pipe(D(e),b2(n),_2(i=>i[1])).subscribe(i=>i.focus())})};var kc=new Date(1882,10,12),Ec=new Date(2174,10,25);var Oc=1e3*60*60*24;var A2=1080,U4=24*A2,j4=12*A2+793,Ac=29*U4+j4,Rc=11*A2+204;var Q0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var J0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})(),$4=(()=>{class c{constructor(){this._ngbConfig=z(G0),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),y1=class{constructor(s,e,t){this.nodes=s,this.viewRef=e,this.componentRef=t}};var W4=(()=>{class c{constructor(){this._document=z(f1)}hide(){let e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),t=this._document.body,n=t.style,{overflow:i,paddingRight:l}=n;if(e>0){let a=parseFloat(window.getComputedStyle(t).paddingRight);n.paddingRight=`${a+e}px`}return n.overflow="hidden",()=>{e>0&&(n.paddingRight=l),n.overflow=i}}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),q4=(()=>{class c{constructor(){this._nativeElement=z(e1).nativeElement,this._zone=z(K1)}ngOnInit(){this._zone.onStable.asObservable().pipe(k1(1)).subscribe(()=>{m1(this._zone,this._nativeElement,(e,t)=>{t&&U0(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return m1(this._zone,this._nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=S({type:c,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(t,n){t&2&&(X1("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),r1("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[w],decls:0,vars:0,template:function(t,n){},encapsulation:2})}}return c})(),l2=class{update(s){}close(s){}dismiss(s){}},Y4=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],Q4=["animation","backdropClass"],E2=class{_applyWindowOptions(s,e){Y4.forEach(t=>{d1(e[t])&&(s[t]=e[t])})}_applyBackdropOptions(s,e){Q4.forEach(t=>{d1(e[t])&&(s[t]=e[t])})}update(s){this._applyWindowOptions(this._windowCmptRef.instance,s),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,s)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(D(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(D(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(s,e,t,n){this._windowCmptRef=s,this._contentRef=e,this._backdropCmptRef=t,this._beforeDismiss=n,this._closed=new G,this._dismissed=new G,this._hidden=new G,s.instance.dismissEvent.subscribe(i=>{this.dismiss(i)}),this.result=new Promise((i,l)=>{this._resolve=i,this._reject=l}),this.result.then(null,()=>{})}close(s){this._windowCmptRef&&(this._closed.next(s),this._resolve(s),this._removeModalElements())}_dismiss(s){this._dismissed.next(s),this._reject(s),this._removeModalElements()}dismiss(s){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(s);else{let e=this._beforeDismiss();P4(e)?e.then(t=>{t!==!1&&this._dismiss(s)},()=>{}):e!==!1&&this._dismiss(s)}}_removeModalElements(){let s=this._windowCmptRef.instance.hide(),e=this._backdropCmptRef?this._backdropCmptRef.instance.hide():C2(void 0);s.subscribe(()=>{let{nativeElement:t}=this._windowCmptRef.location;t.parentNode.removeChild(t),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),e.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),W1(s,e).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},O2=function(c){return c[c.BACKDROP_CLICK=0]="BACKDROP_CLICK",c[c.ESC=1]="ESC",c}(O2||{}),J4=(()=>{class c{constructor(){this._document=z(f1),this._elRef=z(e1),this._zone=z(K1),this._closed$=new G,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new Y,this.shown=new G,this.hidden=new G}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":V0(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(k1(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:e}=this._elRef,t={animation:this.animation,runningTransition:"stop"},n=m1(this._zone,e,()=>e.classList.remove("show"),t),i=m1(this._zone,this._dialogEl.nativeElement,()=>{},t),l=W1(n,i);return l.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),l}_show(){let e={animation:this.animation,runningTransition:"continue"},t=m1(this._zone,this._elRef.nativeElement,(i,l)=>{l&&U0(i),i.classList.add("show")},e),n=m1(this._zone,this._dialogEl.nativeElement,()=>{},e);W1(t,n).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{W(e,"keydown").pipe(D(this._closed$),D1(n=>n.which===Q.Escape)).subscribe(n=>{this.keyboard?requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(O2.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let t=!1;W(this._dialogEl.nativeElement,"mousedown").pipe(D(this._closed$),L0(()=>t=!1),g0(()=>W(e,"mouseup").pipe(D(this._closed$),k1(1))),D1(({target:n})=>e===n)).subscribe(()=>{t=!0}),W(e,"click").pipe(D(this._closed$)).subscribe(({target:n})=>{e===n&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!t&&this._zone.run(()=>this.dismiss(O2.BACKDROP_CLICK))),t=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){let t=e.querySelector("[ngbAutofocus]"),n=Y0(e)[0];(t||n||e).focus()}}_restoreFocus(){let e=this._document.body,t=this._elWithFocus,n;t&&t.focus&&e.contains(t)?n=t:n=e,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&m1(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=S({type:c,selectors:[["ngb-modal-window"]],viewQuery:function(t,n){if(t&1&&y0(R4,7),t&2){let i;A1(i=R1())&&(n._dialogEl=i.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(t,n){t&2&&(o1("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),X1("modal d-block"+(n.windowClass?" "+n.windowClass:"")),r1("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[w],ngContentSelectors:A4,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(t,n){t&1&&(Z1(),o(0,"div",1,0)(2,"div",2),c2(3),r()()),t&2&&X1("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2})}}return c})(),K4=(()=>{class c{constructor(){this._applicationRef=z(S0),this._injector=z(E1),this._environmentInjector=z(y2),this._document=z(f1),this._scrollBar=z(W4),this._activeWindowCmptHasChanged=new G,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new Y;let e=z(K1);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let t=this._windowCmpts[this._windowCmpts.length-1];V4(e,t.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(t.location.nativeElement)}})}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,t,n){let i=n.container instanceof HTMLElement?n.container:d1(n.container)?this._document.querySelector(n.container):this._document.body;if(!i)throw new Error(`The specified modal container "${n.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let l=new l2;e=n.injector||e;let a=e.get(y2,null)||this._environmentInjector,f=this._getContentRef(e,a,t,l,n),d=n.backdrop!==!1?this._attachBackdrop(i):void 0,h=this._attachWindowComponent(i,f.nodes),L=new E2(h,f,d,n.beforeDismiss);return this._registerModalRef(L),this._registerWindowCmpt(h),L.hidden.pipe(k1(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),l.close=g=>{L.close(g)},l.dismiss=g=>{L.dismiss(g)},l.update=g=>{L.update(g)},L.update(n),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),d&&d.instance&&d.changeDetectorRef.detectChanges(),h.changeDetectorRef.detectChanges(),L}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(t=>t.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let t=t2(q4,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(t.hostView),e.appendChild(t.location.nativeElement),t}_attachWindowComponent(e,t){let n=t2(J4,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:t});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_getContentRef(e,t,n,i,l){return n?n instanceof S2?this._createFromTemplateRef(n,i):V0(n)?this._createFromString(n):this._createFromComponent(e,t,n,i,l):new y1([])}_createFromTemplateRef(e,t){let n={$implicit:t,close(l){t.close(l)},dismiss(l){t.dismiss(l)}},i=e.createEmbeddedView(n);return this._applicationRef.attachView(i),new y1([i.rootNodes],i)}_createFromString(e){let t=this._document.createTextNode(`${e}`);return new y1([[t]])}_createFromComponent(e,t,n,i,l){let a=E1.create({providers:[{provide:l2,useValue:i}],parent:e}),f=t2(n,{environmentInjector:t,elementInjector:a}),d=f.location.nativeElement;return l.scrollable&&d.classList.add("component-host-scrollable"),this._applicationRef.attachView(f.hostView),new y1([[d]],f.hostView,f)}_setAriaHidden(e){let t=e.parentElement;t&&e!==this._document.body&&(Array.from(t.children).forEach(n=>{n!==e&&n.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}),this._setAriaHidden(t))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,t)=>{e?t.setAttribute("aria-hidden",e):t.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){let t=()=>{let n=this._modalRefs.indexOf(e);n>-1&&(this._modalRefs.splice(n,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(t,t)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{let t=this._windowCmpts.indexOf(e);t>-1&&(this._windowCmpts.splice(t,1),this._activeWindowCmptHasChanged.next())})}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),X4=(()=>{class c{constructor(){this._injector=z(E1),this._modalStack=z(K4),this._config=z($4)}open(e,t={}){let n=p(v(p({},this._config),{animation:this._config.animation}),t);return this._modalStack.open(this._injector,e,n)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),K0=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({providers:[X4]})}}return c})(),Z4=(()=>{class c{constructor(){this._ngbConfig=z(G0),this.destroyOnHide=!0,this.orientation="horizontal",this.roles="tablist",this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),X0=c=>d1(c)&&c!=="",c6=0,e6=(()=>{class c{constructor(){this.templateRef=z(S2)}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275dir=q({type:c,selectors:[["ng-template","ngbNavContent",""]],standalone:!0})}}return c})(),Z0=(()=>{class c{constructor(e){this.role=e,this.nav=z(I1)}static{this.\u0275fac=function(t){return new(t||c)(Y1("role"))}}static{this.\u0275dir=q({type:c,selectors:[["","ngbNavItem","",5,"ng-container"]],hostVars:1,hostBindings:function(t,n){t&2&&o1("role",n.role?n.role:n.nav.roles?"presentation":void 0)},standalone:!0})}}return c})(),a2=(()=>{class c{constructor(){this._nav=z(I1),this._nativeElement=z(e1).nativeElement,this.disabled=!1,this.shown=new Y,this.hidden=new Y}ngAfterContentChecked(){this.contentTpl=this.contentTpls.first}ngOnInit(){d1(this.domId)||(this.domId=`ngb-nav-${c6++}`)}get active(){return this._nav.activeId===this.id}get id(){return X0(this._id)?this._id:this.domId}get panelDomId(){return`${this.domId}-panel`}isPanelInDom(){return(d1(this.destroyOnHide)?!this.destroyOnHide:!this._nav.destroyOnHide)||this.active}isNgContainer(){return this._nativeElement.nodeType===Node.COMMENT_NODE}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275dir=q({type:c,selectors:[["","ngbNavItem",""]],contentQueries:function(t,n,i){if(t&1&&e2(i,e6,4),t&2){let l;A1(l=R1())&&(n.contentTpls=l)}},hostVars:2,hostBindings:function(t,n){t&2&&r1("nav-item",!0)},inputs:{destroyOnHide:"destroyOnHide",disabled:"disabled",domId:"domId",_id:[M0.None,"ngbNavItem","_id"]},outputs:{shown:"shown",hidden:"hidden"},exportAs:["ngbNavItem"],standalone:!0})}}return c})(),I1=(()=>{class c{constructor(e){this.role=e,this._config=z(Z4),this._cd=z(D2),this._document=z(f1),this._nativeElement=z(e1).nativeElement,this.destroyRef=z(Q1),this._navigatingWithKeyboard=!1,this.activeIdChange=new Y,this.animation=this._config.animation,this.destroyOnHide=this._config.destroyOnHide,this.orientation=this._config.orientation,this.roles=this._config.roles,this.keyboard=this._config.keyboard,this.shown=new Y,this.hidden=new Y,this.navItemChange$=new G,this.navChange=new Y}click(e){e.disabled||this._updateActiveId(e.id)}onFocusout({relatedTarget:e}){this._nativeElement.contains(e)||(this._navigatingWithKeyboard=!1)}onKeyDown(e){if(this.roles!=="tablist"||!this.keyboard)return;let t=e.which,n=this.links.filter(a=>!a.navItem.disabled),{length:i}=n,l=-1;if(n.forEach((a,f)=>{a.nativeElement===this._document.activeElement&&(l=f)}),i){switch(t){case Q.ArrowUp:case Q.ArrowLeft:l=(l-1+i)%i;break;case Q.ArrowRight:case Q.ArrowDown:l=(l+1)%i;break;case Q.Home:l=0;break;case Q.End:l=i-1;break}this.keyboard==="changeWithArrows"&&this.select(n[l].navItem.id),n[l].nativeElement.focus(),this._navigatingWithKeyboard=!0,e.preventDefault()}}select(e){this._updateActiveId(e,!1)}ngAfterContentInit(){if(!d1(this.activeId)){let e=this.items.first?this.items.first.id:null;X0(e)&&(this._updateActiveId(e,!1),this._cd.detectChanges())}this.items.changes.pipe(k2(this.destroyRef)).subscribe(()=>this._notifyItemChanged(this.activeId))}ngOnChanges({activeId:e}){e&&!e.firstChange&&this._notifyItemChanged(e.currentValue)}_updateActiveId(e,t=!0){if(this.activeId!==e){let n=!1;t&&this.navChange.emit({activeId:this.activeId,nextId:e,preventDefault:()=>{n=!0}}),n||(this.activeId=e,this.activeIdChange.emit(e),this._notifyItemChanged(e))}}_notifyItemChanged(e){this.navItemChange$.next(this._getItemById(e))}_getItemById(e){return this.items&&this.items.find(t=>t.id===e)||null}static{this.\u0275fac=function(t){return new(t||c)(Y1("role"))}}static{this.\u0275dir=q({type:c,selectors:[["","ngbNav",""]],contentQueries:function(t,n,i){if(t&1&&(e2(i,a2,4),e2(i,o2,5)),t&2){let l;A1(l=R1())&&(n.items=l),A1(l=R1())&&(n.links=l)}},hostVars:6,hostBindings:function(t,n){t&1&&F("keydown.arrowLeft",function(l){return n.onKeyDown(l)})("keydown.arrowRight",function(l){return n.onKeyDown(l)})("keydown.arrowDown",function(l){return n.onKeyDown(l)})("keydown.arrowUp",function(l){return n.onKeyDown(l)})("keydown.Home",function(l){return n.onKeyDown(l)})("keydown.End",function(l){return n.onKeyDown(l)})("focusout",function(l){return n.onFocusout(l)}),t&2&&(o1("aria-orientation",n.orientation==="vertical"&&n.roles==="tablist"?"vertical":void 0)("role",n.role?n.role:n.roles?"tablist":void 0),r1("nav",!0)("flex-column",n.orientation==="vertical"))},inputs:{activeId:"activeId",animation:"animation",destroyOnHide:"destroyOnHide",orientation:"orientation",roles:"roles",keyboard:"keyboard"},outputs:{activeIdChange:"activeIdChange",shown:"shown",hidden:"hidden",navChange:"navChange"},exportAs:["ngbNav"],standalone:!0,features:[C1]})}}return c})(),o2=(()=>{class c{constructor(e){this.role=e,this.navItem=z(a2),this.nav=z(I1),this.nativeElement=z(e1).nativeElement}get tabindex(){return this.nav.keyboard===!1?this.navItem.disabled?-1:void 0:this.nav._navigatingWithKeyboard||this.navItem.disabled||!this.navItem.active?-1:void 0}static{this.\u0275fac=function(t){return new(t||c)(Y1("role"))}}static{this.\u0275dir=q({type:c,selectors:[["","ngbNavLink",""]],hostVars:14,hostBindings:function(t,n){t&2&&(O1("id",n.navItem.domId),o1("role",n.role?n.role:n.nav.roles?"tab":void 0)("tabindex",n.tabindex)("aria-controls",n.navItem.isPanelInDom()?n.navItem.panelDomId:null)("aria-selected",n.navItem.active)("aria-disabled",n.navItem.disabled),r1("nav-link",!0)("nav-item",n.navItem.isNgContainer())("active",n.navItem.active)("disabled",n.navItem.disabled))},standalone:!0})}}return c})(),c3=(()=>{class c extends o2{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=N2(c)))(n||c)}})()}static{this.\u0275dir=q({type:c,selectors:[["button","ngbNavLink",""]],hostAttrs:["type","button"],hostVars:1,hostBindings:function(t,n){t&1&&F("click",function(){return n.nav.click(n.navItem)}),t&2&&O1("disabled",n.navItem.disabled)},standalone:!0,features:[w2]})}}return c})();var e3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var t3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var n3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var s3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var i3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var l3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var a3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var o3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var r3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var Ic=new z0("live announcer delay",{providedIn:"root",factory:()=>100});var f3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var m3=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})(),t6=[j0,$0,W0,q0,Q0,J0,K0,e3,m3,t3,n3,s3,i3,l3,a3,o3,r3,f3],r2=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({imports:[t6,j0,$0,W0,q0,Q0,J0,K0,e3,m3,t3,n3,s3,i3,l3,a3,o3,r3,f3]})}}return c})();var p3=(()=>{class c{clearThemes(){this.document.body.classList.remove(A.LIGHT),this.document.body.classList.remove(A.DARK)}init(){let e=null;typeof window<"u"&&(e=A[localStorage.getItem(d3)],console.log("Initial theme: "+e),e==null&&(window.matchMedia("(prefers-color-scheme: dark)").matches?e=A.DARK:e=A.LIGHT)),this.currentTheme=e??A.LIGHT,this.clearThemes(),this.document.body.classList.add(this.currentTheme)}toggleTheme(){this.clearThemes();let e=this.currentTheme===A.LIGHT?A.DARK:A.LIGHT;this.currentTheme=e,this.document.body.classList.add(e),localStorage.setItem(d3,e.toUpperCase())}constructor(e){this.document=e,this.currentTheme=A.LIGHT,this.init()}static{this.\u0275fac=function(t){return new(t||c)(q1(f1))}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),d3="preferredTheme",A=function(c){return c.LIGHT="light",c.DARK="dark",c}(A||{});var u3={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]};var h3={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};var g3=()=>{},e0={},H3={},G3=null,V3={mark:g3,measure:g3};try{typeof window<"u"&&(e0=window),typeof document<"u"&&(H3=document),typeof MutationObserver<"u"&&(G3=MutationObserver),typeof performance<"u"&&(V3=performance)}catch{}var{userAgent:L3=""}=e0.navigator||{},s1=e0,b=H3,z3=G3,f2=V3,Hc=!!s1.document,Z=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",U3=~L3.indexOf("MSIE")||~L3.indexOf("Trident/"),y="classic",j3="duotone",R="sharp",I="sharp-duotone",i6=[y,j3,R,I],l6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},M3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},a6=["kit"],o6=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,r6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,f6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},m6={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},d6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},p6={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},u6={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},h6={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},$3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},g6=["solid","regular","light","thin","duotone","brands"],W3=[1,2,3,4,5,6,7,8,9,10],L6=W3.concat([11,12,13,14,15,16,17,18,19,20]),P1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z6=[...Object.keys(p6),...g6,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",P1.GROUP,P1.SWAP_OPACITY,P1.PRIMARY,P1.SECONDARY].concat(W3.map(c=>"".concat(c,"x"))).concat(L6.map(c=>"w-".concat(c))),M6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},C6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},_6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},C3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},K="___FONT_AWESOME___",H2=16,q3="fa",Y3="svg-inline--fa",g1="data-fa-i2svg",G2="data-fa-pseudo-element",b6="data-fa-pseudo-element-pending",t0="data-prefix",n0="data-icon",_3="fontawesome-i2svg",y6="async",v6=["HTML","HEAD","STYLE","SCRIPT"],Q3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),J3=[y,R,I];function U1(c){return new Proxy(c,{get(s,e){return e in s?s[e]:s[y]}})}var K3=p({},$3);K3[y]=p(p(p({},$3[y]),M3.kit),M3["kit-duotone"]);var u1=U1(K3),V2=p({},h6);V2[y]=p(p(p({},V2[y]),C3.kit),C3["kit-duotone"]);var G1=U1(V2),U2=p({},u6);U2[y]=p(p({},U2[y]),_6.kit);var h1=U1(U2),j2=p({},d6);j2[y]=p(p({},j2[y]),C6.kit);var x6=U1(j2),N6=o6,X3="fa-layers-text",S6=r6,w6=p({},l6),Gc=U1(w6),T6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],R2=P1,N1=new Set;Object.keys(G1[y]).map(N1.add.bind(N1));Object.keys(G1[R]).map(N1.add.bind(N1));Object.keys(G1[I]).map(N1.add.bind(N1));var D6=[...a6,...z6],B1=s1.FontAwesomeConfig||{};function k6(c){var s=b.querySelector("script["+c+"]");if(s)return s.getAttribute(c)}function E6(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[e,t]=s,n=E6(k6(e));n!=null&&(B1[t]=n)});var Z3={styleDefault:"solid",familyDefault:"classic",cssPrefix:q3,replacementClass:Y3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B1.familyPrefix&&(B1.cssPrefix=B1.familyPrefix);var S1=p(p({},Z3),B1);S1.autoReplaceSvg||(S1.observeMutations=!1);var u={};Object.keys(Z3).forEach(c=>{Object.defineProperty(u,c,{enumerable:!0,set:function(s){S1[c]=s,H1.forEach(e=>e(u))},get:function(){return S1[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(c){S1.cssPrefix=c,H1.forEach(s=>s(u))},get:function(){return S1.cssPrefix}});s1.FontAwesomeConfig=u;var H1=[];function O6(c){return H1.push(c),()=>{H1.splice(H1.indexOf(c),1)}}var t1=H2,V={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function A6(c){if(!c||!Z)return;let s=b.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=c;let e=b.head.childNodes,t=null;for(let n=e.length-1;n>-1;n--){let i=e[n],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(t=i)}return b.head.insertBefore(s,t),c}var R6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function V1(){let c=12,s="";for(;c-- >0;)s+=R6[Math.random()*62|0];return s}function w1(c){let s=[];for(let e=(c||[]).length>>>0;e--;)s[e]=c[e];return s}function s0(c){return c.classList?w1(c.classList):(c.getAttribute("class")||"").split(" ").filter(s=>s)}function c4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I6(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,'="').concat(c4(c[e]),'" '),"").trim()}function h2(c){return Object.keys(c||{}).reduce((s,e)=>s+"".concat(e,": ").concat(c[e].trim(),";"),"")}function i0(c){return c.size!==V.size||c.x!==V.x||c.y!==V.y||c.rotate!==V.rotate||c.flipX||c.flipY}function P6(c){let{transform:s,containerWidth:e,iconWidth:t}=c,n={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),a="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(i," ").concat(l," ").concat(a)},d={transform:"translate(".concat(t/2*-1," -256)")};return{outer:n,inner:f,path:d}}function F6(c){let{transform:s,width:e=H2,height:t=H2,startCentered:n=!1}=c,i="";return n&&U3?i+="translate(".concat(s.x/t1-e/2,"em, ").concat(s.y/t1-t/2,"em) "):n?i+="translate(calc(-50% + ".concat(s.x/t1,"em), calc(-50% + ").concat(s.y/t1,"em)) "):i+="translate(".concat(s.x/t1,"em, ").concat(s.y/t1,"em) "),i+="scale(".concat(s.size/t1*(s.flipX?-1:1),", ").concat(s.size/t1*(s.flipY?-1:1),") "),i+="rotate(".concat(s.rotate,"deg) "),i}var B6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function e4(){let c=q3,s=Y3,e=u.cssPrefix,t=u.replacementClass,n=B6;if(e!==c||t!==s){let i=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),a=new RegExp("\\.".concat(s),"g");n=n.replace(i,".".concat(e,"-")).replace(l,"--".concat(e,"-")).replace(a,".".concat(t))}return n}var b3=!1;function I2(){u.autoAddCss&&!b3&&(A6(e4()),b3=!0)}var H6={mixout(){return{dom:{css:e4,insertCss:I2}}},hooks(){return{beforeDOMElementCreation(){I2()},beforeI2svg(){I2()}}}},X=s1||{};X[K]||(X[K]={});X[K].styles||(X[K].styles={});X[K].hooks||(X[K].hooks={});X[K].shims||(X[K].shims=[]);var U=X[K],t4=[],n4=function(){b.removeEventListener("DOMContentLoaded",n4),p2=1,t4.map(c=>c())},p2=!1;Z&&(p2=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),p2||b.addEventListener("DOMContentLoaded",n4));function G6(c){Z&&(p2?setTimeout(c,0):t4.push(c))}function j1(c){let{tag:s,attributes:e={},children:t=[]}=c;return typeof c=="string"?c4(c):"<".concat(s," ").concat(I6(e),">").concat(t.map(j1).join(""),"</").concat(s,">")}function y3(c,s,e){if(c&&c[s]&&c[s][e])return{prefix:s,iconName:e,icon:c[s][e]}}var V6=function(s,e){return function(t,n,i,l){return s.call(e,t,n,i,l)}},P2=function(s,e,t,n){var i=Object.keys(s),l=i.length,a=n!==void 0?V6(e,n):e,f,d,h;for(t===void 0?(f=1,h=s[i[0]]):(f=0,h=t);f<l;f++)d=i[f],h=a(h,s[d],d,s);return h};function U6(c){let s=[],e=0,t=c.length;for(;e<t;){let n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<t){let i=c.charCodeAt(e++);(i&64512)==56320?s.push(((n&1023)<<10)+(i&1023)+65536):(s.push(n),e--)}else s.push(n)}return s}function $2(c){let s=U6(c);return s.length===1?s[0].toString(16):null}function j6(c,s){let e=c.length,t=c.charCodeAt(s),n;return t>=55296&&t<=56319&&e>s+1&&(n=c.charCodeAt(s+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function v3(c){return Object.keys(c).reduce((s,e)=>{let t=c[e];return!!t.icon?s[t.iconName]=t.icon:s[e]=t,s},{})}function W2(c,s){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:t=!1}=e,n=v3(s);typeof U.hooks.addPack=="function"&&!t?U.hooks.addPack(c,v3(s)):U.styles[c]=p(p({},U.styles[c]||{}),n),c==="fas"&&W2("fa",s)}var{styles:p1,shims:$6}=U,W6={[y]:Object.values(h1[y]),[R]:Object.values(h1[R]),[I]:Object.values(h1[I])},l0=null,s4={},i4={},l4={},a4={},o4={},q6={[y]:Object.keys(u1[y]),[R]:Object.keys(u1[R]),[I]:Object.keys(u1[I])};function Y6(c){return~D6.indexOf(c)}function Q6(c,s){let e=s.split("-"),t=e[0],n=e.slice(1).join("-");return t===c&&n!==""&&!Y6(n)?n:null}var r4=()=>{let c=t=>P2(p1,(n,i,l)=>(n[l]=P2(i,t,{}),n),{});s4=c((t,n,i)=>(n[3]&&(t[n[3]]=i),n[2]&&n[2].filter(a=>typeof a=="number").forEach(a=>{t[a.toString(16)]=i}),t)),i4=c((t,n,i)=>(t[i]=i,n[2]&&n[2].filter(a=>typeof a=="string").forEach(a=>{t[a]=i}),t)),o4=c((t,n,i)=>{let l=n[2];return t[i]=i,l.forEach(a=>{t[a]=i}),t});let s="far"in p1||u.autoFetchSvg,e=P2($6,(t,n)=>{let i=n[0],l=n[1],a=n[2];return l==="far"&&!s&&(l="fas"),typeof i=="string"&&(t.names[i]={prefix:l,iconName:a}),typeof i=="number"&&(t.unicodes[i.toString(16)]={prefix:l,iconName:a}),t},{names:{},unicodes:{}});l4=e.names,a4=e.unicodes,l0=g2(u.styleDefault,{family:u.familyDefault})};O6(c=>{l0=g2(c.styleDefault,{family:u.familyDefault})});r4();function a0(c,s){return(s4[c]||{})[s]}function J6(c,s){return(i4[c]||{})[s]}function n1(c,s){return(o4[c]||{})[s]}function f4(c){return l4[c]||{prefix:null,iconName:null}}function K6(c){let s=a4[c],e=a0("fas",c);return s||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function i1(){return l0}var o0=()=>({prefix:null,iconName:null,rest:[]});function g2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=y}=s,t=u1[e][c],n=G1[e][c]||G1[e][t],i=c in U.styles?c:null;return n||i||null}var X6={[y]:Object.keys(h1[y]),[R]:Object.keys(h1[R]),[I]:Object.keys(h1[I])};function L2(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=s,t={[y]:"".concat(u.cssPrefix,"-").concat(y),[R]:"".concat(u.cssPrefix,"-").concat(R),[I]:"".concat(u.cssPrefix,"-").concat(I)},n=null,i=y,l=i6.filter(f=>f!==j3);l.forEach(f=>{(c.includes(t[f])||c.some(d=>X6[f].includes(d)))&&(i=f)});let a=c.reduce((f,d)=>{let h=Q6(u.cssPrefix,d);if(p1[d]?(d=W6[i].includes(d)?x6[i][d]:d,n=d,f.prefix=d):q6[i].indexOf(d)>-1?(n=d,f.prefix=g2(d,{family:i})):h?f.iconName=h:d!==u.replacementClass&&!l.some(L=>d===t[L])&&f.rest.push(d),!e&&f.prefix&&f.iconName){let L=n==="fa"?f4(f.iconName):{},g=n1(f.prefix,f.iconName);L.prefix&&(n=null),f.iconName=L.iconName||g||f.iconName,f.prefix=L.prefix||f.prefix,f.prefix==="far"&&!p1.far&&p1.fas&&!u.autoFetchSvg&&(f.prefix="fas")}return f},o0());return(c.includes("fa-brands")||c.includes("fab"))&&(a.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(a.prefix="fad"),!a.prefix&&i===R&&(p1.fass||u.autoFetchSvg)&&(a.prefix="fass",a.iconName=n1(a.prefix,a.iconName)||a.iconName),!a.prefix&&i===I&&(p1.fasds||u.autoFetchSvg)&&(a.prefix="fasds",a.iconName=n1(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||n==="fa")&&(a.prefix=i1()||"fas"),a}var q2=class{constructor(){this.definitions={}}add(){for(var s=arguments.length,e=new Array(s),t=0;t<s;t++)e[t]=arguments[t];let n=e.reduce(this._pullDefinitions,{});Object.keys(n).forEach(i=>{this.definitions[i]=p(p({},this.definitions[i]||{}),n[i]),W2(i,n[i]);let l=h1[y][i];l&&W2(l,n[i]),r4()})}reset(){this.definitions={}}_pullDefinitions(s,e){let t=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(t).map(n=>{let{prefix:i,iconName:l,icon:a}=t[n],f=a[2];s[i]||(s[i]={}),f.length>0&&f.forEach(d=>{typeof d=="string"&&(s[i][d]=a)}),s[i][l]=a}),s}},x3=[],v1={},x1={},Z6=Object.keys(x1);function c8(c,s){let{mixoutsTo:e}=s;return x3=c,v1={},Object.keys(x1).forEach(t=>{Z6.indexOf(t)===-1&&delete x1[t]}),x3.forEach(t=>{let n=t.mixout?t.mixout():{};if(Object.keys(n).forEach(i=>{typeof n[i]=="function"&&(e[i]=n[i]),typeof n[i]=="object"&&Object.keys(n[i]).forEach(l=>{e[i]||(e[i]={}),e[i][l]=n[i][l]})}),t.hooks){let i=t.hooks();Object.keys(i).forEach(l=>{v1[l]||(v1[l]=[]),v1[l].push(i[l])})}t.provides&&t.provides(x1)}),e}function Y2(c,s){for(var e=arguments.length,t=new Array(e>2?e-2:0),n=2;n<e;n++)t[n-2]=arguments[n];return(v1[c]||[]).forEach(l=>{s=l.apply(null,[s,...t])}),s}function L1(c){for(var s=arguments.length,e=new Array(s>1?s-1:0),t=1;t<s;t++)e[t-1]=arguments[t];(v1[c]||[]).forEach(i=>{i.apply(null,e)})}function l1(){let c=arguments[0],s=Array.prototype.slice.call(arguments,1);return x1[c]?x1[c].apply(null,s):void 0}function Q2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:s}=c,e=c.prefix||i1();if(s)return s=n1(e,s)||s,y3(m4.definitions,e,s)||y3(U.styles,e,s)}var m4=new q2,e8=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,L1("noAuto")},t8={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Z?(L1("beforeI2svg",c),l1("pseudoElements2svg",c),l1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s}=c;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,G6(()=>{s8({autoReplaceSvgRoot:s}),L1("watch",c)})}},n8={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:n1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let s=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=g2(c[0]);return{prefix:e,iconName:n1(e,s)||s}}if(typeof c=="string"&&(c.indexOf("".concat(u.cssPrefix,"-"))>-1||c.match(N6))){let s=L2(c.split(" "),{skipLookups:!0});return{prefix:s.prefix||i1(),iconName:n1(s.prefix,s.iconName)||s.iconName}}if(typeof c=="string"){let s=i1();return{prefix:s,iconName:n1(s,c)||c}}}},P={noAuto:e8,config:u,dom:t8,parse:n8,library:m4,findIconDefinition:Q2,toHtml:j1},s8=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:s=b}=c;(Object.keys(U.styles).length>0||u.autoFetchSvg)&&Z&&u.autoReplaceSvg&&P.dom.i2svg({node:s})};function z2(c,s){return Object.defineProperty(c,"abstract",{get:s}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>j1(e))}}),Object.defineProperty(c,"node",{get:function(){if(!Z)return;let e=b.createElement("div");return e.innerHTML=c.html,e.children}}),c}function i8(c){let{children:s,main:e,mask:t,attributes:n,styles:i,transform:l}=c;if(i0(l)&&e.found&&!t.found){let{width:a,height:f}=e,d={x:a/f/2,y:.5};n.style=h2(v(p({},i),{"transform-origin":"".concat(d.x+l.x/16,"em ").concat(d.y+l.y/16,"em")}))}return[{tag:"svg",attributes:n,children:s}]}function l8(c){let{prefix:s,iconName:e,children:t,attributes:n,symbol:i}=c,l=i===!0?"".concat(s,"-").concat(u.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(p({},n),{id:l}),children:t}]}]}function r0(c){let{icons:{main:s,mask:e},prefix:t,iconName:n,transform:i,symbol:l,title:a,maskId:f,titleId:d,extra:h,watchable:L=!1}=c,{width:g,height:T}=e.found?e:s,c1=t==="fak",a1=[u.replacementClass,n?"".concat(u.cssPrefix,"-").concat(n):""].filter(M1=>h.classes.indexOf(M1)===-1).filter(M1=>M1!==""||!!M1).concat(h.classes).join(" "),B={children:[],attributes:v(p({},h.attributes),{"data-prefix":t,"data-icon":n,class:a1,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(T)})},$=c1&&!~h.classes.indexOf("fa-fw")?{width:"".concat(g/T*16*.0625,"em")}:{};L&&(B.attributes[g1]=""),a&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(d||V1())},children:[a]}),delete B.attributes.title);let O=v(p({},B),{prefix:t,iconName:n,main:s,mask:e,maskId:f,transform:i,symbol:l,styles:p(p({},$),h.styles)}),{children:H,attributes:z1}=e.found&&s.found?l1("generateAbstractMask",O)||{children:[],attributes:{}}:l1("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=H,O.attributes=z1,l?l8(O):i8(O)}function N3(c){let{content:s,width:e,height:t,transform:n,title:i,extra:l,watchable:a=!1}=c,f=v(p(p({},l.attributes),i?{title:i}:{}),{class:l.classes.join(" ")});a&&(f[g1]="");let d=p({},l.styles);i0(n)&&(d.transform=F6({transform:n,startCentered:!0,width:e,height:t}),d["-webkit-transform"]=d.transform);let h=h2(d);h.length>0&&(f.style=h);let L=[];return L.push({tag:"span",attributes:f,children:[s]}),i&&L.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),L}function a8(c){let{content:s,title:e,extra:t}=c,n=v(p(p({},t.attributes),e?{title:e}:{}),{class:t.classes.join(" ")}),i=h2(t.styles);i.length>0&&(n.style=i);let l=[];return l.push({tag:"span",attributes:n,children:[s]}),e&&l.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),l}var{styles:F2}=U;function J2(c){let s=c[0],e=c[1],[t]=c.slice(4),n=null;return Array.isArray(t)?n={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(R2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(R2.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(R2.PRIMARY),fill:"currentColor",d:t[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:s,height:e,icon:n}}var o8={found:!1,width:512,height:512};function r8(c,s){!Q3&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(s,'" is missing.'))}function K2(c,s){let e=s;return s==="fa"&&u.styleDefault!==null&&(s=i1()),new Promise((t,n)=>{if(e==="fa"){let i=f4(c)||{};c=i.iconName||c,s=i.prefix||s}if(c&&s&&F2[s]&&F2[s][c]){let i=F2[s][c];return t(J2(i))}r8(c,s),t(v(p({},o8),{icon:u.showMissingIcons&&c?l1("missingIconAbstract")||{}:{}}))})}var S3=()=>{},X2=u.measurePerformance&&f2&&f2.mark&&f2.measure?f2:{mark:S3,measure:S3},F1='FA "6.6.0"',f8=c=>(X2.mark("".concat(F1," ").concat(c," begins")),()=>d4(c)),d4=c=>{X2.mark("".concat(F1," ").concat(c," ends")),X2.measure("".concat(F1," ").concat(c),"".concat(F1," ").concat(c," begins"),"".concat(F1," ").concat(c," ends"))},f0={begin:f8,end:d4},m2=()=>{};function w3(c){return typeof(c.getAttribute?c.getAttribute(g1):null)=="string"}function m8(c){let s=c.getAttribute?c.getAttribute(t0):null,e=c.getAttribute?c.getAttribute(n0):null;return s&&e}function d8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function p8(){return u.autoReplaceSvg===!0?d2.replace:d2[u.autoReplaceSvg]||d2.replace}function u8(c){return b.createElementNS("http://www.w3.org/2000/svg",c)}function h8(c){return b.createElement(c)}function p4(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?u8:h8}=s;if(typeof c=="string")return b.createTextNode(c);let t=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){t.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){t.appendChild(p4(i,{ceFn:e}))}),t}function g8(c){let s=" ".concat(c.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}var d2={replace:function(c){let s=c[0];if(s.parentNode)if(c[1].forEach(e=>{s.parentNode.insertBefore(p4(e),s)}),s.getAttribute(g1)===null&&u.keepOriginalSource){let e=b.createComment(g8(s));s.parentNode.replaceChild(e,s)}else s.remove()},nest:function(c){let s=c[0],e=c[1];if(~s0(s).indexOf(u.replacementClass))return d2.replace(c);let t=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let i=e[0].attributes.class.split(" ").reduce((l,a)=>(a===u.replacementClass||a.match(t)?l.toSvg.push(a):l.toNode.push(a),l),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",i.toNode.join(" "))}let n=e.map(i=>j1(i)).join(`
`);s.setAttribute(g1,""),s.innerHTML=n}};function T3(c){c()}function u4(c,s){let e=typeof s=="function"?s:m2;if(c.length===0)e();else{let t=T3;u.mutateApproach===y6&&(t=s1.requestAnimationFrame||T3),t(()=>{let n=p8(),i=f0.begin("mutate");c.map(n),i(),e()})}}var m0=!1;function h4(){m0=!0}function Z2(){m0=!1}var u2=null;function D3(c){if(!z3||!u.observeMutations)return;let{treeCallback:s=m2,nodeCallback:e=m2,pseudoElementsCallback:t=m2,observeMutationsRoot:n=b}=c;u2=new z3(i=>{if(m0)return;let l=i1();w1(i).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!w3(a.addedNodes[0])&&(u.searchPseudoElements&&t(a.target),s(a.target)),a.type==="attributes"&&a.target.parentNode&&u.searchPseudoElements&&t(a.target.parentNode),a.type==="attributes"&&w3(a.target)&&~T6.indexOf(a.attributeName))if(a.attributeName==="class"&&m8(a.target)){let{prefix:f,iconName:d}=L2(s0(a.target));a.target.setAttribute(t0,f||l),d&&a.target.setAttribute(n0,d)}else d8(a.target)&&e(a.target)})}),Z&&u2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function L8(){u2&&u2.disconnect()}function z8(c){let s=c.getAttribute("style"),e=[];return s&&(e=s.split(";").reduce((t,n)=>{let i=n.split(":"),l=i[0],a=i.slice(1);return l&&a.length>0&&(t[l]=a.join(":").trim()),t},{})),e}function M8(c){let s=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),t=c.innerText!==void 0?c.innerText.trim():"",n=L2(s0(c));return n.prefix||(n.prefix=i1()),s&&e&&(n.prefix=s,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&t.length>0&&(n.iconName=J6(n.prefix,c.innerText)||a0(n.prefix,$2(c.innerText))),!n.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function C8(c){let s=w1(c.attributes).reduce((n,i)=>(n.name!=="class"&&n.name!=="style"&&(n[i.name]=i.value),n),{}),e=c.getAttribute("title"),t=c.getAttribute("data-fa-title-id");return u.autoA11y&&(e?s["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(t||V1()):(s["aria-hidden"]="true",s.focusable="false")),s}function _8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:V,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:t,rest:n}=M8(c),i=C8(c),l=Y2("parseNodeAttributes",{},c),a=s.styleParser?z8(c):[];return p({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:V,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:a,attributes:i}},l)}var{styles:b8}=U;function g4(c){let s=u.autoReplaceSvg==="nest"?k3(c,{styleParser:!1}):k3(c);return~s.extra.classes.indexOf(X3)?l1("generateLayersText",c,s):l1("generateSvgReplacementMutation",c,s)}var j=new Set;J3.map(c=>{j.add("fa-".concat(c))});Object.keys(u1[y]).map(j.add.bind(j));Object.keys(u1[R]).map(j.add.bind(j));Object.keys(u1[I]).map(j.add.bind(j));j=[...j];function E3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Z)return Promise.resolve();let e=b.documentElement.classList,t=h=>e.add("".concat(_3,"-").concat(h)),n=h=>e.remove("".concat(_3,"-").concat(h)),i=u.autoFetchSvg?j:J3.map(h=>"fa-".concat(h)).concat(Object.keys(b8));i.includes("fa")||i.push("fa");let l=[".".concat(X3,":not([").concat(g1,"])")].concat(i.map(h=>".".concat(h,":not([").concat(g1,"])"))).join(", ");if(l.length===0)return Promise.resolve();let a=[];try{a=w1(c.querySelectorAll(l))}catch{}if(a.length>0)t("pending"),n("complete");else return Promise.resolve();let f=f0.begin("onTree"),d=a.reduce((h,L)=>{try{let g=g4(L);g&&h.push(g)}catch(g){Q3||g.name==="MissingIcon"&&console.error(g)}return h},[]);return new Promise((h,L)=>{Promise.all(d).then(g=>{u4(g,()=>{t("active"),t("complete"),n("pending"),typeof s=="function"&&s(),f(),h()})}).catch(g=>{f(),L(g)})})}function y8(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;g4(c).then(e=>{e&&u4([e],s)})}function v8(c){return function(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(s||{}).icon?s:Q2(s||{}),{mask:n}=e;return n&&(n=(n||{}).icon?n:Q2(n||{})),c(t,v(p({},e),{mask:n}))}}var x8=function(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=V,symbol:t=!1,mask:n=null,maskId:i=null,title:l=null,titleId:a=null,classes:f=[],attributes:d={},styles:h={}}=s;if(!c)return;let{prefix:L,iconName:g,icon:T}=c;return z2(p({type:"icon"},c),()=>(L1("beforeDOMElementCreation",{iconDefinition:c,params:s}),u.autoA11y&&(l?d["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||V1()):(d["aria-hidden"]="true",d.focusable="false")),r0({icons:{main:J2(T),mask:n?J2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:g,transform:p(p({},V),e),symbol:t,title:l,maskId:i,titleId:a,extra:{attributes:d,styles:h,classes:f}})))},N8={mixout(){return{icon:v8(x8)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=E3,c.nodeCallback=y8,c}}},provides(c){c.i2svg=function(s){let{node:e=b,callback:t=()=>{}}=s;return E3(e,t)},c.generateSvgReplacementMutation=function(s,e){let{iconName:t,title:n,titleId:i,prefix:l,transform:a,symbol:f,mask:d,maskId:h,extra:L}=e;return new Promise((g,T)=>{Promise.all([K2(t,l),d.iconName?K2(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c1=>{let[a1,B]=c1;g([s,r0({icons:{main:a1,mask:B},prefix:l,iconName:t,transform:a,symbol:f,maskId:h,title:n,titleId:i,extra:L,watchable:!0})])}).catch(T)})},c.generateAbstractIcon=function(s){let{children:e,attributes:t,main:n,transform:i,styles:l}=s,a=h2(l);a.length>0&&(t.style=a);let f;return i0(i)&&(f=l1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),e.push(f||n.icon),{children:e,attributes:t}}}},S8={mixout(){return{layer(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=s;return z2({type:"layer"},()=>{L1("beforeDOMElementCreation",{assembler:c,params:s});let t=[];return c(n=>{Array.isArray(n)?n.map(i=>{t=t.concat(i.abstract)}):t=t.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...e].join(" ")},children:t}]})}}}},w8={mixout(){return{counter(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:t=[],attributes:n={},styles:i={}}=s;return z2({type:"counter",content:c},()=>(L1("beforeDOMElementCreation",{content:c,params:s}),a8({content:c.toString(),title:e,extra:{attributes:n,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...t]}})))}}}},T8={mixout(){return{text(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=V,title:t=null,classes:n=[],attributes:i={},styles:l={}}=s;return z2({type:"text",content:c},()=>(L1("beforeDOMElementCreation",{content:c,params:s}),N3({content:c,transform:p(p({},V),e),title:t,extra:{attributes:i,styles:l,classes:["".concat(u.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(s,e){let{title:t,transform:n,extra:i}=e,l=null,a=null;if(U3){let f=parseInt(getComputedStyle(s).fontSize,10),d=s.getBoundingClientRect();l=d.width/f,a=d.height/f}return u.autoA11y&&!t&&(i.attributes["aria-hidden"]="true"),Promise.resolve([s,N3({content:s.innerHTML,width:l,height:a,transform:n,title:t,extra:i,watchable:!0})])}}},D8=new RegExp('"',"ug"),O3=[1105920,1112319],A3=p(p(p({FontAwesome:{normal:"fas",400:"fas"}},m6),f6),M6),c0=Object.keys(A3).reduce((c,s)=>(c[s.toLowerCase()]=A3[s],c),{}),k8=Object.keys(c0).reduce((c,s)=>{let e=c0[s];return c[s]=e[900]||[...Object.entries(e)][0][1],c},{});function E8(c){let s=c.replace(D8,""),e=j6(s,0),t=e>=O3[0]&&e<=O3[1],n=s.length===2?s[0]===s[1]:!1;return{value:$2(n?s[0]:s),isSecondary:t||n}}function O8(c,s){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(s),n=isNaN(t)?"normal":t;return(c0[e]||{})[n]||k8[e]}function R3(c,s){let e="".concat(b6).concat(s.replace(":","-"));return new Promise((t,n)=>{if(c.getAttribute(e)!==null)return t();let l=w1(c.children).filter(g=>g.getAttribute(G2)===s)[0],a=s1.getComputedStyle(c,s),f=a.getPropertyValue("font-family"),d=f.match(S6),h=a.getPropertyValue("font-weight"),L=a.getPropertyValue("content");if(l&&!d)return c.removeChild(l),t();if(d&&L!=="none"&&L!==""){let g=a.getPropertyValue("content"),T=O8(f,h),{value:c1,isSecondary:a1}=E8(g),B=d[0].startsWith("FontAwesome"),$=a0(T,c1),O=$;if(B){let H=K6(c1);H.iconName&&H.prefix&&($=H.iconName,T=H.prefix)}if($&&!a1&&(!l||l.getAttribute(t0)!==T||l.getAttribute(n0)!==O)){c.setAttribute(e,O),l&&c.removeChild(l);let H=_8(),{extra:z1}=H;z1.attributes[G2]=s,K2($,T).then(M1=>{let E4=r0(v(p({},H),{icons:{main:M1,mask:o0()},prefix:T,iconName:O,extra:z1,watchable:!0})),M2=b.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?c.insertBefore(M2,c.firstChild):c.appendChild(M2),M2.outerHTML=E4.map(O4=>j1(O4)).join(`
`),c.removeAttribute(e),t()}).catch(n)}else t()}else t()})}function A8(c){return Promise.all([R3(c,"::before"),R3(c,"::after")])}function R8(c){return c.parentNode!==document.head&&!~v6.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(G2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function I3(c){if(Z)return new Promise((s,e)=>{let t=w1(c.querySelectorAll("*")).filter(R8).map(A8),n=f0.begin("searchPseudoElements");h4(),Promise.all(t).then(()=>{n(),Z2(),s()}).catch(()=>{n(),Z2(),e()})})}var I8={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=I3,c}}},provides(c){c.pseudoElements2svg=function(s){let{node:e=b}=s;u.searchPseudoElements&&I3(e)}}},P3=!1,P8={mixout(){return{dom:{unwatch(){h4(),P3=!0}}}},hooks(){return{bootstrap(){D3(Y2("mutationObserverCallbacks",{}))},noAuto(){L8()},watch(c){let{observeMutationsRoot:s}=c;P3?Z2():D3(Y2("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},F3=c=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,t)=>{let n=t.toLowerCase().split("-"),i=n[0],l=n.slice(1).join("-");if(i&&l==="h")return e.flipX=!0,e;if(i&&l==="v")return e.flipY=!0,e;if(l=parseFloat(l),isNaN(l))return e;switch(i){case"grow":e.size=e.size+l;break;case"shrink":e.size=e.size-l;break;case"left":e.x=e.x-l;break;case"right":e.x=e.x+l;break;case"up":e.y=e.y-l;break;case"down":e.y=e.y+l;break;case"rotate":e.rotate=e.rotate+l;break}return e},s)},F8={mixout(){return{parse:{transform:c=>F3(c)}}},hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-transform");return e&&(c.transform=F3(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(s){let{main:e,transform:t,containerWidth:n,iconWidth:i}=s,l={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),f="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),d="rotate(".concat(t.rotate," 0 0)"),h={transform:"".concat(a," ").concat(f," ").concat(d)},L={transform:"translate(".concat(i/2*-1," -256)")},g={outer:l,inner:h,path:L};return{tag:"g",attributes:p({},g.outer),children:[{tag:"g",attributes:p({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:p(p({},e.icon.attributes),g.path)}]}]}}}},B2={x:0,y:0,width:"100%",height:"100%"};function B3(c){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||s)&&(c.attributes.fill="black"),c}function B8(c){return c.tag==="g"?c.children:[c]}var H8={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-mask"),t=e?L2(e.split(" ").map(n=>n.trim())):o0();return t.prefix||(t.prefix=i1()),c.mask=t,c.maskId=s.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(s){let{children:e,attributes:t,main:n,mask:i,maskId:l,transform:a}=s,{width:f,icon:d}=n,{width:h,icon:L}=i,g=P6({transform:a,containerWidth:h,iconWidth:f}),T={tag:"rect",attributes:v(p({},B2),{fill:"white"})},c1=d.children?{children:d.children.map(B3)}:{},a1={tag:"g",attributes:p({},g.inner),children:[B3(p({tag:d.tag,attributes:p(p({},d.attributes),g.path)},c1))]},B={tag:"g",attributes:p({},g.outer),children:[a1]},$="mask-".concat(l||V1()),O="clip-".concat(l||V1()),H={tag:"mask",attributes:v(p({},B2),{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,B]},z1={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:B8(L)},H]};return e.push(z1,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat($,")")},B2)}),{children:e,attributes:t}}}},G8={provides(c){let s=!1;s1.matchMedia&&(s=s1.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],t={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:v(p({},t),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=v(p({},n),{attributeName:"opacity"}),l={tag:"circle",attributes:v(p({},t),{cx:"256",cy:"364",r:"28"}),children:[]};return s||l.children.push({tag:"animate",attributes:v(p({},n),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(p({},i),{values:"1;0;1;1;0;1;"})}),e.push(l),e.push({tag:"path",attributes:v(p({},t),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:v(p({},i),{values:"1;0;0;0;0;1;"})}]}),s||e.push({tag:"path",attributes:v(p({},t),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(p({},i),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},V8={hooks(){return{parseNodeAttributes(c,s){let e=s.getAttribute("data-fa-symbol"),t=e===null?!1:e===""?!0:e;return c.symbol=t,c}}}},U8=[H6,N8,S8,w8,T8,I8,P8,F8,H8,G8,V8];c8(U8,{mixoutsTo:P});var Vc=P.noAuto,Uc=P.config,jc=P.library,$c=P.dom,L4=P.parse,Wc=P.findIconDefinition,qc=P.toHtml,z4=P.icon,Yc=P.layer,j8=P.text,$8=P.counter;var W8=["*"],q8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},Y8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Q8=c=>{let s={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(s).map(e=>s[e]?e:null).filter(e=>e)},J8=c=>c.prefix!==void 0&&c.iconName!==void 0,K8=(c,s)=>J8(c)?c:typeof c=="string"?{prefix:s,iconName:c}:{prefix:c[0],iconName:c[1]},X8=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),Z8=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let t of e){t.prefix in this.definitions||(this.definitions[t.prefix]={}),this.definitions[t.prefix][t.iconName]=t;for(let n of t.icon[2])typeof n=="string"&&(this.definitions[t.prefix][n]=t)}}addIconPacks(...e){for(let t of e){let n=Object.keys(t).map(i=>t[i]);this.addIcons(...n)}}getIconDefinition(e,t){return e in this.definitions&&t in this.definitions[e]?this.definitions[e][t]:null}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),c5=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275dir=q({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[C1]})}}return c})(),e5=(()=>{class c{constructor(e,t){this.renderer=e,this.elementRef=t}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(t){return new(t||c)(E(b0),E(e1))}}static{this.\u0275cmp=S({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[C1,w],ngContentSelectors:W8,decls:1,vars:0,template:function(t,n){t&1&&(Z1(),c2(0))},encapsulation:2})}}return c})(),M4=(()=>{class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,t,n,i,l){this.sanitizer=e,this.config=t,this.iconLibrary=n,this.stackItem=i,this.classes=[],l!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){Y8();return}if(e){let t=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(t);if(n!=null){let i=this.buildParams();this.renderIcon(n,i)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let t=K8(e,this.config.defaultPrefix);if("icon"in t)return t;let n=this.iconLibrary.getIconDefinition(t.prefix,t.iconName);return n??(q8(t),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},t=typeof this.transform=="string"?L4.transform(this.transform):this.transform;return{title:this.title,transform:t,classes:[...Q8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,t){let n=z4(e,t);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}static{this.\u0275fac=function(t){return new(t||c)(E(O0),E(X8),E(Z8),E(c5,8),E(e5,8))}}static{this.\u0275cmp=S({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(t,n){t&2&&(O1("innerHTML",n.renderedIconHTML,_0),o1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[C1,w],decls:0,vars:0,template:function(t,n){},encapsulation:2})}}return c})();var C4=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275mod=N({type:c})}static{this.\u0275inj=x({})}}return c})();var _4=(()=>{class c{constructor(){this.pfpUrl="/assets/pfp.jpg",this.javaIcon="/assets/icons/java.png",this.junitIcon="/assets/icons/junit5.png",this.mockitoIcon="/assets/icons/mockito.png",this.mavenIcon="/assets/icons/maven.png",this.postgresIcon="/assets/icons/postgres.png",this.jenkinsIcon="/assets/icons/jenkins.png",this.rabbitmqIcon="/assets/icons/rabbitmq.png",this.kafkaIcon="/assets/icons/kafka.png",this.tomcatIcon="/assets/icons/tomcat.png",this.linuxIcon="/assets/icons/linux.png",this.handshakeIcon="/assets/icons/handshake.png",this.restapiIcon="/assets/icons/restapi.png",this.websocketIcon="/assets/icons/websocket.png",this.scrumIcon="/assets/icons/scrum.png",this.sqlIcon="/assets/icons/sql.png",this.smsIcon="/assets/icons/sms.png",this.phoneIcon="/assets/icons/phone.png",this.cplusplusIcon="/assets/icons/cplusplus.png",this.jiraIcon="/assets/icons/jira.png",this.linkedInURL=T1}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=S({type:c,selectors:[["home-page"]],standalone:!0,features:[w],decls:88,vars:20,consts:[[1,"pfp-center-header"],["width","300","height","300","priority","","alt","An outdoor photograph of a young man with long black hair and glasses leaning against a brick wall, wearing a black shirt.",1,"pfp",3,"ngSrc"],[1,"home-page-body-text"],[1,"skills-list"],["width","50","height","50",1,"skill-icon",3,"ngSrc"],[3,"href"],[1,"footer"]],template:function(t,n){t&1&&(o(0,"figure",0)(1,"h1"),m(2,"Chris Loftis"),r(),_(3,"img",1),r(),_(4,"br"),o(5,"article",2)(6,"section")(7,"p"),m(8," I am a Senior Software Developer looking for a development role. My primary experience is with backend systems, databases and Java middleware, but I am open to trying new things. Prior to my current job, I did not anticipate that I would ever write code in strange telephony XML dialects. After that, I'm open to trying pretty much anything. "),r()(),o(9,"section")(10,"p"),m(11," I have been writing Java professionally for three years and for personal projects for eleven. I strive to create software that is scaleable, maintainable, testable and documented. I enjoy working on cross-functional teams and I believe communication is key to shipping quality software. "),r()(),o(12,"section")(13,"p"),m(14," My ideal role is a position that allows me to meet with product owners/stakeholders to understand their needs, then work with a team to architect, design and implement a software solution. It puts me at a table with other engineers where we talk about the approach we want to take and how our components will integrate with one another. It enables me to learn from subject matter experts and my team members. It provides me with the resources to grow my domain understanding and my abilities as a software engineer. "),r()(),o(15,"section")(16,"h4"),m(17,"Education"),r(),o(18,"p"),m(19," Bachelor of Science in Computer Science (B.S.C.S) With Honors from South Carolina Honors College "),r()(),o(20,"section")(21,"h4"),m(22,"Skills and Technologies"),r(),o(23,"ul",3)(24,"li"),_(25,"img",4),m(26," Java "),r(),o(27,"li"),_(28,"img",4),m(29," JUnit5 "),r(),o(30,"li"),_(31,"img",4),m(32," Mockito "),r(),o(33,"li"),_(34,"img",4),m(35," Maven "),r(),o(36,"li"),_(37,"img",4),m(38," Apache Tomcat "),r(),o(39,"li"),_(40,"img",4),m(41," Postgres "),r(),o(42,"li"),_(43,"img",4),m(44," SQL Database Design "),r(),o(45,"li"),_(46,"img",4),m(47," Jenkins "),r(),o(48,"li"),_(49,"img",4),m(50," RabbitMQ "),r(),o(51,"li"),_(52,"img",4),m(53," REST APIs "),r(),o(54,"li"),_(55,"img",4),m(56," Websockets "),r(),o(57,"li"),_(58,"img",4),m(59," Linux "),r(),o(60,"li"),_(61,"img",4),m(62," C++ "),r(),o(63,"li"),_(64,"img",4),m(65," Job fairs & recruiting "),r(),o(66,"li"),_(67,"img",4),m(68," Scrum/Agile team member "),r(),o(69,"li"),_(70,"img",4),m(71," Jira "),r(),o(72,"li"),_(73,"img",4),m(74," SMS systems "),r(),o(75,"li"),_(76,"img",4),m(77," Avaya telephony "),r()()(),o(78,"section")(79,"h4"),m(80,"Contact"),r(),o(81,"p"),m(82," You can contact me via email at chris[at]chriswantsajob.com or message me on "),o(83,"a",5),m(84,"LinkedIn"),r(),m(85,". "),r()(),o(86,"footer",6),m(87," Copyright \xA9 2025 Chris Loftis "),r()()),t&2&&(M(3),C("ngSrc",n.pfpUrl),M(22),C("ngSrc",n.javaIcon),M(3),C("ngSrc",n.junitIcon),M(3),C("ngSrc",n.mockitoIcon),M(3),C("ngSrc",n.mavenIcon),M(3),C("ngSrc",n.tomcatIcon),M(3),C("ngSrc",n.postgresIcon),M(3),C("ngSrc",n.sqlIcon),M(3),C("ngSrc",n.jenkinsIcon),M(3),C("ngSrc",n.rabbitmqIcon),M(3),C("ngSrc",n.restapiIcon),M(3),C("ngSrc",n.websocketIcon),M(3),C("ngSrc",n.linuxIcon),M(3),C("ngSrc",n.cplusplusIcon),M(3),C("ngSrc",n.handshakeIcon),M(3),C("ngSrc",n.scrumIcon),M(3),C("ngSrc",n.jiraIcon),M(3),C("ngSrc",n.smsIcon),M(3),C("ngSrc",n.phoneIcon),M(7),C("href",n.linkedInURL,J1))},dependencies:[r2,n2],styles:[".pfp-center-header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;flex-direction:column;font-family:serif;margin-top:20px}.pfp-center-header[_ngcontent-%COMP%]   .pfp[_ngcontent-%COMP%]{border-radius:100%}.home-page-body-text[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}@media (min-width: 506px){.home-page-body-text[_ngcontent-%COMP%]{width:50%}.skills-list[_ngcontent-%COMP%]{columns:2}}@media (max-width: 506px){.home-page-body-text[_ngcontent-%COMP%]{width:80%}.skills-list[_ngcontent-%COMP%]{columns:1}}.skills-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;align-items:center;gap:1em;break-inside:avoid-column;overflow:hidden}.footer[_ngcontent-%COMP%]{margin-top:40px;text-align:center;color:var(--onBackground)}.skill-icon[_ngcontent-%COMP%]{height:2em;width:2em;display:inline;fill:var(--onBackground)}"]})}}return c})();var b4=(()=>{class c{constructor(e){this.http=e}downloadFile(e){return this.http.get(e,{responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||c)(q1(T0))}}static{this.\u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();var y4=(()=>{class c{constructor(e){this.fileService=e,this.linkedInURL=T1}downloadResume(){this.fileService.downloadFile("/assets/resume.pdf").subscribe(t=>{let n=document.createElement("a"),i=URL.createObjectURL(t);n.href=i,n.download="chris-loftis-resume.pdf",n.click(),URL.revokeObjectURL(i)})}static{this.\u0275fac=function(t){return new(t||c)(E(b4))}}static{this.\u0275cmp=S({type:c,selectors:[["resume-component"]],standalone:!0,features:[w],decls:10,vars:1,consts:[[1,"resume-box"],[1,"btn","resume-button",3,"click"],[3,"href"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"p"),m(2," You can download a copy of my resume with the button below. "),r(),o(3,"p")(4,"button",1),F("click",function(){return n.downloadResume()}),m(5,"Download Resume"),r()(),o(6,"p"),m(7," I am reachable via email at chris[at]chriswantsajob.com and on "),o(8,"a",2),m(9,"LinkedIn"),r()()()),t&2&&(M(8),C("href",n.linkedInURL,J1))},styles:[".resume-button[_ngcontent-%COMP%]{background-color:var(--primary);color:var(--onPrimary)}.resume-box[_ngcontent-%COMP%]{padding:2em;display:flex;flex-wrap:nowrap;flex-direction:column;align-items:center;text-align:center}"]})}}return c})();var v4=(()=>{class c{static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=S({type:c,selectors:[["app-page-not-found"]],standalone:!0,features:[w],decls:7,vars:0,consts:[["routerLink","/home"]],template:function(t,n){t&1&&(o(0,"h1"),m(1,"Page Not Found"),r(),o(2,"p"),m(3,"There's no webpage at this URL. Maybe you'd like to visit the "),o(4,"a",0),m(5,"Home page"),r(),m(6," instead"),r())},dependencies:[s2]})}}return c})();var x4=(()=>{class c{constructor(){this.swampfoxLogoUrl="/assets/swampfox-logo.png",this.mlegLogoUrl="/assets/mleg-logo.png"}openWebsite(e){window.open(e)}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=S({type:c,selectors:[["app-experience-page"]],standalone:!0,features:[w],decls:74,vars:2,consts:[[1,"experience-page"],[1,"job-entry"],[1,"job-left-div"],[1,"job-headers"],["href","https://www.swampfoxinc.com"],[1,"spread-elems"],[1,"job-responsibilities"],[1,"job-picture-div"],["width","300","height","128","priority","","alt","The logo for Swampfox Technologies Inc.",1,"job-img",3,"click","ngSrc"],["href","https://mleg.cse.sc.edu/"],["href","https://pubs.acs.org/doi/10.1021/acs.jpca.0c08103"],["width","300","height","128","priority","","alt","The logo for Machine Learning Evolutionary Group",1,"job-img",3,"click","ngSrc"]],template:function(t,n){t&1&&(o(0,"article",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"h2")(5,"a",4),m(6,"Swampfox Technologies, Inc."),r(),m(7," (3 years) Columbia, SC"),r(),o(8,"h6",5)(9,"span"),m(10,"Senior Software Developer"),r(),o(11,"span"),m(12,"Jan 2024 \u2013 Present"),r()(),o(13,"h6",5)(14,"span"),m(15,"Software Developer"),r(),o(16,"span"),m(17,"May 2023 \u2013 Jan 2024"),r()(),o(18,"h6",5)(19,"span"),m(20,"Product Development Intern"),r(),o(21,"span"),m(22,"May 2022 \u2013 May 2023"),r()(),o(23,"section",6)(24,"ul")(25,"li"),m(26,"Developed and maintained telecom software that powers large enterprise company call centers"),r(),o(27,"li"),m(28,"Worked with other software developers, QA engineers and project managers on Scrum teams"),r(),o(29,"li"),m(30,"Served as technical lead/owner of mission critical software components for high-availability systems"),r(),o(31,"li"),m(32,"Met with project managers, engineers and stakeholders from other companies to understand their needs and develop custom systems to integrate with their proprietary infrastructure"),r(),o(33,"li"),m(34,"Triaged and debugged live issues with high-volume production call centers during emergencies"),r(),o(35,"li"),m(36,"Wrote documentation and automated tests to ensure project and code maintainability"),r(),o(37,"li"),m(38,"Served as a mentor and a technical resource for interns during their projects"),r()()()(),o(39,"div",7)(40,"img",8),F("click",function(){return n.openWebsite("https://www.swampfoxinc.com")}),r()()()(),_(41,"hr"),o(42,"section",1)(43,"div",2)(44,"div",3)(45,"h2")(46,"a",9),m(47,"University of South Carolina"),r(),m(48," (1.5 years) Columbia, SC"),r(),o(49,"h6",5)(50,"span"),m(51,"Undergraduate Research Assistant"),r(),o(52,"span"),m(53,"September 2019 \u2013 December 2020"),r()(),o(54,"section",6)(55,"ul")(56,"li"),m(57,"Analyzed scientific problems to apply artificial intelligence and deep learning models."),r(),o(58,"li"),m(59,"Studied and implemented existing machine, deep learning, and evolutionary programming models within larger systems to solve novel problems. "),r(),o(60,"li"),m(61,"Rapidly learned new libraries and frameworks to implement them in more complex programs. "),r(),o(62,"li"),m(63,"Generated and analyzed charts and statistics to find flaws and improvements with models."),r(),o(64,"li")(65,"a",10),m(66,"Wrote and contributed to research articles"),r(),m(67," within the fields of Computer Science/Materials Design. "),r(),o(68,"li"),m(69,"Preprocessed raw data and transformed it into a format interpreted by machine learning models. "),r(),o(70,"li"),m(71,"Cooperated with a team of researchers and experts to further the field of Computational Materials Design."),r()()()(),o(72,"div",7)(73,"img",11),F("click",function(){return n.openWebsite("https://mleg.cse.sc.edu")}),r()()()()()),t&2&&(M(40),C("ngSrc",n.swampfoxLogoUrl),M(33),C("ngSrc",n.mlegLogoUrl))},dependencies:[n2],styles:[".experience-page[_ngcontent-%COMP%]{margin:2em}.spread-elems[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px dotted var(--onBackground)}.job-entry[_ngcontent-%COMP%]{width:100%}@media (min-width: 506px){.job-entry[_ngcontent-%COMP%]   .job-left-div[_ngcontent-%COMP%]{display:flex;gap:5em}}.job-entry[_ngcontent-%COMP%]   .job-headers[_ngcontent-%COMP%]{flex:3}.job-entry[_ngcontent-%COMP%]   .job-picture-div[_ngcontent-%COMP%]{flex:1}.job-entry[_ngcontent-%COMP%]   .job-picture-div[_ngcontent-%COMP%]   .job-img[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer}"]})}}return c})();var N4=[{path:"home",component:_4},{path:"resume",component:y4},{path:"experience",component:x4},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",component:v4}];var S4={providers:[B0(N4),A0(),D0()]},T1="https://www.linkedin.com/in/chris-loftis-004335191/",w4="https://www.github.com/iron-condor";var T4=(()=>{class c{constructor(e,t){this.themeToggleService=e,this.router=t,this.moonIcon=h3,this.sunIcon=u3,this.themeIconAnimation=void 0,this.active=0,t.events.subscribe(n=>{n instanceof I0&&(this.active=this.getActiveTab(n.urlAfterRedirects))})}getActiveTab(e){switch(e){case"/":case"/home":return 1;case"/experience":return 2;case"/resume":return 3;default:return 0}}getCurrentTheme(){return this.themeToggleService.currentTheme==A.LIGHT?this.sunIcon:this.moonIcon}getThemeAnimation(){return this.themeIconAnimation}toggleTheme(){this.themeIconAnimation="bounce",this.themeToggleService.toggleTheme(),setTimeout(()=>{this.themeIconAnimation=void 0},500)}openGithub(){location.href=w4}openLinkedin(){location.href=T1}static{this.\u0275fac=function(t){return new(t||c)(E(p3),E(F0))}}static{this.\u0275cmp=S({type:c,selectors:[["nav-bar"]],standalone:!0,features:[w],decls:29,vars:6,consts:[["nav","ngbNav"],["ngbNav","",1,"nav-tabs","nav-bar",3,"activeIdChange","activeId"],[3,"ngbNavItem"],["ngbNavLink","","routerLink","/home","ariaCurrentWhenActive","page",1,"btn"],["ngbNavLink","","routerLink","/experience","ariaCurrentWhenActive","page",1,"btn"],["ngbNavLink","","routerLink","/resume","ariaCurrentWhenActive","page",1,"btn"],[1,"float-end-group"],[1,"btn","btn-tertiary",3,"click"],["for","linkedinIcon"],["width","32","height","32","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"linkedin-icon","v-align-middle","color-fg-default"],["d","M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"],["d","M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"],["d","M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"],["fill-rule","evenodd","clip-rule","evenodd","d","M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"],["for","githubIcon"],["id","githubIcon","height","32","aria-hidden","true","viewBox","0 0 24 24","version","1.1","width","32","data-view-component","true",1,"octicon","octicon-mark-github","v-align-middle","color-fg-default"],["d","M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"],["id","themeToggleButton",1,"btn","btn-tertiary",3,"click"],["for","themeToggleIcon"],["id","themeToggleIcon","size","xl",3,"icon","animation"]],template:function(t,n){if(t&1){let i=T2();o(0,"ul",1,0),N0("activeIdChange",function(a){return _1(i),x0(n.active,a)||(n.active=a),b1(a)}),o(2,"li",2)(3,"button",3),m(4,"Home"),r()(),o(5,"li",2)(6,"button",4),m(7,"Experience"),r()(),o(8,"li",2)(9,"button",5),m(10,"Resume"),r()(),o(11,"div",6)(12,"button",7),F("click",function(){return _1(i),b1(n.openLinkedin())}),o(13,"label",8),m(14,"LinkedIn"),r(),v2(),o(15,"svg",9),_(16,"path",10)(17,"path",11)(18,"path",12)(19,"path",13),r()(),x2(),o(20,"button",7),F("click",function(){return _1(i),b1(n.openGithub())}),o(21,"label",14),m(22,"Github"),r(),v2(),o(23,"svg",15),_(24,"path",16),r()(),x2(),o(25,"button",17),F("click",function(){return _1(i),b1(n.toggleTheme())}),o(26,"label",18),m(27,"Theme"),r(),_(28,"fa-icon",19),r()()()}t&2&&(v0("activeId",n.active),M(2),C("ngbNavItem",1),M(3),C("ngbNavItem",2),M(3),C("ngbNavItem",3),M(20),C("icon",n.getCurrentTheme())("animation",n.getThemeAnimation()))},dependencies:[r2,I1,a2,Z0,c3,o2,s2,C4,M4],styles:[".nav-bar[_ngcontent-%COMP%]{background-color:var(--primary);display:flex}.nav-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:not(.active){color:var(--onPrimary)}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;align-items:center;border:0px}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:5px;cursor:pointer}.nav-bar[_ngcontent-%COMP%]   .octicon-mark-github[_ngcontent-%COMP%], .nav-bar[_ngcontent-%COMP%]   .linkedin-icon[_ngcontent-%COMP%]{fill:var(--onPrimary)}@media (min-width: 506px){.nav-bar[_ngcontent-%COMP%]{border-bottom:0px}.nav-bar[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{height:43px;border-bottom-left-radius:0%;border-bottom-right-radius:0%}.nav-bar[_ngcontent-%COMP%]   .float-end-group[_ngcontent-%COMP%]{margin-left:auto}}"]})}}return c})();var D4=(()=>{class c{constructor(){this.title="Chris Loftis"}static{this.\u0275fac=function(t){return new(t||c)}}static{this.\u0275cmp=S({type:c,selectors:[["app-root"]],standalone:!0,features:[w],decls:2,vars:0,template:function(t,n){t&1&&_(0,"nav-bar")(1,"router-outlet")},dependencies:[P0,T4,k0]})}}return c})();var s5={providers:[R0()]},k4=w0(S4,s5);var i5=()=>E0(D4,k4),Ve=i5;export{Ve as a};
