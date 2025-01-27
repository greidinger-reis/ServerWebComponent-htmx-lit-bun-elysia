var __legacyDecorateClassTS = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1;i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __legacyMetadataTS = (k, v) => {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};

// lib/lit-server-components/utils.t
var P = function(t, i) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return e !== undefined ? e.createHTML(i) : i;
};
var S = function(t, i, s = t, e) {
  var o, n, l, h;
  if (i === T)
    return i;
  let r = e !== undefined ? (o = s._$Co) === null || o === undefined ? undefined : o[e] : s._$Cl;
  const u = d(i) ? undefined : i._$litDirective$;
  return (r == null ? undefined : r.constructor) !== u && ((n = r == null ? undefined : r._$AO) === null || n === undefined || n.call(r, false), u === undefined ? r = undefined : (r = new u(t), r._$AT(t, s, e)), e !== undefined ? ((l = (h = s)._$Co) !== null && l !== undefined ? l : h._$Co = [])[e] = r : s._$Cl = r), r !== undefined && (i = S(t, r._$AS(t, i.values), r, e)), i;
};
var t;
var i = window;
var s = i.trustedTypes;
var e = s ? s.createPolicy("lit-html", { createHTML: (t2) => t2 }) : undefined;
var o = "$lit$";
var n = `lit\$${(Math.random() + "").slice(9)}\$`;
var l = "?" + n;
var h = `<${l}>`;
var r = document;
var u = () => r.createComment("");
var d = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function";
var c = Array.isArray;
var v = (t2) => c(t2) || typeof (t2 == null ? undefined : t2[Symbol.iterator]) == "function";
var a = "[ \t\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|\$)`, "g");
var g = /'/g;
var $ = /"/g;
var y = /^(?:script|style|textarea|title)$/i;
var w = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 });
var x = w(1);
var b = w(2);
var T = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var E = new WeakMap;
var C = r.createTreeWalker(r, 129, null, false);
var V = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let l2, r2 = i2 === 2 ? "<svg>" : "", u2 = f;
  for (let i3 = 0;i3 < s2; i3++) {
    const s3 = t2[i3];
    let d2, c2, v2 = -1, a2 = 0;
    for (;a2 < s3.length && (u2.lastIndex = a2, c2 = u2.exec(s3), c2 !== null); )
      a2 = u2.lastIndex, u2 === f ? c2[1] === "!--" ? u2 = _ : c2[1] !== undefined ? u2 = m : c2[2] !== undefined ? (y.test(c2[2]) && (l2 = RegExp("</" + c2[2], "g")), u2 = p) : c2[3] !== undefined && (u2 = p) : u2 === p ? c2[0] === ">" ? (u2 = l2 != null ? l2 : f, v2 = -1) : c2[1] === undefined ? v2 = -2 : (v2 = u2.lastIndex - c2[2].length, d2 = c2[1], u2 = c2[3] === undefined ? p : c2[3] === '"' ? $ : g) : u2 === $ || u2 === g ? u2 = p : u2 === _ || u2 === m ? u2 = f : (u2 = p, l2 = undefined);
    const w2 = u2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += u2 === f ? s3 + h : v2 >= 0 ? (e2.push(d2), s3.slice(0, v2) + o + s3.slice(v2) + n + w2) : s3 + n + (v2 === -2 ? (e2.push(undefined), i3) : w2);
  }
  return [P(t2, r2 + (t2[s2] || "<?>") + (i2 === 2 ? "</svg>" : "")), e2];
};

