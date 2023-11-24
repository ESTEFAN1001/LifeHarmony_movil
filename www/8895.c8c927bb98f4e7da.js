"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8895],{8895:(E,R,y)=>{y.r(R),y.d(R,{startInputShims:()=>q});var b=y(5861),T=y(2874),m=y(839),H=y(7484),h=y(6225);y(4874);const M=new WeakMap,P=(e,t,s,r=0,o=!1)=>{M.has(e)!==s&&(s?Z(e,t,r,o):G(e,t))},Z=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),M.set(e,n);const i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${i}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",B=(e,t,s)=>{const r=e[U];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},F=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let g=0;const x="data-ionic-skip-scroll-assist",V=(e,t,s,r,o,n,a,i=!1)=>{const l=n&&(void 0===a||a.mode===H.a.None);let L=!1;const u=void 0!==h.w?h.w.innerHeight:0,v=S=>{!1!==L?W(e,t,s,r,S.detail.keyboardHeight,l,i,u,!1):L=!0},c=()=>{L=!1,null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)},f=function(){var S=(0,b.Z)(function*(){t.hasAttribute(x)?t.removeAttribute(x):(W(e,t,s,r,o,l,i,u),null==h.w||h.w.addEventListener("ionKeyboardDidShow",v),e.addEventListener("focusout",c,!0))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",f,!0),()=>{e.removeEventListener("focusin",f,!0),null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)}},K=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},W=function(){var e=(0,b.Z)(function*(t,s,r,o,n,a,i=!1,l=0,L=!0){if(!r&&!o)return;const u=((e,t,s,r)=>{var o;return((e,t,s,r)=>{const o=e.top,n=e.bottom,a=t.top,l=a+15,u=Math.min(t.bottom,r-s)-50-n,v=l-o,c=Math.round(u<0?-u:v>0?-v:0),f=Math.min(c,o-a),w=Math.abs(f)/.3;return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,w)),scrollPadding:s,inputSafeY:4-(o-l)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||o,n,l);if(r&&Math.abs(u.scrollAmount)<4)return K(s),void(a&&null!==r&&(B(r,g),F(s,r,()=>g=0)));if(P(t,s,!0,u.inputSafeY,i),K(s),(0,m.r)(()=>t.click()),a&&r&&(g=u.scrollPadding,B(r,g)),typeof window<"u"){let v;const c=function(){var S=(0,b.Z)(function*(){void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",c),r&&(yield(0,T.c)(r,0,u.scrollAmount,u.scrollDuration)),P(t,s,!1,u.inputSafeY),K(s),a&&F(s,r,()=>g=0)});return function(){return S.apply(this,arguments)}}(),f=()=>{window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",c)};if(r){const S=yield(0,T.g)(r);if(L&&u.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",c),void(v=setTimeout(c,1e3))}c()}});return function(s,r,o,n,a,i){return e.apply(this,arguments)}}(),q=function(){var e=(0,b.Z)(function*(t,s){const r=document,o="ios"===s,n="android"===s,a=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),l=t.getBoolean("hideCaretOnScroll",o),L=t.getBoolean("inputBlurring",o),u=t.getBoolean("scrollPadding",!0),v=Array.from(r.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,f=new WeakMap,S=yield H.K.getResizeMode(),w=function(){var _=(0,b.Z)(function*(d){yield new Promise(I=>(0,m.c)(d,I));const p=d.shadowRoot||d,D=p.querySelector("input")||p.querySelector("textarea"),A=(0,T.f)(d),j=A?null:d.closest("ion-footer");if(D){if(A&&l&&!c.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const r=i=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,i)},o=()=>P(e,t,!1),n=()=>r(!0),a=()=>r(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",a),t.addEventListener("blur",o),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",o)}})(d,D,A);c.set(d,I)}if("date"!==D.type&&"datetime-local"!==D.type&&(A||j)&&i&&!f.has(d)){const I=V(d,D,A,j,a,u,S,n);f.set(d,I)}}});return function(p){return _.apply(this,arguments)}}();L&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const i=s.activeElement;if(!i||i.matches(C))return;const l=a.target;l!==i&&(l.matches(C)||l.closest(C)||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)})();for(const _ of v)w(_);r.addEventListener("ionInputDidLoad",_=>{w(_.detail)}),r.addEventListener("ionInputDidUnload",_=>{(_=>{if(l){const d=c.get(_);d&&d(),c.delete(_)}if(i){const d=f.get(_);d&&d(),f.delete(_)}})(_.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);