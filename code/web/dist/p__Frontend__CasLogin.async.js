(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    'CH7+': function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function() {
          return m;
        });
      n('T2oS');
      var r = n('W9HT'),
        c = n('2Taf'),
        o = n.n(c),
        i = n('vZ4D'),
        u = n.n(i),
        a = n('MhPg'),
        f = n.n(a),
        l = n('l4Ni'),
        s = n.n(l),
        p = n('ujKo'),
        b = n.n(p),
        d = n('q1tI'),
        v = n.n(d),
        h = n('+n12'),
        j = n('34ay'),
        O = n('HZnN');
      function y(e) {
        var t = w();
        return function() {
          var n,
            r = b()(e);
          if (t) {
            var c = b()(this).constructor;
            n = Reflect.construct(r, arguments, c);
          } else n = r.apply(this, arguments);
          return s()(this, n);
        };
      }
      function w() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      var m = (function(e) {
        f()(n, e);
        var t = y(n);
        function n() {
          var e;
          o()(this, n), (e = t.call(this));
          var r = JSON.parse(Object(h['b'])('user_info'));
          return (
            Object(j['j'])(r, Object(h['b'])('expires_in')),
            1 === r.is_admin ? Object(j['i'])(['super_admin']) : Object(j['i'])(['admin']),
            Object(O['b'])(),
            Object(j['h'])(Object(h['b'])('access_token').replace('+', ' ')),
            (window.location.href = '/'),
            e
          );
        }
        return (
          u()(n, [
            {
              key: 'render',
              value: function() {
                return v.a.createElement(
                  'div',
                  { style: { textAlign: 'center' } },
                  v.a.createElement(r['a'], null)
                );
              },
            },
          ]),
          n
        );
      })(d['Component']);
    },
  },
]);