class N {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let h2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const c2 = t2.length - 1, v2 = this.parts, [a2, f2] = V(t2, i2);
    if (this.el = N.createElement(a2, e2), C.currentNode = this.el.content, i2 === 2) {
      const t3 = this.el.content, i3 = t3.firstChild;
      i3.remove(), t3.append(...i3.childNodes);
    }
    for (;(h2 = C.nextNode()) !== null && v2.length < c2; ) {
      if (h2.nodeType === 1) {
        if (h2.hasAttributes()) {
          const t3 = [];
          for (const i3 of h2.getAttributeNames())
            if (i3.endsWith(o) || i3.startsWith(n)) {
              const s2 = f2[d2++];
              if (t3.push(i3), s2 !== undefined) {
                const t4 = h2.getAttribute(s2.toLowerCase() + o).split(n), i4 = /([.?@])?(.*)/.exec(s2);
                v2.push({ type: 1, index: r2, name: i4[2], strings: t4, ctor: i4[1] === "." ? H : i4[1] === "?" ? L : i4[1] === "@" ? z : k });
              } else
                v2.push({ type: 6, index: r2 });
            }
          for (const i3 of t3)
            h2.removeAttribute(i3);
        }
        if (y.test(h2.tagName)) {
          const t3 = h2.textContent.split(n), i3 = t3.length - 1;
          if (i3 > 0) {
            h2.textContent = s ? s.emptyScript : "";
            for (let s2 = 0;s2 < i3; s2++)
              h2.append(t3[s2], u()), C.nextNode(), v2.push({ type: 2, index: ++r2 });
            h2.append(t3[i3], u());
          }
        }
      } else if (h2.nodeType === 8)
        if (h2.data === l)
          v2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (;(t3 = h2.data.indexOf(n, t3 + 1)) !== -1; )
            v2.push({ type: 7, index: r2 }), t3 += n.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = r.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}

class M {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = undefined, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? undefined : t2.creationScope) !== null && i2 !== undefined ? i2 : r).importNode(s2, true);
    C.currentNode = o2;
    let n2 = C.nextNode(), l2 = 0, h2 = 0, u2 = e2[0];
    for (;u2 !== undefined; ) {
      if (l2 === u2.index) {
        let i3;
        u2.type === 2 ? i3 = new R(n2, n2.nextSibling, this, t2) : u2.type === 1 ? i3 = new u2.ctor(n2, u2.name, u2.strings, this, t2) : u2.type === 6 && (i3 = new Z(n2, this, t2)), this._$AV.push(i3), u2 = e2[++h2];
      }
      l2 !== (u2 == null ? undefined : u2.index) && (n2 = C.nextNode(), l2++);
    }
    return C.currentNode = r, o2;
  }
  v(t2) {
    let i2 = 0;
    for (const s2 of this._$AV)
      s2 !== undefined && (s2.strings !== undefined ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}

class R {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = A, this._$AN = undefined, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cp = (o2 = e2 == null ? undefined : e2.isConnected) === null || o2 === undefined || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === undefined ? undefined : t2._$AU) !== null && i2 !== undefined ? i2 : this._$Cp;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== undefined && (t2 == null ? undefined : t2.nodeType) === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = S(this, t2, i2), d(t2) ? t2 === A || t2 == null || t2 === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== T && this._(t2) : t2._$litType$ !== undefined ? this.g(t2) : t2.nodeType !== undefined ? this.$(t2) : v(t2) ? this.T(t2) : this._(t2);
  }
  k(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  $(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
  }
  _(t2) {
    this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(r.createTextNode(t2)), this._$AH = t2;
  }
  g(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === undefined && (e2.el = N.createElement(P(e2.h, e2.h[0]), this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === undefined ? undefined : i2._$AD) === o2)
      this._$AH.v(s2);
    else {
      const t3 = new M(o2, this), i3 = t3.u(this.options);
      t3.v(s2), this.$(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = E.get(t2.strings);
    return i2 === undefined && E.set(t2.strings, i2 = new N(t2)), i2;
  }
  T(t2) {
    c(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new R(this.k(u()), this.k(u()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === undefined || s2.call(this, false, true, i2);t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === undefined && (this._$Cp = t2, (i2 = this._$AP) === null || i2 === undefined || i2.call(this, t2));
  }
}

class k {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = A, this._$AN = undefined, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String), this.strings = s2) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === undefined)
      t2 = S(this, t2, i2, 0), n2 = !d(t2) || t2 !== this._$AH && t2 !== T, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0;l2 < o2.length - 1; l2++)
        h2 = S(this, e3[s2 + l2], i2, l2), h2 === T && (h2 = this._$AH[l2]), n2 || (n2 = !d(h2) || h2 !== this._$AH[l2]), h2 === A ? t2 = A : t2 !== A && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}

class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? undefined : t2;
  }
}
var I = s ? s.emptyScript : "";

class L extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
}

class z extends k {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = S(this, t2, i2, 0)) !== null && s2 !== undefined ? s2 : A) === T)
      return;
    const e2 = this._$AH, o2 = t2 === A && e2 !== A || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== A && (e2 === A || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === undefined ? undefined : i2.host) !== null && s2 !== undefined ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}

