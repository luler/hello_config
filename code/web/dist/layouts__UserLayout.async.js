(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
  {
    BOD2: function(t, e, n) {
      t.exports = {
        container: 'antd-pro-layouts-user-layout-container',
        lang: 'antd-pro-layouts-user-layout-lang',
        content: 'antd-pro-layouts-user-layout-content',
        top: 'antd-pro-layouts-user-layout-top',
        header: 'antd-pro-layouts-user-layout-header',
        logo: 'antd-pro-layouts-user-layout-logo',
        title: 'antd-pro-layouts-user-layout-title',
        desc: 'antd-pro-layouts-user-layout-desc',
      };
    },
    Kkfi: function(t, e, n) {
      t.exports = {
        menu: 'antd-pro-components-select-lang-index-menu',
        dropDown: 'antd-pro-components-select-lang-index-dropDown',
      };
    },
    jH8a: function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n('2Taf'),
        r = n.n(a),
        o = n('vZ4D'),
        c = n.n(o),
        u = n('MhPg'),
        l = n.n(u),
        s = n('l4Ni'),
        i = n.n(s),
        p = n('ujKo'),
        f = n.n(p),
        m = (n('Pwec'), n('CtXQ')),
        d = n('q1tI'),
        y = n.n(d),
        h = n('Y2fQ'),
        v = n('MuoO'),
        g = n('wY1l'),
        w = n.n(g),
        E = n('ZFw/'),
        N = n.n(E),
        b = n('ggcP'),
        D = (n('lUTK'), n('BvKs')),
        R = n('TSYQ'),
        k = n.n(R),
        B = n('+jAw'),
        M = n('Kkfi'),
        O = n.n(M);
      function x(t) {
        var e = P();
        return function() {
          var n,
            a = f()(t);
          if (e) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return i()(this, n);
        };
      }
      function P() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      d['PureComponent'];
      var j = n('BOD2'),
        K = n.n(j),
        Q = n('zwU1'),
        C = n.n(Q),
        q = n('tGQQ');
      function T(t) {
        var e = Y();
        return function() {
          var n,
            a = f()(t);
          if (e) {
            var r = f()(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return i()(this, n);
        };
      }
      function Y() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (t) {
          return !1;
        }
      }
      var F = [],
        J = y.a.createElement(
          d['Fragment'],
          null,
          'Copyright ',
          y.a.createElement(m['a'], { type: 'copyright' }),
          ' 2019 Designed by 1207032539@qq.com'
        ),
        U = (function(t) {
          l()(n, t);
          var e = T(n);
          function n() {
            return r()(this, n), e.apply(this, arguments);
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function() {
                  var t = this.props,
                    e = t.dispatch,
                    n = t.route,
                    a = n.routes,
                    r = n.authority;
                  e({ type: 'menu/getMenuData', payload: { routes: a, authority: r } });
                },
              },
              {
                key: 'render',
                value: function() {
                  var t = this.props,
                    e = t.children,
                    n = t.location.pathname,
                    a = t.breadcrumbNameMap;
                  return y.a.createElement(
                    N.a,
                    { title: Object(q['a'])(n, a) },
                    y.a.createElement(
                      'div',
                      { className: K.a.container },
                      y.a.createElement('div', { className: K.a.lang }),
                      y.a.createElement(
                        'div',
                        { className: K.a.content },
                        y.a.createElement(
                          'div',
                          { className: K.a.top },
                          y.a.createElement(
                            'div',
                            { className: K.a.header },
                            y.a.createElement(
                              w.a,
                              { to: '/' },
                              y.a.createElement('img', {
                                alt: 'logo',
                                className: K.a.logo,
                                src: C.a,
                              }),
                              y.a.createElement(
                                'span',
                                { className: K.a.title },
                                '\u901a\u7528\u914d\u7f6e\u4e2d\u5fc3'
                              )
                            )
                          ),
                          y.a.createElement(
                            'div',
                            { className: K.a.desc },
                            '\u8be5\u7cfb\u7edf\u4e3b\u8981\u7528\u4e8e\u5bf9\u5404\u7cfb\u7edf\u7684\u914d\u7f6e\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u4ee5\u65b9\u4fbf\u5b9e\u73b0\u7cfb\u7edf\u5fae\u670d\u52a1\u3001\u5206\u5e03\u5f0f\u3001\u96c6\u7fa4\u5316'
                          )
                        ),
                        e
                      ),
                      y.a.createElement(b['a'], { links: F, copyright: J })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(d['Component']);
      e['default'] = Object(v['connect'])(function(t) {
        var e = t.menu;
        return { menuData: e.menuData, breadcrumbNameMap: e.breadcrumbNameMap };
      })(U);
    },
  },
]);
