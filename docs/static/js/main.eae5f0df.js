/*! For license information please see main.eae5f0df.js.LICENSE.txt */
!(function () {
  'use strict';
  var e = {
      463: function (e, n, t) {
        var a = t(791),
          r = t(296);
        function l(e) {
          for (
            var n =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              t = 1;
            t < arguments.length;
            t++
          )
            n += '&args[]=' + encodeURIComponent(arguments[t]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            n +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var i = new Set(),
          s = {};
        function o(e, n) {
          c(e, n), c(e + 'Capture', n);
        }
        function c(e, n) {
          for (s[e] = n, e = 0; e < n.length; e++) i.add(n[e]);
        }
        var u = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, n, t, a, r, l, i) {
          (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
            (this.attributeName = a),
            (this.attributeNamespace = r),
            (this.mustUseProperty = t),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var n = e[0];
            g[n] = new h(n, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, n, t, a) {
          var r = g.hasOwnProperty(n) ? g[n] : null;
          (null !== r
            ? 0 !== r.type
            : a ||
              !(2 < n.length) ||
              ('o' !== n[0] && 'O' !== n[0]) ||
              ('n' !== n[1] && 'N' !== n[1])) &&
            ((function (e, n, t, a) {
              if (
                null === n ||
                'undefined' === typeof n ||
                (function (e, n, t, a) {
                  if (null !== t && 0 === t.type) return !1;
                  switch (typeof n) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !a &&
                        (null !== t
                          ? !t.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, n, t, a)
              )
                return !0;
              if (a) return !1;
              if (null !== t)
                switch (t.type) {
                  case 3:
                    return !n;
                  case 4:
                    return !1 === n;
                  case 5:
                    return isNaN(n);
                  case 6:
                    return isNaN(n) || 1 > n;
                }
              return !1;
            })(n, t, r, a) && (t = null),
            a || null === r
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(n) &&
                (null === t ? e.removeAttribute(n) : e.setAttribute(n, '' + t))
              : r.mustUseProperty
              ? (e[r.propertyName] = null === t ? 3 !== r.type && '' : t)
              : ((n = r.attributeName),
                (a = r.attributeNamespace),
                null === t
                  ? e.removeAttribute(n)
                  : ((t =
                      3 === (r = r.type) || (4 === r && !0 === t)
                        ? ''
                        : '' + t),
                    a ? e.setAttributeNS(a, n, t) : e.setAttribute(n, t))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var n = e.replace(v, b);
            g[n] = new h(n, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var n = e.replace(v, b);
              g[n] = new h(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var n = e.replace(v, b);
            g[n] = new h(
              n,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for('react.element'),
          k = Symbol.for('react.portal'),
          N = Symbol.for('react.fragment'),
          w = Symbol.for('react.strict_mode'),
          j = Symbol.for('react.profiler'),
          S = Symbol.for('react.provider'),
          E = Symbol.for('react.context'),
          C = Symbol.for('react.forward_ref'),
          P = Symbol.for('react.suspense'),
          L = Symbol.for('react.suspense_list'),
          T = Symbol.for('react.memo'),
          z = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var A = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var I = Symbol.iterator;
        function O(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (I && e[I]) || e['@@iterator'])
            ? e
            : null;
        }
        var D,
          M = Object.assign;
        function R(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (t) {
              var n = t.stack.trim().match(/\n( *(at )?)/);
              D = (n && n[1]) || '';
            }
          return '\n' + D + e;
        }
        var U = !1;
        function F(e, n) {
          if (!e || U) return '';
          U = !0;
          var t = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (n)
              if (
                ((n = function () {
                  throw Error();
                }),
                Object.defineProperty(n.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(n, []);
                } catch (c) {
                  var a = c;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (c) {
                  a = c;
                }
                e.call(n.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                a = c;
              }
              e();
            }
          } catch (c) {
            if (c && a && 'string' === typeof c.stack) {
              for (
                var r = c.stack.split('\n'),
                  l = a.stack.split('\n'),
                  i = r.length - 1,
                  s = l.length - 1;
                1 <= i && 0 <= s && r[i] !== l[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (r[i] !== l[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || r[i] !== l[s])) {
                        var o = '\n' + r[i].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            o.includes('<anonymous>') &&
                            (o = o.replace('<anonymous>', e.displayName)),
                          o
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = t);
          }
          return (e = e ? e.displayName || e.name : '') ? R(e) : '';
        }
        function q(e) {
          switch (e.tag) {
            case 5:
              return R(e.type);
            case 16:
              return R('Lazy');
            case 13:
              return R('Suspense');
            case 19:
              return R('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return '';
          }
        }
        function W(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case N:
              return 'Fragment';
            case k:
              return 'Portal';
            case j:
              return 'Profiler';
            case w:
              return 'StrictMode';
            case P:
              return 'Suspense';
            case L:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || 'Context') + '.Consumer';
              case S:
                return (e._context.displayName || 'Context') + '.Provider';
              case C:
                var n = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = n.displayName || n.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case T:
                return null !== (n = e.displayName || null)
                  ? n
                  : W(e.type) || 'Memo';
              case z:
                (n = e._payload), (e = e._init);
                try {
                  return W(e(n));
                } catch (t) {}
            }
          return null;
        }
        function B(e) {
          var n = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (n.displayName || 'Context') + '.Consumer';
            case 10:
              return (n._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = n.render).displayName || e.name || ''),
                n.displayName ||
                  ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return n;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return W(n);
            case 8:
              return n === w ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof n)
                return n.displayName || n.name || null;
              if ('string' === typeof n) return n;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function H(e) {
          var n = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === n || 'radio' === n)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var n = H(e) ? 'checked' : 'value',
                t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                a = '' + e[n];
              if (
                !e.hasOwnProperty(n) &&
                'undefined' !== typeof t &&
                'function' === typeof t.get &&
                'function' === typeof t.set
              ) {
                var r = t.get,
                  l = t.set;
                return (
                  Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                      return r.call(this);
                    },
                    set: function (e) {
                      (a = '' + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, n, { enumerable: t.enumerable }),
                  {
                    getValue: function () {
                      return a;
                    },
                    setValue: function (e) {
                      a = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[n];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var n = e._valueTracker;
          if (!n) return !0;
          var t = n.getValue(),
            a = '';
          return (
            e && (a = H(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = a) !== t && (n.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (n) {
            return e.body;
          }
        }
        function K(e, n) {
          var t = n.checked;
          return M({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != t ? t : e._wrapperState.initialChecked,
          });
        }
        function G(e, n) {
          var t = null == n.defaultValue ? '' : n.defaultValue,
            a = null != n.checked ? n.checked : n.defaultChecked;
          (t = V(null != n.value ? n.value : t)),
            (e._wrapperState = {
              initialChecked: a,
              initialValue: t,
              controlled:
                'checkbox' === n.type || 'radio' === n.type
                  ? null != n.checked
                  : null != n.value,
            });
        }
        function J(e, n) {
          null != (n = n.checked) && y(e, 'checked', n, !1);
        }
        function X(e, n) {
          J(e, n);
          var t = V(n.value),
            a = n.type;
          if (null != t)
            'number' === a
              ? ((0 === t && '' === e.value) || e.value != t) &&
                (e.value = '' + t)
              : e.value !== '' + t && (e.value = '' + t);
          else if ('submit' === a || 'reset' === a)
            return void e.removeAttribute('value');
          n.hasOwnProperty('value')
            ? ee(e, n.type, t)
            : n.hasOwnProperty('defaultValue') &&
              ee(e, n.type, V(n.defaultValue)),
            null == n.checked &&
              null != n.defaultChecked &&
              (e.defaultChecked = !!n.defaultChecked);
        }
        function Z(e, n, t) {
          if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
            var a = n.type;
            if (
              !(
                ('submit' !== a && 'reset' !== a) ||
                (void 0 !== n.value && null !== n.value)
              )
            )
              return;
            (n = '' + e._wrapperState.initialValue),
              t || n === e.value || (e.value = n),
              (e.defaultValue = n);
          }
          '' !== (t = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== t && (e.name = t);
        }
        function ee(e, n, t) {
          ('number' === n && Y(e.ownerDocument) === e) ||
            (null == t
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + t && (e.defaultValue = '' + t));
        }
        var ne = Array.isArray;
        function te(e, n, t, a) {
          if (((e = e.options), n)) {
            n = {};
            for (var r = 0; r < t.length; r++) n['$' + t[r]] = !0;
            for (t = 0; t < e.length; t++)
              (r = n.hasOwnProperty('$' + e[t].value)),
                e[t].selected !== r && (e[t].selected = r),
                r && a && (e[t].defaultSelected = !0);
          } else {
            for (t = '' + V(t), n = null, r = 0; r < e.length; r++) {
              if (e[r].value === t)
                return (
                  (e[r].selected = !0), void (a && (e[r].defaultSelected = !0))
                );
              null !== n || e[r].disabled || (n = e[r]);
            }
            null !== n && (n.selected = !0);
          }
        }
        function ae(e, n) {
          if (null != n.dangerouslySetInnerHTML) throw Error(l(91));
          return M({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function re(e, n) {
          var t = n.value;
          if (null == t) {
            if (((t = n.children), (n = n.defaultValue), null != t)) {
              if (null != n) throw Error(l(92));
              if (ne(t)) {
                if (1 < t.length) throw Error(l(93));
                t = t[0];
              }
              n = t;
            }
            null == n && (n = ''), (t = n);
          }
          e._wrapperState = { initialValue: V(t) };
        }
        function le(e, n) {
          var t = V(n.value),
            a = V(n.defaultValue);
          null != t &&
            ((t = '' + t) !== e.value && (e.value = t),
            null == n.defaultValue &&
              e.defaultValue !== t &&
              (e.defaultValue = t)),
            null != a && (e.defaultValue = '' + a);
        }
        function ie(e) {
          var n = e.textContent;
          n === e._wrapperState.initialValue &&
            '' !== n &&
            null !== n &&
            (e.value = n);
        }
        function se(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function oe(e, n) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? se(n)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === n
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, n) {
              if (
                'http://www.w3.org/2000/svg' !== e.namespaceURI ||
                'innerHTML' in e
              )
                e.innerHTML = n;
              else {
                for (
                  (ce = ce || document.createElement('div')).innerHTML =
                    '<svg>' + n.valueOf().toString() + '</svg>',
                    n = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, n, t, a) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, n);
                  });
                }
              : ue);
        function fe(e, n) {
          if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && 3 === t.nodeType)
              return void (t.nodeValue = n);
          }
          e.textContent = n;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ['Webkit', 'ms', 'Moz', 'O'];
        function he(e, n, t) {
          return null == n || 'boolean' === typeof n || '' === n
            ? ''
            : t ||
              'number' !== typeof n ||
              0 === n ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ('' + n).trim()
            : n + 'px';
        }
        function ge(e, n) {
          for (var t in ((e = e.style), n))
            if (n.hasOwnProperty(t)) {
              var a = 0 === t.indexOf('--'),
                r = he(t, n[t], a);
              'float' === t && (t = 'cssFloat'),
                a ? e.setProperty(t, r) : (e[t] = r);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[n] = pe[e]);
          });
        });
        var ve = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function be(e, n) {
          if (n) {
            if (
              ve[e] &&
              (null != n.children || null != n.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != n.dangerouslySetInnerHTML) {
              if (null != n.children) throw Error(l(60));
              if (
                'object' !== typeof n.dangerouslySetInnerHTML ||
                !('__html' in n.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != n.style && 'object' !== typeof n.style)
              throw Error(l(62));
          }
        }
        function ye(e, n) {
          if (-1 === e.indexOf('-')) return 'string' === typeof n.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ne = null,
          we = null;
        function je(e) {
          if ((e = yr(e))) {
            if ('function' !== typeof ke) throw Error(l(280));
            var n = e.stateNode;
            n && ((n = _r(n)), ke(e.stateNode, e.type, n));
          }
        }
        function Se(e) {
          Ne ? (we ? we.push(e) : (we = [e])) : (Ne = e);
        }
        function Ee() {
          if (Ne) {
            var e = Ne,
              n = we;
            if (((we = Ne = null), je(e), n))
              for (e = 0; e < n.length; e++) je(n[e]);
          }
        }
        function Ce(e, n) {
          return e(n);
        }
        function Pe() {}
        var Le = !1;
        function Te(e, n, t) {
          if (Le) return e(n, t);
          Le = !0;
          try {
            return Ce(e, n, t);
          } finally {
            (Le = !1), (null !== Ne || null !== we) && (Pe(), Ee());
          }
        }
        function ze(e, n) {
          var t = e.stateNode;
          if (null === t) return null;
          var a = _r(t);
          if (null === a) return null;
          t = a[n];
          e: switch (n) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (a = !a.disabled) ||
                (a = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !a);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (t && 'function' !== typeof t) throw Error(l(231, n, typeof t));
          return t;
        }
        var Ae = !1;
        if (u)
          try {
            var Ie = {};
            Object.defineProperty(Ie, 'passive', {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener('test', Ie, Ie),
              window.removeEventListener('test', Ie, Ie);
          } catch (ue) {
            Ae = !1;
          }
        function Oe(e, n, t, a, r, l, i, s, o) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            n.apply(t, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var De = !1,
          Me = null,
          Re = !1,
          Ue = null,
          Fe = {
            onError: function (e) {
              (De = !0), (Me = e);
            },
          };
        function qe(e, n, t, a, r, l, i, s, o) {
          (De = !1), (Me = null), Oe.apply(Fe, arguments);
        }
        function We(e) {
          var n = e,
            t = e;
          if (e.alternate) for (; n.return; ) n = n.return;
          else {
            e = n;
            do {
              0 !== (4098 & (n = e).flags) && (t = n.return), (e = n.return);
            } while (e);
          }
          return 3 === n.tag ? t : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var n = e.memoizedState;
            if (
              (null === n &&
                null !== (e = e.alternate) &&
                (n = e.memoizedState),
              null !== n)
            )
              return n.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (We(e) !== e) throw Error(l(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var n = e.alternate;
              if (!n) {
                if (null === (n = We(e))) throw Error(l(188));
                return n !== e ? null : e;
              }
              for (var t = e, a = n; ; ) {
                var r = t.return;
                if (null === r) break;
                var i = r.alternate;
                if (null === i) {
                  if (null !== (a = r.return)) {
                    t = a;
                    continue;
                  }
                  break;
                }
                if (r.child === i.child) {
                  for (i = r.child; i; ) {
                    if (i === t) return Ve(r), e;
                    if (i === a) return Ve(r), n;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (t.return !== a.return) (t = r), (a = i);
                else {
                  for (var s = !1, o = r.child; o; ) {
                    if (o === t) {
                      (s = !0), (t = r), (a = i);
                      break;
                    }
                    if (o === a) {
                      (s = !0), (a = r), (t = i);
                      break;
                    }
                    o = o.sibling;
                  }
                  if (!s) {
                    for (o = i.child; o; ) {
                      if (o === t) {
                        (s = !0), (t = i), (a = r);
                        break;
                      }
                      if (o === a) {
                        (s = !0), (a = i), (t = r);
                        break;
                      }
                      o = o.sibling;
                    }
                    if (!s) throw Error(l(189));
                  }
                }
                if (t.alternate !== a) throw Error(l(190));
              }
              if (3 !== t.tag) throw Error(l(188));
              return t.stateNode.current === t ? e : n;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var n = $e(e);
            if (null !== n) return n;
            e = e.sibling;
          }
          return null;
        }
        var Qe = r.unstable_scheduleCallback,
          Ye = r.unstable_cancelCallback,
          Ke = r.unstable_shouldYield,
          Ge = r.unstable_requestPaint,
          Je = r.unstable_now,
          Xe = r.unstable_getCurrentPriorityLevel,
          Ze = r.unstable_ImmediatePriority,
          en = r.unstable_UserBlockingPriority,
          nn = r.unstable_NormalPriority,
          tn = r.unstable_LowPriority,
          an = r.unstable_IdlePriority,
          rn = null,
          ln = null;
        var sn = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((on(e) / cn) | 0)) | 0;
              },
          on = Math.log,
          cn = Math.LN2;
        var un = 64,
          dn = 4194304;
        function fn(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pn(e, n) {
          var t = e.pendingLanes;
          if (0 === t) return 0;
          var a = 0,
            r = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & t;
          if (0 !== i) {
            var s = i & ~r;
            0 !== s ? (a = fn(s)) : 0 !== (l &= i) && (a = fn(l));
          } else 0 !== (i = t & ~r) ? (a = fn(i)) : 0 !== l && (a = fn(l));
          if (0 === a) return 0;
          if (
            0 !== n &&
            n !== a &&
            0 === (n & r) &&
            ((r = a & -a) >= (l = n & -n) || (16 === r && 0 !== (4194240 & l)))
          )
            return n;
          if ((0 !== (4 & a) && (a |= 16 & t), 0 !== (n = e.entangledLanes)))
            for (e = e.entanglements, n &= a; 0 < n; )
              (r = 1 << (t = 31 - sn(n))), (a |= e[t]), (n &= ~r);
          return a;
        }
        function mn(e, n) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return n + 5e3;
            default:
              return -1;
          }
        }
        function hn(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gn() {
          var e = un;
          return 0 === (4194240 & (un <<= 1)) && (un = 64), e;
        }
        function vn(e) {
          for (var n = [], t = 0; 31 > t; t++) n.push(e);
          return n;
        }
        function bn(e, n, t) {
          (e.pendingLanes |= n),
            536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(n = 31 - sn(n))] = t);
        }
        function yn(e, n) {
          var t = (e.entangledLanes |= n);
          for (e = e.entanglements; t; ) {
            var a = 31 - sn(t),
              r = 1 << a;
            (r & n) | (e[a] & n) && (e[a] |= n), (t &= ~r);
          }
        }
        var xn = 0;
        function _n(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kn,
          Nn,
          wn,
          jn,
          Sn,
          En = !1,
          Cn = [],
          Pn = null,
          Ln = null,
          Tn = null,
          zn = new Map(),
          An = new Map(),
          In = [],
          On =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Dn(e, n) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Pn = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Ln = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Tn = null;
              break;
            case 'pointerover':
            case 'pointerout':
              zn.delete(n.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              An.delete(n.pointerId);
          }
        }
        function Mn(e, n, t, a, r, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: n,
                domEventName: t,
                eventSystemFlags: a,
                nativeEvent: l,
                targetContainers: [r],
              }),
              null !== n && null !== (n = yr(n)) && Nn(n),
              e)
            : ((e.eventSystemFlags |= a),
              (n = e.targetContainers),
              null !== r && -1 === n.indexOf(r) && n.push(r),
              e);
        }
        function Rn(e) {
          var n = br(e.target);
          if (null !== n) {
            var t = We(n);
            if (null !== t)
              if (13 === (n = t.tag)) {
                if (null !== (n = Be(t)))
                  return (
                    (e.blockedOn = n),
                    void Sn(e.priority, function () {
                      wn(t);
                    })
                  );
              } else if (
                3 === n &&
                t.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === t.tag ? t.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Un(e) {
          if (null !== e.blockedOn) return !1;
          for (var n = e.targetContainers; 0 < n.length; ) {
            var t = Gn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (null !== t)
              return null !== (n = yr(t)) && Nn(n), (e.blockedOn = t), !1;
            var a = new (t = e.nativeEvent).constructor(t.type, t);
            (xe = a), t.target.dispatchEvent(a), (xe = null), n.shift();
          }
          return !0;
        }
        function Fn(e, n, t) {
          Un(e) && t.delete(n);
        }
        function qn() {
          (En = !1),
            null !== Pn && Un(Pn) && (Pn = null),
            null !== Ln && Un(Ln) && (Ln = null),
            null !== Tn && Un(Tn) && (Tn = null),
            zn.forEach(Fn),
            An.forEach(Fn);
        }
        function Wn(e, n) {
          e.blockedOn === n &&
            ((e.blockedOn = null),
            En ||
              ((En = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, qn)));
        }
        function Bn(e) {
          function n(n) {
            return Wn(n, e);
          }
          if (0 < Cn.length) {
            Wn(Cn[0], e);
            for (var t = 1; t < Cn.length; t++) {
              var a = Cn[t];
              a.blockedOn === e && (a.blockedOn = null);
            }
          }
          for (
            null !== Pn && Wn(Pn, e),
              null !== Ln && Wn(Ln, e),
              null !== Tn && Wn(Tn, e),
              zn.forEach(n),
              An.forEach(n),
              t = 0;
            t < In.length;
            t++
          )
            (a = In[t]).blockedOn === e && (a.blockedOn = null);
          for (; 0 < In.length && null === (t = In[0]).blockedOn; )
            Rn(t), null === t.blockedOn && In.shift();
        }
        var Vn = x.ReactCurrentBatchConfig,
          Hn = !0;
        function $n(e, n, t, a) {
          var r = xn,
            l = Vn.transition;
          Vn.transition = null;
          try {
            (xn = 1), Yn(e, n, t, a);
          } finally {
            (xn = r), (Vn.transition = l);
          }
        }
        function Qn(e, n, t, a) {
          var r = xn,
            l = Vn.transition;
          Vn.transition = null;
          try {
            (xn = 4), Yn(e, n, t, a);
          } finally {
            (xn = r), (Vn.transition = l);
          }
        }
        function Yn(e, n, t, a) {
          if (Hn) {
            var r = Gn(e, n, t, a);
            if (null === r) Va(e, n, a, Kn, t), Dn(e, a);
            else if (
              (function (e, n, t, a, r) {
                switch (n) {
                  case 'focusin':
                    return (Pn = Mn(Pn, e, n, t, a, r)), !0;
                  case 'dragenter':
                    return (Ln = Mn(Ln, e, n, t, a, r)), !0;
                  case 'mouseover':
                    return (Tn = Mn(Tn, e, n, t, a, r)), !0;
                  case 'pointerover':
                    var l = r.pointerId;
                    return zn.set(l, Mn(zn.get(l) || null, e, n, t, a, r)), !0;
                  case 'gotpointercapture':
                    return (
                      (l = r.pointerId),
                      An.set(l, Mn(An.get(l) || null, e, n, t, a, r)),
                      !0
                    );
                }
                return !1;
              })(r, e, n, t, a)
            )
              a.stopPropagation();
            else if ((Dn(e, a), 4 & n && -1 < On.indexOf(e))) {
              for (; null !== r; ) {
                var l = yr(r);
                if (
                  (null !== l && kn(l),
                  null === (l = Gn(e, n, t, a)) && Va(e, n, a, Kn, t),
                  l === r)
                )
                  break;
                r = l;
              }
              null !== r && a.stopPropagation();
            } else Va(e, n, a, null, t);
          }
        }
        var Kn = null;
        function Gn(e, n, t, a) {
          if (((Kn = null), null !== (e = br((e = _e(a))))))
            if (null === (n = We(e))) e = null;
            else if (13 === (t = n.tag)) {
              if (null !== (e = Be(n))) return e;
              e = null;
            } else if (3 === t) {
              if (n.stateNode.current.memoizedState.isDehydrated)
                return 3 === n.tag ? n.stateNode.containerInfo : null;
              e = null;
            } else n !== e && (e = null);
          return (Kn = e), null;
        }
        function Jn(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Xe()) {
                case Ze:
                  return 1;
                case en:
                  return 4;
                case nn:
                case tn:
                  return 16;
                case an:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xn = null,
          Zn = null,
          et = null;
        function nt() {
          if (et) return et;
          var e,
            n,
            t = Zn,
            a = t.length,
            r = 'value' in Xn ? Xn.value : Xn.textContent,
            l = r.length;
          for (e = 0; e < a && t[e] === r[e]; e++);
          var i = a - e;
          for (n = 1; n <= i && t[a - n] === r[l - n]; n++);
          return (et = r.slice(e, 1 < n ? 1 - n : void 0));
        }
        function tt(e) {
          var n = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === n && (e = 13)
              : (e = n),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function at() {
          return !0;
        }
        function rt() {
          return !1;
        }
        function lt(e) {
          function n(n, t, a, r, l) {
            for (var i in ((this._reactName = n),
            (this._targetInst = a),
            (this.type = t),
            (this.nativeEvent = r),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(r) : r[i]));
            return (
              (this.isDefaultPrevented = (
                null != r.defaultPrevented
                  ? r.defaultPrevented
                  : !1 === r.returnValue
              )
                ? at
                : rt),
              (this.isPropagationStopped = rt),
              this
            );
          }
          return (
            M(n.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = at));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = at));
              },
              persist: function () {},
              isPersistent: at,
            }),
            n
          );
        }
        var it,
          st,
          ot,
          ct = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ut = lt(ct),
          dt = M({}, ct, { view: 0, detail: 0 }),
          ft = lt(dt),
          pt = M({}, dt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: jt,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== ot &&
                    (ot && 'mousemove' === e.type
                      ? ((it = e.screenX - ot.screenX),
                        (st = e.screenY - ot.screenY))
                      : (st = it = 0),
                    (ot = e)),
                  it);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : st;
            },
          }),
          mt = lt(pt),
          ht = lt(M({}, pt, { dataTransfer: 0 })),
          gt = lt(M({}, dt, { relatedTarget: 0 })),
          vt = lt(
            M({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bt = M({}, ct, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yt = lt(bt),
          xt = lt(M({}, ct, { data: 0 })),
          _t = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          kt = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Nt = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function wt(e) {
          var n = this.nativeEvent;
          return n.getModifierState
            ? n.getModifierState(e)
            : !!(e = Nt[e]) && !!n[e];
        }
        function jt() {
          return wt;
        }
        var St = M({}, dt, {
            key: function (e) {
              if (e.key) {
                var n = _t[e.key] || e.key;
                if ('Unidentified' !== n) return n;
              }
              return 'keypress' === e.type
                ? 13 === (e = tt(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? kt[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: jt,
            charCode: function (e) {
              return 'keypress' === e.type ? tt(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tt(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Et = lt(St),
          Ct = lt(
            M({}, pt, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pt = lt(
            M({}, dt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: jt,
            })
          ),
          Lt = lt(
            M({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tt = M({}, pt, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          zt = lt(Tt),
          At = [9, 13, 27, 32],
          It = u && 'CompositionEvent' in window,
          Ot = null;
        u && 'documentMode' in document && (Ot = document.documentMode);
        var Dt = u && 'TextEvent' in window && !Ot,
          Mt = u && (!It || (Ot && 8 < Ot && 11 >= Ot)),
          Rt = String.fromCharCode(32),
          Ut = !1;
        function Ft(e, n) {
          switch (e) {
            case 'keyup':
              return -1 !== At.indexOf(n.keyCode);
            case 'keydown':
              return 229 !== n.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function qt(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var Wt = !1;
        var Bt = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vt(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === n ? !!Bt[e.type] : 'textarea' === n;
        }
        function Ht(e, n, t, a) {
          Se(a),
            0 < (n = $a(n, 'onChange')).length &&
              ((t = new ut('onChange', 'change', null, t, a)),
              e.push({ event: t, listeners: n }));
        }
        var $t = null,
          Qt = null;
        function Yt(e) {
          Ra(e, 0);
        }
        function Kt(e) {
          if (Q(xr(e))) return e;
        }
        function Gt(e, n) {
          if ('change' === e) return n;
        }
        var Jt = !1;
        if (u) {
          var Xt;
          if (u) {
            var Zt = 'oninput' in document;
            if (!Zt) {
              var ea = document.createElement('div');
              ea.setAttribute('oninput', 'return;'),
                (Zt = 'function' === typeof ea.oninput);
            }
            Xt = Zt;
          } else Xt = !1;
          Jt = Xt && (!document.documentMode || 9 < document.documentMode);
        }
        function na() {
          $t && ($t.detachEvent('onpropertychange', ta), (Qt = $t = null));
        }
        function ta(e) {
          if ('value' === e.propertyName && Kt(Qt)) {
            var n = [];
            Ht(n, Qt, e, _e(e)), Te(Yt, n);
          }
        }
        function aa(e, n, t) {
          'focusin' === e
            ? (na(), (Qt = t), ($t = n).attachEvent('onpropertychange', ta))
            : 'focusout' === e && na();
        }
        function ra(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Kt(Qt);
        }
        function la(e, n) {
          if ('click' === e) return Kt(n);
        }
        function ia(e, n) {
          if ('input' === e || 'change' === e) return Kt(n);
        }
        var sa =
          'function' === typeof Object.is
            ? Object.is
            : function (e, n) {
                return (
                  (e === n && (0 !== e || 1 / e === 1 / n)) ||
                  (e !== e && n !== n)
                );
              };
        function oa(e, n) {
          if (sa(e, n)) return !0;
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof n ||
            null === n
          )
            return !1;
          var t = Object.keys(e),
            a = Object.keys(n);
          if (t.length !== a.length) return !1;
          for (a = 0; a < t.length; a++) {
            var r = t[a];
            if (!d.call(n, r) || !sa(e[r], n[r])) return !1;
          }
          return !0;
        }
        function ca(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ua(e, n) {
          var t,
            a = ca(e);
          for (e = 0; a; ) {
            if (3 === a.nodeType) {
              if (((t = e + a.textContent.length), e <= n && t >= n))
                return { node: a, offset: n - e };
              e = t;
            }
            e: {
              for (; a; ) {
                if (a.nextSibling) {
                  a = a.nextSibling;
                  break e;
                }
                a = a.parentNode;
              }
              a = void 0;
            }
            a = ca(a);
          }
        }
        function da(e, n) {
          return (
            !(!e || !n) &&
            (e === n ||
              ((!e || 3 !== e.nodeType) &&
                (n && 3 === n.nodeType
                  ? da(e, n.parentNode)
                  : 'contains' in e
                  ? e.contains(n)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(n)))))
          );
        }
        function fa() {
          for (var e = window, n = Y(); n instanceof e.HTMLIFrameElement; ) {
            try {
              var t = 'string' === typeof n.contentWindow.location.href;
            } catch (a) {
              t = !1;
            }
            if (!t) break;
            n = Y((e = n.contentWindow).document);
          }
          return n;
        }
        function pa(e) {
          var n = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            n &&
            (('input' === n &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === n ||
              'true' === e.contentEditable)
          );
        }
        function ma(e) {
          var n = fa(),
            t = e.focusedElem,
            a = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            da(t.ownerDocument.documentElement, t)
          ) {
            if (null !== a && pa(t))
              if (
                ((n = a.start),
                void 0 === (e = a.end) && (e = n),
                'selectionStart' in t)
              )
                (t.selectionStart = n),
                  (t.selectionEnd = Math.min(e, t.value.length));
              else if (
                (e =
                  ((n = t.ownerDocument || document) && n.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var r = t.textContent.length,
                  l = Math.min(a.start, r);
                (a = void 0 === a.end ? l : Math.min(a.end, r)),
                  !e.extend && l > a && ((r = a), (a = l), (l = r)),
                  (r = ua(t, l));
                var i = ua(t, a);
                r &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== r.node ||
                    e.anchorOffset !== r.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((n = n.createRange()).setStart(r.node, r.offset),
                  e.removeAllRanges(),
                  l > a
                    ? (e.addRange(n), e.extend(i.node, i.offset))
                    : (n.setEnd(i.node, i.offset), e.addRange(n)));
              }
            for (n = [], e = t; (e = e.parentNode); )
              1 === e.nodeType &&
                n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              'function' === typeof t.focus && t.focus(), t = 0;
              t < n.length;
              t++
            )
              ((e = n[t]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var ha = u && 'documentMode' in document && 11 >= document.documentMode,
          ga = null,
          va = null,
          ba = null,
          ya = !1;
        function xa(e, n, t) {
          var a =
            t.window === t
              ? t.document
              : 9 === t.nodeType
              ? t
              : t.ownerDocument;
          ya ||
            null == ga ||
            ga !== Y(a) ||
            ('selectionStart' in (a = ga) && pa(a)
              ? (a = { start: a.selectionStart, end: a.selectionEnd })
              : (a = {
                  anchorNode: (a = (
                    (a.ownerDocument && a.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: a.anchorOffset,
                  focusNode: a.focusNode,
                  focusOffset: a.focusOffset,
                }),
            (ba && oa(ba, a)) ||
              ((ba = a),
              0 < (a = $a(va, 'onSelect')).length &&
                ((n = new ut('onSelect', 'select', null, n, t)),
                e.push({ event: n, listeners: a }),
                (n.target = ga))));
        }
        function _a(e, n) {
          var t = {};
          return (
            (t[e.toLowerCase()] = n.toLowerCase()),
            (t['Webkit' + e] = 'webkit' + n),
            (t['Moz' + e] = 'moz' + n),
            t
          );
        }
        var ka = {
            animationend: _a('Animation', 'AnimationEnd'),
            animationiteration: _a('Animation', 'AnimationIteration'),
            animationstart: _a('Animation', 'AnimationStart'),
            transitionend: _a('Transition', 'TransitionEnd'),
          },
          Na = {},
          wa = {};
        function ja(e) {
          if (Na[e]) return Na[e];
          if (!ka[e]) return e;
          var n,
            t = ka[e];
          for (n in t)
            if (t.hasOwnProperty(n) && n in wa) return (Na[e] = t[n]);
          return e;
        }
        u &&
          ((wa = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete ka.animationend.animation,
            delete ka.animationiteration.animation,
            delete ka.animationstart.animation),
          'TransitionEvent' in window || delete ka.transitionend.transition);
        var Sa = ja('animationend'),
          Ea = ja('animationiteration'),
          Ca = ja('animationstart'),
          Pa = ja('transitionend'),
          La = new Map(),
          Ta =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function za(e, n) {
          La.set(e, n), o(n, [e]);
        }
        for (var Aa = 0; Aa < Ta.length; Aa++) {
          var Ia = Ta[Aa];
          za(Ia.toLowerCase(), 'on' + (Ia[0].toUpperCase() + Ia.slice(1)));
        }
        za(Sa, 'onAnimationEnd'),
          za(Ea, 'onAnimationIteration'),
          za(Ca, 'onAnimationStart'),
          za('dblclick', 'onDoubleClick'),
          za('focusin', 'onFocus'),
          za('focusout', 'onBlur'),
          za(Pa, 'onTransitionEnd'),
          c('onMouseEnter', ['mouseout', 'mouseover']),
          c('onMouseLeave', ['mouseout', 'mouseover']),
          c('onPointerEnter', ['pointerout', 'pointerover']),
          c('onPointerLeave', ['pointerout', 'pointerover']),
          o(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          o(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          o('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          o(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          o(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          o(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Oa =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Da = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Oa)
          );
        function Ma(e, n, t) {
          var a = e.type || 'unknown-event';
          (e.currentTarget = t),
            (function (e, n, t, a, r, i, s, o, c) {
              if ((qe.apply(this, arguments), De)) {
                if (!De) throw Error(l(198));
                var u = Me;
                (De = !1), (Me = null), Re || ((Re = !0), (Ue = u));
              }
            })(a, n, void 0, e),
            (e.currentTarget = null);
        }
        function Ra(e, n) {
          n = 0 !== (4 & n);
          for (var t = 0; t < e.length; t++) {
            var a = e[t],
              r = a.event;
            a = a.listeners;
            e: {
              var l = void 0;
              if (n)
                for (var i = a.length - 1; 0 <= i; i--) {
                  var s = a[i],
                    o = s.instance,
                    c = s.currentTarget;
                  if (((s = s.listener), o !== l && r.isPropagationStopped()))
                    break e;
                  Ma(r, s, c), (l = o);
                }
              else
                for (i = 0; i < a.length; i++) {
                  if (
                    ((o = (s = a[i]).instance),
                    (c = s.currentTarget),
                    (s = s.listener),
                    o !== l && r.isPropagationStopped())
                  )
                    break e;
                  Ma(r, s, c), (l = o);
                }
            }
          }
          if (Re) throw ((e = Ue), (Re = !1), (Ue = null), e);
        }
        function Ua(e, n) {
          var t = n[hr];
          void 0 === t && (t = n[hr] = new Set());
          var a = e + '__bubble';
          t.has(a) || (Ba(n, e, 2, !1), t.add(a));
        }
        function Fa(e, n, t) {
          var a = 0;
          n && (a |= 4), Ba(t, e, a, n);
        }
        var qa = '_reactListening' + Math.random().toString(36).slice(2);
        function Wa(e) {
          if (!e[qa]) {
            (e[qa] = !0),
              i.forEach(function (n) {
                'selectionchange' !== n &&
                  (Da.has(n) || Fa(n, !1, e), Fa(n, !0, e));
              });
            var n = 9 === e.nodeType ? e : e.ownerDocument;
            null === n || n[qa] || ((n[qa] = !0), Fa('selectionchange', !1, n));
          }
        }
        function Ba(e, n, t, a) {
          switch (Jn(n)) {
            case 1:
              var r = $n;
              break;
            case 4:
              r = Qn;
              break;
            default:
              r = Yn;
          }
          (t = r.bind(null, n, t, e)),
            (r = void 0),
            !Ae ||
              ('touchstart' !== n && 'touchmove' !== n && 'wheel' !== n) ||
              (r = !0),
            a
              ? void 0 !== r
                ? e.addEventListener(n, t, { capture: !0, passive: r })
                : e.addEventListener(n, t, !0)
              : void 0 !== r
              ? e.addEventListener(n, t, { passive: r })
              : e.addEventListener(n, t, !1);
        }
        function Va(e, n, t, a, r) {
          var l = a;
          if (0 === (1 & n) && 0 === (2 & n) && null !== a)
            e: for (;;) {
              if (null === a) return;
              var i = a.tag;
              if (3 === i || 4 === i) {
                var s = a.stateNode.containerInfo;
                if (s === r || (8 === s.nodeType && s.parentNode === r)) break;
                if (4 === i)
                  for (i = a.return; null !== i; ) {
                    var o = i.tag;
                    if (
                      (3 === o || 4 === o) &&
                      ((o = i.stateNode.containerInfo) === r ||
                        (8 === o.nodeType && o.parentNode === r))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = br(s))) return;
                  if (5 === (o = i.tag) || 6 === o) {
                    a = l = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              a = a.return;
            }
          Te(function () {
            var a = l,
              r = _e(t),
              i = [];
            e: {
              var s = La.get(e);
              if (void 0 !== s) {
                var o = ut,
                  c = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tt(t)) break e;
                  case 'keydown':
                  case 'keyup':
                    o = Et;
                    break;
                  case 'focusin':
                    (c = 'focus'), (o = gt);
                    break;
                  case 'focusout':
                    (c = 'blur'), (o = gt);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    o = gt;
                    break;
                  case 'click':
                    if (2 === t.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    o = mt;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    o = ht;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    o = Pt;
                    break;
                  case Sa:
                  case Ea:
                  case Ca:
                    o = vt;
                    break;
                  case Pa:
                    o = Lt;
                    break;
                  case 'scroll':
                    o = ft;
                    break;
                  case 'wheel':
                    o = zt;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    o = yt;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    o = Ct;
                }
                var u = 0 !== (4 & n),
                  d = !u && 'scroll' === e,
                  f = u ? (null !== s ? s + 'Capture' : null) : s;
                u = [];
                for (var p, m = a; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = ze(m, f)) &&
                        u.push(Ha(m, h, p))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length &&
                  ((s = new o(s, c, null, t, r)),
                  i.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & n)) {
              if (
                ((o = 'mouseout' === e || 'pointerout' === e),
                (!(s = 'mouseover' === e || 'pointerover' === e) ||
                  t === xe ||
                  !(c = t.relatedTarget || t.fromElement) ||
                  (!br(c) && !c[mr])) &&
                  (o || s) &&
                  ((s =
                    r.window === r
                      ? r
                      : (s = r.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  o
                    ? ((o = a),
                      null !==
                        (c = (c = t.relatedTarget || t.toElement)
                          ? br(c)
                          : null) &&
                        (c !== (d = We(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((o = null), (c = a)),
                  o !== c))
              ) {
                if (
                  ((u = mt),
                  (h = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (m = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((u = Ct),
                    (h = 'onPointerLeave'),
                    (f = 'onPointerEnter'),
                    (m = 'pointer')),
                  (d = null == o ? s : xr(o)),
                  (p = null == c ? s : xr(c)),
                  ((s = new u(h, m + 'leave', o, t, r)).target = d),
                  (s.relatedTarget = p),
                  (h = null),
                  br(r) === a &&
                    (((u = new u(f, m + 'enter', c, t, r)).target = p),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  o && c)
                )
                  e: {
                    for (f = c, m = 0, p = u = o; p; p = Qa(p)) m++;
                    for (p = 0, h = f; h; h = Qa(h)) p++;
                    for (; 0 < m - p; ) (u = Qa(u)), m--;
                    for (; 0 < p - m; ) (f = Qa(f)), p--;
                    for (; m--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Qa(u)), (f = Qa(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== o && Ya(i, s, o, u, !1),
                  null !== c && null !== d && Ya(i, d, c, u, !0);
              }
              if (
                'select' ===
                  (o =
                    (s = a ? xr(a) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ('input' === o && 'file' === s.type)
              )
                var g = Gt;
              else if (Vt(s))
                if (Jt) g = ia;
                else {
                  g = ra;
                  var v = aa;
                }
              else
                (o = s.nodeName) &&
                  'input' === o.toLowerCase() &&
                  ('checkbox' === s.type || 'radio' === s.type) &&
                  (g = la);
              switch (
                (g && (g = g(e, a))
                  ? Ht(i, g, t, r)
                  : (v && v(e, s, a),
                    'focusout' === e &&
                      (v = s._wrapperState) &&
                      v.controlled &&
                      'number' === s.type &&
                      ee(s, 'number', s.value)),
                (v = a ? xr(a) : window),
                e)
              ) {
                case 'focusin':
                  (Vt(v) || 'true' === v.contentEditable) &&
                    ((ga = v), (va = a), (ba = null));
                  break;
                case 'focusout':
                  ba = va = ga = null;
                  break;
                case 'mousedown':
                  ya = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (ya = !1), xa(i, t, r);
                  break;
                case 'selectionchange':
                  if (ha) break;
                case 'keydown':
                case 'keyup':
                  xa(i, t, r);
              }
              var b;
              if (It)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var y = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      y = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      y = 'onCompositionUpdate';
                      break e;
                  }
                  y = void 0;
                }
              else
                Wt
                  ? Ft(e, t) && (y = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === t.keyCode &&
                    (y = 'onCompositionStart');
              y &&
                (Mt &&
                  'ko' !== t.locale &&
                  (Wt || 'onCompositionStart' !== y
                    ? 'onCompositionEnd' === y && Wt && (b = nt())
                    : ((Zn = 'value' in (Xn = r) ? Xn.value : Xn.textContent),
                      (Wt = !0))),
                0 < (v = $a(a, y)).length &&
                  ((y = new xt(y, e, null, t, r)),
                  i.push({ event: y, listeners: v }),
                  b ? (y.data = b) : null !== (b = qt(t)) && (y.data = b))),
                (b = Dt
                  ? (function (e, n) {
                      switch (e) {
                        case 'compositionend':
                          return qt(n);
                        case 'keypress':
                          return 32 !== n.which ? null : ((Ut = !0), Rt);
                        case 'textInput':
                          return (e = n.data) === Rt && Ut ? null : e;
                        default:
                          return null;
                      }
                    })(e, t)
                  : (function (e, n) {
                      if (Wt)
                        return 'compositionend' === e || (!It && Ft(e, n))
                          ? ((e = nt()), (et = Zn = Xn = null), (Wt = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(n.ctrlKey || n.altKey || n.metaKey) ||
                            (n.ctrlKey && n.altKey)
                          ) {
                            if (n.char && 1 < n.char.length) return n.char;
                            if (n.which) return String.fromCharCode(n.which);
                          }
                          return null;
                        case 'compositionend':
                          return Mt && 'ko' !== n.locale ? null : n.data;
                      }
                    })(e, t)) &&
                  0 < (a = $a(a, 'onBeforeInput')).length &&
                  ((r = new xt('onBeforeInput', 'beforeinput', null, t, r)),
                  i.push({ event: r, listeners: a }),
                  (r.data = b));
            }
            Ra(i, n);
          });
        }
        function Ha(e, n, t) {
          return { instance: e, listener: n, currentTarget: t };
        }
        function $a(e, n) {
          for (var t = n + 'Capture', a = []; null !== e; ) {
            var r = e,
              l = r.stateNode;
            5 === r.tag &&
              null !== l &&
              ((r = l),
              null != (l = ze(e, t)) && a.unshift(Ha(e, l, r)),
              null != (l = ze(e, n)) && a.push(Ha(e, l, r))),
              (e = e.return);
          }
          return a;
        }
        function Qa(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Ya(e, n, t, a, r) {
          for (var l = n._reactName, i = []; null !== t && t !== a; ) {
            var s = t,
              o = s.alternate,
              c = s.stateNode;
            if (null !== o && o === a) break;
            5 === s.tag &&
              null !== c &&
              ((s = c),
              r
                ? null != (o = ze(t, l)) && i.unshift(Ha(t, o, s))
                : r || (null != (o = ze(t, l)) && i.push(Ha(t, o, s)))),
              (t = t.return);
          }
          0 !== i.length && e.push({ event: n, listeners: i });
        }
        var Ka = /\r\n?/g,
          Ga = /\u0000|\uFFFD/g;
        function Ja(e) {
          return ('string' === typeof e ? e : '' + e)
            .replace(Ka, '\n')
            .replace(Ga, '');
        }
        function Xa(e, n, t) {
          if (((n = Ja(n)), Ja(e) !== n && t)) throw Error(l(425));
        }
        function Za() {}
        var er = null,
          nr = null;
        function tr(e, n) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof n.children ||
            'number' === typeof n.children ||
            ('object' === typeof n.dangerouslySetInnerHTML &&
              null !== n.dangerouslySetInnerHTML &&
              null != n.dangerouslySetInnerHTML.__html)
          );
        }
        var ar = 'function' === typeof setTimeout ? setTimeout : void 0,
          rr = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          lr = 'function' === typeof Promise ? Promise : void 0,
          ir =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof lr
              ? function (e) {
                  return lr.resolve(null).then(e).catch(sr);
                }
              : ar;
        function sr(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function or(e, n) {
          var t = n,
            a = 0;
          do {
            var r = t.nextSibling;
            if ((e.removeChild(t), r && 8 === r.nodeType))
              if ('/$' === (t = r.data)) {
                if (0 === a) return e.removeChild(r), void Bn(n);
                a--;
              } else ('$' !== t && '$?' !== t && '$!' !== t) || a++;
            t = r;
          } while (t);
          Bn(n);
        }
        function cr(e) {
          for (; null != e; e = e.nextSibling) {
            var n = e.nodeType;
            if (1 === n || 3 === n) break;
            if (8 === n) {
              if ('$' === (n = e.data) || '$!' === n || '$?' === n) break;
              if ('/$' === n) return null;
            }
          }
          return e;
        }
        function ur(e) {
          e = e.previousSibling;
          for (var n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ('$' === t || '$!' === t || '$?' === t) {
                if (0 === n) return e;
                n--;
              } else '/$' === t && n++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var dr = Math.random().toString(36).slice(2),
          fr = '__reactFiber$' + dr,
          pr = '__reactProps$' + dr,
          mr = '__reactContainer$' + dr,
          hr = '__reactEvents$' + dr,
          gr = '__reactListeners$' + dr,
          vr = '__reactHandles$' + dr;
        function br(e) {
          var n = e[fr];
          if (n) return n;
          for (var t = e.parentNode; t; ) {
            if ((n = t[mr] || t[fr])) {
              if (
                ((t = n.alternate),
                null !== n.child || (null !== t && null !== t.child))
              )
                for (e = ur(e); null !== e; ) {
                  if ((t = e[fr])) return t;
                  e = ur(e);
                }
              return n;
            }
            t = (e = t).parentNode;
          }
          return null;
        }
        function yr(e) {
          return !(e = e[fr] || e[mr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xr(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function _r(e) {
          return e[pr] || null;
        }
        var kr = [],
          Nr = -1;
        function wr(e) {
          return { current: e };
        }
        function jr(e) {
          0 > Nr || ((e.current = kr[Nr]), (kr[Nr] = null), Nr--);
        }
        function Sr(e, n) {
          Nr++, (kr[Nr] = e.current), (e.current = n);
        }
        var Er = {},
          Cr = wr(Er),
          Pr = wr(!1),
          Lr = Er;
        function Tr(e, n) {
          var t = e.type.contextTypes;
          if (!t) return Er;
          var a = e.stateNode;
          if (a && a.__reactInternalMemoizedUnmaskedChildContext === n)
            return a.__reactInternalMemoizedMaskedChildContext;
          var r,
            l = {};
          for (r in t) l[r] = n[r];
          return (
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                n),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function zr(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ar() {
          jr(Pr), jr(Cr);
        }
        function Ir(e, n, t) {
          if (Cr.current !== Er) throw Error(l(168));
          Sr(Cr, n), Sr(Pr, t);
        }
        function Or(e, n, t) {
          var a = e.stateNode;
          if (
            ((n = n.childContextTypes), 'function' !== typeof a.getChildContext)
          )
            return t;
          for (var r in (a = a.getChildContext()))
            if (!(r in n)) throw Error(l(108, B(e) || 'Unknown', r));
          return M({}, t, a);
        }
        function Dr(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Er),
            (Lr = Cr.current),
            Sr(Cr, e),
            Sr(Pr, Pr.current),
            !0
          );
        }
        function Mr(e, n, t) {
          var a = e.stateNode;
          if (!a) throw Error(l(169));
          t
            ? ((e = Or(e, n, Lr)),
              (a.__reactInternalMemoizedMergedChildContext = e),
              jr(Pr),
              jr(Cr),
              Sr(Cr, e))
            : jr(Pr),
            Sr(Pr, t);
        }
        var Rr = null,
          Ur = !1,
          Fr = !1;
        function qr(e) {
          null === Rr ? (Rr = [e]) : Rr.push(e);
        }
        function Wr() {
          if (!Fr && null !== Rr) {
            Fr = !0;
            var e = 0,
              n = xn;
            try {
              var t = Rr;
              for (xn = 1; e < t.length; e++) {
                var a = t[e];
                do {
                  a = a(!0);
                } while (null !== a);
              }
              (Rr = null), (Ur = !1);
            } catch (r) {
              throw (null !== Rr && (Rr = Rr.slice(e + 1)), Qe(Ze, Wr), r);
            } finally {
              (xn = n), (Fr = !1);
            }
          }
          return null;
        }
        var Br = [],
          Vr = 0,
          Hr = null,
          $r = 0,
          Qr = [],
          Yr = 0,
          Kr = null,
          Gr = 1,
          Jr = '';
        function Xr(e, n) {
          (Br[Vr++] = $r), (Br[Vr++] = Hr), (Hr = e), ($r = n);
        }
        function Zr(e, n, t) {
          (Qr[Yr++] = Gr), (Qr[Yr++] = Jr), (Qr[Yr++] = Kr), (Kr = e);
          var a = Gr;
          e = Jr;
          var r = 32 - sn(a) - 1;
          (a &= ~(1 << r)), (t += 1);
          var l = 32 - sn(n) + r;
          if (30 < l) {
            var i = r - (r % 5);
            (l = (a & ((1 << i) - 1)).toString(32)),
              (a >>= i),
              (r -= i),
              (Gr = (1 << (32 - sn(n) + r)) | (t << r) | a),
              (Jr = l + e);
          } else (Gr = (1 << l) | (t << r) | a), (Jr = e);
        }
        function el(e) {
          null !== e.return && (Xr(e, 1), Zr(e, 1, 0));
        }
        function nl(e) {
          for (; e === Hr; )
            (Hr = Br[--Vr]), (Br[Vr] = null), ($r = Br[--Vr]), (Br[Vr] = null);
          for (; e === Kr; )
            (Kr = Qr[--Yr]),
              (Qr[Yr] = null),
              (Jr = Qr[--Yr]),
              (Qr[Yr] = null),
              (Gr = Qr[--Yr]),
              (Qr[Yr] = null);
        }
        var tl = null,
          al = null,
          rl = !1,
          ll = null;
        function il(e, n) {
          var t = Tc(5, null, null, 0);
          (t.elementType = 'DELETED'),
            (t.stateNode = n),
            (t.return = e),
            null === (n = e.deletions)
              ? ((e.deletions = [t]), (e.flags |= 16))
              : n.push(t);
        }
        function sl(e, n) {
          switch (e.tag) {
            case 5:
              var t = e.type;
              return (
                null !==
                  (n =
                    1 !== n.nodeType ||
                    t.toLowerCase() !== n.nodeName.toLowerCase()
                      ? null
                      : n) &&
                ((e.stateNode = n), (tl = e), (al = cr(n.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (n = '' === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                ((e.stateNode = n), (tl = e), (al = null), !0)
              );
            case 13:
              return (
                null !== (n = 8 !== n.nodeType ? null : n) &&
                ((t = null !== Kr ? { id: Gr, overflow: Jr } : null),
                (e.memoizedState = {
                  dehydrated: n,
                  treeContext: t,
                  retryLane: 1073741824,
                }),
                ((t = Tc(18, null, null, 0)).stateNode = n),
                (t.return = e),
                (e.child = t),
                (tl = e),
                (al = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ol(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function cl(e) {
          if (rl) {
            var n = al;
            if (n) {
              var t = n;
              if (!sl(e, n)) {
                if (ol(e)) throw Error(l(418));
                n = cr(t.nextSibling);
                var a = tl;
                n && sl(e, n)
                  ? il(a, t)
                  : ((e.flags = (-4097 & e.flags) | 2), (rl = !1), (tl = e));
              }
            } else {
              if (ol(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (rl = !1), (tl = e);
            }
          }
        }
        function ul(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          tl = e;
        }
        function dl(e) {
          if (e !== tl) return !1;
          if (!rl) return ul(e), (rl = !0), !1;
          var n;
          if (
            ((n = 3 !== e.tag) &&
              !(n = 5 !== e.tag) &&
              (n =
                'head' !== (n = e.type) &&
                'body' !== n &&
                !tr(e.type, e.memoizedProps)),
            n && (n = al))
          ) {
            if (ol(e)) throw (fl(), Error(l(418)));
            for (; n; ) il(e, n), (n = cr(n.nextSibling));
          }
          if ((ul(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType) {
                  var t = e.data;
                  if ('/$' === t) {
                    if (0 === n) {
                      al = cr(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ('$' !== t && '$!' !== t && '$?' !== t) || n++;
                }
                e = e.nextSibling;
              }
              al = null;
            }
          } else al = tl ? cr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = al; e; ) e = cr(e.nextSibling);
        }
        function pl() {
          (al = tl = null), (rl = !1);
        }
        function ml(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var hl = x.ReactCurrentBatchConfig;
        function gl(e, n) {
          if (e && e.defaultProps) {
            for (var t in ((n = M({}, n)), (e = e.defaultProps)))
              void 0 === n[t] && (n[t] = e[t]);
            return n;
          }
          return n;
        }
        var vl = wr(null),
          bl = null,
          yl = null,
          xl = null;
        function _l() {
          xl = yl = bl = null;
        }
        function kl(e) {
          var n = vl.current;
          jr(vl), (e._currentValue = n);
        }
        function Nl(e, n, t) {
          for (; null !== e; ) {
            var a = e.alternate;
            if (
              ((e.childLanes & n) !== n
                ? ((e.childLanes |= n), null !== a && (a.childLanes |= n))
                : null !== a && (a.childLanes & n) !== n && (a.childLanes |= n),
              e === t)
            )
              break;
            e = e.return;
          }
        }
        function wl(e, n) {
          (bl = e),
            (xl = yl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & n) && (ys = !0), (e.firstContext = null));
        }
        function jl(e) {
          var n = e._currentValue;
          if (xl !== e)
            if (
              ((e = { context: e, memoizedValue: n, next: null }), null === yl)
            ) {
              if (null === bl) throw Error(l(308));
              (yl = e), (bl.dependencies = { lanes: 0, firstContext: e });
            } else yl = yl.next = e;
          return n;
        }
        var Sl = null;
        function El(e) {
          null === Sl ? (Sl = [e]) : Sl.push(e);
        }
        function Cl(e, n, t, a) {
          var r = n.interleaved;
          return (
            null === r
              ? ((t.next = t), El(n))
              : ((t.next = r.next), (r.next = t)),
            (n.interleaved = t),
            Pl(e, a)
          );
        }
        function Pl(e, n) {
          e.lanes |= n;
          var t = e.alternate;
          for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
            (e.childLanes |= n),
              null !== (t = e.alternate) && (t.childLanes |= n),
              (t = e),
              (e = e.return);
          return 3 === t.tag ? t.stateNode : null;
        }
        var Ll = !1;
        function Tl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function zl(e, n) {
          (e = e.updateQueue),
            n.updateQueue === e &&
              (n.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Al(e, n) {
          return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Il(e, n, t) {
          var a = e.updateQueue;
          if (null === a) return null;
          if (((a = a.shared), 0 !== (2 & Co))) {
            var r = a.pending;
            return (
              null === r ? (n.next = n) : ((n.next = r.next), (r.next = n)),
              (a.pending = n),
              Pl(e, t)
            );
          }
          return (
            null === (r = a.interleaved)
              ? ((n.next = n), El(a))
              : ((n.next = r.next), (r.next = n)),
            (a.interleaved = n),
            Pl(e, t)
          );
        }
        function Ol(e, n, t) {
          if (
            null !== (n = n.updateQueue) &&
            ((n = n.shared), 0 !== (4194240 & t))
          ) {
            var a = n.lanes;
            (t |= a &= e.pendingLanes), (n.lanes = t), yn(e, t);
          }
        }
        function Dl(e, n) {
          var t = e.updateQueue,
            a = e.alternate;
          if (null !== a && t === (a = a.updateQueue)) {
            var r = null,
              l = null;
            if (null !== (t = t.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: t.eventTime,
                  lane: t.lane,
                  tag: t.tag,
                  payload: t.payload,
                  callback: t.callback,
                  next: null,
                };
                null === l ? (r = l = i) : (l = l.next = i), (t = t.next);
              } while (null !== t);
              null === l ? (r = l = n) : (l = l.next = n);
            } else r = l = n;
            return (
              (t = {
                baseState: a.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: l,
                shared: a.shared,
                effects: a.effects,
              }),
              void (e.updateQueue = t)
            );
          }
          null === (e = t.lastBaseUpdate)
            ? (t.firstBaseUpdate = n)
            : (e.next = n),
            (t.lastBaseUpdate = n);
        }
        function Ml(e, n, t, a) {
          var r = e.updateQueue;
          Ll = !1;
          var l = r.firstBaseUpdate,
            i = r.lastBaseUpdate,
            s = r.shared.pending;
          if (null !== s) {
            r.shared.pending = null;
            var o = s,
              c = o.next;
            (o.next = null), null === i ? (l = c) : (i.next = c), (i = o);
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
              (u.lastBaseUpdate = o));
          }
          if (null !== l) {
            var d = r.baseState;
            for (i = 0, u = c = o = null, s = l; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((a & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = s;
                  switch (((f = n), (p = t), h.tag)) {
                    case 1:
                      if ('function' === typeof (m = h.payload)) {
                        d = m.call(p, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            'function' === typeof (m = h.payload)
                              ? m.call(p, d, f)
                              : m) ||
                        void 0 === f
                      )
                        break e;
                      d = M({}, d, f);
                      break e;
                    case 2:
                      Ll = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = r.effects) ? (r.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (o = d)) : (u = u.next = p),
                  (i |= f);
              if (null === (s = s.next)) {
                if (null === (s = r.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (r.lastBaseUpdate = f),
                  (r.shared.pending = null);
              }
            }
            if (
              (null === u && (o = d),
              (r.baseState = o),
              (r.firstBaseUpdate = c),
              (r.lastBaseUpdate = u),
              null !== (n = r.shared.interleaved))
            ) {
              r = n;
              do {
                (i |= r.lane), (r = r.next);
              } while (r !== n);
            } else null === l && (r.shared.lanes = 0);
            (Do |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Rl(e, n, t) {
          if (((e = n.effects), (n.effects = null), null !== e))
            for (n = 0; n < e.length; n++) {
              var a = e[n],
                r = a.callback;
              if (null !== r) {
                if (((a.callback = null), (a = t), 'function' !== typeof r))
                  throw Error(l(191, r));
                r.call(a);
              }
            }
        }
        var Ul = new a.Component().refs;
        function Fl(e, n, t, a) {
          (t =
            null === (t = t(a, (n = e.memoizedState))) || void 0 === t
              ? n
              : M({}, n, t)),
            (e.memoizedState = t),
            0 === e.lanes && (e.updateQueue.baseState = t);
        }
        var ql = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, n, t) {
            e = e._reactInternals;
            var a = ec(),
              r = nc(e),
              l = Al(a, r);
            (l.payload = n),
              void 0 !== t && null !== t && (l.callback = t),
              null !== (n = Il(e, l, r)) && (tc(n, e, r, a), Ol(n, e, r));
          },
          enqueueReplaceState: function (e, n, t) {
            e = e._reactInternals;
            var a = ec(),
              r = nc(e),
              l = Al(a, r);
            (l.tag = 1),
              (l.payload = n),
              void 0 !== t && null !== t && (l.callback = t),
              null !== (n = Il(e, l, r)) && (tc(n, e, r, a), Ol(n, e, r));
          },
          enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var t = ec(),
              a = nc(e),
              r = Al(t, a);
            (r.tag = 2),
              void 0 !== n && null !== n && (r.callback = n),
              null !== (n = Il(e, r, a)) && (tc(n, e, a, t), Ol(n, e, a));
          },
        };
        function Wl(e, n, t, a, r, l, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(a, l, i)
            : !n.prototype ||
                !n.prototype.isPureReactComponent ||
                !oa(t, a) ||
                !oa(r, l);
        }
        function Bl(e, n, t) {
          var a = !1,
            r = Er,
            l = n.contextType;
          return (
            'object' === typeof l && null !== l
              ? (l = jl(l))
              : ((r = zr(n) ? Lr : Cr.current),
                (l = (a = null !== (a = n.contextTypes) && void 0 !== a)
                  ? Tr(e, r)
                  : Er)),
            (n = new n(t, l)),
            (e.memoizedState =
              null !== n.state && void 0 !== n.state ? n.state : null),
            (n.updater = ql),
            (e.stateNode = n),
            (n._reactInternals = e),
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                r),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            n
          );
        }
        function Vl(e, n, t, a) {
          (e = n.state),
            'function' === typeof n.componentWillReceiveProps &&
              n.componentWillReceiveProps(t, a),
            'function' === typeof n.UNSAFE_componentWillReceiveProps &&
              n.UNSAFE_componentWillReceiveProps(t, a),
            n.state !== e && ql.enqueueReplaceState(n, n.state, null);
        }
        function Hl(e, n, t, a) {
          var r = e.stateNode;
          (r.props = t), (r.state = e.memoizedState), (r.refs = Ul), Tl(e);
          var l = n.contextType;
          'object' === typeof l && null !== l
            ? (r.context = jl(l))
            : ((l = zr(n) ? Lr : Cr.current), (r.context = Tr(e, l))),
            (r.state = e.memoizedState),
            'function' === typeof (l = n.getDerivedStateFromProps) &&
              (Fl(e, n, l, t), (r.state = e.memoizedState)),
            'function' === typeof n.getDerivedStateFromProps ||
              'function' === typeof r.getSnapshotBeforeUpdate ||
              ('function' !== typeof r.UNSAFE_componentWillMount &&
                'function' !== typeof r.componentWillMount) ||
              ((n = r.state),
              'function' === typeof r.componentWillMount &&
                r.componentWillMount(),
              'function' === typeof r.UNSAFE_componentWillMount &&
                r.UNSAFE_componentWillMount(),
              n !== r.state && ql.enqueueReplaceState(r, r.state, null),
              Ml(e, t, r, a),
              (r.state = e.memoizedState)),
            'function' === typeof r.componentDidMount && (e.flags |= 4194308);
        }
        function $l(e, n, t) {
          if (
            null !== (e = t.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (t._owner) {
              if ((t = t._owner)) {
                if (1 !== t.tag) throw Error(l(309));
                var a = t.stateNode;
              }
              if (!a) throw Error(l(147, e));
              var r = a,
                i = '' + e;
              return null !== n &&
                null !== n.ref &&
                'function' === typeof n.ref &&
                n.ref._stringRef === i
                ? n.ref
                : ((n = function (e) {
                    var n = r.refs;
                    n === Ul && (n = r.refs = {}),
                      null === e ? delete n[i] : (n[i] = e);
                  }),
                  (n._stringRef = i),
                  n);
            }
            if ('string' !== typeof e) throw Error(l(284));
            if (!t._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Ql(e, n) {
          throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
              l(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(n).join(', ') + '}'
                  : e
              )
            ))
          );
        }
        function Yl(e) {
          return (0, e._init)(e._payload);
        }
        function Kl(e) {
          function n(n, t) {
            if (e) {
              var a = n.deletions;
              null === a ? ((n.deletions = [t]), (n.flags |= 16)) : a.push(t);
            }
          }
          function t(t, a) {
            if (!e) return null;
            for (; null !== a; ) n(t, a), (a = a.sibling);
            return null;
          }
          function a(e, n) {
            for (e = new Map(); null !== n; )
              null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                (n = n.sibling);
            return e;
          }
          function r(e, n) {
            return ((e = Ac(e, n)).index = 0), (e.sibling = null), e;
          }
          function i(n, t, a) {
            return (
              (n.index = a),
              e
                ? null !== (a = n.alternate)
                  ? (a = a.index) < t
                    ? ((n.flags |= 2), t)
                    : a
                  : ((n.flags |= 2), t)
                : ((n.flags |= 1048576), t)
            );
          }
          function s(n) {
            return e && null === n.alternate && (n.flags |= 2), n;
          }
          function o(e, n, t, a) {
            return null === n || 6 !== n.tag
              ? (((n = Mc(t, e.mode, a)).return = e), n)
              : (((n = r(n, t)).return = e), n);
          }
          function c(e, n, t, a) {
            var l = t.type;
            return l === N
              ? d(e, n, t.props.children, a, t.key)
              : null !== n &&
                (n.elementType === l ||
                  ('object' === typeof l &&
                    null !== l &&
                    l.$$typeof === z &&
                    Yl(l) === n.type))
              ? (((a = r(n, t.props)).ref = $l(e, n, t)), (a.return = e), a)
              : (((a = Ic(t.type, t.key, t.props, null, e.mode, a)).ref = $l(
                  e,
                  n,
                  t
                )),
                (a.return = e),
                a);
          }
          function u(e, n, t, a) {
            return null === n ||
              4 !== n.tag ||
              n.stateNode.containerInfo !== t.containerInfo ||
              n.stateNode.implementation !== t.implementation
              ? (((n = Rc(t, e.mode, a)).return = e), n)
              : (((n = r(n, t.children || [])).return = e), n);
          }
          function d(e, n, t, a, l) {
            return null === n || 7 !== n.tag
              ? (((n = Oc(t, e.mode, a, l)).return = e), n)
              : (((n = r(n, t)).return = e), n);
          }
          function f(e, n, t) {
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return ((n = Mc('' + n, e.mode, t)).return = e), n;
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return (
                    ((t = Ic(n.type, n.key, n.props, null, e.mode, t)).ref = $l(
                      e,
                      null,
                      n
                    )),
                    (t.return = e),
                    t
                  );
                case k:
                  return ((n = Rc(n, e.mode, t)).return = e), n;
                case z:
                  return f(e, (0, n._init)(n._payload), t);
              }
              if (ne(n) || O(n))
                return ((n = Oc(n, e.mode, t, null)).return = e), n;
              Ql(e, n);
            }
            return null;
          }
          function p(e, n, t, a) {
            var r = null !== n ? n.key : null;
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return null !== r ? null : o(e, n, '' + t, a);
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case _:
                  return t.key === r ? c(e, n, t, a) : null;
                case k:
                  return t.key === r ? u(e, n, t, a) : null;
                case z:
                  return p(e, n, (r = t._init)(t._payload), a);
              }
              if (ne(t) || O(t)) return null !== r ? null : d(e, n, t, a, null);
              Ql(e, t);
            }
            return null;
          }
          function m(e, n, t, a, r) {
            if (('string' === typeof a && '' !== a) || 'number' === typeof a)
              return o(n, (e = e.get(t) || null), '' + a, r);
            if ('object' === typeof a && null !== a) {
              switch (a.$$typeof) {
                case _:
                  return c(
                    n,
                    (e = e.get(null === a.key ? t : a.key) || null),
                    a,
                    r
                  );
                case k:
                  return u(
                    n,
                    (e = e.get(null === a.key ? t : a.key) || null),
                    a,
                    r
                  );
                case z:
                  return m(e, n, t, (0, a._init)(a._payload), r);
              }
              if (ne(a) || O(a))
                return d(n, (e = e.get(t) || null), a, r, null);
              Ql(n, a);
            }
            return null;
          }
          function h(r, l, s, o) {
            for (
              var c = null, u = null, d = l, h = (l = 0), g = null;
              null !== d && h < s.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(r, d, s[h], o);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && n(r, d),
                (l = i(v, l, h)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v),
                (d = g);
            }
            if (h === s.length) return t(r, d), rl && Xr(r, h), c;
            if (null === d) {
              for (; h < s.length; h++)
                null !== (d = f(r, s[h], o)) &&
                  ((l = i(d, l, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return rl && Xr(r, h), c;
            }
            for (d = a(r, d); h < s.length; h++)
              null !== (g = m(d, r, h, s[h], o)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (l = i(g, l, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return n(r, e);
                }),
              rl && Xr(r, h),
              c
            );
          }
          function g(r, s, o, c) {
            var u = O(o);
            if ('function' !== typeof u) throw Error(l(150));
            if (null == (o = u.call(o))) throw Error(l(151));
            for (
              var d = (u = null), h = s, g = (s = 0), v = null, b = o.next();
              null !== h && !b.done;
              g++, b = o.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var y = p(r, h, b.value, c);
              if (null === y) {
                null === h && (h = v);
                break;
              }
              e && h && null === y.alternate && n(r, h),
                (s = i(y, s, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y),
                (h = v);
            }
            if (b.done) return t(r, h), rl && Xr(r, g), u;
            if (null === h) {
              for (; !b.done; g++, b = o.next())
                null !== (b = f(r, b.value, c)) &&
                  ((s = i(b, s, g)),
                  null === d ? (u = b) : (d.sibling = b),
                  (d = b));
              return rl && Xr(r, g), u;
            }
            for (h = a(r, h); !b.done; g++, b = o.next())
              null !== (b = m(h, r, g, b.value, c)) &&
                (e &&
                  null !== b.alternate &&
                  h.delete(null === b.key ? g : b.key),
                (s = i(b, s, g)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                h.forEach(function (e) {
                  return n(r, e);
                }),
              rl && Xr(r, g),
              u
            );
          }
          return function e(a, l, i, o) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === N &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case _:
                  e: {
                    for (var c = i.key, u = l; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === N) {
                          if (7 === u.tag) {
                            t(a, u.sibling),
                              ((l = r(u, i.props.children)).return = a),
                              (a = l);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ('object' === typeof c &&
                            null !== c &&
                            c.$$typeof === z &&
                            Yl(c) === u.type)
                        ) {
                          t(a, u.sibling),
                            ((l = r(u, i.props)).ref = $l(a, u, i)),
                            (l.return = a),
                            (a = l);
                          break e;
                        }
                        t(a, u);
                        break;
                      }
                      n(a, u), (u = u.sibling);
                    }
                    i.type === N
                      ? (((l = Oc(i.props.children, a.mode, o, i.key)).return =
                          a),
                        (a = l))
                      : (((o = Ic(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          a.mode,
                          o
                        )).ref = $l(a, l, i)),
                        (o.return = a),
                        (a = o));
                  }
                  return s(a);
                case k:
                  e: {
                    for (u = i.key; null !== l; ) {
                      if (l.key === u) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          t(a, l.sibling),
                            ((l = r(l, i.children || [])).return = a),
                            (a = l);
                          break e;
                        }
                        t(a, l);
                        break;
                      }
                      n(a, l), (l = l.sibling);
                    }
                    ((l = Rc(i, a.mode, o)).return = a), (a = l);
                  }
                  return s(a);
                case z:
                  return e(a, l, (u = i._init)(i._payload), o);
              }
              if (ne(i)) return h(a, l, i, o);
              if (O(i)) return g(a, l, i, o);
              Ql(a, i);
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== l && 6 === l.tag
                  ? (t(a, l.sibling), ((l = r(l, i)).return = a), (a = l))
                  : (t(a, l), ((l = Mc(i, a.mode, o)).return = a), (a = l)),
                s(a))
              : t(a, l);
          };
        }
        var Gl = Kl(!0),
          Jl = Kl(!1),
          Xl = {},
          Zl = wr(Xl),
          ei = wr(Xl),
          ni = wr(Xl);
        function ti(e) {
          if (e === Xl) throw Error(l(174));
          return e;
        }
        function ai(e, n) {
          switch ((Sr(ni, n), Sr(ei, e), Sr(Zl, Xl), (e = n.nodeType))) {
            case 9:
            case 11:
              n = (n = n.documentElement) ? n.namespaceURI : oe(null, '');
              break;
            default:
              n = oe(
                (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
                (e = e.tagName)
              );
          }
          jr(Zl), Sr(Zl, n);
        }
        function ri() {
          jr(Zl), jr(ei), jr(ni);
        }
        function li(e) {
          ti(ni.current);
          var n = ti(Zl.current),
            t = oe(n, e.type);
          n !== t && (Sr(ei, e), Sr(Zl, t));
        }
        function ii(e) {
          ei.current === e && (jr(Zl), jr(ei));
        }
        var si = wr(0);
        function oi(e) {
          for (var n = e; null !== n; ) {
            if (13 === n.tag) {
              var t = n.memoizedState;
              if (
                null !== t &&
                (null === (t = t.dehydrated) ||
                  '$?' === t.data ||
                  '$!' === t.data)
              )
                return n;
            } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
              if (0 !== (128 & n.flags)) return n;
            } else if (null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return null;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
          return null;
        }
        var ci = [];
        function ui() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = x.ReactCurrentDispatcher,
          fi = x.ReactCurrentBatchConfig,
          pi = 0,
          mi = null,
          hi = null,
          gi = null,
          vi = !1,
          bi = !1,
          yi = 0,
          xi = 0;
        function _i() {
          throw Error(l(321));
        }
        function ki(e, n) {
          if (null === n) return !1;
          for (var t = 0; t < n.length && t < e.length; t++)
            if (!sa(e[t], n[t])) return !1;
          return !0;
        }
        function Ni(e, n, t, a, r, i) {
          if (
            ((pi = i),
            (mi = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? is : ss),
            (e = t(a, r)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (yi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (gi = hi = null),
                (n.updateQueue = null),
                (di.current = os),
                (e = t(a, r));
            } while (bi);
          }
          if (
            ((di.current = ls),
            (n = null !== hi && null !== hi.next),
            (pi = 0),
            (gi = hi = mi = null),
            (vi = !1),
            n)
          )
            throw Error(l(300));
          return e;
        }
        function wi() {
          var e = 0 !== yi;
          return (yi = 0), e;
        }
        function ji() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function Si() {
          if (null === hi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hi.next;
          var n = null === gi ? mi.memoizedState : gi.next;
          if (null !== n) (gi = n), (hi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (hi = e).memoizedState,
              baseState: hi.baseState,
              baseQueue: hi.baseQueue,
              queue: hi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Ei(e, n) {
          return 'function' === typeof n ? n(e) : n;
        }
        function Ci(e) {
          var n = Si(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var a = hi,
            r = a.baseQueue,
            i = t.pending;
          if (null !== i) {
            if (null !== r) {
              var s = r.next;
              (r.next = i.next), (i.next = s);
            }
            (a.baseQueue = r = i), (t.pending = null);
          }
          if (null !== r) {
            (i = r.next), (a = a.baseState);
            var o = (s = null),
              c = null,
              u = i;
            do {
              var d = u.lane;
              if ((pi & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (a = u.hasEagerState ? u.eagerState : e(a, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((o = c = f), (s = a)) : (c = c.next = f),
                  (mi.lanes |= d),
                  (Do |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (s = a) : (c.next = o),
              sa(a, n.memoizedState) || (ys = !0),
              (n.memoizedState = a),
              (n.baseState = s),
              (n.baseQueue = c),
              (t.lastRenderedState = a);
          }
          if (null !== (e = t.interleaved)) {
            r = e;
            do {
              (i = r.lane), (mi.lanes |= i), (Do |= i), (r = r.next);
            } while (r !== e);
          } else null === r && (t.lanes = 0);
          return [n.memoizedState, t.dispatch];
        }
        function Pi(e) {
          var n = Si(),
            t = n.queue;
          if (null === t) throw Error(l(311));
          t.lastRenderedReducer = e;
          var a = t.dispatch,
            r = t.pending,
            i = n.memoizedState;
          if (null !== r) {
            t.pending = null;
            var s = (r = r.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== r);
            sa(i, n.memoizedState) || (ys = !0),
              (n.memoizedState = i),
              null === n.baseQueue && (n.baseState = i),
              (t.lastRenderedState = i);
          }
          return [i, a];
        }
        function Li() {}
        function Ti(e, n) {
          var t = mi,
            a = Si(),
            r = n(),
            i = !sa(a.memoizedState, r);
          if (
            (i && ((a.memoizedState = r), (ys = !0)),
            (a = a.queue),
            Bi(Ii.bind(null, t, a, e), [e]),
            a.getSnapshot !== n ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((t.flags |= 2048),
              Ri(9, Ai.bind(null, t, a, r, n), void 0, null),
              null === Po)
            )
              throw Error(l(349));
            0 !== (30 & pi) || zi(t, n, r);
          }
          return r;
        }
        function zi(e, n, t) {
          (e.flags |= 16384),
            (e = { getSnapshot: n, value: t }),
            null === (n = mi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (mi.updateQueue = n),
                (n.stores = [e]))
              : null === (t = n.stores)
              ? (n.stores = [e])
              : t.push(e);
        }
        function Ai(e, n, t, a) {
          (n.value = t), (n.getSnapshot = a), Oi(n) && Di(e);
        }
        function Ii(e, n, t) {
          return t(function () {
            Oi(n) && Di(e);
          });
        }
        function Oi(e) {
          var n = e.getSnapshot;
          e = e.value;
          try {
            var t = n();
            return !sa(e, t);
          } catch (a) {
            return !0;
          }
        }
        function Di(e) {
          var n = Pl(e, 1);
          null !== n && tc(n, e, 1, -1);
        }
        function Mi(e) {
          var n = ji();
          return (
            'function' === typeof e && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ei,
              lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = ns.bind(null, mi, e)),
            [n.memoizedState, e]
          );
        }
        function Ri(e, n, t, a) {
          return (
            (e = { tag: e, create: n, destroy: t, deps: a, next: null }),
            null === (n = mi.updateQueue)
              ? ((n = { lastEffect: null, stores: null }),
                (mi.updateQueue = n),
                (n.lastEffect = e.next = e))
              : null === (t = n.lastEffect)
              ? (n.lastEffect = e.next = e)
              : ((a = t.next), (t.next = e), (e.next = a), (n.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return Si().memoizedState;
        }
        function Fi(e, n, t, a) {
          var r = ji();
          (mi.flags |= e),
            (r.memoizedState = Ri(1 | n, t, void 0, void 0 === a ? null : a));
        }
        function qi(e, n, t, a) {
          var r = Si();
          a = void 0 === a ? null : a;
          var l = void 0;
          if (null !== hi) {
            var i = hi.memoizedState;
            if (((l = i.destroy), null !== a && ki(a, i.deps)))
              return void (r.memoizedState = Ri(n, t, l, a));
          }
          (mi.flags |= e), (r.memoizedState = Ri(1 | n, t, l, a));
        }
        function Wi(e, n) {
          return Fi(8390656, 8, e, n);
        }
        function Bi(e, n) {
          return qi(2048, 8, e, n);
        }
        function Vi(e, n) {
          return qi(4, 2, e, n);
        }
        function Hi(e, n) {
          return qi(4, 4, e, n);
        }
        function $i(e, n) {
          return 'function' === typeof n
            ? ((e = e()),
              n(e),
              function () {
                n(null);
              })
            : null !== n && void 0 !== n
            ? ((e = e()),
              (n.current = e),
              function () {
                n.current = null;
              })
            : void 0;
        }
        function Qi(e, n, t) {
          return (
            (t = null !== t && void 0 !== t ? t.concat([e]) : null),
            qi(4, 4, $i.bind(null, n, e), t)
          );
        }
        function Yi() {}
        function Ki(e, n) {
          var t = Si();
          n = void 0 === n ? null : n;
          var a = t.memoizedState;
          return null !== a && null !== n && ki(n, a[1])
            ? a[0]
            : ((t.memoizedState = [e, n]), e);
        }
        function Gi(e, n) {
          var t = Si();
          n = void 0 === n ? null : n;
          var a = t.memoizedState;
          return null !== a && null !== n && ki(n, a[1])
            ? a[0]
            : ((e = e()), (t.memoizedState = [e, n]), e);
        }
        function Ji(e, n, t) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (ys = !0)),
              (e.memoizedState = t))
            : (sa(t, n) ||
                ((t = gn()), (mi.lanes |= t), (Do |= t), (e.baseState = !0)),
              n);
        }
        function Xi(e, n) {
          var t = xn;
          (xn = 0 !== t && 4 > t ? t : 4), e(!0);
          var a = fi.transition;
          fi.transition = {};
          try {
            e(!1), n();
          } finally {
            (xn = t), (fi.transition = a);
          }
        }
        function Zi() {
          return Si().memoizedState;
        }
        function es(e, n, t) {
          var a = nc(e);
          if (
            ((t = {
              lane: a,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ts(e))
          )
            as(n, t);
          else if (null !== (t = Cl(e, n, t, a))) {
            tc(t, e, a, ec()), rs(t, n, a);
          }
        }
        function ns(e, n, t) {
          var a = nc(e),
            r = {
              lane: a,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ts(e)) as(n, r);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = n.lastRenderedReducer)
            )
              try {
                var i = n.lastRenderedState,
                  s = l(i, t);
                if (((r.hasEagerState = !0), (r.eagerState = s), sa(s, i))) {
                  var o = n.interleaved;
                  return (
                    null === o
                      ? ((r.next = r), El(n))
                      : ((r.next = o.next), (o.next = r)),
                    void (n.interleaved = r)
                  );
                }
              } catch (c) {}
            null !== (t = Cl(e, n, r, a)) &&
              (tc(t, e, a, (r = ec())), rs(t, n, a));
          }
        }
        function ts(e) {
          var n = e.alternate;
          return e === mi || (null !== n && n === mi);
        }
        function as(e, n) {
          bi = vi = !0;
          var t = e.pending;
          null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
            (e.pending = n);
        }
        function rs(e, n, t) {
          if (0 !== (4194240 & t)) {
            var a = n.lanes;
            (t |= a &= e.pendingLanes), (n.lanes = t), yn(e, t);
          }
        }
        var ls = {
            readContext: jl,
            useCallback: _i,
            useContext: _i,
            useEffect: _i,
            useImperativeHandle: _i,
            useInsertionEffect: _i,
            useLayoutEffect: _i,
            useMemo: _i,
            useReducer: _i,
            useRef: _i,
            useState: _i,
            useDebugValue: _i,
            useDeferredValue: _i,
            useTransition: _i,
            useMutableSource: _i,
            useSyncExternalStore: _i,
            useId: _i,
            unstable_isNewReconciler: !1,
          },
          is = {
            readContext: jl,
            useCallback: function (e, n) {
              return (ji().memoizedState = [e, void 0 === n ? null : n]), e;
            },
            useContext: jl,
            useEffect: Wi,
            useImperativeHandle: function (e, n, t) {
              return (
                (t = null !== t && void 0 !== t ? t.concat([e]) : null),
                Fi(4194308, 4, $i.bind(null, n, e), t)
              );
            },
            useLayoutEffect: function (e, n) {
              return Fi(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
              return Fi(4, 2, e, n);
            },
            useMemo: function (e, n) {
              var t = ji();
              return (
                (n = void 0 === n ? null : n),
                (e = e()),
                (t.memoizedState = [e, n]),
                e
              );
            },
            useReducer: function (e, n, t) {
              var a = ji();
              return (
                (n = void 0 !== t ? t(n) : n),
                (a.memoizedState = a.baseState = n),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: n,
                }),
                (a.queue = e),
                (e = e.dispatch = es.bind(null, mi, e)),
                [a.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (ji().memoizedState = e);
            },
            useState: Mi,
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return (ji().memoizedState = e);
            },
            useTransition: function () {
              var e = Mi(!1),
                n = e[0];
              return (
                (e = Xi.bind(null, e[1])), (ji().memoizedState = e), [n, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, t) {
              var a = mi,
                r = ji();
              if (rl) {
                if (void 0 === t) throw Error(l(407));
                t = t();
              } else {
                if (((t = n()), null === Po)) throw Error(l(349));
                0 !== (30 & pi) || zi(a, n, t);
              }
              r.memoizedState = t;
              var i = { value: t, getSnapshot: n };
              return (
                (r.queue = i),
                Wi(Ii.bind(null, a, i, e), [e]),
                (a.flags |= 2048),
                Ri(9, Ai.bind(null, a, i, t, n), void 0, null),
                t
              );
            },
            useId: function () {
              var e = ji(),
                n = Po.identifierPrefix;
              if (rl) {
                var t = Jr;
                (n =
                  ':' +
                  n +
                  'R' +
                  (t = (Gr & ~(1 << (32 - sn(Gr) - 1))).toString(32) + t)),
                  0 < (t = yi++) && (n += 'H' + t.toString(32)),
                  (n += ':');
              } else n = ':' + n + 'r' + (t = xi++).toString(32) + ':';
              return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: jl,
            useCallback: Ki,
            useContext: jl,
            useEffect: Bi,
            useImperativeHandle: Qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Hi,
            useMemo: Gi,
            useReducer: Ci,
            useRef: Ui,
            useState: function () {
              return Ci(Ei);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              return Ji(Si(), hi.memoizedState, e);
            },
            useTransition: function () {
              return [Ci(Ei)[0], Si().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Ti,
            useId: Zi,
            unstable_isNewReconciler: !1,
          },
          os = {
            readContext: jl,
            useCallback: Ki,
            useContext: jl,
            useEffect: Bi,
            useImperativeHandle: Qi,
            useInsertionEffect: Vi,
            useLayoutEffect: Hi,
            useMemo: Gi,
            useReducer: Pi,
            useRef: Ui,
            useState: function () {
              return Pi(Ei);
            },
            useDebugValue: Yi,
            useDeferredValue: function (e) {
              var n = Si();
              return null === hi
                ? (n.memoizedState = e)
                : Ji(n, hi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ei)[0], Si().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Ti,
            useId: Zi,
            unstable_isNewReconciler: !1,
          };
        function cs(e, n) {
          try {
            var t = '',
              a = n;
            do {
              (t += q(a)), (a = a.return);
            } while (a);
            var r = t;
          } catch (l) {
            r = '\nError generating stack: ' + l.message + '\n' + l.stack;
          }
          return { value: e, source: n, stack: r, digest: null };
        }
        function us(e, n, t) {
          return {
            value: e,
            source: null,
            stack: null != t ? t : null,
            digest: null != n ? n : null,
          };
        }
        function ds(e, n) {
          try {
            console.error(n.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var fs = 'function' === typeof WeakMap ? WeakMap : Map;
        function ps(e, n, t) {
          ((t = Al(-1, t)).tag = 3), (t.payload = { element: null });
          var a = n.value;
          return (
            (t.callback = function () {
              Vo || ((Vo = !0), (Ho = a)), ds(0, n);
            }),
            t
          );
        }
        function ms(e, n, t) {
          (t = Al(-1, t)).tag = 3;
          var a = e.type.getDerivedStateFromError;
          if ('function' === typeof a) {
            var r = n.value;
            (t.payload = function () {
              return a(r);
            }),
              (t.callback = function () {
                ds(0, n);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              'function' === typeof l.componentDidCatch &&
              (t.callback = function () {
                ds(0, n),
                  'function' !== typeof a &&
                    (null === $o ? ($o = new Set([this])) : $o.add(this));
                var e = n.stack;
                this.componentDidCatch(n.value, {
                  componentStack: null !== e ? e : '',
                });
              }),
            t
          );
        }
        function hs(e, n, t) {
          var a = e.pingCache;
          if (null === a) {
            a = e.pingCache = new fs();
            var r = new Set();
            a.set(n, r);
          } else void 0 === (r = a.get(n)) && ((r = new Set()), a.set(n, r));
          r.has(t) || (r.add(t), (e = jc.bind(null, e, n, t)), n.then(e, e));
        }
        function gs(e) {
          do {
            var n;
            if (
              ((n = 13 === e.tag) &&
                (n = null === (n = e.memoizedState) || null !== n.dehydrated),
              n)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vs(e, n, t, a, r) {
          return 0 === (1 & e.mode)
            ? (e === n
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (t.flags |= 131072),
                  (t.flags &= -52805),
                  1 === t.tag &&
                    (null === t.alternate
                      ? (t.tag = 17)
                      : (((n = Al(-1, 1)).tag = 2), Il(t, n, 1))),
                  (t.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = r), e);
        }
        var bs = x.ReactCurrentOwner,
          ys = !1;
        function xs(e, n, t, a) {
          n.child = null === e ? Jl(n, null, t, a) : Gl(n, e.child, t, a);
        }
        function _s(e, n, t, a, r) {
          t = t.render;
          var l = n.ref;
          return (
            wl(n, r),
            (a = Ni(e, n, t, a, l, r)),
            (t = wi()),
            null === e || ys
              ? (rl && t && el(n), (n.flags |= 1), xs(e, n, a, r), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~r),
                Bs(e, n, r))
          );
        }
        function ks(e, n, t, a, r) {
          if (null === e) {
            var l = t.type;
            return 'function' !== typeof l ||
              zc(l) ||
              void 0 !== l.defaultProps ||
              null !== t.compare ||
              void 0 !== t.defaultProps
              ? (((e = Ic(t.type, null, a, n, n.mode, r)).ref = n.ref),
                (e.return = n),
                (n.child = e))
              : ((n.tag = 15), (n.type = l), Ns(e, n, l, a, r));
          }
          if (((l = e.child), 0 === (e.lanes & r))) {
            var i = l.memoizedProps;
            if (
              (t = null !== (t = t.compare) ? t : oa)(i, a) &&
              e.ref === n.ref
            )
              return Bs(e, n, r);
          }
          return (
            (n.flags |= 1),
            ((e = Ac(l, a)).ref = n.ref),
            (e.return = n),
            (n.child = e)
          );
        }
        function Ns(e, n, t, a, r) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (oa(l, a) && e.ref === n.ref) {
              if (((ys = !1), (n.pendingProps = a = l), 0 === (e.lanes & r)))
                return (n.lanes = e.lanes), Bs(e, n, r);
              0 !== (131072 & e.flags) && (ys = !0);
            }
          }
          return Ss(e, n, t, a, r);
        }
        function ws(e, n, t) {
          var a = n.pendingProps,
            r = a.children,
            l = null !== e ? e.memoizedState : null;
          if ('hidden' === a.mode)
            if (0 === (1 & n.mode))
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Sr(Ao, zo),
                (zo |= t);
            else {
              if (0 === (1073741824 & t))
                return (
                  (e = null !== l ? l.baseLanes | t : t),
                  (n.lanes = n.childLanes = 1073741824),
                  (n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (n.updateQueue = null),
                  Sr(Ao, zo),
                  (zo |= e),
                  null
                );
              (n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (a = null !== l ? l.baseLanes : t),
                Sr(Ao, zo),
                (zo |= a);
            }
          else
            null !== l
              ? ((a = l.baseLanes | t), (n.memoizedState = null))
              : (a = t),
              Sr(Ao, zo),
              (zo |= a);
          return xs(e, n, r, t), n.child;
        }
        function js(e, n) {
          var t = n.ref;
          ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
            ((n.flags |= 512), (n.flags |= 2097152));
        }
        function Ss(e, n, t, a, r) {
          var l = zr(t) ? Lr : Cr.current;
          return (
            (l = Tr(n, l)),
            wl(n, r),
            (t = Ni(e, n, t, a, l, r)),
            (a = wi()),
            null === e || ys
              ? (rl && a && el(n), (n.flags |= 1), xs(e, n, t, r), n.child)
              : ((n.updateQueue = e.updateQueue),
                (n.flags &= -2053),
                (e.lanes &= ~r),
                Bs(e, n, r))
          );
        }
        function Es(e, n, t, a, r) {
          if (zr(t)) {
            var l = !0;
            Dr(n);
          } else l = !1;
          if ((wl(n, r), null === n.stateNode))
            Ws(e, n), Bl(n, t, a), Hl(n, t, a, r), (a = !0);
          else if (null === e) {
            var i = n.stateNode,
              s = n.memoizedProps;
            i.props = s;
            var o = i.context,
              c = t.contextType;
            'object' === typeof c && null !== c
              ? (c = jl(c))
              : (c = Tr(n, (c = zr(t) ? Lr : Cr.current)));
            var u = t.getDerivedStateFromProps,
              d =
                'function' === typeof u ||
                'function' === typeof i.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((s !== a || o !== c) && Vl(n, i, a, c)),
              (Ll = !1);
            var f = n.memoizedState;
            (i.state = f),
              Ml(n, a, i, r),
              (o = n.memoizedState),
              s !== a || f !== o || Pr.current || Ll
                ? ('function' === typeof u &&
                    (Fl(n, t, u, a), (o = n.memoizedState)),
                  (s = Ll || Wl(n, t, s, a, f, o, c))
                    ? (d ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount &&
                        (n.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount &&
                        (n.flags |= 4194308),
                      (n.memoizedProps = a),
                      (n.memoizedState = o)),
                  (i.props = a),
                  (i.state = o),
                  (i.context = c),
                  (a = s))
                : ('function' === typeof i.componentDidMount &&
                    (n.flags |= 4194308),
                  (a = !1));
          } else {
            (i = n.stateNode),
              zl(e, n),
              (s = n.memoizedProps),
              (c = n.type === n.elementType ? s : gl(n.type, s)),
              (i.props = c),
              (d = n.pendingProps),
              (f = i.context),
              'object' === typeof (o = t.contextType) && null !== o
                ? (o = jl(o))
                : (o = Tr(n, (o = zr(t) ? Lr : Cr.current)));
            var p = t.getDerivedStateFromProps;
            (u =
              'function' === typeof p ||
              'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((s !== d || f !== o) && Vl(n, i, a, o)),
              (Ll = !1),
              (f = n.memoizedState),
              (i.state = f),
              Ml(n, a, i, r);
            var m = n.memoizedState;
            s !== d || f !== m || Pr.current || Ll
              ? ('function' === typeof p &&
                  (Fl(n, t, p, a), (m = n.memoizedState)),
                (c = Ll || Wl(n, t, c, a, f, m, o) || !1)
                  ? (u ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(a, m, o),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(a, m, o)),
                    'function' === typeof i.componentDidUpdate &&
                      (n.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate &&
                      (n.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (n.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (n.flags |= 1024),
                    (n.memoizedProps = a),
                    (n.memoizedState = m)),
                (i.props = a),
                (i.state = m),
                (i.context = o),
                (a = c))
              : ('function' !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (n.flags |= 1024),
                (a = !1));
          }
          return Cs(e, n, t, a, l, r);
        }
        function Cs(e, n, t, a, r, l) {
          js(e, n);
          var i = 0 !== (128 & n.flags);
          if (!a && !i) return r && Mr(n, t, !1), Bs(e, n, l);
          (a = n.stateNode), (bs.current = n);
          var s =
            i && 'function' !== typeof t.getDerivedStateFromError
              ? null
              : a.render();
          return (
            (n.flags |= 1),
            null !== e && i
              ? ((n.child = Gl(n, e.child, null, l)),
                (n.child = Gl(n, null, s, l)))
              : xs(e, n, s, l),
            (n.memoizedState = a.state),
            r && Mr(n, t, !0),
            n.child
          );
        }
        function Ps(e) {
          var n = e.stateNode;
          n.pendingContext
            ? Ir(0, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Ir(0, n.context, !1),
            ai(e, n.containerInfo);
        }
        function Ls(e, n, t, a, r) {
          return pl(), ml(r), (n.flags |= 256), xs(e, n, t, a), n.child;
        }
        var Ts,
          zs,
          As,
          Is = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Os(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ds(e, n, t) {
          var a,
            r = n.pendingProps,
            i = si.current,
            s = !1,
            o = 0 !== (128 & n.flags);
          if (
            ((a = o) ||
              (a = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            a
              ? ((s = !0), (n.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Sr(si, 1 & i),
            null === e)
          )
            return (
              cl(n),
              null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & n.mode)
                    ? (n.lanes = 1)
                    : '$!' === e.data
                    ? (n.lanes = 8)
                    : (n.lanes = 1073741824),
                  null)
                : ((o = r.children),
                  (e = r.fallback),
                  s
                    ? ((r = n.mode),
                      (s = n.child),
                      (o = { mode: 'hidden', children: o }),
                      0 === (1 & r) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = o))
                        : (s = Dc(o, r, 0, null)),
                      (e = Oc(e, r, t, null)),
                      (s.return = n),
                      (e.return = n),
                      (s.sibling = e),
                      (n.child = s),
                      (n.child.memoizedState = Os(t)),
                      (n.memoizedState = Is),
                      e)
                    : Ms(n, o))
            );
          if (null !== (i = e.memoizedState) && null !== (a = i.dehydrated))
            return (function (e, n, t, a, r, i, s) {
              if (t)
                return 256 & n.flags
                  ? ((n.flags &= -257), Rs(e, n, s, (a = us(Error(l(422))))))
                  : null !== n.memoizedState
                  ? ((n.child = e.child), (n.flags |= 128), null)
                  : ((i = a.fallback),
                    (r = n.mode),
                    (a = Dc(
                      { mode: 'visible', children: a.children },
                      r,
                      0,
                      null
                    )),
                    ((i = Oc(i, r, s, null)).flags |= 2),
                    (a.return = n),
                    (i.return = n),
                    (a.sibling = i),
                    (n.child = a),
                    0 !== (1 & n.mode) && Gl(n, e.child, null, s),
                    (n.child.memoizedState = Os(s)),
                    (n.memoizedState = Is),
                    i);
              if (0 === (1 & n.mode)) return Rs(e, n, s, null);
              if ('$!' === r.data) {
                if ((a = r.nextSibling && r.nextSibling.dataset))
                  var o = a.dgst;
                return (
                  (a = o), Rs(e, n, s, (a = us((i = Error(l(419))), a, void 0)))
                );
              }
              if (((o = 0 !== (s & e.childLanes)), ys || o)) {
                if (null !== (a = Po)) {
                  switch (s & -s) {
                    case 4:
                      r = 2;
                      break;
                    case 16:
                      r = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      r = 32;
                      break;
                    case 536870912:
                      r = 268435456;
                      break;
                    default:
                      r = 0;
                  }
                  0 !== (r = 0 !== (r & (a.suspendedLanes | s)) ? 0 : r) &&
                    r !== i.retryLane &&
                    ((i.retryLane = r), Pl(e, r), tc(a, e, r, -1));
                }
                return hc(), Rs(e, n, s, (a = us(Error(l(421)))));
              }
              return '$?' === r.data
                ? ((n.flags |= 128),
                  (n.child = e.child),
                  (n = Ec.bind(null, e)),
                  (r._reactRetry = n),
                  null)
                : ((e = i.treeContext),
                  (al = cr(r.nextSibling)),
                  (tl = n),
                  (rl = !0),
                  (ll = null),
                  null !== e &&
                    ((Qr[Yr++] = Gr),
                    (Qr[Yr++] = Jr),
                    (Qr[Yr++] = Kr),
                    (Gr = e.id),
                    (Jr = e.overflow),
                    (Kr = n)),
                  ((n = Ms(n, a.children)).flags |= 4096),
                  n);
            })(e, n, o, r, a, i, t);
          if (s) {
            (s = r.fallback), (o = n.mode), (a = (i = e.child).sibling);
            var c = { mode: 'hidden', children: r.children };
            return (
              0 === (1 & o) && n.child !== i
                ? (((r = n.child).childLanes = 0),
                  (r.pendingProps = c),
                  (n.deletions = null))
                : ((r = Ac(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== a
                ? (s = Ac(a, s))
                : ((s = Oc(s, o, t, null)).flags |= 2),
              (s.return = n),
              (r.return = n),
              (r.sibling = s),
              (n.child = r),
              (r = s),
              (s = n.child),
              (o =
                null === (o = e.child.memoizedState)
                  ? Os(t)
                  : {
                      baseLanes: o.baseLanes | t,
                      cachePool: null,
                      transitions: o.transitions,
                    }),
              (s.memoizedState = o),
              (s.childLanes = e.childLanes & ~t),
              (n.memoizedState = Is),
              r
            );
          }
          return (
            (e = (s = e.child).sibling),
            (r = Ac(s, { mode: 'visible', children: r.children })),
            0 === (1 & n.mode) && (r.lanes = t),
            (r.return = n),
            (r.sibling = null),
            null !== e &&
              (null === (t = n.deletions)
                ? ((n.deletions = [e]), (n.flags |= 16))
                : t.push(e)),
            (n.child = r),
            (n.memoizedState = null),
            r
          );
        }
        function Ms(e, n) {
          return (
            ((n = Dc(
              { mode: 'visible', children: n },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = n)
          );
        }
        function Rs(e, n, t, a) {
          return (
            null !== a && ml(a),
            Gl(n, e.child, null, t),
            ((e = Ms(n, n.pendingProps.children)).flags |= 2),
            (n.memoizedState = null),
            e
          );
        }
        function Us(e, n, t) {
          e.lanes |= n;
          var a = e.alternate;
          null !== a && (a.lanes |= n), Nl(e.return, n, t);
        }
        function Fs(e, n, t, a, r) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: n,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: t,
                tailMode: r,
              })
            : ((l.isBackwards = n),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = a),
              (l.tail = t),
              (l.tailMode = r));
        }
        function qs(e, n, t) {
          var a = n.pendingProps,
            r = a.revealOrder,
            l = a.tail;
          if ((xs(e, n, a.children, t), 0 !== (2 & (a = si.current))))
            (a = (1 & a) | 2), (n.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = n.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Us(e, t, n);
                else if (19 === e.tag) Us(e, t, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            a &= 1;
          }
          if ((Sr(si, a), 0 === (1 & n.mode))) n.memoizedState = null;
          else
            switch (r) {
              case 'forwards':
                for (t = n.child, r = null; null !== t; )
                  null !== (e = t.alternate) && null === oi(e) && (r = t),
                    (t = t.sibling);
                null === (t = r)
                  ? ((r = n.child), (n.child = null))
                  : ((r = t.sibling), (t.sibling = null)),
                  Fs(n, !1, r, t, l);
                break;
              case 'backwards':
                for (t = null, r = n.child, n.child = null; null !== r; ) {
                  if (null !== (e = r.alternate) && null === oi(e)) {
                    n.child = r;
                    break;
                  }
                  (e = r.sibling), (r.sibling = t), (t = r), (r = e);
                }
                Fs(n, !0, t, null, l);
                break;
              case 'together':
                Fs(n, !1, null, null, void 0);
                break;
              default:
                n.memoizedState = null;
            }
          return n.child;
        }
        function Ws(e, n) {
          0 === (1 & n.mode) &&
            null !== e &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
        }
        function Bs(e, n, t) {
          if (
            (null !== e && (n.dependencies = e.dependencies),
            (Do |= n.lanes),
            0 === (t & n.childLanes))
          )
            return null;
          if (null !== e && n.child !== e.child) throw Error(l(153));
          if (null !== n.child) {
            for (
              t = Ac((e = n.child), e.pendingProps), n.child = t, t.return = n;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((t = t.sibling = Ac(e, e.pendingProps)).return = n);
            t.sibling = null;
          }
          return n.child;
        }
        function Vs(e, n) {
          if (!rl)
            switch (e.tailMode) {
              case 'hidden':
                n = e.tail;
                for (var t = null; null !== n; )
                  null !== n.alternate && (t = n), (n = n.sibling);
                null === t ? (e.tail = null) : (t.sibling = null);
                break;
              case 'collapsed':
                t = e.tail;
                for (var a = null; null !== t; )
                  null !== t.alternate && (a = t), (t = t.sibling);
                null === a
                  ? n || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (a.sibling = null);
            }
        }
        function Hs(e) {
          var n = null !== e.alternate && e.alternate.child === e.child,
            t = 0,
            a = 0;
          if (n)
            for (var r = e.child; null !== r; )
              (t |= r.lanes | r.childLanes),
                (a |= 14680064 & r.subtreeFlags),
                (a |= 14680064 & r.flags),
                (r.return = e),
                (r = r.sibling);
          else
            for (r = e.child; null !== r; )
              (t |= r.lanes | r.childLanes),
                (a |= r.subtreeFlags),
                (a |= r.flags),
                (r.return = e),
                (r = r.sibling);
          return (e.subtreeFlags |= a), (e.childLanes = t), n;
        }
        function $s(e, n, t) {
          var a = n.pendingProps;
          switch ((nl(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Hs(n), null;
            case 1:
            case 17:
              return zr(n.type) && Ar(), Hs(n), null;
            case 3:
              return (
                (a = n.stateNode),
                ri(),
                jr(Pr),
                jr(Cr),
                ui(),
                a.pendingContext &&
                  ((a.context = a.pendingContext), (a.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(n)
                    ? (n.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & n.flags)) ||
                      ((n.flags |= 1024),
                      null !== ll && (ic(ll), (ll = null)))),
                Hs(n),
                null
              );
            case 5:
              ii(n);
              var r = ti(ni.current);
              if (((t = n.type), null !== e && null != n.stateNode))
                zs(e, n, t, a),
                  e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              else {
                if (!a) {
                  if (null === n.stateNode) throw Error(l(166));
                  return Hs(n), null;
                }
                if (((e = ti(Zl.current)), dl(n))) {
                  (a = n.stateNode), (t = n.type);
                  var i = n.memoizedProps;
                  switch (
                    ((a[fr] = n), (a[pr] = i), (e = 0 !== (1 & n.mode)), t)
                  ) {
                    case 'dialog':
                      Ua('cancel', a), Ua('close', a);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Ua('load', a);
                      break;
                    case 'video':
                    case 'audio':
                      for (r = 0; r < Oa.length; r++) Ua(Oa[r], a);
                      break;
                    case 'source':
                      Ua('error', a);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Ua('error', a), Ua('load', a);
                      break;
                    case 'details':
                      Ua('toggle', a);
                      break;
                    case 'input':
                      G(a, i), Ua('invalid', a);
                      break;
                    case 'select':
                      (a._wrapperState = { wasMultiple: !!i.multiple }),
                        Ua('invalid', a);
                      break;
                    case 'textarea':
                      re(a, i), Ua('invalid', a);
                  }
                  for (var o in (be(t, i), (r = null), i))
                    if (i.hasOwnProperty(o)) {
                      var c = i[o];
                      'children' === o
                        ? 'string' === typeof c
                          ? a.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xa(a.textContent, c, e),
                            (r = ['children', c]))
                          : 'number' === typeof c &&
                            a.textContent !== '' + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xa(a.textContent, c, e),
                            (r = ['children', '' + c]))
                        : s.hasOwnProperty(o) &&
                          null != c &&
                          'onScroll' === o &&
                          Ua('scroll', a);
                    }
                  switch (t) {
                    case 'input':
                      $(a), Z(a, i, !0);
                      break;
                    case 'textarea':
                      $(a), ie(a);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof i.onClick && (a.onclick = Za);
                  }
                  (a = r), (n.updateQueue = a), null !== a && (n.flags |= 4);
                } else {
                  (o = 9 === r.nodeType ? r : r.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = se(t)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === t
                        ? (((e = o.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof a.is
                        ? (e = o.createElement(t, { is: a.is }))
                        : ((e = o.createElement(t)),
                          'select' === t &&
                            ((o = e),
                            a.multiple
                              ? (o.multiple = !0)
                              : a.size && (o.size = a.size)))
                      : (e = o.createElementNS(e, t)),
                    (e[fr] = n),
                    (e[pr] = a),
                    Ts(e, n),
                    (n.stateNode = e);
                  e: {
                    switch (((o = ye(t, a)), t)) {
                      case 'dialog':
                        Ua('cancel', e), Ua('close', e), (r = a);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Ua('load', e), (r = a);
                        break;
                      case 'video':
                      case 'audio':
                        for (r = 0; r < Oa.length; r++) Ua(Oa[r], e);
                        r = a;
                        break;
                      case 'source':
                        Ua('error', e), (r = a);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Ua('error', e), Ua('load', e), (r = a);
                        break;
                      case 'details':
                        Ua('toggle', e), (r = a);
                        break;
                      case 'input':
                        G(e, a), (r = K(e, a)), Ua('invalid', e);
                        break;
                      case 'option':
                      default:
                        r = a;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!a.multiple }),
                          (r = M({}, a, { value: void 0 })),
                          Ua('invalid', e);
                        break;
                      case 'textarea':
                        re(e, a), (r = ae(e, a)), Ua('invalid', e);
                    }
                    for (i in (be(t, r), (c = r)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        'style' === i
                          ? ge(e, u)
                          : 'dangerouslySetInnerHTML' === i
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : 'children' === i
                          ? 'string' === typeof u
                            ? ('textarea' !== t || '' !== u) && fe(e, u)
                            : 'number' === typeof u && fe(e, '' + u)
                          : 'suppressContentEditableWarning' !== i &&
                            'suppressHydrationWarning' !== i &&
                            'autoFocus' !== i &&
                            (s.hasOwnProperty(i)
                              ? null != u && 'onScroll' === i && Ua('scroll', e)
                              : null != u && y(e, i, u, o));
                      }
                    switch (t) {
                      case 'input':
                        $(e), Z(e, a, !1);
                        break;
                      case 'textarea':
                        $(e), ie(e);
                        break;
                      case 'option':
                        null != a.value &&
                          e.setAttribute('value', '' + V(a.value));
                        break;
                      case 'select':
                        (e.multiple = !!a.multiple),
                          null != (i = a.value)
                            ? te(e, !!a.multiple, i, !1)
                            : null != a.defaultValue &&
                              te(e, !!a.multiple, a.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof r.onClick && (e.onclick = Za);
                    }
                    switch (t) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        a = !!a.autoFocus;
                        break e;
                      case 'img':
                        a = !0;
                        break e;
                      default:
                        a = !1;
                    }
                  }
                  a && (n.flags |= 4);
                }
                null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
              }
              return Hs(n), null;
            case 6:
              if (e && null != n.stateNode) As(0, n, e.memoizedProps, a);
              else {
                if ('string' !== typeof a && null === n.stateNode)
                  throw Error(l(166));
                if (((t = ti(ni.current)), ti(Zl.current), dl(n))) {
                  if (
                    ((a = n.stateNode),
                    (t = n.memoizedProps),
                    (a[fr] = n),
                    (i = a.nodeValue !== t) && null !== (e = tl))
                  )
                    switch (e.tag) {
                      case 3:
                        Xa(a.nodeValue, t, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xa(a.nodeValue, t, 0 !== (1 & e.mode));
                    }
                  i && (n.flags |= 4);
                } else
                  ((a = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(
                    a
                  ))[fr] = n),
                    (n.stateNode = a);
              }
              return Hs(n), null;
            case 13:
              if (
                (jr(si),
                (a = n.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  rl &&
                  null !== al &&
                  0 !== (1 & n.mode) &&
                  0 === (128 & n.flags)
                )
                  fl(), pl(), (n.flags |= 98560), (i = !1);
                else if (((i = dl(n)), null !== a && null !== a.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = n.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fr] = n;
                  } else
                    pl(),
                      0 === (128 & n.flags) && (n.memoizedState = null),
                      (n.flags |= 4);
                  Hs(n), (i = !1);
                } else null !== ll && (ic(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & n.flags ? n : null;
              }
              return 0 !== (128 & n.flags)
                ? ((n.lanes = t), n)
                : ((a = null !== a) !==
                    (null !== e && null !== e.memoizedState) &&
                    a &&
                    ((n.child.flags |= 8192),
                    0 !== (1 & n.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === Io && (Io = 3)
                        : hc())),
                  null !== n.updateQueue && (n.flags |= 4),
                  Hs(n),
                  null);
            case 4:
              return (
                ri(), null === e && Wa(n.stateNode.containerInfo), Hs(n), null
              );
            case 10:
              return kl(n.type._context), Hs(n), null;
            case 19:
              if ((jr(si), null === (i = n.memoizedState))) return Hs(n), null;
              if (((a = 0 !== (128 & n.flags)), null === (o = i.rendering)))
                if (a) Vs(i, !1);
                else {
                  if (0 !== Io || (null !== e && 0 !== (128 & e.flags)))
                    for (e = n.child; null !== e; ) {
                      if (null !== (o = oi(e))) {
                        for (
                          n.flags |= 128,
                            Vs(i, !1),
                            null !== (a = o.updateQueue) &&
                              ((n.updateQueue = a), (n.flags |= 4)),
                            n.subtreeFlags = 0,
                            a = t,
                            t = n.child;
                          null !== t;

                        )
                          (e = a),
                            ((i = t).flags &= 14680066),
                            null === (o = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = o.childLanes),
                                (i.lanes = o.lanes),
                                (i.child = o.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = o.memoizedProps),
                                (i.memoizedState = o.memoizedState),
                                (i.updateQueue = o.updateQueue),
                                (i.type = o.type),
                                (e = o.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (t = t.sibling);
                        return Sr(si, (1 & si.current) | 2), n.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > Wo &&
                    ((n.flags |= 128),
                    (a = !0),
                    Vs(i, !1),
                    (n.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = oi(o))) {
                    if (
                      ((n.flags |= 128),
                      (a = !0),
                      null !== (t = e.updateQueue) &&
                        ((n.updateQueue = t), (n.flags |= 4)),
                      Vs(i, !0),
                      null === i.tail &&
                        'hidden' === i.tailMode &&
                        !o.alternate &&
                        !rl)
                    )
                      return Hs(n), null;
                  } else
                    2 * Je() - i.renderingStartTime > Wo &&
                      1073741824 !== t &&
                      ((n.flags |= 128),
                      (a = !0),
                      Vs(i, !1),
                      (n.lanes = 4194304));
                i.isBackwards
                  ? ((o.sibling = n.child), (n.child = o))
                  : (null !== (t = i.last) ? (t.sibling = o) : (n.child = o),
                    (i.last = o));
              }
              return null !== i.tail
                ? ((n = i.tail),
                  (i.rendering = n),
                  (i.tail = n.sibling),
                  (i.renderingStartTime = Je()),
                  (n.sibling = null),
                  (t = si.current),
                  Sr(si, a ? (1 & t) | 2 : 1 & t),
                  n)
                : (Hs(n), null);
            case 22:
            case 23:
              return (
                dc(),
                (a = null !== n.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== a &&
                  (n.flags |= 8192),
                a && 0 !== (1 & n.mode)
                  ? 0 !== (1073741824 & zo) &&
                    (Hs(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                  : Hs(n),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, n.tag));
        }
        function Qs(e, n) {
          switch ((nl(n), n.tag)) {
            case 1:
              return (
                zr(n.type) && Ar(),
                65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 3:
              return (
                ri(),
                jr(Pr),
                jr(Cr),
                ui(),
                0 !== (65536 & (e = n.flags)) && 0 === (128 & e)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null
              );
            case 5:
              return ii(n), null;
            case 13:
              if (
                (jr(si),
                null !== (e = n.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === n.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = n.flags)
                ? ((n.flags = (-65537 & e) | 128), n)
                : null;
            case 19:
              return jr(si), null;
            case 4:
              return ri(), null;
            case 10:
              return kl(n.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Ts = function (e, n) {
          for (var t = n.child; null !== t; ) {
            if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
            else if (4 !== t.tag && null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === n) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === n) return;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }),
          (zs = function (e, n, t, a) {
            var r = e.memoizedProps;
            if (r !== a) {
              (e = n.stateNode), ti(Zl.current);
              var l,
                i = null;
              switch (t) {
                case 'input':
                  (r = K(e, r)), (a = K(e, a)), (i = []);
                  break;
                case 'select':
                  (r = M({}, r, { value: void 0 })),
                    (a = M({}, a, { value: void 0 })),
                    (i = []);
                  break;
                case 'textarea':
                  (r = ae(e, r)), (a = ae(e, a)), (i = []);
                  break;
                default:
                  'function' !== typeof r.onClick &&
                    'function' === typeof a.onClick &&
                    (e.onclick = Za);
              }
              for (u in (be(t, a), (t = null), r))
                if (!a.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u])
                  if ('style' === u) {
                    var o = r[u];
                    for (l in o)
                      o.hasOwnProperty(l) && (t || (t = {}), (t[l] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== u &&
                      'children' !== u &&
                      'suppressContentEditableWarning' !== u &&
                      'suppressHydrationWarning' !== u &&
                      'autoFocus' !== u &&
                      (s.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in a) {
                var c = a[u];
                if (
                  ((o = null != r ? r[u] : void 0),
                  a.hasOwnProperty(u) && c !== o && (null != c || null != o))
                )
                  if ('style' === u)
                    if (o) {
                      for (l in o)
                        !o.hasOwnProperty(l) ||
                          (c && c.hasOwnProperty(l)) ||
                          (t || (t = {}), (t[l] = ''));
                      for (l in c)
                        c.hasOwnProperty(l) &&
                          o[l] !== c[l] &&
                          (t || (t = {}), (t[l] = c[l]));
                    } else t || (i || (i = []), i.push(u, t)), (t = c);
                  else
                    'dangerouslySetInnerHTML' === u
                      ? ((c = c ? c.__html : void 0),
                        (o = o ? o.__html : void 0),
                        null != c && o !== c && (i = i || []).push(u, c))
                      : 'children' === u
                      ? ('string' !== typeof c && 'number' !== typeof c) ||
                        (i = i || []).push(u, '' + c)
                      : 'suppressContentEditableWarning' !== u &&
                        'suppressHydrationWarning' !== u &&
                        (s.hasOwnProperty(u)
                          ? (null != c && 'onScroll' === u && Ua('scroll', e),
                            i || o === c || (i = []))
                          : (i = i || []).push(u, c));
              }
              t && (i = i || []).push('style', t);
              var u = i;
              (n.updateQueue = u) && (n.flags |= 4);
            }
          }),
          (As = function (e, n, t, a) {
            t !== a && (n.flags |= 4);
          });
        var Ys = !1,
          Ks = !1,
          Gs = 'function' === typeof WeakSet ? WeakSet : Set,
          Js = null;
        function Xs(e, n) {
          var t = e.ref;
          if (null !== t)
            if ('function' === typeof t)
              try {
                t(null);
              } catch (a) {
                wc(e, n, a);
              }
            else t.current = null;
        }
        function Zs(e, n, t) {
          try {
            t();
          } catch (a) {
            wc(e, n, a);
          }
        }
        var eo = !1;
        function no(e, n, t) {
          var a = n.updateQueue;
          if (null !== (a = null !== a ? a.lastEffect : null)) {
            var r = (a = a.next);
            do {
              if ((r.tag & e) === e) {
                var l = r.destroy;
                (r.destroy = void 0), void 0 !== l && Zs(n, t, l);
              }
              r = r.next;
            } while (r !== a);
          }
        }
        function to(e, n) {
          if (
            null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)
          ) {
            var t = (n = n.next);
            do {
              if ((t.tag & e) === e) {
                var a = t.create;
                t.destroy = a();
              }
              t = t.next;
            } while (t !== n);
          }
        }
        function ao(e) {
          var n = e.ref;
          if (null !== n) {
            var t = e.stateNode;
            e.tag, (e = t), 'function' === typeof n ? n(e) : (n.current = e);
          }
        }
        function ro(e) {
          var n = e.alternate;
          null !== n && ((e.alternate = null), ro(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (n = e.stateNode) &&
              (delete n[fr],
              delete n[pr],
              delete n[hr],
              delete n[gr],
              delete n[vr]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lo(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function io(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lo(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function so(e, n, t) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode),
              n
                ? 8 === t.nodeType
                  ? t.parentNode.insertBefore(e, n)
                  : t.insertBefore(e, n)
                : (8 === t.nodeType
                    ? (n = t.parentNode).insertBefore(e, t)
                    : (n = t).appendChild(e),
                  (null !== (t = t._reactRootContainer) && void 0 !== t) ||
                    null !== n.onclick ||
                    (n.onclick = Za));
          else if (4 !== a && null !== (e = e.child))
            for (so(e, n, t), e = e.sibling; null !== e; )
              so(e, n, t), (e = e.sibling);
        }
        function oo(e, n, t) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
          else if (4 !== a && null !== (e = e.child))
            for (oo(e, n, t), e = e.sibling; null !== e; )
              oo(e, n, t), (e = e.sibling);
        }
        var co = null,
          uo = !1;
        function fo(e, n, t) {
          for (t = t.child; null !== t; ) po(e, n, t), (t = t.sibling);
        }
        function po(e, n, t) {
          if (ln && 'function' === typeof ln.onCommitFiberUnmount)
            try {
              ln.onCommitFiberUnmount(rn, t);
            } catch (s) {}
          switch (t.tag) {
            case 5:
              Ks || Xs(t, n);
            case 6:
              var a = co,
                r = uo;
              (co = null),
                fo(e, n, t),
                (uo = r),
                null !== (co = a) &&
                  (uo
                    ? ((e = co),
                      (t = t.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(t)
                        : e.removeChild(t))
                    : co.removeChild(t.stateNode));
              break;
            case 18:
              null !== co &&
                (uo
                  ? ((e = co),
                    (t = t.stateNode),
                    8 === e.nodeType
                      ? or(e.parentNode, t)
                      : 1 === e.nodeType && or(e, t),
                    Bn(e))
                  : or(co, t.stateNode));
              break;
            case 4:
              (a = co),
                (r = uo),
                (co = t.stateNode.containerInfo),
                (uo = !0),
                fo(e, n, t),
                (co = a),
                (uo = r);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ks &&
                null !== (a = t.updateQueue) &&
                null !== (a = a.lastEffect)
              ) {
                r = a = a.next;
                do {
                  var l = r,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      Zs(t, n, i),
                    (r = r.next);
                } while (r !== a);
              }
              fo(e, n, t);
              break;
            case 1:
              if (
                !Ks &&
                (Xs(t, n),
                'function' === typeof (a = t.stateNode).componentWillUnmount)
              )
                try {
                  (a.props = t.memoizedProps),
                    (a.state = t.memoizedState),
                    a.componentWillUnmount();
                } catch (s) {
                  wc(t, n, s);
                }
              fo(e, n, t);
              break;
            case 21:
              fo(e, n, t);
              break;
            case 22:
              1 & t.mode
                ? ((Ks = (a = Ks) || null !== t.memoizedState),
                  fo(e, n, t),
                  (Ks = a))
                : fo(e, n, t);
              break;
            default:
              fo(e, n, t);
          }
        }
        function mo(e) {
          var n = e.updateQueue;
          if (null !== n) {
            e.updateQueue = null;
            var t = e.stateNode;
            null === t && (t = e.stateNode = new Gs()),
              n.forEach(function (n) {
                var a = Cc.bind(null, e, n);
                t.has(n) || (t.add(n), n.then(a, a));
              });
          }
        }
        function ho(e, n) {
          var t = n.deletions;
          if (null !== t)
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              try {
                var i = e,
                  s = n,
                  o = s;
                e: for (; null !== o; ) {
                  switch (o.tag) {
                    case 5:
                      (co = o.stateNode), (uo = !1);
                      break e;
                    case 3:
                    case 4:
                      (co = o.stateNode.containerInfo), (uo = !0);
                      break e;
                  }
                  o = o.return;
                }
                if (null === co) throw Error(l(160));
                po(i, s, r), (co = null), (uo = !1);
                var c = r.alternate;
                null !== c && (c.return = null), (r.return = null);
              } catch (u) {
                wc(r, n, u);
              }
            }
          if (12854 & n.subtreeFlags)
            for (n = n.child; null !== n; ) go(n, e), (n = n.sibling);
        }
        function go(e, n) {
          var t = e.alternate,
            a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ho(n, e), vo(e), 4 & a)) {
                try {
                  no(3, e, e.return), to(3, e);
                } catch (g) {
                  wc(e, e.return, g);
                }
                try {
                  no(5, e, e.return);
                } catch (g) {
                  wc(e, e.return, g);
                }
              }
              break;
            case 1:
              ho(n, e), vo(e), 512 & a && null !== t && Xs(t, t.return);
              break;
            case 5:
              if (
                (ho(n, e),
                vo(e),
                512 & a && null !== t && Xs(t, t.return),
                32 & e.flags)
              ) {
                var r = e.stateNode;
                try {
                  fe(r, '');
                } catch (g) {
                  wc(e, e.return, g);
                }
              }
              if (4 & a && null != (r = e.stateNode)) {
                var i = e.memoizedProps,
                  s = null !== t ? t.memoizedProps : i,
                  o = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    'input' === o &&
                      'radio' === i.type &&
                      null != i.name &&
                      J(r, i),
                      ye(o, s);
                    var u = ye(o, i);
                    for (s = 0; s < c.length; s += 2) {
                      var d = c[s],
                        f = c[s + 1];
                      'style' === d
                        ? ge(r, f)
                        : 'dangerouslySetInnerHTML' === d
                        ? de(r, f)
                        : 'children' === d
                        ? fe(r, f)
                        : y(r, d, f, u);
                    }
                    switch (o) {
                      case 'input':
                        X(r, i);
                        break;
                      case 'textarea':
                        le(r, i);
                        break;
                      case 'select':
                        var p = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? te(r, !!i.multiple, m, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? te(r, !!i.multiple, i.defaultValue, !0)
                              : te(r, !!i.multiple, i.multiple ? [] : '', !1));
                    }
                    r[pr] = i;
                  } catch (g) {
                    wc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ho(n, e), vo(e), 4 & a)) {
                if (null === e.stateNode) throw Error(l(162));
                (r = e.stateNode), (i = e.memoizedProps);
                try {
                  r.nodeValue = i;
                } catch (g) {
                  wc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ho(n, e),
                vo(e),
                4 & a && null !== t && t.memoizedState.isDehydrated)
              )
                try {
                  Bn(n.containerInfo);
                } catch (g) {
                  wc(e, e.return, g);
                }
              break;
            case 4:
            default:
              ho(n, e), vo(e);
              break;
            case 13:
              ho(n, e),
                vo(e),
                8192 & (r = e.child).flags &&
                  ((i = null !== r.memoizedState),
                  (r.stateNode.isHidden = i),
                  !i ||
                    (null !== r.alternate &&
                      null !== r.alternate.memoizedState) ||
                    (qo = Je())),
                4 & a && mo(e);
              break;
            case 22:
              if (
                ((d = null !== t && null !== t.memoizedState),
                1 & e.mode
                  ? ((Ks = (u = Ks) || d), ho(n, e), (Ks = u))
                  : ho(n, e),
                vo(e),
                8192 & a)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Js = e, d = e.child; null !== d; ) {
                    for (f = Js = d; null !== Js; ) {
                      switch (((m = (p = Js).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          no(4, p, p.return);
                          break;
                        case 1:
                          Xs(p, p.return);
                          var h = p.stateNode;
                          if ('function' === typeof h.componentWillUnmount) {
                            (a = p), (t = p.return);
                            try {
                              (n = a),
                                (h.props = n.memoizedProps),
                                (h.state = n.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              wc(a, t, g);
                            }
                          }
                          break;
                        case 5:
                          Xs(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            _o(f);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Js = m)) : _o(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (r = f.stateNode),
                          u
                            ? 'function' === typeof (i = r.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((o = f.stateNode),
                              (s =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty('display')
                                  ? c.display
                                  : null),
                              (o.style.display = he('display', s)));
                      } catch (g) {
                        wc(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                      } catch (g) {
                        wc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ho(n, e), vo(e), 4 & a && mo(e);
            case 21:
          }
        }
        function vo(e) {
          var n = e.flags;
          if (2 & n) {
            try {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (lo(t)) {
                    var a = t;
                    break e;
                  }
                  t = t.return;
                }
                throw Error(l(160));
              }
              switch (a.tag) {
                case 5:
                  var r = a.stateNode;
                  32 & a.flags && (fe(r, ''), (a.flags &= -33)),
                    oo(e, io(e), r);
                  break;
                case 3:
                case 4:
                  var i = a.stateNode.containerInfo;
                  so(e, io(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (s) {
              wc(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & n && (e.flags &= -4097);
        }
        function bo(e, n, t) {
          (Js = e), yo(e, n, t);
        }
        function yo(e, n, t) {
          for (var a = 0 !== (1 & e.mode); null !== Js; ) {
            var r = Js,
              l = r.child;
            if (22 === r.tag && a) {
              var i = null !== r.memoizedState || Ys;
              if (!i) {
                var s = r.alternate,
                  o = (null !== s && null !== s.memoizedState) || Ks;
                s = Ys;
                var c = Ks;
                if (((Ys = i), (Ks = o) && !c))
                  for (Js = r; null !== Js; )
                    (o = (i = Js).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ko(r)
                        : null !== o
                        ? ((o.return = i), (Js = o))
                        : ko(r);
                for (; null !== l; ) (Js = l), yo(l, n, t), (l = l.sibling);
                (Js = r), (Ys = s), (Ks = c);
              }
              xo(e);
            } else
              0 !== (8772 & r.subtreeFlags) && null !== l
                ? ((l.return = r), (Js = l))
                : xo(e);
          }
        }
        function xo(e) {
          for (; null !== Js; ) {
            var n = Js;
            if (0 !== (8772 & n.flags)) {
              var t = n.alternate;
              try {
                if (0 !== (8772 & n.flags))
                  switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ks || to(5, n);
                      break;
                    case 1:
                      var a = n.stateNode;
                      if (4 & n.flags && !Ks)
                        if (null === t) a.componentDidMount();
                        else {
                          var r =
                            n.elementType === n.type
                              ? t.memoizedProps
                              : gl(n.type, t.memoizedProps);
                          a.componentDidUpdate(
                            r,
                            t.memoizedState,
                            a.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = n.updateQueue;
                      null !== i && Rl(n, i, a);
                      break;
                    case 3:
                      var s = n.updateQueue;
                      if (null !== s) {
                        if (((t = null), null !== n.child))
                          switch (n.child.tag) {
                            case 5:
                            case 1:
                              t = n.child.stateNode;
                          }
                        Rl(n, s, t);
                      }
                      break;
                    case 5:
                      var o = n.stateNode;
                      if (null === t && 4 & n.flags) {
                        t = o;
                        var c = n.memoizedProps;
                        switch (n.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            c.autoFocus && t.focus();
                            break;
                          case 'img':
                            c.src && (t.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === n.memoizedState) {
                        var u = n.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Bn(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Ks || (512 & n.flags && ao(n));
              } catch (p) {
                wc(n, n.return, p);
              }
            }
            if (n === e) {
              Js = null;
              break;
            }
            if (null !== (t = n.sibling)) {
              (t.return = n.return), (Js = t);
              break;
            }
            Js = n.return;
          }
        }
        function _o(e) {
          for (; null !== Js; ) {
            var n = Js;
            if (n === e) {
              Js = null;
              break;
            }
            var t = n.sibling;
            if (null !== t) {
              (t.return = n.return), (Js = t);
              break;
            }
            Js = n.return;
          }
        }
        function ko(e) {
          for (; null !== Js; ) {
            var n = Js;
            try {
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  var t = n.return;
                  try {
                    to(4, n);
                  } catch (o) {
                    wc(n, t, o);
                  }
                  break;
                case 1:
                  var a = n.stateNode;
                  if ('function' === typeof a.componentDidMount) {
                    var r = n.return;
                    try {
                      a.componentDidMount();
                    } catch (o) {
                      wc(n, r, o);
                    }
                  }
                  var l = n.return;
                  try {
                    ao(n);
                  } catch (o) {
                    wc(n, l, o);
                  }
                  break;
                case 5:
                  var i = n.return;
                  try {
                    ao(n);
                  } catch (o) {
                    wc(n, i, o);
                  }
              }
            } catch (o) {
              wc(n, n.return, o);
            }
            if (n === e) {
              Js = null;
              break;
            }
            var s = n.sibling;
            if (null !== s) {
              (s.return = n.return), (Js = s);
              break;
            }
            Js = n.return;
          }
        }
        var No,
          wo = Math.ceil,
          jo = x.ReactCurrentDispatcher,
          So = x.ReactCurrentOwner,
          Eo = x.ReactCurrentBatchConfig,
          Co = 0,
          Po = null,
          Lo = null,
          To = 0,
          zo = 0,
          Ao = wr(0),
          Io = 0,
          Oo = null,
          Do = 0,
          Mo = 0,
          Ro = 0,
          Uo = null,
          Fo = null,
          qo = 0,
          Wo = 1 / 0,
          Bo = null,
          Vo = !1,
          Ho = null,
          $o = null,
          Qo = !1,
          Yo = null,
          Ko = 0,
          Go = 0,
          Jo = null,
          Xo = -1,
          Zo = 0;
        function ec() {
          return 0 !== (6 & Co) ? Je() : -1 !== Xo ? Xo : (Xo = Je());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Co) && 0 !== To
            ? To & -To
            : null !== hl.transition
            ? (0 === Zo && (Zo = gn()), Zo)
            : 0 !== (e = xn)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jn(e.type));
        }
        function tc(e, n, t, a) {
          if (50 < Go) throw ((Go = 0), (Jo = null), Error(l(185)));
          bn(e, t, a),
            (0 !== (2 & Co) && e === Po) ||
              (e === Po && (0 === (2 & Co) && (Mo |= t), 4 === Io && sc(e, To)),
              ac(e, a),
              1 === t &&
                0 === Co &&
                0 === (1 & n.mode) &&
                ((Wo = Je() + 500), Ur && Wr()));
        }
        function ac(e, n) {
          var t = e.callbackNode;
          !(function (e, n) {
            for (
              var t = e.suspendedLanes,
                a = e.pingedLanes,
                r = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - sn(l),
                s = 1 << i,
                o = r[i];
              -1 === o
                ? (0 !== (s & t) && 0 === (s & a)) || (r[i] = mn(s, n))
                : o <= n && (e.expiredLanes |= s),
                (l &= ~s);
            }
          })(e, n);
          var a = pn(e, e === Po ? To : 0);
          if (0 === a)
            null !== t && Ye(t),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((n = a & -a), e.callbackPriority !== n)) {
            if ((null != t && Ye(t), 1 === n))
              0 === e.tag
                ? (function (e) {
                    (Ur = !0), qr(e);
                  })(oc.bind(null, e))
                : qr(oc.bind(null, e)),
                ir(function () {
                  0 === (6 & Co) && Wr();
                }),
                (t = null);
            else {
              switch (_n(a)) {
                case 1:
                  t = Ze;
                  break;
                case 4:
                  t = en;
                  break;
                case 16:
                default:
                  t = nn;
                  break;
                case 536870912:
                  t = an;
              }
              t = Pc(t, rc.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = t);
          }
        }
        function rc(e, n) {
          if (((Xo = -1), (Zo = 0), 0 !== (6 & Co))) throw Error(l(327));
          var t = e.callbackNode;
          if (kc() && e.callbackNode !== t) return null;
          var a = pn(e, e === Po ? To : 0);
          if (0 === a) return null;
          if (0 !== (30 & a) || 0 !== (a & e.expiredLanes) || n) n = gc(e, a);
          else {
            n = a;
            var r = Co;
            Co |= 2;
            var i = mc();
            for (
              (Po === e && To === n) ||
              ((Bo = null), (Wo = Je() + 500), fc(e, n));
              ;

            )
              try {
                bc();
                break;
              } catch (o) {
                pc(e, o);
              }
            _l(),
              (jo.current = i),
              (Co = r),
              null !== Lo ? (n = 0) : ((Po = null), (To = 0), (n = Io));
          }
          if (0 !== n) {
            if (
              (2 === n && 0 !== (r = hn(e)) && ((a = r), (n = lc(e, r))),
              1 === n)
            )
              throw ((t = Oo), fc(e, 0), sc(e, a), ac(e, Je()), t);
            if (6 === n) sc(e, a);
            else {
              if (
                ((r = e.current.alternate),
                0 === (30 & a) &&
                  !(function (e) {
                    for (var n = e; ; ) {
                      if (16384 & n.flags) {
                        var t = n.updateQueue;
                        if (null !== t && null !== (t = t.stores))
                          for (var a = 0; a < t.length; a++) {
                            var r = t[a],
                              l = r.getSnapshot;
                            r = r.value;
                            try {
                              if (!sa(l(), r)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                        (t.return = n), (n = t);
                      else {
                        if (n === e) break;
                        for (; null === n.sibling; ) {
                          if (null === n.return || n.return === e) return !0;
                          n = n.return;
                        }
                        (n.sibling.return = n.return), (n = n.sibling);
                      }
                    }
                    return !0;
                  })(r) &&
                  (2 === (n = gc(e, a)) &&
                    0 !== (i = hn(e)) &&
                    ((a = i), (n = lc(e, i))),
                  1 === n))
              )
                throw ((t = Oo), fc(e, 0), sc(e, a), ac(e, Je()), t);
              switch (((e.finishedWork = r), (e.finishedLanes = a), n)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  _c(e, Fo, Bo);
                  break;
                case 3:
                  if (
                    (sc(e, a),
                    (130023424 & a) === a && 10 < (n = qo + 500 - Je()))
                  ) {
                    if (0 !== pn(e, 0)) break;
                    if (((r = e.suspendedLanes) & a) !== a) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & r);
                      break;
                    }
                    e.timeoutHandle = ar(_c.bind(null, e, Fo, Bo), n);
                    break;
                  }
                  _c(e, Fo, Bo);
                  break;
                case 4:
                  if ((sc(e, a), (4194240 & a) === a)) break;
                  for (n = e.eventTimes, r = -1; 0 < a; ) {
                    var s = 31 - sn(a);
                    (i = 1 << s), (s = n[s]) > r && (r = s), (a &= ~i);
                  }
                  if (
                    ((a = r),
                    10 <
                      (a =
                        (120 > (a = Je() - a)
                          ? 120
                          : 480 > a
                          ? 480
                          : 1080 > a
                          ? 1080
                          : 1920 > a
                          ? 1920
                          : 3e3 > a
                          ? 3e3
                          : 4320 > a
                          ? 4320
                          : 1960 * wo(a / 1960)) - a))
                  ) {
                    e.timeoutHandle = ar(_c.bind(null, e, Fo, Bo), a);
                    break;
                  }
                  _c(e, Fo, Bo);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ac(e, Je()), e.callbackNode === t ? rc.bind(null, e) : null;
        }
        function lc(e, n) {
          var t = Uo;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, n).flags |= 256),
            2 !== (e = gc(e, n)) && ((n = Fo), (Fo = t), null !== n && ic(n)),
            e
          );
        }
        function ic(e) {
          null === Fo ? (Fo = e) : Fo.push.apply(Fo, e);
        }
        function sc(e, n) {
          for (
            n &= ~Ro,
              n &= ~Mo,
              e.suspendedLanes |= n,
              e.pingedLanes &= ~n,
              e = e.expirationTimes;
            0 < n;

          ) {
            var t = 31 - sn(n),
              a = 1 << t;
            (e[t] = -1), (n &= ~a);
          }
        }
        function oc(e) {
          if (0 !== (6 & Co)) throw Error(l(327));
          kc();
          var n = pn(e, 0);
          if (0 === (1 & n)) return ac(e, Je()), null;
          var t = gc(e, n);
          if (0 !== e.tag && 2 === t) {
            var a = hn(e);
            0 !== a && ((n = a), (t = lc(e, a)));
          }
          if (1 === t) throw ((t = Oo), fc(e, 0), sc(e, n), ac(e, Je()), t);
          if (6 === t) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            _c(e, Fo, Bo),
            ac(e, Je()),
            null
          );
        }
        function cc(e, n) {
          var t = Co;
          Co |= 1;
          try {
            return e(n);
          } finally {
            0 === (Co = t) && ((Wo = Je() + 500), Ur && Wr());
          }
        }
        function uc(e) {
          null !== Yo && 0 === Yo.tag && 0 === (6 & Co) && kc();
          var n = Co;
          Co |= 1;
          var t = Eo.transition,
            a = xn;
          try {
            if (((Eo.transition = null), (xn = 1), e)) return e();
          } finally {
            (xn = a), (Eo.transition = t), 0 === (6 & (Co = n)) && Wr();
          }
        }
        function dc() {
          (zo = Ao.current), jr(Ao);
        }
        function fc(e, n) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var t = e.timeoutHandle;
          if ((-1 !== t && ((e.timeoutHandle = -1), rr(t)), null !== Lo))
            for (t = Lo.return; null !== t; ) {
              var a = t;
              switch ((nl(a), a.tag)) {
                case 1:
                  null !== (a = a.type.childContextTypes) &&
                    void 0 !== a &&
                    Ar();
                  break;
                case 3:
                  ri(), jr(Pr), jr(Cr), ui();
                  break;
                case 5:
                  ii(a);
                  break;
                case 4:
                  ri();
                  break;
                case 13:
                case 19:
                  jr(si);
                  break;
                case 10:
                  kl(a.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              t = t.return;
            }
          if (
            ((Po = e),
            (Lo = e = Ac(e.current, null)),
            (To = zo = n),
            (Io = 0),
            (Oo = null),
            (Ro = Mo = Do = 0),
            (Fo = Uo = null),
            null !== Sl)
          ) {
            for (n = 0; n < Sl.length; n++)
              if (null !== (a = (t = Sl[n]).interleaved)) {
                t.interleaved = null;
                var r = a.next,
                  l = t.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = r), (a.next = i);
                }
                t.pending = a;
              }
            Sl = null;
          }
          return e;
        }
        function pc(e, n) {
          for (;;) {
            var t = Lo;
            try {
              if ((_l(), (di.current = ls), vi)) {
                for (var a = mi.memoizedState; null !== a; ) {
                  var r = a.queue;
                  null !== r && (r.pending = null), (a = a.next);
                }
                vi = !1;
              }
              if (
                ((pi = 0),
                (gi = hi = mi = null),
                (bi = !1),
                (yi = 0),
                (So.current = null),
                null === t || null === t.return)
              ) {
                (Io = 1), (Oo = n), (Lo = null);
                break;
              }
              e: {
                var i = e,
                  s = t.return,
                  o = t,
                  c = n;
                if (
                  ((n = To),
                  (o.flags |= 32768),
                  null !== c &&
                    'object' === typeof c &&
                    'function' === typeof c.then)
                ) {
                  var u = c,
                    d = o,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = gs(s);
                  if (null !== m) {
                    (m.flags &= -257),
                      vs(m, s, o, 0, n),
                      1 & m.mode && hs(i, u, n),
                      (c = u);
                    var h = (n = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(c), (n.updateQueue = g);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & n)) {
                    hs(i, u, n), hc();
                    break e;
                  }
                  c = Error(l(426));
                } else if (rl && 1 & o.mode) {
                  var v = gs(s);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vs(v, s, o, 0, n),
                      ml(cs(c, o));
                    break e;
                  }
                }
                (i = c = cs(c, o)),
                  4 !== Io && (Io = 2),
                  null === Uo ? (Uo = [i]) : Uo.push(i),
                  (i = s);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (n &= -n),
                        (i.lanes |= n),
                        Dl(i, ps(0, c, n));
                      break e;
                    case 1:
                      o = c;
                      var b = i.type,
                        y = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            'function' === typeof y.componentDidCatch &&
                            (null === $o || !$o.has(y))))
                      ) {
                        (i.flags |= 65536),
                          (n &= -n),
                          (i.lanes |= n),
                          Dl(i, ms(i, o, n));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xc(t);
            } catch (x) {
              (n = x), Lo === t && null !== t && (Lo = t = t.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = jo.current;
          return (jo.current = ls), null === e ? ls : e;
        }
        function hc() {
          (0 !== Io && 3 !== Io && 2 !== Io) || (Io = 4),
            null === Po ||
              (0 === (268435455 & Do) && 0 === (268435455 & Mo)) ||
              sc(Po, To);
        }
        function gc(e, n) {
          var t = Co;
          Co |= 2;
          var a = mc();
          for ((Po === e && To === n) || ((Bo = null), fc(e, n)); ; )
            try {
              vc();
              break;
            } catch (r) {
              pc(e, r);
            }
          if ((_l(), (Co = t), (jo.current = a), null !== Lo))
            throw Error(l(261));
          return (Po = null), (To = 0), Io;
        }
        function vc() {
          for (; null !== Lo; ) yc(Lo);
        }
        function bc() {
          for (; null !== Lo && !Ke(); ) yc(Lo);
        }
        function yc(e) {
          var n = No(e.alternate, e, zo);
          (e.memoizedProps = e.pendingProps),
            null === n ? xc(e) : (Lo = n),
            (So.current = null);
        }
        function xc(e) {
          var n = e;
          do {
            var t = n.alternate;
            if (((e = n.return), 0 === (32768 & n.flags))) {
              if (null !== (t = $s(t, n, zo))) return void (Lo = t);
            } else {
              if (null !== (t = Qs(t, n)))
                return (t.flags &= 32767), void (Lo = t);
              if (null === e) return (Io = 6), void (Lo = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (n = n.sibling)) return void (Lo = n);
            Lo = n = e;
          } while (null !== n);
          0 === Io && (Io = 5);
        }
        function _c(e, n, t) {
          var a = xn,
            r = Eo.transition;
          try {
            (Eo.transition = null),
              (xn = 1),
              (function (e, n, t, a) {
                do {
                  kc();
                } while (null !== Yo);
                if (0 !== (6 & Co)) throw Error(l(327));
                t = e.finishedWork;
                var r = e.finishedLanes;
                if (null === t) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  t === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = t.lanes | t.childLanes;
                if (
                  ((function (e, n) {
                    var t = e.pendingLanes & ~n;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= n),
                      (e.mutableReadLanes &= n),
                      (e.entangledLanes &= n),
                      (n = e.entanglements);
                    var a = e.eventTimes;
                    for (e = e.expirationTimes; 0 < t; ) {
                      var r = 31 - sn(t),
                        l = 1 << r;
                      (n[r] = 0), (a[r] = -1), (e[r] = -1), (t &= ~l);
                    }
                  })(e, i),
                  e === Po && ((Lo = Po = null), (To = 0)),
                  (0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags)) ||
                    Qo ||
                    ((Qo = !0),
                    Pc(nn, function () {
                      return kc(), null;
                    })),
                  (i = 0 !== (15990 & t.flags)),
                  0 !== (15990 & t.subtreeFlags) || i)
                ) {
                  (i = Eo.transition), (Eo.transition = null);
                  var s = xn;
                  xn = 1;
                  var o = Co;
                  (Co |= 4),
                    (So.current = null),
                    (function (e, n) {
                      if (((er = Hn), pa((e = fa())))) {
                        if ('selectionStart' in e)
                          var t = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var a =
                              (t =
                                ((t = e.ownerDocument) && t.defaultView) ||
                                window).getSelection && t.getSelection();
                            if (a && 0 !== a.rangeCount) {
                              t = a.anchorNode;
                              var r = a.anchorOffset,
                                i = a.focusNode;
                              a = a.focusOffset;
                              try {
                                t.nodeType, i.nodeType;
                              } catch (_) {
                                t = null;
                                break e;
                              }
                              var s = 0,
                                o = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              n: for (;;) {
                                for (
                                  var m;
                                  f !== t ||
                                    (0 !== r && 3 !== f.nodeType) ||
                                    (o = s + r),
                                    f !== i ||
                                      (0 !== a && 3 !== f.nodeType) ||
                                      (c = s + a),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m);
                                for (;;) {
                                  if (f === e) break n;
                                  if (
                                    (p === t && ++u === r && (o = s),
                                    p === i && ++d === a && (c = s),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              t =
                                -1 === o || -1 === c
                                  ? null
                                  : { start: o, end: c };
                            } else t = null;
                          }
                        t = t || { start: 0, end: 0 };
                      } else t = null;
                      for (
                        nr = { focusedElem: e, selectionRange: t },
                          Hn = !1,
                          Js = n;
                        null !== Js;

                      )
                        if (
                          ((e = (n = Js).child),
                          0 !== (1028 & n.subtreeFlags) && null !== e)
                        )
                          (e.return = n), (Js = e);
                        else
                          for (; null !== Js; ) {
                            n = Js;
                            try {
                              var h = n.alternate;
                              if (0 !== (1024 & n.flags))
                                switch (n.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        v = h.memoizedState,
                                        b = n.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          n.elementType === n.type
                                            ? g
                                            : gl(n.type, g),
                                          v
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var x = n.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (_) {
                              wc(n, n.return, _);
                            }
                            if (null !== (e = n.sibling)) {
                              (e.return = n.return), (Js = e);
                              break;
                            }
                            Js = n.return;
                          }
                      (h = eo), (eo = !1);
                    })(e, t),
                    go(t, e),
                    ma(nr),
                    (Hn = !!er),
                    (nr = er = null),
                    (e.current = t),
                    bo(t, e, r),
                    Ge(),
                    (Co = o),
                    (xn = s),
                    (Eo.transition = i);
                } else e.current = t;
                if (
                  (Qo && ((Qo = !1), (Yo = e), (Ko = r)),
                  0 === (i = e.pendingLanes) && ($o = null),
                  (function (e) {
                    if (ln && 'function' === typeof ln.onCommitFiberRoot)
                      try {
                        ln.onCommitFiberRoot(
                          rn,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (n) {}
                  })(t.stateNode),
                  ac(e, Je()),
                  null !== n)
                )
                  for (a = e.onRecoverableError, t = 0; t < n.length; t++)
                    a((r = n[t]).value, {
                      componentStack: r.stack,
                      digest: r.digest,
                    });
                if (Vo) throw ((Vo = !1), (e = Ho), (Ho = null), e);
                0 !== (1 & Ko) && 0 !== e.tag && kc(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === Jo
                      ? Go++
                      : ((Go = 0), (Jo = e))
                    : (Go = 0),
                  Wr();
              })(e, n, t, a);
          } finally {
            (Eo.transition = r), (xn = a);
          }
          return null;
        }
        function kc() {
          if (null !== Yo) {
            var e = _n(Ko),
              n = Eo.transition,
              t = xn;
            try {
              if (((Eo.transition = null), (xn = 16 > e ? 16 : e), null === Yo))
                var a = !1;
              else {
                if (((e = Yo), (Yo = null), (Ko = 0), 0 !== (6 & Co)))
                  throw Error(l(331));
                var r = Co;
                for (Co |= 4, Js = e.current; null !== Js; ) {
                  var i = Js,
                    s = i.child;
                  if (0 !== (16 & Js.flags)) {
                    var o = i.deletions;
                    if (null !== o) {
                      for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        for (Js = u; null !== Js; ) {
                          var d = Js;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              no(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Js = f);
                          else
                            for (; null !== Js; ) {
                              var p = (d = Js).sibling,
                                m = d.return;
                              if ((ro(d), d === u)) {
                                Js = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Js = p);
                                break;
                              }
                              Js = m;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Js = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Js = s);
                  else
                    e: for (; null !== Js; ) {
                      if (0 !== (2048 & (i = Js).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            no(9, i, i.return);
                        }
                      var b = i.sibling;
                      if (null !== b) {
                        (b.return = i.return), (Js = b);
                        break e;
                      }
                      Js = i.return;
                    }
                }
                var y = e.current;
                for (Js = y; null !== Js; ) {
                  var x = (s = Js).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== x)
                    (x.return = s), (Js = x);
                  else
                    e: for (s = y; null !== Js; ) {
                      if (0 !== (2048 & (o = Js).flags))
                        try {
                          switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                              to(9, o);
                          }
                        } catch (k) {
                          wc(o, o.return, k);
                        }
                      if (o === s) {
                        Js = null;
                        break e;
                      }
                      var _ = o.sibling;
                      if (null !== _) {
                        (_.return = o.return), (Js = _);
                        break e;
                      }
                      Js = o.return;
                    }
                }
                if (
                  ((Co = r),
                  Wr(),
                  ln && 'function' === typeof ln.onPostCommitFiberRoot)
                )
                  try {
                    ln.onPostCommitFiberRoot(rn, e);
                  } catch (k) {}
                a = !0;
              }
              return a;
            } finally {
              (xn = t), (Eo.transition = n);
            }
          }
          return !1;
        }
        function Nc(e, n, t) {
          (e = Il(e, (n = ps(0, (n = cs(t, n)), 1)), 1)),
            (n = ec()),
            null !== e && (bn(e, 1, n), ac(e, n));
        }
        function wc(e, n, t) {
          if (3 === e.tag) Nc(e, e, t);
          else
            for (; null !== n; ) {
              if (3 === n.tag) {
                Nc(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var a = n.stateNode;
                if (
                  'function' === typeof n.type.getDerivedStateFromError ||
                  ('function' === typeof a.componentDidCatch &&
                    (null === $o || !$o.has(a)))
                ) {
                  (n = Il(n, (e = ms(n, (e = cs(t, e)), 1)), 1)),
                    (e = ec()),
                    null !== n && (bn(n, 1, e), ac(n, e));
                  break;
                }
              }
              n = n.return;
            }
        }
        function jc(e, n, t) {
          var a = e.pingCache;
          null !== a && a.delete(n),
            (n = ec()),
            (e.pingedLanes |= e.suspendedLanes & t),
            Po === e &&
              (To & t) === t &&
              (4 === Io ||
              (3 === Io && (130023424 & To) === To && 500 > Je() - qo)
                ? fc(e, 0)
                : (Ro |= t)),
            ac(e, n);
        }
        function Sc(e, n) {
          0 === n &&
            (0 === (1 & e.mode)
              ? (n = 1)
              : ((n = dn), 0 === (130023424 & (dn <<= 1)) && (dn = 4194304)));
          var t = ec();
          null !== (e = Pl(e, n)) && (bn(e, n, t), ac(e, t));
        }
        function Ec(e) {
          var n = e.memoizedState,
            t = 0;
          null !== n && (t = n.retryLane), Sc(e, t);
        }
        function Cc(e, n) {
          var t = 0;
          switch (e.tag) {
            case 13:
              var a = e.stateNode,
                r = e.memoizedState;
              null !== r && (t = r.retryLane);
              break;
            case 19:
              a = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== a && a.delete(n), Sc(e, t);
        }
        function Pc(e, n) {
          return Qe(e, n);
        }
        function Lc(e, n, t, a) {
          (this.tag = e),
            (this.key = t),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Tc(e, n, t, a) {
          return new Lc(e, n, t, a);
        }
        function zc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ac(e, n) {
          var t = e.alternate;
          return (
            null === t
              ? (((t = Tc(e.tag, n, e.key, e.mode)).elementType =
                  e.elementType),
                (t.type = e.type),
                (t.stateNode = e.stateNode),
                (t.alternate = e),
                (e.alternate = t))
              : ((t.pendingProps = n),
                (t.type = e.type),
                (t.flags = 0),
                (t.subtreeFlags = 0),
                (t.deletions = null)),
            (t.flags = 14680064 & e.flags),
            (t.childLanes = e.childLanes),
            (t.lanes = e.lanes),
            (t.child = e.child),
            (t.memoizedProps = e.memoizedProps),
            (t.memoizedState = e.memoizedState),
            (t.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (t.dependencies =
              null === n
                ? null
                : { lanes: n.lanes, firstContext: n.firstContext }),
            (t.sibling = e.sibling),
            (t.index = e.index),
            (t.ref = e.ref),
            t
          );
        }
        function Ic(e, n, t, a, r, i) {
          var s = 2;
          if (((a = e), 'function' === typeof e)) zc(e) && (s = 1);
          else if ('string' === typeof e) s = 5;
          else
            e: switch (e) {
              case N:
                return Oc(t.children, r, i, n);
              case w:
                (s = 8), (r |= 8);
                break;
              case j:
                return (
                  ((e = Tc(12, t, n, 2 | r)).elementType = j), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Tc(13, t, n, r)).elementType = P), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = Tc(19, t, n, r)).elementType = L), (e.lanes = i), e
                );
              case A:
                return Dc(t, r, i, n);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case S:
                      s = 10;
                      break e;
                    case E:
                      s = 9;
                      break e;
                    case C:
                      s = 11;
                      break e;
                    case T:
                      s = 14;
                      break e;
                    case z:
                      (s = 16), (a = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ''));
            }
          return (
            ((n = Tc(s, t, n, r)).elementType = e),
            (n.type = a),
            (n.lanes = i),
            n
          );
        }
        function Oc(e, n, t, a) {
          return ((e = Tc(7, e, a, n)).lanes = t), e;
        }
        function Dc(e, n, t, a) {
          return (
            ((e = Tc(22, e, a, n)).elementType = A),
            (e.lanes = t),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Mc(e, n, t) {
          return ((e = Tc(6, e, null, n)).lanes = t), e;
        }
        function Rc(e, n, t) {
          return (
            ((n = Tc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              n
            )).lanes = t),
            (n.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            n
          );
        }
        function Uc(e, n, t, a, r) {
          (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vn(0)),
            (this.expirationTimes = vn(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vn(0)),
            (this.identifierPrefix = a),
            (this.onRecoverableError = r),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Fc(e, n, t, a, r, l, i, s, o) {
          return (
            (e = new Uc(e, n, t, s, o)),
            1 === n ? ((n = 1), !0 === l && (n |= 8)) : (n = 0),
            (l = Tc(3, null, null, n)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: a,
              isDehydrated: t,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Tl(l),
            e
          );
        }
        function qc(e, n, t) {
          var a =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == a ? null : '' + a,
            children: e,
            containerInfo: n,
            implementation: t,
          };
        }
        function Wc(e) {
          if (!e) return Er;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var n = e;
            do {
              switch (n.tag) {
                case 3:
                  n = n.stateNode.context;
                  break e;
                case 1:
                  if (zr(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              n = n.return;
            } while (null !== n);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var t = e.type;
            if (zr(t)) return Or(e, t, n);
          }
          return n;
        }
        function Bc(e, n, t, a, r, l, i, s, o) {
          return (
            ((e = Fc(t, a, !0, e, 0, l, 0, s, o)).context = Wc(null)),
            (t = e.current),
            ((l = Al((a = ec()), (r = nc(t)))).callback =
              void 0 !== n && null !== n ? n : null),
            Il(t, l, r),
            (e.current.lanes = r),
            bn(e, r, a),
            ac(e, a),
            e
          );
        }
        function Vc(e, n, t, a) {
          var r = n.current,
            l = ec(),
            i = nc(r);
          return (
            (t = Wc(t)),
            null === n.context ? (n.context = t) : (n.pendingContext = t),
            ((n = Al(l, i)).payload = { element: e }),
            null !== (a = void 0 === a ? null : a) && (n.callback = a),
            null !== (e = Il(r, n, i)) && (tc(e, r, i, l), Ol(e, r, i)),
            i
          );
        }
        function Hc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $c(e, n) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var t = e.retryLane;
            e.retryLane = 0 !== t && t < n ? t : n;
          }
        }
        function Qc(e, n) {
          $c(e, n), (e = e.alternate) && $c(e, n);
        }
        No = function (e, n, t) {
          if (null !== e)
            if (e.memoizedProps !== n.pendingProps || Pr.current) ys = !0;
            else {
              if (0 === (e.lanes & t) && 0 === (128 & n.flags))
                return (
                  (ys = !1),
                  (function (e, n, t) {
                    switch (n.tag) {
                      case 3:
                        Ps(n), pl();
                        break;
                      case 5:
                        li(n);
                        break;
                      case 1:
                        zr(n.type) && Dr(n);
                        break;
                      case 4:
                        ai(n, n.stateNode.containerInfo);
                        break;
                      case 10:
                        var a = n.type._context,
                          r = n.memoizedProps.value;
                        Sr(vl, a._currentValue), (a._currentValue = r);
                        break;
                      case 13:
                        if (null !== (a = n.memoizedState))
                          return null !== a.dehydrated
                            ? (Sr(si, 1 & si.current), (n.flags |= 128), null)
                            : 0 !== (t & n.child.childLanes)
                            ? Ds(e, n, t)
                            : (Sr(si, 1 & si.current),
                              null !== (e = Bs(e, n, t)) ? e.sibling : null);
                        Sr(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((a = 0 !== (t & n.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (a) return qs(e, n, t);
                          n.flags |= 128;
                        }
                        if (
                          (null !== (r = n.memoizedState) &&
                            ((r.rendering = null),
                            (r.tail = null),
                            (r.lastEffect = null)),
                          Sr(si, si.current),
                          a)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (n.lanes = 0), ws(e, n, t);
                    }
                    return Bs(e, n, t);
                  })(e, n, t)
                );
              ys = 0 !== (131072 & e.flags);
            }
          else (ys = !1), rl && 0 !== (1048576 & n.flags) && Zr(n, $r, n.index);
          switch (((n.lanes = 0), n.tag)) {
            case 2:
              var a = n.type;
              Ws(e, n), (e = n.pendingProps);
              var r = Tr(n, Cr.current);
              wl(n, t), (r = Ni(null, n, a, e, r, t));
              var i = wi();
              return (
                (n.flags |= 1),
                'object' === typeof r &&
                null !== r &&
                'function' === typeof r.render &&
                void 0 === r.$$typeof
                  ? ((n.tag = 1),
                    (n.memoizedState = null),
                    (n.updateQueue = null),
                    zr(a) ? ((i = !0), Dr(n)) : (i = !1),
                    (n.memoizedState =
                      null !== r.state && void 0 !== r.state ? r.state : null),
                    Tl(n),
                    (r.updater = ql),
                    (n.stateNode = r),
                    (r._reactInternals = n),
                    Hl(n, a, e, t),
                    (n = Cs(null, n, a, !0, i, t)))
                  : ((n.tag = 0),
                    rl && i && el(n),
                    xs(null, n, r, t),
                    (n = n.child)),
                n
              );
            case 16:
              a = n.elementType;
              e: {
                switch (
                  (Ws(e, n),
                  (e = n.pendingProps),
                  (a = (r = a._init)(a._payload)),
                  (n.type = a),
                  (r = n.tag =
                    (function (e) {
                      if ('function' === typeof e) return zc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = gl(a, e)),
                  r)
                ) {
                  case 0:
                    n = Ss(null, n, a, e, t);
                    break e;
                  case 1:
                    n = Es(null, n, a, e, t);
                    break e;
                  case 11:
                    n = _s(null, n, a, e, t);
                    break e;
                  case 14:
                    n = ks(null, n, a, gl(a.type, e), t);
                    break e;
                }
                throw Error(l(306, a, ''));
              }
              return n;
            case 0:
              return (
                (a = n.type),
                (r = n.pendingProps),
                Ss(e, n, a, (r = n.elementType === a ? r : gl(a, r)), t)
              );
            case 1:
              return (
                (a = n.type),
                (r = n.pendingProps),
                Es(e, n, a, (r = n.elementType === a ? r : gl(a, r)), t)
              );
            case 3:
              e: {
                if ((Ps(n), null === e)) throw Error(l(387));
                (a = n.pendingProps),
                  (r = (i = n.memoizedState).element),
                  zl(e, n),
                  Ml(n, a, null, t);
                var s = n.memoizedState;
                if (((a = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: a,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (n.updateQueue.baseState = i),
                    (n.memoizedState = i),
                    256 & n.flags)
                  ) {
                    n = Ls(e, n, a, t, (r = cs(Error(l(423)), n)));
                    break e;
                  }
                  if (a !== r) {
                    n = Ls(e, n, a, t, (r = cs(Error(l(424)), n)));
                    break e;
                  }
                  for (
                    al = cr(n.stateNode.containerInfo.firstChild),
                      tl = n,
                      rl = !0,
                      ll = null,
                      t = Jl(n, null, a, t),
                      n.child = t;
                    t;

                  )
                    (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
                } else {
                  if ((pl(), a === r)) {
                    n = Bs(e, n, t);
                    break e;
                  }
                  xs(e, n, a, t);
                }
                n = n.child;
              }
              return n;
            case 5:
              return (
                li(n),
                null === e && cl(n),
                (a = n.type),
                (r = n.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = r.children),
                tr(a, r)
                  ? (s = null)
                  : null !== i && tr(a, i) && (n.flags |= 32),
                js(e, n),
                xs(e, n, s, t),
                n.child
              );
            case 6:
              return null === e && cl(n), null;
            case 13:
              return Ds(e, n, t);
            case 4:
              return (
                ai(n, n.stateNode.containerInfo),
                (a = n.pendingProps),
                null === e ? (n.child = Gl(n, null, a, t)) : xs(e, n, a, t),
                n.child
              );
            case 11:
              return (
                (a = n.type),
                (r = n.pendingProps),
                _s(e, n, a, (r = n.elementType === a ? r : gl(a, r)), t)
              );
            case 7:
              return xs(e, n, n.pendingProps, t), n.child;
            case 8:
            case 12:
              return xs(e, n, n.pendingProps.children, t), n.child;
            case 10:
              e: {
                if (
                  ((a = n.type._context),
                  (r = n.pendingProps),
                  (i = n.memoizedProps),
                  (s = r.value),
                  Sr(vl, a._currentValue),
                  (a._currentValue = s),
                  null !== i)
                )
                  if (sa(i.value, s)) {
                    if (i.children === r.children && !Pr.current) {
                      n = Bs(e, n, t);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = n.child) && (i.return = n);
                      null !== i;

                    ) {
                      var o = i.dependencies;
                      if (null !== o) {
                        s = i.child;
                        for (var c = o.firstContext; null !== c; ) {
                          if (c.context === a) {
                            if (1 === i.tag) {
                              (c = Al(-1, t & -t)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= t),
                              null !== (c = i.alternate) && (c.lanes |= t),
                              Nl(i.return, t, n),
                              (o.lanes |= t);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === n.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(l(341));
                        (s.lanes |= t),
                          null !== (o = s.alternate) && (o.lanes |= t),
                          Nl(s, t, n),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === n) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                xs(e, n, r.children, t), (n = n.child);
              }
              return n;
            case 9:
              return (
                (r = n.type),
                (a = n.pendingProps.children),
                wl(n, t),
                (a = a((r = jl(r)))),
                (n.flags |= 1),
                xs(e, n, a, t),
                n.child
              );
            case 14:
              return (
                (r = gl((a = n.type), n.pendingProps)),
                ks(e, n, a, (r = gl(a.type, r)), t)
              );
            case 15:
              return Ns(e, n, n.type, n.pendingProps, t);
            case 17:
              return (
                (a = n.type),
                (r = n.pendingProps),
                (r = n.elementType === a ? r : gl(a, r)),
                Ws(e, n),
                (n.tag = 1),
                zr(a) ? ((e = !0), Dr(n)) : (e = !1),
                wl(n, t),
                Bl(n, a, r),
                Hl(n, a, r, t),
                Cs(null, n, a, !0, e, t)
              );
            case 19:
              return qs(e, n, t);
            case 22:
              return ws(e, n, t);
          }
          throw Error(l(156, n.tag));
        };
        var Yc =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Kc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          this._internalRoot = e;
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Zc() {}
        function eu(e, n, t, a, r) {
          var l = t._reactRootContainer;
          if (l) {
            var i = l;
            if ('function' === typeof r) {
              var s = r;
              r = function () {
                var e = Hc(i);
                s.call(e);
              };
            }
            Vc(n, i, e, r);
          } else
            i = (function (e, n, t, a, r) {
              if (r) {
                if ('function' === typeof a) {
                  var l = a;
                  a = function () {
                    var e = Hc(i);
                    l.call(e);
                  };
                }
                var i = Bc(n, a, e, 0, null, !1, 0, '', Zc);
                return (
                  (e._reactRootContainer = i),
                  (e[mr] = i.current),
                  Wa(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  i
                );
              }
              for (; (r = e.lastChild); ) e.removeChild(r);
              if ('function' === typeof a) {
                var s = a;
                a = function () {
                  var e = Hc(o);
                  s.call(e);
                };
              }
              var o = Fc(e, 0, !1, null, 0, !1, 0, '', Zc);
              return (
                (e._reactRootContainer = o),
                (e[mr] = o.current),
                Wa(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Vc(n, o, t, a);
                }),
                o
              );
            })(t, n, e, r, a);
          return Hc(i);
        }
        (Gc.prototype.render = Kc.prototype.render =
          function (e) {
            var n = this._internalRoot;
            if (null === n) throw Error(l(409));
            Vc(e, n, null, null);
          }),
          (Gc.prototype.unmount = Kc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var n = e.containerInfo;
                uc(function () {
                  Vc(null, e, null, null);
                }),
                  (n[mr] = null);
              }
            }),
          (Gc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var n = jn();
              e = { blockedOn: null, target: e, priority: n };
              for (
                var t = 0;
                t < In.length && 0 !== n && n < In[t].priority;
                t++
              );
              In.splice(t, 0, e), 0 === t && Rn(e);
            }
          }),
          (kn = function (e) {
            switch (e.tag) {
              case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                  var t = fn(n.pendingLanes);
                  0 !== t &&
                    (yn(n, 1 | t),
                    ac(n, Je()),
                    0 === (6 & Co) && ((Wo = Je() + 500), Wr()));
                }
                break;
              case 13:
                uc(function () {
                  var n = Pl(e, 1);
                  if (null !== n) {
                    var t = ec();
                    tc(n, e, 1, t);
                  }
                }),
                  Qc(e, 1);
            }
          }),
          (Nn = function (e) {
            if (13 === e.tag) {
              var n = Pl(e, 134217728);
              if (null !== n) tc(n, e, 134217728, ec());
              Qc(e, 134217728);
            }
          }),
          (wn = function (e) {
            if (13 === e.tag) {
              var n = nc(e),
                t = Pl(e, n);
              if (null !== t) tc(t, e, n, ec());
              Qc(e, n);
            }
          }),
          (jn = function () {
            return xn;
          }),
          (Sn = function (e, n) {
            var t = xn;
            try {
              return (xn = e), n();
            } finally {
              xn = t;
            }
          }),
          (ke = function (e, n, t) {
            switch (n) {
              case 'input':
                if ((X(e, t), (n = t.name), 'radio' === t.type && null != n)) {
                  for (t = e; t.parentNode; ) t = t.parentNode;
                  for (
                    t = t.querySelectorAll(
                      'input[name=' + JSON.stringify('' + n) + '][type="radio"]'
                    ),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var a = t[n];
                    if (a !== e && a.form === e.form) {
                      var r = _r(a);
                      if (!r) throw Error(l(90));
                      Q(a), X(a, r);
                    }
                  }
                }
                break;
              case 'textarea':
                le(e, t);
                break;
              case 'select':
                null != (n = t.value) && te(e, !!t.multiple, n, !1);
            }
          }),
          (Ce = cc),
          (Pe = uc);
        var nu = {
            usingClientEntryPoint: !1,
            Events: [yr, xr, _r, Se, Ee, cc],
          },
          tu = {
            findFiberByHostInstance: br,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          au = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (rn = ru.inject(au)), (ln = ru);
            } catch (ue) {}
        }
        (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nu),
          (n.createPortal = function (e, n) {
            var t =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Jc(n)) throw Error(l(200));
            return qc(e, n, null, t);
          }),
          (n.createRoot = function (e, n) {
            if (!Jc(e)) throw Error(l(299));
            var t = !1,
              a = '',
              r = Yc;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (t = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (r = n.onRecoverableError)),
              (n = Fc(e, 1, !1, null, 0, t, 0, a, r)),
              (e[mr] = n.current),
              Wa(8 === e.nodeType ? e.parentNode : e),
              new Kc(n)
            );
          }),
          (n.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var n = e._reactInternals;
            if (void 0 === n) {
              if ('function' === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(',')), Error(l(268, e)));
            }
            return (e = null === (e = He(n)) ? null : e.stateNode);
          }),
          (n.flushSync = function (e) {
            return uc(e);
          }),
          (n.hydrate = function (e, n, t) {
            if (!Xc(n)) throw Error(l(200));
            return eu(null, e, n, !0, t);
          }),
          (n.hydrateRoot = function (e, n, t) {
            if (!Jc(e)) throw Error(l(405));
            var a = (null != t && t.hydratedSources) || null,
              r = !1,
              i = '',
              s = Yc;
            if (
              (null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (r = !0),
                void 0 !== t.identifierPrefix && (i = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (s = t.onRecoverableError)),
              (n = Bc(n, null, e, 1, null != t ? t : null, r, 0, i, s)),
              (e[mr] = n.current),
              Wa(e),
              a)
            )
              for (e = 0; e < a.length; e++)
                (r = (r = (t = a[e])._getVersion)(t._source)),
                  null == n.mutableSourceEagerHydrationData
                    ? (n.mutableSourceEagerHydrationData = [t, r])
                    : n.mutableSourceEagerHydrationData.push(t, r);
            return new Gc(n);
          }),
          (n.render = function (e, n, t) {
            if (!Xc(n)) throw Error(l(200));
            return eu(null, e, n, !1, t);
          }),
          (n.unmountComponentAtNode = function (e) {
            if (!Xc(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mr] = null);
                });
              }),
              !0)
            );
          }),
          (n.unstable_batchedUpdates = cc),
          (n.unstable_renderSubtreeIntoContainer = function (e, n, t, a) {
            if (!Xc(t)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return eu(e, n, t, !1, a);
          }),
          (n.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: function (e, n, t) {
        var a = t(164);
        (n.s = a.createRoot), a.hydrateRoot;
      },
      164: function (e, n, t) {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (n) {
              console.error(n);
            }
        })(),
          (e.exports = t(463));
      },
      969: function (e, n, t) {
        var a,
          r = t(381),
          l = (a = r) && a.__esModule ? a : { default: a };
        var i = {
          tags: function (e) {
            var n = e.id,
              t = e.events,
              a = e.dataLayer,
              r = e.dataLayerName,
              i = e.preview,
              s = '&gtm_auth=' + e.auth,
              o = '&gtm_preview=' + i;
            return (
              n || (0, l.default)('GTM Id is required'),
              {
                iframe:
                  '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' +
                  n +
                  s +
                  o +
                  '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                script:
                  "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " +
                  JSON.stringify(t).slice(1, -1) +
                  "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" +
                  s +
                  o +
                  "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" +
                  r +
                  "','" +
                  n +
                  "');",
                dataLayerVar: this.dataLayer(a, r),
              }
            );
          },
          dataLayer: function (e, n) {
            return (
              '\n      window.' +
              n +
              ' = window.' +
              n +
              ' || [];\n      window.' +
              n +
              '.push(' +
              JSON.stringify(e) +
              ')'
            );
          },
        };
        e.exports = i;
      },
      419: function (e, n, t) {
        var a,
          r = t(969),
          l = (a = r) && a.__esModule ? a : { default: a };
        var i = {
          dataScript: function (e) {
            var n = document.createElement('script');
            return (n.innerHTML = e), n;
          },
          gtm: function (e) {
            var n = l.default.tags(e);
            return {
              noScript: function () {
                var e = document.createElement('noscript');
                return (e.innerHTML = n.iframe), e;
              },
              script: function () {
                var e = document.createElement('script');
                return (e.innerHTML = n.script), e;
              },
              dataScript: this.dataScript(n.dataLayerVar),
            };
          },
          initialize: function (e) {
            var n = e.gtmId,
              t = e.events,
              a = void 0 === t ? {} : t,
              r = e.dataLayer,
              l = e.dataLayerName,
              i = void 0 === l ? 'dataLayer' : l,
              s = e.auth,
              o = void 0 === s ? '' : s,
              c = e.preview,
              u = void 0 === c ? '' : c,
              d = this.gtm({
                id: n,
                events: a,
                dataLayer: r || void 0,
                dataLayerName: i,
                auth: o,
                preview: u,
              });
            r && document.head.appendChild(d.dataScript),
              document.head.insertBefore(
                d.script(),
                document.head.childNodes[0]
              ),
              document.body.insertBefore(
                d.noScript(),
                document.body.childNodes[0]
              );
          },
          dataLayer: function (e) {
            var n = e.dataLayer,
              t = e.dataLayerName,
              a = void 0 === t ? 'dataLayer' : t;
            if (window[a]) return window[a].push(n);
            var r = l.default.dataLayer(n, a),
              i = this.dataScript(r);
            document.head.insertBefore(i, document.head.childNodes[0]);
          },
        };
        e.exports = i;
      },
      264: function (e, n, t) {
        var a,
          r = t(419),
          l = (a = r) && a.__esModule ? a : { default: a };
        e.exports = l.default;
      },
      381: function (e, n) {
        Object.defineProperty(n, '__esModule', { value: !0 });
        n.default = function (e) {
          console.warn('[react-gtm]', e);
        };
      },
      374: function (e, n, t) {
        var a = t(791),
          r = Symbol.for('react.element'),
          l = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          s =
            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          o = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, n, t) {
          var a,
            l = {},
            c = null,
            u = null;
          for (a in (void 0 !== t && (c = '' + t),
          void 0 !== n.key && (c = '' + n.key),
          void 0 !== n.ref && (u = n.ref),
          n))
            i.call(n, a) && !o.hasOwnProperty(a) && (l[a] = n[a]);
          if (e && e.defaultProps)
            for (a in (n = e.defaultProps)) void 0 === l[a] && (l[a] = n[a]);
          return {
            $$typeof: r,
            type: e,
            key: c,
            ref: u,
            props: l,
            _owner: s.current,
          };
        }
        (n.Fragment = l), (n.jsx = c), (n.jsxs = c);
      },
      117: function (e, n) {
        var t = Symbol.for('react.element'),
          a = Symbol.for('react.portal'),
          r = Symbol.for('react.fragment'),
          l = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          s = Symbol.for('react.provider'),
          o = Symbol.for('react.context'),
          c = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || m);
        }
        function b() {}
        function y(e, n, t) {
          (this.props = e),
            (this.context = n),
            (this.refs = g),
            (this.updater = t || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, n) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, e, n, 'setState');
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (b.prototype = v.prototype);
        var x = (y.prototype = new b());
        (x.constructor = y), h(x, v.prototype), (x.isPureReactComponent = !0);
        var _ = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          N = { current: null },
          w = { key: !0, ref: !0, __self: !0, __source: !0 };
        function j(e, n, a) {
          var r,
            l = {},
            i = null,
            s = null;
          if (null != n)
            for (r in (void 0 !== n.ref && (s = n.ref),
            void 0 !== n.key && (i = '' + n.key),
            n))
              k.call(n, r) && !w.hasOwnProperty(r) && (l[r] = n[r]);
          var o = arguments.length - 2;
          if (1 === o) l.children = a;
          else if (1 < o) {
            for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
            l.children = c;
          }
          if (e && e.defaultProps)
            for (r in (o = e.defaultProps)) void 0 === l[r] && (l[r] = o[r]);
          return {
            $$typeof: t,
            type: e,
            key: i,
            ref: s,
            props: l,
            _owner: N.current,
          };
        }
        function S(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === t;
        }
        var E = /\/+/g;
        function C(e, n) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var n = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return n[e];
                  })
                );
              })('' + e.key)
            : n.toString(36);
        }
        function P(e, n, r, l, i) {
          var s = typeof e;
          ('undefined' !== s && 'boolean' !== s) || (e = null);
          var o = !1;
          if (null === e) o = !0;
          else
            switch (s) {
              case 'string':
              case 'number':
                o = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case t:
                  case a:
                    o = !0;
                }
            }
          if (o)
            return (
              (i = i((o = e))),
              (e = '' === l ? '.' + C(o, 0) : l),
              _(i)
                ? ((r = ''),
                  null != e && (r = e.replace(E, '$&/') + '/'),
                  P(i, n, r, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (S(i) &&
                    (i = (function (e, n) {
                      return {
                        $$typeof: t,
                        type: e.type,
                        key: n,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      r +
                        (!i.key || (o && o.key === i.key)
                          ? ''
                          : ('' + i.key).replace(E, '$&/') + '/') +
                        e
                    )),
                  n.push(i)),
              1
            );
          if (((o = 0), (l = '' === l ? '.' : l + ':'), _(e)))
            for (var c = 0; c < e.length; c++) {
              var u = l + C((s = e[c]), c);
              o += P(s, n, r, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof u)
          )
            for (e = u.call(e), c = 0; !(s = e.next()).done; )
              o += P((s = s.value), n, r, (u = l + C(s, c++)), i);
          else if ('object' === s)
            throw (
              ((n = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === n
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : n) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return o;
        }
        function L(e, n, t) {
          if (null == e) return e;
          var a = [],
            r = 0;
          return (
            P(e, a, '', '', function (e) {
              return n.call(t, e, r++);
            }),
            a
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var n = e._result;
            (n = n()).then(
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = n));
              },
              function (n) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = n));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = n));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z = { current: null },
          A = { transition: null },
          I = {
            ReactCurrentDispatcher: z,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: N,
          };
        (n.Children = {
          map: L,
          forEach: function (e, n, t) {
            L(
              e,
              function () {
                n.apply(this, arguments);
              },
              t
            );
          },
          count: function (e) {
            var n = 0;
            return (
              L(e, function () {
                n++;
              }),
              n
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!S(e))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return e;
          },
        }),
          (n.Component = v),
          (n.Fragment = r),
          (n.Profiler = i),
          (n.PureComponent = y),
          (n.StrictMode = l),
          (n.Suspense = u),
          (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (n.cloneElement = function (e, n, a) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.'
              );
            var r = h({}, e.props),
              l = e.key,
              i = e.ref,
              s = e._owner;
            if (null != n) {
              if (
                (void 0 !== n.ref && ((i = n.ref), (s = N.current)),
                void 0 !== n.key && (l = '' + n.key),
                e.type && e.type.defaultProps)
              )
                var o = e.type.defaultProps;
              for (c in n)
                k.call(n, c) &&
                  !w.hasOwnProperty(c) &&
                  (r[c] = void 0 === n[c] && void 0 !== o ? o[c] : n[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) r.children = a;
            else if (1 < c) {
              o = Array(c);
              for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
              r.children = o;
            }
            return {
              $$typeof: t,
              type: e.type,
              key: l,
              ref: i,
              props: r,
              _owner: s,
            };
          }),
          (n.createContext = function (e) {
            return (
              ((e = {
                $$typeof: o,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (n.createElement = j),
          (n.createFactory = function (e) {
            var n = j.bind(null, e);
            return (n.type = e), n;
          }),
          (n.createRef = function () {
            return { current: null };
          }),
          (n.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (n.isValidElement = S),
          (n.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (n.memo = function (e, n) {
            return { $$typeof: d, type: e, compare: void 0 === n ? null : n };
          }),
          (n.startTransition = function (e) {
            var n = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = n;
            }
          }),
          (n.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (n.useCallback = function (e, n) {
            return z.current.useCallback(e, n);
          }),
          (n.useContext = function (e) {
            return z.current.useContext(e);
          }),
          (n.useDebugValue = function () {}),
          (n.useDeferredValue = function (e) {
            return z.current.useDeferredValue(e);
          }),
          (n.useEffect = function (e, n) {
            return z.current.useEffect(e, n);
          }),
          (n.useId = function () {
            return z.current.useId();
          }),
          (n.useImperativeHandle = function (e, n, t) {
            return z.current.useImperativeHandle(e, n, t);
          }),
          (n.useInsertionEffect = function (e, n) {
            return z.current.useInsertionEffect(e, n);
          }),
          (n.useLayoutEffect = function (e, n) {
            return z.current.useLayoutEffect(e, n);
          }),
          (n.useMemo = function (e, n) {
            return z.current.useMemo(e, n);
          }),
          (n.useReducer = function (e, n, t) {
            return z.current.useReducer(e, n, t);
          }),
          (n.useRef = function (e) {
            return z.current.useRef(e);
          }),
          (n.useState = function (e) {
            return z.current.useState(e);
          }),
          (n.useSyncExternalStore = function (e, n, t) {
            return z.current.useSyncExternalStore(e, n, t);
          }),
          (n.useTransition = function () {
            return z.current.useTransition();
          }),
          (n.version = '18.2.0');
      },
      791: function (e, n, t) {
        e.exports = t(117);
      },
      184: function (e, n, t) {
        e.exports = t(374);
      },
      813: function (e, n) {
        function t(e, n) {
          var t = e.length;
          e.push(n);
          e: for (; 0 < t; ) {
            var a = (t - 1) >>> 1,
              r = e[a];
            if (!(0 < l(r, n))) break e;
            (e[a] = n), (e[t] = r), (t = a);
          }
        }
        function a(e) {
          return 0 === e.length ? null : e[0];
        }
        function r(e) {
          if (0 === e.length) return null;
          var n = e[0],
            t = e.pop();
          if (t !== n) {
            e[0] = t;
            e: for (var a = 0, r = e.length, i = r >>> 1; a < i; ) {
              var s = 2 * (a + 1) - 1,
                o = e[s],
                c = s + 1,
                u = e[c];
              if (0 > l(o, t))
                c < r && 0 > l(u, o)
                  ? ((e[a] = u), (e[c] = t), (a = c))
                  : ((e[a] = o), (e[s] = t), (a = s));
              else {
                if (!(c < r && 0 > l(u, t))) break e;
                (e[a] = u), (e[c] = t), (a = c);
              }
            }
          }
          return n;
        }
        function l(e, n) {
          var t = e.sortIndex - n.sortIndex;
          return 0 !== t ? t : e.id - n.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var i = performance;
          n.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            o = s.now();
          n.unstable_now = function () {
            return s.now() - o;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          v = 'function' === typeof setTimeout ? setTimeout : null,
          b = 'function' === typeof clearTimeout ? clearTimeout : null,
          y = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var n = a(u); null !== n; ) {
            if (null === n.callback) r(u);
            else {
              if (!(n.startTime <= e)) break;
              r(u), (n.sortIndex = n.expirationTime), t(c, n);
            }
            n = a(u);
          }
        }
        function _(e) {
          if (((g = !1), x(e), !h))
            if (null !== a(c)) (h = !0), A(k);
            else {
              var n = a(u);
              null !== n && I(_, n.startTime - e);
            }
        }
        function k(e, t) {
          (h = !1), g && ((g = !1), b(S), (S = -1)), (m = !0);
          var l = p;
          try {
            for (
              x(t), f = a(c);
              null !== f && (!(f.expirationTime > t) || (e && !P()));

            ) {
              var i = f.callback;
              if ('function' === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var s = i(f.expirationTime <= t);
                (t = n.unstable_now()),
                  'function' === typeof s
                    ? (f.callback = s)
                    : f === a(c) && r(c),
                  x(t);
              } else r(c);
              f = a(c);
            }
            if (null !== f) var o = !0;
            else {
              var d = a(u);
              null !== d && I(_, d.startTime - t), (o = !1);
            }
            return o;
          } finally {
            (f = null), (p = l), (m = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var N,
          w = !1,
          j = null,
          S = -1,
          E = 5,
          C = -1;
        function P() {
          return !(n.unstable_now() - C < E);
        }
        function L() {
          if (null !== j) {
            var e = n.unstable_now();
            C = e;
            var t = !0;
            try {
              t = j(!0, e);
            } finally {
              t ? N() : ((w = !1), (j = null));
            }
          } else w = !1;
        }
        if ('function' === typeof y)
          N = function () {
            y(L);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var T = new MessageChannel(),
            z = T.port2;
          (T.port1.onmessage = L),
            (N = function () {
              z.postMessage(null);
            });
        } else
          N = function () {
            v(L, 0);
          };
        function A(e) {
          (j = e), w || ((w = !0), N());
        }
        function I(e, t) {
          S = v(function () {
            e(n.unstable_now());
          }, t);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            h || m || ((h = !0), A(k));
          }),
          (n.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return a(c);
          }),
          (n.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = p;
            }
            var t = p;
            p = n;
            try {
              return e();
            } finally {
              p = t;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var t = p;
            p = e;
            try {
              return n();
            } finally {
              p = t;
            }
          }),
          (n.unstable_scheduleCallback = function (e, r, l) {
            var i = n.unstable_now();
            switch (
              ('object' === typeof l && null !== l
                ? (l = 'number' === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: r,
                priorityLevel: e,
                startTime: l,
                expirationTime: (s = l + s),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  t(u, e),
                  null === a(c) &&
                    e === a(u) &&
                    (g ? (b(S), (S = -1)) : (g = !0), I(_, l - i)))
                : ((e.sortIndex = s), t(c, e), h || m || ((h = !0), A(k))),
              e
            );
          }),
          (n.unstable_shouldYield = P),
          (n.unstable_wrapCallback = function (e) {
            var n = p;
            return function () {
              var t = p;
              p = n;
              try {
                return e.apply(this, arguments);
              } finally {
                p = t;
              }
            };
          });
      },
      296: function (e, n, t) {
        e.exports = t(813);
      },
    },
    n = {};
  function t(a) {
    var r = n[a];
    if (void 0 !== r) return r.exports;
    var l = (n[a] = { exports: {} });
    return e[a](l, l.exports, t), l.exports;
  }
  (t.n = function (e) {
    var n =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return t.d(n, { a: n }), n;
  }),
    (t.d = function (e, n) {
      for (var a in n)
        t.o(n, a) &&
          !t.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
    }),
    (t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = '/'),
    (function () {
      var e,
        n = t(791),
        a = t(250);
      function r(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
        return a;
      }
      function l(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != t) {
              var a,
                r,
                l = [],
                i = !0,
                s = !1;
              try {
                for (
                  t = t.call(e);
                  !(i = (a = t.next()).done) &&
                  (l.push(a.value), !n || l.length !== n);
                  i = !0
                );
              } catch (o) {
                (s = !0), (r = o);
              } finally {
                try {
                  i || null == t.return || t.return();
                } finally {
                  if (s) throw r;
                }
              }
              return l;
            }
          })(e, n) ||
          (function (e, n) {
            if (e) {
              if ('string' === typeof e) return r(e, n);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === t && e.constructor && (t = e.constructor.name),
                'Map' === t || 'Set' === t
                  ? Array.from(e)
                  : 'Arguments' === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? r(e, n)
                  : void 0
              );
            }
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var a in t)
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(e || (e = {}));
      var s = function (e) {
        return e;
      };
      var o = 'beforeunload',
        c = 'popstate';
      function u(n) {
        void 0 === n && (n = {});
        var t = n.window,
          a = void 0 === t ? document.defaultView : t,
          r = a.history;
        function l() {
          var e = h(a.location.hash.substr(1)),
            n = e.pathname,
            t = void 0 === n ? '/' : n,
            l = e.search,
            i = void 0 === l ? '' : l,
            o = e.hash,
            c = void 0 === o ? '' : o,
            u = r.state || {};
          return [
            u.idx,
            s({
              pathname: t,
              search: i,
              hash: c,
              state: u.usr || null,
              key: u.key || 'default',
            }),
          ];
        }
        var u = null;
        function g() {
          if (u) k.call(u), (u = null);
          else {
            var n = e.Pop,
              t = l(),
              a = t[0],
              r = t[1];
            if (k.length) {
              if (null != a) {
                var i = y - a;
                i &&
                  ((u = {
                    action: n,
                    location: r,
                    retry: function () {
                      C(-1 * i);
                    },
                  }),
                  C(i));
              }
            } else E(n);
          }
        }
        a.addEventListener(c, g),
          a.addEventListener('hashchange', function () {
            m(l()[1]) !== m(x) && g();
          });
        var v = e.Pop,
          b = l(),
          y = b[0],
          x = b[1],
          _ = f(),
          k = f();
        function N(e) {
          return (
            (function () {
              var e = document.querySelector('base'),
                n = '';
              if (e && e.getAttribute('href')) {
                var t = a.location.href,
                  r = t.indexOf('#');
                n = -1 === r ? t : t.slice(0, r);
              }
              return n;
            })() +
            '#' +
            ('string' === typeof e ? e : m(e))
          );
        }
        function w(e, n) {
          return (
            void 0 === n && (n = null),
            s(
              i(
                { pathname: x.pathname, hash: '', search: '' },
                'string' === typeof e ? h(e) : e,
                { state: n, key: p() }
              )
            )
          );
        }
        function j(e, n) {
          return [{ usr: e.state, key: e.key, idx: n }, N(e)];
        }
        function S(e, n, t) {
          return (
            !k.length || (k.call({ action: e, location: n, retry: t }), !1)
          );
        }
        function E(e) {
          v = e;
          var n = l();
          (y = n[0]), (x = n[1]), _.call({ action: v, location: x });
        }
        function C(e) {
          r.go(e);
        }
        null == y && ((y = 0), r.replaceState(i({}, r.state, { idx: y }), ''));
        var P = {
          get action() {
            return v;
          },
          get location() {
            return x;
          },
          createHref: N,
          push: function n(t, l) {
            var i = e.Push,
              s = w(t, l);
            if (
              S(i, s, function () {
                n(t, l);
              })
            ) {
              var o = j(s, y + 1),
                c = o[0],
                u = o[1];
              try {
                r.pushState(c, '', u);
              } catch (d) {
                a.location.assign(u);
              }
              E(i);
            }
          },
          replace: function n(t, a) {
            var l = e.Replace,
              i = w(t, a);
            if (
              S(l, i, function () {
                n(t, a);
              })
            ) {
              var s = j(i, y),
                o = s[0],
                c = s[1];
              r.replaceState(o, '', c), E(l);
            }
          },
          go: C,
          back: function () {
            C(-1);
          },
          forward: function () {
            C(1);
          },
          listen: function (e) {
            return _.push(e);
          },
          block: function (e) {
            var n = k.push(e);
            return (
              1 === k.length && a.addEventListener(o, d),
              function () {
                n(), k.length || a.removeEventListener(o, d);
              }
            );
          },
        };
        return P;
      }
      function d(e) {
        e.preventDefault(), (e.returnValue = '');
      }
      function f() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (n) {
            return (
              e.push(n),
              function () {
                e = e.filter(function (e) {
                  return e !== n;
                });
              }
            );
          },
          call: function (n) {
            e.forEach(function (e) {
              return e && e(n);
            });
          },
        };
      }
      function p() {
        return Math.random().toString(36).substr(2, 8);
      }
      function m(e) {
        var n = e.pathname,
          t = void 0 === n ? '/' : n,
          a = e.search,
          r = void 0 === a ? '' : a,
          l = e.hash,
          i = void 0 === l ? '' : l;
        return (
          r && '?' !== r && (t += '?' === r.charAt(0) ? r : '?' + r),
          i && '#' !== i && (t += '#' === i.charAt(0) ? i : '#' + i),
          t
        );
      }
      function h(e) {
        var n = {};
        if (e) {
          var t = e.indexOf('#');
          t >= 0 && ((n.hash = e.substr(t)), (e = e.substr(0, t)));
          var a = e.indexOf('?');
          a >= 0 && ((n.search = e.substr(a)), (e = e.substr(0, a))),
            e && (n.pathname = e);
        }
        return n;
      }
      var g = (0, n.createContext)(null);
      var v = (0, n.createContext)(null);
      var b = (0, n.createContext)({ outlet: null, matches: [] });
      function y(e, n) {
        if (!e) throw new Error(n);
      }
      function x(e, n, t) {
        void 0 === t && (t = '/');
        var a = C(('string' === typeof n ? h(n) : n).pathname || '/', t);
        if (null == a) return null;
        var r = _(e);
        !(function (e) {
          e.sort(function (e, n) {
            return e.score !== n.score
              ? n.score - e.score
              : (function (e, n) {
                  var t =
                    e.length === n.length &&
                    e.slice(0, -1).every(function (e, t) {
                      return e === n[t];
                    });
                  return t ? e[e.length - 1] - n[n.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  n.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(r);
        for (var l = null, i = 0; null == l && i < r.length; ++i)
          l = j(r[i], a);
        return l;
      }
      function _(e, n, t, a) {
        return (
          void 0 === n && (n = []),
          void 0 === t && (t = []),
          void 0 === a && (a = ''),
          e.forEach(function (e, r) {
            var l = {
              relativePath: e.path || '',
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: r,
              route: e,
            };
            l.relativePath.startsWith('/') &&
              (l.relativePath.startsWith(a) || y(!1),
              (l.relativePath = l.relativePath.slice(a.length)));
            var i = P([a, l.relativePath]),
              s = t.concat(l);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && y(!1), _(e.children, n, s, i)),
              (null != e.path || e.index) &&
                n.push({ path: i, score: w(i, e.index), routesMeta: s });
          }),
          n
        );
      }
      var k = /^:\w+$/,
        N = function (e) {
          return '*' === e;
        };
      function w(e, n) {
        var t = e.split('/'),
          a = t.length;
        return (
          t.some(N) && (a += -2),
          n && (a += 2),
          t
            .filter(function (e) {
              return !N(e);
            })
            .reduce(function (e, n) {
              return e + (k.test(n) ? 3 : '' === n ? 1 : 10);
            }, a)
        );
      }
      function j(e, n) {
        for (
          var t = e.routesMeta, a = {}, r = '/', l = [], i = 0;
          i < t.length;
          ++i
        ) {
          var s = t[i],
            o = i === t.length - 1,
            c = '/' === r ? n : n.slice(r.length) || '/',
            u = S(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: o },
              c
            );
          if (!u) return null;
          Object.assign(a, u.params);
          var d = s.route;
          l.push({
            params: a,
            pathname: P([r, u.pathname]),
            pathnameBase: L(P([r, u.pathnameBase])),
            route: d,
          }),
            '/' !== u.pathnameBase && (r = P([r, u.pathnameBase]));
        }
        return l;
      }
      function S(e, n) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var t = (function (e, n, t) {
            void 0 === n && (n = !1);
            void 0 === t && (t = !0);
            var a = [],
              r =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/:(\w+)/g, function (e, n) {
                    return a.push(n), '([^\\/]+)';
                  });
            e.endsWith('*')
              ? (a.push('*'),
                (r += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : (r += t ? '\\/*$' : '(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)');
            return [new RegExp(r, n ? void 0 : 'i'), a];
          })(e.path, e.caseSensitive, e.end),
          a = l(t, 2),
          r = a[0],
          i = a[1],
          s = n.match(r);
        if (!s) return null;
        var o = s[0],
          c = o.replace(/(.)\/+$/, '$1'),
          u = s.slice(1);
        return {
          params: i.reduce(function (e, n, t) {
            if ('*' === n) {
              var a = u[t] || '';
              c = o.slice(0, o.length - a.length).replace(/(.)\/+$/, '$1');
            }
            return (
              (e[n] = (function (e, n) {
                try {
                  return decodeURIComponent(e);
                } catch (t) {
                  return e;
                }
              })(u[t] || '')),
              e
            );
          }, {}),
          pathname: o,
          pathnameBase: c,
          pattern: e,
        };
      }
      function E(e, n, t) {
        var a,
          r = 'string' === typeof e ? h(e) : e,
          l = '' === e || '' === r.pathname ? '/' : r.pathname;
        if (null == l) a = t;
        else {
          var i = n.length - 1;
          if (l.startsWith('..')) {
            for (var s = l.split('/'); '..' === s[0]; ) s.shift(), (i -= 1);
            r.pathname = s.join('/');
          }
          a = i >= 0 ? n[i] : '/';
        }
        var o = (function (e, n) {
          void 0 === n && (n = '/');
          var t = 'string' === typeof e ? h(e) : e,
            a = t.pathname,
            r = t.search,
            l = void 0 === r ? '' : r,
            i = t.hash,
            s = void 0 === i ? '' : i,
            o = a
              ? a.startsWith('/')
                ? a
                : (function (e, n) {
                    var t = n.replace(/\/+$/, '').split('/');
                    return (
                      e.split('/').forEach(function (e) {
                        '..' === e
                          ? t.length > 1 && t.pop()
                          : '.' !== e && t.push(e);
                      }),
                      t.length > 1 ? t.join('/') : '/'
                    );
                  })(a, n)
              : n;
          return { pathname: o, search: T(l), hash: z(s) };
        })(r, a);
        return (
          l &&
            '/' !== l &&
            l.endsWith('/') &&
            !o.pathname.endsWith('/') &&
            (o.pathname += '/'),
          o
        );
      }
      function C(e, n) {
        if ('/' === n) return e;
        if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
        var t = e.charAt(n.length);
        return t && '/' !== t ? null : e.slice(n.length) || '/';
      }
      var P = function (e) {
          return e.join('/').replace(/\/\/+/g, '/');
        },
        L = function (e) {
          return e.replace(/\/+$/, '').replace(/^\/*/, '/');
        },
        T = function (e) {
          return e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : '';
        },
        z = function (e) {
          return e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '';
        };
      function A(e) {
        I() || y(!1);
        var t = (0, n.useContext)(g),
          a = t.basename,
          r = t.navigator,
          l = M(e),
          i = l.hash,
          s = l.pathname,
          o = l.search,
          c = s;
        if ('/' !== a) {
          var u = (function (e) {
              return '' === e || '' === e.pathname
                ? '/'
                : 'string' === typeof e
                ? h(e).pathname
                : e.pathname;
            })(e),
            d = null != u && u.endsWith('/');
          c = '/' === s ? a + (d ? '/' : '') : P([a, s]);
        }
        return r.createHref({ pathname: c, search: o, hash: i });
      }
      function I() {
        return null != (0, n.useContext)(v);
      }
      function O() {
        return I() || y(!1), (0, n.useContext)(v).location;
      }
      function D() {
        I() || y(!1);
        var e = (0, n.useContext)(g),
          t = e.basename,
          a = e.navigator,
          r = (0, n.useContext)(b).matches,
          l = O().pathname,
          i = JSON.stringify(
            r.map(function (e) {
              return e.pathnameBase;
            })
          ),
          s = (0, n.useRef)(!1);
        return (
          (0, n.useEffect)(function () {
            s.current = !0;
          }),
          (0, n.useCallback)(
            function (e, n) {
              if ((void 0 === n && (n = {}), s.current))
                if ('number' !== typeof e) {
                  var r = E(e, JSON.parse(i), l);
                  '/' !== t && (r.pathname = P([t, r.pathname])),
                    (n.replace ? a.replace : a.push)(r, n.state);
                } else a.go(e);
            },
            [t, a, i, l]
          )
        );
      }
      function M(e) {
        var t = (0, n.useContext)(b).matches,
          a = O().pathname,
          r = JSON.stringify(
            t.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, n.useMemo)(
          function () {
            return E(e, JSON.parse(r), a);
          },
          [e, r, a]
        );
      }
      function R(e, t) {
        return (
          void 0 === t && (t = []),
          null == e
            ? null
            : e.reduceRight(function (a, r, l) {
                return (0,
                n.createElement)(b.Provider, { children: void 0 !== r.route.element ? r.route.element : a, value: { outlet: a, matches: t.concat(e.slice(0, l + 1)) } });
              }, null)
        );
      }
      function U(e) {
        y(!1);
      }
      function F(t) {
        var a = t.basename,
          r = void 0 === a ? '/' : a,
          l = t.children,
          i = void 0 === l ? null : l,
          s = t.location,
          o = t.navigationType,
          c = void 0 === o ? e.Pop : o,
          u = t.navigator,
          d = t.static,
          f = void 0 !== d && d;
        I() && y(!1);
        var p = L(r),
          m = (0, n.useMemo)(
            function () {
              return { basename: p, navigator: u, static: f };
            },
            [p, u, f]
          );
        'string' === typeof s && (s = h(s));
        var b = s,
          x = b.pathname,
          _ = void 0 === x ? '/' : x,
          k = b.search,
          N = void 0 === k ? '' : k,
          w = b.hash,
          j = void 0 === w ? '' : w,
          S = b.state,
          E = void 0 === S ? null : S,
          P = b.key,
          T = void 0 === P ? 'default' : P,
          z = (0, n.useMemo)(
            function () {
              var e = C(_, p);
              return null == e
                ? null
                : { pathname: e, search: N, hash: j, state: E, key: T };
            },
            [p, _, N, j, E, T]
          );
        return null == z
          ? null
          : (0, n.createElement)(
              g.Provider,
              { value: m },
              (0, n.createElement)(v.Provider, {
                children: i,
                value: { location: z, navigationType: c },
              })
            );
      }
      function q(e) {
        var t = e.children,
          a = e.location;
        return (function (e, t) {
          I() || y(!1);
          var a,
            r = (0, n.useContext)(b).matches,
            l = r[r.length - 1],
            i = l ? l.params : {},
            s = (l && l.pathname, l ? l.pathnameBase : '/'),
            o = (l && l.route, O());
          if (t) {
            var c,
              u = 'string' === typeof t ? h(t) : t;
            '/' === s ||
              (null == (c = u.pathname) ? void 0 : c.startsWith(s)) ||
              y(!1),
              (a = u);
          } else a = o;
          var d = a.pathname || '/',
            f = x(e, { pathname: '/' === s ? d : d.slice(s.length) || '/' });
          return R(
            f &&
              f.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, i, e.params),
                  pathname: P([s, e.pathname]),
                  pathnameBase:
                    '/' === e.pathnameBase ? s : P([s, e.pathnameBase]),
                });
              }),
            r
          );
        })(W(t), a);
      }
      function W(e) {
        var t = [];
        return (
          n.Children.forEach(e, function (e) {
            if ((0, n.isValidElement)(e))
              if (e.type !== n.Fragment) {
                e.type !== U && y(!1);
                var a = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (a.children = W(e.props.children)),
                  t.push(a);
              } else t.push.apply(t, W(e.props.children));
          }),
          t
        );
      }
      function B() {
        return (
          (B =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              }
              return e;
            }),
          B.apply(this, arguments)
        );
      }
      function V(e, n) {
        if (null == e) return {};
        var t,
          a,
          r = {},
          l = Object.keys(e);
        for (a = 0; a < l.length; a++)
          (t = l[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
        return r;
      }
      var H = ['onClick', 'reloadDocument', 'replace', 'state', 'target', 'to'];
      function $(e) {
        var t = e.basename,
          a = e.children,
          r = e.window,
          i = (0, n.useRef)();
        null == i.current && (i.current = u({ window: r }));
        var s = i.current,
          o = l((0, n.useState)({ action: s.action, location: s.location }), 2),
          c = o[0],
          d = o[1];
        return (
          (0, n.useLayoutEffect)(
            function () {
              return s.listen(d);
            },
            [s]
          ),
          (0, n.createElement)(F, {
            basename: t,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: s,
          })
        );
      }
      var Q = (0, n.forwardRef)(function (e, t) {
        var a = e.onClick,
          r = e.reloadDocument,
          l = e.replace,
          i = void 0 !== l && l,
          s = e.state,
          o = e.target,
          c = e.to,
          u = V(e, H),
          d = A(c),
          f = (function (e, t) {
            var a = void 0 === t ? {} : t,
              r = a.target,
              l = a.replace,
              i = a.state,
              s = D(),
              o = O(),
              c = M(e);
            return (0, n.useCallback)(
              function (n) {
                if (
                  0 === n.button &&
                  (!r || '_self' === r) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(n)
                ) {
                  n.preventDefault();
                  var t = !!l || m(o) === m(c);
                  s(e, { replace: t, state: i });
                }
              },
              [o, s, c, l, i, r, e]
            );
          })(c, { replace: i, state: s, target: o });
        return (0, n.createElement)(
          'a',
          B({}, u, {
            href: d,
            onClick: function (e) {
              a && a(e), e.defaultPrevented || r || f(e);
            },
            ref: t,
            target: o,
          })
        );
      });
      var Y = t(184);
      function K() {
        return (0, Y.jsx)(Y.Fragment, {
          children: (0, Y.jsxs)('footer', {
            className: 'footer',
            children: [
              (0, Y.jsxs)('section', {
                className: 'footer__copy',
                children: [
                  (0, Y.jsx)('h2', {
                    className: 'footer__title',
                    children: '\xa9 August 2022 ',
                  }),
                  (0, Y.jsx)('a', {
                    className: 'footer__link',
                    href: 'https://aliciaapadron.github.io/portfolio/#/',
                    target: '_blank',
                    title: 'Ir al creador',
                    rel: 'noreferrer',
                    children: 'Alicia Padr\xf3n',
                  }),
                ],
              }),
              (0, Y.jsxs)('ul', {
                className: 'footer__ul',
                children: [
                  (0, Y.jsx)(Q, {
                    to: '/privacypolicy',
                    className: 'footer__link',
                    title: 'Pol\xedtica de privacidad',
                    children: (0, Y.jsx)('li', {
                      className: 'footer__list--item',
                      children: 'Pol\xedtica de privacidad',
                    }),
                  }),
                  (0, Y.jsx)('span', {
                    className: 'footer__line',
                    children: '|',
                  }),
                  (0, Y.jsx)(Q, {
                    to: '/privacycookies',
                    className: 'footer__link',
                    title: 'Pol\xedtica de cookies',
                    children: (0, Y.jsx)('li', {
                      className: 'footer__list--item',
                      children: 'Pol\xedtica de cookies',
                    }),
                  }),
                  (0, Y.jsx)('span', {
                    className: 'footer__line',
                    children: '|',
                  }),
                  (0, Y.jsx)(Q, {
                    to: '/legaladvice',
                    className: 'footer__link',
                    title: 'Aviso legal',
                    children: (0, Y.jsx)('li', {
                      className: 'footer__list--item',
                      children: 'Aviso legal',
                    }),
                  }),
                  (0, Y.jsx)('span', {
                    className: 'footer__line',
                    children: '|',
                  }),
                  (0, Y.jsx)('a', {
                    href: 'https://www.ozoniaconsultores.es/lopdweb/?p_id=508',
                    className: 'footer__link',
                    title: 'Protecci\xf3n de datos',
                    children: (0, Y.jsx)('li', {
                      className: 'footer__list--item',
                      children: 'Protecci\xf3n de datos',
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var G = t.p + 'static/media/minilogo.0e6f82ef1e5b88310d96.png';
      function J() {
        var e = l((0, n.useState)(!1), 2),
          t = e[0],
          a = e[1];
        return (0, Y.jsx)(Y.Fragment, {
          children: (0, Y.jsxs)('header', {
            className: 'header',
            children: [
              (0, Y.jsx)('section', {
                className: 'container',
                children: (0, Y.jsx)(Q, {
                  to: '/',
                  children: (0, Y.jsx)('img', {
                    className: 'container__minilogo',
                    src: G,
                    alt: 'Ir a la HOME',
                    title: 'Ir a la HOME',
                  }),
                }),
              }),
              (0, Y.jsxs)('div', {
                className: 'header__containermenu',
                children: [
                  (0, Y.jsx)('button', {
                    className: 'header__containermenu--button',
                    onClick: function () {
                      a(!t);
                    },
                    children: (0, Y.jsx)('svg', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      width: '16',
                      height: '16',
                      fill: 'currentColor',
                      className: 'menu',
                      viewBox: '0 0 16 16',
                      children: (0, Y.jsx)('path', {
                        fillRule: 'evenodd',
                        d: 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z',
                      }),
                    }),
                  }),
                  (0, Y.jsx)('h1', {
                    className: 'header__containermenu--title',
                    children: 'c.padron salud mental',
                  }),
                ],
              }),
              (0, Y.jsx)('h2', {
                className: 'header__subtitle',
                children: 'Acompa\xf1amiento neurodivergente',
              }),
              (0, Y.jsx)('nav', {
                className: 'nav',
                children: (0, Y.jsxs)('ul', {
                  className: 'nav__list '.concat(t ? 'isActive' : ''),
                  children: [
                    (0, Y.jsx)(Q, {
                      to: '/articles',
                      className: 'nav__link',
                      title: 'Ir a ART\xcdCULOS',
                      children: (0, Y.jsx)('li', {
                        className: 'nav__list--item',
                        children: 'art\xedculos',
                      }),
                    }),
                    (0, Y.jsx)(Q, {
                      to: '/courses',
                      className: 'nav__link',
                      title: 'Ir a TARIFAS',
                      children: (0, Y.jsx)('li', {
                        className: 'nav__list--item',
                        children: 'tarifas',
                      }),
                    }),
                    (0, Y.jsx)(Q, {
                      to: '/aboutme',
                      className: 'nav__link',
                      title: 'Ir a SOBRE M\xcd',
                      children: (0, Y.jsx)('li', {
                        className: 'nav__list--item',
                        children: 'sobre m\xed',
                      }),
                    }),
                    (0, Y.jsx)(Q, {
                      to: '/contact',
                      className: 'nav__link',
                      title: 'Ir a CONTACTO',
                      children: (0, Y.jsx)('li', {
                        className: 'nav__list--item',
                        children: 'contacto',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var X = t.p + 'static/media/fotokiti-bn.8df8b83c657183ade41b.png',
        Z = t.p + 'static/media/logokiti.0e6f82ef1e5b88310d96.png';
      function ee() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsxs)('section', {
              className: 'piccontainer',
              children: [
                (0, Y.jsx)('p', {
                  className: 'description',
                  children:
                    'Soy Cris, asesora en Neurodivergencias y terapeuta experta en Autismo, (T)DAH y AACC.',
                }),
                (0, Y.jsx)('img', {
                  className: 'piccontainer__personalpicture',
                  src: X,
                  alt: 'Foto personal',
                  title: 'Foto personal',
                }),
                (0, Y.jsx)('img', {
                  className: 'piccontainer__logo',
                  src: Z,
                  alt: 'Logo cpadronsaludmental',
                  title: 'Logo cpadronsaludmental',
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      function ne() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsxs)('section', {
              className: 'artsection',
              children: [
                (0, Y.jsx)('h2', {
                  className: 'artsection__title',
                  children:
                    'Aqu\xed podr\xe1s encontrar links a mis trabajos y art\xedculos.',
                }),
                (0, Y.jsxs)('nav', {
                  className: 'artsection__nav',
                  children: [
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/p/Cjjz4MLD_2t/?igshid=MDJmNzVkMjY%3D',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'Clase sobre Neurodivergencia y Nutrici\xf3n. ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-Post de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: 'Instagram',
                            }),
                            ' ',
                            'Neurodivergencia y Nutrici\xf3n-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/tv/ChAm4YgprvH/?igshid=YmMyMTA2M2Y%3D',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'Mi Autismo y yo. ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-Directo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: 'Instagram',
                            }),
                            ' sobre el autismo-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/p/Cgz9mByOKJ3/?igshid=MDJmNzVkMjY=',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'Autismo en primera persona. ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-Post de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: 'Instagram',
                            }),
                            ' sobre el autismo-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/p/CdkZVX-j30O/?igshid=MDJmNzVkMjY%3D',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'Con las redes sociales rompemos la brecha de acceso a la salud mental. ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-Art\xedculo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: 'Autiblog',
                            }),
                            ' sobre el diagnostico autista-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://autiblog.bio.link/',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'Link a ',
                        (0, Y.jsx)('span', {
                          className: 'underline',
                          children: 'Autiblog',
                        }),
                        ' para leer el anterior art\xedculo completo.',
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.rtve.es/noticias/20210831/positividad-toxica/2165823.shtml',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'La positividad t\xf3xica: "Una manera bonita de decir \'invalida tus emociones y se autoexigente.\'". ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-Art\xedculo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: 'RTVE',
                            }),
                            ' sobre la positividad t\xf3xica-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.vice.com/es/article/4avj5d/que-es-la-positividad-toxica-y-como-nos-afecta',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        '\xbfQu\xe9 es la positividad t\xf3xica y c\xf3mo nos afecta? Esa falsa felicidad que vemos todos los d\xedas en las redes sociales de influencers nos est\xe1 causando depresi\xf3n y ansiedad. ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-Art\xedculo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: 'VICE',
                            }),
                            ' sobre la positividad t\xf3xica-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'http://70.36.107.45:3000/como-afecta-fingir-que-estamos-bien-el-independiente.html',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        '\xbfC\xf3mo afecta fingir que estamos bien? ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-Art\xedculo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: 'El Independiente',
                            }),
                            ' ',
                            'sobre la positividad t\xf3xica-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/p/COInMatCA6c/?igshid=MDJmNzVkMjY=',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'Afrontar un TCA: \u201cSi tienes el privilegio, el primer paso es ir a terapia porque es mucho m\xe1s f\xe1cil si no lo haces sola.\u201d. ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-V\xeddeo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: '@cuerposconhistoria',
                            }),
                            ' ',
                            'sobre el TCA-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/p/COnJf5zindH/?igshid=MDJmNzVkMjY=',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'TCA (Transtorno por atrac\xf3n). ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-V\xeddeo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: '@cuerposconhistoria',
                            }),
                            ' ',
                            'sobre el TCA-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/p/CPBcz4lCxh_/?igshid=MDJmNzVkMjY=',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        '"Ninguna caracter\xedstica f\xedsica excluye o significa que una persona est\xe9 padeciendo un TCA" ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-V\xeddeo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: '@cuerposconhistoria',
                            }),
                            ' ',
                            'sobre el TCA-',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('a', {
                      className: 'artsection__nav--article',
                      href: 'https://www.instagram.com/p/CPYZPCcCcAX/?igshid=MDJmNzVkMjY=',
                      target: '_blank',
                      rel: 'noreferrer',
                      title: 'Ir al art\xedculo',
                      children: [
                        'Tipos de alimentos que se consumen en un atrac\xf3n. ',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsxs)('span', {
                          className: 'artsection__nav--span',
                          children: [
                            '-V\xeddeo de ',
                            (0, Y.jsx)('span', {
                              className: 'underline',
                              children: '@cuerposconhistoria',
                            }),
                            ' ',
                            'sobre el TCA-',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      function te() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsxs)('section', {
              className: 'coursection',
              children: [
                (0, Y.jsxs)('article', {
                  className: 'coursection__title',
                  children: [
                    (0, Y.jsx)('a', {
                      className: 'emailLink',
                      href: 'mailto: cpadronsaludmental@gmail.com',
                      title: 'Rellena el formulario',
                      children: 'Escr\xedbeme aqu\xed',
                    }),
                    ' ',
                    (0, Y.jsx)('p', {
                      className: 'coursection__title--subtitle',
                      children:
                        'para tu primer Acompa\xf1amiento y cu\xe9ntame:',
                    }),
                    (0, Y.jsxs)('ul', {
                      className: 'coursection__listdata',
                      children: [
                        (0, Y.jsx)('li', {
                          className: 'coursection__listdata--item',
                          children: 'Diferencia horaria respecto a Espa\xf1a',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'coursection__listdata--item',
                          children: 'Disponibilidad horaria para citarnos',
                        }),
                      ],
                    }),
                    (0, Y.jsx)('p', {
                      className: 'coursection__text',
                      children:
                        'Y yo te responder\xe9 con las citas disponibles y los datos de pago',
                    }),
                  ],
                }),
                (0, Y.jsxs)('ul', {
                  className: 'coursection__list',
                  children: [
                    (0, Y.jsxs)('li', {
                      className: 'coursection__list--item display',
                      children: [
                        'Quiero dejar de hacer masking.',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'price',
                          children: 'Precio: 70\u20ac. ',
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('li', {
                      className: 'coursection__list--item display',
                      children: [
                        'C\xf3mo ser (T)DAH/(T)EA en el mundo laboral y no morir en el intento.',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'price',
                          children: 'Precio: 100\u20ac. ',
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('li', {
                      className: 'coursection__list--item display',
                      children: [
                        'Relaciones sexo-afectivas y (T)DAH/(T)EA.',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'price',
                          children: 'Precio: 100\u20ac. ',
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('li', {
                      className: 'coursection__list--item display',
                      children: [
                        'Alimentaci\xf3n y (T)DAH/(T)EA.',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'price',
                          children: 'Precio: 100\u20ac. ',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsxs)('section', {
                  className: 'aboutmelist',
                  children: [
                    (0, Y.jsx)('p', {
                      className: 'aboutmelist__text',
                      children:
                        'Atiendo online y mis servicios son los siguientes:',
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('ul', {
                      className: 'aboutmelist__list',
                      children: [
                        (0, Y.jsx)('h2', {
                          className: 'aboutmelist__list--title',
                          children:
                            'Personas Neurodivergentes o que sospechen serlo:',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children:
                            'Acompa\xf1amiento Emocional desde el paradigma de las Neurodivergencias',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Autoconocimiento como Autista/(T)DAH',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children:
                            'Preveci\xf3n y gesti\xf3n de Crisis (Meltdown y Shutdown)',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Sexualidad',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Alimentaci\xf3n',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Derivaci\xf3n para el Diagn\xf3stico',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Autocuidado ',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Maternidad y preparaci\xf3n al embarazo',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Identificaci\xf3n de retos y fortalezas',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Detecci\xf3n de neurodivergencias',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Derivaci\xf3n para el diagn\xf3stico',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Dificultades sensoriales',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Dejar de hacer masking',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Preparaci\xf3n del diagn\xf3stico formal',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Informe para diagn\xf3stico formal',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Asesoramiento laboral',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Adaptaciones y herramientas de gesti\xf3n',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Relaciones sociales',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children:
                            'Preparaci\xf3n de retos (viajes, ex\xe1menes, entrevistas...)',
                        }),
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('ul', {
                      className: 'aboutmelist__list',
                      children: [
                        (0, Y.jsx)('h2', {
                          className: 'aboutmelist__list--title',
                          children: 'Profesionales',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children: 'Consultas de caso puntuales',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'aboutmelist__list--item',
                          children:
                            'Grupo de Consultas de caso (grupo reducido)',
                        }),
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                  ],
                }),
                (0, Y.jsxs)('section', {
                  className: 'explanation',
                  children: [
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'Durante nuestras sesiones te acompa\xf1ar\xe9 a',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'conocer tu identidad detr\xe1s del ',
                        }),
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'masking , a respetar tus ',
                        }),
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'necesidades sensoriales , a ',
                        }),
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children:
                            'practicar la compasi\xf3n contigo misma/o/e y a relacionarte exitosamente con tus seres queridos.',
                        }),
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsx)('p', {
                      className: 'italic underline',
                      children: '\xbfC\xf3mo funciona?',
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'El primer paso es escribir a este',
                        ' ',
                        (0, Y.jsx)('a', {
                          className: 'contactlink writeme__link',
                          href: 'mailto: cpadronsaludmental@gmail.com',
                          title: 'Rellena el formulario',
                          target: '_blank',
                          rel: 'noreferrer',
                          children: 'email',
                        }),
                        ' ',
                        'coment\xe1ndome tu',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'disponibilidad horaria y ',
                        }),
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'diferencia horaria ',
                        }),
                        ' respecto a Espa\xf1a para agendar una ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'cita .',
                        }),
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsx)('p', {
                      className: 'italic underline',
                      children: '\xbfCu\xe1les son los precios?',
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('ul', {
                      className: 'aboutmelist__list',
                      children: [
                        (0, Y.jsxs)('li', {
                          className: 'aboutmelist__list--item',
                          children: [
                            'Una cita por ',
                            (0, Y.jsx)('span', {
                              className: 'green',
                              children: '80\u20ac (66,11+IVA)',
                            }),
                            '.',
                          ],
                        }),
                        (0, Y.jsxs)('li', {
                          className: 'aboutmelist__list--item',
                          children: [
                            'Pack de ',
                            (0, Y.jsx)('span', {
                              className: 'green',
                              children: '2 citas ',
                            }),
                            ' por',
                            ' ',
                            (0, Y.jsx)('span', {
                              className: 'green',
                              children: '160\u20ac (132,23+IVA).',
                            }),
                          ],
                        }),
                        (0, Y.jsxs)('li', {
                          className: 'aboutmelist__list--item',
                          children: [
                            'Pack de ',
                            (0, Y.jsx)('span', {
                              className: 'green',
                              children: '4 citas ',
                            }),
                            ' por',
                            ' ',
                            (0, Y.jsx)('span', {
                              className: 'green',
                              children: ' 310\u20ac (256,2+IVA)',
                            }),
                            ', ahorras 10\u20ac.',
                          ],
                        }),
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsx)('p', {
                      children: (0, Y.jsx)('span', {
                        className: 'bold',
                        children:
                          'M\xe9todos de pago : BIZUM y Transferencia para Espa\xf1a, Stripe para el resto de pa\xedses.',
                      }),
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsx)('p', {
                      className: 'italic underline',
                      children: '\xbfC\xf3mo solemos trabajar?',
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'Las citas se realizan mediante',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'google Meet.',
                        }),
                        ' Cuando reciba el pago de la cita, te enviar\xe9 el',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'link de acceso. ',
                        }),
                        ' Adem\xe1s la cita se a\xf1adir\xe1 autom\xe1ticamente a tu',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'Calendario de Google',
                        }),
                        '.',
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'La frecuencia recomendada para vernos es',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'una vez a la semana',
                        }),
                        ' , sobre todo al principio, ya que durante esas citas sentaremos las bases de nuestra relaci\xf3n: crear el v\xednculo, conocerte\u2026',
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'Posteriormente y en funci\xf3n de tus intereses las citas pueden',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'espaciarse',
                        }),
                        '.',
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'Antes de nuestra ',
                        }),
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'primera cita , te enviar\xe9 un ',
                        }),
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'formulario que leer\xe9 antes de',
                        }),
                        ' ',
                        'conocernos.',
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'La duraci\xf3n del proceso depende de',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'tus necesidades y objetivos',
                        }),
                        ', generalmente para una primera detecci\xf3n de',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children:
                            'Neurodivergencias, identificar retos y fortalezas, prevenci\xf3n de crisis',
                        }),
                        ', etc, podr\xedamos usar ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: '10 citas',
                        }),
                        ' aprox.',
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'Agilizaremos el trabajo mediante',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'Tareas',
                        }),
                        ' entre citas (no son obligatorias).',
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'Tendr\xe1s ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'acceso ilimitado',
                        }),
                        ' a comunicarte conmigo por ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'mail',
                        }),
                        ' , para contarme inquietudes, desahogarte\u2026',
                      ],
                    }),
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsxs)('p', {
                      children: [
                        'Te brindar\xe9 informaci\xf3n sobre las v\xedas para conseguir el',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'Diagn\xf3stico Formal',
                        }),
                        ' para que puedas elegir la opci\xf3n que m\xe1s se adapte a ti.',
                        (0, Y.jsx)('br', {}),
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: ' Prepararemos juntas/os/es',
                        }),
                        ' el proceso:',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'cu\xe1ntas citas',
                        }),
                        ' suelen ser, cu\xe1les suelen ser',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children:
                            'm\xe1s duras a nivel cognitivo y emocional',
                        }),
                        ', herramientas de',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'regulaci\xf3n sobre el proceso',
                        }),
                        ', explicaci\xf3n del ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'informe diagn\xf3stico',
                        }),
                        '... Adem\xe1s, te explicar\xe9 el proceso de',
                        ' ',
                        (0, Y.jsx)('span', {
                          className: 'bold',
                          children: 'solicitud de Discapacidad',
                        }),
                        ' y cu\xe1les podr\xedan ser los retos.',
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)('div', {
                  className: 'writeme',
                  children: (0, Y.jsx)('a', {
                    className: 'contactlink writeme__link',
                    href: 'mailto: cpadronsaludmental@gmail.com',
                    title: 'Rellena el formulario',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: 'Escr\xedbeme para tu primer Acompa\xf1amiento.',
                  }),
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      var ae = t.p + 'static/media/eli.794d6aba8e44884bcf32.png';
      function re() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsxs)('section', {
              className: 'aboutsection',
              children: [
                (0, Y.jsxs)('h2', {
                  className: 'aboutsection__title',
                  children: ['Con\xf3ceme ', (0, Y.jsx)('br', {})],
                }),
                (0, Y.jsx)('img', {
                  className: 'aboutsection__img',
                  src: ae,
                  alt: 'Imagen de Cris y Eli',
                  title: 'Imagen de Cris y Eli',
                }),
                ' ',
              ],
            }),
            (0, Y.jsxs)('section', {
              className: 'aboutmesection',
              children: [
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Soy Cris, mujer Autista, Hiperactiva y Altas Capacidades. Soy',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Experta en Autismo, (T)DAH y AACC',
                    }),
                    ' y',
                    ' ',
                    'adem\xe1s de',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Educadora/Mediadora Afectivo-sexual',
                    }),
                    ',',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Educadora Familiar',
                    }),
                    ' ,',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Especialista en Terapias Contextuales',
                    }),
                    ' y de ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Tercera Generaci\xf3n, Experta en Duelo',
                    }),
                    ' ',
                    'y estoy formada en ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Apego y Trauma',
                    }),
                    ' desde un enfoque integrador (TEP, ASI...)',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Acompa\xf1o a personas Autistas y/o (T)TDAH a',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'conocer su identidad',
                    }),
                    ' detr\xe1s del',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'masking',
                    }),
                    ', a respetar sus',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'necesidades sensoriales',
                    }),
                    ', a',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'practicar la compasi\xf3n',
                    }),
                    ' con si mismos/as/es y a ',
                    (0, Y.jsx)('spn', {
                      className: 'bold',
                      children: 'relacionarse exitosamente',
                    }),
                    ' ',
                    'con sus seres queridos.',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Mi objetivo es ofrecer un servicio',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children:
                        'sin jerarquizar, de Neurodivergente a Neurodivergente.',
                    }),
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Soy especialista en Neurodivergencias y estoy formada en',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children:
                        'Altas Capacidades (AACC), Doble Excepcionalidad (2e) y Excepcionalidad m\xfaltiple, Trastornos de la Conducta Alimentaria (TCA)',
                    }),
                    ' ',
                    'y otras ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'co-ocurrencias',
                    }),
                    ' con el Autismo y el (T)DAH.',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Durante mis ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'a\xf1os de experiencia',
                    }),
                    ' he acompa\xf1ado a ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'personas Autistas y (T)DAH',
                    }),
                    ' ',
                    'a',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children:
                        'encontrarse a si mismos/as/es en la adultez, comprenderse, respetarse y priorizar sus necesidades',
                    }),
                    '.',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Acompa\xf1o desde un enfoque',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: ' Informado en Apego y Trauma',
                    }),
                    ',',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: ' LGTB+ friendly',
                    }),
                    ', enfoque',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'de g\xe9nero',
                    }),
                    ',',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'antigord\xf3fobo',
                    }),
                    ', aliada',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'antirracista',
                    }),
                    ' y',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'respetuosa',
                    }),
                    ' con las',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'espiritualidades',
                    }),
                    '.',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsx)('p', {
                  className: 'aboutmesection__text italic underline',
                  children: '\xbfM\xe1s personal?',
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Conseguir mi diagn\xf3stico de Autismo y (T)DAH a los 26 a\xf1os me hizo repasar el trauma que conlleva la falta de diagn\xf3stico temprano. Lo que me impuls\xf3 a ofrecerle a otros/as/es el',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Soporte y el Acompa\xf1amiento',
                    }),
                    ' que yo hubiera deseado.',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'A los 16 a\xf1os comenc\xe9 mi',
                    ' ',
                    (0, Y.jsxs)('span', {
                      className: 'bold',
                      children: [
                        'odisea por los Servicios de Salud Mental',
                        ' ',
                      ],
                    }),
                    'p\xfablicos:',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children:
                        'sobremedicalizaci\xf3n, mala praxis, atenci\xf3n deficiente',
                    }),
                    '\u2026 No me fue mejor por lo privado. En total pas\xe9 por',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: '2 psiquitras y 5 psicos',
                    }),
                    ', pero lo que',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'rompi\xf3 la Brecha de Acceso',
                    }),
                    ' a mi',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'diagn\xf3stico',
                    }),
                    ' fueron las',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Redes Sociales',
                    }),
                    '. Trasteando sobre la',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Alta Sensibilidad',
                    }),
                    ' (High Sensitivity) llegu\xe9 a la ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Hiper Sensibilidad Autista',
                    }),
                    '. Ah\xed me dej\xe9 llevar por Hiperfocos de',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'informaci\xf3n',
                    }),
                    ' sobre',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'otras mujeres y personas No Binarias',
                    }),
                    ' ',
                    '(socializadas como mujeres) ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'autistas',
                    }),
                    ', en cuyas caracter\xedsticas ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'me vi reflejada',
                    }),
                    '. Lo que me llev\xf3 al ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'diagn\xf3stico oficial',
                    }),
                    '.',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'Encontrarme como Mujer Autista, (T)DAH y AACC',
                    }),
                    ' ',
                    'le dio ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'sentido a mis vivencias',
                    }),
                    ' y me ayud\xf3 a',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'comprenderme',
                    }),
                    '. Me ha impulsado a',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'dejar el masking',
                    }),
                    ', ser',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'compasiva',
                    }),
                    ' conmigo misma y',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'honrar mis necesidades',
                    }),
                    '. As\xed como a',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'identificar',
                    }),
                    ' los',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'precipitantes',
                    }),
                    ' de mis colapsos',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'sensoriales',
                    }),
                    ', a entender mi',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'maternidad',
                    }),
                    ' y mis',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'relaciones sociales',
                    }),
                    '.',
                  ],
                }),
                (0, Y.jsx)('br', {}),
                (0, Y.jsxs)('p', {
                  className: 'aboutmesection__text',
                  children: [
                    'Desde mi enfoque',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'De Neurodivergente a Neurodivergente ',
                    }),
                    ' ',
                    'procuro',
                    ' ',
                    (0, Y.jsx)('span', {
                      className: 'bold',
                      children: 'promocionar el trabajo de nuestra comunidad',
                    }),
                    '. Por ello el ',
                    (0, Y.jsx)('span', { className: 'bold', children: 'Logo' }),
                    ' de mi empresa lo realiz\xf3',
                    ' ',
                    (0, Y.jsx)('a', {
                      className: 'contactlink',
                      href: 'https://www.instagram.com/felicityofnow1/=',
                      title: 'Ir a Andrea',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Andrea',
                    }),
                    ' ',
                    'y la web',
                    ' ',
                    (0, Y.jsx)('a', {
                      className: 'contactlink',
                      href: 'https://aliciaapadron.github.io/portfolio/#/',
                      title: 'Ir a Alicia',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Alicia',
                    }),
                    '. Adem\xe1s en mis historias destacadas puedes encontrar',
                    ' ',
                    (0, Y.jsx)('a', {
                      className: 'contactlink',
                      href: 'https://instagram.com/c.padronsaludmental?igshid=YmMyMTA2M2Y=',
                      title: 'Ir mi instagram',
                      target: '_blank',
                      rel: 'noreferrer',
                      children:
                        'Emprendimientos de j\xf3venes Autistas y (T)DAH',
                    }),
                    '.',
                    (0, Y.jsx)('br', {}),
                    (0, Y.jsx)('br', {}),
                  ],
                }),
                (0, Y.jsx)('div', {
                  className: 'writeme',
                  children: (0, Y.jsx)('a', {
                    className: 'contactlink writeme__link',
                    href: 'mailto: cpadronsaludmental@gmail.com',
                    title: 'Rellena el formulario',
                    target: '_blank',
                    rel: 'noreferrer',
                    children: 'Escr\xedbeme y empieza tu proceso.',
                  }),
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      function le() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsxs)('section', {
              className: 'contactsection',
              children: [
                (0, Y.jsx)('h2', {
                  className: 'contactsection__title',
                  children: 'Encuentra comunidad Autista y (T)DAH en mis RRSS:',
                }),
                (0, Y.jsxs)('ul', {
                  className: 'contactsection__list',
                  children: [
                    (0, Y.jsxs)('li', {
                      className: 'contactsection__list--item',
                      children: [
                        (0, Y.jsx)('i', {
                          class: 'icon fa-brands fa-instagram',
                        }),
                        (0, Y.jsx)('a', {
                          className: 'contactlink',
                          href: 'https://instagram.com/c.padronsaludmental?igshid=YmMyMTA2M2Y=',
                          title: 'Ir a instagram',
                          target: '_blank',
                          rel: 'noreferrer',
                          children: 'Instagram',
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('li', {
                      className: 'contactsection__list--item',
                      children: [
                        (0, Y.jsx)('i', {
                          className: 'icon fa-brands fa-linkedin',
                        }),
                        (0, Y.jsx)('a', {
                          className: 'contactlink',
                          href: 'https://www.linkedin.com/company/c-padr%C3%B3n-salud-mental/',
                          title: 'Ir a linkedin',
                          target: '_blank',
                          rel: 'noreferrer',
                          children: 'Linkedin',
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('li', {
                      className: 'contactsection__list--item',
                      children: [
                        (0, Y.jsx)('i', {
                          className: 'icon fa-brands fa-tiktok',
                        }),
                        (0, Y.jsx)('a', {
                          className: 'contactlink',
                          href: 'https://www.tiktok.com/@c.padonsaludmental',
                          title: 'Rellena el formulario',
                          target: '_blank',
                          rel: 'noreferrer',
                          children: 'Tiktok',
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('li', {
                      className: 'contactsection__list--item',
                      children: [
                        (0, Y.jsx)('i', { class: 'icon fa-brands fa-youtube' }),
                        (0, Y.jsx)('a', {
                          className: 'contactlink',
                          href: 'https://www.youtube.com/channel/UCv-mEw1OLDSKjYysnaEd1nQ',
                          title: 'Rellena el formulario',
                          target: '_blank',
                          rel: 'noreferrer',
                          children: 'Youtube',
                        }),
                      ],
                    }),
                    (0, Y.jsxs)('li', {
                      className: 'contactsection__list--item',
                      children: [
                        (0, Y.jsx)('i', {
                          className: 'icon fa-solid fa-paper-plane',
                        }),
                        (0, Y.jsx)('a', {
                          className: 'contactlink',
                          href: 'mailto: cpadronsaludmental@gmail.com',
                          title: 'Rellena el formulario',
                          target: '_blank',
                          rel: 'noreferrer',
                          children: 'Escr\xedbeme un email',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      var ie = t(264),
        se = t.n(ie);
      function oe() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsx)('section', {
              className: 'aboutsection',
              children: (0, Y.jsx)('h2', {
                className: 'aboutsection__title',
                children: 'Pol\xedtica de Privacidad',
              }),
            }),
            (0, Y.jsxs)('section', {
              className: 'legalpagessection',
              children: [
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '1. IDENTIDAD DEL RESPONSABLE DEL TRATAMIENTO',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'Cristina Padr\xf3n Pasqu\xedn - C. PADR\xd3N SALUD MENTAL con CIF 05452877Z, en adelante el RESPTTO, con domicilio en Madrid (Madrid), en C/ Celanova n\xba 1 4\xba 4, y correo electr\xf3nico CPADRONSALUDMENTAL@GMAIL.COM, es el Titular de \xe9sta Web y Responsable del Tratamiento de Datos Personales del Usuario y le informa que la informaci\xf3n facilitada ser\xe1 tratada de conformidad con lo dispuesto por el Reglamento UE de Protecci\xf3n de Datos 679/2016 y la Ley Org\xe1nica 3/2018 de Protecci\xf3n de Datos Personales y garant\xeda de los derechos digitales, inform\xe1ndole que:',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children:
                      '2. FINALIDADES Y LEGITIMACI\xd3N DEL TRATAMIENTO',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsxs)('ul', {
                    children: [
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Ofrecerle una mejor experiencia de Usuario a trav\xe9s de mejoras que implantemos en la interfaz y operativa web.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Enviarle comunicaciones informativas y/o promocionales si Vd. facilita sus datos de contacto y consentimiento.',
                      }),
                    ],
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '3. PLAZOS DE CONSERVACI\xd3N',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'Los datos proporcionados se conservar\xe1n hasta que el Usuario solicite la supresi\xf3n de sus datos. Una vez comunicado por parte del interesado la supresi\xf3n de sus datos, se proceder\xe1 a su bloqueo y posterior cancelaci\xf3n en nuestros ficheros o devoluci\xf3n al titular de los datos, seg\xfan el caso, de los soportes en los que se recoja la informaci\xf3n facilitada, sin que se admita la conservaci\xf3n de copias de dicha informaci\xf3n.',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '4. COMUNICACI\xd3N DE LAS DATOS A TERCEROS',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'Sus datos \xfanicamente ser\xe1n utilizados para los fines antes se\xf1alados y no ser\xe1n cedidos a terceros, salvo aquellas comunicaciones a las Autoridades, Organismos u Oficinas de las Administraciones P\xfablicas que fueran consentidas por el Usuario o persona autorizada por \xe9l/ella para el adecuado cumplimiento de las obligaciones nacidas de los servicios prestados, o que resultaren preceptivas o autorizadas por Ley.',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '5. DEBER DE CONFIDENCIALIDAD',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'El RESPTTO garantiza la confidencialidad de los datos personales que obren en sus ficheros y adoptar\xe1 las medidas reglamentarias que eviten, en la medida de lo posible, su alteraci\xf3n, p\xe9rdida, tratamiento o acceso no autorizado.',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '6. EJERCICIO DE DERECHOS',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'El Usuario tiene derecho a acceder a sus datos personales, rectificar los datos inexactos o solicitar su supresi\xf3n cuando los datos ya no sean necesarios. En determinadas ocasiones los interesados podr\xe1n solicitar la limitaci\xf3n del tratamiento de sus datos, en cuyo caso \xfanicamente los conservaremos para el ejercicio o la defensa de reclamaciones. El Usuario puede ejercitar sus derechos debiendo dirigir su petici\xf3n por escrito e identific\xe1nose suficientemente a la direcci\xf3n electronica CPADRONSALUDMENTAL@GMAIL.COM. Tambi\xe9n tiene derecho a retirar su consentimiento al tratamiento de sus datos personales en cualquier momento y a presentar la reclamaci\xf3n que considere oportuna ante la Autoridad de Control.',
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      function ce() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsx)('section', {
              className: 'aboutsection',
              children: (0, Y.jsx)('h2', {
                className: 'aboutsection__title',
                children: 'Aviso Legal',
              }),
            }),
            (0, Y.jsxs)('section', {
              className: 'legalpagessection',
              children: [
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '1. IDENTIDAD DEL TITULAR DE LA WEB',
                  }),
                }),
                (0, Y.jsxs)('p', {
                  className: 'legalpagessection__text',
                  children: [
                    'Cristina Padr\xf3n Pasqu\xedn - C. PADR\xd3N SALUD MENTAL con CIF 05452877Z, con domicilio en Madrid (Madrid), en C/ Celanova n\xba 1 4\xba 4, y correo electr\xf3nico CPADRONSALUDMENTAL@GMAIL.COM es Titular de \xe9sta web, con dominio',
                    ' ',
                    (0, Y.jsx)('a', {
                      className: 'footer__link',
                      href: 'https://cpadronsaludmental.com/',
                      target: '_blank',
                      title: 'Ir al dominio',
                      rel: 'noreferrer',
                      children: 'https://cpadronsaludmental.com/',
                    }),
                  ],
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '2. ACEPTACI\xd3N DE LAS CONDICIONES DE USO',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'La utilizaci\xf3n de este sitio Web atribuye al navegante, sea persona f\xedsica o jur\xeddica, la condici\xf3n de USUARIO, lo cual implica la adhesi\xf3n a los t\xe9rminos y condiciones que a continuaci\xf3n se indican. A todos los efectos, se contemplar\xe1n los t\xe9rminos y condiciones en la versi\xf3n publicada en el momento en que se produce el acceso. Se recomienda al USUARIO leer atentamente los t\xe9rminos y condiciones que a continuaci\xf3n se detallan antes de hacer uso de los servicios ofertados. As\xed mismo, el acceso a determinados servicios a trav\xe9s de este sitio Web puede encontrarse sometido a ciertas condiciones particulares propias que, seg\xfan los casos, sustituyen, completan y/o modifican estas condiciones generales. Por tanto, con anterioridad al acceso y/o utilizaci\xf3n de nuestros servicios, el USUARIO debe leer atentamente tambi\xe9n las correspondientes condiciones particulares. En caso de no aceptar las condiciones de uso, deber\xe1 abstenerse de acceder y utilizar los servicios contenidos en esta Web. Las presentes condiciones de uso regulan el uso gen\xe9rico de la Web por parte del USUARIO que tiene la posibilidad de visualizarla e imprimirlas. El Titular de la Web se reserva el derecho a modificar o suprimir en cualquier momento y sin previo aviso los contenidos, servicios e informaciones que se encuentran en esta Web, as\xed como a limitar o cancelar los t\xe9rminos y condiciones aplicables a la Web.',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '3. PROPIEDAD INTELECTUAL E INDUSTRIAL',
                  }),
                }),
                (0, Y.jsxs)('p', {
                  className: 'legalpagessection__text',
                  children: [
                    (0, Y.jsx)('p', {
                      className: 'legalpagessection__text--subp',
                      children:
                        'El contenido de esta Web se encuentra protegido por las Leyes sobre Propiedad Intelectual e Industrial. El sitio web, incluyendo a t\xedtulo enunciativo pero no limitativo su programaci\xf3n, edici\xf3n, compilaci\xf3n y dem\xe1s elementos necesarios para su funcionamiento, los dise\xf1os, logotipos, texto y/o gr\xe1ficos son propiedad del responsable de la Web o en su caso dispone de licencia o autorizaci\xf3n expresa por parte de los autores. Independientemente de la finalidad para la que fueran destinados, la reproducci\xf3n total o parcial, uso, explotaci\xf3n, distribuci\xf3n y comercializaci\xf3n, requiere en todo caso de la autorizaci\xf3n escrita previa por parte del Titular de la Web. La infracci\xf3n de cualquiera de los citados derechos puede constituir una vulneraci\xf3n de las presentes disposiciones, as\xed como un delito castigado de acuerdo con los art\xedculos 270 y siguientes del C\xf3digo Penal. Los dise\xf1os, logotipos, texto y/o gr\xe1ficos ajenos al responsable de la Web y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos.',
                    }),
                    (0, Y.jsx)('p', {
                      className: 'legalpagessection__text--subp',
                      children:
                        'En todo caso, se cuenta con la autorizaci\xf3n expresa y previa por parte de los mismos. Las reclamaciones que pudieran interponerse por los USUARIOS en relaci\xf3n con posibles incumplimientos de los derechos de propiedad intelectual o industrial sobre cualesquiera de los contenidos de este sitio Web deber\xe1n dirigirse al correo electr\xf3nico CPADRONSALUDMENTAL@GMAIL.COM',
                    }),
                  ],
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '4. ACCESO A LA WEB',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'Nuestra Web puede ser visitada por cualquier USUARIO de forma libre y gratuita. Los datos de Car\xe1cter Personal que nos facilite ser\xe1n siempre tratados de conformidad con lo dispuesto en la normativa vigente.',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '5. USO CORRECTO DEL SITIO WEB',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'El USUARIO se compromete a utilizar la Web, los contenidos y los servicios de acuerdo con la Ley, con las buenas costumbres y el orden p\xfablico',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('ul', {
                    children: (0, Y.jsxs)('li', {
                      className: 'legalpagessection__text--li',
                      children: [
                        'El USUARIO se obliga y compromete a: No utilizar la Web o los servicios que se prestan a trav\xe9s de ella con finalidades o efectos il\xedcitos o contrarios al contenido de este Aviso Legal que lesionen los intereses o derechos de terceros, o que de cualquier forma pueda da\xf1ar, inutilizar o deteriorar la Web o sus servicios o impedir un uso satisfactorio de la Web a otros usuarios.',
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'No destruir, alterar, inutilizar o, de cualquier otra forma, da\xf1ar los datos, los programas o los documentos electr\xf3nicos y otros que se encuentren en la Web. No introducir programas, virus, macroinstrucciones, miniaplicaciones o cualquier otro dispositivo l\xf3gico o secuencia de caracteres que causen o puedan causar cualquier tipo de alteraci\xf3n en los sistemas inform\xe1ticos del responsable del la Web o de terceros.',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'No hacer mal uso de informaciones, mensajes, gr\xe1ficos, dibujos, archivos de sonido y/o imagen, fotograf\xedas, grabaciones, software y, en general, cualquier clase de material accesible a trav\xe9s de la Web o de los servicios que ofrece.',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'No introducir actuaciones, actitudes o ideas discriminatorias por raz\xf3n de sexo, raza, religi\xf3n, creencias, edad o condici\xf3n.',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'Asimismo, el responsable de la web se reserva el derecho a denegar o retirar el acceso a la Web y/o a los servicios en cualquier momento y sin necesidad de previo aviso a aquellos USUARIOS que incumplan estas condiciones generales.',
                        }),
                      ],
                    }),
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '6. R\xc9GIMEN DE RESPONSABILIDAD',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsxs)('ul', {
                    children: [
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'La calidad del servicio, la velocidad de acceso, el correcto funcionamiento ni la disponibilidad ni continuidad de funcionamiento de la Web.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Que existan interrupciones del servicio, demoras, errores, mal funcionamiento del mismo y, en general, dem\xe1s inconvenientes que tengan su origen en causa que escapan del control del Titular de la Web.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Una actuaci\xf3n dolosa o culposa del USUARIO y/o tenga por origen causas de fuerza mayor. En cualquier caso, sea cual fuere su causa.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Da\xf1os directos o indirectos, da\xf1o emergente y/o por lucro cesante.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Los contenidos y opiniones de terceros ni de la informaci\xf3n contenida en p\xe1ginas Web de terceros a las que se pueda acceder por Enlaces o buscadores del sitio Web.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Los da\xf1os que puedan causarse en los equipos de los USUARIOS por posibles virus inform\xe1ticos contra\xeddos a causa de su navegaci\xf3n en el sitio Web o por cualquier otro da\xf1o derivado de esa navegaci\xf3n.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Del incumplimiento de la Ley, la moral y las buenas costumbres generalmente aceptadas o el orden p\xfablico como consecuencia de la transmisi\xf3n, difusi\xf3n, almacenamiento, puesta a disposici\xf3n, recepci\xf3n, obtenci\xf3n o acceso a los contenidos.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'Los vicios, y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados o puestos a disposici\xf3n, la falta de actualizaci\xf3n o de exactitud de los mismos, ni de su calidad cient\xedfica en su caso',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'As\xed mismo, el Titular no garantiza que la Web y el servidor est\xe9n libres de virus y no se hace responsable de los da\xf1os causados por el acceso a la Web o por la imposibilidad de acceder.',
                      }),
                      (0, Y.jsx)('li', {
                        className: 'legalpagessection__text--li',
                        children:
                          'El Titular tendr\xe1 derecho, sin que exista indemnizaci\xf3n alguna al USUARIO por estos conceptos, a suspender temporalmente los servicios y contenidos del sitio Web para efectuar operaciones de mantenimiento, mejora o reparaci\xf3n de los mismos.',
                      }),
                    ],
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '7. PROTECCI\xd3N DE DATOS',
                  }),
                }),
                (0, Y.jsxs)('p', {
                  className: 'legalpagessection__text',
                  children: [
                    (0, Y.jsx)('p', {
                      className: 'legalpagessection__text--subp',
                      children:
                        'De conformidad con lo establecido en la Ley Org\xe1nica 3/2018 de Protecci\xf3n de Datos Personales y garant\xeda de los derechos digitales, le informamos que la informaci\xf3n que facilite el Usuario ser\xe1 incorporada al sistema de tratamiento titularidad del Responsable con con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre ambas partes. As\xed mismo, el Titular y Responsable informa que los datos ser\xe1n conservados durante el plazo estrictamente necesario para cumplir con los preceptos mencionados con anterioridad. Mientras Vd. no comunique lo contrario,entenderemos que sus datos no han sido modificados, que usted se compromete a notificarnos cualquier variaci\xf3n y que tenemos su consentimiento para utilizarlos para las finalidades mencionadas. Se le informa que proceder\xe1 a tratar los datos de manera l\xedcita, leal, transparente, adecuada, pertinente, limitada, exacta y actualizada. Es por ello que el Responsable se compromete a adoptar todas las medidas razonables para que estos se supriman o rectifiquen sin dilaci\xf3n cuando sean inexactos. De acuerdo con los derechos que le confiere el la normativa vigente en materia de Protecci\xf3n de Datos, el Usuario podr\xe1 ejercer los derechos de acceso, rectificaci\xf3n, limitaci\xf3n de tratamiento, supresi\xf3n, portabilidad y oposici\xf3n al tratamiento de sus datos de car\xe1cter personal as\xed como del consentimiento prestado para el tratamiento de los mismos, debiendo dirigir su petici\xf3n por escrito e identific\xe1nose suficientemente a la direcci\xf3n citada en el punto 1.',
                    }),
                    (0, Y.jsx)('p', {
                      className: 'legalpagessection__text--subp',
                      children:
                        'As\xed mismo, tambi\xe9n podr\xe1 dirigirse a la Autoridad de Control para presentar la reclamaci\xf3n que considere oportuna.',
                    }),
                  ],
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '8. PUBLICIDAD',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'Conforme a lo regulado por la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci\xf3n y Comercio Electr\xf3nico (LSSICE) la pol\xedtica respecto al correo electr\xf3nico se centra en remitir \xfanicamente comunicaciones que el USUARIO haya solicitado recibir habiendo tr\xe1sladado de modo voluntario y expreso su consentimiento. Si Usuario quiere desea recibir estas comunicaciones, deber\xe1 dirigirse su petici\xf3n por escrito e identific\xe1nose suficientemente a la direcci\xf3n electronica CPADRONSALUDMENTAL@GMAIL.COM',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children:
                      '9. LEGISLACI\xd3N APLICABLE Y COMPETENCIA JUDICIAL',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'Las presentes condiciones est\xe1n redactadas en espa\xf1ol, y se encuentran sometidas a la legislaci\xf3n espa\xf1ola vigente. Para toda cuesti\xf3n litigiosa o que incumba a \xe9ste sitio Web ser\xe1n competentes los Juzgados y Tribunales de Espa\xf1a.',
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      function ue() {
        return (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(J, {}),
            (0, Y.jsx)('section', {
              className: 'aboutsection',
              children: (0, Y.jsx)('h2', {
                className: 'aboutsection__title',
                children: 'Pol\xedtica de Cookies',
              }),
            }),
            (0, Y.jsxs)('section', {
              className: 'legalpagessection',
              children: [
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '1. \xbf QU\xc9 SON LAS COOKIES ?',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'Las Cookies son peque\xf1os archivos que se instalan en el terminal del USUARIO al visitar un sitio web con la finalidad de almacenar datos que podr\xe1n ser actualizados y recuperados por el responsable de su instalaci\xf3n. Si el USUARIO no se registra ni deja informaci\xf3n personal en el sitio, el servidor tendr\xe1 conocimiento de que alguien con esa cookie regres\xf3 al sitio web pero le ser\xe1 imposible asociar la navegaci\xf3n a un USUARIO concreto e identificado.',
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '2. \xbf QU\xc9 CLASES DE COOKIES EXISTEN ?',
                  }),
                }),
                (0, Y.jsxs)('p', {
                  className: 'legalpagessection__text',
                  children: [
                    (0, Y.jsx)('p', {
                      className: 'legalpagessection__text--subp',
                      children:
                        'Las Cookies, en funci\xf3n de su caducidad, pueden clasificarse en Cookies de sesi\xf3n o permanentes. Las primeras expiran cuando el usuario cierra el navegador mientras que las segundas permanecen por un tiempo superior durante el cual los datos siguen almacenados en el terminal y pueden ser accedidos y tratados.',
                    }),
                    (0, Y.jsx)('p', {
                      className: 'legalpagessection__text--subp',
                      children:
                        'Tambi\xe9n se pueden distinguir seg\xfan la entidad que gestione el equipo o dominio desde donde se env\xedan las Cookies y se traten los datos que se obtengan. En este caso, se clasifican como:',
                    }),
                    (0, Y.jsxs)('ul', {
                      children: [
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'Cookies propias: aquellas que se env\xedan al equipo terminal del Usuario desde un equipo o dominio gestionado por el Titular de la Web y desde el que se presta el servicio solicitado por el propio Usuario.',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'Cookies propias: aquellas que se env\xedan al equipo terminal del Usuario desde un equipo o dominio gestionado por el Titular de la Web y desde el que se presta el servicio solicitado por el propio Usuario.',
                        }),
                      ],
                    }),
                    (0, Y.jsx)('p', {
                      className: 'legalpagessection__text--subp',
                      children:
                        'Las Cookies tambi\xe9n se pueden clasificar en funci\xf3n de su objetivo y por tanto podemos hablar de:',
                    }),
                    (0, Y.jsxs)('ul', {
                      children: [
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'Cookies T\xe9cnicas: permiten al Usuario la navegaci\xf3n a trav\xe9s de una p\xe1gina web, plataforma o aplicaci\xf3n y la utilizaci\xf3n de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tr\xe1fico y la comunicaci\xf3n de datos, identificar la sesi\xf3n o realizar el proceso de compra de un pedido.',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'Cookies de Personalizaci\xf3n: permiten al Usuario acceder al servicio con algunas caracter\xedsticas de car\xe1cter general predefinidas en funci\xf3n de una serie de criterios en el terminal del usuario como por ejemplo el idioma o el tipo de navegador.',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'Cookies Anal\xedticas: permiten al responsable de las mismas, el seguimiento y an\xe1lisis del comportamiento de los usuarios de los sitios web a los que est\xe1n vinculadas. La informaci\xf3n recabada se utiliza en la medici\xf3n de la actividad de los sitios web, aplicaci\xf3n o plataforma y para la elaboraci\xf3n de perfiles de navegaci\xf3n de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en funci\xf3n del an\xe1lisis de los datos que hacen los usuarios del servicio.',
                        }),
                        (0, Y.jsx)('li', {
                          className: 'legalpagessection__text--li',
                          children:
                            'Cookies Anal\xedticas: permiten al responsable de las mismas, el seguimiento y an\xe1lisis del comportamiento de los usuarios de los sitios web a los que est\xe1n vinculadas. La informaci\xf3n recabada se utiliza en la medici\xf3n de la actividad de los sitios web, aplicaci\xf3n o plataforma y para la elaboraci\xf3n de perfiles de navegaci\xf3n de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en funci\xf3n del an\xe1lisis de los datos que hacen los usuarios del servicio.',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '3. \xbf C\xd3MO DESACTIVAR O ELIMINAR COOKIES ?',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children:
                    'El Usuario podr\xe1 configurar su navegador para que no se instalen cookies o para recibir un aviso en pantalla cada vez que una cookie quiera instalarse, pudiendo decidir en cada momento si la quiere aceptar o no. Igualmente el usuario podr\xe1 decidir posteriormente eliminar las cookies que tenga instaladas cambiando la configuraci\xf3n de su navegador o El Usuario podr\xe1 configurar su navegador para que no se instalen cookies o para recibir un aviso en pantalla cada vez que una cookie quiera instalarse, pudiendo decidir en cada momento si la quiere aceptar o no. Igualmente el usuario podr\xe1 decidir posteriormente eliminar las cookies que tenga instaladas cambiando la configuraci\xf3n de su navegador o:',
                }),
                (0, Y.jsxs)('ul', {
                  className: 'legalpagessection__text',
                  children: [
                    (0, Y.jsx)('li', {
                      className: 'legalpagessection__text--links',
                      children: (0, Y.jsx)('a', {
                        className: 'legalpagessection__text--link',
                        href: 'https://support.google.com/chrome/answer/95647?hl=es',
                        children: 'Google Chrome',
                      }),
                    }),
                    (0, Y.jsx)('li', {
                      className: 'legalpagessection__text--links',
                      children: (0, Y.jsx)('a', {
                        className: 'legalpagessection__text--link',
                        href: 'https://support.apple.com/es-es/HT201265',
                        children: 'Safari',
                      }),
                    }),
                    (0, Y.jsx)('li', {
                      className: 'legalpagessection__text--links',
                      children: (0, Y.jsx)('a', {
                        className: 'legalpagessection__text--link',
                        href: 'https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-',
                        children: 'Mozilla Firefox',
                      }),
                    }),
                  ],
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsx)('span', {
                    className: 'bold',
                    children: '4. \xbf QU\xc9 COOKIES USA \xc9STE SITIO WEB ?',
                  }),
                }),
                (0, Y.jsx)('p', {
                  className: 'legalpagessection__text',
                  children: (0, Y.jsxs)('table', {
                    className: 'table',
                    children: [
                      (0, Y.jsxs)('tr', {
                        className: 'table__tr',
                        children: [
                          (0, Y.jsx)('td', {
                            className: 'table__tr--title',
                            children: 'NOMBRE',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--title',
                            children: 'DOMINIO',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--title',
                            children: 'FINALIDAD',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--title',
                            children: 'CADUCIDAD',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--title',
                            children: 'TIPO',
                          }),
                        ],
                      }),
                      (0, Y.jsxs)('tr', {
                        className: 'table__tr',
                        children: [
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: 'CookieConsent',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: 'cpadronsaludmental.com',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children:
                              'Cookie necesaria para guardar las preferencias del usuario sobre las cookie',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: '1 A\xf1os',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: 'Necesarias',
                          }),
                        ],
                      }),
                      (0, Y.jsxs)('tr', {
                        className: 'table__tr',
                        children: [
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: '_ga',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: 'cpadronsaludmental.com',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children:
                              'Cookie usada para almacenar y contar las p\xe1ginas vistas',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: '2 A\xf1os',
                          }),
                          (0, Y.jsx)('td', {
                            className: 'table__tr--td',
                            children: 'Anal\xedticas',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, Y.jsx)(K, {}),
          ],
        });
      }
      var de = function () {
          return (
            (0, n.useEffect)(function () {
              se().initialize({ gtmId: 'GTM-MS3F9JS' });
            }, []),
            (0, Y.jsx)(Y.Fragment, {
              children: (0, Y.jsx)('div', {
                children: (0, Y.jsxs)(q, {
                  children: [
                    (0, Y.jsx)(U, { path: '/', element: (0, Y.jsx)(ee, {}) }),
                    (0, Y.jsx)(U, {
                      path: '/articles',
                      element: (0, Y.jsx)(ne, {}),
                    }),
                    (0, Y.jsx)(U, {
                      path: '/courses',
                      element: (0, Y.jsx)(te, {}),
                    }),
                    (0, Y.jsx)(U, {
                      path: '/aboutme',
                      element: (0, Y.jsx)(re, {}),
                    }),
                    (0, Y.jsx)(U, {
                      path: '/contact',
                      element: (0, Y.jsx)(le, {}),
                    }),
                    (0, Y.jsx)(U, {
                      path: '/legaladvice',
                      element: (0, Y.jsx)(ce, {}),
                    }),
                    (0, Y.jsx)(U, {
                      path: '/privacycookies',
                      element: (0, Y.jsx)(ue, {}),
                    }),
                    (0, Y.jsx)(U, {
                      path: '/privacypolicy',
                      element: (0, Y.jsx)(oe, {}),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        fe = document.getElementById('root');
      (0, a.s)(fe).render(
        (0, Y.jsx)($, { children: (0, Y.jsx)(de, { tab: 'home' }) })
      );
    })();
})();
//# sourceMappingURL=main.eae5f0df.js.map