class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = undefined, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
}
var j = { O: o, P: n, A: l, C: 1, M: V, L: M, R: v, D: S, I: R, V: k, H: L, N: z, U: H, F: Z };
var B = i.litHtmlPolyfillSupport;
B == null || B(N, R), ((t = i.litHtmlVersions) !== null && t !== undefined ? t : i.litHtmlVersions = []).push("2.8.0");
var D = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? undefined : s2.renderBefore) !== null && e2 !== undefined ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === undefined) {
    const t3 = (o2 = s2 == null ? undefined : s2.renderBefore) !== null && o2 !== undefined ? o2 : null;
    n2._$litPart$ = l2 = new R(i2.insertBefore(u(), t3), t3, undefined, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
};

// lib/lit-server-components/utils.ts/css-tag.j
var r2 = { boundAttributeSuffix: j.O, marker: j.P, markerMatch: j.A, HTML_RESULT: j.C, getTemplateHtml: j.M, overrideDirectiveResolve: (e2, t2) => class extends e2 {
  _$AS(e3, r3) {
    return t2(this, r3);
  }
}, setDirectiveClass(e2, t2) {
  e2._$litDirective$ = t2;
}, getAttributePartCommittedValue: (e2, r3, a2) => {
  let i2 = T;
  return e2.j = (e3) => i2 = e3, e2._$AI(r3, e2, a2), i2;
}, connectedDisconnectable: (e2) => ({ ...e2, _$AU: true }), resolveDirective: j.D, AttributePart: j.V, PropertyPart: j.U, BooleanAttributePart: j.H, EventPart: j.N, ElementPart: j.F, TemplateInstance: j.L, isIterable: j.R, ChildPart: j.I };

// lib/lit-server-components/utils.ts
var t2 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };

// lib/lit-server-components/utils.ts/css-tag
var i2 = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function";
var t3 = (o2, l2) => l2 === undefined ? (o2 == null ? undefined : o2._$litType$) !== undefined : (o2 == null ? undefined : o2._$litType$) === l2;
var v2 = (o2) => {
  var l2;
  return ((l2 = o2 == null ? undefined : o2._$litType$) === null || l2 === undefined ? undefined : l2.h) != null;
};
var e2 = (o2) => o2.strings === undefined;

