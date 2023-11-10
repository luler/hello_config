(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    '3wW7': function(t, e, n) {
      t.exports = {
        'ant-list': 'ant-list',
        'ant-list-pagination': 'ant-list-pagination',
        'ant-pagination-options': 'ant-pagination-options',
        'ant-list-more': 'ant-list-more',
        'ant-list-spin': 'ant-list-spin',
        'ant-list-empty-text': 'ant-list-empty-text',
        'ant-list-items': 'ant-list-items',
        'ant-list-item': 'ant-list-item',
        'ant-list-item-content': 'ant-list-item-content',
        'ant-list-item-meta': 'ant-list-item-meta',
        'ant-list-item-meta-avatar': 'ant-list-item-meta-avatar',
        'ant-list-item-meta-content': 'ant-list-item-meta-content',
        'ant-list-item-meta-title': 'ant-list-item-meta-title',
        'ant-list-item-meta-description': 'ant-list-item-meta-description',
        'ant-list-item-action': 'ant-list-item-action',
        'ant-list-item-action-split': 'ant-list-item-action-split',
        'ant-list-header': 'ant-list-header',
        'ant-list-footer': 'ant-list-footer',
        'ant-list-empty': 'ant-list-empty',
        'ant-list-split': 'ant-list-split',
        'ant-list-loading': 'ant-list-loading',
        'ant-list-spin-nested-loading': 'ant-list-spin-nested-loading',
        'ant-list-something-after-last-item': 'ant-list-something-after-last-item',
        'ant-spin-container': 'ant-spin-container',
        'ant-list-lg': 'ant-list-lg',
        'ant-list-sm': 'ant-list-sm',
        'ant-list-vertical': 'ant-list-vertical',
        'ant-list-item-main': 'ant-list-item-main',
        'ant-list-item-extra': 'ant-list-item-extra',
        'ant-list-grid': 'ant-list-grid',
        'ant-col': 'ant-col',
        'ant-list-item-no-flex': 'ant-list-item-no-flex',
        'ant-list-bordered': 'ant-list-bordered',
      };
    },
    '4Ofr': function(t, e, n) {
      t.exports = {
        themeColor: 'antd-pro-components-setting-drawer-theme-color-themeColor',
        title: 'antd-pro-components-setting-drawer-theme-color-title',
        colorBlock: 'antd-pro-components-setting-drawer-theme-color-colorBlock',
      };
    },
    BFsb: function(t, e, n) {
      t.exports = {
        content: 'antd-pro-components-setting-drawer-index-content',
        blockChecbox: 'antd-pro-components-setting-drawer-index-blockChecbox',
        item: 'antd-pro-components-setting-drawer-index-item',
        selectIcon: 'antd-pro-components-setting-drawer-index-selectIcon',
        color_block: 'antd-pro-components-setting-drawer-index-color_block',
        title: 'antd-pro-components-setting-drawer-index-title',
        handle: 'antd-pro-components-setting-drawer-index-handle',
        productionHint: 'antd-pro-components-setting-drawer-index-productionHint',
      };
    },
    P5Jw: function(t, e, n) {
      'use strict';
      var r = n('rHrb'),
        a = r.CopyToClipboard;
      (a.CopyToClipboard = a), (t.exports = a);
    },
    PceP: function(t, e, n) {
      'use strict';
      n.r(e);
      n('bbsP');
      var r = n('/wGt'),
        a = (n('cIOH'), n('YkAm'), n('q1tI')),
        o = n.n(a),
        i = n('i8i4'),
        c = n('MFj2'),
        l = n('eHJ2'),
        s = n.n(l),
        u = n('CtXQ'),
        p = n('H84U');
      function f(t) {
        return Object.keys(t).reduce(function(e, n) {
          return (
            ('data-' !== n.substr(0, 5) && 'aria-' !== n.substr(0, 5) && 'role' !== n) ||
              'data-__' === n.substr(0, 7) ||
              (e[n] = t[n]),
            e
          );
        }, {});
      }
      var m = n('6CfX');
      function d(t) {
        '@babel/helpers - typeof';
        return (
          (d =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          d(t)
        );
      }
      function y() {
        return (
          (y =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          y.apply(this, arguments)
        );
      }
      function g(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function b(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function v(t, e, n) {
        return e && h(t.prototype, e), n && h(t, n), t;
      }
      function O(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && E(t, e);
      }
      function E(t, e) {
        return (
          (E =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          E(t, e)
        );
      }
      function w(t) {
        var e = C();
        return function() {
          var n,
            r = S(t);
          if (e) {
            var a = S(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return j(this, n);
        };
      }
      function j(t, e) {
        return !e || ('object' !== d(e) && 'function' !== typeof e) ? k(t) : e;
      }
      function k(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function C() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function S(t) {
        return (
          (S = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          S(t)
        );
      }
      function x() {}
      var P = (function(t) {
          O(n, t);
          var e = w(n);
          function n(t) {
            var r;
            return (
              b(this, n),
              (r = e.call(this, t)),
              (r.handleClose = function(t) {
                t.preventDefault();
                var e = i['findDOMNode'](k(r));
                (e.style.height = ''.concat(e.offsetHeight, 'px')),
                  (e.style.height = ''.concat(e.offsetHeight, 'px')),
                  r.setState({ closing: !0 }),
                  (r.props.onClose || x)(t);
              }),
              (r.animationEnd = function() {
                r.setState({ closing: !1, closed: !0 }), (r.props.afterClose || x)();
              }),
              (r.renderAlert = function(t) {
                var e,
                  n = t.getPrefixCls,
                  o = r.props,
                  i = o.description,
                  l = o.prefixCls,
                  p = o.message,
                  m = o.closeText,
                  d = o.banner,
                  b = o.className,
                  h = void 0 === b ? '' : b,
                  v = o.style,
                  O = o.icon,
                  E = r.props,
                  w = E.closable,
                  j = E.type,
                  k = E.showIcon,
                  C = E.iconType,
                  S = r.state,
                  x = S.closing,
                  P = S.closed,
                  N = n('alert', l);
                (k = !(!d || void 0 !== k) || k), (j = d && void 0 === j ? 'warning' : j || 'info');
                var _ = 'filled';
                if (!C) {
                  switch (j) {
                    case 'success':
                      C = 'check-circle';
                      break;
                    case 'info':
                      C = 'info-circle';
                      break;
                    case 'error':
                      C = 'close-circle';
                      break;
                    case 'warning':
                      C = 'exclamation-circle';
                      break;
                    default:
                      C = 'default';
                  }
                  i && (_ = 'outlined');
                }
                m && (w = !0);
                var M = s()(
                    N,
                    ''.concat(N, '-').concat(j),
                    ((e = {}),
                    g(e, ''.concat(N, '-closing'), x),
                    g(e, ''.concat(N, '-with-description'), !!i),
                    g(e, ''.concat(N, '-no-icon'), !k),
                    g(e, ''.concat(N, '-banner'), !!d),
                    g(e, ''.concat(N, '-closable'), w),
                    e),
                    h
                  ),
                  I = w
                    ? a['createElement'](
                        'button',
                        {
                          type: 'button',
                          onClick: r.handleClose,
                          className: ''.concat(N, '-close-icon'),
                          tabIndex: 0,
                        },
                        m
                          ? a['createElement'](
                              'span',
                              { className: ''.concat(N, '-close-text') },
                              m
                            )
                          : a['createElement'](u['a'], { type: 'close' })
                      )
                    : null,
                  R = f(r.props),
                  A =
                    (O &&
                      (a['isValidElement'](O)
                        ? a['cloneElement'](O, {
                            className: s()(
                              ''.concat(N, '-icon'),
                              g({}, O.props.className, O.props.className)
                            ),
                          })
                        : a['createElement']('span', { className: ''.concat(N, '-icon') }, O))) ||
                    a['createElement'](u['a'], {
                      className: ''.concat(N, '-icon'),
                      type: C,
                      theme: _,
                    });
                return P
                  ? null
                  : a['createElement'](
                      c['a'],
                      {
                        component: '',
                        showProp: 'data-show',
                        transitionName: ''.concat(N, '-slide-up'),
                        onEnd: r.animationEnd,
                      },
                      a['createElement'](
                        'div',
                        y({ 'data-show': !x, className: M, style: v }, R),
                        k ? A : null,
                        a['createElement']('span', { className: ''.concat(N, '-message') }, p),
                        a['createElement']('span', { className: ''.concat(N, '-description') }, i),
                        I
                      )
                    );
              }),
              Object(m['a'])(
                !('iconType' in t),
                'Alert',
                '`iconType` is deprecated. Please use `icon` instead.'
              ),
              (r.state = { closing: !1, closed: !1 }),
              r
            );
          }
          return (
            v(n, [
              {
                key: 'render',
                value: function() {
                  return a['createElement'](p['a'], null, this.renderAlert);
                },
              },
            ]),
            n
          );
        })(a['Component']),
        N = (n('+L6B'), n('2/Rp')),
        _ = (n('miYZ'), n('tsqr')),
        M = (n('/zsF'), n('PArb')),
        I = (n('Pwec'), n('5Dmo'), n('3S7+')),
        R = (n('3wW7'), n('R9oj'), n('T2oS'), n('DjyN'), n('1GLa'), n('17x9')),
        A = n('BGR+'),
        T = n('W9HT'),
        z = n('NUBc'),
        D = n('qrJ5'),
        L = n('/kpp');
      function H(t) {
        if (!a['isValidElement'](t)) return t;
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
          n[r - 1] = arguments[r];
        return a['cloneElement'].apply(a, [t].concat(n));
      }
      function F(t) {
        '@babel/helpers - typeof';
        return (
          (F =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          F(t)
        );
      }
      function B(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function J(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function W(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function q(t, e, n) {
        return e && W(t.prototype, e), n && W(t, n), t;
      }
      function U(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && Y(t, e);
      }
      function Y(t, e) {
        return (
          (Y =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          Y(t, e)
        );
      }
      function K(t) {
        var e = G();
        return function() {
          var n,
            r = X(t);
          if (e) {
            var a = X(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return Q(this, n);
        };
      }
      function Q(t, e) {
        return !e || ('object' !== F(e) && 'function' !== typeof e) ? Z(t) : e;
      }
      function Z(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function G() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function X(t) {
        return (
          (X = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          X(t)
        );
      }
      function V() {
        return (
          (V =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          V.apply(this, arguments)
        );
      }
      var $ = function(t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
              e.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
                (n[r[a]] = t[r[a]]);
          }
          return n;
        },
        tt = function(t) {
          return a['createElement'](p['a'], null, function(e) {
            var n = e.getPrefixCls,
              r = t.prefixCls,
              o = t.className,
              i = t.avatar,
              c = t.title,
              l = t.description,
              u = $(t, ['prefixCls', 'className', 'avatar', 'title', 'description']),
              p = n('list', r),
              f = s()(''.concat(p, '-item-meta'), o),
              m = a['createElement'](
                'div',
                { className: ''.concat(p, '-item-meta-content') },
                c && a['createElement']('h4', { className: ''.concat(p, '-item-meta-title') }, c),
                l &&
                  a['createElement'](
                    'div',
                    { className: ''.concat(p, '-item-meta-description') },
                    l
                  )
              );
            return a['createElement'](
              'div',
              V({}, u, { className: f }),
              i && a['createElement']('div', { className: ''.concat(p, '-item-meta-avatar') }, i),
              (c || l) && m
            );
          });
        };
      function et(t, e) {
        return t[e] && Math.floor(24 / t[e]);
      }
      var nt = (function(t) {
        U(n, t);
        var e = K(n);
        function n() {
          var t;
          return (
            J(this, n),
            (t = e.apply(this, arguments)),
            (t.renderItem = function(e) {
              var n = e.getPrefixCls,
                r = t.context,
                o = r.grid,
                i = r.itemLayout,
                c = t.props,
                l = c.prefixCls,
                u = c.children,
                p = c.actions,
                f = c.extra,
                m = c.className,
                d = $(c, ['prefixCls', 'children', 'actions', 'extra', 'className']),
                y = n('list', l),
                g =
                  p &&
                  p.length > 0 &&
                  a['createElement'](
                    'ul',
                    { className: ''.concat(y, '-item-action'), key: 'actions' },
                    p.map(function(t, e) {
                      return a['createElement'](
                        'li',
                        { key: ''.concat(y, '-item-action-').concat(e) },
                        t,
                        e !== p.length - 1 &&
                          a['createElement']('em', {
                            className: ''.concat(y, '-item-action-split'),
                          })
                      );
                    })
                  ),
                b = o ? 'div' : 'li',
                h = a['createElement'](
                  b,
                  V({}, d, {
                    className: s()(
                      ''.concat(y, '-item'),
                      m,
                      B({}, ''.concat(y, '-item-no-flex'), !t.isFlexMode())
                    ),
                  }),
                  'vertical' === i && f
                    ? [
                        a['createElement'](
                          'div',
                          { className: ''.concat(y, '-item-main'), key: 'content' },
                          u,
                          g
                        ),
                        a['createElement'](
                          'div',
                          { className: ''.concat(y, '-item-extra'), key: 'extra' },
                          f
                        ),
                      ]
                    : [u, g, H(f, { key: 'extra' })]
                );
              return o
                ? a['createElement'](
                    L['a'],
                    {
                      span: et(o, 'column'),
                      xs: et(o, 'xs'),
                      sm: et(o, 'sm'),
                      md: et(o, 'md'),
                      lg: et(o, 'lg'),
                      xl: et(o, 'xl'),
                      xxl: et(o, 'xxl'),
                    },
                    h
                  )
                : h;
            }),
            t
          );
        }
        return (
          q(n, [
            {
              key: 'isItemContainsTextNodeAndNotSingular',
              value: function() {
                var t,
                  e = this.props.children;
                return (
                  a['Children'].forEach(e, function(e) {
                    'string' === typeof e && (t = !0);
                  }),
                  t && a['Children'].count(e) > 1
                );
              },
            },
            {
              key: 'isFlexMode',
              value: function() {
                var t = this.props.extra,
                  e = this.context.itemLayout;
                return 'vertical' === e ? !!t : !this.isItemContainsTextNodeAndNotSingular();
              },
            },
            {
              key: 'render',
              value: function() {
                return a['createElement'](p['a'], null, this.renderItem);
              },
            },
          ]),
          n
        );
      })(a['Component']);
      function rt(t) {
        '@babel/helpers - typeof';
        return (
          (rt =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          rt(t)
        );
      }
      function at(t) {
        return lt(t) || ct(t) || it(t) || ot();
      }
      function ot() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      function it(t, e) {
        if (t) {
          if ('string' === typeof t) return st(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? st(t, e)
              : void 0
          );
        }
      }
      function ct(t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }
      function lt(t) {
        if (Array.isArray(t)) return st(t);
      }
      function st(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function ut() {
        return (
          (ut =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          ut.apply(this, arguments)
        );
      }
      function pt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function ft(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function dt(t, e, n) {
        return e && mt(t.prototype, e), n && mt(t, n), t;
      }
      function yt(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && gt(t, e);
      }
      function gt(t, e) {
        return (
          (gt =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          gt(t, e)
        );
      }
      function bt(t) {
        var e = Ot();
        return function() {
          var n,
            r = Et(t);
          if (e) {
            var a = Et(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return ht(this, n);
        };
      }
      function ht(t, e) {
        return !e || ('object' !== rt(e) && 'function' !== typeof e) ? vt(t) : e;
      }
      function vt(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function Ot() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      function Et(t) {
        return (
          (Et = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          Et(t)
        );
      }
      (nt.Meta = tt), (nt.contextTypes = { grid: R['any'], itemLayout: R['string'] });
      var wt = function(t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(t); a < r.length; a++)
              e.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
                (n[r[a]] = t[r[a]]);
          }
          return n;
        },
        jt = (function(t) {
          yt(n, t);
          var e = bt(n);
          function n(t) {
            var r;
            ft(this, n),
              (r = e.call(this, t)),
              (r.defaultPaginationProps = { current: 1, total: 0 }),
              (r.keys = {}),
              (r.onPaginationChange = r.triggerPaginationEvent('onChange')),
              (r.onPaginationShowSizeChange = r.triggerPaginationEvent('onShowSizeChange')),
              (r.renderItem = function(t, e) {
                var n,
                  a = r.props,
                  o = a.renderItem,
                  i = a.rowKey;
                return o
                  ? ((n = 'function' === typeof i ? i(t) : 'string' === typeof i ? t[i] : t.key),
                    n || (n = 'list-item-'.concat(e)),
                    (r.keys[e] = n),
                    o(t, e))
                  : null;
              }),
              (r.renderEmpty = function(t, e) {
                var n = r.props.locale;
                return a['createElement'](
                  'div',
                  { className: ''.concat(t, '-empty-text') },
                  (n && n.emptyText) || e('List')
                );
              }),
              (r.renderList = function(t) {
                var e,
                  n = t.getPrefixCls,
                  o = t.renderEmpty,
                  i = r.state,
                  c = i.paginationCurrent,
                  l = i.paginationSize,
                  u = r.props,
                  p = u.prefixCls,
                  f = u.bordered,
                  m = u.split,
                  d = u.className,
                  y = u.children,
                  g = u.itemLayout,
                  b = u.loadMore,
                  h = u.pagination,
                  v = u.grid,
                  O = u.dataSource,
                  E = void 0 === O ? [] : O,
                  w = u.size,
                  j = u.header,
                  k = u.footer,
                  C = u.loading,
                  S = wt(u, [
                    'prefixCls',
                    'bordered',
                    'split',
                    'className',
                    'children',
                    'itemLayout',
                    'loadMore',
                    'pagination',
                    'grid',
                    'dataSource',
                    'size',
                    'header',
                    'footer',
                    'loading',
                  ]),
                  x = n('list', p),
                  P = C;
                'boolean' === typeof P && (P = { spinning: P });
                var N = P && P.spinning,
                  _ = '';
                switch (w) {
                  case 'large':
                    _ = 'lg';
                    break;
                  case 'small':
                    _ = 'sm';
                    break;
                  default:
                    break;
                }
                var M = s()(
                    x,
                    d,
                    ((e = {}),
                    pt(e, ''.concat(x, '-vertical'), 'vertical' === g),
                    pt(e, ''.concat(x, '-').concat(_), _),
                    pt(e, ''.concat(x, '-split'), m),
                    pt(e, ''.concat(x, '-bordered'), f),
                    pt(e, ''.concat(x, '-loading'), N),
                    pt(e, ''.concat(x, '-grid'), v),
                    pt(e, ''.concat(x, '-something-after-last-item'), r.isSomethingAfterLastItem()),
                    e)
                  ),
                  I = ut(
                    ut(ut({}, r.defaultPaginationProps), {
                      total: E.length,
                      current: c,
                      pageSize: l,
                    }),
                    h || {}
                  ),
                  R = Math.ceil(I.total / I.pageSize);
                I.current > R && (I.current = R);
                var L,
                  H = h
                    ? a['createElement'](
                        'div',
                        { className: ''.concat(x, '-pagination') },
                        a['createElement'](
                          z['a'],
                          ut({}, I, {
                            onChange: r.onPaginationChange,
                            onShowSizeChange: r.onPaginationShowSizeChange,
                          })
                        )
                      )
                    : null,
                  F = at(E);
                if (
                  (h &&
                    E.length > (I.current - 1) * I.pageSize &&
                    (F = at(E).splice((I.current - 1) * I.pageSize, I.pageSize)),
                  (L = N && a['createElement']('div', { style: { minHeight: 53 } })),
                  F.length > 0)
                ) {
                  var B = F.map(function(t, e) {
                      return r.renderItem(t, e);
                    }),
                    J = [];
                  a['Children'].forEach(B, function(t, e) {
                    J.push(a['cloneElement'](t, { key: r.keys[e] }));
                  }),
                    (L = v
                      ? a['createElement'](D['a'], { gutter: v.gutter }, J)
                      : a['createElement']('ul', { className: ''.concat(x, '-items') }, J));
                } else y || N || (L = r.renderEmpty(x, o));
                var W = I.position || 'bottom';
                return a['createElement'](
                  'div',
                  ut({ className: M }, Object(A['a'])(S, ['rowKey', 'renderItem', 'locale'])),
                  ('top' === W || 'both' === W) && H,
                  j && a['createElement']('div', { className: ''.concat(x, '-header') }, j),
                  a['createElement'](T['a'], P, L, y),
                  k && a['createElement']('div', { className: ''.concat(x, '-footer') }, k),
                  b || (('bottom' === W || 'both' === W) && H)
                );
              });
            var o = t.pagination,
              i = o && 'object' === rt(o) ? o : {};
            return (
              (r.state = {
                paginationCurrent: i.defaultCurrent || 1,
                paginationSize: i.defaultPageSize || 10,
              }),
              r
            );
          }
          return (
            dt(n, [
              {
                key: 'getChildContext',
                value: function() {
                  return { grid: this.props.grid, itemLayout: this.props.itemLayout };
                },
              },
              {
                key: 'triggerPaginationEvent',
                value: function(t) {
                  var e = this;
                  return function(n, r) {
                    var a = e.props.pagination;
                    e.setState({ paginationCurrent: n, paginationSize: r }),
                      a && a[t] && a[t](n, r);
                  };
                },
              },
              {
                key: 'isSomethingAfterLastItem',
                value: function() {
                  var t = this.props,
                    e = t.loadMore,
                    n = t.pagination,
                    r = t.footer;
                  return !!(e || n || r);
                },
              },
              {
                key: 'render',
                value: function() {
                  return a['createElement'](p['a'], null, this.renderList);
                },
              },
            ]),
            n
          );
        })(a['Component']);
      (jt.Item = nt),
        (jt.childContextTypes = { grid: R['any'], itemLayout: R['string'] }),
        (jt.defaultProps = {
          dataSource: [],
          bordered: !1,
          split: !0,
          loading: !1,
          pagination: !1,
        });
      n('BoS7');
      var kt,
        Ct,
        St = n('Sdc0'),
        xt = n('2Taf'),
        Pt = n.n(xt),
        Nt = n('vZ4D'),
        _t = n.n(Nt),
        Mt = n('MhPg'),
        It = n.n(Mt),
        Rt = n('l4Ni'),
        At = n.n(Rt),
        Tt = n('ujKo'),
        zt = n.n(Tt),
        Dt = n('p0pE'),
        Lt = n.n(Dt),
        Ht = (n('OaEy'), n('2fM7')),
        Ft = n('Y2fQ'),
        Bt = n('P5Jw'),
        Jt = n('MuoO'),
        Wt = n('BFsb'),
        qt = n.n(Wt),
        Ut = n('jehZ'),
        Yt = n.n(Ut),
        Kt = n('Y/ft'),
        Qt = n.n(Kt),
        Zt = n('4Ofr'),
        Gt = n.n(Zt),
        Xt = function(t) {
          var e = t.color,
            n = t.check,
            r = Qt()(t, ['color', 'check']);
          return o.a.createElement(
            'div',
            Yt()({}, r, { style: { backgroundColor: e } }),
            n ? o.a.createElement(u['a'], { type: 'check' }) : ''
          );
        },
        Vt = function(t) {
          var e = t.colors,
            n = t.title,
            r = t.value,
            a = t.onChange,
            i = e;
          return (
            e ||
              (i = [
                { key: 'dust', color: '#F5222D' },
                { key: 'volcano', color: '#FA541C' },
                { key: 'sunset', color: '#FAAD14' },
                { key: 'cyan', color: '#13C2C2' },
                { key: 'green', color: '#52C41A' },
                { key: 'daybreak', color: '#1890FF' },
                { key: 'geekblue', color: '#2F54EB' },
                { key: 'purple', color: '#722ED1' },
              ]),
            o.a.createElement(
              'div',
              { className: Gt.a.themeColor },
              o.a.createElement('h3', { className: Gt.a.title }, n),
              o.a.createElement(
                'div',
                { className: Gt.a.content },
                i.map(function(t) {
                  var e = t.key,
                    n = t.color;
                  return o.a.createElement(
                    I['a'],
                    {
                      key: n,
                      title: Object(Ft['formatMessage'])({
                        id: 'app.setting.themecolor.'.concat(e),
                      }),
                    },
                    o.a.createElement(Xt, {
                      className: Gt.a.colorBlock,
                      color: n,
                      check: r === n,
                      onClick: function() {
                        return a && a(n);
                      },
                    })
                  );
                })
              )
            )
          );
        },
        $t = Vt,
        te = function(t) {
          var e = t.value,
            n = t.onChange,
            r = t.list;
          return o.a.createElement(
            'div',
            { className: qt.a.blockChecbox, key: e },
            r.map(function(t) {
              return o.a.createElement(
                I['a'],
                { title: t.title, key: t.key },
                o.a.createElement(
                  'div',
                  {
                    className: qt.a.item,
                    onClick: function() {
                      return n(t.key);
                    },
                  },
                  o.a.createElement('img', { src: t.url, alt: t.key }),
                  o.a.createElement(
                    'div',
                    {
                      className: qt.a.selectIcon,
                      style: { display: e === t.key ? 'block' : 'none' },
                    },
                    o.a.createElement(u['a'], { type: 'check' })
                  )
                )
              );
            })
          );
        },
        ee = te;
      function ne(t) {
        var e = re();
        return function() {
          var n,
            r = zt()(t);
          if (e) {
            var a = zt()(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return At()(this, n);
        };
      }
      function re() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      var ae = Ht['a'].Option,
        oe = function(t) {
          var e = t.children,
            n = t.title,
            r = t.style;
          return o.a.createElement(
            'div',
            { style: Lt()({}, r, { marginBottom: 24 }) },
            o.a.createElement('h3', { className: qt.a.title }, n),
            e
          );
        },
        ie =
          ((kt = Object(Jt['connect'])(function(t) {
            var e = t.setting;
            return { setting: e };
          })),
          kt(
            (Ct = (function(t) {
              It()(n, t);
              var e = ne(n);
              function n() {
                var t;
                Pt()(this, n);
                for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
                  a[i] = arguments[i];
                return (
                  (t = e.call.apply(e, [this].concat(a))),
                  (t.state = { collapse: !1 }),
                  (t.getLayoutSetting = function() {
                    var e = t.props.setting,
                      n = e.contentWidth,
                      r = e.fixedHeader,
                      a = e.layout,
                      i = e.autoHideHeader,
                      c = e.fixSiderbar;
                    return [
                      {
                        title: Object(Ft['formatMessage'])({ id: 'app.setting.content-width' }),
                        action: o.a.createElement(
                          Ht['a'],
                          {
                            value: n,
                            size: 'small',
                            onSelect: function(e) {
                              return t.changeSetting('contentWidth', e);
                            },
                            style: { width: 80 },
                          },
                          'sidemenu' === a
                            ? null
                            : o.a.createElement(
                                ae,
                                { value: 'Fixed' },
                                Object(Ft['formatMessage'])({
                                  id: 'app.setting.content-width.fixed',
                                })
                              ),
                          o.a.createElement(
                            ae,
                            { value: 'Fluid' },
                            Object(Ft['formatMessage'])({ id: 'app.setting.content-width.fluid' })
                          )
                        ),
                      },
                      {
                        title: Object(Ft['formatMessage'])({ id: 'app.setting.fixedheader' }),
                        action: o.a.createElement(St['a'], {
                          size: 'small',
                          checked: !!r,
                          onChange: function(e) {
                            return t.changeSetting('fixedHeader', e);
                          },
                        }),
                      },
                      {
                        title: Object(Ft['formatMessage'])({ id: 'app.setting.hideheader' }),
                        disabled: !r,
                        disabledReason: Object(Ft['formatMessage'])({
                          id: 'app.setting.hideheader.hint',
                        }),
                        action: o.a.createElement(St['a'], {
                          size: 'small',
                          checked: !!i,
                          onChange: function(e) {
                            return t.changeSetting('autoHideHeader', e);
                          },
                        }),
                      },
                      {
                        title: Object(Ft['formatMessage'])({ id: 'app.setting.fixedsidebar' }),
                        disabled: 'topmenu' === a,
                        disabledReason: Object(Ft['formatMessage'])({
                          id: 'app.setting.fixedsidebar.hint',
                        }),
                        action: o.a.createElement(St['a'], {
                          size: 'small',
                          checked: !!c,
                          onChange: function(e) {
                            return t.changeSetting('fixSiderbar', e);
                          },
                        }),
                      },
                    ];
                  }),
                  (t.changeSetting = function(e, n) {
                    var r = t.props.setting,
                      a = Lt()({}, r);
                    (a[e] = n),
                      'layout' === e
                        ? (a.contentWidth = 'topmenu' === n ? 'Fixed' : 'Fluid')
                        : 'fixedHeader' !== e || n || (a.autoHideHeader = !1),
                      t.setState(a, function() {
                        var e = t.props.dispatch;
                        e({ type: 'setting/changeSetting', payload: t.state });
                      });
                  }),
                  (t.togglerContent = function() {
                    var e = t.state.collapse;
                    t.setState({ collapse: !e });
                  }),
                  (t.renderLayoutSettingItem = function(t) {
                    var e = o.a.cloneElement(t.action, { disabled: t.disabled });
                    return o.a.createElement(
                      I['a'],
                      { title: t.disabled ? t.disabledReason : '', placement: 'left' },
                      o.a.createElement(
                        jt.Item,
                        { actions: [e] },
                        o.a.createElement(
                          'span',
                          { style: { opacity: t.disabled ? '0.5' : '' } },
                          t.title
                        )
                      )
                    );
                  }),
                  t
                );
              }
              return (
                _t()(n, [
                  {
                    key: 'render',
                    value: function() {
                      var t = this,
                        e = this.props.setting,
                        n = e.navTheme,
                        a = e.primaryColor,
                        i = e.layout,
                        c = e.colorWeak,
                        l = this.state.collapse;
                      return o.a.createElement(
                        r['a'],
                        {
                          visible: l,
                          width: 300,
                          onClose: this.togglerContent,
                          placement: 'right',
                          handler: o.a.createElement(
                            'div',
                            { className: qt.a.handle, onClick: this.togglerContent },
                            o.a.createElement(u['a'], {
                              type: l ? 'close' : 'setting',
                              style: { color: '#fff', fontSize: 20 },
                            })
                          ),
                          style: { zIndex: 999 },
                        },
                        o.a.createElement(
                          'div',
                          { className: qt.a.content },
                          o.a.createElement(
                            oe,
                            { title: Object(Ft['formatMessage'])({ id: 'app.setting.pagestyle' }) },
                            o.a.createElement(ee, {
                              list: [
                                {
                                  key: 'dark',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                                  title: Object(Ft['formatMessage'])({
                                    id: 'app.setting.pagestyle.dark',
                                  }),
                                },
                                {
                                  key: 'light',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                                  title: Object(Ft['formatMessage'])({
                                    id: 'app.setting.pagestyle.light',
                                  }),
                                },
                              ],
                              value: n,
                              onChange: function(e) {
                                return t.changeSetting('navTheme', e);
                              },
                            })
                          ),
                          o.a.createElement($t, {
                            title: Object(Ft['formatMessage'])({ id: 'app.setting.themecolor' }),
                            value: a,
                            onChange: function(e) {
                              return t.changeSetting('primaryColor', e);
                            },
                          }),
                          o.a.createElement(M['a'], null),
                          o.a.createElement(
                            oe,
                            {
                              title: Object(Ft['formatMessage'])({
                                id: 'app.setting.navigationmode',
                              }),
                            },
                            o.a.createElement(ee, {
                              list: [
                                {
                                  key: 'sidemenu',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                                  title: Object(Ft['formatMessage'])({
                                    id: 'app.setting.sidemenu',
                                  }),
                                },
                                {
                                  key: 'topmenu',
                                  url:
                                    'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                                  title: Object(Ft['formatMessage'])({ id: 'app.setting.topmenu' }),
                                },
                              ],
                              value: i,
                              onChange: function(e) {
                                return t.changeSetting('layout', e);
                              },
                            })
                          ),
                          o.a.createElement(jt, {
                            split: !1,
                            dataSource: this.getLayoutSetting(),
                            renderItem: this.renderLayoutSettingItem,
                          }),
                          o.a.createElement(M['a'], null),
                          o.a.createElement(
                            oe,
                            {
                              title: Object(Ft['formatMessage'])({
                                id: 'app.setting.othersettings',
                              }),
                            },
                            o.a.createElement(jt, {
                              split: !1,
                              renderItem: this.renderLayoutSettingItem,
                              dataSource: [
                                {
                                  title: Object(Ft['formatMessage'])({
                                    id: 'app.setting.weakmode',
                                  }),
                                  action: o.a.createElement(St['a'], {
                                    size: 'small',
                                    checked: !!c,
                                    onChange: function(e) {
                                      return t.changeSetting('colorWeak', e);
                                    },
                                  }),
                                },
                              ],
                            })
                          ),
                          o.a.createElement(M['a'], null),
                          o.a.createElement(
                            Bt['CopyToClipboard'],
                            {
                              text: JSON.stringify(Object(A['a'])(e, ['colorWeak']), null, 2),
                              onCopy: function() {
                                return _['a'].success(
                                  Object(Ft['formatMessage'])({ id: 'app.setting.copyinfo' })
                                );
                              },
                            },
                            o.a.createElement(
                              N['a'],
                              { block: !0, icon: 'copy' },
                              Object(Ft['formatMessage'])({ id: 'app.setting.copy' })
                            )
                          ),
                          o.a.createElement(P, {
                            type: 'warning',
                            className: qt.a.productionHint,
                            message: o.a.createElement(
                              'div',
                              null,
                              Object(Ft['formatMessage'])({ id: 'app.setting.production.hint' }),
                              ' ',
                              o.a.createElement(
                                'a',
                                {
                                  href: 'https://u.ant.design/pro-v2-default-settings',
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                },
                                'src/defaultSettings.js'
                              )
                            ),
                          })
                        )
                      );
                    },
                  },
                ]),
                n
              );
            })(a['Component']))
          ) || Ct);
      e['default'] = ie;
    },
    YkAm: function(t, e, n) {
      t.exports = {
        'ant-alert': 'ant-alert',
        'ant-alert-no-icon': 'ant-alert-no-icon',
        'ant-alert-closable': 'ant-alert-closable',
        'ant-alert-icon': 'ant-alert-icon',
        'ant-alert-description': 'ant-alert-description',
        'ant-alert-success': 'ant-alert-success',
        'ant-alert-info': 'ant-alert-info',
        'ant-alert-warning': 'ant-alert-warning',
        'ant-alert-error': 'ant-alert-error',
        'ant-alert-close-icon': 'ant-alert-close-icon',
        'anticon-close': 'anticon-close',
        'ant-alert-close-text': 'ant-alert-close-text',
        'ant-alert-with-description': 'ant-alert-with-description',
        'ant-alert-message': 'ant-alert-message',
        'ant-alert-closing': 'ant-alert-closing',
        'ant-alert-slide-up-leave': 'ant-alert-slide-up-leave',
        antAlertSlideUpOut: 'antAlertSlideUpOut',
        'ant-alert-banner': 'ant-alert-banner',
        antAlertSlideUpIn: 'antAlertSlideUpIn',
      };
    },
    rHrb: function(t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.CopyToClipboard = void 0);
      var r = o(n('q1tI')),
        a = o(n('+QRC'));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function i(t) {
        return (
          (i =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(t) {
                  return typeof t;
                }
              : function(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          i(t)
        );
      }
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(n, !0).forEach(function(e) {
                v(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(n).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function s(t, e) {
        if (null == t) return {};
        var n,
          r,
          a = u(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]));
        }
        return a;
      }
      function u(t, e) {
        if (null == t) return {};
        var n,
          r,
          a = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (a[n] = t[n]);
        return a;
      }
      function p(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function m(t, e, n) {
        return e && f(t.prototype, e), n && f(t, n), t;
      }
      function d(t, e) {
        return !e || ('object' !== i(e) && 'function' !== typeof e) ? g(t) : e;
      }
      function y(t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          y(t)
        );
      }
      function g(t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function b(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError('Super expression must either be null or a function');
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && h(t, e);
      }
      function h(t, e) {
        return (
          (h =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          h(t, e)
        );
      }
      function v(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var O = (function(t) {
        function e() {
          var t, n;
          p(this, e);
          for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
          return (
            (n = d(this, (t = y(e)).call.apply(t, [this].concat(i)))),
            v(g(n), 'onClick', function(t) {
              var e = n.props,
                o = e.text,
                i = e.onCopy,
                c = e.children,
                l = e.options,
                s = r['default'].Children.only(c),
                u = (0, a['default'])(o, l);
              i && i(o, u),
                s && s.props && 'function' === typeof s.props.onClick && s.props.onClick(t);
            }),
            n
          );
        }
        return (
          b(e, t),
          m(e, [
            {
              key: 'render',
              value: function() {
                var t = this.props,
                  e = (t.text, t.onCopy, t.options, t.children),
                  n = s(t, ['text', 'onCopy', 'options', 'children']),
                  a = r['default'].Children.only(e);
                return r['default'].cloneElement(a, l({}, n, { onClick: this.onClick }));
              },
            },
          ]),
          e
        );
      })(r['default'].PureComponent);
      (e.CopyToClipboard = O), v(O, 'defaultProps', { onCopy: void 0, options: void 0 });
    },
  },
]);
