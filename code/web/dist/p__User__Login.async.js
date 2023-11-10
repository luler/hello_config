(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    JAxp: function(e, t, n) {
      e.exports = {
        login: 'antd-pro-components-login-index-login',
        getCaptcha: 'antd-pro-components-login-index-getCaptcha',
        icon: 'antd-pro-components-login-index-icon',
        other: 'antd-pro-components-login-index-other',
        register: 'antd-pro-components-login-index-register',
        prefixIcon: 'antd-pro-components-login-index-prefixIcon',
        submit: 'antd-pro-components-login-index-submit',
      };
    },
    Y5yc: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n('p0pE'),
        r = n.n(a),
        o = n('2Taf'),
        c = n.n(o),
        i = n('vZ4D'),
        u = n.n(i),
        s = n('MhPg'),
        l = n.n(s),
        p = n('l4Ni'),
        f = n.n(p),
        m = n('ujKo'),
        h = n.n(m),
        d = n('q1tI'),
        v = n.n(d),
        g = n('MuoO'),
        y = (n('y8nQ'), n('Vl3Y')),
        b = (n('Znn+'), n('ZTPi')),
        C = n('gWZ8'),
        E = n.n(C),
        x = n('TSYQ'),
        R = n.n(x),
        S = (n('14J3'), n('BMrR')),
        w = (n('+L6B'), n('2/Rp')),
        T = (n('jCWc'), n('kPKH')),
        N = (n('5NDa'), n('5rEg')),
        P = n('jehZ'),
        k = n.n(P),
        I = n('Y/ft'),
        B = n.n(I),
        A = n('BGR+'),
        D = n('JAxp'),
        O = n.n(D),
        q = (n('Pwec'), n('CtXQ')),
        j = {
          UserName: {
            props: {
              size: 'large',
              id: 'userName',
              prefix: v.a.createElement(q['a'], { type: 'user', className: O.a.prefixIcon }),
              placeholder: 'admin',
            },
            rules: [{ required: !0, message: 'Please enter username!' }],
          },
          Password: {
            props: {
              size: 'large',
              prefix: v.a.createElement(q['a'], { type: 'lock', className: O.a.prefixIcon }),
              type: 'password',
              id: 'password',
              placeholder: '888888',
            },
            rules: [{ required: !0, message: 'Please enter password!' }],
          },
          Mobile: {
            props: {
              size: 'large',
              prefix: v.a.createElement(q['a'], { type: 'mobile', className: O.a.prefixIcon }),
              placeholder: 'mobile number',
            },
            rules: [
              { required: !0, message: 'Please enter mobile number!' },
              { pattern: /^1\d{10}$/, message: 'Wrong mobile number format!' },
            ],
          },
          Captcha: {
            props: {
              size: 'large',
              prefix: v.a.createElement(q['a'], { type: 'mail', className: O.a.prefixIcon }),
              placeholder: 'captcha',
            },
            rules: [{ required: !0, message: 'Please enter Captcha!' }],
          },
        },
        F = Object(d['createContext'])(),
        G = F;
      function U(e) {
        var t = z();
        return function() {
          var n,
            a = h()(e);
          if (t) {
            var r = h()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return f()(this, n);
        };
      }
      function z() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      var M = y['a'].Item,
        J = (function(e) {
          l()(n, e);
          var t = U(n);
          function n(e) {
            var a;
            return (
              c()(this, n),
              (a = t.call(this, e)),
              (a.onGetCaptcha = function() {
                var e = a.props.onGetCaptcha,
                  t = e ? e() : null;
                !1 !== t &&
                  (t instanceof Promise
                    ? t.then(a.runGetCaptchaCountDown)
                    : a.runGetCaptchaCountDown());
              }),
              (a.getFormItemOptions = function(e) {
                var t = e.onChange,
                  n = e.defaultValue,
                  a = e.customprops,
                  r = e.rules,
                  o = { rules: r || a.rules };
                return t && (o.onChange = t), n && (o.initialValue = n), o;
              }),
              (a.runGetCaptchaCountDown = function() {
                var e = a.props.countDown,
                  t = e || 59;
                a.setState({ count: t }),
                  (a.interval = setInterval(function() {
                    (t -= 1), a.setState({ count: t }), 0 === t && clearInterval(a.interval);
                  }, 1e3));
              }),
              (a.state = { count: 0 }),
              a
            );
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props,
                    t = e.updateActive,
                    n = e.name;
                  t && t(n);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  clearInterval(this.interval);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.state.count,
                    t = this.props.form.getFieldDecorator,
                    n = this.props,
                    a = (n.onChange, n.customprops),
                    r = (n.defaultValue, n.rules, n.name),
                    o = n.getCaptchaButtonText,
                    c = n.getCaptchaSecondText,
                    i = (n.updateActive, n.type),
                    u = B()(n, [
                      'onChange',
                      'customprops',
                      'defaultValue',
                      'rules',
                      'name',
                      'getCaptchaButtonText',
                      'getCaptchaSecondText',
                      'updateActive',
                      'type',
                    ]),
                    s = this.getFormItemOptions(this.props),
                    l = u || {};
                  if ('Captcha' === i) {
                    var p = Object(A['a'])(l, ['onGetCaptcha', 'countDown']);
                    return v.a.createElement(
                      M,
                      null,
                      v.a.createElement(
                        S['a'],
                        { gutter: 8 },
                        v.a.createElement(
                          T['a'],
                          { span: 16 },
                          t(r, s)(v.a.createElement(N['a'], k()({}, a, p)))
                        ),
                        v.a.createElement(
                          T['a'],
                          { span: 8 },
                          v.a.createElement(
                            w['a'],
                            {
                              disabled: e,
                              className: O.a.getCaptcha,
                              size: 'large',
                              onClick: this.onGetCaptcha,
                            },
                            e ? ''.concat(e, ' ').concat(c) : o
                          )
                        )
                      )
                    );
                  }
                  return v.a.createElement(
                    M,
                    null,
                    t(r, s)(v.a.createElement(N['a'], k()({}, a, l)))
                  );
                },
              },
            ]),
            n
          );
        })(d['Component']);
      J.defaultProps = { getCaptchaButtonText: 'captcha', getCaptchaSecondText: 'second' };
      var K = {};
      Object.keys(j).forEach(function(e) {
        var t = j[e];
        K[e] = function(n) {
          return v.a.createElement(G.Consumer, null, function(a) {
            return v.a.createElement(
              J,
              k()({ customprops: t.props, rules: t.rules }, n, {
                type: e,
                updateActive: a.updateActive,
                form: a.form,
              })
            );
          });
        };
      });
      var V = K;
      function Z(e) {
        var t = W();
        return function() {
          var n,
            a = h()(e);
          if (t) {
            var r = h()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return f()(this, n);
        };
      }
      function W() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      var Y = b['a'].TabPane,
        L = (function() {
          var e = 0;
          return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
            return (e += 1), ''.concat(t).concat(e);
          };
        })(),
        Q = (function(e) {
          l()(n, e);
          var t = Z(n);
          function n(e) {
            var a;
            return c()(this, n), (a = t.call(this, e)), (a.uniqueId = L('login-tab-')), a;
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this.props.tabUtil;
                  e.addTab(this.uniqueId);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.children;
                  return v.a.createElement(Y, this.props, e);
                },
              },
            ]),
            n
          );
        })(d['Component']),
        H = function(e) {
          return v.a.createElement(G.Consumer, null, function(t) {
            return v.a.createElement(Q, k()({ tabUtil: t.tabUtil }, e));
          });
        };
      H.typeName = 'LoginTab';
      var X = H,
        $ = y['a'].Item,
        _ = function(e) {
          var t = e.className,
            n = B()(e, ['className']),
            a = R()(O.a.submit, t);
          return v.a.createElement(
            $,
            null,
            v.a.createElement(
              w['a'],
              k()({ size: 'large', className: a, type: 'primary', htmlType: 'submit' }, n)
            )
          );
        },
        ee = _;
      function te(e) {
        var t = ne();
        return function() {
          var n,
            a = h()(e);
          if (t) {
            var r = h()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return f()(this, n);
        };
      }
      function ne() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      var ae = (function(e) {
        l()(n, e);
        var t = te(n);
        function n(e) {
          var a;
          return (
            c()(this, n),
            (a = t.call(this, e)),
            (a.onSwitch = function(e) {
              a.setState({ type: e });
              var t = a.props.onTabChange;
              t(e);
            }),
            (a.getContext = function() {
              var e = a.state.tabs,
                t = a.props.form;
              return {
                tabUtil: {
                  addTab: function(t) {
                    a.setState({ tabs: [].concat(E()(e), [t]) });
                  },
                  removeTab: function(t) {
                    a.setState({
                      tabs: e.filter(function(e) {
                        return e !== t;
                      }),
                    });
                  },
                },
                form: r()({}, t),
                updateActive: function(e) {
                  var t = a.state,
                    n = t.type,
                    r = t.active;
                  r[n] ? r[n].push(e) : (r[n] = [e]), a.setState({ active: r });
                },
              };
            }),
            (a.handleSubmit = function(e) {
              e.preventDefault();
              var t = a.state,
                n = t.active,
                r = t.type,
                o = a.props,
                c = o.form,
                i = o.onSubmit,
                u = n[r];
              c.validateFields(u, { force: !0 }, function(e, t) {
                i(e, t);
              });
            }),
            (a.state = { type: e.defaultActiveKey, tabs: [], active: {} }),
            a
          );
        }
        return (
          u()(n, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.className,
                  n = e.children,
                  a = this.state,
                  r = a.type,
                  o = a.tabs,
                  c = [],
                  i = [];
                return (
                  v.a.Children.forEach(n, function(e) {
                    e && ('LoginTab' === e.type.typeName ? c.push(e) : i.push(e));
                  }),
                  v.a.createElement(
                    G.Provider,
                    { value: this.getContext() },
                    v.a.createElement(
                      'div',
                      { className: R()(t, O.a.login) },
                      v.a.createElement(
                        y['a'],
                        { onSubmit: this.handleSubmit },
                        o.length
                          ? v.a.createElement(
                              v.a.Fragment,
                              null,
                              v.a.createElement(
                                b['a'],
                                {
                                  animated: !1,
                                  className: O.a.tabs,
                                  activeKey: r,
                                  onChange: this.onSwitch,
                                },
                                c
                              ),
                              i
                            )
                          : n
                      )
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(d['Component']);
      (ae.defaultProps = {
        className: '',
        defaultActiveKey: '',
        onTabChange: function() {},
        onSubmit: function() {},
      }),
        (ae.Tab = X),
        (ae.Submit = ee),
        Object.keys(V).forEach(function(e) {
          ae[e] = V[e];
        });
      var re,
        oe,
        ce = y['a'].create()(ae),
        ie = n('w2qy'),
        ue = n.n(ie);
      function se(e) {
        var t = le();
        return function() {
          var n,
            a = h()(e);
          if (t) {
            var r = h()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return f()(this, n);
        };
      }
      function le() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      var pe = ce.UserName,
        fe = ce.Password,
        me = ce.Submit,
        he =
          ((re = Object(g['connect'])(function(e) {
            var t = e.api,
              n = e.loading;
            return { api: t, submitting: n.effects['api/getAccessToken'] };
          })),
          re(
            (oe = (function(e) {
              l()(n, e);
              var t = se(n);
              function n() {
                var e;
                c()(this, n);
                for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
                  o[i] = arguments[i];
                return (
                  (e = t.call.apply(t, [this].concat(o))),
                  (e.handleSubmit = function(t, n) {
                    if (!t) {
                      var a = e.props.dispatch;
                      a({ type: 'api/getAccessToken', payload: r()({}, n) });
                    }
                  }),
                  e
                );
              }
              return (
                u()(n, [
                  {
                    key: 'render',
                    value: function() {
                      var e = this,
                        t = this.props.submitting;
                      return v.a.createElement(
                        'div',
                        { className: ue.a.main },
                        v.a.createElement(
                          ce,
                          {
                            onSubmit: this.handleSubmit,
                            ref: function(t) {
                              e.loginForm = t;
                            },
                          },
                          v.a.createElement(pe, {
                            name: 'appid',
                            placeholder: '\u8bf7\u8f93\u5165appid',
                            rules: [{ required: !0, message: 'appid\u4e0d\u80fd\u4e3a\u7a7a' }],
                          }),
                          v.a.createElement(fe, {
                            name: 'appsecret',
                            placeholder: '\u8bf7\u8f93\u5165appsecret',
                            rules: [{ required: !0, message: 'appsecret\u4e0d\u80fd\u4e3a\u7a7a' }],
                            onPressEnter: function(t) {
                              t.preventDefault(), e.loginForm.validateFields(e.handleSubmit);
                            },
                          }),
                          v.a.createElement(me, { loading: t }, '\u767b\u5f55')
                        )
                      );
                    },
                  },
                ]),
                n
              );
            })(d['Component']))
          ) || oe);
      t['default'] = he;
    },
    w2qy: function(e, t, n) {
      e.exports = {
        main: 'antd-pro-pages-user-login-main',
        icon: 'antd-pro-pages-user-login-icon',
        other: 'antd-pro-pages-user-login-other',
        register: 'antd-pro-pages-user-login-register',
      };
    },
  },
]);