// lib/lit-server-components/utils.ts/css-tag.js/base.jsssig
var { TemplateInstance: i3, isIterable: s2, resolveDirective: c2, ChildPart: d2, ElementPart: p2 } = r2;
var f2 = (e3, t4, r3 = {}) => {
  if (t4._$litPart$ !== undefined)
    throw Error("container already contains a live render");
  let n2, o2, a2;
  const l2 = [], i4 = document.createTreeWalker(t4, NodeFilter.SHOW_COMMENT, null, false);
  let s3;
  for (;(s3 = i4.nextNode()) !== null; ) {
    const t5 = s3.data;
    if (t5.startsWith("lit-part")) {
      if (l2.length === 0 && n2 !== undefined)
        throw Error(`There must be only one root part per container. Found a part marker (${s3}) when we already have a root part marker (${o2})`);
      a2 = m2(e3, s3, l2, r3), n2 != null || (n2 = a2), o2 != null || (o2 = s3);
    } else if (t5.startsWith("lit-node"))
      u2(s3, l2, r3);
    else if (t5.startsWith("/lit-part")) {
      if (l2.length === 1 && a2 !== n2)
        throw Error("internal error");
      a2 = h2(s3, a2, l2);
    }
  }
  if (n2 === undefined) {
    const e4 = t4 instanceof ShadowRoot ? "{container.host.localName}'s shadow root" : t4 instanceof DocumentFragment ? "DocumentFragment" : t4.localName;
    console.error(`There should be exactly one root part in a render container, but we didn't find any in ${e4}.`);
  }
  t4._$litPart$ = n2;
};
var m2 = (t4, r3, l2, p3) => {
  let f3, m3;
  if (l2.length === 0)
    m3 = new d2(r3, null, undefined, p3), f3 = t4;
  else {
    const e3 = l2[l2.length - 1];
    if (e3.type === "template-instance")
      m3 = new d2(r3, null, e3.instance, p3), e3.instance._$AV.push(m3), f3 = e3.result.values[e3.instancePartIndex++], e3.templatePartIndex++;
    else if (e3.type === "iterable") {
      m3 = new d2(r3, null, e3.part, p3);
      const t5 = e3.iterator.next();
      if (t5.done)
        throw f3 = undefined, e3.done = true, Error("Unhandled shorter than expected iterable");
      f3 = t5.value, e3.part._$AH.push(m3);
    } else
      m3 = new d2(r3, null, e3.part, p3);
  }
  if (f3 = c2(m3, f3), f3 === T)
    l2.push({ part: m3, type: "leaf" });
  else if (i2(f3))
    l2.push({ part: m3, type: "leaf" }), m3._$AH = f3;
  else if (t3(f3)) {
    if (v2(f3))
      throw Error("compiled templates are not supported");
    const e3 = "lit-part " + w2(f3);
    if (r3.data !== e3)
      throw Error("Hydration value mismatch: Unexpected TemplateResult rendered to part");
    {
      const e4 = d2.prototype._$AC(f3), t5 = new i3(e4, m3);
      l2.push({ type: "template-instance", instance: t5, part: m3, templatePartIndex: 0, instancePartIndex: 0, result: f3 }), m3._$AH = t5;
    }
  } else
    s2(f3) ? (l2.push({ part: m3, type: "iterable", value: f3, iterator: f3[Symbol.iterator](), done: false }), m3._$AH = []) : (l2.push({ part: m3, type: "leaf" }), m3._$AH = f3 == null ? "" : f3);
  return m3;
};
var h2 = (e3, t4, r3) => {
  if (t4 === undefined)
    throw Error("unbalanced part marker");
  t4._$AB = e3;
  const n2 = r3.pop();
  if (n2.type === "iterable" && !n2.iterator.next().done)
    throw Error("unexpected longer than expected iterable");
  if (r3.length > 0)
    return r3[r3.length - 1].part;
};
var u2 = (e3, t4, n2) => {
  const o2 = /lit-node (\d+)/.exec(e3.data), a2 = parseInt(o2[1]), i4 = e3.nextElementSibling;
  if (i4 === null)
    throw Error("could not find node for attribute parts");
  i4.removeAttribute("defer-hydration");
  const s3 = t4[t4.length - 1];
  if (s3.type !== "template-instance")
    throw Error("internal error");
  {
    const e4 = s3.instance;
    for (;; ) {
      const t5 = e4._$AD.parts[s3.templatePartIndex];
      if (t5 === undefined || t5.type !== t2.ATTRIBUTE && t5.type !== t2.ELEMENT || t5.index !== a2)
        break;
      if (t5.type === t2.ATTRIBUTE) {
        const o3 = new t5.ctor(i4, t5.name, t5.strings, s3.instance, n2), a3 = e2(o3) ? s3.result.values[s3.instancePartIndex] : s3.result.values, c3 = !(o3.type === t2.EVENT || o3.type === t2.PROPERTY);
        o3._$AI(a3, o3, s3.instancePartIndex, c3), s3.instancePartIndex += t5.strings.length - 1, e4._$AV.push(o3);
      } else {
        const t6 = new p2(i4, s3.instance, n2);
        c2(t6, s3.result.values[s3.instancePartIndex++]), e4._$AV.push(t6);
      }
      s3.templatePartIndex++;
    }
  }
};
var w2 = (e3) => {
  const t4 = new Uint32Array(2).fill(5381);
  for (const r4 of e3.strings)
    for (let e4 = 0;e4 < r4.length; e4++)
      t4[e4 % 2] = 33 * t4[e4 % 2] ^ r4.charCodeAt(e4);
  const r3 = String.fromCharCode(...new Uint8Array(t4.buffer));
  return btoa(r3);
};

// lib/lit-server-components/utils.ts/css-tag.js/base.jsssigned-nod
globalThis.litElementHydrateSupport = ({ LitElement: s3 }) => {
  const h3 = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(s3), "observedAttributes").get;
  Object.defineProperty(s3, "observedAttributes", { get() {
    return [...h3.call(this), "defer-hydration"];
  } });
  const e3 = s3.prototype.attributeChangedCallback;
  s3.prototype.attributeChangedCallback = function(t4, i4, s4) {
    t4 === "defer-hydration" && s4 === null && n2.call(this), e3.call(this, t4, i4, s4);
  };
  const n2 = s3.prototype.connectedCallback;
  s3.prototype.connectedCallback = function() {
    this.hasAttribute("defer-hydration") || n2.call(this);
  };
  const o2 = s3.prototype.createRenderRoot;
  s3.prototype.createRenderRoot = function() {
    return this.shadowRoot ? (this._$AG = true, this.shadowRoot) : o2.call(this);
  };
  const r3 = Object.getPrototypeOf(s3.prototype).update;
  s3.prototype.update = function(s4) {
    const h4 = this.render();
    if (r3.call(this, s4), this._$AG) {
      this._$AG = false;
      for (let t4 = 0;t4 < this.attributes.length; t4++) {
        const i4 = this.attributes[t4];
        if (i4.name.startsWith("hydrate-internals-")) {
          const t5 = i4.name.slice(18);
          this.removeAttribute(t5), this.removeAttribute(i4.name);
        }
      }
      f2(h4, this.renderRoot, this.renderOptions);
    } else
      D(h4, this.renderRoot, this.renderOptions);
  };
};

