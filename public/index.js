var __legacyDecorateClassTS=function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r};var P=function(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return e!==void 0?e.createHTML(i):i},S=function(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=e!==void 0?(o=s._$Co)===null||o===void 0?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return(r==null?void 0:r.constructor)!==u&&((n=r==null?void 0:r._$AO)===null||n===void 0||n.call(r,!1),u===void 0?r=void 0:(r=new u(t),r._$AT(t,s,e)),e!==void 0?((l=(h=s)._$Co)!==null&&l!==void 0?l:h._$Co=[])[e]=r:s._$Cl=r),r!==void 0&&(i=S(t,r._$AS(t,i.values),r,e)),i},t,i=window,s=i.trustedTypes,e=s?s.createPolicy("lit-html",{createHTML:(t2)=>t2}):void 0;var n=`lit\$${(Math.random()+"").slice(9)}\$`,l="?"+n,h=`<${l}>`,r=document,u=()=>r.createComment(""),d=(t2)=>t2===null||typeof t2!="object"&&typeof t2!="function",c=Array.isArray,v=(t2)=>c(t2)||typeof(t2==null?void 0:t2[Symbol.iterator])=="function";var f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|[ \t\n\f\r](?:([^\\s"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|\$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=(t2)=>(i2,...s2)=>({_$litType$:t2,strings:i2,values:s2}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),V=(t2,i2)=>{const s2=t2.length-1,e2=[];let l2,r2=i2===2?"<svg>":"",u2=f;for(let i3=0;i3<s2;i3++){const s3=t2[i3];let d2,c2,v2=-1,a=0;for(;a<s3.length&&(u2.lastIndex=a,c2=u2.exec(s3),c2!==null);)a=u2.lastIndex,u2===f?c2[1]==="!--"?u2=_:c2[1]!==void 0?u2=m:c2[2]!==void 0?(y.test(c2[2])&&(l2=RegExp("</"+c2[2],"g")),u2=p):c2[3]!==void 0&&(u2=p):u2===p?c2[0]===">"?(u2=l2!=null?l2:f,v2=-1):c2[1]===void 0?v2=-2:(v2=u2.lastIndex-c2[2].length,d2=c2[1],u2=c2[3]===void 0?p:c2[3]==='"'?$:g):u2===$||u2===g?u2=p:u2===_||u2===m?u2=f:(u2=p,l2=void 0);const w2=u2===p&&t2[i3+1].startsWith("/>")?" ":"";r2+=u2===f?s3+h:v2>=0?(e2.push(d2),s3.slice(0,v2)+"$lit$"+s3.slice(v2)+n+w2):s3+n+(v2===-2?(e2.push(void 0),i3):w2)}return[P(t2,r2+(t2[s2]||"<?>")+(i2===2?"</svg>":"")),e2]};class N{constructor({strings:t2,_$litType$:i2},e2){let h2;this.parts=[];let r2=0,d2=0;const c2=t2.length-1,v2=this.parts,[a,f2]=V(t2,i2);if(this.el=N.createElement(a,e2),C.currentNode=this.el.content,i2===2){const t3=this.el.content,i3=t3.firstChild;i3.remove(),t3.append(...i3.childNodes)}for(;(h2=C.nextNode())!==null&&v2.length<c2;){if(h2.nodeType===1){if(h2.hasAttributes()){const t3=[];for(let i3 of h2.getAttributeNames())if(i3.endsWith("$lit$")||i3.startsWith(n)){const s2=f2[d2++];if(t3.push(i3),s2!==void 0){const t4=h2.getAttribute(s2.toLowerCase()+"$lit$").split(n),i4=/([.?@])?(.*)/.exec(s2);v2.push({type:1,index:r2,name:i4[2],strings:t4,ctor:i4[1]==="."?H:i4[1]==="?"?L:i4[1]==="@"?z:k})}else v2.push({type:6,index:r2})}for(let i3 of t3)h2.removeAttribute(i3)}if(y.test(h2.tagName)){const t3=h2.textContent.split(n),i3=t3.length-1;if(i3>0){h2.textContent=s?s.emptyScript:"";for(let s2=0;s2<i3;s2++)h2.append(t3[s2],u()),C.nextNode(),v2.push({type:2,index:++r2});h2.append(t3[i3],u())}}}else if(h2.nodeType===8)if(h2.data===l)v2.push({type:2,index:r2});else{let t3=-1;for(;(t3=h2.data.indexOf(n,t3+1))!==-1;)v2.push({type:7,index:r2}),t3+=n.length-1}r2++}}static createElement(t2,i2){const s2=r.createElement("template");return s2.innerHTML=t2,s2}}class M{constructor(t2,i2){this._$AV=[],this._$AN=void 0,this._$AD=t2,this._$AM=i2}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t2){var i2;const{el:{content:s2},parts:e2}=this._$AD,o=((i2=t2==null?void 0:t2.creationScope)!==null&&i2!==void 0?i2:r).importNode(s2,!0);C.currentNode=o;let n2=C.nextNode(),l2=0,h2=0,u2=e2[0];for(;u2!==void 0;){if(l2===u2.index){let i3;u2.type===2?i3=new R(n2,n2.nextSibling,this,t2):u2.type===1?i3=new u2.ctor(n2,u2.name,u2.strings,this,t2):u2.type===6&&(i3=new Z(n2,this,t2)),this._$AV.push(i3),u2=e2[++h2]}l2!==(u2==null?void 0:u2.index)&&(n2=C.nextNode(),l2++)}return C.currentNode=r,o}v(t2){let i2=0;for(let s2 of this._$AV)s2!==void 0&&(s2.strings!==void 0?(s2._$AI(t2,s2,i2),i2+=s2.strings.length-2):s2._$AI(t2[i2])),i2++}}class R{constructor(t2,i2,s2,e2){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t2,this._$AB=i2,this._$AM=s2,this.options=e2,this._$Cp=(o=e2==null?void 0:e2.isConnected)===null||o===void 0||o}get _$AU(){var t2,i2;return(i2=(t2=this._$AM)===null||t2===void 0?void 0:t2._$AU)!==null&&i2!==void 0?i2:this._$Cp}get parentNode(){let t2=this._$AA.parentNode;const i2=this._$AM;return i2!==void 0&&(t2==null?void 0:t2.nodeType)===11&&(t2=i2.parentNode),t2}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t2,i2=this){t2=S(this,t2,i2),d(t2)?t2===A||t2==null||t2===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t2!==this._$AH&&t2!==T&&this._(t2):t2._$litType$!==void 0?this.g(t2):t2.nodeType!==void 0?this.$(t2):v(t2)?this.T(t2):this._(t2)}k(t2){return this._$AA.parentNode.insertBefore(t2,this._$AB)}$(t2){this._$AH!==t2&&(this._$AR(),this._$AH=this.k(t2))}_(t2){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t2:this.$(r.createTextNode(t2)),this._$AH=t2}g(t2){var i2;const{values:s2,_$litType$:e2}=t2,o=typeof e2=="number"?this._$AC(t2):(e2.el===void 0&&(e2.el=N.createElement(P(e2.h,e2.h[0]),this.options)),e2);if(((i2=this._$AH)===null||i2===void 0?void 0:i2._$AD)===o)this._$AH.v(s2);else{const t3=new M(o,this),i3=t3.u(this.options);t3.v(s2),this.$(i3),this._$AH=t3}}_$AC(t2){let i2=E.get(t2.strings);return i2===void 0&&E.set(t2.strings,i2=new N(t2)),i2}T(t2){c(this._$AH)||(this._$AH=[],this._$AR());const i2=this._$AH;let s2,e2=0;for(let o of t2)e2===i2.length?i2.push(s2=new R(this.k(u()),this.k(u()),this,this.options)):s2=i2[e2],s2._$AI(o),e2++;e2<i2.length&&(this._$AR(s2&&s2._$AB.nextSibling,e2),i2.length=e2)}_$AR(t2=this._$AA.nextSibling,i2){var s2;for((s2=this._$AP)===null||s2===void 0||s2.call(this,!1,!0,i2);t2&&t2!==this._$AB;){const i3=t2.nextSibling;t2.remove(),t2=i3}}setConnected(t2){var i2;this._$AM===void 0&&(this._$Cp=t2,(i2=this._$AP)===null||i2===void 0||i2.call(this,t2))}}class k{constructor(t2,i2,s2,e2,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t2,this.name=i2,this._$AM=e2,this.options=o,s2.length>2||s2[0]!==""||s2[1]!==""?(this._$AH=Array(s2.length-1).fill(new String),this.strings=s2):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t2,i2=this,s2,e2){const o=this.strings;let n2=!1;if(o===void 0)t2=S(this,t2,i2,0),n2=!d(t2)||t2!==this._$AH&&t2!==T,n2&&(this._$AH=t2);else{const e3=t2;let l2,h2;for(t2=o[0],l2=0;l2<o.length-1;l2++)h2=S(this,e3[s2+l2],i2,l2),h2===T&&(h2=this._$AH[l2]),n2||(n2=!d(h2)||h2!==this._$AH[l2]),h2===A?t2=A:t2!==A&&(t2+=(h2!=null?h2:"")+o[l2+1]),this._$AH[l2]=h2}n2&&!e2&&this.j(t2)}j(t2){t2===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t2!=null?t2:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t2){this.element[this.name]=t2===A?void 0:t2}}var I=s?s.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(t2){t2&&t2!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class z extends k{constructor(t2,i2,s2,e2,o){super(t2,i2,s2,e2,o),this.type=5}_$AI(t2,i2=this){var s2;if((t2=(s2=S(this,t2,i2,0))!==null&&s2!==void 0?s2:A)===T)return;const e2=this._$AH,o=t2===A&&e2!==A||t2.capture!==e2.capture||t2.once!==e2.once||t2.passive!==e2.passive,n2=t2!==A&&(e2===A||o);o&&this.element.removeEventListener(this.name,this,e2),n2&&this.element.addEventListener(this.name,this,t2),this._$AH=t2}handleEvent(t2){var i2,s2;typeof this._$AH=="function"?this._$AH.call((s2=(i2=this.options)===null||i2===void 0?void 0:i2.host)!==null&&s2!==void 0?s2:this.element,t2):this._$AH.handleEvent(t2)}}class Z{constructor(t2,i2,s2){this.element=t2,this.type=6,this._$AN=void 0,this._$AM=i2,this.options=s2}get _$AU(){return this._$AM._$AU}_$AI(t2){S(this,t2)}}var j={O:"$lit$",P:n,A:l,C:1,M:V,L:M,R:v,D:S,I:R,V:k,H:L,N:z,U:H,F:Z},B=i.litHtmlPolyfillSupport;B==null||B(N,R),((t=i.litHtmlVersions)!==null&&t!==void 0?t:i.litHtmlVersions=[]).push("2.8.0");var D=(t2,i2,s2)=>{var e2,o;const n2=(e2=s2==null?void 0:s2.renderBefore)!==null&&e2!==void 0?e2:i2;let l2=n2._$litPart$;if(l2===void 0){const t3=(o=s2==null?void 0:s2.renderBefore)!==null&&o!==void 0?o:null;n2._$litPart$=l2=new R(i2.insertBefore(u(),t3),t3,void 0,s2!=null?s2:{})}return l2._$AI(t2),l2};var r2={boundAttributeSuffix:j.O,marker:j.P,markerMatch:j.A,HTML_RESULT:j.C,getTemplateHtml:j.M,overrideDirectiveResolve:(e2,t2)=>class extends e2{_$AS(e3,r3){return t2(this,r3)}},setDirectiveClass(e2,t2){e2._$litDirective$=t2},getAttributePartCommittedValue:(e2,r3,a)=>{let i2=T;return e2.j=(e3)=>i2=e3,e2._$AI(r3,e2,a),i2},connectedDisconnectable:(e2)=>({...e2,_$AU:!0}),resolveDirective:j.D,AttributePart:j.V,PropertyPart:j.U,BooleanAttributePart:j.H,EventPart:j.N,ElementPart:j.F,TemplateInstance:j.L,isIterable:j.R,ChildPart:j.I};var t2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};var i2=(o)=>o===null||typeof o!="object"&&typeof o!="function";var t3=(o,l2)=>l2===void 0?(o==null?void 0:o._$litType$)!==void 0:(o==null?void 0:o._$litType$)===l2,v2=(o)=>{var l2;return((l2=o==null?void 0:o._$litType$)===null||l2===void 0?void 0:l2.h)!=null};var e2=(o)=>o.strings===void 0;var{TemplateInstance:i3,isIterable:s2,resolveDirective:c2,ChildPart:d2,ElementPart:p2}=r2,f2=(e3,t4,r3={})=>{if(t4._$litPart$!==void 0)throw Error("container already contains a live render");let n2,o,a;const l2=[],i4=document.createTreeWalker(t4,NodeFilter.SHOW_COMMENT,null,!1);let s3;for(;(s3=i4.nextNode())!==null;){const t5=s3.data;if(t5.startsWith("lit-part")){if(l2.length===0&&n2!==void 0)throw Error(`There must be only one root part per container. Found a part marker (${s3}) when we already have a root part marker (${o})`);a=m2(e3,s3,l2,r3),n2!=null||(n2=a),o!=null||(o=s3)}else if(t5.startsWith("lit-node"))u2(s3,l2,r3);else if(t5.startsWith("/lit-part")){if(l2.length===1&&a!==n2)throw Error("internal error");a=h2(s3,a,l2)}}if(n2===void 0){const e4=t4 instanceof ShadowRoot?"{container.host.localName}'s shadow root":t4 instanceof DocumentFragment?"DocumentFragment":t4.localName;console.error(`There should be exactly one root part in a render container, but we didn't find any in ${e4}.`)}t4._$litPart$=n2},m2=(t4,r3,l2,p3)=>{let f3,m3;if(l2.length===0)m3=new d2(r3,null,void 0,p3),f3=t4;else{const e3=l2[l2.length-1];if(e3.type==="template-instance")m3=new d2(r3,null,e3.instance,p3),e3.instance._$AV.push(m3),f3=e3.result.values[e3.instancePartIndex++],e3.templatePartIndex++;else if(e3.type==="iterable"){m3=new d2(r3,null,e3.part,p3);const t5=e3.iterator.next();if(t5.done)throw f3=void 0,e3.done=!0,Error("Unhandled shorter than expected iterable");f3=t5.value,e3.part._$AH.push(m3)}else m3=new d2(r3,null,e3.part,p3)}if(f3=c2(m3,f3),f3===T)l2.push({part:m3,type:"leaf"});else if(i2(f3))l2.push({part:m3,type:"leaf"}),m3._$AH=f3;else if(t3(f3)){if(v2(f3))throw Error("compiled templates are not supported");const e3="lit-part "+w2(f3);if(r3.data!==e3)throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");{const e4=d2.prototype._$AC(f3),t5=new i3(e4,m3);l2.push({type:"template-instance",instance:t5,part:m3,templatePartIndex:0,instancePartIndex:0,result:f3}),m3._$AH=t5}}else s2(f3)?(l2.push({part:m3,type:"iterable",value:f3,iterator:f3[Symbol.iterator](),done:!1}),m3._$AH=[]):(l2.push({part:m3,type:"leaf"}),m3._$AH=f3==null?"":f3);return m3},h2=(e3,t4,r3)=>{if(t4===void 0)throw Error("unbalanced part marker");t4._$AB=e3;const n2=r3.pop();if(n2.type==="iterable"&&!n2.iterator.next().done)throw Error("unexpected longer than expected iterable");if(r3.length>0)return r3[r3.length-1].part},u2=(e3,t4,n2)=>{const o=/lit-node (\d+)/.exec(e3.data),a=parseInt(o[1]),i4=e3.nextElementSibling;if(i4===null)throw Error("could not find node for attribute parts");i4.removeAttribute("defer-hydration");const s3=t4[t4.length-1];if(s3.type!=="template-instance")throw Error("internal error");{const e4=s3.instance;for(;;){const t5=e4._$AD.parts[s3.templatePartIndex];if(t5===void 0||t5.type!==t2.ATTRIBUTE&&t5.type!==t2.ELEMENT||t5.index!==a)break;if(t5.type===t2.ATTRIBUTE){const o2=new t5.ctor(i4,t5.name,t5.strings,s3.instance,n2),a2=e2(o2)?s3.result.values[s3.instancePartIndex]:s3.result.values,c3=!(o2.type===t2.EVENT||o2.type===t2.PROPERTY);o2._$AI(a2,o2,s3.instancePartIndex,c3),s3.instancePartIndex+=t5.strings.length-1,e4._$AV.push(o2)}else{const t6=new p2(i4,s3.instance,n2);c2(t6,s3.result.values[s3.instancePartIndex++]),e4._$AV.push(t6)}s3.templatePartIndex++}}},w2=(e3)=>{const t4=new Uint32Array(2).fill(5381);for(let r4 of e3.strings)for(let e4=0;e4<r4.length;e4++)t4[e4%2]=33*t4[e4%2]^r4.charCodeAt(e4);const r3=String.fromCharCode(...new Uint8Array(t4.buffer));return btoa(r3)};globalThis.litElementHydrateSupport=({LitElement:s3})=>{const h3=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s3),"observedAttributes").get;Object.defineProperty(s3,"observedAttributes",{get(){return[...h3.call(this),"defer-hydration"]}});const e3=s3.prototype.attributeChangedCallback;s3.prototype.attributeChangedCallback=function(t4,i4,s4){t4==="defer-hydration"&&s4===null&&n2.call(this),e3.call(this,t4,i4,s4)};const n2=s3.prototype.connectedCallback;s3.prototype.connectedCallback=function(){this.hasAttribute("defer-hydration")||n2.call(this)};const o=s3.prototype.createRenderRoot;s3.prototype.createRenderRoot=function(){return this.shadowRoot?(this._$AG=!0,this.shadowRoot):o.call(this)};const r3=Object.getPrototypeOf(s3.prototype).update;s3.prototype.update=function(s4){const h4=this.render();if(r3.call(this,s4),this._$AG){this._$AG=!1;for(let t4=0;t4<this.attributes.length;t4++){const i4=this.attributes[t4];if(i4.name.startsWith("hydrate-internals-")){const t5=i4.name.slice(18);this.removeAttribute(t5),this.removeAttribute(i4.name)}}f2(h4,this.renderRoot,this.renderOptions)}else D(h4,this.renderRoot,this.renderOptions)}};document.body.addEventListener("htmx:configRequest",(e3)=>{if(e3.detail.verb==="post")e3.detail.headers["swc-params"]=JSON.stringify(e3.detail.triggeringEvent.detail.parameters)});var t4=window,e3=t4.ShadowRoot&&(t4.ShadyCSS===void 0||t4.ShadyCSS.nativeShadow)&&("adoptedStyleSheets"in Document.prototype)&&("replace"in CSSStyleSheet.prototype),s3=Symbol(),n2=new WeakMap;class o{constructor(t5,e4,n3){if(this._$cssResult$=!0,n3!==s3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t5,this.t=e4}get styleSheet(){let t5=this.o;const s4=this.t;if(e3&&t5===void 0){const e4=s4!==void 0&&s4.length===1;e4&&(t5=n2.get(s4)),t5===void 0&&((this.o=t5=new CSSStyleSheet).replaceSync(this.cssText),e4&&n2.set(s4,t5))}return t5}toString(){return this.cssText}}var r3=(t5)=>new o(typeof t5=="string"?t5:t5+"",void 0,s3),i4=(t5,...e4)=>{const n3=t5.length===1?t5[0]:e4.reduce((e5,s4,n4)=>e5+((t6)=>{if(t6._$cssResult$===!0)return t6.cssText;if(typeof t6=="number")return t6;throw Error("Value passed to 'css' function must be a 'css' function result: "+t6+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s4)+t5[n4+1],t5[0]);return new o(n3,t5,s3)},S2=(s4,n3)=>{e3?s4.adoptedStyleSheets=n3.map((t5)=>t5 instanceof CSSStyleSheet?t5:t5.styleSheet):n3.forEach((e4)=>{const n4=document.createElement("style"),o2=t4.litNonce;o2!==void 0&&n4.setAttribute("nonce",o2),n4.textContent=e4.cssText,s4.appendChild(n4)})},c3=e3?(t5)=>t5:(t5)=>t5 instanceof CSSStyleSheet?((t6)=>{let e4="";for(let s4 of t6.cssRules)e4+=s4.cssText;return r3(e4)})(t5):t5;var s4,e4=window,r4=e4.trustedTypes,h3=r4?r4.emptyScript:"",o2=e4.reactiveElementPolyfillSupport,n3={toAttribute(t5,i5){switch(i5){case Boolean:t5=t5?h3:null;break;case Object:case Array:t5=t5==null?t5:JSON.stringify(t5)}return t5},fromAttribute(t5,i5){let s5=t5;switch(i5){case Boolean:s5=t5!==null;break;case Number:s5=t5===null?null:Number(t5);break;case Object:case Array:try{s5=JSON.parse(t5)}catch(t6){s5=null}}return s5}},a=(t5,i5)=>i5!==t5&&(i5==i5||t5==t5),l2={attribute:!0,type:String,converter:n3,reflect:!1,hasChanged:a},d3="finalized";class u3 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t5){var i5;this.finalize(),((i5=this.h)!==null&&i5!==void 0?i5:this.h=[]).push(t5)}static get observedAttributes(){this.finalize();const t5=[];return this.elementProperties.forEach((i5,s5)=>{const e5=this._$Ep(s5,i5);e5!==void 0&&(this._$Ev.set(e5,s5),t5.push(e5))}),t5}static createProperty(t5,i5=l2){if(i5.state&&(i5.attribute=!1),this.finalize(),this.elementProperties.set(t5,i5),!i5.noAccessor&&!this.prototype.hasOwnProperty(t5)){const s5=typeof t5=="symbol"?Symbol():"__"+t5,e5=this.getPropertyDescriptor(t5,s5,i5);e5!==void 0&&Object.defineProperty(this.prototype,t5,e5)}}static getPropertyDescriptor(t5,i5,s5){return{get(){return this[i5]},set(e5){const r5=this[t5];this[i5]=e5,this.requestUpdate(t5,r5,s5)},configurable:!0,enumerable:!0}}static getPropertyOptions(t5){return this.elementProperties.get(t5)||l2}static finalize(){if(this.hasOwnProperty(d3))return!1;this[d3]=!0;const t5=Object.getPrototypeOf(this);if(t5.finalize(),t5.h!==void 0&&(this.h=[...t5.h]),this.elementProperties=new Map(t5.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t6=this.properties,i5=[...Object.getOwnPropertyNames(t6),...Object.getOwnPropertySymbols(t6)];for(let s5 of i5)this.createProperty(s5,t6[s5])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i5){const s5=[];if(Array.isArray(i5)){const e5=new Set(i5.flat(Infinity).reverse());for(let i6 of e5)s5.unshift(c3(i6))}else i5!==void 0&&s5.push(c3(i5));return s5}static _$Ep(t5,i5){const s5=i5.attribute;return s5===!1?void 0:typeof s5=="string"?s5:typeof t5=="string"?t5.toLowerCase():void 0}_$Eu(){var t5;this._$E_=new Promise((t6)=>this.enableUpdating=t6),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t5=this.constructor.h)===null||t5===void 0||t5.forEach((t6)=>t6(this))}addController(t5){var i5,s5;((i5=this._$ES)!==null&&i5!==void 0?i5:this._$ES=[]).push(t5),this.renderRoot!==void 0&&this.isConnected&&((s5=t5.hostConnected)===null||s5===void 0||s5.call(t5))}removeController(t5){var i5;(i5=this._$ES)===null||i5===void 0||i5.splice(this._$ES.indexOf(t5)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t5,i5)=>{this.hasOwnProperty(i5)&&(this._$Ei.set(i5,this[i5]),delete this[i5])})}createRenderRoot(){var t5;const s5=(t5=this.shadowRoot)!==null&&t5!==void 0?t5:this.attachShadow(this.constructor.shadowRootOptions);return S2(s5,this.constructor.elementStyles),s5}connectedCallback(){var t5;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t5=this._$ES)===null||t5===void 0||t5.forEach((t6)=>{var i5;return(i5=t6.hostConnected)===null||i5===void 0?void 0:i5.call(t6)})}enableUpdating(t5){}disconnectedCallback(){var t5;(t5=this._$ES)===null||t5===void 0||t5.forEach((t6)=>{var i5;return(i5=t6.hostDisconnected)===null||i5===void 0?void 0:i5.call(t6)})}attributeChangedCallback(t5,i5,s5){this._$AK(t5,s5)}_$EO(t5,i5,s5=l2){var e5;const r5=this.constructor._$Ep(t5,s5);if(r5!==void 0&&s5.reflect===!0){const h4=(((e5=s5.converter)===null||e5===void 0?void 0:e5.toAttribute)!==void 0?s5.converter:n3).toAttribute(i5,s5.type);this._$El=t5,h4==null?this.removeAttribute(r5):this.setAttribute(r5,h4),this._$El=null}}_$AK(t5,i5){var s5;const e5=this.constructor,r5=e5._$Ev.get(t5);if(r5!==void 0&&this._$El!==r5){const t6=e5.getPropertyOptions(r5),h4=typeof t6.converter=="function"?{fromAttribute:t6.converter}:((s5=t6.converter)===null||s5===void 0?void 0:s5.fromAttribute)!==void 0?t6.converter:n3;this._$El=r5,this[r5]=h4.fromAttribute(i5,t6.type),this._$El=null}}requestUpdate(t5,i5,s5){let e5=!0;t5!==void 0&&(((s5=s5||this.constructor.getPropertyOptions(t5)).hasChanged||a)(this[t5],i5)?(this._$AL.has(t5)||this._$AL.set(t5,i5),s5.reflect===!0&&this._$El!==t5&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t5,s5))):e5=!1),!this.isUpdatePending&&e5&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t6){Promise.reject(t6)}const t5=this.scheduleUpdate();return t5!=null&&await t5,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t5;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t6,i6)=>this[i6]=t6),this._$Ei=void 0);let i5=!1;const s5=this._$AL;try{i5=this.shouldUpdate(s5),i5?(this.willUpdate(s5),(t5=this._$ES)===null||t5===void 0||t5.forEach((t6)=>{var i6;return(i6=t6.hostUpdate)===null||i6===void 0?void 0:i6.call(t6)}),this.update(s5)):this._$Ek()}catch(t6){throw i5=!1,this._$Ek(),t6}i5&&this._$AE(s5)}willUpdate(t5){}_$AE(t5){var i5;(i5=this._$ES)===null||i5===void 0||i5.forEach((t6)=>{var i6;return(i6=t6.hostUpdated)===null||i6===void 0?void 0:i6.call(t6)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t5)),this.updated(t5)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t5){return!0}update(t5){this._$EC!==void 0&&(this._$EC.forEach((t6,i5)=>this._$EO(i5,this[i5],t6)),this._$EC=void 0),this._$Ek()}updated(t5){}firstUpdated(t5){}}u3[d3]=!0,u3.elementProperties=new Map,u3.elementStyles=[],u3.shadowRootOptions={mode:"open"},o2==null||o2({ReactiveElement:u3}),((s4=e4.reactiveElementVersions)!==null&&s4!==void 0?s4:e4.reactiveElementVersions=[]).push("1.6.3");var l3,o3;class s5 extends u3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t5,e5;const i5=super.createRenderRoot();return(t5=(e5=this.renderOptions).renderBefore)!==null&&t5!==void 0||(e5.renderBefore=i5.firstChild),i5}update(t5){const i5=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t5),this._$Do=D(i5,this.renderRoot,this.renderOptions)}connectedCallback(){var t5;super.connectedCallback(),(t5=this._$Do)===null||t5===void 0||t5.setConnected(!0)}disconnectedCallback(){var t5;super.disconnectedCallback(),(t5=this._$Do)===null||t5===void 0||t5.setConnected(!1)}render(){return T}}s5.finalized=!0,s5._$litElement$=!0,(l3=globalThis.litElementHydrateSupport)===null||l3===void 0||l3.call(globalThis,{LitElement:s5});var n4=globalThis.litElementPolyfillSupport;n4==null||n4({LitElement:s5});((o3=globalThis.litElementVersions)!==null&&o3!==void 0?o3:globalThis.litElementVersions=[]).push("3.3.3");var o4=!1;var e5=(e6)=>(n5)=>typeof n5=="function"?((e7,n6)=>(customElements.define(e7,n6),n6))(e6,n5):((e7,n6)=>{const{kind:t5,elements:s6}=n6;return{kind:t5,elements:s6,finisher(n7){customElements.define(e7,n7)}}})(e6,n5);var n5=function(n6){return(t5,o5)=>o5!==void 0?e6(n6,t5,o5):i5(n6,t5)},i5=(i6,e6)=>e6.kind==="method"&&e6.descriptor&&!("value"in e6.descriptor)?{...e6,finisher(n6){n6.createProperty(e6.key,i6)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e6.key,initializer(){typeof e6.initializer=="function"&&(this[e6.key]=e6.initializer.call(this))},finisher(n6){n6.createProperty(e6.key,i6)}},e6=(i6,e7,n6)=>{e7.constructor.createProperty(n6,i6)};var o5=({finisher:e7,descriptor:t5})=>(o6,n6)=>{var r5;if(n6===void 0){const n7=(r5=o6.originalKey)!==null&&r5!==void 0?r5:o6.key,i6=t5!=null?{kind:"method",placement:"prototype",key:n7,descriptor:t5(o6.key)}:{...o6,key:n7};return e7!=null&&(i6.finisher=function(t6){e7(t6,n7)}),i6}{const r6=o6.constructor;t5!==void 0&&Object.defineProperty(o6,n6,t5(n6)),e7==null||e7(r6,n6)}};var i6=function(i7,n6){return o5({descriptor:(o6)=>{const t5={get(){var o7,n7;return(n7=(o7=this.renderRoot)===null||o7===void 0?void 0:o7.querySelector(i7))!==null&&n7!==void 0?n7:null},enumerable:!0,configurable:!0};if(n6){const n7=typeof o6=="symbol"?Symbol():"__"+o6;t5.get=function(){var o7,t6;return this[n7]===void 0&&(this[n7]=(t6=(o7=this.renderRoot)===null||o7===void 0?void 0:o7.querySelector(i7))!==null&&t6!==void 0?t6:null),this[n7]}}return t5}})};var n6,e7=((n6=window.HTMLSlotElement)===null||n6===void 0?void 0:n6.prototype.assignedElements)!=null?(o6,n7)=>o6.assignedElements(n7):(o6,n7)=>o6.assignedNodes(n7).filter((o7)=>o7.nodeType===Node.ELEMENT_NODE);var SWC;(function(SWC){SWC.map=new Map,SWC.routes=new Set;function send(type,eventInitDict){document.body.dispatchEvent(new CustomEvent(type,eventInitDict))}SWC.send=send;function getComponentTagName(constructorName){return Array.from(constructorName).map((c4,i7)=>/[A-Z]/g.test(c4)&&i7!==0?`-${c4.toLowerCase()}`:c4.toLowerCase()).join("")}SWC.getComponentTagName=getComponentTagName})(SWC||(SWC={}));var serverElement=(componentTag,serverActions)=>(proto)=>{if(serverActions.forEach((serverAction)=>{if(!SWC.map.has(componentTag))SWC.map.set(componentTag,new Map([[serverAction,[...serverAction.split(":")]]]));else SWC.map.get(componentTag).set(serverAction,[...serverAction.split(":")])}),o4)SWC.map.get(componentTag)?.forEach(([httpVerb,action])=>{SWC.routes.add({httpVerb,componentTag,action,res:async(ctx)=>{return(await import(`../../components/${componentTag}/${componentTag}.server.ts`))[action](ctx)}})});customElements.define(componentTag,proto)},LitServerElement=(genericConstructor)=>{return class extends genericConstructor{constructor(){super();if(!o4){const _COMPONENT_TAG_=SWC.getComponentTagName(this.constructor.name);SWC.map.get(_COMPONENT_TAG_)?.forEach(([httpVerb,action,prop])=>{this[action]=(parameters)=>SWC.send(action,{detail:{parameters}}),this.setAttribute("hx-trigger",`${action} from:body`),this.setAttribute(`hx-${httpVerb}`,`/api/swc/${_COMPONENT_TAG_}/${action}`),this.setAttribute("hx-swap","none"),document.body.addEventListener(`${action}:res`,({detail:{v:v3}})=>{this.setAttribute(prop,typeof v3==="object"?JSON.stringify(v3):v3)})})}}}};class xCounter extends LitServerElement(s5){constructor(){super(...arguments)}render(){return x` <button @click=${this.add}>push me daddy ${this.count}</button>`}}__legacyDecorateClassTS([n5({type:Number,reflect:!0})],xCounter.prototype,"count",void 0),xCounter=__legacyDecorateClassTS([serverElement("x-counter",["post:add:count"])],xCounter);class BlogArticle extends LitServerElement(s5){constructor(){super(...arguments)}static styles=i4`
		:host {
			display: block;
			background: limegreen;
		}
	`;handleClick(e8){this.$main.part.add("active")}render(){const{title,body,id}=this.post;return x`
			get post number
			<input
				type="number"
				value=${id}
				@change=${(e8)=>this.fetchblogpost({id:+e8.target.value})}
			/>
			<article part="article">
				<header part="header">${title} ${id}</header>
				<main part="main" @click=${this.handleClick}>${body}</main>
				<footer part="footer">wrote by ${x`hello`}</footer>
			</article>
		`}}__legacyDecorateClassTS([n5({type:Object,reflect:!0})],BlogArticle.prototype,"post",void 0),__legacyDecorateClassTS([i6("main")],BlogArticle.prototype,"$main",void 0),BlogArticle=__legacyDecorateClassTS([serverElement("blog-article",["post:fetchblogpost:post"])],BlogArticle);class xSwapped extends s5{constructor(){super(...arguments)}static styles=i4`
		:host {
			display: block;
			border: 3px solid white;
			border-radius: 1rem;
			padding: 1rem;
			margin: 2rem;
			color: white;
		}
	`;render(){return x`
			hello from outside, inner will be swapped
			<slot></slot>
		`}}xSwapped=__legacyDecorateClassTS([e5("x-swapped")],xSwapped);class Todo extends s5{constructor(){super(...arguments)}static styles=i4``;render(){const{_id,title,completed}=this;return x`
			<li id=${_id}>
				${title}
				<input
					type="checkbox"
					@change=${(e8)=>console.log("changed",e8.target.checked)}
					?checked=${completed}
				/>
			</li>
		`}}__legacyDecorateClassTS([n5({type:Number,reflect:!0})],Todo.prototype,"_id",void 0),__legacyDecorateClassTS([n5({type:String,reflect:!0})],Todo.prototype,"title",void 0),__legacyDecorateClassTS([n5({type:Boolean,reflect:!0})],Todo.prototype,"completed",void 0),Todo=__legacyDecorateClassTS([e5("to-do")],Todo);