// lib/lit-server-components/ut
document.body.addEventListener("htmx:configRequest", (e3) => {
  if (e3.detail.verb === "post") {
    e3.detail.headers["swc-params"] = JSON.stringify(e3.detail.triggeringEvent.detail.parameters);
  }
});

// lib/lit-server-components/utils.ts/css-tag.js
var t4 = window;
var e3 = t4.ShadowRoot && (t4.ShadyCSS === undefined || t4.ShadyCSS.nativeShadow) && ("adoptedStyleSheets" in Document.prototype) && ("replace" in CSSStyleSheet.prototype);
var s3 = Symbol();
var n2 = new WeakMap;

class o2 {
  constructor(t5, e4, n3) {
    if (this._$cssResult$ = true, n3 !== s3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t5, this.t = e4;
  }
  get styleSheet() {
    let t5 = this.o;
    const s4 = this.t;
    if (e3 && t5 === undefined) {
      const e4 = s4 !== undefined && s4.length === 1;
      e4 && (t5 = n2.get(s4)), t5 === undefined && ((this.o = t5 = new CSSStyleSheet).replaceSync(this.cssText), e4 && n2.set(s4, t5));
    }
    return t5;
  }
  toString() {
    return this.cssText;
  }
}
var r3 = (t5) => new o2(typeof t5 == "string" ? t5 : t5 + "", undefined, s3);
var i4 = (t5, ...e4) => {
  const n3 = t5.length === 1 ? t5[0] : e4.reduce((e5, s4, n4) => e5 + ((t6) => {
    if (t6._$cssResult$ === true)
      return t6.cssText;
    if (typeof t6 == "number")
      return t6;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s4) + t5[n4 + 1], t5[0]);
  return new o2(n3, t5, s3);
};
var S2 = (s4, n3) => {
  e3 ? s4.adoptedStyleSheets = n3.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet) : n3.forEach((e4) => {
    const n4 = document.createElement("style"), o3 = t4.litNonce;
    o3 !== undefined && n4.setAttribute("nonce", o3), n4.textContent = e4.cssText, s4.appendChild(n4);
  });
};
var c3 = e3 ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
  let e4 = "";
  for (const s4 of t6.cssRules)
    e4 += s4.cssText;
  return r3(e4);
})(t5) : t5;

// lib/lit-server-components/utils.ts/css-tag.js/base.jss
var s4;
var e4 = window;
var r4 = e4.trustedTypes;
var h3 = r4 ? r4.emptyScript : "";
var o3 = e4.reactiveElementPolyfillSupport;
var n3 = { toAttribute(t5, i5) {
  switch (i5) {
    case Boolean:
      t5 = t5 ? h3 : null;
      break;
    case Object:
    case Array:
      t5 = t5 == null ? t5 : JSON.stringify(t5);
  }
  return t5;
}, fromAttribute(t5, i5) {
  let s5 = t5;
  switch (i5) {
    case Boolean:
      s5 = t5 !== null;
      break;
    case Number:
      s5 = t5 === null ? null : Number(t5);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t5);
      } catch (t6) {
        s5 = null;
      }
  }
  return s5;
} };
var a2 = (t5, i5) => i5 !== t5 && (i5 == i5 || t5 == t5);
var l2 = { attribute: true, type: String, converter: n3, reflect: false, hasChanged: a2 };
var d3 = "finalized";

class u3 extends HTMLElement {
  constructor() {
    super(), this._$Ei = new Map, this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t5) {
    var i5;
    this.finalize(), ((i5 = this.h) !== null && i5 !== undefined ? i5 : this.h = []).push(t5);
  }
  static get observedAttributes() {
    this.finalize();
    const t5 = [];
    return this.elementProperties.forEach((i5, s5) => {
      const e5 = this._$Ep(s5, i5);
      e5 !== undefined && (this._$Ev.set(e5, s5), t5.push(e5));
    }), t5;
  }
  static createProperty(t5, i5 = l2) {
    if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t5, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t5)) {
      const s5 = typeof t5 == "symbol" ? Symbol() : "__" + t5, e5 = this.getPropertyDescriptor(t5, s5, i5);
      e5 !== undefined && Object.defineProperty(this.prototype, t5, e5);
    }
  }
  static getPropertyDescriptor(t5, i5, s5) {
    return { get() {
      return this[i5];
    }, set(e5) {
      const r5 = this[t5];
      this[i5] = e5, this.requestUpdate(t5, r5, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t5) {
    return this.elementProperties.get(t5) || l2;
  }
  static finalize() {
    if (this.hasOwnProperty(d3))
      return false;
    this[d3] = true;
    const t5 = Object.getPrototypeOf(this);
    if (t5.finalize(), t5.h !== undefined && (this.h = [...t5.h]), this.elementProperties = new Map(t5.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
      const t6 = this.properties, i5 = [...Object.getOwnPropertyNames(t6), ...Object.getOwnPropertySymbols(t6)];
      for (const s5 of i5)
        this.createProperty(s5, t6[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i5) {
    const s5 = [];
    if (Array.isArray(i5)) {
      const e5 = new Set(i5.flat(1 / 0).reverse());
      for (const i6 of e5)
        s5.unshift(c3(i6));
    } else
      i5 !== undefined && s5.push(c3(i5));
    return s5;
  }
  static _$Ep(t5, i5) {
    const s5 = i5.attribute;
    return s5 === false ? undefined : typeof s5 == "string" ? s5 : typeof t5 == "string" ? t5.toLowerCase() : undefined;
  }
  _$Eu() {
    var t5;
    this._$E_ = new Promise((t6) => this.enableUpdating = t6), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (t5 = this.constructor.h) === null || t5 === undefined || t5.forEach((t6) => t6(this));
  }
  addController(t5) {
    var i5, s5;
    ((i5 = this._$ES) !== null && i5 !== undefined ? i5 : this._$ES = []).push(t5), this.renderRoot !== undefined && this.isConnected && ((s5 = t5.hostConnected) === null || s5 === undefined || s5.call(t5));
  }
  removeController(t5) {
    var i5;
    (i5 = this._$ES) === null || i5 === undefined || i5.splice(this._$ES.indexOf(t5) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t5, i5) => {
      this.hasOwnProperty(i5) && (this._$Ei.set(i5, this[i5]), delete this[i5]);
    });
  }
  createRenderRoot() {
    var t5;
    const s5 = (t5 = this.shadowRoot) !== null && t5 !== undefined ? t5 : this.attachShadow(this.constructor.shadowRootOptions);
    return S2(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t5;
    this.renderRoot === undefined && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t5 = this._$ES) === null || t5 === undefined || t5.forEach((t6) => {
      var i5;
      return (i5 = t6.hostConnected) === null || i5 === undefined ? undefined : i5.call(t6);
    });
  }
  enableUpdating(t5) {
  }
  disconnectedCallback() {
    var t5;
    (t5 = this._$ES) === null || t5 === undefined || t5.forEach((t6) => {
      var i5;
      return (i5 = t6.hostDisconnected) === null || i5 === undefined ? undefined : i5.call(t6);
    });
  }
  attributeChangedCallback(t5, i5, s5) {
    this._$AK(t5, s5);
  }
  _$EO(t5, i5, s5 = l2) {
    var e5;
    const r5 = this.constructor._$Ep(t5, s5);
    if (r5 !== undefined && s5.reflect === true) {
      const h4 = (((e5 = s5.converter) === null || e5 === undefined ? undefined : e5.toAttribute) !== undefined ? s5.converter : n3).toAttribute(i5, s5.type);
      this._$El = t5, h4 == null ? this.removeAttribute(r5) : this.setAttribute(r5, h4), this._$El = null;
    }
  }
  _$AK(t5, i5) {
    var s5;
    const e5 = this.constructor, r5 = e5._$Ev.get(t5);
    if (r5 !== undefined && this._$El !== r5) {
      const t6 = e5.getPropertyOptions(r5), h4 = typeof t6.converter == "function" ? { fromAttribute: t6.converter } : ((s5 = t6.converter) === null || s5 === undefined ? undefined : s5.fromAttribute) !== undefined ? t6.converter : n3;
      this._$El = r5, this[r5] = h4.fromAttribute(i5, t6.type), this._$El = null;
    }
  }
  requestUpdate(t5, i5, s5) {
    let e5 = true;
    t5 !== undefined && (((s5 = s5 || this.constructor.getPropertyOptions(t5)).hasChanged || a2)(this[t5], i5) ? (this._$AL.has(t5) || this._$AL.set(t5, i5), s5.reflect === true && this._$El !== t5 && (this._$EC === undefined && (this._$EC = new Map), this._$EC.set(t5, s5))) : e5 = false), !this.isUpdatePending && e5 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t6) {
      Promise.reject(t6);
    }
    const t5 = this.scheduleUpdate();
    return t5 != null && await t5, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t5;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t6, i6) => this[i6] = t6), this._$Ei = undefined);
    let i5 = false;
    const s5 = this._$AL;
    try {
      i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), (t5 = this._$ES) === null || t5 === undefined || t5.forEach((t6) => {
        var i6;
        return (i6 = t6.hostUpdate) === null || i6 === undefined ? undefined : i6.call(t6);
      }), this.update(s5)) : this._$Ek();
    } catch (t6) {
      throw i5 = false, this._$Ek(), t6;
    }
    i5 && this._$AE(s5);
  }
  willUpdate(t5) {
  }
  _$AE(t5) {
    var i5;
    (i5 = this._$ES) === null || i5 === undefined || i5.forEach((t6) => {
      var i6;
      return (i6 = t6.hostUpdated) === null || i6 === undefined ? undefined : i6.call(t6);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
  }
  _$Ek() {
    this._$AL = new Map, this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t5) {
    return true;
  }
  update(t5) {
    this._$EC !== undefined && (this._$EC.forEach((t6, i5) => this._$EO(i5, this[i5], t6)), this._$EC = undefined), this._$Ek();
  }
  updated(t5) {
  }
  firstUpdated(t5) {
  }
}
u3[d3] = true, u3.elementProperties = new Map, u3.elementStyles = [], u3.shadowRootOptions = { mode: "open" }, o3 == null || o3({ ReactiveElement: u3 }), ((s4 = e4.reactiveElementVersions) !== null && s4 !== undefined ? s4 : e4.reactiveElementVersions = []).push("1.6.3");
// lib/lit-server-components/utils.ts/css-
var l3;
var o4;
class s5 extends u3 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = undefined;
  }
  createRenderRoot() {
    var t5, e5;
    const i5 = super.createRenderRoot();
    return (t5 = (e5 = this.renderOptions).renderBefore) !== null && t5 !== undefined || (e5.renderBefore = i5.firstChild), i5;
  }
  update(t5) {
    const i5 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = D(i5, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t5;
    super.connectedCallback(), (t5 = this._$Do) === null || t5 === undefined || t5.setConnected(true);
  }
  disconnectedCallback() {
    var t5;
    super.disconnectedCallback(), (t5 = this._$Do) === null || t5 === undefined || t5.setConnected(false);
  }
  render() {
    return T;
  }
}
s5.finalized = true, s5._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === undefined || l3.call(globalThis, { LitElement: s5 });
var n4 = globalThis.litElementPolyfillSupport;
n4 == null || n4({ LitElement: s5 });
((o4 = globalThis.litElementVersions) !== null && o4 !== undefined ? o4 : globalThis.litElementVersions = []).push("3.3.3");
// lib/lit-server-components/utils.ts
var o5 = false;
// lib/lit-server-components/utils.ts/css-tag.js/base.jsssigned-no
var e5 = (e6) => (n5) => typeof n5 == "function" ? ((e7, n6) => (customElements.define(e7, n6), n6))(e6, n5) : ((e7, n6) => {
  const { kind: t5, elements: s6 } = n6;
  return { kind: t5, elements: s6, finisher(n7) {
    customElements.define(e7, n7);
  } };
})(e6, n5);
// lib/lit-server-components/utils.ts/css-tag.js/base.jsssig
var n5 = function(n6) {
  return (t5, o6) => o6 !== undefined ? e6(n6, t5, o6) : i5(n6, t5);
};
var i5 = (i6, e6) => e6.kind === "method" && e6.descriptor && !("value" in e6.descriptor) ? { ...e6, finisher(n6) {
  n6.createProperty(e6.key, i6);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e6.key, initializer() {
  typeof e6.initializer == "function" && (this[e6.key] = e6.initializer.call(this));
}, finisher(n6) {
  n6.createProperty(e6.key, i6);
} };
var e6 = (i6, e7, n6) => {
  e7.constructor.createProperty(n6, i6);
};
// lib/lit-server-components/utils.ts/css-tag.js/base.jsssigned-nodes.js.js
var n6;
var e7 = ((n6 = window.HTMLSlotElement) === null || n6 === undefined ? undefined : n6.prototype.assignedElements) != null ? (o7, n7) => o7.assignedElements(n7) : (o7, n7) => o7.assignedNodes(n7).filter((o8) => o8.nodeType === Node.ELEMENT_NODE);
// lib/lit-server-components/utils.ts
var SWCKind;
(function(SWCKind2) {
  SWCKind2["Loader"] = "loader";
  SWCKind2["Action"] = "action";
})(SWCKind || (SWCKind = {}));

// lib/lit-server-components/utils.ts
function getPathFromLastInCallStack() {
  const stack = new Error().stack;
  const lines = stack.split("\n");
  for (let i6 = lines.length - 1;i6 >= 0; i6--) {
    const line = lines[i6].trim();
    const match = line.match(/\((.*)(?::\d+:\d+)\)/);
    if (match) {
      return match[1];
    }
  }
  return null;
}

// lib/lit-server-components/utils.t
function action(args) {
  return function(target, action2) {
    const componentTag = `x-${target.constructor.name.toLowerCase()}`;
    const route = {
      kind: SWCKind.Action,
      action: action2
    };
    if (!SWC.map.has(componentTag)) {
      SWC.map.set(componentTag, new Set([route]));
    }
    if (o5) {
      const filePath = getPathFromLastInCallStack();
      console.log(filePath);
      const serverPath = filePath.replace(".ts", ".server.ts");
      console.log(serverPath);
      route.res = async (ctx) => {
        const mod = await import(serverPath);
        return mod[action2](ctx);
      };
      SWC.map.set(componentTag, SWC.map.get(componentTag).add(route));
      return;
    }
    const element = document.querySelector(componentTag);
    if (!element)
      throw Error("FATAL: Could not find element with tag name: " + componentTag);
    SWC.map.get(componentTag)?.forEach((route2) => {
      element[action2] = (parameters) => SWC.send(action2, { detail: { parameters } });
      const httpVerb = route2.kind === SWCKind.Action ? "post" : "get";
      element.setAttribute("hx-trigger", `${action2} from:body`);
      element.setAttribute(`hx-${httpVerb}`, `${SWC.basePath}/${componentTag}/${action2}`);
      element.setAttribute("hx-swap", "none");
      if (args) {
        document.body.addEventListener(`${componentTag}:${action2}:res`, ({ detail: { v: v3 } }) => {
          element.setAttribute(args.bind, typeof v3 === "object" ? JSON.stringify(v3) : v3);
        });
      }
    });
  };
}
var SWC;
(function(SWC) {
  SWC.basePath = "/api/swc";
  SWC.map = new Map;
  function send(type, eventInitDict) {
    document.body.dispatchEvent(new CustomEvent(type, eventInitDict));
  }
  SWC.send = send;
})(SWC || (SWC = {}));
// lib/lit-server-components/utils.ts/css-ta
class Counter extends s5 {
  constructor() {
    super(...arguments);
  }
  render() {
    return x` <button @click=${() => this.add(2)}>push me daddy ${this.count}</button>`;
  }
}
__legacyDecorateClassTS([
  n5({ type: Number, reflect: true }),
  __legacyMetadataTS("design:type", Number)
], Counter.prototype, "count", undefined);
__legacyDecorateClassTS([
  action({ bind: "count" }),
  __legacyMetadataTS("design:type", Object)
], Counter.prototype, "add", undefined);
Counter = __legacyDecorateClassTS([
  e5("x-counter")
], Counter);

// lib/lit-server-components/utils.t
class Todo extends s5 {
  constructor() {
    super(...arguments);
  }
  static styles = i4``;
  render() {
    const { _id, title, completed } = this;
    return x`
			<li id=${_id}>
				${title}
				<input
					type="checkbox"
					@change=${(e8) => console.log("changed", e8.target.checked)}
					?checked=${completed}
				/>
			</li>
		`;
  }
}
__legacyDecorateClassTS([
  n5({ type: Number, reflect: true }),
  __legacyMetadataTS("design:type", Number)
], Todo.prototype, "_id", undefined);
__legacyDecorateClassTS([
  n5({ type: String, reflect: true }),
  __legacyMetadataTS("design:type", String)
], Todo.prototype, "title", undefined);
__legacyDecorateClassTS([
  n5({ type: Boolean, reflect: true }),
  __legacyMetadataTS("design:type", Boolean)
], Todo.prototype, "completed", undefined);
Todo = __legacyDecorateClassTS([
  e5("to-do")
], Todo);
