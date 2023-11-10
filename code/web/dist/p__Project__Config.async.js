(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '0ujT': function(e, t, r) {
      e.exports = {
        'cm-s-material': 'cm-s-material',
        CodeMirror: 'CodeMirror',
        'CodeMirror-gutters': 'CodeMirror-gutters',
        'CodeMirror-guttermarker': 'CodeMirror-guttermarker',
        'CodeMirror-guttermarker-subtle': 'CodeMirror-guttermarker-subtle',
        'CodeMirror-linenumber': 'CodeMirror-linenumber',
        'CodeMirror-cursor': 'CodeMirror-cursor',
        'cm-fat-cursor': 'cm-fat-cursor',
        'cm-animate-fat-cursor': 'cm-animate-fat-cursor',
        'CodeMirror-selected': 'CodeMirror-selected',
        'CodeMirror-focused': 'CodeMirror-focused',
        'CodeMirror-line': 'CodeMirror-line',
        'CodeMirror-activeline-background': 'CodeMirror-activeline-background',
        'cm-keyword': 'cm-keyword',
        'cm-operator': 'cm-operator',
        'cm-variable-2': 'cm-variable-2',
        'cm-type': 'cm-type',
        'cm-variable-3': 'cm-variable-3',
        'cm-builtin': 'cm-builtin',
        'cm-atom': 'cm-atom',
        'cm-number': 'cm-number',
        'cm-def': 'cm-def',
        'cm-string': 'cm-string',
        'cm-string-2': 'cm-string-2',
        'cm-comment': 'cm-comment',
        'cm-variable': 'cm-variable',
        'cm-tag': 'cm-tag',
        'cm-meta': 'cm-meta',
        'cm-attribute': 'cm-attribute',
        'cm-property': 'cm-property',
        'cm-qualifier': 'cm-qualifier',
        'cm-error': 'cm-error',
        'CodeMirror-matchingbracket': 'CodeMirror-matchingbracket',
      };
    },
    '3Fvf': function(e, t, r) {
      (function(e) {
        e(r('VrN/'));
      })(function(e) {
        'use strict';
        e.defineMode('properties', function() {
          return {
            token: function(e, t) {
              var r = e.sol() || t.afterSection,
                n = e.eol();
              if (
                ((t.afterSection = !1),
                r &&
                  (t.nextMultiline
                    ? ((t.inMultiline = !0), (t.nextMultiline = !1))
                    : (t.position = 'def')),
                n && !t.nextMultiline && ((t.inMultiline = !1), (t.position = 'def')),
                r)
              )
                while (e.eatSpace());
              var i = e.next();
              return !r || ('#' !== i && '!' !== i && ';' !== i)
                ? r && '[' === i
                  ? ((t.afterSection = !0), e.skipTo(']'), e.eat(']'), 'header')
                  : '=' === i || ':' === i
                  ? ((t.position = 'quote'), null)
                  : ('\\' === i && 'quote' === t.position && e.eol() && (t.nextMultiline = !0),
                    t.position)
                : ((t.position = 'comment'), e.skipToEnd(), 'comment');
            },
            startState: function() {
              return { position: 'def', nextMultiline: !1, inMultiline: !1, afterSection: !1 };
            },
          };
        }),
          e.defineMIME('text/x-properties', 'properties'),
          e.defineMIME('text/x-ini', 'properties');
      });
    },
    '4EVA': function(e, t, r) {
      'use strict';
      r.r(t);
      r('T2oS');
      var n,
        i,
        o = r('W9HT'),
        l = (r('Znn+'), r('ZTPi')),
        a = (r('g9YV'), r('wCAj')),
        s = (r('14J3'), r('BMrR')),
        c = (r('jCWc'), r('kPKH')),
        u = (r('y8nQ'), r('Vl3Y')),
        d = (r('5NDa'), r('5rEg')),
        h = (r('+L6B'), r('2/Rp')),
        f = (r('tU7J'), r('wFql')),
        p = (r('Pwec'), r('CtXQ')),
        g = (r('/zsF'), r('PArb')),
        m = (r('miYZ'), r('tsqr')),
        v = r('p0pE'),
        y = r.n(v),
        b = r('2Taf'),
        w = r.n(b),
        C = r('vZ4D'),
        x = r.n(C),
        k = r('rlhR'),
        S = r.n(k),
        M = r('MhPg'),
        L = r.n(M),
        T = r('l4Ni'),
        N = r.n(T),
        D = r('ujKo'),
        O = r.n(D),
        A = (r('2qtc'), r('kLXV')),
        W = r('q1tI'),
        E = r.n(W),
        H = r('MuoO'),
        P = r('3a4m'),
        F = r.n(P),
        R = r('a2PE');
      r('p77/'), r('0ujT'), r('3Fvf');
      function I(e) {
        var t = z();
        return function() {
          var r,
            n = O()(e);
          if (t) {
            var i = O()(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return N()(this, r);
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
      var B = A['a'].confirm,
        U =
          ((n = Object(H['connect'])(function(e) {
            var t = e.api,
              r = e.loading;
            return { api: t, _loading: r.effects['api/getProjectEnvConfigList'] };
          })),
          n(
            (i = (function(e) {
              L()(r, e);
              var t = I(r);
              function r() {
                var e;
                w()(this, r);
                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                  i[o] = arguments[o];
                return (
                  (e = t.call.apply(t, [this].concat(i))),
                  (e.state = {
                    params: { project_env_id: 0 },
                    selectedRowKeys: [],
                    visible: !1,
                    temp_data: {},
                    model_title: '',
                    text: '',
                    temp_text: !1,
                    webhooking: !1,
                  }),
                  (e.showConfirm = function(t) {
                    var r = S()(e);
                    B({
                      title: '\u4f60\u786e\u5b9a\u8981\u5220\u9664\u9009\u4e2d\u9879\u5417?',
                      content:
                        '\u6ce8\u610f\uff1a\u70b9\u51fb\u786e\u8ba4\uff0c\u5c06\u5220\u9664\u65e0\u6cd5\u6062\u590d',
                      okText: '\u786e\u5b9a',
                      cancelText: '\u53d6\u6d88',
                      onOk: function() {
                        return new Promise(function(e, n) {
                          var i = r.props.dispatch;
                          i({ type: 'api/delProjectEnvConfig', payload: { ids: t } }).then(
                            function() {
                              r.setState({ selectedRowKeys: [] }, function() {
                                r.fetch(), setTimeout(Math.random() > 0.5 ? e : n, 1e3);
                              });
                            }
                          );
                        }).catch(function() {
                          return console.log('Oops errors!');
                        });
                      },
                      onCancel: function() {},
                    });
                  }),
                  (e.onSelectChange = function(t) {
                    e.setState({ selectedRowKeys: t });
                  }),
                  e
                );
              }
              return (
                x()(r, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      var e = this;
                      this.setState(
                        {
                          params: y()({}, this.state.params, {
                            project_env_id: this.props.match.params.project_env_id,
                          }),
                        },
                        function() {
                          e.fetch();
                        }
                      ),
                        m['a'].config({ top: 100, duration: 2, maxCount: 3 });
                    },
                  },
                  {
                    key: 'fetch',
                    value: function() {
                      var e = this,
                        t = this.props.dispatch;
                      t({ type: 'api/getProjectEnvConfigList', payload: this.state.params }).then(
                        function() {
                          var t = e.props.api;
                          e.setState({ text: t.putProjectEnvConfigList.text });
                        }
                      );
                    },
                  },
                  {
                    key: 'render',
                    value: function() {
                      var e = this,
                        t = [
                          { title: 'Id', dataIndex: 'id', key: 'id' },
                          { title: 'key', dataIndex: 'key', key: 'key' },
                          { title: 'value', dataIndex: 'value', key: 'value', width: 320 },
                          { title: '\u5907\u6ce8', dataIndex: 'desc', key: 'desc' },
                          {
                            title: '\u9879\u76ee\u540d\u79f0/\u73af\u5883',
                            key: 'project_env_name',
                            render: function(e, t) {
                              return E.a.createElement(
                                'div',
                                null,
                                ''.concat(t.project_name, '/').concat(t.env_code)
                              );
                            },
                          },
                          {
                            title: '\u6700\u540e\u66f4\u65b0\u65f6\u95f4',
                            dataIndex: 'update_time',
                            key: 'update_time',
                            width: 160,
                          },
                          {
                            title: '\u64cd\u4f5c',
                            key: 'action',
                            width: 120,
                            render: function(t, r) {
                              return E.a.createElement(
                                'span',
                                null,
                                E.a.createElement(
                                  'a',
                                  {
                                    onClick: function() {
                                      e.setState({
                                        visible: !0,
                                        model_title: '\u7f16\u8f91\u914d\u7f6e',
                                        temp_data: {
                                          id: r.id,
                                          key: r.key,
                                          value: r.value,
                                          desc: r.desc,
                                        },
                                      });
                                    },
                                  },
                                  '\u7f16\u8f91'
                                ),
                                E.a.createElement(g['a'], { type: 'vertical' }),
                                E.a.createElement(
                                  'a',
                                  {
                                    style: { color: 'red' },
                                    onClick: function() {
                                      e.showConfirm([r.id]);
                                    },
                                  },
                                  '\u5220\u9664'
                                )
                              );
                            },
                          },
                        ],
                        r = this.props,
                        n = r._loading,
                        i = r.api,
                        v = this.state.selectedRowKeys;
                      return E.a.createElement(
                        o['a'],
                        {
                          size: 'large',
                          tip:
                            '\u6b63\u5728\u66f4\u65b0\u914d\u7f6e\u5e76\u6267\u884c\u76f8\u5e94\u7684webhook (\u6ce8\uff1a\u5982\u679c\u957f\u65f6\u95f4\u672a\u5173\u95ed\uff0c\u8bf7\u5237\u65b0\u9875\u9762\uff01)',
                          spinning: this.state.webhooking,
                        },
                        E.a.createElement(
                          'div',
                          null,
                          E.a.createElement(
                            'div',
                            { style: { padding: '20px' } },
                            E.a.createElement(
                              'a',
                              {
                                onClick: function() {
                                  F.a.goBack();
                                },
                              },
                              E.a.createElement(p['a'], { theme: 'twoTone', type: 'left-circle' }),
                              '\u8fd4\u56de'
                            )
                          ),
                          E.a.createElement(
                            'div',
                            { style: { backgroundColor: 'white', padding: '20px 20px' } },
                            E.a.createElement(
                              'div',
                              null,
                              E.a.createElement(
                                f['a'].Title,
                                { level: 3, style: { textAlign: 'center' } },
                                '\u914d\u7f6e\u7ba1\u7406'
                              )
                            ),
                            E.a.createElement(
                              l['a'],
                              null,
                              E.a.createElement(
                                l['a'].TabPane,
                                {
                                  tab: E.a.createElement(
                                    'span',
                                    null,
                                    E.a.createElement(p['a'], { type: 'table' }),
                                    '\u8868\u683c'
                                  ),
                                  key: '1',
                                },
                                E.a.createElement(
                                  'div',
                                  { style: { padding: '20px 0' } },
                                  E.a.createElement(
                                    s['a'],
                                    null,
                                    E.a.createElement(
                                      c['a'],
                                      { span: 8 },
                                      E.a.createElement(
                                        h['a'],
                                        {
                                          type: 'primary',
                                          onClick: function() {
                                            e.setState({
                                              visible: !0,
                                              model_title: '\u65b0\u589e\u914d\u7f6e',
                                              temp_data: {},
                                            });
                                          },
                                        },
                                        '\u65b0\u589e'
                                      ),
                                      E.a.createElement(
                                        A['a'],
                                        {
                                          title: this.state.model_title,
                                          visible: this.state.visible,
                                          confirmLoading: this.state.confirmLoading || !1,
                                          okText: '\u4fdd\u5b58',
                                          onOk: function() {
                                            var t = e.state.temp_data;
                                            if (t.key) {
                                              var r = e.props.dispatch;
                                              e.setState(
                                                { confirmLoading: !0, webhooking: !0 },
                                                function() {
                                                  var n = 'api/addProjectEnvConfig';
                                                  t.id && (n = 'api/editProjectEnvConfig'),
                                                    (t.project_env_id =
                                                      e.state.params.project_env_id),
                                                    r({ type: n, payload: t }).then(function() {
                                                      e.setState(
                                                        {
                                                          visible: !1,
                                                          confirmLoading: !1,
                                                          webhooking: !1,
                                                        },
                                                        function() {
                                                          e.fetch();
                                                        }
                                                      );
                                                    });
                                                }
                                              );
                                            } else
                                              m['a'].warning(
                                                '\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a'
                                              );
                                          },
                                          onCancel: function() {
                                            e.setState({ visible: !1, confirmLoading: !1 });
                                          },
                                        },
                                        E.a.createElement(
                                          u['a'],
                                          null,
                                          E.a.createElement(
                                            u['a'].Item,
                                            { required: !0, label: 'key' },
                                            E.a.createElement(d['a'], {
                                              onInput: function(t) {
                                                e.setState({
                                                  temp_data: y()({}, e.state.temp_data, {
                                                    key: t.target.value,
                                                  }),
                                                });
                                              },
                                              name: 'key',
                                              disabled: Boolean(this.state.temp_data.id) || !1,
                                              placeholder: '\u8bf7\u8f93\u5165\u952e\u540d',
                                              value: this.state.temp_data.key || '',
                                            })
                                          ),
                                          E.a.createElement(
                                            u['a'].Item,
                                            { label: 'value' },
                                            E.a.createElement(d['a'].TextArea, {
                                              rows: 5,
                                              onInput: function(t) {
                                                e.setState({
                                                  temp_data: y()({}, e.state.temp_data, {
                                                    value: t.target.value,
                                                  }),
                                                });
                                              },
                                              name: 'desc',
                                              placeholder: '\u8bf7\u8f93\u5165\u952e\u503c',
                                              value: this.state.temp_data.value || '',
                                            })
                                          ),
                                          E.a.createElement(
                                            u['a'].Item,
                                            { label: '\u5907\u6ce8' },
                                            E.a.createElement(d['a'].TextArea, {
                                              rows: 5,
                                              onInput: function(t) {
                                                e.setState({
                                                  temp_data: y()({}, e.state.temp_data, {
                                                    desc: t.target.value,
                                                  }),
                                                });
                                              },
                                              name: 'desc',
                                              placeholder: '\u8bf7\u8f93\u5165\u5907\u6ce8',
                                              value: this.state.temp_data.desc || '',
                                            })
                                          )
                                        )
                                      ),
                                      '\xa0\xa0\xa0\xa0',
                                      E.a.createElement(
                                        h['a'],
                                        {
                                          type: 'danger',
                                          onClick: function(t) {
                                            0 === v.length
                                              ? m['a'].warning(
                                                  '\u8bf7\u9009\u62e9\u9700\u8981\u5220\u9664\u7684\u9879\u76ee'
                                                )
                                              : e.showConfirm(v),
                                              t.stopPropagation();
                                          },
                                        },
                                        '\u5220\u9664\u9009\u4e2d'
                                      )
                                    )
                                  )
                                ),
                                E.a.createElement(a['a'], {
                                  dataSource: i.putProjectEnvConfigList.list,
                                  rowKey: function(e) {
                                    return e.id;
                                  },
                                  pagination: !1,
                                  columns: t,
                                  loading: n,
                                  rowSelection: {
                                    selectedRowKeys: v,
                                    onChange: this.onSelectChange,
                                  },
                                })
                              ),
                              E.a.createElement(
                                l['a'].TabPane,
                                {
                                  tab: E.a.createElement(
                                    'span',
                                    null,
                                    E.a.createElement(p['a'], { type: 'book' }),
                                    '\u6587\u672c'
                                  ),
                                  key: '2',
                                },
                                E.a.createElement(R['UnControlled'], {
                                  value: this.state.text,
                                  options: {
                                    mode: 'properties',
                                    theme: 'material',
                                    lineNumbers: !0,
                                  },
                                  onChange: function(t, r, n) {
                                    e.setState({ temp_text: n });
                                  },
                                }),
                                E.a.createElement(
                                  h['a'],
                                  {
                                    style: { marginTop: '20px' },
                                    type: 'primary',
                                    onClick: function() {
                                      if (!1 !== e.state.temp_text) {
                                        e.setState({ webhooking: !0 });
                                        var t = e.props.dispatch;
                                        t({
                                          type: 'api/editProjectEnvConfigV2',
                                          payload: {
                                            project_env_id: e.state.params.project_env_id,
                                            text: e.state.temp_text,
                                          },
                                        }).then(function() {
                                          e.setState({ webhooking: !1 }), e.fetch();
                                        });
                                      } else
                                        m['a'].warning(
                                          '\u914d\u7f6e\u6587\u672c\u6682\u65e0\u4fee\u6539'
                                        );
                                    },
                                  },
                                  '\u4fdd\u5b58'
                                )
                              )
                            )
                          )
                        )
                      );
                    },
                  },
                ]),
                r
              );
            })(W['Component']))
          ) || i);
      t['default'] = U;
    },
    'VrN/': function(e, t, r) {
      (function(t, r) {
        e.exports = r();
      })(0, function() {
        'use strict';
        var e = navigator.userAgent,
          t = navigator.platform,
          r = /gecko\/\d/i.test(e),
          n = /MSIE \d/.test(e),
          i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
          o = /Edge\/(\d+)/.exec(e),
          l = n || i || o,
          a = l && (n ? document.documentMode || 6 : +(o || i)[1]),
          s = !o && /WebKit\//.test(e),
          c = s && /Qt\/\d+\.\d+/.test(e),
          u = !o && /Chrome\//.test(e),
          d = /Opera\//.test(e),
          h = /Apple Computer/.test(navigator.vendor),
          f = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
          p = /PhantomJS/.test(e),
          g = h && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
          m = /Android/.test(e),
          v = g || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
          y = g || /Mac/.test(t),
          b = /\bCrOS\b/.test(e),
          w = /win/i.test(t),
          C = d && e.match(/Version\/(\d*\.\d*)/);
        C && (C = Number(C[1])), C && C >= 15 && ((d = !1), (s = !0));
        var x = y && (c || (d && (null == C || C < 12.11))),
          k = r || (l && a >= 9);
        function S(e) {
          return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
        }
        var M,
          L = function(e, t) {
            var r = e.className,
              n = S(t).exec(r);
            if (n) {
              var i = r.slice(n.index + n[0].length);
              e.className = r.slice(0, n.index) + (i ? n[1] + i : '');
            }
          };
        function T(e) {
          for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
          return e;
        }
        function N(e, t) {
          return T(e).appendChild(t);
        }
        function D(e, t, r, n) {
          var i = document.createElement(e);
          if ((r && (i.className = r), n && (i.style.cssText = n), 'string' == typeof t))
            i.appendChild(document.createTextNode(t));
          else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
          return i;
        }
        function O(e, t, r, n) {
          var i = D(e, t, r, n);
          return i.setAttribute('role', 'presentation'), i;
        }
        function A(e, t) {
          if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
          do {
            if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
          } while ((t = t.parentNode));
        }
        function W() {
          var e;
          try {
            e = document.activeElement;
          } catch (t) {
            e = document.body || null;
          }
          while (e && e.shadowRoot && e.shadowRoot.activeElement) e = e.shadowRoot.activeElement;
          return e;
        }
        function E(e, t) {
          var r = e.className;
          S(t).test(r) || (e.className += (r ? ' ' : '') + t);
        }
        function H(e, t) {
          for (var r = e.split(' '), n = 0; n < r.length; n++)
            r[n] && !S(r[n]).test(t) && (t += ' ' + r[n]);
          return t;
        }
        M = document.createRange
          ? function(e, t, r, n) {
              var i = document.createRange();
              return i.setEnd(n || e, r), i.setStart(e, t), i;
            }
          : function(e, t, r) {
              var n = document.body.createTextRange();
              try {
                n.moveToElementText(e.parentNode);
              } catch (e) {
                return n;
              }
              return n.collapse(!0), n.moveEnd('character', r), n.moveStart('character', t), n;
            };
        var P = function(e) {
          e.select();
        };
        function F(e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return function() {
            return e.apply(null, t);
          };
        }
        function R(e, t, r) {
          for (var n in (t || (t = {}), e))
            !e.hasOwnProperty(n) || (!1 === r && t.hasOwnProperty(n)) || (t[n] = e[n]);
          return t;
        }
        function I(e, t, r, n, i) {
          null == t && ((t = e.search(/[^\s\u00a0]/)), -1 == t && (t = e.length));
          for (var o = n || 0, l = i || 0; ; ) {
            var a = e.indexOf('\t', o);
            if (a < 0 || a >= t) return l + (t - o);
            (l += a - o), (l += r - (l % r)), (o = a + 1);
          }
        }
        g
          ? (P = function(e) {
              (e.selectionStart = 0), (e.selectionEnd = e.value.length);
            })
          : l &&
            (P = function(e) {
              try {
                e.select();
              } catch (e) {}
            });
        var z = function() {
          (this.id = null),
            (this.f = null),
            (this.time = 0),
            (this.handler = F(this.onTimeout, this));
        };
        function B(e, t) {
          for (var r = 0; r < e.length; ++r) if (e[r] == t) return r;
          return -1;
        }
        (z.prototype.onTimeout = function(e) {
          (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
        }),
          (z.prototype.set = function(e, t) {
            this.f = t;
            var r = +new Date() + e;
            (!this.id || r < this.time) &&
              (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = r));
          });
        var U = 50,
          _ = {
            toString: function() {
              return 'CodeMirror.Pass';
            },
          },
          j = { scroll: !1 },
          V = { origin: '*mouse' },
          G = { origin: '+move' };
        function K(e, t, r) {
          for (var n = 0, i = 0; ; ) {
            var o = e.indexOf('\t', n);
            -1 == o && (o = e.length);
            var l = o - n;
            if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
            if (((i += o - n), (i += r - (i % r)), (n = o + 1), i >= t)) return n;
          }
        }
        var q = [''];
        function X(e) {
          while (q.length <= e) q.push(Y(q) + ' ');
          return q[e];
        }
        function Y(e) {
          return e[e.length - 1];
        }
        function $(e, t) {
          for (var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n);
          return r;
        }
        function Z(e, t, r) {
          var n = 0,
            i = r(t);
          while (n < e.length && r(e[n]) <= i) n++;
          e.splice(n, 0, t);
        }
        function J() {}
        function Q(e, t) {
          var r;
          return (
            Object.create ? (r = Object.create(e)) : ((J.prototype = e), (r = new J())),
            t && R(t, r),
            r
          );
        }
        var ee = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
        function te(e) {
          return /\w/.test(e) || (e > '\x80' && (e.toUpperCase() != e.toLowerCase() || ee.test(e)));
        }
        function re(e, t) {
          return t ? !!(t.source.indexOf('\\w') > -1 && te(e)) || t.test(e) : te(e);
        }
        function ne(e) {
          for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
          return !0;
        }
        var ie = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
        function oe(e) {
          return e.charCodeAt(0) >= 768 && ie.test(e);
        }
        function le(e, t, r) {
          while ((r < 0 ? t > 0 : t < e.length) && oe(e.charAt(t))) t += r;
          return t;
        }
        function ae(e, t, r) {
          for (var n = t > r ? -1 : 1; ; ) {
            if (t == r) return t;
            var i = (t + r) / 2,
              o = n < 0 ? Math.ceil(i) : Math.floor(i);
            if (o == t) return e(o) ? t : r;
            e(o) ? (r = o) : (t = o + n);
          }
        }
        function se(e, t, r, n) {
          if (!e) return n(t, r, 'ltr', 0);
          for (var i = !1, o = 0; o < e.length; ++o) {
            var l = e[o];
            ((l.from < r && l.to > t) || (t == r && l.to == t)) &&
              (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? 'rtl' : 'ltr', o),
              (i = !0));
          }
          i || n(t, r, 'ltr');
        }
        var ce = null;
        function ue(e, t, r) {
          var n;
          ce = null;
          for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t) return i;
            o.to == t && (o.from != o.to && 'before' == r ? (n = i) : (ce = i)),
              o.from == t && (o.from != o.to && 'before' != r ? (n = i) : (ce = i));
          }
          return null != n ? n : ce;
        }
        var de = (function() {
          var e =
              'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
            t =
              'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
          function r(r) {
            return r <= 247
              ? e.charAt(r)
              : 1424 <= r && r <= 1524
              ? 'R'
              : 1536 <= r && r <= 1785
              ? t.charAt(r - 1536)
              : 1774 <= r && r <= 2220
              ? 'r'
              : 8192 <= r && r <= 8203
              ? 'w'
              : 8204 == r
              ? 'b'
              : 'L';
          }
          var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
            i = /[stwN]/,
            o = /[LRr]/,
            l = /[Lb1n]/,
            a = /[1n]/;
          function s(e, t, r) {
            (this.level = e), (this.from = t), (this.to = r);
          }
          return function(e, t) {
            var c = 'ltr' == t ? 'L' : 'R';
            if (0 == e.length || ('ltr' == t && !n.test(e))) return !1;
            for (var u = e.length, d = [], h = 0; h < u; ++h) d.push(r(e.charCodeAt(h)));
            for (var f = 0, p = c; f < u; ++f) {
              var g = d[f];
              'm' == g ? (d[f] = p) : (p = g);
            }
            for (var m = 0, v = c; m < u; ++m) {
              var y = d[m];
              '1' == y && 'r' == v
                ? (d[m] = 'n')
                : o.test(y) && ((v = y), 'r' == y && (d[m] = 'R'));
            }
            for (var b = 1, w = d[0]; b < u - 1; ++b) {
              var C = d[b];
              '+' == C && '1' == w && '1' == d[b + 1]
                ? (d[b] = '1')
                : ',' != C || w != d[b + 1] || ('1' != w && 'n' != w) || (d[b] = w),
                (w = C);
            }
            for (var x = 0; x < u; ++x) {
              var k = d[x];
              if (',' == k) d[x] = 'N';
              else if ('%' == k) {
                var S = void 0;
                for (S = x + 1; S < u && '%' == d[S]; ++S);
                for (
                  var M = (x && '!' == d[x - 1]) || (S < u && '1' == d[S]) ? '1' : 'N', L = x;
                  L < S;
                  ++L
                )
                  d[L] = M;
                x = S - 1;
              }
            }
            for (var T = 0, N = c; T < u; ++T) {
              var D = d[T];
              'L' == N && '1' == D ? (d[T] = 'L') : o.test(D) && (N = D);
            }
            for (var O = 0; O < u; ++O)
              if (i.test(d[O])) {
                var A = void 0;
                for (A = O + 1; A < u && i.test(d[A]); ++A);
                for (
                  var W = 'L' == (O ? d[O - 1] : c),
                    E = 'L' == (A < u ? d[A] : c),
                    H = W == E ? (W ? 'L' : 'R') : c,
                    P = O;
                  P < A;
                  ++P
                )
                  d[P] = H;
                O = A - 1;
              }
            for (var F, R = [], I = 0; I < u; )
              if (l.test(d[I])) {
                var z = I;
                for (++I; I < u && l.test(d[I]); ++I);
                R.push(new s(0, z, I));
              } else {
                var B = I,
                  U = R.length,
                  _ = 'rtl' == t ? 1 : 0;
                for (++I; I < u && 'L' != d[I]; ++I);
                for (var j = B; j < I; )
                  if (a.test(d[j])) {
                    B < j && (R.splice(U, 0, new s(1, B, j)), (U += _));
                    var V = j;
                    for (++j; j < I && a.test(d[j]); ++j);
                    R.splice(U, 0, new s(2, V, j)), (U += _), (B = j);
                  } else ++j;
                B < I && R.splice(U, 0, new s(1, B, I));
              }
            return (
              'ltr' == t &&
                (1 == R[0].level &&
                  (F = e.match(/^\s+/)) &&
                  ((R[0].from = F[0].length), R.unshift(new s(0, 0, F[0].length))),
                1 == Y(R).level &&
                  (F = e.match(/\s+$/)) &&
                  ((Y(R).to -= F[0].length), R.push(new s(0, u - F[0].length, u)))),
              'rtl' == t ? R.reverse() : R
            );
          };
        })();
        function he(e, t) {
          var r = e.order;
          return null == r && (r = e.order = de(e.text, t)), r;
        }
        var fe = [],
          pe = function(e, t, r) {
            if (e.addEventListener) e.addEventListener(t, r, !1);
            else if (e.attachEvent) e.attachEvent('on' + t, r);
            else {
              var n = e._handlers || (e._handlers = {});
              n[t] = (n[t] || fe).concat(r);
            }
          };
        function ge(e, t) {
          return (e._handlers && e._handlers[t]) || fe;
        }
        function me(e, t, r) {
          if (e.removeEventListener) e.removeEventListener(t, r, !1);
          else if (e.detachEvent) e.detachEvent('on' + t, r);
          else {
            var n = e._handlers,
              i = n && n[t];
            if (i) {
              var o = B(i, r);
              o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1)));
            }
          }
        }
        function ve(e, t) {
          var r = ge(e, t);
          if (r.length)
            for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i)
              r[i].apply(null, n);
        }
        function ye(e, t, r) {
          return (
            'string' == typeof t &&
              (t = {
                type: t,
                preventDefault: function() {
                  this.defaultPrevented = !0;
                },
              }),
            ve(e, r || t.type, e, t),
            Se(t) || t.codemirrorIgnore
          );
        }
        function be(e) {
          var t = e._handlers && e._handlers.cursorActivity;
          if (t)
            for (
              var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []),
                n = 0;
              n < t.length;
              ++n
            )
              -1 == B(r, t[n]) && r.push(t[n]);
        }
        function we(e, t) {
          return ge(e, t).length > 0;
        }
        function Ce(e) {
          (e.prototype.on = function(e, t) {
            pe(this, e, t);
          }),
            (e.prototype.off = function(e, t) {
              me(this, e, t);
            });
        }
        function xe(e) {
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        }
        function ke(e) {
          e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
        }
        function Se(e) {
          return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
        }
        function Me(e) {
          xe(e), ke(e);
        }
        function Le(e) {
          return e.target || e.srcElement;
        }
        function Te(e) {
          var t = e.which;
          return (
            null == t &&
              (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)),
            y && e.ctrlKey && 1 == t && (t = 3),
            t
          );
        }
        var Ne,
          De,
          Oe = (function() {
            if (l && a < 9) return !1;
            var e = D('div');
            return 'draggable' in e || 'dragDrop' in e;
          })();
        function Ae(e) {
          if (null == Ne) {
            var t = D('span', '\u200b');
            N(e, D('span', [t, document.createTextNode('x')])),
              0 != e.firstChild.offsetHeight &&
                (Ne = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && a < 8));
          }
          var r = Ne
            ? D('span', '\u200b')
            : D('span', '\xa0', null, 'display: inline-block; width: 1px; margin-right: -1px');
          return r.setAttribute('cm-text', ''), r;
        }
        function We(e) {
          if (null != De) return De;
          var t = N(e, document.createTextNode('A\u062eA')),
            r = M(t, 0, 1).getBoundingClientRect(),
            n = M(t, 1, 2).getBoundingClientRect();
          return T(e), !(!r || r.left == r.right) && (De = n.right - r.right < 3);
        }
        var Ee =
            3 != '\n\nb'.split(/\n/).length
              ? function(e) {
                  var t = 0,
                    r = [],
                    n = e.length;
                  while (t <= n) {
                    var i = e.indexOf('\n', t);
                    -1 == i && (i = e.length);
                    var o = e.slice(t, '\r' == e.charAt(i - 1) ? i - 1 : i),
                      l = o.indexOf('\r');
                    -1 != l ? (r.push(o.slice(0, l)), (t += l + 1)) : (r.push(o), (t = i + 1));
                  }
                  return r;
                }
              : function(e) {
                  return e.split(/\r\n?|\n/);
                },
          He = window.getSelection
            ? function(e) {
                try {
                  return e.selectionStart != e.selectionEnd;
                } catch (e) {
                  return !1;
                }
              }
            : function(e) {
                var t;
                try {
                  t = e.ownerDocument.selection.createRange();
                } catch (e) {}
                return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints('StartToEnd', t);
              },
          Pe = (function() {
            var e = D('div');
            return (
              'oncopy' in e || (e.setAttribute('oncopy', 'return;'), 'function' == typeof e.oncopy)
            );
          })(),
          Fe = null;
        function Re(e) {
          if (null != Fe) return Fe;
          var t = N(e, D('span', 'x')),
            r = t.getBoundingClientRect(),
            n = M(t, 0, 1).getBoundingClientRect();
          return (Fe = Math.abs(r.left - n.left) > 1);
        }
        var Ie = {},
          ze = {};
        function Be(e, t) {
          arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
            (Ie[e] = t);
        }
        function Ue(e, t) {
          ze[e] = t;
        }
        function _e(e) {
          if ('string' == typeof e && ze.hasOwnProperty(e)) e = ze[e];
          else if (e && 'string' == typeof e.name && ze.hasOwnProperty(e.name)) {
            var t = ze[e.name];
            'string' == typeof t && (t = { name: t }), (e = Q(t, e)), (e.name = t.name);
          } else {
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
              return _e('application/xml');
            if ('string' == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
              return _e('application/json');
          }
          return 'string' == typeof e ? { name: e } : e || { name: 'null' };
        }
        function je(e, t) {
          t = _e(t);
          var r = Ie[t.name];
          if (!r) return je(e, 'text/plain');
          var n = r(e, t);
          if (Ve.hasOwnProperty(t.name)) {
            var i = Ve[t.name];
            for (var o in i)
              i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n['_' + o] = n[o]), (n[o] = i[o]));
          }
          if (((n.name = t.name), t.helperType && (n.helperType = t.helperType), t.modeProps))
            for (var l in t.modeProps) n[l] = t.modeProps[l];
          return n;
        }
        var Ve = {};
        function Ge(e, t) {
          var r = Ve.hasOwnProperty(e) ? Ve[e] : (Ve[e] = {});
          R(t, r);
        }
        function Ke(e, t) {
          if (!0 === t) return t;
          if (e.copyState) return e.copyState(t);
          var r = {};
          for (var n in t) {
            var i = t[n];
            i instanceof Array && (i = i.concat([])), (r[n] = i);
          }
          return r;
        }
        function qe(e, t) {
          var r;
          while (e.innerMode) {
            if (((r = e.innerMode(t)), !r || r.mode == e)) break;
            (t = r.state), (e = r.mode);
          }
          return r || { mode: e, state: t };
        }
        function Xe(e, t, r) {
          return !e.startState || e.startState(t, r);
        }
        var Ye = function(e, t, r) {
          (this.pos = this.start = 0),
            (this.string = e),
            (this.tabSize = t || 8),
            (this.lastColumnPos = this.lastColumnValue = 0),
            (this.lineStart = 0),
            (this.lineOracle = r);
        };
        function $e(e, t) {
          if (((t -= e.first), t < 0 || t >= e.size))
            throw new Error('There is no line ' + (t + e.first) + ' in the document.');
          var r = e;
          while (!r.lines)
            for (var n = 0; ; ++n) {
              var i = r.children[n],
                o = i.chunkSize();
              if (t < o) {
                r = i;
                break;
              }
              t -= o;
            }
          return r.lines[t];
        }
        function Ze(e, t, r) {
          var n = [],
            i = t.line;
          return (
            e.iter(t.line, r.line + 1, function(e) {
              var o = e.text;
              i == r.line && (o = o.slice(0, r.ch)),
                i == t.line && (o = o.slice(t.ch)),
                n.push(o),
                ++i;
            }),
            n
          );
        }
        function Je(e, t, r) {
          var n = [];
          return (
            e.iter(t, r, function(e) {
              n.push(e.text);
            }),
            n
          );
        }
        function Qe(e, t) {
          var r = t - e.height;
          if (r) for (var n = e; n; n = n.parent) n.height += r;
        }
        function et(e) {
          if (null == e.parent) return null;
          for (var t = e.parent, r = B(t.lines, e), n = t.parent; n; t = n, n = n.parent)
            for (var i = 0; ; ++i) {
              if (n.children[i] == t) break;
              r += n.children[i].chunkSize();
            }
          return r + t.first;
        }
        function tt(e, t) {
          var r = e.first;
          e: do {
            for (var n = 0; n < e.children.length; ++n) {
              var i = e.children[n],
                o = i.height;
              if (t < o) {
                e = i;
                continue e;
              }
              (t -= o), (r += i.chunkSize());
            }
            return r;
          } while (!e.lines);
          for (var l = 0; l < e.lines.length; ++l) {
            var a = e.lines[l],
              s = a.height;
            if (t < s) break;
            t -= s;
          }
          return r + l;
        }
        function rt(e, t) {
          return t >= e.first && t < e.first + e.size;
        }
        function nt(e, t) {
          return String(e.lineNumberFormatter(t + e.firstLineNumber));
        }
        function it(e, t, r) {
          if ((void 0 === r && (r = null), !(this instanceof it))) return new it(e, t, r);
          (this.line = e), (this.ch = t), (this.sticky = r);
        }
        function ot(e, t) {
          return e.line - t.line || e.ch - t.ch;
        }
        function lt(e, t) {
          return e.sticky == t.sticky && 0 == ot(e, t);
        }
        function at(e) {
          return it(e.line, e.ch);
        }
        function st(e, t) {
          return ot(e, t) < 0 ? t : e;
        }
        function ct(e, t) {
          return ot(e, t) < 0 ? e : t;
        }
        function ut(e, t) {
          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
        }
        function dt(e, t) {
          if (t.line < e.first) return it(e.first, 0);
          var r = e.first + e.size - 1;
          return t.line > r ? it(r, $e(e, r).text.length) : ht(t, $e(e, t.line).text.length);
        }
        function ht(e, t) {
          var r = e.ch;
          return null == r || r > t ? it(e.line, t) : r < 0 ? it(e.line, 0) : e;
        }
        function ft(e, t) {
          for (var r = [], n = 0; n < t.length; n++) r[n] = dt(e, t[n]);
          return r;
        }
        (Ye.prototype.eol = function() {
          return this.pos >= this.string.length;
        }),
          (Ye.prototype.sol = function() {
            return this.pos == this.lineStart;
          }),
          (Ye.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0;
          }),
          (Ye.prototype.next = function() {
            if (this.pos < this.string.length) return this.string.charAt(this.pos++);
          }),
          (Ye.prototype.eat = function(e) {
            var t,
              r = this.string.charAt(this.pos);
            if (((t = 'string' == typeof e ? r == e : r && (e.test ? e.test(r) : e(r))), t))
              return ++this.pos, r;
          }),
          (Ye.prototype.eatWhile = function(e) {
            var t = this.pos;
            while (this.eat(e));
            return this.pos > t;
          }),
          (Ye.prototype.eatSpace = function() {
            var e = this.pos;
            while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
            return this.pos > e;
          }),
          (Ye.prototype.skipToEnd = function() {
            this.pos = this.string.length;
          }),
          (Ye.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1) return (this.pos = t), !0;
          }),
          (Ye.prototype.backUp = function(e) {
            this.pos -= e;
          }),
          (Ye.prototype.column = function() {
            return (
              this.lastColumnPos < this.start &&
                ((this.lastColumnValue = I(
                  this.string,
                  this.start,
                  this.tabSize,
                  this.lastColumnPos,
                  this.lastColumnValue
                )),
                (this.lastColumnPos = this.start)),
              this.lastColumnValue -
                (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
            );
          }),
          (Ye.prototype.indentation = function() {
            return (
              I(this.string, null, this.tabSize) -
              (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
            );
          }),
          (Ye.prototype.match = function(e, t, r) {
            if ('string' != typeof e) {
              var n = this.string.slice(this.pos).match(e);
              return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n);
            }
            var i = function(e) {
                return r ? e.toLowerCase() : e;
              },
              o = this.string.substr(this.pos, e.length);
            if (i(o) == i(e)) return !1 !== t && (this.pos += e.length), !0;
          }),
          (Ye.prototype.current = function() {
            return this.string.slice(this.start, this.pos);
          }),
          (Ye.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
              return t();
            } finally {
              this.lineStart -= e;
            }
          }),
          (Ye.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e);
          }),
          (Ye.prototype.baseToken = function() {
            var e = this.lineOracle;
            return e && e.baseToken(this.pos);
          });
        var pt = function(e, t) {
            (this.state = e), (this.lookAhead = t);
          },
          gt = function(e, t, r, n) {
            (this.state = t),
              (this.doc = e),
              (this.line = r),
              (this.maxLookAhead = n || 0),
              (this.baseTokens = null),
              (this.baseTokenPos = 1);
          };
        function mt(e, t, r, n) {
          var i = [e.state.modeGen],
            o = {};
          Mt(
            e,
            t.text,
            e.doc.mode,
            r,
            function(e, t) {
              return i.push(e, t);
            },
            o,
            n
          );
          for (
            var l = r.state,
              a = function(n) {
                r.baseTokens = i;
                var a = e.state.overlays[n],
                  s = 1,
                  c = 0;
                (r.state = !0),
                  Mt(
                    e,
                    t.text,
                    a.mode,
                    r,
                    function(e, t) {
                      var r = s;
                      while (c < e) {
                        var n = i[s];
                        n > e && i.splice(s, 1, e, i[s + 1], n), (s += 2), (c = Math.min(e, n));
                      }
                      if (t)
                        if (a.opaque) i.splice(r, s - r, e, 'overlay ' + t), (s = r + 2);
                        else
                          for (; r < s; r += 2) {
                            var o = i[r + 1];
                            i[r + 1] = (o ? o + ' ' : '') + 'overlay ' + t;
                          }
                    },
                    o
                  ),
                  (r.state = l),
                  (r.baseTokens = null),
                  (r.baseTokenPos = 1);
              },
              s = 0;
            s < e.state.overlays.length;
            ++s
          )
            a(s);
          return { styles: i, classes: o.bgClass || o.textClass ? o : null };
        }
        function vt(e, t, r) {
          if (!t.styles || t.styles[0] != e.state.modeGen) {
            var n = yt(e, et(t)),
              i = t.text.length > e.options.maxHighlightLength && Ke(e.doc.mode, n.state),
              o = mt(e, t, n);
            i && (n.state = i),
              (t.stateAfter = n.save(!i)),
              (t.styles = o.styles),
              o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null),
              r === e.doc.highlightFrontier &&
                (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
          }
          return t.styles;
        }
        function yt(e, t, r) {
          var n = e.doc,
            i = e.display;
          if (!n.mode.startState) return new gt(n, !0, t);
          var o = Lt(e, t, r),
            l = o > n.first && $e(n, o - 1).stateAfter,
            a = l ? gt.fromSaved(n, l, o) : new gt(n, Xe(n.mode), o);
          return (
            n.iter(o, t, function(r) {
              bt(e, r.text, a);
              var n = a.line;
              (r.stateAfter =
                n == t - 1 || n % 5 == 0 || (n >= i.viewFrom && n < i.viewTo) ? a.save() : null),
                a.nextLine();
            }),
            r && (n.modeFrontier = a.line),
            a
          );
        }
        function bt(e, t, r, n) {
          var i = e.doc.mode,
            o = new Ye(t, e.options.tabSize, r);
          (o.start = o.pos = n || 0), '' == t && wt(i, r.state);
          while (!o.eol()) Ct(i, o, r.state), (o.start = o.pos);
        }
        function wt(e, t) {
          if (e.blankLine) return e.blankLine(t);
          if (e.innerMode) {
            var r = qe(e, t);
            return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0;
          }
        }
        function Ct(e, t, r, n) {
          for (var i = 0; i < 10; i++) {
            n && (n[0] = qe(e, r).mode);
            var o = e.token(t, r);
            if (t.pos > t.start) return o;
          }
          throw new Error('Mode ' + e.name + ' failed to advance stream.');
        }
        (gt.prototype.lookAhead = function(e) {
          var t = this.doc.getLine(this.line + e);
          return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
        }),
          (gt.prototype.baseToken = function(e) {
            if (!this.baseTokens) return null;
            while (this.baseTokens[this.baseTokenPos] <= e) this.baseTokenPos += 2;
            var t = this.baseTokens[this.baseTokenPos + 1];
            return {
              type: t && t.replace(/( |^)overlay .*/, ''),
              size: this.baseTokens[this.baseTokenPos] - e,
            };
          }),
          (gt.prototype.nextLine = function() {
            this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
          }),
          (gt.fromSaved = function(e, t, r) {
            return t instanceof pt
              ? new gt(e, Ke(e.mode, t.state), r, t.lookAhead)
              : new gt(e, Ke(e.mode, t), r);
          }),
          (gt.prototype.save = function(e) {
            var t = !1 !== e ? Ke(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new pt(t, this.maxLookAhead) : t;
          });
        var xt = function(e, t, r) {
          (this.start = e.start),
            (this.end = e.pos),
            (this.string = e.current()),
            (this.type = t || null),
            (this.state = r);
        };
        function kt(e, t, r, n) {
          var i,
            o = e.doc,
            l = o.mode;
          t = dt(o, t);
          var a,
            s = $e(o, t.line),
            c = yt(e, t.line, r),
            u = new Ye(s.text, e.options.tabSize, c);
          n && (a = []);
          while ((n || u.pos < t.ch) && !u.eol())
            (u.start = u.pos),
              (i = Ct(l, u, c.state)),
              n && a.push(new xt(u, i, Ke(o.mode, c.state)));
          return n ? a : new xt(u, i, c.state);
        }
        function St(e, t) {
          if (e)
            for (;;) {
              var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
              if (!r) break;
              e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
              var n = r[1] ? 'bgClass' : 'textClass';
              null == t[n]
                ? (t[n] = r[2])
                : new RegExp('(?:^|\\s)' + r[2] + '(?:$|\\s)').test(t[n]) || (t[n] += ' ' + r[2]);
            }
          return e;
        }
        function Mt(e, t, r, n, i, o, l) {
          var a = r.flattenSpans;
          null == a && (a = e.options.flattenSpans);
          var s,
            c = 0,
            u = null,
            d = new Ye(t, e.options.tabSize, n),
            h = e.options.addModeClass && [null];
          '' == t && St(wt(r, n.state), o);
          while (!d.eol()) {
            if (
              (d.pos > e.options.maxHighlightLength
                ? ((a = !1), l && bt(e, t, n, d.pos), (d.pos = t.length), (s = null))
                : (s = St(Ct(r, d, n.state, h), o)),
              h)
            ) {
              var f = h[0].name;
              f && (s = 'm-' + (s ? f + ' ' + s : f));
            }
            if (!a || u != s) {
              while (c < d.start) (c = Math.min(d.start, c + 5e3)), i(c, u);
              u = s;
            }
            d.start = d.pos;
          }
          while (c < d.pos) {
            var p = Math.min(d.pos, c + 5e3);
            i(p, u), (c = p);
          }
        }
        function Lt(e, t, r) {
          for (
            var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t;
            a > l;
            --a
          ) {
            if (a <= o.first) return o.first;
            var s = $e(o, a - 1),
              c = s.stateAfter;
            if (c && (!r || a + (c instanceof pt ? c.lookAhead : 0) <= o.modeFrontier)) return a;
            var u = I(s.text, null, e.options.tabSize);
            (null == i || n > u) && ((i = a - 1), (n = u));
          }
          return i;
        }
        function Tt(e, t) {
          if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
            for (var r = e.first, n = t - 1; n > r; n--) {
              var i = $e(e, n).stateAfter;
              if (i && (!(i instanceof pt) || n + i.lookAhead < t)) {
                r = n + 1;
                break;
              }
            }
            e.highlightFrontier = Math.min(e.highlightFrontier, r);
          }
        }
        var Nt = !1,
          Dt = !1;
        function Ot() {
          Nt = !0;
        }
        function At() {
          Dt = !0;
        }
        function Wt(e, t, r) {
          (this.marker = e), (this.from = t), (this.to = r);
        }
        function Et(e, t) {
          if (e)
            for (var r = 0; r < e.length; ++r) {
              var n = e[r];
              if (n.marker == t) return n;
            }
        }
        function Ht(e, t) {
          for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]);
          return r;
        }
        function Pt(e, t, r) {
          var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet()));
          n && n.has(e.markedSpans)
            ? e.markedSpans.push(t)
            : ((e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
              n && n.add(e.markedSpans)),
            t.marker.attachLine(e);
        }
        function Ft(e, t, r) {
          var n;
          if (e)
            for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                l = o.marker,
                a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
              if (a || (o.from == t && 'bookmark' == l.type && (!r || !o.marker.insertLeft))) {
                var s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                (n || (n = [])).push(new Wt(l, o.from, s ? null : o.to));
              }
            }
          return n;
        }
        function Rt(e, t, r) {
          var n;
          if (e)
            for (var i = 0; i < e.length; ++i) {
              var o = e[i],
                l = o.marker,
                a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
              if (a || (o.from == t && 'bookmark' == l.type && (!r || o.marker.insertLeft))) {
                var s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                (n || (n = [])).push(
                  new Wt(l, s ? null : o.from - t, null == o.to ? null : o.to - t)
                );
              }
            }
          return n;
        }
        function It(e, t) {
          if (t.full) return null;
          var r = rt(e, t.from.line) && $e(e, t.from.line).markedSpans,
            n = rt(e, t.to.line) && $e(e, t.to.line).markedSpans;
          if (!r && !n) return null;
          var i = t.from.ch,
            o = t.to.ch,
            l = 0 == ot(t.from, t.to),
            a = Ft(r, i, l),
            s = Rt(n, o, l),
            c = 1 == t.text.length,
            u = Y(t.text).length + (c ? i : 0);
          if (a)
            for (var d = 0; d < a.length; ++d) {
              var h = a[d];
              if (null == h.to) {
                var f = Et(s, h.marker);
                f ? c && (h.to = null == f.to ? null : f.to + u) : (h.to = i);
              }
            }
          if (s)
            for (var p = 0; p < s.length; ++p) {
              var g = s[p];
              if ((null != g.to && (g.to += u), null == g.from)) {
                var m = Et(a, g.marker);
                m || ((g.from = u), c && (a || (a = [])).push(g));
              } else (g.from += u), c && (a || (a = [])).push(g);
            }
          a && (a = zt(a)), s && s != a && (s = zt(s));
          var v = [a];
          if (!c) {
            var y,
              b = t.text.length - 2;
            if (b > 0 && a)
              for (var w = 0; w < a.length; ++w)
                null == a[w].to && (y || (y = [])).push(new Wt(a[w].marker, null, null));
            for (var C = 0; C < b; ++C) v.push(y);
            v.push(s);
          }
          return v;
        }
        function zt(e) {
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1);
          }
          return e.length ? e : null;
        }
        function Bt(e, t, r) {
          var n = null;
          if (
            (e.iter(t.line, r.line + 1, function(e) {
              if (e.markedSpans)
                for (var t = 0; t < e.markedSpans.length; ++t) {
                  var r = e.markedSpans[t].marker;
                  !r.readOnly || (n && -1 != B(n, r)) || (n || (n = [])).push(r);
                }
            }),
            !n)
          )
            return null;
          for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
            for (var l = n[o], a = l.find(0), s = 0; s < i.length; ++s) {
              var c = i[s];
              if (!(ot(c.to, a.from) < 0 || ot(c.from, a.to) > 0)) {
                var u = [s, 1],
                  d = ot(c.from, a.from),
                  h = ot(c.to, a.to);
                (d < 0 || (!l.inclusiveLeft && !d)) && u.push({ from: c.from, to: a.from }),
                  (h > 0 || (!l.inclusiveRight && !h)) && u.push({ from: a.to, to: c.to }),
                  i.splice.apply(i, u),
                  (s += u.length - 3);
              }
            }
          return i;
        }
        function Ut(e) {
          var t = e.markedSpans;
          if (t) {
            for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
            e.markedSpans = null;
          }
        }
        function _t(e, t) {
          if (t) {
            for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
            e.markedSpans = t;
          }
        }
        function jt(e) {
          return e.inclusiveLeft ? -1 : 0;
        }
        function Vt(e) {
          return e.inclusiveRight ? 1 : 0;
        }
        function Gt(e, t) {
          var r = e.lines.length - t.lines.length;
          if (0 != r) return r;
          var n = e.find(),
            i = t.find(),
            o = ot(n.from, i.from) || jt(e) - jt(t);
          if (o) return -o;
          var l = ot(n.to, i.to) || Vt(e) - Vt(t);
          return l || t.id - e.id;
        }
        function Kt(e, t) {
          var r,
            n = Dt && e.markedSpans;
          if (n)
            for (var i = void 0, o = 0; o < n.length; ++o)
              (i = n[o]),
                i.marker.collapsed &&
                  null == (t ? i.from : i.to) &&
                  (!r || Gt(r, i.marker) < 0) &&
                  (r = i.marker);
          return r;
        }
        function qt(e) {
          return Kt(e, !0);
        }
        function Xt(e) {
          return Kt(e, !1);
        }
        function Yt(e, t) {
          var r,
            n = Dt && e.markedSpans;
          if (n)
            for (var i = 0; i < n.length; ++i) {
              var o = n[i];
              o.marker.collapsed &&
                (null == o.from || o.from < t) &&
                (null == o.to || o.to > t) &&
                (!r || Gt(r, o.marker) < 0) &&
                (r = o.marker);
            }
          return r;
        }
        function $t(e, t, r, n, i) {
          var o = $e(e, t),
            l = Dt && o.markedSpans;
          if (l)
            for (var a = 0; a < l.length; ++a) {
              var s = l[a];
              if (s.marker.collapsed) {
                var c = s.marker.find(0),
                  u = ot(c.from, r) || jt(s.marker) - jt(i),
                  d = ot(c.to, n) || Vt(s.marker) - Vt(i);
                if (
                  !((u >= 0 && d <= 0) || (u <= 0 && d >= 0)) &&
                  ((u <= 0 &&
                    (s.marker.inclusiveRight && i.inclusiveLeft
                      ? ot(c.to, r) >= 0
                      : ot(c.to, r) > 0)) ||
                    (u >= 0 &&
                      (s.marker.inclusiveRight && i.inclusiveLeft
                        ? ot(c.from, n) <= 0
                        : ot(c.from, n) < 0)))
                )
                  return !0;
              }
            }
        }
        function Zt(e) {
          var t;
          while ((t = qt(e))) e = t.find(-1, !0).line;
          return e;
        }
        function Jt(e) {
          var t;
          while ((t = Xt(e))) e = t.find(1, !0).line;
          return e;
        }
        function Qt(e) {
          var t, r;
          while ((t = Xt(e))) (e = t.find(1, !0).line), (r || (r = [])).push(e);
          return r;
        }
        function er(e, t) {
          var r = $e(e, t),
            n = Zt(r);
          return r == n ? t : et(n);
        }
        function tr(e, t) {
          if (t > e.lastLine()) return t;
          var r,
            n = $e(e, t);
          if (!rr(e, n)) return t;
          while ((r = Xt(n))) n = r.find(1, !0).line;
          return et(n) + 1;
        }
        function rr(e, t) {
          var r = Dt && t.markedSpans;
          if (r)
            for (var n = void 0, i = 0; i < r.length; ++i)
              if (((n = r[i]), n.marker.collapsed)) {
                if (null == n.from) return !0;
                if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && nr(e, t, n))
                  return !0;
              }
        }
        function nr(e, t, r) {
          if (null == r.to) {
            var n = r.marker.find(1, !0);
            return nr(e, n.line, Et(n.line.markedSpans, r.marker));
          }
          if (r.marker.inclusiveRight && r.to == t.text.length) return !0;
          for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (
              ((i = t.markedSpans[o]),
              i.marker.collapsed &&
                !i.marker.widgetNode &&
                i.from == r.to &&
                (null == i.to || i.to != r.from) &&
                (i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
                nr(e, t, i))
            )
              return !0;
        }
        function ir(e) {
          e = Zt(e);
          for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
            var i = r.lines[n];
            if (i == e) break;
            t += i.height;
          }
          for (var o = r.parent; o; r = o, o = r.parent)
            for (var l = 0; l < o.children.length; ++l) {
              var a = o.children[l];
              if (a == r) break;
              t += a.height;
            }
          return t;
        }
        function or(e) {
          if (0 == e.height) return 0;
          var t,
            r = e.text.length,
            n = e;
          while ((t = qt(n))) {
            var i = t.find(0, !0);
            (n = i.from.line), (r += i.from.ch - i.to.ch);
          }
          n = e;
          while ((t = Xt(n))) {
            var o = t.find(0, !0);
            (r -= n.text.length - o.from.ch), (n = o.to.line), (r += n.text.length - o.to.ch);
          }
          return r;
        }
        function lr(e) {
          var t = e.display,
            r = e.doc;
          (t.maxLine = $e(r, r.first)),
            (t.maxLineLength = or(t.maxLine)),
            (t.maxLineChanged = !0),
            r.iter(function(e) {
              var r = or(e);
              r > t.maxLineLength && ((t.maxLineLength = r), (t.maxLine = e));
            });
        }
        var ar = function(e, t, r) {
          (this.text = e), _t(this, t), (this.height = r ? r(this) : 1);
        };
        function sr(e, t, r, n) {
          (e.text = t),
            e.stateAfter && (e.stateAfter = null),
            e.styles && (e.styles = null),
            null != e.order && (e.order = null),
            Ut(e),
            _t(e, r);
          var i = n ? n(e) : 1;
          i != e.height && Qe(e, i);
        }
        function cr(e) {
          (e.parent = null), Ut(e);
        }
        (ar.prototype.lineNo = function() {
          return et(this);
        }),
          Ce(ar);
        var ur = {},
          dr = {};
        function hr(e, t) {
          if (!e || /^\s*$/.test(e)) return null;
          var r = t.addModeClass ? dr : ur;
          return r[e] || (r[e] = e.replace(/\S+/g, 'cm-$&'));
        }
        function fr(e, t) {
          var r = O('span', null, null, s ? 'padding-right: .1px' : null),
            n = {
              pre: O('pre', [r], 'CodeMirror-line'),
              content: r,
              col: 0,
              pos: 0,
              cm: e,
              trailingSpace: !1,
              splitSpaces: e.getOption('lineWrapping'),
            };
          t.measure = {};
          for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
            var o = i ? t.rest[i - 1] : t.line,
              l = void 0;
            (n.pos = 0),
              (n.addToken = gr),
              We(e.display.measure) &&
                (l = he(o, e.doc.direction)) &&
                (n.addToken = vr(n.addToken, l)),
              (n.map = []);
            var a = t != e.display.externalMeasured && et(o);
            br(o, n, vt(e, o, a)),
              o.styleClasses &&
                (o.styleClasses.bgClass && (n.bgClass = H(o.styleClasses.bgClass, n.bgClass || '')),
                o.styleClasses.textClass &&
                  (n.textClass = H(o.styleClasses.textClass, n.textClass || ''))),
              0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Ae(e.display.measure))),
              0 == i
                ? ((t.measure.map = n.map), (t.measure.cache = {}))
                : ((t.measure.maps || (t.measure.maps = [])).push(n.map),
                  (t.measure.caches || (t.measure.caches = [])).push({}));
          }
          if (s) {
            var c = n.content.lastChild;
            (/\bcm-tab\b/.test(c.className) || (c.querySelector && c.querySelector('.cm-tab'))) &&
              (n.content.className = 'cm-tab-wrap-hack');
          }
          return (
            ve(e, 'renderLine', e, t.line, n.pre),
            n.pre.className && (n.textClass = H(n.pre.className, n.textClass || '')),
            n
          );
        }
        function pr(e) {
          var t = D('span', '\u2022', 'cm-invalidchar');
          return (
            (t.title = '\\u' + e.charCodeAt(0).toString(16)),
            t.setAttribute('aria-label', t.title),
            t
          );
        }
        function gr(e, t, r, n, i, o, s) {
          if (t) {
            var c,
              u = e.splitSpaces ? mr(t, e.trailingSpace) : t,
              d = e.cm.state.specialChars,
              h = !1;
            if (d.test(t)) {
              c = document.createDocumentFragment();
              var f = 0;
              while (1) {
                d.lastIndex = f;
                var p = d.exec(t),
                  g = p ? p.index - f : t.length - f;
                if (g) {
                  var m = document.createTextNode(u.slice(f, f + g));
                  l && a < 9 ? c.appendChild(D('span', [m])) : c.appendChild(m),
                    e.map.push(e.pos, e.pos + g, m),
                    (e.col += g),
                    (e.pos += g);
                }
                if (!p) break;
                f += g + 1;
                var v = void 0;
                if ('\t' == p[0]) {
                  var y = e.cm.options.tabSize,
                    b = y - (e.col % y);
                  (v = c.appendChild(D('span', X(b), 'cm-tab'))),
                    v.setAttribute('role', 'presentation'),
                    v.setAttribute('cm-text', '\t'),
                    (e.col += b);
                } else
                  '\r' == p[0] || '\n' == p[0]
                    ? ((v = c.appendChild(
                        D('span', '\r' == p[0] ? '\u240d' : '\u2424', 'cm-invalidchar')
                      )),
                      v.setAttribute('cm-text', p[0]),
                      (e.col += 1))
                    : ((v = e.cm.options.specialCharPlaceholder(p[0])),
                      v.setAttribute('cm-text', p[0]),
                      l && a < 9 ? c.appendChild(D('span', [v])) : c.appendChild(v),
                      (e.col += 1));
                e.map.push(e.pos, e.pos + 1, v), e.pos++;
              }
            } else
              (e.col += t.length),
                (c = document.createTextNode(u)),
                e.map.push(e.pos, e.pos + t.length, c),
                l && a < 9 && (h = !0),
                (e.pos += t.length);
            if (
              ((e.trailingSpace = 32 == u.charCodeAt(t.length - 1)), r || n || i || h || o || s)
            ) {
              var w = r || '';
              n && (w += n), i && (w += i);
              var C = D('span', [c], w, o);
              if (s)
                for (var x in s)
                  s.hasOwnProperty(x) && 'style' != x && 'class' != x && C.setAttribute(x, s[x]);
              return e.content.appendChild(C);
            }
            e.content.appendChild(c);
          }
        }
        function mr(e, t) {
          if (e.length > 1 && !/  /.test(e)) return e;
          for (var r = t, n = '', i = 0; i < e.length; i++) {
            var o = e.charAt(i);
            ' ' != o || !r || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = '\xa0'),
              (n += o),
              (r = ' ' == o);
          }
          return n;
        }
        function vr(e, t) {
          return function(r, n, i, o, l, a, s) {
            i = i ? i + ' cm-force-border' : 'cm-force-border';
            for (var c = r.pos, u = c + n.length; ; ) {
              for (var d = void 0, h = 0; h < t.length; h++)
                if (((d = t[h]), d.to > c && d.from <= c)) break;
              if (d.to >= u) return e(r, n, i, o, l, a, s);
              e(r, n.slice(0, d.to - c), i, o, null, a, s),
                (o = null),
                (n = n.slice(d.to - c)),
                (c = d.to);
            }
          };
        }
        function yr(e, t, r, n) {
          var i = !n && r.widgetNode;
          i && e.map.push(e.pos, e.pos + t, i),
            !n &&
              e.cm.display.input.needsContentAttribute &&
              (i || (i = e.content.appendChild(document.createElement('span'))),
              i.setAttribute('cm-marker', r.id)),
            i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
            (e.pos += t),
            (e.trailingSpace = !1);
        }
        function br(e, t, r) {
          var n = e.markedSpans,
            i = e.text,
            o = 0;
          if (n)
            for (var l, a, s, c, u, d, h, f = i.length, p = 0, g = 1, m = '', v = 0; ; ) {
              if (v == p) {
                (s = c = u = a = ''), (h = null), (d = null), (v = 1 / 0);
                for (var y = [], b = void 0, w = 0; w < n.length; ++w) {
                  var C = n[w],
                    x = C.marker;
                  if ('bookmark' == x.type && C.from == p && x.widgetNode) y.push(x);
                  else if (
                    C.from <= p &&
                    (null == C.to || C.to > p || (x.collapsed && C.to == p && C.from == p))
                  ) {
                    if (
                      (null != C.to && C.to != p && v > C.to && ((v = C.to), (c = '')),
                      x.className && (s += ' ' + x.className),
                      x.css && (a = (a ? a + ';' : '') + x.css),
                      x.startStyle && C.from == p && (u += ' ' + x.startStyle),
                      x.endStyle && C.to == v && (b || (b = [])).push(x.endStyle, C.to),
                      x.title && ((h || (h = {})).title = x.title),
                      x.attributes)
                    )
                      for (var k in x.attributes) (h || (h = {}))[k] = x.attributes[k];
                    x.collapsed && (!d || Gt(d.marker, x) < 0) && (d = C);
                  } else C.from > p && v > C.from && (v = C.from);
                }
                if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (c += ' ' + b[S]);
                if (!d || d.from == p) for (var M = 0; M < y.length; ++M) yr(t, 0, y[M]);
                if (d && (d.from || 0) == p) {
                  if (
                    (yr(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from),
                    null == d.to)
                  )
                    return;
                  d.to == p && (d = !1);
                }
              }
              if (p >= f) break;
              var L = Math.min(f, v);
              while (1) {
                if (m) {
                  var T = p + m.length;
                  if (!d) {
                    var N = T > L ? m.slice(0, L - p) : m;
                    t.addToken(t, N, l ? l + s : s, u, p + N.length == v ? c : '', a, h);
                  }
                  if (T >= L) {
                    (m = m.slice(L - p)), (p = L);
                    break;
                  }
                  (p = T), (u = '');
                }
                (m = i.slice(o, (o = r[g++]))), (l = hr(r[g++], t.cm.options));
              }
            }
          else
            for (var D = 1; D < r.length; D += 2)
              t.addToken(t, i.slice(o, (o = r[D])), hr(r[D + 1], t.cm.options));
        }
        function wr(e, t, r) {
          (this.line = t),
            (this.rest = Qt(t)),
            (this.size = this.rest ? et(Y(this.rest)) - r + 1 : 1),
            (this.node = this.text = null),
            (this.hidden = rr(e, t));
        }
        function Cr(e, t, r) {
          for (var n, i = [], o = t; o < r; o = n) {
            var l = new wr(e.doc, $e(e.doc, o), o);
            (n = o + l.size), i.push(l);
          }
          return i;
        }
        var xr = null;
        function kr(e) {
          xr ? xr.ops.push(e) : (e.ownsGroup = xr = { ops: [e], delayedCallbacks: [] });
        }
        function Sr(e) {
          var t = e.delayedCallbacks,
            r = 0;
          do {
            for (; r < t.length; r++) t[r].call(null);
            for (var n = 0; n < e.ops.length; n++) {
              var i = e.ops[n];
              if (i.cursorActivityHandlers)
                while (i.cursorActivityCalled < i.cursorActivityHandlers.length)
                  i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
            }
          } while (r < t.length);
        }
        function Mr(e, t) {
          var r = e.ownsGroup;
          if (r)
            try {
              Sr(r);
            } finally {
              (xr = null), t(r);
            }
        }
        var Lr = null;
        function Tr(e, t) {
          var r = ge(e, t);
          if (r.length) {
            var n,
              i = Array.prototype.slice.call(arguments, 2);
            xr ? (n = xr.delayedCallbacks) : Lr ? (n = Lr) : ((n = Lr = []), setTimeout(Nr, 0));
            for (
              var o = function(e) {
                  n.push(function() {
                    return r[e].apply(null, i);
                  });
                },
                l = 0;
              l < r.length;
              ++l
            )
              o(l);
          }
        }
        function Nr() {
          var e = Lr;
          Lr = null;
          for (var t = 0; t < e.length; ++t) e[t]();
        }
        function Dr(e, t, r, n) {
          for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            'text' == o
              ? Er(e, t)
              : 'gutter' == o
              ? Pr(e, t, r, n)
              : 'class' == o
              ? Hr(e, t)
              : 'widget' == o && Fr(e, t, n);
          }
          t.changes = null;
        }
        function Or(e) {
          return (
            e.node == e.text &&
              ((e.node = D('div', null, null, 'position: relative')),
              e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
              e.node.appendChild(e.text),
              l && a < 8 && (e.node.style.zIndex = 2)),
            e.node
          );
        }
        function Ar(e, t) {
          var r = t.bgClass ? t.bgClass + ' ' + (t.line.bgClass || '') : t.line.bgClass;
          if ((r && (r += ' CodeMirror-linebackground'), t.background))
            r
              ? (t.background.className = r)
              : (t.background.parentNode.removeChild(t.background), (t.background = null));
          else if (r) {
            var n = Or(t);
            (t.background = n.insertBefore(D('div', null, r), n.firstChild)),
              e.display.input.setUneditable(t.background);
          }
        }
        function Wr(e, t) {
          var r = e.display.externalMeasured;
          return r && r.line == t.line
            ? ((e.display.externalMeasured = null), (t.measure = r.measure), r.built)
            : fr(e, t);
        }
        function Er(e, t) {
          var r = t.text.className,
            n = Wr(e, t);
          t.text == t.node && (t.node = n.pre),
            t.text.parentNode.replaceChild(n.pre, t.text),
            (t.text = n.pre),
            n.bgClass != t.bgClass || n.textClass != t.textClass
              ? ((t.bgClass = n.bgClass), (t.textClass = n.textClass), Hr(e, t))
              : r && (t.text.className = r);
        }
        function Hr(e, t) {
          Ar(e, t),
            t.line.wrapClass
              ? (Or(t).className = t.line.wrapClass)
              : t.node != t.text && (t.node.className = '');
          var r = t.textClass ? t.textClass + ' ' + (t.line.textClass || '') : t.line.textClass;
          t.text.className = r || '';
        }
        function Pr(e, t, r, n) {
          if (
            (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
            t.gutterBackground &&
              (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
            t.line.gutterClass)
          ) {
            var i = Or(t);
            (t.gutterBackground = D(
              'div',
              null,
              'CodeMirror-gutter-background ' + t.line.gutterClass,
              'left: ' +
                (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
                'px; width: ' +
                n.gutterTotalWidth +
                'px'
            )),
              e.display.input.setUneditable(t.gutterBackground),
              i.insertBefore(t.gutterBackground, t.text);
          }
          var o = t.line.gutterMarkers;
          if (e.options.lineNumbers || o) {
            var l = Or(t),
              a = (t.gutter = D(
                'div',
                null,
                'CodeMirror-gutter-wrapper',
                'left: ' + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + 'px'
              ));
            if (
              (a.setAttribute('aria-hidden', 'true'),
              e.display.input.setUneditable(a),
              l.insertBefore(a, t.text),
              t.line.gutterClass && (a.className += ' ' + t.line.gutterClass),
              !e.options.lineNumbers ||
                (o && o['CodeMirror-linenumbers']) ||
                (t.lineNumber = a.appendChild(
                  D(
                    'div',
                    nt(e.options, r),
                    'CodeMirror-linenumber CodeMirror-gutter-elt',
                    'left: ' +
                      n.gutterLeft['CodeMirror-linenumbers'] +
                      'px; width: ' +
                      e.display.lineNumInnerWidth +
                      'px'
                  )
                )),
              o)
            )
              for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
                var c = e.display.gutterSpecs[s].className,
                  u = o.hasOwnProperty(c) && o[c];
                u &&
                  a.appendChild(
                    D(
                      'div',
                      [u],
                      'CodeMirror-gutter-elt',
                      'left: ' + n.gutterLeft[c] + 'px; width: ' + n.gutterWidth[c] + 'px'
                    )
                  );
              }
          }
        }
        function Fr(e, t, r) {
          t.alignable && (t.alignable = null);
          for (var n = S('CodeMirror-linewidget'), i = t.node.firstChild, o = void 0; i; i = o)
            (o = i.nextSibling), n.test(i.className) && t.node.removeChild(i);
          Ir(e, t, r);
        }
        function Rr(e, t, r, n) {
          var i = Wr(e, t);
          return (
            (t.text = t.node = i.pre),
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            Hr(e, t),
            Pr(e, t, r, n),
            Ir(e, t, n),
            t.node
          );
        }
        function Ir(e, t, r) {
          if ((zr(e, t.line, t, r, !0), t.rest))
            for (var n = 0; n < t.rest.length; n++) zr(e, t.rest[n], t, r, !1);
        }
        function zr(e, t, r, n, i) {
          if (t.widgets)
            for (var o = Or(r), l = 0, a = t.widgets; l < a.length; ++l) {
              var s = a[l],
                c = D(
                  'div',
                  [s.node],
                  'CodeMirror-linewidget' + (s.className ? ' ' + s.className : '')
                );
              s.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
                Br(s, c, r, n),
                e.display.input.setUneditable(c),
                i && s.above ? o.insertBefore(c, r.gutter || r.text) : o.appendChild(c),
                Tr(s, 'redraw');
            }
        }
        function Br(e, t, r, n) {
          if (e.noHScroll) {
            (r.alignable || (r.alignable = [])).push(t);
            var i = n.wrapperWidth;
            (t.style.left = n.fixedPos + 'px'),
              e.coverGutter ||
                ((i -= n.gutterTotalWidth), (t.style.paddingLeft = n.gutterTotalWidth + 'px')),
              (t.style.width = i + 'px');
          }
          e.coverGutter &&
            ((t.style.zIndex = 5),
            (t.style.position = 'relative'),
            e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + 'px'));
        }
        function Ur(e) {
          if (null != e.height) return e.height;
          var t = e.doc.cm;
          if (!t) return 0;
          if (!A(document.body, e.node)) {
            var r = 'position: relative;';
            e.coverGutter && (r += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
              e.noHScroll && (r += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
              N(t.display.measure, D('div', [e.node], null, r));
          }
          return (e.height = e.node.parentNode.offsetHeight);
        }
        function _r(e, t) {
          for (var r = Le(t); r != e.wrapper; r = r.parentNode)
            if (
              !r ||
              (1 == r.nodeType && 'true' == r.getAttribute('cm-ignore-events')) ||
              (r.parentNode == e.sizer && r != e.mover)
            )
              return !0;
        }
        function jr(e) {
          return e.lineSpace.offsetTop;
        }
        function Vr(e) {
          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
        }
        function Gr(e) {
          if (e.cachedPaddingH) return e.cachedPaddingH;
          var t = N(e.measure, D('pre', 'x', 'CodeMirror-line-like')),
            r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
            n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) };
          return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
        }
        function Kr(e) {
          return U - e.display.nativeBarWidth;
        }
        function qr(e) {
          return e.display.scroller.clientWidth - Kr(e) - e.display.barWidth;
        }
        function Xr(e) {
          return e.display.scroller.clientHeight - Kr(e) - e.display.barHeight;
        }
        function Yr(e, t, r) {
          var n = e.options.lineWrapping,
            i = n && qr(e);
          if (!t.measure.heights || (n && t.measure.width != i)) {
            var o = (t.measure.heights = []);
            if (n) {
              t.measure.width = i;
              for (var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
                var s = l[a],
                  c = l[a + 1];
                Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - r.top);
              }
            }
            o.push(r.bottom - r.top);
          }
        }
        function $r(e, t, r) {
          if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
          if (e.rest) {
            for (var n = 0; n < e.rest.length; n++)
              if (e.rest[n] == t) return { map: e.measure.maps[n], cache: e.measure.caches[n] };
            for (var i = 0; i < e.rest.length; i++)
              if (et(e.rest[i]) > r)
                return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
          }
        }
        function Zr(e, t) {
          t = Zt(t);
          var r = et(t),
            n = (e.display.externalMeasured = new wr(e.doc, t, r));
          n.lineN = r;
          var i = (n.built = fr(e, n));
          return (n.text = i.pre), N(e.display.lineMeasure, i.pre), n;
        }
        function Jr(e, t, r, n) {
          return tn(e, en(e, t), r, n);
        }
        function Qr(e, t) {
          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Pn(e, t)];
          var r = e.display.externalMeasured;
          return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
        }
        function en(e, t) {
          var r = et(t),
            n = Qr(e, r);
          n && !n.text
            ? (n = null)
            : n && n.changes && (Dr(e, n, r, On(e)), (e.curOp.forceUpdate = !0)),
            n || (n = Zr(e, t));
          var i = $r(n, t, r);
          return {
            line: t,
            view: n,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1,
          };
        }
        function tn(e, t, r, n, i) {
          t.before && (r = -1);
          var o,
            l = r + (n || '');
          return (
            t.cache.hasOwnProperty(l)
              ? (o = t.cache[l])
              : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                t.hasHeights || (Yr(e, t.view, t.rect), (t.hasHeights = !0)),
                (o = an(e, t, r, n)),
                o.bogus || (t.cache[l] = o)),
            {
              left: o.left,
              right: o.right,
              top: i ? o.rtop : o.top,
              bottom: i ? o.rbottom : o.bottom,
            }
          );
        }
        var rn,
          nn = { left: 0, right: 0, top: 0, bottom: 0 };
        function on(e, t, r) {
          for (var n, i, o, l, a, s, c = 0; c < e.length; c += 3)
            if (
              ((a = e[c]),
              (s = e[c + 1]),
              t < a
                ? ((i = 0), (o = 1), (l = 'left'))
                : t < s
                ? ((i = t - a), (o = i + 1))
                : (c == e.length - 3 || (t == s && e[c + 3] > t)) &&
                  ((o = s - a), (i = o - 1), t >= s && (l = 'right')),
              null != i)
            ) {
              if (
                ((n = e[c + 2]),
                a == s && r == (n.insertLeft ? 'left' : 'right') && (l = r),
                'left' == r && 0 == i)
              )
                while (c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft)
                  (n = e[2 + (c -= 3)]), (l = 'left');
              if ('right' == r && i == s - a)
                while (c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft)
                  (n = e[(c += 3) + 2]), (l = 'right');
              break;
            }
          return { node: n, start: i, end: o, collapse: l, coverStart: a, coverEnd: s };
        }
        function ln(e, t) {
          var r = nn;
          if ('left' == t) {
            for (var n = 0; n < e.length; n++) if ((r = e[n]).left != r.right) break;
          } else for (var i = e.length - 1; i >= 0; i--) if ((r = e[i]).left != r.right) break;
          return r;
        }
        function an(e, t, r, n) {
          var i,
            o = on(t.map, r, n),
            s = o.node,
            c = o.start,
            u = o.end,
            d = o.collapse;
          if (3 == s.nodeType) {
            for (var h = 0; h < 4; h++) {
              while (c && oe(t.line.text.charAt(o.coverStart + c))) --c;
              while (o.coverStart + u < o.coverEnd && oe(t.line.text.charAt(o.coverStart + u))) ++u;
              if (
                ((i =
                  l && a < 9 && 0 == c && u == o.coverEnd - o.coverStart
                    ? s.parentNode.getBoundingClientRect()
                    : ln(M(s, c, u).getClientRects(), n)),
                i.left || i.right || 0 == c)
              )
                break;
              (u = c), (c -= 1), (d = 'right');
            }
            l && a < 11 && (i = sn(e.display.measure, i));
          } else {
            var f;
            c > 0 && (d = n = 'right'),
              (i =
                e.options.lineWrapping && (f = s.getClientRects()).length > 1
                  ? f['right' == n ? f.length - 1 : 0]
                  : s.getBoundingClientRect());
          }
          if (l && a < 9 && !c && (!i || (!i.left && !i.right))) {
            var p = s.parentNode.getClientRects()[0];
            i = p
              ? { left: p.left, right: p.left + Dn(e.display), top: p.top, bottom: p.bottom }
              : nn;
          }
          for (
            var g = i.top - t.rect.top,
              m = i.bottom - t.rect.top,
              v = (g + m) / 2,
              y = t.view.measure.heights,
              b = 0;
            b < y.length - 1;
            b++
          )
            if (v < y[b]) break;
          var w = b ? y[b - 1] : 0,
            C = y[b],
            x = {
              left: ('right' == d ? i.right : i.left) - t.rect.left,
              right: ('left' == d ? i.left : i.right) - t.rect.left,
              top: w,
              bottom: C,
            };
          return (
            i.left || i.right || (x.bogus = !0),
            e.options.singleCursorHeightPerLine || ((x.rtop = g), (x.rbottom = m)),
            x
          );
        }
        function sn(e, t) {
          if (
            !window.screen ||
            null == screen.logicalXDPI ||
            screen.logicalXDPI == screen.deviceXDPI ||
            !Re(e)
          )
            return t;
          var r = screen.logicalXDPI / screen.deviceXDPI,
            n = screen.logicalYDPI / screen.deviceYDPI;
          return { left: t.left * r, right: t.right * r, top: t.top * n, bottom: t.bottom * n };
        }
        function cn(e) {
          if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest))
            for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
        }
        function un(e) {
          (e.display.externalMeasure = null), T(e.display.lineMeasure);
          for (var t = 0; t < e.display.view.length; t++) cn(e.display.view[t]);
        }
        function dn(e) {
          un(e),
            (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null),
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            (e.display.lineNumChars = null);
        }
        function hn() {
          return u && m
            ? -(
                document.body.getBoundingClientRect().left -
                parseInt(getComputedStyle(document.body).marginLeft)
              )
            : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
        }
        function fn() {
          return u && m
            ? -(
                document.body.getBoundingClientRect().top -
                parseInt(getComputedStyle(document.body).marginTop)
              )
            : window.pageYOffset || (document.documentElement || document.body).scrollTop;
        }
        function pn(e) {
          var t = Zt(e),
            r = t.widgets,
            n = 0;
          if (r) for (var i = 0; i < r.length; ++i) r[i].above && (n += Ur(r[i]));
          return n;
        }
        function gn(e, t, r, n, i) {
          if (!i) {
            var o = pn(t);
            (r.top += o), (r.bottom += o);
          }
          if ('line' == n) return r;
          n || (n = 'local');
          var l = ir(t);
          if (
            ('local' == n ? (l += jr(e.display)) : (l -= e.display.viewOffset),
            'page' == n || 'window' == n)
          ) {
            var a = e.display.lineSpace.getBoundingClientRect();
            l += a.top + ('window' == n ? 0 : fn());
            var s = a.left + ('window' == n ? 0 : hn());
            (r.left += s), (r.right += s);
          }
          return (r.top += l), (r.bottom += l), r;
        }
        function mn(e, t, r) {
          if ('div' == r) return t;
          var n = t.left,
            i = t.top;
          if ('page' == r) (n -= hn()), (i -= fn());
          else if ('local' == r || !r) {
            var o = e.display.sizer.getBoundingClientRect();
            (n += o.left), (i += o.top);
          }
          var l = e.display.lineSpace.getBoundingClientRect();
          return { left: n - l.left, top: i - l.top };
        }
        function vn(e, t, r, n, i) {
          return n || (n = $e(e.doc, t.line)), gn(e, n, Jr(e, n, t.ch, i), r);
        }
        function yn(e, t, r, n, i, o) {
          function l(t, l) {
            var a = tn(e, i, t, l ? 'right' : 'left', o);
            return l ? (a.left = a.right) : (a.right = a.left), gn(e, n, a, r);
          }
          (n = n || $e(e.doc, t.line)), i || (i = en(e, n));
          var a = he(n, e.doc.direction),
            s = t.ch,
            c = t.sticky;
          if (
            (s >= n.text.length
              ? ((s = n.text.length), (c = 'before'))
              : s <= 0 && ((s = 0), (c = 'after')),
            !a)
          )
            return l('before' == c ? s - 1 : s, 'before' == c);
          function u(e, t, r) {
            var n = a[t],
              i = 1 == n.level;
            return l(r ? e - 1 : e, i != r);
          }
          var d = ue(a, s, c),
            h = ce,
            f = u(s, d, 'before' == c);
          return null != h && (f.other = u(s, h, 'before' != c)), f;
        }
        function bn(e, t) {
          var r = 0;
          (t = dt(e.doc, t)), e.options.lineWrapping || (r = Dn(e.display) * t.ch);
          var n = $e(e.doc, t.line),
            i = ir(n) + jr(e.display);
          return { left: r, right: r, top: i, bottom: i + n.height };
        }
        function wn(e, t, r, n, i) {
          var o = it(e, t, r);
          return (o.xRel = i), n && (o.outside = n), o;
        }
        function Cn(e, t, r) {
          var n = e.doc;
          if (((r += e.display.viewOffset), r < 0)) return wn(n.first, 0, null, -1, -1);
          var i = tt(n, r),
            o = n.first + n.size - 1;
          if (i > o) return wn(n.first + n.size - 1, $e(n, o).text.length, null, 1, 1);
          t < 0 && (t = 0);
          for (var l = $e(n, i); ; ) {
            var a = Mn(e, l, i, t, r),
              s = Yt(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
            if (!s) return a;
            var c = s.find(1);
            if (c.line == i) return c;
            l = $e(n, (i = c.line));
          }
        }
        function xn(e, t, r, n) {
          n -= pn(t);
          var i = t.text.length,
            o = ae(
              function(t) {
                return tn(e, r, t - 1).bottom <= n;
              },
              i,
              0
            );
          return (
            (i = ae(
              function(t) {
                return tn(e, r, t).top > n;
              },
              o,
              i
            )),
            { begin: o, end: i }
          );
        }
        function kn(e, t, r, n) {
          r || (r = en(e, t));
          var i = gn(e, t, tn(e, r, n), 'line').top;
          return xn(e, t, r, i);
        }
        function Sn(e, t, r, n) {
          return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t);
        }
        function Mn(e, t, r, n, i) {
          i -= ir(t);
          var o = en(e, t),
            l = pn(t),
            a = 0,
            s = t.text.length,
            c = !0,
            u = he(t, e.doc.direction);
          if (u) {
            var d = (e.options.lineWrapping ? Tn : Ln)(e, t, r, o, u, n, i);
            (c = 1 != d.level), (a = c ? d.from : d.to - 1), (s = c ? d.to : d.from - 1);
          }
          var h,
            f,
            p = null,
            g = null,
            m = ae(
              function(t) {
                var r = tn(e, o, t);
                return (
                  (r.top += l),
                  (r.bottom += l),
                  !!Sn(r, n, i, !1) && (r.top <= i && r.left <= n && ((p = t), (g = r)), !0)
                );
              },
              a,
              s
            ),
            v = !1;
          if (g) {
            var y = n - g.left < g.right - n,
              b = y == c;
            (m = p + (b ? 0 : 1)), (f = b ? 'after' : 'before'), (h = y ? g.left : g.right);
          } else {
            c || (m != s && m != a) || m++,
              (f =
                0 == m
                  ? 'after'
                  : m == t.text.length
                  ? 'before'
                  : tn(e, o, m - (c ? 1 : 0)).bottom + l <= i == c
                  ? 'after'
                  : 'before');
            var w = yn(e, it(r, m, f), 'line', t, o);
            (h = w.left), (v = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
          }
          return (m = le(t.text, m, 1)), wn(r, m, f, v, n - h);
        }
        function Ln(e, t, r, n, i, o, l) {
          var a = ae(
              function(a) {
                var s = i[a],
                  c = 1 != s.level;
                return Sn(
                  yn(e, it(r, c ? s.to : s.from, c ? 'before' : 'after'), 'line', t, n),
                  o,
                  l,
                  !0
                );
              },
              0,
              i.length - 1
            ),
            s = i[a];
          if (a > 0) {
            var c = 1 != s.level,
              u = yn(e, it(r, c ? s.from : s.to, c ? 'after' : 'before'), 'line', t, n);
            Sn(u, o, l, !0) && u.top > l && (s = i[a - 1]);
          }
          return s;
        }
        function Tn(e, t, r, n, i, o, l) {
          var a = xn(e, t, n, l),
            s = a.begin,
            c = a.end;
          /\s/.test(t.text.charAt(c - 1)) && c--;
          for (var u = null, d = null, h = 0; h < i.length; h++) {
            var f = i[h];
            if (!(f.from >= c || f.to <= s)) {
              var p = 1 != f.level,
                g = tn(e, n, p ? Math.min(c, f.to) - 1 : Math.max(s, f.from)).right,
                m = g < o ? o - g + 1e9 : g - o;
              (!u || d > m) && ((u = f), (d = m));
            }
          }
          return (
            u || (u = i[i.length - 1]),
            u.from < s && (u = { from: s, to: u.to, level: u.level }),
            u.to > c && (u = { from: u.from, to: c, level: u.level }),
            u
          );
        }
        function Nn(e) {
          if (null != e.cachedTextHeight) return e.cachedTextHeight;
          if (null == rn) {
            rn = D('pre', null, 'CodeMirror-line-like');
            for (var t = 0; t < 49; ++t)
              rn.appendChild(document.createTextNode('x')), rn.appendChild(D('br'));
            rn.appendChild(document.createTextNode('x'));
          }
          N(e.measure, rn);
          var r = rn.offsetHeight / 50;
          return r > 3 && (e.cachedTextHeight = r), T(e.measure), r || 1;
        }
        function Dn(e) {
          if (null != e.cachedCharWidth) return e.cachedCharWidth;
          var t = D('span', 'xxxxxxxxxx'),
            r = D('pre', [t], 'CodeMirror-line-like');
          N(e.measure, r);
          var n = t.getBoundingClientRect(),
            i = (n.right - n.left) / 10;
          return i > 2 && (e.cachedCharWidth = i), i || 10;
        }
        function On(e) {
          for (
            var t = e.display,
              r = {},
              n = {},
              i = t.gutters.clientLeft,
              o = t.gutters.firstChild,
              l = 0;
            o;
            o = o.nextSibling, ++l
          ) {
            var a = e.display.gutterSpecs[l].className;
            (r[a] = o.offsetLeft + o.clientLeft + i), (n[a] = o.clientWidth);
          }
          return {
            fixedPos: An(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: r,
            gutterWidth: n,
            wrapperWidth: t.wrapper.clientWidth,
          };
        }
        function An(e) {
          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
        }
        function Wn(e) {
          var t = Nn(e.display),
            r = e.options.lineWrapping,
            n = r && Math.max(5, e.display.scroller.clientWidth / Dn(e.display) - 3);
          return function(i) {
            if (rr(e.doc, i)) return 0;
            var o = 0;
            if (i.widgets)
              for (var l = 0; l < i.widgets.length; l++)
                i.widgets[l].height && (o += i.widgets[l].height);
            return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
          };
        }
        function En(e) {
          var t = e.doc,
            r = Wn(e);
          t.iter(function(e) {
            var t = r(e);
            t != e.height && Qe(e, t);
          });
        }
        function Hn(e, t, r, n) {
          var i = e.display;
          if (!r && 'true' == Le(t).getAttribute('cm-not-content')) return null;
          var o,
            l,
            a = i.lineSpace.getBoundingClientRect();
          try {
            (o = t.clientX - a.left), (l = t.clientY - a.top);
          } catch (e) {
            return null;
          }
          var s,
            c = Cn(e, o, l);
          if (n && c.xRel > 0 && (s = $e(e.doc, c.line).text).length == c.ch) {
            var u = I(s, s.length, e.options.tabSize) - s.length;
            c = it(c.line, Math.max(0, Math.round((o - Gr(e.display).left) / Dn(e.display)) - u));
          }
          return c;
        }
        function Pn(e, t) {
          if (t >= e.display.viewTo) return null;
          if (((t -= e.display.viewFrom), t < 0)) return null;
          for (var r = e.display.view, n = 0; n < r.length; n++)
            if (((t -= r[n].size), t < 0)) return n;
        }
        function Fn(e, t, r, n) {
          null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
          var i = e.display;
          if (
            (n &&
              r < i.viewTo &&
              (null == i.updateLineNumbers || i.updateLineNumbers > t) &&
              (i.updateLineNumbers = t),
            (e.curOp.viewChanged = !0),
            t >= i.viewTo)
          )
            Dt && er(e.doc, t) < i.viewTo && In(e);
          else if (r <= i.viewFrom)
            Dt && tr(e.doc, r + n) > i.viewFrom ? In(e) : ((i.viewFrom += n), (i.viewTo += n));
          else if (t <= i.viewFrom && r >= i.viewTo) In(e);
          else if (t <= i.viewFrom) {
            var o = zn(e, r, r + n, 1);
            o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += n)) : In(e);
          } else if (r >= i.viewTo) {
            var l = zn(e, t, t, -1);
            l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : In(e);
          } else {
            var a = zn(e, t, t, -1),
              s = zn(e, r, r + n, 1);
            a && s
              ? ((i.view = i.view
                  .slice(0, a.index)
                  .concat(Cr(e, a.lineN, s.lineN))
                  .concat(i.view.slice(s.index))),
                (i.viewTo += n))
              : In(e);
          }
          var c = i.externalMeasured;
          c && (r < c.lineN ? (c.lineN += n) : t < c.lineN + c.size && (i.externalMeasured = null));
        }
        function Rn(e, t, r) {
          e.curOp.viewChanged = !0;
          var n = e.display,
            i = e.display.externalMeasured;
          if (
            (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null),
            !(t < n.viewFrom || t >= n.viewTo))
          ) {
            var o = n.view[Pn(e, t)];
            if (null != o.node) {
              var l = o.changes || (o.changes = []);
              -1 == B(l, r) && l.push(r);
            }
          }
        }
        function In(e) {
          (e.display.viewFrom = e.display.viewTo = e.doc.first),
            (e.display.view = []),
            (e.display.viewOffset = 0);
        }
        function zn(e, t, r, n) {
          var i,
            o = Pn(e, t),
            l = e.display.view;
          if (!Dt || r == e.doc.first + e.doc.size) return { index: o, lineN: r };
          for (var a = e.display.viewFrom, s = 0; s < o; s++) a += l[s].size;
          if (a != t) {
            if (n > 0) {
              if (o == l.length - 1) return null;
              (i = a + l[o].size - t), o++;
            } else i = a - t;
            (t += i), (r += i);
          }
          while (er(e.doc, r) != r) {
            if (o == (n < 0 ? 0 : l.length - 1)) return null;
            (r += n * l[o - (n < 0 ? 1 : 0)].size), (o += n);
          }
          return { index: o, lineN: r };
        }
        function Bn(e, t, r) {
          var n = e.display,
            i = n.view;
          0 == i.length || t >= n.viewTo || r <= n.viewFrom
            ? ((n.view = Cr(e, t, r)), (n.viewFrom = t))
            : (n.viewFrom > t
                ? (n.view = Cr(e, t, n.viewFrom).concat(n.view))
                : n.viewFrom < t && (n.view = n.view.slice(Pn(e, t))),
              (n.viewFrom = t),
              n.viewTo < r
                ? (n.view = n.view.concat(Cr(e, n.viewTo, r)))
                : n.viewTo > r && (n.view = n.view.slice(0, Pn(e, r)))),
            (n.viewTo = r);
        }
        function Un(e) {
          for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            i.hidden || (i.node && !i.changes) || ++r;
          }
          return r;
        }
        function _n(e) {
          e.display.input.showSelection(e.display.input.prepareSelection());
        }
        function jn(e, t) {
          void 0 === t && (t = !0);
          var r = e.doc,
            n = {},
            i = (n.cursors = document.createDocumentFragment()),
            o = (n.selection = document.createDocumentFragment()),
            l = e.options.$customCursor;
          l && (t = !0);
          for (var a = 0; a < r.sel.ranges.length; a++)
            if (t || a != r.sel.primIndex) {
              var s = r.sel.ranges[a];
              if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
                var c = s.empty();
                if (l) {
                  var u = l(e, s);
                  u && Vn(e, u, i);
                } else (c || e.options.showCursorWhenSelecting) && Vn(e, s.head, i);
                c || Kn(e, s, o);
              }
            }
          return n;
        }
        function Vn(e, t, r) {
          var n = yn(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
            i = r.appendChild(D('div', '\xa0', 'CodeMirror-cursor'));
          if (
            ((i.style.left = n.left + 'px'),
            (i.style.top = n.top + 'px'),
            (i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + 'px'),
            /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
          ) {
            var o = vn(e, t, 'div', null, null),
              l = o.right - o.left;
            i.style.width = (l > 0 ? l : e.defaultCharWidth()) + 'px';
          }
          if (n.other) {
            var a = r.appendChild(D('div', '\xa0', 'CodeMirror-cursor CodeMirror-secondarycursor'));
            (a.style.display = ''),
              (a.style.left = n.other.left + 'px'),
              (a.style.top = n.other.top + 'px'),
              (a.style.height = 0.85 * (n.other.bottom - n.other.top) + 'px');
          }
        }
        function Gn(e, t) {
          return e.top - t.top || e.left - t.left;
        }
        function Kn(e, t, r) {
          var n = e.display,
            i = e.doc,
            o = document.createDocumentFragment(),
            l = Gr(e.display),
            a = l.left,
            s = Math.max(n.sizerWidth, qr(e) - n.sizer.offsetLeft) - l.right,
            c = 'ltr' == i.direction;
          function u(e, t, r, n) {
            t < 0 && (t = 0),
              (t = Math.round(t)),
              (n = Math.round(n)),
              o.appendChild(
                D(
                  'div',
                  null,
                  'CodeMirror-selected',
                  'position: absolute; left: ' +
                    e +
                    'px;\n                             top: ' +
                    t +
                    'px; width: ' +
                    (null == r ? s - e : r) +
                    'px;\n                             height: ' +
                    (n - t) +
                    'px'
                )
              );
          }
          function d(t, r, n) {
            var o,
              l,
              d = $e(i, t),
              h = d.text.length;
            function f(r, n) {
              return vn(e, it(t, r), 'div', d, n);
            }
            function p(t, r, n) {
              var i = kn(e, d, null, t),
                o = ('ltr' == r) == ('after' == n) ? 'left' : 'right',
                l = 'after' == n ? i.begin : i.end - (/\s/.test(d.text.charAt(i.end - 1)) ? 2 : 1);
              return f(l, o)[o];
            }
            var g = he(d, i.direction);
            return (
              se(g, r || 0, null == n ? h : n, function(e, t, i, d) {
                var m = 'ltr' == i,
                  v = f(e, m ? 'left' : 'right'),
                  y = f(t - 1, m ? 'right' : 'left'),
                  b = null == r && 0 == e,
                  w = null == n && t == h,
                  C = 0 == d,
                  x = !g || d == g.length - 1;
                if (y.top - v.top <= 3) {
                  var k = (c ? b : w) && C,
                    S = (c ? w : b) && x,
                    M = k ? a : (m ? v : y).left,
                    L = S ? s : (m ? y : v).right;
                  u(M, v.top, L - M, v.bottom);
                } else {
                  var T, N, D, O;
                  m
                    ? ((T = c && b && C ? a : v.left),
                      (N = c ? s : p(e, i, 'before')),
                      (D = c ? a : p(t, i, 'after')),
                      (O = c && w && x ? s : y.right))
                    : ((T = c ? p(e, i, 'before') : a),
                      (N = !c && b && C ? s : v.right),
                      (D = !c && w && x ? a : y.left),
                      (O = c ? p(t, i, 'after') : s)),
                    u(T, v.top, N - T, v.bottom),
                    v.bottom < y.top && u(a, v.bottom, null, y.top),
                    u(D, y.top, O - D, y.bottom);
                }
                (!o || Gn(v, o) < 0) && (o = v),
                  Gn(y, o) < 0 && (o = y),
                  (!l || Gn(v, l) < 0) && (l = v),
                  Gn(y, l) < 0 && (l = y);
              }),
              { start: o, end: l }
            );
          }
          var h = t.from(),
            f = t.to();
          if (h.line == f.line) d(h.line, h.ch, f.ch);
          else {
            var p = $e(i, h.line),
              g = $e(i, f.line),
              m = Zt(p) == Zt(g),
              v = d(h.line, h.ch, m ? p.text.length + 1 : null).end,
              y = d(f.line, m ? 0 : null, f.ch).start;
            m &&
              (v.top < y.top - 2
                ? (u(v.right, v.top, null, v.bottom), u(a, y.top, y.left, y.bottom))
                : u(v.right, v.top, y.left - v.right, v.bottom)),
              v.bottom < y.top && u(a, v.bottom, null, y.top);
          }
          r.appendChild(o);
        }
        function qn(e) {
          if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var r = !0;
            (t.cursorDiv.style.visibility = ''),
              e.options.cursorBlinkRate > 0
                ? (t.blinker = setInterval(function() {
                    e.hasFocus() || Zn(e),
                      (t.cursorDiv.style.visibility = (r = !r) ? '' : 'hidden');
                  }, e.options.cursorBlinkRate))
                : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = 'hidden');
          }
        }
        function Xn(e) {
          e.hasFocus() || (e.display.input.focus(), e.state.focused || $n(e));
        }
        function Yn(e) {
          (e.state.delayingBlurEvent = !0),
            setTimeout(function() {
              e.state.delayingBlurEvent &&
                ((e.state.delayingBlurEvent = !1), e.state.focused && Zn(e));
            }, 100);
        }
        function $n(e, t) {
          e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1),
            'nocursor' != e.options.readOnly &&
              (e.state.focused ||
                (ve(e, 'focus', e, t),
                (e.state.focused = !0),
                E(e.display.wrapper, 'CodeMirror-focused'),
                e.curOp ||
                  e.display.selForContextMenu == e.doc.sel ||
                  (e.display.input.reset(),
                  s &&
                    setTimeout(function() {
                      return e.display.input.reset(!0);
                    }, 20)),
                e.display.input.receivedFocus()),
              qn(e));
        }
        function Zn(e, t) {
          e.state.delayingBlurEvent ||
            (e.state.focused &&
              (ve(e, 'blur', e, t),
              (e.state.focused = !1),
              L(e.display.wrapper, 'CodeMirror-focused')),
            clearInterval(e.display.blinker),
            setTimeout(function() {
              e.state.focused || (e.display.shift = !1);
            }, 150));
        }
        function Jn(e) {
          for (
            var t = e.display,
              r = t.lineDiv.offsetTop,
              n = Math.max(0, t.scroller.getBoundingClientRect().top),
              i = t.lineDiv.getBoundingClientRect().top,
              o = 0,
              s = 0;
            s < t.view.length;
            s++
          ) {
            var c = t.view[s],
              u = e.options.lineWrapping,
              d = void 0,
              h = 0;
            if (!c.hidden) {
              if (((i += c.line.height), l && a < 8)) {
                var f = c.node.offsetTop + c.node.offsetHeight;
                (d = f - r), (r = f);
              } else {
                var p = c.node.getBoundingClientRect();
                (d = p.bottom - p.top),
                  !u &&
                    c.text.firstChild &&
                    (h = c.text.firstChild.getBoundingClientRect().right - p.left - 1);
              }
              var g = c.line.height - d;
              if (
                (g > 0.005 || g < -0.005) &&
                (i < n && (o -= g), Qe(c.line, d), Qn(c.line), c.rest)
              )
                for (var m = 0; m < c.rest.length; m++) Qn(c.rest[m]);
              if (h > e.display.sizerWidth) {
                var v = Math.ceil(h / Dn(e.display));
                v > e.display.maxLineLength &&
                  ((e.display.maxLineLength = v),
                  (e.display.maxLine = c.line),
                  (e.display.maxLineChanged = !0));
              }
            }
          }
          Math.abs(o) > 2 && (t.scroller.scrollTop += o);
        }
        function Qn(e) {
          if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t) {
              var r = e.widgets[t],
                n = r.node.parentNode;
              n && (r.height = n.offsetHeight);
            }
        }
        function ei(e, t, r) {
          var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
          n = Math.floor(n - jr(e));
          var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
            o = tt(t, n),
            l = tt(t, i);
          if (r && r.ensure) {
            var a = r.ensure.from.line,
              s = r.ensure.to.line;
            a < o
              ? ((o = a), (l = tt(t, ir($e(t, a)) + e.wrapper.clientHeight)))
              : Math.min(s, t.lastLine()) >= l &&
                ((o = tt(t, ir($e(t, s)) - e.wrapper.clientHeight)), (l = s));
          }
          return { from: o, to: Math.max(l, o + 1) };
        }
        function ti(e, t) {
          if (!ye(e, 'scrollCursorIntoView')) {
            var r = e.display,
              n = r.sizer.getBoundingClientRect(),
              i = null;
            if (
              (t.top + n.top < 0
                ? (i = !0)
                : t.bottom + n.top >
                    (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
              null != i && !p)
            ) {
              var o = D(
                'div',
                '\u200b',
                null,
                'position: absolute;\n                         top: ' +
                  (t.top - r.viewOffset - jr(e.display)) +
                  'px;\n                         height: ' +
                  (t.bottom - t.top + Kr(e) + r.barHeight) +
                  'px;\n                         left: ' +
                  t.left +
                  'px; width: ' +
                  Math.max(2, t.right - t.left) +
                  'px;'
              );
              e.display.lineSpace.appendChild(o),
                o.scrollIntoView(i),
                e.display.lineSpace.removeChild(o);
            }
          }
        }
        function ri(e, t, r, n) {
          var i;
          null == n && (n = 0),
            e.options.lineWrapping ||
              t != r ||
              ((r = 'before' == t.sticky ? it(t.line, t.ch + 1, 'before') : t),
              (t = t.ch ? it(t.line, 'before' == t.sticky ? t.ch - 1 : t.ch, 'after') : t));
          for (var o = 0; o < 5; o++) {
            var l = !1,
              a = yn(e, t),
              s = r && r != t ? yn(e, r) : a;
            i = {
              left: Math.min(a.left, s.left),
              top: Math.min(a.top, s.top) - n,
              right: Math.max(a.left, s.left),
              bottom: Math.max(a.bottom, s.bottom) + n,
            };
            var c = ii(e, i),
              u = e.doc.scrollTop,
              d = e.doc.scrollLeft;
            if (
              (null != c.scrollTop &&
                (di(e, c.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (l = !0)),
              null != c.scrollLeft &&
                (fi(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - d) > 1 && (l = !0)),
              !l)
            )
              break;
          }
          return i;
        }
        function ni(e, t) {
          var r = ii(e, t);
          null != r.scrollTop && di(e, r.scrollTop), null != r.scrollLeft && fi(e, r.scrollLeft);
        }
        function ii(e, t) {
          var r = e.display,
            n = Nn(e.display);
          t.top < 0 && (t.top = 0);
          var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
            o = Xr(e),
            l = {};
          t.bottom - t.top > o && (t.bottom = t.top + o);
          var a = e.doc.height + Vr(r),
            s = t.top < n,
            c = t.bottom > a - n;
          if (t.top < i) l.scrollTop = s ? 0 : t.top;
          else if (t.bottom > i + o) {
            var u = Math.min(t.top, (c ? a : t.bottom) - o);
            u != i && (l.scrollTop = u);
          }
          var d = e.options.fixedGutter ? 0 : r.gutters.offsetWidth,
            h =
              e.curOp && null != e.curOp.scrollLeft
                ? e.curOp.scrollLeft
                : r.scroller.scrollLeft - d,
            f = qr(e) - r.gutters.offsetWidth,
            p = t.right - t.left > f;
          return (
            p && (t.right = t.left + f),
            t.left < 10
              ? (l.scrollLeft = 0)
              : t.left < h
              ? (l.scrollLeft = Math.max(0, t.left + d - (p ? 0 : 10)))
              : t.right > f + h - 3 && (l.scrollLeft = t.right + (p ? 0 : 10) - f),
            l
          );
        }
        function oi(e, t) {
          null != t &&
            (ci(e),
            (e.curOp.scrollTop =
              (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
        }
        function li(e) {
          ci(e);
          var t = e.getCursor();
          e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
        }
        function ai(e, t, r) {
          (null == t && null == r) || ci(e),
            null != t && (e.curOp.scrollLeft = t),
            null != r && (e.curOp.scrollTop = r);
        }
        function si(e, t) {
          ci(e), (e.curOp.scrollToPos = t);
        }
        function ci(e) {
          var t = e.curOp.scrollToPos;
          if (t) {
            e.curOp.scrollToPos = null;
            var r = bn(e, t.from),
              n = bn(e, t.to);
            ui(e, r, n, t.margin);
          }
        }
        function ui(e, t, r, n) {
          var i = ii(e, {
            left: Math.min(t.left, r.left),
            top: Math.min(t.top, r.top) - n,
            right: Math.max(t.right, r.right),
            bottom: Math.max(t.bottom, r.bottom) + n,
          });
          ai(e, i.scrollLeft, i.scrollTop);
        }
        function di(e, t) {
          Math.abs(e.doc.scrollTop - t) < 2 ||
            (r || _i(e, { top: t }), hi(e, t, !0), r && _i(e), Hi(e, 100));
        }
        function hi(e, t, r) {
          (t = Math.max(
            0,
            Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)
          )),
            (e.display.scroller.scrollTop != t || r) &&
              ((e.doc.scrollTop = t),
              e.display.scrollbars.setScrollTop(t),
              e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
        }
        function fi(e, t, r, n) {
          (t = Math.max(
            0,
            Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)
          )),
            ((r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n) ||
              ((e.doc.scrollLeft = t),
              Ki(e),
              e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
              e.display.scrollbars.setScrollLeft(t));
        }
        function pi(e) {
          var t = e.display,
            r = t.gutters.offsetWidth,
            n = Math.round(e.doc.height + Vr(e.display));
          return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? r : 0,
            docHeight: n,
            scrollHeight: n + Kr(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: r,
          };
        }
        var gi = function(e, t, r) {
          this.cm = r;
          var n = (this.vert = D(
              'div',
              [D('div', null, null, 'min-width: 1px')],
              'CodeMirror-vscrollbar'
            )),
            i = (this.horiz = D(
              'div',
              [D('div', null, null, 'height: 100%; min-height: 1px')],
              'CodeMirror-hscrollbar'
            ));
          (n.tabIndex = i.tabIndex = -1),
            e(n),
            e(i),
            pe(n, 'scroll', function() {
              n.clientHeight && t(n.scrollTop, 'vertical');
            }),
            pe(i, 'scroll', function() {
              i.clientWidth && t(i.scrollLeft, 'horizontal');
            }),
            (this.checkedZeroWidth = !1),
            l && a < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
        };
        (gi.prototype.update = function(e) {
          var t = e.scrollWidth > e.clientWidth + 1,
            r = e.scrollHeight > e.clientHeight + 1,
            n = e.nativeBarWidth;
          if (r) {
            (this.vert.style.display = 'block'), (this.vert.style.bottom = t ? n + 'px' : '0');
            var i = e.viewHeight - (t ? n : 0);
            this.vert.firstChild.style.height =
              Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
          } else
            (this.vert.scrollTop = 0),
              (this.vert.style.display = ''),
              (this.vert.firstChild.style.height = '0');
          if (t) {
            (this.horiz.style.display = 'block'),
              (this.horiz.style.right = r ? n + 'px' : '0'),
              (this.horiz.style.left = e.barLeft + 'px');
            var o = e.viewWidth - e.barLeft - (r ? n : 0);
            this.horiz.firstChild.style.width =
              Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
          } else (this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0');
          return (
            !this.checkedZeroWidth &&
              e.clientHeight > 0 &&
              (0 == n && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
            { right: r ? n : 0, bottom: t ? n : 0 }
          );
        }),
          (gi.prototype.setScrollLeft = function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
              this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
          }),
          (gi.prototype.setScrollTop = function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
              this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
          }),
          (gi.prototype.zeroWidthHack = function() {
            var e = y && !f ? '12px' : '18px';
            (this.horiz.style.height = this.vert.style.width = e),
              (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none'),
              (this.disableHoriz = new z()),
              (this.disableVert = new z());
          }),
          (gi.prototype.enableZeroWidthBar = function(e, t, r) {
            function n() {
              var i = e.getBoundingClientRect(),
                o =
                  'vert' == r
                    ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                    : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
              o != e ? (e.style.pointerEvents = 'none') : t.set(1e3, n);
            }
            (e.style.pointerEvents = 'auto'), t.set(1e3, n);
          }),
          (gi.prototype.clear = function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert);
          });
        var mi = function() {};
        function vi(e, t) {
          t || (t = pi(e));
          var r = e.display.barWidth,
            n = e.display.barHeight;
          yi(e, t);
          for (var i = 0; (i < 4 && r != e.display.barWidth) || n != e.display.barHeight; i++)
            r != e.display.barWidth && e.options.lineWrapping && Jn(e),
              yi(e, pi(e)),
              (r = e.display.barWidth),
              (n = e.display.barHeight);
        }
        function yi(e, t) {
          var r = e.display,
            n = r.scrollbars.update(t);
          (r.sizer.style.paddingRight = (r.barWidth = n.right) + 'px'),
            (r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + 'px'),
            (r.heightForcer.style.borderBottom = n.bottom + 'px solid transparent'),
            n.right && n.bottom
              ? ((r.scrollbarFiller.style.display = 'block'),
                (r.scrollbarFiller.style.height = n.bottom + 'px'),
                (r.scrollbarFiller.style.width = n.right + 'px'))
              : (r.scrollbarFiller.style.display = ''),
            n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter
              ? ((r.gutterFiller.style.display = 'block'),
                (r.gutterFiller.style.height = n.bottom + 'px'),
                (r.gutterFiller.style.width = t.gutterWidth + 'px'))
              : (r.gutterFiller.style.display = '');
        }
        (mi.prototype.update = function() {
          return { bottom: 0, right: 0 };
        }),
          (mi.prototype.setScrollLeft = function() {}),
          (mi.prototype.setScrollTop = function() {}),
          (mi.prototype.clear = function() {});
        var bi = { native: gi, null: mi };
        function wi(e) {
          e.display.scrollbars &&
            (e.display.scrollbars.clear(),
            e.display.scrollbars.addClass && L(e.display.wrapper, e.display.scrollbars.addClass)),
            (e.display.scrollbars = new bi[e.options.scrollbarStyle](
              function(t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                  pe(t, 'mousedown', function() {
                    e.state.focused &&
                      setTimeout(function() {
                        return e.display.input.focus();
                      }, 0);
                  }),
                  t.setAttribute('cm-not-content', 'true');
              },
              function(t, r) {
                'horizontal' == r ? fi(e, t) : di(e, t);
              },
              e
            )),
            e.display.scrollbars.addClass && E(e.display.wrapper, e.display.scrollbars.addClass);
        }
        var Ci = 0;
        function xi(e) {
          (e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: 0,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Ci,
            markArrays: null,
          }),
            kr(e.curOp);
        }
        function ki(e) {
          var t = e.curOp;
          t &&
            Mr(t, function(e) {
              for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
              Si(e);
            });
        }
        function Si(e) {
          for (var t = e.ops, r = 0; r < t.length; r++) Mi(t[r]);
          for (var n = 0; n < t.length; n++) Li(t[n]);
          for (var i = 0; i < t.length; i++) Ti(t[i]);
          for (var o = 0; o < t.length; o++) Ni(t[o]);
          for (var l = 0; l < t.length; l++) Di(t[l]);
        }
        function Mi(e) {
          var t = e.cm,
            r = t.display;
          Ri(t),
            e.updateMaxLine && lr(t),
            (e.mustUpdate =
              e.viewChanged ||
              e.forceUpdate ||
              null != e.scrollTop ||
              (e.scrollToPos &&
                (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo)) ||
              (r.maxLineChanged && t.options.lineWrapping)),
            (e.update =
              e.mustUpdate &&
              new Fi(
                t,
                e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
                e.forceUpdate
              ));
        }
        function Li(e) {
          e.updatedDisplay = e.mustUpdate && Bi(e.cm, e.update);
        }
        function Ti(e) {
          var t = e.cm,
            r = t.display;
          e.updatedDisplay && Jn(t),
            (e.barMeasure = pi(t)),
            r.maxLineChanged &&
              !t.options.lineWrapping &&
              ((e.adjustWidthTo = Jr(t, r.maxLine, r.maxLine.text.length).left + 3),
              (t.display.sizerWidth = e.adjustWidthTo),
              (e.barMeasure.scrollWidth = Math.max(
                r.scroller.clientWidth,
                r.sizer.offsetLeft + e.adjustWidthTo + Kr(t) + t.display.barWidth
              )),
              (e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - qr(t)))),
            (e.updatedDisplay || e.selectionChanged) &&
              (e.preparedSelection = r.input.prepareSelection());
        }
        function Ni(e) {
          var t = e.cm;
          null != e.adjustWidthTo &&
            ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
            e.maxScrollLeft < t.doc.scrollLeft &&
              fi(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
            (t.display.maxLineChanged = !1));
          var r = e.focus && e.focus == W();
          e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r),
            (e.updatedDisplay || e.startHeight != t.doc.height) && vi(t, e.barMeasure),
            e.updatedDisplay && Gi(t, e.barMeasure),
            e.selectionChanged && qn(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            r && Xn(e.cm);
        }
        function Di(e) {
          var t = e.cm,
            r = t.display,
            n = t.doc;
          if (
            (e.updatedDisplay && Ui(t, e.update),
            null == r.wheelStartX ||
              (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) ||
              (r.wheelStartX = r.wheelStartY = null),
            null != e.scrollTop && hi(t, e.scrollTop, e.forceScroll),
            null != e.scrollLeft && fi(t, e.scrollLeft, !0, !0),
            e.scrollToPos)
          ) {
            var i = ri(t, dt(n, e.scrollToPos.from), dt(n, e.scrollToPos.to), e.scrollToPos.margin);
            ti(t, i);
          }
          var o = e.maybeHiddenMarkers,
            l = e.maybeUnhiddenMarkers;
          if (o) for (var a = 0; a < o.length; ++a) o[a].lines.length || ve(o[a], 'hide');
          if (l) for (var s = 0; s < l.length; ++s) l[s].lines.length && ve(l[s], 'unhide');
          r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && ve(t, 'changes', t, e.changeObjs),
            e.update && e.update.finish();
        }
        function Oi(e, t) {
          if (e.curOp) return t();
          xi(e);
          try {
            return t();
          } finally {
            ki(e);
          }
        }
        function Ai(e, t) {
          return function() {
            if (e.curOp) return t.apply(e, arguments);
            xi(e);
            try {
              return t.apply(e, arguments);
            } finally {
              ki(e);
            }
          };
        }
        function Wi(e) {
          return function() {
            if (this.curOp) return e.apply(this, arguments);
            xi(this);
            try {
              return e.apply(this, arguments);
            } finally {
              ki(this);
            }
          };
        }
        function Ei(e) {
          return function() {
            var t = this.cm;
            if (!t || t.curOp) return e.apply(this, arguments);
            xi(t);
            try {
              return e.apply(this, arguments);
            } finally {
              ki(t);
            }
          };
        }
        function Hi(e, t) {
          e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, F(Pi, e));
        }
        function Pi(e) {
          var t = e.doc;
          if (!(t.highlightFrontier >= e.display.viewTo)) {
            var r = +new Date() + e.options.workTime,
              n = yt(e, t.highlightFrontier),
              i = [];
            t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
              if (n.line >= e.display.viewFrom) {
                var l = o.styles,
                  a = o.text.length > e.options.maxHighlightLength ? Ke(t.mode, n.state) : null,
                  s = mt(e, o, n, !0);
                a && (n.state = a), (o.styles = s.styles);
                var c = o.styleClasses,
                  u = s.classes;
                u ? (o.styleClasses = u) : c && (o.styleClasses = null);
                for (
                  var d =
                      !l ||
                      l.length != o.styles.length ||
                      (c != u &&
                        (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass)),
                    h = 0;
                  !d && h < l.length;
                  ++h
                )
                  d = l[h] != o.styles[h];
                d && i.push(n.line), (o.stateAfter = n.save()), n.nextLine();
              } else o.text.length <= e.options.maxHighlightLength && bt(e, o.text, n), (o.stateAfter = n.line % 5 == 0 ? n.save() : null), n.nextLine();
              if (+new Date() > r) return Hi(e, e.options.workDelay), !0;
            }),
              (t.highlightFrontier = n.line),
              (t.modeFrontier = Math.max(t.modeFrontier, n.line)),
              i.length &&
                Oi(e, function() {
                  for (var t = 0; t < i.length; t++) Rn(e, i[t], 'text');
                });
          }
        }
        var Fi = function(e, t, r) {
          var n = e.display;
          (this.viewport = t),
            (this.visible = ei(n, e.doc, t)),
            (this.editorIsHidden = !n.wrapper.offsetWidth),
            (this.wrapperHeight = n.wrapper.clientHeight),
            (this.wrapperWidth = n.wrapper.clientWidth),
            (this.oldDisplayWidth = qr(e)),
            (this.force = r),
            (this.dims = On(e)),
            (this.events = []);
        };
        function Ri(e) {
          var t = e.display;
          !t.scrollbarsClipped &&
            t.scroller.offsetWidth &&
            ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
            (t.heightForcer.style.height = Kr(e) + 'px'),
            (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
            (t.sizer.style.borderRightWidth = Kr(e) + 'px'),
            (t.scrollbarsClipped = !0));
        }
        function Ii(e) {
          if (e.hasFocus()) return null;
          var t = W();
          if (!t || !A(e.display.lineDiv, t)) return null;
          var r = { activeElt: t };
          if (window.getSelection) {
            var n = window.getSelection();
            n.anchorNode &&
              n.extend &&
              A(e.display.lineDiv, n.anchorNode) &&
              ((r.anchorNode = n.anchorNode),
              (r.anchorOffset = n.anchorOffset),
              (r.focusNode = n.focusNode),
              (r.focusOffset = n.focusOffset));
          }
          return r;
        }
        function zi(e) {
          if (
            e &&
            e.activeElt &&
            e.activeElt != W() &&
            (e.activeElt.focus(),
            !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
              e.anchorNode &&
              A(document.body, e.anchorNode) &&
              A(document.body, e.focusNode))
          ) {
            var t = window.getSelection(),
              r = document.createRange();
            r.setEnd(e.anchorNode, e.anchorOffset),
              r.collapse(!1),
              t.removeAllRanges(),
              t.addRange(r),
              t.extend(e.focusNode, e.focusOffset);
          }
        }
        function Bi(e, t) {
          var r = e.display,
            n = e.doc;
          if (t.editorIsHidden) return In(e), !1;
          if (
            !t.force &&
            t.visible.from >= r.viewFrom &&
            t.visible.to <= r.viewTo &&
            (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) &&
            r.renderedView == r.view &&
            0 == Un(e)
          )
            return !1;
          qi(e) && (In(e), (t.dims = On(e)));
          var i = n.first + n.size,
            o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
            l = Math.min(i, t.visible.to + e.options.viewportMargin);
          r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)),
            r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)),
            Dt && ((o = er(e.doc, o)), (l = tr(e.doc, l)));
          var a =
            o != r.viewFrom ||
            l != r.viewTo ||
            r.lastWrapHeight != t.wrapperHeight ||
            r.lastWrapWidth != t.wrapperWidth;
          Bn(e, o, l),
            (r.viewOffset = ir($e(e.doc, r.viewFrom))),
            (e.display.mover.style.top = r.viewOffset + 'px');
          var s = Un(e);
          if (
            !a &&
            0 == s &&
            !t.force &&
            r.renderedView == r.view &&
            (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)
          )
            return !1;
          var c = Ii(e);
          return (
            s > 4 && (r.lineDiv.style.display = 'none'),
            ji(e, r.updateLineNumbers, t.dims),
            s > 4 && (r.lineDiv.style.display = ''),
            (r.renderedView = r.view),
            zi(c),
            T(r.cursorDiv),
            T(r.selectionDiv),
            (r.gutters.style.height = r.sizer.style.minHeight = 0),
            a &&
              ((r.lastWrapHeight = t.wrapperHeight),
              (r.lastWrapWidth = t.wrapperWidth),
              Hi(e, 400)),
            (r.updateLineNumbers = null),
            !0
          );
        }
        function Ui(e, t) {
          for (var r = t.viewport, n = !0; ; n = !1) {
            if (n && e.options.lineWrapping && t.oldDisplayWidth != qr(e))
              n && (t.visible = ei(e.display, e.doc, r));
            else if (
              (r &&
                null != r.top &&
                (r = { top: Math.min(e.doc.height + Vr(e.display) - Xr(e), r.top) }),
              (t.visible = ei(e.display, e.doc, r)),
              t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
            )
              break;
            if (!Bi(e, t)) break;
            Jn(e);
            var i = pi(e);
            _n(e), vi(e, i), Gi(e, i), (t.force = !1);
          }
          t.signal(e, 'update', e),
            (e.display.viewFrom == e.display.reportedViewFrom &&
              e.display.viewTo == e.display.reportedViewTo) ||
              (t.signal(e, 'viewportChange', e, e.display.viewFrom, e.display.viewTo),
              (e.display.reportedViewFrom = e.display.viewFrom),
              (e.display.reportedViewTo = e.display.viewTo));
        }
        function _i(e, t) {
          var r = new Fi(e, t);
          if (Bi(e, r)) {
            Jn(e), Ui(e, r);
            var n = pi(e);
            _n(e), vi(e, n), Gi(e, n), r.finish();
          }
        }
        function ji(e, t, r) {
          var n = e.display,
            i = e.options.lineNumbers,
            o = n.lineDiv,
            l = o.firstChild;
          function a(t) {
            var r = t.nextSibling;
            return (
              s && y && e.display.currentWheelTarget == t
                ? (t.style.display = 'none')
                : t.parentNode.removeChild(t),
              r
            );
          }
          for (var c = n.view, u = n.viewFrom, d = 0; d < c.length; d++) {
            var h = c[d];
            if (h.hidden);
            else if (h.node && h.node.parentNode == o) {
              while (l != h.node) l = a(l);
              var f = i && null != t && t <= u && h.lineNumber;
              h.changes && (B(h.changes, 'gutter') > -1 && (f = !1), Dr(e, h, u, r)),
                f &&
                  (T(h.lineNumber),
                  h.lineNumber.appendChild(document.createTextNode(nt(e.options, u)))),
                (l = h.node.nextSibling);
            } else {
              var p = Rr(e, h, u, r);
              o.insertBefore(p, l);
            }
            u += h.size;
          }
          while (l) l = a(l);
        }
        function Vi(e) {
          var t = e.gutters.offsetWidth;
          (e.sizer.style.marginLeft = t + 'px'), Tr(e, 'gutterChanged', e);
        }
        function Gi(e, t) {
          (e.display.sizer.style.minHeight = t.docHeight + 'px'),
            (e.display.heightForcer.style.top = t.docHeight + 'px'),
            (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Kr(e) + 'px');
        }
        function Ki(e) {
          var t = e.display,
            r = t.view;
          if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
            for (
              var n = An(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
                i = t.gutters.offsetWidth,
                o = n + 'px',
                l = 0;
              l < r.length;
              l++
            )
              if (!r[l].hidden) {
                e.options.fixedGutter &&
                  (r[l].gutter && (r[l].gutter.style.left = o),
                  r[l].gutterBackground && (r[l].gutterBackground.style.left = o));
                var a = r[l].alignable;
                if (a) for (var s = 0; s < a.length; s++) a[s].style.left = o;
              }
            e.options.fixedGutter && (t.gutters.style.left = n + i + 'px');
          }
        }
        function qi(e) {
          if (!e.options.lineNumbers) return !1;
          var t = e.doc,
            r = nt(e.options, t.first + t.size - 1),
            n = e.display;
          if (r.length != n.lineNumChars) {
            var i = n.measure.appendChild(
                D('div', [D('div', r)], 'CodeMirror-linenumber CodeMirror-gutter-elt')
              ),
              o = i.firstChild.offsetWidth,
              l = i.offsetWidth - o;
            return (
              (n.lineGutter.style.width = ''),
              (n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1),
              (n.lineNumWidth = n.lineNumInnerWidth + l),
              (n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
              (n.lineGutter.style.width = n.lineNumWidth + 'px'),
              Vi(e.display),
              !0
            );
          }
          return !1;
        }
        function Xi(e, t) {
          for (var r = [], n = !1, i = 0; i < e.length; i++) {
            var o = e[i],
              l = null;
            if (
              ('string' != typeof o && ((l = o.style), (o = o.className)),
              'CodeMirror-linenumbers' == o)
            ) {
              if (!t) continue;
              n = !0;
            }
            r.push({ className: o, style: l });
          }
          return t && !n && r.push({ className: 'CodeMirror-linenumbers', style: null }), r;
        }
        function Yi(e) {
          var t = e.gutters,
            r = e.gutterSpecs;
          T(t), (e.lineGutter = null);
          for (var n = 0; n < r.length; ++n) {
            var i = r[n],
              o = i.className,
              l = i.style,
              a = t.appendChild(D('div', null, 'CodeMirror-gutter ' + o));
            l && (a.style.cssText = l),
              'CodeMirror-linenumbers' == o &&
                ((e.lineGutter = a), (a.style.width = (e.lineNumWidth || 1) + 'px'));
          }
          (t.style.display = r.length ? '' : 'none'), Vi(e);
        }
        function $i(e) {
          Yi(e.display), Fn(e), Ki(e);
        }
        function Zi(e, t, n, i) {
          var o = this;
          (this.input = n),
            (o.scrollbarFiller = D('div', null, 'CodeMirror-scrollbar-filler')),
            o.scrollbarFiller.setAttribute('cm-not-content', 'true'),
            (o.gutterFiller = D('div', null, 'CodeMirror-gutter-filler')),
            o.gutterFiller.setAttribute('cm-not-content', 'true'),
            (o.lineDiv = O('div', null, 'CodeMirror-code')),
            (o.selectionDiv = D('div', null, null, 'position: relative; z-index: 1')),
            (o.cursorDiv = D('div', null, 'CodeMirror-cursors')),
            (o.measure = D('div', null, 'CodeMirror-measure')),
            (o.lineMeasure = D('div', null, 'CodeMirror-measure')),
            (o.lineSpace = O(
              'div',
              [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv],
              null,
              'position: relative; outline: none'
            ));
          var c = O('div', [o.lineSpace], 'CodeMirror-lines');
          (o.mover = D('div', [c], null, 'position: relative')),
            (o.sizer = D('div', [o.mover], 'CodeMirror-sizer')),
            (o.sizerWidth = null),
            (o.heightForcer = D(
              'div',
              null,
              null,
              'position: absolute; height: ' + U + 'px; width: 1px;'
            )),
            (o.gutters = D('div', null, 'CodeMirror-gutters')),
            (o.lineGutter = null),
            (o.scroller = D('div', [o.sizer, o.heightForcer, o.gutters], 'CodeMirror-scroll')),
            o.scroller.setAttribute('tabIndex', '-1'),
            (o.wrapper = D('div', [o.scrollbarFiller, o.gutterFiller, o.scroller], 'CodeMirror')),
            o.wrapper.setAttribute('translate', 'no'),
            l && a < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
            s || (r && v) || (o.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
            (o.viewFrom = o.viewTo = t.first),
            (o.reportedViewFrom = o.reportedViewTo = t.first),
            (o.view = []),
            (o.renderedView = null),
            (o.externalMeasured = null),
            (o.viewOffset = 0),
            (o.lastWrapHeight = o.lastWrapWidth = 0),
            (o.updateLineNumbers = null),
            (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
            (o.scrollbarsClipped = !1),
            (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
            (o.alignWidgets = !1),
            (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
            (o.maxLine = null),
            (o.maxLineLength = 0),
            (o.maxLineChanged = !1),
            (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
            (o.shift = !1),
            (o.selForContextMenu = null),
            (o.activeTouch = null),
            (o.gutterSpecs = Xi(i.gutters, i.lineNumbers)),
            Yi(o),
            n.init(o);
        }
        (Fi.prototype.signal = function(e, t) {
          we(e, t) && this.events.push(arguments);
        }),
          (Fi.prototype.finish = function() {
            for (var e = 0; e < this.events.length; e++) ve.apply(null, this.events[e]);
          });
        var Ji = 0,
          Qi = null;
        function eo(e) {
          var t = e.wheelDeltaX,
            r = e.wheelDeltaY;
          return (
            null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
            null == r && e.detail && e.axis == e.VERTICAL_AXIS
              ? (r = e.detail)
              : null == r && (r = e.wheelDelta),
            { x: t, y: r }
          );
        }
        function to(e) {
          var t = eo(e);
          return (t.x *= Qi), (t.y *= Qi), t;
        }
        function ro(e, t) {
          var n = eo(t),
            i = n.x,
            o = n.y,
            l = Qi;
          0 === t.deltaMode && ((i = t.deltaX), (o = t.deltaY), (l = 1));
          var a = e.display,
            c = a.scroller,
            u = c.scrollWidth > c.clientWidth,
            h = c.scrollHeight > c.clientHeight;
          if ((i && u) || (o && h)) {
            if (o && y && s)
              e: for (var f = t.target, p = a.view; f != c; f = f.parentNode)
                for (var g = 0; g < p.length; g++)
                  if (p[g].node == f) {
                    e.display.currentWheelTarget = f;
                    break e;
                  }
            if (i && !r && !d && null != l)
              return (
                o && h && di(e, Math.max(0, c.scrollTop + o * l)),
                fi(e, Math.max(0, c.scrollLeft + i * l)),
                (!o || (o && h)) && xe(t),
                void (a.wheelStartX = null)
              );
            if (o && null != l) {
              var m = o * l,
                v = e.doc.scrollTop,
                b = v + a.wrapper.clientHeight;
              m < 0 ? (v = Math.max(0, v + m - 50)) : (b = Math.min(e.doc.height, b + m + 50)),
                _i(e, { top: v, bottom: b });
            }
            Ji < 20 &&
              0 !== t.deltaMode &&
              (null == a.wheelStartX
                ? ((a.wheelStartX = c.scrollLeft),
                  (a.wheelStartY = c.scrollTop),
                  (a.wheelDX = i),
                  (a.wheelDY = o),
                  setTimeout(function() {
                    if (null != a.wheelStartX) {
                      var e = c.scrollLeft - a.wheelStartX,
                        t = c.scrollTop - a.wheelStartY,
                        r = (t && a.wheelDY && t / a.wheelDY) || (e && a.wheelDX && e / a.wheelDX);
                      (a.wheelStartX = a.wheelStartY = null),
                        r && ((Qi = (Qi * Ji + r) / (Ji + 1)), ++Ji);
                    }
                  }, 200))
                : ((a.wheelDX += i), (a.wheelDY += o)));
          }
        }
        l ? (Qi = -0.53) : r ? (Qi = 15) : u ? (Qi = -0.7) : h && (Qi = -1 / 3);
        var no = function(e, t) {
          (this.ranges = e), (this.primIndex = t);
        };
        (no.prototype.primary = function() {
          return this.ranges[this.primIndex];
        }),
          (no.prototype.equals = function(e) {
            if (e == this) return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
            for (var t = 0; t < this.ranges.length; t++) {
              var r = this.ranges[t],
                n = e.ranges[t];
              if (!lt(r.anchor, n.anchor) || !lt(r.head, n.head)) return !1;
            }
            return !0;
          }),
          (no.prototype.deepCopy = function() {
            for (var e = [], t = 0; t < this.ranges.length; t++)
              e[t] = new io(at(this.ranges[t].anchor), at(this.ranges[t].head));
            return new no(e, this.primIndex);
          }),
          (no.prototype.somethingSelected = function() {
            for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
            return !1;
          }),
          (no.prototype.contains = function(e, t) {
            t || (t = e);
            for (var r = 0; r < this.ranges.length; r++) {
              var n = this.ranges[r];
              if (ot(t, n.from()) >= 0 && ot(e, n.to()) <= 0) return r;
            }
            return -1;
          });
        var io = function(e, t) {
          (this.anchor = e), (this.head = t);
        };
        function oo(e, t, r) {
          var n = e && e.options.selectionsMayTouch,
            i = t[r];
          t.sort(function(e, t) {
            return ot(e.from(), t.from());
          }),
            (r = B(t, i));
          for (var o = 1; o < t.length; o++) {
            var l = t[o],
              a = t[o - 1],
              s = ot(a.to(), l.from());
            if (n && !l.empty() ? s > 0 : s >= 0) {
              var c = ct(a.from(), l.from()),
                u = st(a.to(), l.to()),
                d = a.empty() ? l.from() == l.head : a.from() == a.head;
              o <= r && --r, t.splice(--o, 2, new io(d ? u : c, d ? c : u));
            }
          }
          return new no(t, r);
        }
        function lo(e, t) {
          return new no([new io(e, t || e)], 0);
        }
        function ao(e) {
          return e.text
            ? it(
                e.from.line + e.text.length - 1,
                Y(e.text).length + (1 == e.text.length ? e.from.ch : 0)
              )
            : e.to;
        }
        function so(e, t) {
          if (ot(e, t.from) < 0) return e;
          if (ot(e, t.to) <= 0) return ao(t);
          var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
            n = e.ch;
          return e.line == t.to.line && (n += ao(t).ch - t.to.ch), it(r, n);
        }
        function co(e, t) {
          for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
            var i = e.sel.ranges[n];
            r.push(new io(so(i.anchor, t), so(i.head, t)));
          }
          return oo(e.cm, r, e.sel.primIndex);
        }
        function uo(e, t, r) {
          return e.line == t.line
            ? it(r.line, e.ch - t.ch + r.ch)
            : it(r.line + (e.line - t.line), e.ch);
        }
        function ho(e, t, r) {
          for (var n = [], i = it(e.first, 0), o = i, l = 0; l < t.length; l++) {
            var a = t[l],
              s = uo(a.from, i, o),
              c = uo(ao(a), i, o);
            if (((i = a.to), (o = c), 'around' == r)) {
              var u = e.sel.ranges[l],
                d = ot(u.head, u.anchor) < 0;
              n[l] = new io(d ? c : s, d ? s : c);
            } else n[l] = new io(s, s);
          }
          return new no(n, e.sel.primIndex);
        }
        function fo(e) {
          (e.doc.mode = je(e.options, e.doc.modeOption)), po(e);
        }
        function po(e) {
          e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
          }),
            (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
            Hi(e, 100),
            e.state.modeGen++,
            e.curOp && Fn(e);
        }
        function go(e, t) {
          return (
            0 == t.from.ch &&
            0 == t.to.ch &&
            '' == Y(t.text) &&
            (!e.cm || e.cm.options.wholeLineUpdateBefore)
          );
        }
        function mo(e, t, r, n) {
          function i(e) {
            return r ? r[e] : null;
          }
          function o(e, r, i) {
            sr(e, r, i, n), Tr(e, 'change', e, t);
          }
          function l(e, t) {
            for (var r = [], o = e; o < t; ++o) r.push(new ar(c[o], i(o), n));
            return r;
          }
          var a = t.from,
            s = t.to,
            c = t.text,
            u = $e(e, a.line),
            d = $e(e, s.line),
            h = Y(c),
            f = i(c.length - 1),
            p = s.line - a.line;
          if (t.full) e.insert(0, l(0, c.length)), e.remove(c.length, e.size - c.length);
          else if (go(e, t)) {
            var g = l(0, c.length - 1);
            o(d, d.text, f), p && e.remove(a.line, p), g.length && e.insert(a.line, g);
          } else if (u == d)
            if (1 == c.length) o(u, u.text.slice(0, a.ch) + h + u.text.slice(s.ch), f);
            else {
              var m = l(1, c.length - 1);
              m.push(new ar(h + u.text.slice(s.ch), f, n)),
                o(u, u.text.slice(0, a.ch) + c[0], i(0)),
                e.insert(a.line + 1, m);
            }
          else if (1 == c.length)
            o(u, u.text.slice(0, a.ch) + c[0] + d.text.slice(s.ch), i(0)), e.remove(a.line + 1, p);
          else {
            o(u, u.text.slice(0, a.ch) + c[0], i(0)), o(d, h + d.text.slice(s.ch), f);
            var v = l(1, c.length - 1);
            p > 1 && e.remove(a.line + 1, p - 1), e.insert(a.line + 1, v);
          }
          Tr(e, 'change', e, t);
        }
        function vo(e, t, r) {
          function n(e, i, o) {
            if (e.linked)
              for (var l = 0; l < e.linked.length; ++l) {
                var a = e.linked[l];
                if (a.doc != i) {
                  var s = o && a.sharedHist;
                  (r && !s) || (t(a.doc, s), n(a.doc, e, s));
                }
              }
          }
          n(e, null, !0);
        }
        function yo(e, t) {
          if (t.cm) throw new Error('This document is already in use.');
          (e.doc = t),
            (t.cm = e),
            En(e),
            fo(e),
            bo(e),
            (e.options.direction = t.direction),
            e.options.lineWrapping || lr(e),
            (e.options.mode = t.modeOption),
            Fn(e);
        }
        function bo(e) {
          ('rtl' == e.doc.direction ? E : L)(e.display.lineDiv, 'CodeMirror-rtl');
        }
        function wo(e) {
          Oi(e, function() {
            bo(e), Fn(e);
          });
        }
        function Co(e) {
          (this.done = []),
            (this.undone = []),
            (this.undoDepth = e ? e.undoDepth : 1 / 0),
            (this.lastModTime = this.lastSelTime = 0),
            (this.lastOp = this.lastSelOp = null),
            (this.lastOrigin = this.lastSelOrigin = null),
            (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
        }
        function xo(e, t) {
          var r = { from: at(t.from), to: ao(t), text: Ze(e, t.from, t.to) };
          return (
            Do(e, r, t.from.line, t.to.line + 1),
            vo(
              e,
              function(e) {
                return Do(e, r, t.from.line, t.to.line + 1);
              },
              !0
            ),
            r
          );
        }
        function ko(e) {
          while (e.length) {
            var t = Y(e);
            if (!t.ranges) break;
            e.pop();
          }
        }
        function So(e, t) {
          return t
            ? (ko(e.done), Y(e.done))
            : e.done.length && !Y(e.done).ranges
            ? Y(e.done)
            : e.done.length > 1 && !e.done[e.done.length - 2].ranges
            ? (e.done.pop(), Y(e.done))
            : void 0;
        }
        function Mo(e, t, r, n) {
          var i = e.history;
          i.undone.length = 0;
          var o,
            l,
            a = +new Date();
          if (
            (i.lastOp == n ||
              (i.lastOrigin == t.origin &&
                t.origin &&
                (('+' == t.origin.charAt(0) &&
                  i.lastModTime > a - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
                  '*' == t.origin.charAt(0)))) &&
            (o = So(i, i.lastOp == n))
          )
            (l = Y(o.changes)),
              0 == ot(t.from, t.to) && 0 == ot(t.from, l.to)
                ? (l.to = ao(t))
                : o.changes.push(xo(e, t));
          else {
            var s = Y(i.done);
            (s && s.ranges) || No(e.sel, i.done),
              (o = { changes: [xo(e, t)], generation: i.generation }),
              i.done.push(o);
            while (i.done.length > i.undoDepth) i.done.shift(), i.done[0].ranges || i.done.shift();
          }
          i.done.push(r),
            (i.generation = ++i.maxGeneration),
            (i.lastModTime = i.lastSelTime = a),
            (i.lastOp = i.lastSelOp = n),
            (i.lastOrigin = i.lastSelOrigin = t.origin),
            l || ve(e, 'historyAdded');
        }
        function Lo(e, t, r, n) {
          var i = t.charAt(0);
          return (
            '*' == i ||
            ('+' == i &&
              r.ranges.length == n.ranges.length &&
              r.somethingSelected() == n.somethingSelected() &&
              new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500))
          );
        }
        function To(e, t, r, n) {
          var i = e.history,
            o = n && n.origin;
          r == i.lastSelOp ||
          (o &&
            i.lastSelOrigin == o &&
            ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) || Lo(e, o, Y(i.done), t)))
            ? (i.done[i.done.length - 1] = t)
            : No(t, i.done),
            (i.lastSelTime = +new Date()),
            (i.lastSelOrigin = o),
            (i.lastSelOp = r),
            n && !1 !== n.clearRedo && ko(i.undone);
        }
        function No(e, t) {
          var r = Y(t);
          (r && r.ranges && r.equals(e)) || t.push(e);
        }
        function Do(e, t, r, n) {
          var i = t['spans_' + e.id],
            o = 0;
          e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function(r) {
            r.markedSpans && ((i || (i = t['spans_' + e.id] = {}))[o] = r.markedSpans), ++o;
          });
        }
        function Oo(e) {
          if (!e) return null;
          for (var t, r = 0; r < e.length; ++r)
            e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
          return t ? (t.length ? t : null) : e;
        }
        function Ao(e, t) {
          var r = t['spans_' + e.id];
          if (!r) return null;
          for (var n = [], i = 0; i < t.text.length; ++i) n.push(Oo(r[i]));
          return n;
        }
        function Wo(e, t) {
          var r = Ao(e, t),
            n = It(e, t);
          if (!r) return n;
          if (!n) return r;
          for (var i = 0; i < r.length; ++i) {
            var o = r[i],
              l = n[i];
            if (o && l)
              e: for (var a = 0; a < l.length; ++a) {
                for (var s = l[a], c = 0; c < o.length; ++c)
                  if (o[c].marker == s.marker) continue e;
                o.push(s);
              }
            else l && (r[i] = l);
          }
          return r;
        }
        function Eo(e, t, r) {
          for (var n = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges) n.push(r ? no.prototype.deepCopy.call(o) : o);
            else {
              var l = o.changes,
                a = [];
              n.push({ changes: a });
              for (var s = 0; s < l.length; ++s) {
                var c = l[s],
                  u = void 0;
                if ((a.push({ from: c.from, to: c.to, text: c.text }), t))
                  for (var d in c)
                    (u = d.match(/^spans_(\d+)$/)) &&
                      B(t, Number(u[1])) > -1 &&
                      ((Y(a)[d] = c[d]), delete c[d]);
              }
            }
          }
          return n;
        }
        function Ho(e, t, r, n) {
          if (n) {
            var i = e.anchor;
            if (r) {
              var o = ot(t, i) < 0;
              o != ot(r, i) < 0 ? ((i = t), (t = r)) : o != ot(t, r) < 0 && (t = r);
            }
            return new io(i, t);
          }
          return new io(r || t, t);
        }
        function Po(e, t, r, n, i) {
          null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            Uo(e, new no([Ho(e.sel.primary(), t, r, i)], 0), n);
        }
        function Fo(e, t, r) {
          for (
            var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
            o < e.sel.ranges.length;
            o++
          )
            n[o] = Ho(e.sel.ranges[o], t[o], null, i);
          var l = oo(e.cm, n, e.sel.primIndex);
          Uo(e, l, r);
        }
        function Ro(e, t, r, n) {
          var i = e.sel.ranges.slice(0);
          (i[t] = r), Uo(e, oo(e.cm, i, e.sel.primIndex), n);
        }
        function Io(e, t, r, n) {
          Uo(e, lo(t, r), n);
        }
        function zo(e, t, r) {
          var n = {
            ranges: t.ranges,
            update: function(t) {
              this.ranges = [];
              for (var r = 0; r < t.length; r++)
                this.ranges[r] = new io(dt(e, t[r].anchor), dt(e, t[r].head));
            },
            origin: r && r.origin,
          };
          return (
            ve(e, 'beforeSelectionChange', e, n),
            e.cm && ve(e.cm, 'beforeSelectionChange', e.cm, n),
            n.ranges != t.ranges ? oo(e.cm, n.ranges, n.ranges.length - 1) : t
          );
        }
        function Bo(e, t, r) {
          var n = e.history.done,
            i = Y(n);
          i && i.ranges ? ((n[n.length - 1] = t), _o(e, t, r)) : Uo(e, t, r);
        }
        function Uo(e, t, r) {
          _o(e, t, r), To(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r);
        }
        function _o(e, t, r) {
          (we(e, 'beforeSelectionChange') || (e.cm && we(e.cm, 'beforeSelectionChange'))) &&
            (t = zo(e, t, r));
          var n = (r && r.bias) || (ot(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
          jo(e, Go(e, t, n, !0)),
            (r && !1 === r.scroll) || !e.cm || 'nocursor' == e.cm.getOption('readOnly') || li(e.cm);
        }
        function jo(e, t) {
          t.equals(e.sel) ||
            ((e.sel = t),
            e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), be(e.cm)),
            Tr(e, 'cursorActivity', e));
        }
        function Vo(e) {
          jo(e, Go(e, e.sel, null, !1));
        }
        function Go(e, t, r, n) {
          for (var i, o = 0; o < t.ranges.length; o++) {
            var l = t.ranges[o],
              a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
              s = qo(e, l.anchor, a && a.anchor, r, n),
              c = qo(e, l.head, a && a.head, r, n);
            (i || s != l.anchor || c != l.head) &&
              (i || (i = t.ranges.slice(0, o)), (i[o] = new io(s, c)));
          }
          return i ? oo(e.cm, i, t.primIndex) : t;
        }
        function Ko(e, t, r, n, i) {
          var o = $e(e, t.line);
          if (o.markedSpans)
            for (var l = 0; l < o.markedSpans.length; ++l) {
              var a = o.markedSpans[l],
                s = a.marker,
                c = 'selectLeft' in s ? !s.selectLeft : s.inclusiveLeft,
                u = 'selectRight' in s ? !s.selectRight : s.inclusiveRight;
              if (
                (null == a.from || (c ? a.from <= t.ch : a.from < t.ch)) &&
                (null == a.to || (u ? a.to >= t.ch : a.to > t.ch))
              ) {
                if (i && (ve(s, 'beforeCursorEnter'), s.explicitlyCleared)) {
                  if (o.markedSpans) {
                    --l;
                    continue;
                  }
                  break;
                }
                if (!s.atomic) continue;
                if (r) {
                  var d = s.find(n < 0 ? 1 : -1),
                    h = void 0;
                  if (
                    ((n < 0 ? u : c) && (d = Xo(e, d, -n, d && d.line == t.line ? o : null)),
                    d && d.line == t.line && (h = ot(d, r)) && (n < 0 ? h < 0 : h > 0))
                  )
                    return Ko(e, d, t, n, i);
                }
                var f = s.find(n < 0 ? -1 : 1);
                return (
                  (n < 0 ? c : u) && (f = Xo(e, f, n, f.line == t.line ? o : null)),
                  f ? Ko(e, f, t, n, i) : null
                );
              }
            }
          return t;
        }
        function qo(e, t, r, n, i) {
          var o = n || 1,
            l =
              Ko(e, t, r, o, i) ||
              (!i && Ko(e, t, r, o, !0)) ||
              Ko(e, t, r, -o, i) ||
              (!i && Ko(e, t, r, -o, !0));
          return l || ((e.cantEdit = !0), it(e.first, 0));
        }
        function Xo(e, t, r, n) {
          return r < 0 && 0 == t.ch
            ? t.line > e.first
              ? dt(e, it(t.line - 1))
              : null
            : r > 0 && t.ch == (n || $e(e, t.line)).text.length
            ? t.line < e.first + e.size - 1
              ? it(t.line + 1, 0)
              : null
            : new it(t.line, t.ch + r);
        }
        function Yo(e) {
          e.setSelection(it(e.firstLine(), 0), it(e.lastLine()), j);
        }
        function $o(e, t, r) {
          var n = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function() {
              return (n.canceled = !0);
            },
          };
          return (
            r &&
              (n.update = function(t, r, i, o) {
                t && (n.from = dt(e, t)),
                  r && (n.to = dt(e, r)),
                  i && (n.text = i),
                  void 0 !== o && (n.origin = o);
              }),
            ve(e, 'beforeChange', e, n),
            e.cm && ve(e.cm, 'beforeChange', e.cm, n),
            n.canceled
              ? (e.cm && (e.cm.curOp.updateInput = 2), null)
              : { from: n.from, to: n.to, text: n.text, origin: n.origin }
          );
        }
        function Zo(e, t, r) {
          if (e.cm) {
            if (!e.cm.curOp) return Ai(e.cm, Zo)(e, t, r);
            if (e.cm.state.suppressEdits) return;
          }
          if (
            !(we(e, 'beforeChange') || (e.cm && we(e.cm, 'beforeChange'))) ||
            ((t = $o(e, t, !0)), t)
          ) {
            var n = Nt && !r && Bt(e, t.from, t.to);
            if (n)
              for (var i = n.length - 1; i >= 0; --i)
                Jo(e, { from: n[i].from, to: n[i].to, text: i ? [''] : t.text, origin: t.origin });
            else Jo(e, t);
          }
        }
        function Jo(e, t) {
          if (1 != t.text.length || '' != t.text[0] || 0 != ot(t.from, t.to)) {
            var r = co(e, t);
            Mo(e, t, r, e.cm ? e.cm.curOp.id : NaN), tl(e, t, r, It(e, t));
            var n = [];
            vo(e, function(e, r) {
              r || -1 != B(n, e.history) || (ll(e.history, t), n.push(e.history)),
                tl(e, t, null, It(e, t));
            });
          }
        }
        function Qo(e, t, r) {
          var n = e.cm && e.cm.state.suppressEdits;
          if (!n || r) {
            for (
              var i,
                o = e.history,
                l = e.sel,
                a = 'undo' == t ? o.done : o.undone,
                s = 'undo' == t ? o.undone : o.done,
                c = 0;
              c < a.length;
              c++
            )
              if (((i = a[c]), r ? i.ranges && !i.equals(e.sel) : !i.ranges)) break;
            if (c != a.length) {
              for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                if (((i = a.pop()), !i.ranges)) {
                  if (n) return void a.push(i);
                  break;
                }
                if ((No(i, s), r && !i.equals(e.sel))) return void Uo(e, i, { clearRedo: !1 });
                l = i;
              }
              var u = [];
              No(l, s),
                s.push({ changes: u, generation: o.generation }),
                (o.generation = i.generation || ++o.maxGeneration);
              for (
                var d = we(e, 'beforeChange') || (e.cm && we(e.cm, 'beforeChange')),
                  h = function(r) {
                    var n = i.changes[r];
                    if (((n.origin = t), d && !$o(e, n, !1))) return (a.length = 0), {};
                    u.push(xo(e, n));
                    var o = r ? co(e, n) : Y(a);
                    tl(e, n, o, Wo(e, n)),
                      !r && e.cm && e.cm.scrollIntoView({ from: n.from, to: ao(n) });
                    var l = [];
                    vo(e, function(e, t) {
                      t || -1 != B(l, e.history) || (ll(e.history, n), l.push(e.history)),
                        tl(e, n, null, Wo(e, n));
                    });
                  },
                  f = i.changes.length - 1;
                f >= 0;
                --f
              ) {
                var p = h(f);
                if (p) return p.v;
              }
            }
          }
        }
        function el(e, t) {
          if (
            0 != t &&
            ((e.first += t),
            (e.sel = new no(
              $(e.sel.ranges, function(e) {
                return new io(it(e.anchor.line + t, e.anchor.ch), it(e.head.line + t, e.head.ch));
              }),
              e.sel.primIndex
            )),
            e.cm)
          ) {
            Fn(e.cm, e.first, e.first - t, t);
            for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) Rn(e.cm, n, 'gutter');
          }
        }
        function tl(e, t, r, n) {
          if (e.cm && !e.cm.curOp) return Ai(e.cm, tl)(e, t, r, n);
          if (t.to.line < e.first) el(e, t.text.length - 1 - (t.to.line - t.from.line));
          else if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
              var i = t.text.length - 1 - (e.first - t.from.line);
              el(e, i),
                (t = {
                  from: it(e.first, 0),
                  to: it(t.to.line + i, t.to.ch),
                  text: [Y(t.text)],
                  origin: t.origin,
                });
            }
            var o = e.lastLine();
            t.to.line > o &&
              (t = {
                from: t.from,
                to: it(o, $e(e, o).text.length),
                text: [t.text[0]],
                origin: t.origin,
              }),
              (t.removed = Ze(e, t.from, t.to)),
              r || (r = co(e, t)),
              e.cm ? rl(e.cm, t, n) : mo(e, t, n),
              _o(e, r, j),
              e.cantEdit && qo(e, it(e.firstLine(), 0)) && (e.cantEdit = !1);
          }
        }
        function rl(e, t, r) {
          var n = e.doc,
            i = e.display,
            o = t.from,
            l = t.to,
            a = !1,
            s = o.line;
          e.options.lineWrapping ||
            ((s = et(Zt($e(n, o.line)))),
            n.iter(s, l.line + 1, function(e) {
              if (e == i.maxLine) return (a = !0), !0;
            })),
            n.sel.contains(t.from, t.to) > -1 && be(e),
            mo(n, t, r, Wn(e)),
            e.options.lineWrapping ||
              (n.iter(s, o.line + t.text.length, function(e) {
                var t = or(e);
                t > i.maxLineLength &&
                  ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (a = !1));
              }),
              a && (e.curOp.updateMaxLine = !0)),
            Tt(n, o.line),
            Hi(e, 400);
          var c = t.text.length - (l.line - o.line) - 1;
          t.full
            ? Fn(e)
            : o.line != l.line || 1 != t.text.length || go(e.doc, t)
            ? Fn(e, o.line, l.line + 1, c)
            : Rn(e, o.line, 'text');
          var u = we(e, 'changes'),
            d = we(e, 'change');
          if (d || u) {
            var h = { from: o, to: l, text: t.text, removed: t.removed, origin: t.origin };
            d && Tr(e, 'change', e, h),
              u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h);
          }
          e.display.selForContextMenu = null;
        }
        function nl(e, t, r, n, i) {
          var o;
          n || (n = r),
            ot(n, r) < 0 && ((o = [n, r]), (r = o[0]), (n = o[1])),
            'string' == typeof t && (t = e.splitLines(t)),
            Zo(e, { from: r, to: n, text: t, origin: i });
        }
        function il(e, t, r, n) {
          r < e.line ? (e.line += n) : t < e.line && ((e.line = t), (e.ch = 0));
        }
        function ol(e, t, r, n) {
          for (var i = 0; i < e.length; ++i) {
            var o = e[i],
              l = !0;
            if (o.ranges) {
              o.copied || ((o = e[i] = o.deepCopy()), (o.copied = !0));
              for (var a = 0; a < o.ranges.length; a++)
                il(o.ranges[a].anchor, t, r, n), il(o.ranges[a].head, t, r, n);
            } else {
              for (var s = 0; s < o.changes.length; ++s) {
                var c = o.changes[s];
                if (r < c.from.line)
                  (c.from = it(c.from.line + n, c.from.ch)), (c.to = it(c.to.line + n, c.to.ch));
                else if (t <= c.to.line) {
                  l = !1;
                  break;
                }
              }
              l || (e.splice(0, i + 1), (i = 0));
            }
          }
        }
        function ll(e, t) {
          var r = t.from.line,
            n = t.to.line,
            i = t.text.length - (n - r) - 1;
          ol(e.done, r, n, i), ol(e.undone, r, n, i);
        }
        function al(e, t, r, n) {
          var i = t,
            o = t;
          return (
            'number' == typeof t ? (o = $e(e, ut(e, t))) : (i = et(t)),
            null == i ? null : (n(o, i) && e.cm && Rn(e.cm, i, r), o)
          );
        }
        function sl(e) {
          (this.lines = e), (this.parent = null);
          for (var t = 0, r = 0; r < e.length; ++r) (e[r].parent = this), (t += e[r].height);
          this.height = t;
        }
        function cl(e) {
          this.children = e;
          for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
            var i = e[n];
            (t += i.chunkSize()), (r += i.height), (i.parent = this);
          }
          (this.size = t), (this.height = r), (this.parent = null);
        }
        (io.prototype.from = function() {
          return ct(this.anchor, this.head);
        }),
          (io.prototype.to = function() {
            return st(this.anchor, this.head);
          }),
          (io.prototype.empty = function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
          }),
          (sl.prototype = {
            chunkSize: function() {
              return this.lines.length;
            },
            removeInner: function(e, t) {
              for (var r = e, n = e + t; r < n; ++r) {
                var i = this.lines[r];
                (this.height -= i.height), cr(i), Tr(i, 'delete');
              }
              this.lines.splice(e, t);
            },
            collapse: function(e) {
              e.push.apply(e, this.lines);
            },
            insertInner: function(e, t, r) {
              (this.height += r),
                (this.lines = this.lines
                  .slice(0, e)
                  .concat(t)
                  .concat(this.lines.slice(e)));
              for (var n = 0; n < t.length; ++n) t[n].parent = this;
            },
            iterN: function(e, t, r) {
              for (var n = e + t; e < n; ++e) if (r(this.lines[e])) return !0;
            },
          }),
          (cl.prototype = {
            chunkSize: function() {
              return this.size;
            },
            removeInner: function(e, t) {
              this.size -= t;
              for (var r = 0; r < this.children.length; ++r) {
                var n = this.children[r],
                  i = n.chunkSize();
                if (e < i) {
                  var o = Math.min(t, i - e),
                    l = n.height;
                  if (
                    (n.removeInner(e, o),
                    (this.height -= l - n.height),
                    i == o && (this.children.splice(r--, 1), (n.parent = null)),
                    0 == (t -= o))
                  )
                    break;
                  e = 0;
                } else e -= i;
              }
              if (
                this.size - t < 25 &&
                (this.children.length > 1 || !(this.children[0] instanceof sl))
              ) {
                var a = [];
                this.collapse(a), (this.children = [new sl(a)]), (this.children[0].parent = this);
              }
            },
            collapse: function(e) {
              for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
            },
            insertInner: function(e, t, r) {
              (this.size += t.length), (this.height += r);
              for (var n = 0; n < this.children.length; ++n) {
                var i = this.children[n],
                  o = i.chunkSize();
                if (e <= o) {
                  if ((i.insertInner(e, t, r), i.lines && i.lines.length > 50)) {
                    for (var l = (i.lines.length % 25) + 25, a = l; a < i.lines.length; ) {
                      var s = new sl(i.lines.slice(a, (a += 25)));
                      (i.height -= s.height), this.children.splice(++n, 0, s), (s.parent = this);
                    }
                    (i.lines = i.lines.slice(0, l)), this.maybeSpill();
                  }
                  break;
                }
                e -= o;
              }
            },
            maybeSpill: function() {
              if (!(this.children.length <= 10)) {
                var e = this;
                do {
                  var t = e.children.splice(e.children.length - 5, 5),
                    r = new cl(t);
                  if (e.parent) {
                    (e.size -= r.size), (e.height -= r.height);
                    var n = B(e.parent.children, e);
                    e.parent.children.splice(n + 1, 0, r);
                  } else {
                    var i = new cl(e.children);
                    (i.parent = e), (e.children = [i, r]), (e = i);
                  }
                  r.parent = e.parent;
                } while (e.children.length > 10);
                e.parent.maybeSpill();
              }
            },
            iterN: function(e, t, r) {
              for (var n = 0; n < this.children.length; ++n) {
                var i = this.children[n],
                  o = i.chunkSize();
                if (e < o) {
                  var l = Math.min(t, o - e);
                  if (i.iterN(e, l, r)) return !0;
                  if (0 == (t -= l)) break;
                  e = 0;
                } else e -= o;
              }
            },
          });
        var ul = function(e, t, r) {
          if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
          (this.doc = e), (this.node = t);
        };
        function dl(e, t, r) {
          ir(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && oi(e, r);
        }
        function hl(e, t, r, n) {
          var i = new ul(e, r, n),
            o = e.cm;
          return (
            o && i.noHScroll && (o.display.alignWidgets = !0),
            al(e, t, 'widget', function(t) {
              var r = t.widgets || (t.widgets = []);
              if (
                (null == i.insertAt
                  ? r.push(i)
                  : r.splice(Math.min(r.length, Math.max(0, i.insertAt)), 0, i),
                (i.line = t),
                o && !rr(e, t))
              ) {
                var n = ir(t) < e.scrollTop;
                Qe(t, t.height + Ur(i)), n && oi(o, i.height), (o.curOp.forceUpdate = !0);
              }
              return !0;
            }),
            o && Tr(o, 'lineWidgetAdded', o, i, 'number' == typeof t ? t : et(t)),
            i
          );
        }
        (ul.prototype.clear = function() {
          var e = this.doc.cm,
            t = this.line.widgets,
            r = this.line,
            n = et(r);
          if (null != n && t) {
            for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
            t.length || (r.widgets = null);
            var o = Ur(this);
            Qe(r, Math.max(0, r.height - o)),
              e &&
                (Oi(e, function() {
                  dl(e, r, -o), Rn(e, n, 'widget');
                }),
                Tr(e, 'lineWidgetCleared', e, this, n));
          }
        }),
          (ul.prototype.changed = function() {
            var e = this,
              t = this.height,
              r = this.doc.cm,
              n = this.line;
            this.height = null;
            var i = Ur(this) - t;
            i &&
              (rr(this.doc, n) || Qe(n, n.height + i),
              r &&
                Oi(r, function() {
                  (r.curOp.forceUpdate = !0), dl(r, n, i), Tr(r, 'lineWidgetChanged', r, e, et(n));
                }));
          }),
          Ce(ul);
        var fl = 0,
          pl = function(e, t) {
            (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++fl);
          };
        function gl(e, t, r, n, i) {
          if (n && n.shared) return vl(e, t, r, n, i);
          if (e.cm && !e.cm.curOp) return Ai(e.cm, gl)(e, t, r, n, i);
          var o = new pl(e, i),
            l = ot(t, r);
          if ((n && R(n, o, !1), l > 0 || (0 == l && !1 !== o.clearWhenEmpty))) return o;
          if (
            (o.replacedWith &&
              ((o.collapsed = !0),
              (o.widgetNode = O('span', [o.replacedWith], 'CodeMirror-widget')),
              n.handleMouseEvents || o.widgetNode.setAttribute('cm-ignore-events', 'true'),
              n.insertLeft && (o.widgetNode.insertLeft = !0)),
            o.collapsed)
          ) {
            if ($t(e, t.line, t, r, o) || (t.line != r.line && $t(e, r.line, t, r, o)))
              throw new Error('Inserting collapsed marker partially overlapping an existing one');
            At();
          }
          o.addToHistory && Mo(e, { from: t, to: r, origin: 'markText' }, e.sel, NaN);
          var a,
            s = t.line,
            c = e.cm;
          if (
            (e.iter(s, r.line + 1, function(n) {
              c && o.collapsed && !c.options.lineWrapping && Zt(n) == c.display.maxLine && (a = !0),
                o.collapsed && s != t.line && Qe(n, 0),
                Pt(
                  n,
                  new Wt(o, s == t.line ? t.ch : null, s == r.line ? r.ch : null),
                  e.cm && e.cm.curOp
                ),
                ++s;
            }),
            o.collapsed &&
              e.iter(t.line, r.line + 1, function(t) {
                rr(e, t) && Qe(t, 0);
              }),
            o.clearOnEnter &&
              pe(o, 'beforeCursorEnter', function() {
                return o.clear();
              }),
            o.readOnly &&
              (Ot(), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
            o.collapsed && ((o.id = ++fl), (o.atomic = !0)),
            c)
          ) {
            if ((a && (c.curOp.updateMaxLine = !0), o.collapsed)) Fn(c, t.line, r.line + 1);
            else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
              for (var u = t.line; u <= r.line; u++) Rn(c, u, 'text');
            o.atomic && Vo(c.doc), Tr(c, 'markerAdded', c, o);
          }
          return o;
        }
        (pl.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            var e = this.doc.cm,
              t = e && !e.curOp;
            if ((t && xi(e), we(this, 'clear'))) {
              var r = this.find();
              r && Tr(this, 'clear', r.from, r.to);
            }
            for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
              var l = this.lines[o],
                a = Et(l.markedSpans, this);
              e && !this.collapsed
                ? Rn(e, et(l), 'text')
                : e && (null != a.to && (i = et(l)), null != a.from && (n = et(l))),
                (l.markedSpans = Ht(l.markedSpans, a)),
                null == a.from && this.collapsed && !rr(this.doc, l) && e && Qe(l, Nn(e.display));
            }
            if (e && this.collapsed && !e.options.lineWrapping)
              for (var s = 0; s < this.lines.length; ++s) {
                var c = Zt(this.lines[s]),
                  u = or(c);
                u > e.display.maxLineLength &&
                  ((e.display.maxLine = c),
                  (e.display.maxLineLength = u),
                  (e.display.maxLineChanged = !0));
              }
            null != n && e && this.collapsed && Fn(e, n, i + 1),
              (this.lines.length = 0),
              (this.explicitlyCleared = !0),
              this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && Vo(e.doc)),
              e && Tr(e, 'markerCleared', e, this, n, i),
              t && ki(e),
              this.parent && this.parent.clear();
          }
        }),
          (pl.prototype.find = function(e, t) {
            var r, n;
            null == e && 'bookmark' == this.type && (e = 1);
            for (var i = 0; i < this.lines.length; ++i) {
              var o = this.lines[i],
                l = Et(o.markedSpans, this);
              if (null != l.from && ((r = it(t ? o : et(o), l.from)), -1 == e)) return r;
              if (null != l.to && ((n = it(t ? o : et(o), l.to)), 1 == e)) return n;
            }
            return r && { from: r, to: n };
          }),
          (pl.prototype.changed = function() {
            var e = this,
              t = this.find(-1, !0),
              r = this,
              n = this.doc.cm;
            t &&
              n &&
              Oi(n, function() {
                var i = t.line,
                  o = et(t.line),
                  l = Qr(n, o);
                if (
                  (l && (cn(l), (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
                  (n.curOp.updateMaxLine = !0),
                  !rr(r.doc, i) && null != r.height)
                ) {
                  var a = r.height;
                  r.height = null;
                  var s = Ur(r) - a;
                  s && Qe(i, i.height + s);
                }
                Tr(n, 'markerChanged', n, e);
              });
          }),
          (pl.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers && -1 != B(t.maybeHiddenMarkers, this)) ||
                (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
            }
            this.lines.push(e);
          }),
          (pl.prototype.detachLine = function(e) {
            if ((this.lines.splice(B(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
              var t = this.doc.cm.curOp;
              (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
            }
          }),
          Ce(pl);
        var ml = function(e, t) {
          (this.markers = e), (this.primary = t);
          for (var r = 0; r < e.length; ++r) e[r].parent = this;
        };
        function vl(e, t, r, n, i) {
          (n = R(n)), (n.shared = !1);
          var o = [gl(e, t, r, n, i)],
            l = o[0],
            a = n.widgetNode;
          return (
            vo(e, function(e) {
              a && (n.widgetNode = a.cloneNode(!0)), o.push(gl(e, dt(e, t), dt(e, r), n, i));
              for (var s = 0; s < e.linked.length; ++s) if (e.linked[s].isParent) return;
              l = Y(o);
            }),
            new ml(o, l)
          );
        }
        function yl(e) {
          return e.findMarks(it(e.first, 0), e.clipPos(it(e.lastLine())), function(e) {
            return e.parent;
          });
        }
        function bl(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r],
              i = n.find(),
              o = e.clipPos(i.from),
              l = e.clipPos(i.to);
            if (ot(o, l)) {
              var a = gl(e, o, l, n.primary, n.primary.type);
              n.markers.push(a), (a.parent = n);
            }
          }
        }
        function wl(e) {
          for (
            var t = function(t) {
                var r = e[t],
                  n = [r.primary.doc];
                vo(r.primary.doc, function(e) {
                  return n.push(e);
                });
                for (var i = 0; i < r.markers.length; i++) {
                  var o = r.markers[i];
                  -1 == B(n, o.doc) && ((o.parent = null), r.markers.splice(i--, 1));
                }
              },
              r = 0;
            r < e.length;
            r++
          )
            t(r);
        }
        (ml.prototype.clear = function() {
          if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
            Tr(this, 'clear');
          }
        }),
          (ml.prototype.find = function(e, t) {
            return this.primary.find(e, t);
          }),
          Ce(ml);
        var Cl = 0,
          xl = function(e, t, r, n, i) {
            if (!(this instanceof xl)) return new xl(e, t, r, n, i);
            null == r && (r = 0),
              cl.call(this, [new sl([new ar('', null)])]),
              (this.first = r),
              (this.scrollTop = this.scrollLeft = 0),
              (this.cantEdit = !1),
              (this.cleanGeneration = 1),
              (this.modeFrontier = this.highlightFrontier = r);
            var o = it(r, 0);
            (this.sel = lo(o)),
              (this.history = new Co(null)),
              (this.id = ++Cl),
              (this.modeOption = t),
              (this.lineSep = n),
              (this.direction = 'rtl' == i ? 'rtl' : 'ltr'),
              (this.extend = !1),
              'string' == typeof e && (e = this.splitLines(e)),
              mo(this, { from: o, to: o, text: e }),
              Uo(this, lo(o), j);
          };
        (xl.prototype = Q(cl.prototype, {
          constructor: xl,
          iter: function(e, t, r) {
            r
              ? this.iterN(e - this.first, t - e, r)
              : this.iterN(this.first, this.first + this.size, e);
          },
          insert: function(e, t) {
            for (var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
            this.insertInner(e - this.first, t, r);
          },
          remove: function(e, t) {
            this.removeInner(e - this.first, t);
          },
          getValue: function(e) {
            var t = Je(this, this.first, this.first + this.size);
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          setValue: Ei(function(e) {
            var t = it(this.first, 0),
              r = this.first + this.size - 1;
            Zo(
              this,
              {
                from: t,
                to: it(r, $e(this, r).text.length),
                text: this.splitLines(e),
                origin: 'setValue',
                full: !0,
              },
              !0
            ),
              this.cm && ai(this.cm, 0, 0),
              Uo(this, lo(t), j);
          }),
          replaceRange: function(e, t, r, n) {
            (t = dt(this, t)), (r = r ? dt(this, r) : t), nl(this, e, t, r, n);
          },
          getRange: function(e, t, r) {
            var n = Ze(this, dt(this, e), dt(this, t));
            return !1 === r ? n : '' === r ? n.join('') : n.join(r || this.lineSeparator());
          },
          getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text;
          },
          getLineHandle: function(e) {
            if (rt(this, e)) return $e(this, e);
          },
          getLineNumber: function(e) {
            return et(e);
          },
          getLineHandleVisualStart: function(e) {
            return 'number' == typeof e && (e = $e(this, e)), Zt(e);
          },
          lineCount: function() {
            return this.size;
          },
          firstLine: function() {
            return this.first;
          },
          lastLine: function() {
            return this.first + this.size - 1;
          },
          clipPos: function(e) {
            return dt(this, e);
          },
          getCursor: function(e) {
            var t,
              r = this.sel.primary();
            return (
              (t =
                null == e || 'head' == e
                  ? r.head
                  : 'anchor' == e
                  ? r.anchor
                  : 'end' == e || 'to' == e || !1 === e
                  ? r.to()
                  : r.from()),
              t
            );
          },
          listSelections: function() {
            return this.sel.ranges;
          },
          somethingSelected: function() {
            return this.sel.somethingSelected();
          },
          setCursor: Ei(function(e, t, r) {
            Io(this, dt(this, 'number' == typeof e ? it(e, t || 0) : e), null, r);
          }),
          setSelection: Ei(function(e, t, r) {
            Io(this, dt(this, e), dt(this, t || e), r);
          }),
          extendSelection: Ei(function(e, t, r) {
            Po(this, dt(this, e), t && dt(this, t), r);
          }),
          extendSelections: Ei(function(e, t) {
            Fo(this, ft(this, e), t);
          }),
          extendSelectionsBy: Ei(function(e, t) {
            var r = $(this.sel.ranges, e);
            Fo(this, ft(this, r), t);
          }),
          setSelections: Ei(function(e, t, r) {
            if (e.length) {
              for (var n = [], i = 0; i < e.length; i++)
                n[i] = new io(dt(this, e[i].anchor), dt(this, e[i].head || e[i].anchor));
              null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                Uo(this, oo(this.cm, n, t), r);
            }
          }),
          addSelection: Ei(function(e, t, r) {
            var n = this.sel.ranges.slice(0);
            n.push(new io(dt(this, e), dt(this, t || e))),
              Uo(this, oo(this.cm, n, n.length - 1), r);
          }),
          getSelection: function(e) {
            for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = Ze(this, r[n].from(), r[n].to());
              t = t ? t.concat(i) : i;
            }
            return !1 === e ? t : t.join(e || this.lineSeparator());
          },
          getSelections: function(e) {
            for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
              var i = Ze(this, r[n].from(), r[n].to());
              !1 !== e && (i = i.join(e || this.lineSeparator())), (t[n] = i);
            }
            return t;
          },
          replaceSelection: function(e, t, r) {
            for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
            this.replaceSelections(n, t, r || '+input');
          },
          replaceSelections: Ei(function(e, t, r) {
            for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
              var l = i.ranges[o];
              n[o] = { from: l.from(), to: l.to(), text: this.splitLines(e[o]), origin: r };
            }
            for (var a = t && 'end' != t && ho(this, n, t), s = n.length - 1; s >= 0; s--)
              Zo(this, n[s]);
            a ? Bo(this, a) : this.cm && li(this.cm);
          }),
          undo: Ei(function() {
            Qo(this, 'undo');
          }),
          redo: Ei(function() {
            Qo(this, 'redo');
          }),
          undoSelection: Ei(function() {
            Qo(this, 'undo', !0);
          }),
          redoSelection: Ei(function() {
            Qo(this, 'redo', !0);
          }),
          setExtending: function(e) {
            this.extend = e;
          },
          getExtending: function() {
            return this.extend;
          },
          historySize: function() {
            for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++)
              e.done[n].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r;
            return { undo: t, redo: r };
          },
          clearHistory: function() {
            var e = this;
            (this.history = new Co(this.history)),
              vo(
                this,
                function(t) {
                  return (t.history = e.history);
                },
                !0
              );
          },
          markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0);
          },
          changeGeneration: function(e) {
            return (
              e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
              this.history.generation
            );
          },
          isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration);
          },
          getHistory: function() {
            return { done: Eo(this.history.done), undone: Eo(this.history.undone) };
          },
          setHistory: function(e) {
            var t = (this.history = new Co(this.history));
            (t.done = Eo(e.done.slice(0), null, !0)), (t.undone = Eo(e.undone.slice(0), null, !0));
          },
          setGutterMarker: Ei(function(e, t, r) {
            return al(this, e, 'gutter', function(e) {
              var n = e.gutterMarkers || (e.gutterMarkers = {});
              return (n[t] = r), !r && ne(n) && (e.gutterMarkers = null), !0;
            });
          }),
          clearGutter: Ei(function(e) {
            var t = this;
            this.iter(function(r) {
              r.gutterMarkers &&
                r.gutterMarkers[e] &&
                al(t, r, 'gutter', function() {
                  return (
                    (r.gutterMarkers[e] = null), ne(r.gutterMarkers) && (r.gutterMarkers = null), !0
                  );
                });
            });
          }),
          lineInfo: function(e) {
            var t;
            if ('number' == typeof e) {
              if (!rt(this, e)) return null;
              if (((t = e), (e = $e(this, e)), !e)) return null;
            } else if (((t = et(e)), null == t)) return null;
            return {
              line: t,
              handle: e,
              text: e.text,
              gutterMarkers: e.gutterMarkers,
              textClass: e.textClass,
              bgClass: e.bgClass,
              wrapClass: e.wrapClass,
              widgets: e.widgets,
            };
          },
          addLineClass: Ei(function(e, t, r) {
            return al(this, e, 'gutter' == t ? 'gutter' : 'class', function(e) {
              var n =
                'text' == t
                  ? 'textClass'
                  : 'background' == t
                  ? 'bgClass'
                  : 'gutter' == t
                  ? 'gutterClass'
                  : 'wrapClass';
              if (e[n]) {
                if (S(r).test(e[n])) return !1;
                e[n] += ' ' + r;
              } else e[n] = r;
              return !0;
            });
          }),
          removeLineClass: Ei(function(e, t, r) {
            return al(this, e, 'gutter' == t ? 'gutter' : 'class', function(e) {
              var n =
                  'text' == t
                    ? 'textClass'
                    : 'background' == t
                    ? 'bgClass'
                    : 'gutter' == t
                    ? 'gutterClass'
                    : 'wrapClass',
                i = e[n];
              if (!i) return !1;
              if (null == r) e[n] = null;
              else {
                var o = i.match(S(r));
                if (!o) return !1;
                var l = o.index + o[0].length;
                e[n] =
                  i.slice(0, o.index) + (o.index && l != i.length ? ' ' : '') + i.slice(l) || null;
              }
              return !0;
            });
          }),
          addLineWidget: Ei(function(e, t, r) {
            return hl(this, e, t, r);
          }),
          removeLineWidget: function(e) {
            e.clear();
          },
          markText: function(e, t, r) {
            return gl(this, dt(this, e), dt(this, t), r, (r && r.type) || 'range');
          },
          setBookmark: function(e, t) {
            var r = {
              replacedWith: t && (null == t.nodeType ? t.widget : t),
              insertLeft: t && t.insertLeft,
              clearWhenEmpty: !1,
              shared: t && t.shared,
              handleMouseEvents: t && t.handleMouseEvents,
            };
            return (e = dt(this, e)), gl(this, e, e, r, 'bookmark');
          },
          findMarksAt: function(e) {
            e = dt(this, e);
            var t = [],
              r = $e(this, e.line).markedSpans;
            if (r)
              for (var n = 0; n < r.length; ++n) {
                var i = r[n];
                (null == i.from || i.from <= e.ch) &&
                  (null == i.to || i.to >= e.ch) &&
                  t.push(i.marker.parent || i.marker);
              }
            return t;
          },
          findMarks: function(e, t, r) {
            (e = dt(this, e)), (t = dt(this, t));
            var n = [],
              i = e.line;
            return (
              this.iter(e.line, t.line + 1, function(o) {
                var l = o.markedSpans;
                if (l)
                  for (var a = 0; a < l.length; a++) {
                    var s = l[a];
                    (null != s.to && i == e.line && e.ch >= s.to) ||
                      (null == s.from && i != e.line) ||
                      (null != s.from && i == t.line && s.from >= t.ch) ||
                      (r && !r(s.marker)) ||
                      n.push(s.marker.parent || s.marker);
                  }
                ++i;
              }),
              n
            );
          },
          getAllMarks: function() {
            var e = [];
            return (
              this.iter(function(t) {
                var r = t.markedSpans;
                if (r) for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker);
              }),
              e
            );
          },
          posFromIndex: function(e) {
            var t,
              r = this.first,
              n = this.lineSeparator().length;
            return (
              this.iter(function(i) {
                var o = i.text.length + n;
                if (o > e) return (t = e), !0;
                (e -= o), ++r;
              }),
              dt(this, it(r, t))
            );
          },
          indexFromPos: function(e) {
            e = dt(this, e);
            var t = e.ch;
            if (e.line < this.first || e.ch < 0) return 0;
            var r = this.lineSeparator().length;
            return (
              this.iter(this.first, e.line, function(e) {
                t += e.text.length + r;
              }),
              t
            );
          },
          copy: function(e) {
            var t = new xl(
              Je(this, this.first, this.first + this.size),
              this.modeOption,
              this.first,
              this.lineSep,
              this.direction
            );
            return (
              (t.scrollTop = this.scrollTop),
              (t.scrollLeft = this.scrollLeft),
              (t.sel = this.sel),
              (t.extend = !1),
              e &&
                ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())),
              t
            );
          },
          linkedDoc: function(e) {
            e || (e = {});
            var t = this.first,
              r = this.first + this.size;
            null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
            var n = new xl(
              Je(this, t, r),
              e.mode || this.modeOption,
              t,
              this.lineSep,
              this.direction
            );
            return (
              e.sharedHist && (n.history = this.history),
              (this.linked || (this.linked = [])).push({ doc: n, sharedHist: e.sharedHist }),
              (n.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
              bl(n, yl(this)),
              n
            );
          },
          unlinkDoc: function(e) {
            if ((e instanceof Fa && (e = e.doc), this.linked))
              for (var t = 0; t < this.linked.length; ++t) {
                var r = this.linked[t];
                if (r.doc == e) {
                  this.linked.splice(t, 1), e.unlinkDoc(this), wl(yl(this));
                  break;
                }
              }
            if (e.history == this.history) {
              var n = [e.id];
              vo(
                e,
                function(e) {
                  return n.push(e.id);
                },
                !0
              ),
                (e.history = new Co(null)),
                (e.history.done = Eo(this.history.done, n)),
                (e.history.undone = Eo(this.history.undone, n));
            }
          },
          iterLinkedDocs: function(e) {
            vo(this, e);
          },
          getMode: function() {
            return this.mode;
          },
          getEditor: function() {
            return this.cm;
          },
          splitLines: function(e) {
            return this.lineSep ? e.split(this.lineSep) : Ee(e);
          },
          lineSeparator: function() {
            return this.lineSep || '\n';
          },
          setDirection: Ei(function(e) {
            'rtl' != e && (e = 'ltr'),
              e != this.direction &&
                ((this.direction = e),
                this.iter(function(e) {
                  return (e.order = null);
                }),
                this.cm && wo(this.cm));
          }),
        })),
          (xl.prototype.eachLine = xl.prototype.iter);
        var kl = 0;
        function Sl(e) {
          var t = this;
          if ((Tl(t), !ye(t, e) && !_r(t.display, e))) {
            xe(e), l && (kl = +new Date());
            var r = Hn(t, e, !0),
              n = e.dataTransfer.files;
            if (r && !t.isReadOnly())
              if (n && n.length && window.FileReader && window.File)
                for (
                  var i = n.length,
                    o = Array(i),
                    a = 0,
                    s = function() {
                      ++a == i &&
                        Ai(t, function() {
                          r = dt(t.doc, r);
                          var e = {
                            from: r,
                            to: r,
                            text: t.doc.splitLines(
                              o
                                .filter(function(e) {
                                  return null != e;
                                })
                                .join(t.doc.lineSeparator())
                            ),
                            origin: 'paste',
                          };
                          Zo(t.doc, e), Bo(t.doc, lo(dt(t.doc, r), dt(t.doc, ao(e))));
                        })();
                    },
                    c = function(e, r) {
                      if (
                        t.options.allowDropFileTypes &&
                        -1 == B(t.options.allowDropFileTypes, e.type)
                      )
                        s();
                      else {
                        var n = new FileReader();
                        (n.onerror = function() {
                          return s();
                        }),
                          (n.onload = function() {
                            var e = n.result;
                            /[\x00-\x08\x0e-\x1f]{2}/.test(e) ? s() : ((o[r] = e), s());
                          }),
                          n.readAsText(e);
                      }
                    },
                    u = 0;
                  u < n.length;
                  u++
                )
                  c(n[u], u);
              else {
                if (t.state.draggingText && t.doc.sel.contains(r) > -1)
                  return (
                    t.state.draggingText(e),
                    void setTimeout(function() {
                      return t.display.input.focus();
                    }, 20)
                  );
                try {
                  var d = e.dataTransfer.getData('Text');
                  if (d) {
                    var h;
                    if (
                      (t.state.draggingText &&
                        !t.state.draggingText.copy &&
                        (h = t.listSelections()),
                      _o(t.doc, lo(r, r)),
                      h)
                    )
                      for (var f = 0; f < h.length; ++f)
                        nl(t.doc, '', h[f].anchor, h[f].head, 'drag');
                    t.replaceSelection(d, 'around', 'paste'), t.display.input.focus();
                  }
                } catch (e) {}
              }
          }
        }
        function Ml(e, t) {
          if (l && (!e.state.draggingText || +new Date() - kl < 100)) Me(t);
          else if (
            !ye(e, t) &&
            !_r(e.display, t) &&
            (t.dataTransfer.setData('Text', e.getSelection()),
            (t.dataTransfer.effectAllowed = 'copyMove'),
            t.dataTransfer.setDragImage && !h)
          ) {
            var r = D('img', null, null, 'position: fixed; left: 0; top: 0;');
            (r.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
              d &&
                ((r.width = r.height = 1),
                e.display.wrapper.appendChild(r),
                (r._top = r.offsetTop)),
              t.dataTransfer.setDragImage(r, 0, 0),
              d && r.parentNode.removeChild(r);
          }
        }
        function Ll(e, t) {
          var r = Hn(e, t);
          if (r) {
            var n = document.createDocumentFragment();
            Vn(e, r, n),
              e.display.dragCursor ||
                ((e.display.dragCursor = D(
                  'div',
                  null,
                  'CodeMirror-cursors CodeMirror-dragcursors'
                )),
                e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
              N(e.display.dragCursor, n);
          }
        }
        function Tl(e) {
          e.display.dragCursor &&
            (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
        }
        function Nl(e) {
          if (document.getElementsByClassName) {
            for (
              var t = document.getElementsByClassName('CodeMirror'), r = [], n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n].CodeMirror;
              i && r.push(i);
            }
            r.length &&
              r[0].operation(function() {
                for (var t = 0; t < r.length; t++) e(r[t]);
              });
          }
        }
        var Dl = !1;
        function Ol() {
          Dl || (Al(), (Dl = !0));
        }
        function Al() {
          var e;
          pe(window, 'resize', function() {
            null == e &&
              (e = setTimeout(function() {
                (e = null), Nl(Wl);
              }, 100));
          }),
            pe(window, 'blur', function() {
              return Nl(Zn);
            });
        }
        function Wl(e) {
          var t = e.display;
          (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
            (t.scrollbarsClipped = !1),
            e.setSize();
        }
        for (
          var El = {
              3: 'Pause',
              8: 'Backspace',
              9: 'Tab',
              13: 'Enter',
              16: 'Shift',
              17: 'Ctrl',
              18: 'Alt',
              19: 'Pause',
              20: 'CapsLock',
              27: 'Esc',
              32: 'Space',
              33: 'PageUp',
              34: 'PageDown',
              35: 'End',
              36: 'Home',
              37: 'Left',
              38: 'Up',
              39: 'Right',
              40: 'Down',
              44: 'PrintScrn',
              45: 'Insert',
              46: 'Delete',
              59: ';',
              61: '=',
              91: 'Mod',
              92: 'Mod',
              93: 'Mod',
              106: '*',
              107: '=',
              109: '-',
              110: '.',
              111: '/',
              145: 'ScrollLock',
              173: '-',
              186: ';',
              187: '=',
              188: ',',
              189: '-',
              190: '.',
              191: '/',
              192: '`',
              219: '[',
              220: '\\',
              221: ']',
              222: "'",
              224: 'Mod',
              63232: 'Up',
              63233: 'Down',
              63234: 'Left',
              63235: 'Right',
              63272: 'Delete',
              63273: 'Home',
              63275: 'End',
              63276: 'PageUp',
              63277: 'PageDown',
              63302: 'Insert',
            },
            Hl = 0;
          Hl < 10;
          Hl++
        )
          El[Hl + 48] = El[Hl + 96] = String(Hl);
        for (var Pl = 65; Pl <= 90; Pl++) El[Pl] = String.fromCharCode(Pl);
        for (var Fl = 1; Fl <= 12; Fl++) El[Fl + 111] = El[Fl + 63235] = 'F' + Fl;
        var Rl = {};
        function Il(e) {
          var t,
            r,
            n,
            i,
            o = e.split(/-(?!$)/);
          e = o[o.length - 1];
          for (var l = 0; l < o.length - 1; l++) {
            var a = o[l];
            if (/^(cmd|meta|m)$/i.test(a)) i = !0;
            else if (/^a(lt)?$/i.test(a)) t = !0;
            else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
            else {
              if (!/^s(hift)?$/i.test(a)) throw new Error('Unrecognized modifier name: ' + a);
              n = !0;
            }
          }
          return (
            t && (e = 'Alt-' + e),
            r && (e = 'Ctrl-' + e),
            i && (e = 'Cmd-' + e),
            n && (e = 'Shift-' + e),
            e
          );
        }
        function zl(e) {
          var t = {};
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var n = e[r];
              if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;
              if ('...' == n) {
                delete e[r];
                continue;
              }
              for (var i = $(r.split(' '), Il), o = 0; o < i.length; o++) {
                var l = void 0,
                  a = void 0;
                o == i.length - 1
                  ? ((a = i.join(' ')), (l = n))
                  : ((a = i.slice(0, o + 1).join(' ')), (l = '...'));
                var s = t[a];
                if (s) {
                  if (s != l) throw new Error('Inconsistent bindings for ' + a);
                } else t[a] = l;
              }
              delete e[r];
            }
          for (var c in t) e[c] = t[c];
          return e;
        }
        function Bl(e, t, r, n) {
          t = Vl(t);
          var i = t.call ? t.call(e, n) : t[e];
          if (!1 === i) return 'nothing';
          if ('...' === i) return 'multi';
          if (null != i && r(i)) return 'handled';
          if (t.fallthrough) {
            if ('[object Array]' != Object.prototype.toString.call(t.fallthrough))
              return Bl(e, t.fallthrough, r, n);
            for (var o = 0; o < t.fallthrough.length; o++) {
              var l = Bl(e, t.fallthrough[o], r, n);
              if (l) return l;
            }
          }
        }
        function Ul(e) {
          var t = 'string' == typeof e ? e : El[e.keyCode];
          return 'Ctrl' == t || 'Alt' == t || 'Shift' == t || 'Mod' == t;
        }
        function _l(e, t, r) {
          var n = e;
          return (
            t.altKey && 'Alt' != n && (e = 'Alt-' + e),
            (x ? t.metaKey : t.ctrlKey) && 'Ctrl' != n && (e = 'Ctrl-' + e),
            (x ? t.ctrlKey : t.metaKey) && 'Mod' != n && (e = 'Cmd-' + e),
            !r && t.shiftKey && 'Shift' != n && (e = 'Shift-' + e),
            e
          );
        }
        function jl(e, t) {
          if (d && 34 == e.keyCode && e['char']) return !1;
          var r = El[e.keyCode];
          return (
            null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), _l(r, e, t))
          );
        }
        function Vl(e) {
          return 'string' == typeof e ? Rl[e] : e;
        }
        function Gl(e, t) {
          for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
            var o = t(r[i]);
            while (n.length && ot(o.from, Y(n).to) <= 0) {
              var l = n.pop();
              if (ot(l.from, o.from) < 0) {
                o.from = l.from;
                break;
              }
            }
            n.push(o);
          }
          Oi(e, function() {
            for (var t = n.length - 1; t >= 0; t--) nl(e.doc, '', n[t].from, n[t].to, '+delete');
            li(e);
          });
        }
        function Kl(e, t, r) {
          var n = le(e.text, t + r, r);
          return n < 0 || n > e.text.length ? null : n;
        }
        function ql(e, t, r) {
          var n = Kl(e, t.ch, r);
          return null == n ? null : new it(t.line, n, r < 0 ? 'after' : 'before');
        }
        function Xl(e, t, r, n, i) {
          if (e) {
            'rtl' == t.doc.direction && (i = -i);
            var o = he(r, t.doc.direction);
            if (o) {
              var l,
                a = i < 0 ? Y(o) : o[0],
                s = i < 0 == (1 == a.level),
                c = s ? 'after' : 'before';
              if (a.level > 0 || 'rtl' == t.doc.direction) {
                var u = en(t, r);
                l = i < 0 ? r.text.length - 1 : 0;
                var d = tn(t, u, l).top;
                (l = ae(
                  function(e) {
                    return tn(t, u, e).top == d;
                  },
                  i < 0 == (1 == a.level) ? a.from : a.to - 1,
                  l
                )),
                  'before' == c && (l = Kl(r, l, 1));
              } else l = i < 0 ? a.to : a.from;
              return new it(n, l, c);
            }
          }
          return new it(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after');
        }
        function Yl(e, t, r, n) {
          var i = he(t, e.doc.direction);
          if (!i) return ql(t, r, n);
          r.ch >= t.text.length
            ? ((r.ch = t.text.length), (r.sticky = 'before'))
            : r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'));
          var o = ue(i, r.ch, r.sticky),
            l = i[o];
          if ('ltr' == e.doc.direction && l.level % 2 == 0 && (n > 0 ? l.to > r.ch : l.from < r.ch))
            return ql(t, r, n);
          var a,
            s = function(e, r) {
              return Kl(t, e instanceof it ? e.ch : e, r);
            },
            c = function(r) {
              return e.options.lineWrapping
                ? ((a = a || en(e, t)), kn(e, t, a, r))
                : { begin: 0, end: t.text.length };
            },
            u = c('before' == r.sticky ? s(r, -1) : r.ch);
          if ('rtl' == e.doc.direction || 1 == l.level) {
            var d = (1 == l.level) == n < 0,
              h = s(r, d ? 1 : -1);
            if (null != h && (d ? h <= l.to && h <= u.end : h >= l.from && h >= u.begin)) {
              var f = d ? 'before' : 'after';
              return new it(r.line, h, f);
            }
          }
          var p = function(e, t, n) {
              for (
                var o = function(e, t) {
                  return t ? new it(r.line, s(e, 1), 'before') : new it(r.line, e, 'after');
                };
                e >= 0 && e < i.length;
                e += t
              ) {
                var l = i[e],
                  a = t > 0 == (1 != l.level),
                  c = a ? n.begin : s(n.end, -1);
                if (l.from <= c && c < l.to) return o(c, a);
                if (((c = a ? l.from : s(l.to, -1)), n.begin <= c && c < n.end)) return o(c, a);
              }
            },
            g = p(o + n, n, u);
          if (g) return g;
          var m = n > 0 ? u.end : s(u.begin, -1);
          return null == m ||
            (n > 0 && m == t.text.length) ||
            ((g = p(n > 0 ? 0 : i.length - 1, n, c(m))), !g)
            ? null
            : g;
        }
        (Rl.basic = {
          Left: 'goCharLeft',
          Right: 'goCharRight',
          Up: 'goLineUp',
          Down: 'goLineDown',
          End: 'goLineEnd',
          Home: 'goLineStartSmart',
          PageUp: 'goPageUp',
          PageDown: 'goPageDown',
          Delete: 'delCharAfter',
          Backspace: 'delCharBefore',
          'Shift-Backspace': 'delCharBefore',
          Tab: 'defaultTab',
          'Shift-Tab': 'indentAuto',
          Enter: 'newlineAndIndent',
          Insert: 'toggleOverwrite',
          Esc: 'singleSelection',
        }),
          (Rl.pcDefault = {
            'Ctrl-A': 'selectAll',
            'Ctrl-D': 'deleteLine',
            'Ctrl-Z': 'undo',
            'Shift-Ctrl-Z': 'redo',
            'Ctrl-Y': 'redo',
            'Ctrl-Home': 'goDocStart',
            'Ctrl-End': 'goDocEnd',
            'Ctrl-Up': 'goLineUp',
            'Ctrl-Down': 'goLineDown',
            'Ctrl-Left': 'goGroupLeft',
            'Ctrl-Right': 'goGroupRight',
            'Alt-Left': 'goLineStart',
            'Alt-Right': 'goLineEnd',
            'Ctrl-Backspace': 'delGroupBefore',
            'Ctrl-Delete': 'delGroupAfter',
            'Ctrl-S': 'save',
            'Ctrl-F': 'find',
            'Ctrl-G': 'findNext',
            'Shift-Ctrl-G': 'findPrev',
            'Shift-Ctrl-F': 'replace',
            'Shift-Ctrl-R': 'replaceAll',
            'Ctrl-[': 'indentLess',
            'Ctrl-]': 'indentMore',
            'Ctrl-U': 'undoSelection',
            'Shift-Ctrl-U': 'redoSelection',
            'Alt-U': 'redoSelection',
            fallthrough: 'basic',
          }),
          (Rl.emacsy = {
            'Ctrl-F': 'goCharRight',
            'Ctrl-B': 'goCharLeft',
            'Ctrl-P': 'goLineUp',
            'Ctrl-N': 'goLineDown',
            'Ctrl-A': 'goLineStart',
            'Ctrl-E': 'goLineEnd',
            'Ctrl-V': 'goPageDown',
            'Shift-Ctrl-V': 'goPageUp',
            'Ctrl-D': 'delCharAfter',
            'Ctrl-H': 'delCharBefore',
            'Alt-Backspace': 'delWordBefore',
            'Ctrl-K': 'killLine',
            'Ctrl-T': 'transposeChars',
            'Ctrl-O': 'openLine',
          }),
          (Rl.macDefault = {
            'Cmd-A': 'selectAll',
            'Cmd-D': 'deleteLine',
            'Cmd-Z': 'undo',
            'Shift-Cmd-Z': 'redo',
            'Cmd-Y': 'redo',
            'Cmd-Home': 'goDocStart',
            'Cmd-Up': 'goDocStart',
            'Cmd-End': 'goDocEnd',
            'Cmd-Down': 'goDocEnd',
            'Alt-Left': 'goGroupLeft',
            'Alt-Right': 'goGroupRight',
            'Cmd-Left': 'goLineLeft',
            'Cmd-Right': 'goLineRight',
            'Alt-Backspace': 'delGroupBefore',
            'Ctrl-Alt-Backspace': 'delGroupAfter',
            'Alt-Delete': 'delGroupAfter',
            'Cmd-S': 'save',
            'Cmd-F': 'find',
            'Cmd-G': 'findNext',
            'Shift-Cmd-G': 'findPrev',
            'Cmd-Alt-F': 'replace',
            'Shift-Cmd-Alt-F': 'replaceAll',
            'Cmd-[': 'indentLess',
            'Cmd-]': 'indentMore',
            'Cmd-Backspace': 'delWrappedLineLeft',
            'Cmd-Delete': 'delWrappedLineRight',
            'Cmd-U': 'undoSelection',
            'Shift-Cmd-U': 'redoSelection',
            'Ctrl-Up': 'goDocStart',
            'Ctrl-Down': 'goDocEnd',
            fallthrough: ['basic', 'emacsy'],
          }),
          (Rl['default'] = y ? Rl.macDefault : Rl.pcDefault);
        var $l = {
          selectAll: Yo,
          singleSelection: function(e) {
            return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), j);
          },
          killLine: function(e) {
            return Gl(e, function(t) {
              if (t.empty()) {
                var r = $e(e.doc, t.head.line).text.length;
                return t.head.ch == r && t.head.line < e.lastLine()
                  ? { from: t.head, to: it(t.head.line + 1, 0) }
                  : { from: t.head, to: it(t.head.line, r) };
              }
              return { from: t.from(), to: t.to() };
            });
          },
          deleteLine: function(e) {
            return Gl(e, function(t) {
              return { from: it(t.from().line, 0), to: dt(e.doc, it(t.to().line + 1, 0)) };
            });
          },
          delLineLeft: function(e) {
            return Gl(e, function(e) {
              return { from: it(e.from().line, 0), to: e.from() };
            });
          },
          delWrappedLineLeft: function(e) {
            return Gl(e, function(t) {
              var r = e.charCoords(t.head, 'div').top + 5,
                n = e.coordsChar({ left: 0, top: r }, 'div');
              return { from: n, to: t.from() };
            });
          },
          delWrappedLineRight: function(e) {
            return Gl(e, function(t) {
              var r = e.charCoords(t.head, 'div').top + 5,
                n = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, 'div');
              return { from: t.from(), to: n };
            });
          },
          undo: function(e) {
            return e.undo();
          },
          redo: function(e) {
            return e.redo();
          },
          undoSelection: function(e) {
            return e.undoSelection();
          },
          redoSelection: function(e) {
            return e.redoSelection();
          },
          goDocStart: function(e) {
            return e.extendSelection(it(e.firstLine(), 0));
          },
          goDocEnd: function(e) {
            return e.extendSelection(it(e.lastLine()));
          },
          goLineStart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return Zl(e, t.head.line);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineStartSmart: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return Ql(e, t.head);
              },
              { origin: '+move', bias: 1 }
            );
          },
          goLineEnd: function(e) {
            return e.extendSelectionsBy(
              function(t) {
                return Jl(e, t.head.line);
              },
              { origin: '+move', bias: -1 }
            );
          },
          goLineRight: function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, 'div');
            }, G);
          },
          goLineLeft: function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, 'div').top + 5;
              return e.coordsChar({ left: 0, top: r }, 'div');
            }, G);
          },
          goLineLeftSmart: function(e) {
            return e.extendSelectionsBy(function(t) {
              var r = e.cursorCoords(t.head, 'div').top + 5,
                n = e.coordsChar({ left: 0, top: r }, 'div');
              return n.ch < e.getLine(n.line).search(/\S/) ? Ql(e, t.head) : n;
            }, G);
          },
          goLineUp: function(e) {
            return e.moveV(-1, 'line');
          },
          goLineDown: function(e) {
            return e.moveV(1, 'line');
          },
          goPageUp: function(e) {
            return e.moveV(-1, 'page');
          },
          goPageDown: function(e) {
            return e.moveV(1, 'page');
          },
          goCharLeft: function(e) {
            return e.moveH(-1, 'char');
          },
          goCharRight: function(e) {
            return e.moveH(1, 'char');
          },
          goColumnLeft: function(e) {
            return e.moveH(-1, 'column');
          },
          goColumnRight: function(e) {
            return e.moveH(1, 'column');
          },
          goWordLeft: function(e) {
            return e.moveH(-1, 'word');
          },
          goGroupRight: function(e) {
            return e.moveH(1, 'group');
          },
          goGroupLeft: function(e) {
            return e.moveH(-1, 'group');
          },
          goWordRight: function(e) {
            return e.moveH(1, 'word');
          },
          delCharBefore: function(e) {
            return e.deleteH(-1, 'codepoint');
          },
          delCharAfter: function(e) {
            return e.deleteH(1, 'char');
          },
          delWordBefore: function(e) {
            return e.deleteH(-1, 'word');
          },
          delWordAfter: function(e) {
            return e.deleteH(1, 'word');
          },
          delGroupBefore: function(e) {
            return e.deleteH(-1, 'group');
          },
          delGroupAfter: function(e) {
            return e.deleteH(1, 'group');
          },
          indentAuto: function(e) {
            return e.indentSelection('smart');
          },
          indentMore: function(e) {
            return e.indentSelection('add');
          },
          indentLess: function(e) {
            return e.indentSelection('subtract');
          },
          insertTab: function(e) {
            return e.replaceSelection('\t');
          },
          insertSoftTab: function(e) {
            for (
              var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0;
              i < r.length;
              i++
            ) {
              var o = r[i].from(),
                l = I(e.getLine(o.line), o.ch, n);
              t.push(X(n - (l % n)));
            }
            e.replaceSelections(t);
          },
          defaultTab: function(e) {
            e.somethingSelected() ? e.indentSelection('add') : e.execCommand('insertTab');
          },
          transposeChars: function(e) {
            return Oi(e, function() {
              for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
                if (t[n].empty()) {
                  var i = t[n].head,
                    o = $e(e.doc, i.line).text;
                  if (o)
                    if ((i.ch == o.length && (i = new it(i.line, i.ch - 1)), i.ch > 0))
                      (i = new it(i.line, i.ch + 1)),
                        e.replaceRange(
                          o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                          it(i.line, i.ch - 2),
                          i,
                          '+transpose'
                        );
                    else if (i.line > e.doc.first) {
                      var l = $e(e.doc, i.line - 1).text;
                      l &&
                        ((i = new it(i.line, 1)),
                        e.replaceRange(
                          o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1),
                          it(i.line - 1, l.length - 1),
                          i,
                          '+transpose'
                        ));
                    }
                  r.push(new io(i, i));
                }
              e.setSelections(r);
            });
          },
          newlineAndIndent: function(e) {
            return Oi(e, function() {
              for (var t = e.listSelections(), r = t.length - 1; r >= 0; r--)
                e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, '+input');
              t = e.listSelections();
              for (var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0);
              li(e);
            });
          },
          openLine: function(e) {
            return e.replaceSelection('\n', 'start');
          },
          toggleOverwrite: function(e) {
            return e.toggleOverwrite();
          },
        };
        function Zl(e, t) {
          var r = $e(e.doc, t),
            n = Zt(r);
          return n != r && (t = et(n)), Xl(!0, e, n, t, 1);
        }
        function Jl(e, t) {
          var r = $e(e.doc, t),
            n = Jt(r);
          return n != r && (t = et(n)), Xl(!0, e, r, t, -1);
        }
        function Ql(e, t) {
          var r = Zl(e, t.line),
            n = $e(e.doc, r.line),
            i = he(n, e.doc.direction);
          if (!i || 0 == i[0].level) {
            var o = Math.max(r.ch, n.text.search(/\S/)),
              l = t.line == r.line && t.ch <= o && t.ch;
            return it(r.line, l ? 0 : o, r.sticky);
          }
          return r;
        }
        function ea(e, t, r) {
          if ('string' == typeof t && ((t = $l[t]), !t)) return !1;
          e.display.input.ensurePolled();
          var n = e.display.shift,
            i = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
              r && (e.display.shift = !1),
              (i = t(e) != _);
          } finally {
            (e.display.shift = n), (e.state.suppressEdits = !1);
          }
          return i;
        }
        function ta(e, t, r) {
          for (var n = 0; n < e.state.keyMaps.length; n++) {
            var i = Bl(t, e.state.keyMaps[n], r, e);
            if (i) return i;
          }
          return (
            (e.options.extraKeys && Bl(t, e.options.extraKeys, r, e)) ||
            Bl(t, e.options.keyMap, r, e)
          );
        }
        var ra = new z();
        function na(e, t, r, n) {
          var i = e.state.keySeq;
          if (i) {
            if (Ul(t)) return 'handled';
            if (
              (/\'$/.test(t)
                ? (e.state.keySeq = null)
                : ra.set(50, function() {
                    e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                  }),
              ia(e, i + ' ' + t, r, n))
            )
              return !0;
          }
          return ia(e, t, r, n);
        }
        function ia(e, t, r, n) {
          var i = ta(e, t, n);
          return (
            'multi' == i && (e.state.keySeq = t),
            'handled' == i && Tr(e, 'keyHandled', e, t, r),
            ('handled' != i && 'multi' != i) || (xe(r), qn(e)),
            !!i
          );
        }
        function oa(e, t) {
          var r = jl(t, !0);
          return (
            !!r &&
            (t.shiftKey && !e.state.keySeq
              ? na(e, 'Shift-' + r, t, function(t) {
                  return ea(e, t, !0);
                }) ||
                na(e, r, t, function(t) {
                  if ('string' == typeof t ? /^go[A-Z]/.test(t) : t.motion) return ea(e, t);
                })
              : na(e, r, t, function(t) {
                  return ea(e, t);
                }))
          );
        }
        function la(e, t, r) {
          return na(e, "'" + r + "'", t, function(t) {
            return ea(e, t, !0);
          });
        }
        var aa = null;
        function sa(e) {
          var t = this;
          if (
            (!e.target || e.target == t.display.input.getField()) &&
            ((t.curOp.focus = W()), !ye(t, e))
          ) {
            l && a < 11 && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var i = oa(t, e);
            d &&
              ((aa = i ? n : null),
              !i &&
                88 == n &&
                !Pe &&
                (y ? e.metaKey : e.ctrlKey) &&
                t.replaceSelection('', null, 'cut')),
              r &&
                !y &&
                !i &&
                46 == n &&
                e.shiftKey &&
                !e.ctrlKey &&
                document.execCommand &&
                document.execCommand('cut'),
              18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || ca(t);
          }
        }
        function ca(e) {
          var t = e.display.lineDiv;
          function r(e) {
            (18 != e.keyCode && e.altKey) ||
              (L(t, 'CodeMirror-crosshair'),
              me(document, 'keyup', r),
              me(document, 'mouseover', r));
          }
          E(t, 'CodeMirror-crosshair'), pe(document, 'keyup', r), pe(document, 'mouseover', r);
        }
        function ua(e) {
          16 == e.keyCode && (this.doc.sel.shift = !1), ye(this, e);
        }
        function da(e) {
          var t = this;
          if (
            (!e.target || e.target == t.display.input.getField()) &&
            !(_r(t.display, e) || ye(t, e) || (e.ctrlKey && !e.altKey) || (y && e.metaKey))
          ) {
            var r = e.keyCode,
              n = e.charCode;
            if (d && r == aa) return (aa = null), void xe(e);
            if (!d || (e.which && !(e.which < 10)) || !oa(t, e)) {
              var i = String.fromCharCode(null == n ? r : n);
              '\b' != i && (la(t, e, i) || t.display.input.onKeyPress(e));
            }
          }
        }
        var ha,
          fa,
          pa = 400,
          ga = function(e, t, r) {
            (this.time = e), (this.pos = t), (this.button = r);
          };
        function ma(e, t) {
          var r = +new Date();
          return fa && fa.compare(r, e, t)
            ? ((ha = fa = null), 'triple')
            : ha && ha.compare(r, e, t)
            ? ((fa = new ga(r, e, t)), (ha = null), 'double')
            : ((ha = new ga(r, e, t)), (fa = null), 'single');
        }
        function va(e) {
          var t = this,
            r = t.display;
          if (!(ye(t, e) || (r.activeTouch && r.input.supportsTouch())))
            if ((r.input.ensurePolled(), (r.shift = e.shiftKey), _r(r, e)))
              s ||
                ((r.scroller.draggable = !1),
                setTimeout(function() {
                  return (r.scroller.draggable = !0);
                }, 100));
            else if (!La(t, e)) {
              var n = Hn(t, e),
                i = Te(e),
                o = n ? ma(n, i) : 'single';
              window.focus(),
                1 == i && t.state.selectingText && t.state.selectingText(e),
                (n && ya(t, i, n, o, e)) ||
                  (1 == i
                    ? n
                      ? wa(t, n, o, e)
                      : Le(e) == r.scroller && xe(e)
                    : 2 == i
                    ? (n && Po(t.doc, n),
                      setTimeout(function() {
                        return r.input.focus();
                      }, 20))
                    : 3 == i && (k ? t.display.input.onContextMenu(e) : Yn(t)));
            }
        }
        function ya(e, t, r, n, i) {
          var o = 'Click';
          return (
            'double' == n ? (o = 'Double' + o) : 'triple' == n && (o = 'Triple' + o),
            (o = (1 == t ? 'Left' : 2 == t ? 'Middle' : 'Right') + o),
            na(e, _l(o, i), i, function(t) {
              if (('string' == typeof t && (t = $l[t]), !t)) return !1;
              var n = !1;
              try {
                e.isReadOnly() && (e.state.suppressEdits = !0), (n = t(e, r) != _);
              } finally {
                e.state.suppressEdits = !1;
              }
              return n;
            })
          );
        }
        function ba(e, t, r) {
          var n = e.getOption('configureMouse'),
            i = n ? n(e, t, r) : {};
          if (null == i.unit) {
            var o = b ? r.shiftKey && r.metaKey : r.altKey;
            i.unit = o ? 'rectangle' : 'single' == t ? 'char' : 'double' == t ? 'word' : 'line';
          }
          return (
            (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey),
            null == i.addNew && (i.addNew = y ? r.metaKey : r.ctrlKey),
            null == i.moveOnDrag && (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)),
            i
          );
        }
        function wa(e, t, r, n) {
          l ? setTimeout(F(Xn, e), 0) : (e.curOp.focus = W());
          var i,
            o = ba(e, r, n),
            a = e.doc.sel;
          e.options.dragDrop &&
          Oe &&
          !e.isReadOnly() &&
          'single' == r &&
          (i = a.contains(t)) > -1 &&
          (ot((i = a.ranges[i]).from(), t) < 0 || t.xRel > 0) &&
          (ot(i.to(), t) > 0 || t.xRel < 0)
            ? Ca(e, n, t, o)
            : ka(e, n, t, o);
        }
        function Ca(e, t, r, n) {
          var i = e.display,
            o = !1,
            c = Ai(e, function(t) {
              s && (i.scroller.draggable = !1),
                (e.state.draggingText = !1),
                e.state.delayingBlurEvent &&
                  (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : Yn(e)),
                me(i.wrapper.ownerDocument, 'mouseup', c),
                me(i.wrapper.ownerDocument, 'mousemove', u),
                me(i.scroller, 'dragstart', d),
                me(i.scroller, 'drop', c),
                o ||
                  (xe(t),
                  n.addNew || Po(e.doc, r, null, null, n.extend),
                  (s && !h) || (l && 9 == a)
                    ? setTimeout(function() {
                        i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus();
                      }, 20)
                    : i.input.focus());
            }),
            u = function(e) {
              o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
            },
            d = function() {
              return (o = !0);
            };
          s && (i.scroller.draggable = !0),
            (e.state.draggingText = c),
            (c.copy = !n.moveOnDrag),
            pe(i.wrapper.ownerDocument, 'mouseup', c),
            pe(i.wrapper.ownerDocument, 'mousemove', u),
            pe(i.scroller, 'dragstart', d),
            pe(i.scroller, 'drop', c),
            (e.state.delayingBlurEvent = !0),
            setTimeout(function() {
              return i.input.focus();
            }, 20),
            i.scroller.dragDrop && i.scroller.dragDrop();
        }
        function xa(e, t, r) {
          if ('char' == r) return new io(t, t);
          if ('word' == r) return e.findWordAt(t);
          if ('line' == r) return new io(it(t.line, 0), dt(e.doc, it(t.line + 1, 0)));
          var n = r(e, t);
          return new io(n.from, n.to);
        }
        function ka(e, t, r, n) {
          l && Yn(e);
          var i = e.display,
            o = e.doc;
          xe(t);
          var a,
            s,
            c = o.sel,
            u = c.ranges;
          if (
            (n.addNew && !n.extend
              ? ((s = o.sel.contains(r)), (a = s > -1 ? u[s] : new io(r, r)))
              : ((a = o.sel.primary()), (s = o.sel.primIndex)),
            'rectangle' == n.unit)
          )
            n.addNew || (a = new io(r, r)), (r = Hn(e, t, !0, !0)), (s = -1);
          else {
            var d = xa(e, r, n.unit);
            a = n.extend ? Ho(a, d.anchor, d.head, n.extend) : d;
          }
          n.addNew
            ? -1 == s
              ? ((s = u.length), Uo(o, oo(e, u.concat([a]), s), { scroll: !1, origin: '*mouse' }))
              : u.length > 1 && u[s].empty() && 'char' == n.unit && !n.extend
              ? (Uo(o, oo(e, u.slice(0, s).concat(u.slice(s + 1)), 0), {
                  scroll: !1,
                  origin: '*mouse',
                }),
                (c = o.sel))
              : Ro(o, s, a, V)
            : ((s = 0), Uo(o, new no([a], 0), V), (c = o.sel));
          var h = r;
          function f(t) {
            if (0 != ot(h, t))
              if (((h = t), 'rectangle' == n.unit)) {
                for (
                  var i = [],
                    l = e.options.tabSize,
                    u = I($e(o, r.line).text, r.ch, l),
                    d = I($e(o, t.line).text, t.ch, l),
                    f = Math.min(u, d),
                    p = Math.max(u, d),
                    g = Math.min(r.line, t.line),
                    m = Math.min(e.lastLine(), Math.max(r.line, t.line));
                  g <= m;
                  g++
                ) {
                  var v = $e(o, g).text,
                    y = K(v, f, l);
                  f == p
                    ? i.push(new io(it(g, y), it(g, y)))
                    : v.length > y && i.push(new io(it(g, y), it(g, K(v, p, l))));
                }
                i.length || i.push(new io(r, r)),
                  Uo(o, oo(e, c.ranges.slice(0, s).concat(i), s), { origin: '*mouse', scroll: !1 }),
                  e.scrollIntoView(t);
              } else {
                var b,
                  w = a,
                  C = xa(e, t, n.unit),
                  x = w.anchor;
                ot(C.anchor, x) > 0
                  ? ((b = C.head), (x = ct(w.from(), C.anchor)))
                  : ((b = C.anchor), (x = st(w.to(), C.head)));
                var k = c.ranges.slice(0);
                (k[s] = Sa(e, new io(dt(o, x), b))), Uo(o, oo(e, k, s), V);
              }
          }
          var p = i.wrapper.getBoundingClientRect(),
            g = 0;
          function m(t) {
            var r = ++g,
              l = Hn(e, t, !0, 'rectangle' == n.unit);
            if (l)
              if (0 != ot(l, h)) {
                (e.curOp.focus = W()), f(l);
                var a = ei(i, o);
                (l.line >= a.to || l.line < a.from) &&
                  setTimeout(
                    Ai(e, function() {
                      g == r && m(t);
                    }),
                    150
                  );
              } else {
                var s = t.clientY < p.top ? -20 : t.clientY > p.bottom ? 20 : 0;
                s &&
                  setTimeout(
                    Ai(e, function() {
                      g == r && ((i.scroller.scrollTop += s), m(t));
                    }),
                    50
                  );
              }
          }
          function v(t) {
            (e.state.selectingText = !1),
              (g = 1 / 0),
              t && (xe(t), i.input.focus()),
              me(i.wrapper.ownerDocument, 'mousemove', y),
              me(i.wrapper.ownerDocument, 'mouseup', b),
              (o.history.lastSelOrigin = null);
          }
          var y = Ai(e, function(e) {
              0 !== e.buttons && Te(e) ? m(e) : v(e);
            }),
            b = Ai(e, v);
          (e.state.selectingText = b),
            pe(i.wrapper.ownerDocument, 'mousemove', y),
            pe(i.wrapper.ownerDocument, 'mouseup', b);
        }
        function Sa(e, t) {
          var r = t.anchor,
            n = t.head,
            i = $e(e.doc, r.line);
          if (0 == ot(r, n) && r.sticky == n.sticky) return t;
          var o = he(i);
          if (!o) return t;
          var l = ue(o, r.ch, r.sticky),
            a = o[l];
          if (a.from != r.ch && a.to != r.ch) return t;
          var s,
            c = l + ((a.from == r.ch) == (1 != a.level) ? 0 : 1);
          if (0 == c || c == o.length) return t;
          if (n.line != r.line) s = (n.line - r.line) * ('ltr' == e.doc.direction ? 1 : -1) > 0;
          else {
            var u = ue(o, n.ch, n.sticky),
              d = u - l || (n.ch - r.ch) * (1 == a.level ? -1 : 1);
            s = u == c - 1 || u == c ? d < 0 : d > 0;
          }
          var h = o[c + (s ? -1 : 0)],
            f = s == (1 == h.level),
            p = f ? h.from : h.to,
            g = f ? 'after' : 'before';
          return r.ch == p && r.sticky == g ? t : new io(new it(r.line, p, g), n);
        }
        function Ma(e, t, r, n) {
          var i, o;
          if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
          else
            try {
              (i = t.clientX), (o = t.clientY);
            } catch (e) {
              return !1;
            }
          if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
          n && xe(t);
          var l = e.display,
            a = l.lineDiv.getBoundingClientRect();
          if (o > a.bottom || !we(e, r)) return Se(t);
          o -= a.top - l.viewOffset;
          for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var c = l.gutters.childNodes[s];
            if (c && c.getBoundingClientRect().right >= i) {
              var u = tt(e.doc, o),
                d = e.display.gutterSpecs[s];
              return ve(e, r, e, u, d.className, t), Se(t);
            }
          }
        }
        function La(e, t) {
          return Ma(e, t, 'gutterClick', !0);
        }
        function Ta(e, t) {
          _r(e.display, t) ||
            Na(e, t) ||
            ye(e, t, 'contextmenu') ||
            k ||
            e.display.input.onContextMenu(t);
        }
        function Na(e, t) {
          return !!we(e, 'gutterContextMenu') && Ma(e, t, 'gutterContextMenu', !1);
        }
        function Da(e) {
          (e.display.wrapper.className =
            e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
            e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
            dn(e);
        }
        ga.prototype.compare = function(e, t, r) {
          return this.time + pa > e && 0 == ot(t, this.pos) && r == this.button;
        };
        var Oa = {
            toString: function() {
              return 'CodeMirror.Init';
            },
          },
          Aa = {},
          Wa = {};
        function Ea(e) {
          var t = e.optionHandlers;
          function r(r, n, i, o) {
            (e.defaults[r] = n),
              i &&
                (t[r] = o
                  ? function(e, t, r) {
                      r != Oa && i(e, t, r);
                    }
                  : i);
          }
          (e.defineOption = r),
            (e.Init = Oa),
            r(
              'value',
              '',
              function(e, t) {
                return e.setValue(t);
              },
              !0
            ),
            r(
              'mode',
              null,
              function(e, t) {
                (e.doc.modeOption = t), fo(e);
              },
              !0
            ),
            r('indentUnit', 2, fo, !0),
            r('indentWithTabs', !1),
            r('smartIndent', !0),
            r(
              'tabSize',
              4,
              function(e) {
                po(e), dn(e), Fn(e);
              },
              !0
            ),
            r('lineSeparator', null, function(e, t) {
              if (((e.doc.lineSep = t), t)) {
                var r = [],
                  n = e.doc.first;
                e.doc.iter(function(e) {
                  for (var i = 0; ; ) {
                    var o = e.text.indexOf(t, i);
                    if (-1 == o) break;
                    (i = o + t.length), r.push(it(n, o));
                  }
                  n++;
                });
                for (var i = r.length - 1; i >= 0; i--)
                  nl(e.doc, t, r[i], it(r[i].line, r[i].ch + t.length));
              }
            }),
            r(
              'specialChars',
              /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
              function(e, t, r) {
                (e.state.specialChars = new RegExp(t.source + (t.test('\t') ? '' : '|\t'), 'g')),
                  r != Oa && e.refresh();
              }
            ),
            r(
              'specialCharPlaceholder',
              pr,
              function(e) {
                return e.refresh();
              },
              !0
            ),
            r('electricChars', !0),
            r(
              'inputStyle',
              v ? 'contenteditable' : 'textarea',
              function() {
                throw new Error('inputStyle can not (yet) be changed in a running editor');
              },
              !0
            ),
            r(
              'spellcheck',
              !1,
              function(e, t) {
                return (e.getInputField().spellcheck = t);
              },
              !0
            ),
            r(
              'autocorrect',
              !1,
              function(e, t) {
                return (e.getInputField().autocorrect = t);
              },
              !0
            ),
            r(
              'autocapitalize',
              !1,
              function(e, t) {
                return (e.getInputField().autocapitalize = t);
              },
              !0
            ),
            r('rtlMoveVisually', !w),
            r('wholeLineUpdateBefore', !0),
            r(
              'theme',
              'default',
              function(e) {
                Da(e), $i(e);
              },
              !0
            ),
            r('keyMap', 'default', function(e, t, r) {
              var n = Vl(t),
                i = r != Oa && Vl(r);
              i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null);
            }),
            r('extraKeys', null),
            r('configureMouse', null),
            r('lineWrapping', !1, Pa, !0),
            r(
              'gutters',
              [],
              function(e, t) {
                (e.display.gutterSpecs = Xi(t, e.options.lineNumbers)), $i(e);
              },
              !0
            ),
            r(
              'fixedGutter',
              !0,
              function(e, t) {
                (e.display.gutters.style.left = t ? An(e.display) + 'px' : '0'), e.refresh();
              },
              !0
            ),
            r(
              'coverGutterNextToScrollbar',
              !1,
              function(e) {
                return vi(e);
              },
              !0
            ),
            r(
              'scrollbarStyle',
              'native',
              function(e) {
                wi(e),
                  vi(e),
                  e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                  e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
              },
              !0
            ),
            r(
              'lineNumbers',
              !1,
              function(e, t) {
                (e.display.gutterSpecs = Xi(e.options.gutters, t)), $i(e);
              },
              !0
            ),
            r('firstLineNumber', 1, $i, !0),
            r(
              'lineNumberFormatter',
              function(e) {
                return e;
              },
              $i,
              !0
            ),
            r('showCursorWhenSelecting', !1, _n, !0),
            r('resetSelectionOnContextMenu', !0),
            r('lineWiseCopyCut', !0),
            r('pasteLinesPerSelection', !0),
            r('selectionsMayTouch', !1),
            r('readOnly', !1, function(e, t) {
              'nocursor' == t && (Zn(e), e.display.input.blur()),
                e.display.input.readOnlyChanged(t);
            }),
            r('screenReaderLabel', null, function(e, t) {
              (t = '' === t ? null : t), e.display.input.screenReaderLabelChanged(t);
            }),
            r(
              'disableInput',
              !1,
              function(e, t) {
                t || e.display.input.reset();
              },
              !0
            ),
            r('dragDrop', !0, Ha),
            r('allowDropFileTypes', null),
            r('cursorBlinkRate', 530),
            r('cursorScrollMargin', 0),
            r('cursorHeight', 1, _n, !0),
            r('singleCursorHeightPerLine', !0, _n, !0),
            r('workTime', 100),
            r('workDelay', 100),
            r('flattenSpans', !0, po, !0),
            r('addModeClass', !1, po, !0),
            r('pollInterval', 100),
            r('undoDepth', 200, function(e, t) {
              return (e.doc.history.undoDepth = t);
            }),
            r('historyEventDelay', 1250),
            r(
              'viewportMargin',
              10,
              function(e) {
                return e.refresh();
              },
              !0
            ),
            r('maxHighlightLength', 1e4, po, !0),
            r('moveInputWithCursor', !0, function(e, t) {
              t || e.display.input.resetPosition();
            }),
            r('tabindex', null, function(e, t) {
              return (e.display.input.getField().tabIndex = t || '');
            }),
            r('autofocus', null),
            r(
              'direction',
              'ltr',
              function(e, t) {
                return e.doc.setDirection(t);
              },
              !0
            ),
            r('phrases', null);
        }
        function Ha(e, t, r) {
          var n = r && r != Oa;
          if (!t != !n) {
            var i = e.display.dragFunctions,
              o = t ? pe : me;
            o(e.display.scroller, 'dragstart', i.start),
              o(e.display.scroller, 'dragenter', i.enter),
              o(e.display.scroller, 'dragover', i.over),
              o(e.display.scroller, 'dragleave', i.leave),
              o(e.display.scroller, 'drop', i.drop);
          }
        }
        function Pa(e) {
          e.options.lineWrapping
            ? (E(e.display.wrapper, 'CodeMirror-wrap'),
              (e.display.sizer.style.minWidth = ''),
              (e.display.sizerWidth = null))
            : (L(e.display.wrapper, 'CodeMirror-wrap'), lr(e)),
            En(e),
            Fn(e),
            dn(e),
            setTimeout(function() {
              return vi(e);
            }, 100);
        }
        function Fa(e, t) {
          var r = this;
          if (!(this instanceof Fa)) return new Fa(e, t);
          (this.options = t = t ? R(t) : {}), R(Aa, t, !1);
          var n = t.value;
          'string' == typeof n
            ? (n = new xl(n, t.mode, null, t.lineSeparator, t.direction))
            : t.mode && (n.modeOption = t.mode),
            (this.doc = n);
          var i = new Fa.inputStyles[t.inputStyle](this),
            o = (this.display = new Zi(e, n, i, t));
          for (var c in ((o.wrapper.CodeMirror = this),
          Da(this),
          t.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
          wi(this),
          (this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: -1,
            cutIncoming: -1,
            selectingText: !1,
            draggingText: !1,
            highlight: new z(),
            keySeq: null,
            specialChars: null,
          }),
          t.autofocus && !v && o.input.focus(),
          l &&
            a < 11 &&
            setTimeout(function() {
              return r.display.input.reset(!0);
            }, 20),
          Ra(this),
          Ol(),
          xi(this),
          (this.curOp.forceUpdate = !0),
          yo(this, n),
          (t.autofocus && !v) || this.hasFocus()
            ? setTimeout(function() {
                r.hasFocus() && !r.state.focused && $n(r);
              }, 20)
            : Zn(this),
          Wa))
            Wa.hasOwnProperty(c) && Wa[c](this, t[c], Oa);
          qi(this), t.finishInit && t.finishInit(this);
          for (var u = 0; u < Ia.length; ++u) Ia[u](this);
          ki(this),
            s &&
              t.lineWrapping &&
              'optimizelegibility' == getComputedStyle(o.lineDiv).textRendering &&
              (o.lineDiv.style.textRendering = 'auto');
        }
        function Ra(e) {
          var t = e.display;
          pe(t.scroller, 'mousedown', Ai(e, va)),
            pe(
              t.scroller,
              'dblclick',
              l && a < 11
                ? Ai(e, function(t) {
                    if (!ye(e, t)) {
                      var r = Hn(e, t);
                      if (r && !La(e, t) && !_r(e.display, t)) {
                        xe(t);
                        var n = e.findWordAt(r);
                        Po(e.doc, n.anchor, n.head);
                      }
                    }
                  })
                : function(t) {
                    return ye(e, t) || xe(t);
                  }
            ),
            pe(t.scroller, 'contextmenu', function(t) {
              return Ta(e, t);
            }),
            pe(t.input.getField(), 'contextmenu', function(r) {
              t.scroller.contains(r.target) || Ta(e, r);
            });
          var r,
            n = { end: 0 };
          function i() {
            t.activeTouch &&
              ((r = setTimeout(function() {
                return (t.activeTouch = null);
              }, 1e3)),
              (n = t.activeTouch),
              (n.end = +new Date()));
          }
          function o(e) {
            if (1 != e.touches.length) return !1;
            var t = e.touches[0];
            return t.radiusX <= 1 && t.radiusY <= 1;
          }
          function s(e, t) {
            if (null == t.left) return !0;
            var r = t.left - e.left,
              n = t.top - e.top;
            return r * r + n * n > 400;
          }
          pe(t.scroller, 'touchstart', function(i) {
            if (!ye(e, i) && !o(i) && !La(e, i)) {
              t.input.ensurePolled(), clearTimeout(r);
              var l = +new Date();
              (t.activeTouch = { start: l, moved: !1, prev: l - n.end <= 300 ? n : null }),
                1 == i.touches.length &&
                  ((t.activeTouch.left = i.touches[0].pageX),
                  (t.activeTouch.top = i.touches[0].pageY));
            }
          }),
            pe(t.scroller, 'touchmove', function() {
              t.activeTouch && (t.activeTouch.moved = !0);
            }),
            pe(t.scroller, 'touchend', function(r) {
              var n = t.activeTouch;
              if (n && !_r(t, r) && null != n.left && !n.moved && new Date() - n.start < 300) {
                var o,
                  l = e.coordsChar(t.activeTouch, 'page');
                (o =
                  !n.prev || s(n, n.prev)
                    ? new io(l, l)
                    : !n.prev.prev || s(n, n.prev.prev)
                    ? e.findWordAt(l)
                    : new io(it(l.line, 0), dt(e.doc, it(l.line + 1, 0)))),
                  e.setSelection(o.anchor, o.head),
                  e.focus(),
                  xe(r);
              }
              i();
            }),
            pe(t.scroller, 'touchcancel', i),
            pe(t.scroller, 'scroll', function() {
              t.scroller.clientHeight &&
                (di(e, t.scroller.scrollTop), fi(e, t.scroller.scrollLeft, !0), ve(e, 'scroll', e));
            }),
            pe(t.scroller, 'mousewheel', function(t) {
              return ro(e, t);
            }),
            pe(t.scroller, 'DOMMouseScroll', function(t) {
              return ro(e, t);
            }),
            pe(t.wrapper, 'scroll', function() {
              return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
            }),
            (t.dragFunctions = {
              enter: function(t) {
                ye(e, t) || Me(t);
              },
              over: function(t) {
                ye(e, t) || (Ll(e, t), Me(t));
              },
              start: function(t) {
                return Ml(e, t);
              },
              drop: Ai(e, Sl),
              leave: function(t) {
                ye(e, t) || Tl(e);
              },
            });
          var c = t.input.getField();
          pe(c, 'keyup', function(t) {
            return ua.call(e, t);
          }),
            pe(c, 'keydown', Ai(e, sa)),
            pe(c, 'keypress', Ai(e, da)),
            pe(c, 'focus', function(t) {
              return $n(e, t);
            }),
            pe(c, 'blur', function(t) {
              return Zn(e, t);
            });
        }
        (Fa.defaults = Aa), (Fa.optionHandlers = Wa);
        var Ia = [];
        function za(e, t, r, n) {
          var i,
            o = e.doc;
          null == r && (r = 'add'),
            'smart' == r && (o.mode.indent ? (i = yt(e, t).state) : (r = 'prev'));
          var l = e.options.tabSize,
            a = $e(o, t),
            s = I(a.text, null, l);
          a.stateAfter && (a.stateAfter = null);
          var c,
            u = a.text.match(/^\s*/)[0];
          if (n || /\S/.test(a.text)) {
            if (
              'smart' == r &&
              ((c = o.mode.indent(i, a.text.slice(u.length), a.text)), c == _ || c > 150)
            ) {
              if (!n) return;
              r = 'prev';
            }
          } else (c = 0), (r = 'not');
          'prev' == r
            ? (c = t > o.first ? I($e(o, t - 1).text, null, l) : 0)
            : 'add' == r
            ? (c = s + e.options.indentUnit)
            : 'subtract' == r
            ? (c = s - e.options.indentUnit)
            : 'number' == typeof r && (c = s + r),
            (c = Math.max(0, c));
          var d = '',
            h = 0;
          if (e.options.indentWithTabs)
            for (var f = Math.floor(c / l); f; --f) (h += l), (d += '\t');
          if ((h < c && (d += X(c - h)), d != u))
            return nl(o, d, it(t, 0), it(t, u.length), '+input'), (a.stateAfter = null), !0;
          for (var p = 0; p < o.sel.ranges.length; p++) {
            var g = o.sel.ranges[p];
            if (g.head.line == t && g.head.ch < u.length) {
              var m = it(t, u.length);
              Ro(o, p, new io(m, m));
              break;
            }
          }
        }
        Fa.defineInitHook = function(e) {
          return Ia.push(e);
        };
        var Ba = null;
        function Ua(e) {
          Ba = e;
        }
        function _a(e, t, r, n, i) {
          var o = e.doc;
          (e.display.shift = !1), n || (n = o.sel);
          var l = +new Date() - 200,
            a = 'paste' == i || e.state.pasteIncoming > l,
            s = Ee(t),
            c = null;
          if (a && n.ranges.length > 1)
            if (Ba && Ba.text.join('\n') == t) {
              if (n.ranges.length % Ba.text.length == 0) {
                c = [];
                for (var u = 0; u < Ba.text.length; u++) c.push(o.splitLines(Ba.text[u]));
              }
            } else
              s.length == n.ranges.length &&
                e.options.pasteLinesPerSelection &&
                (c = $(s, function(e) {
                  return [e];
                }));
          for (var d = e.curOp.updateInput, h = n.ranges.length - 1; h >= 0; h--) {
            var f = n.ranges[h],
              p = f.from(),
              g = f.to();
            f.empty() &&
              (r && r > 0
                ? (p = it(p.line, p.ch - r))
                : e.state.overwrite && !a
                ? (g = it(g.line, Math.min($e(o, g.line).text.length, g.ch + Y(s).length)))
                : a &&
                  Ba &&
                  Ba.lineWise &&
                  Ba.text.join('\n') == s.join('\n') &&
                  (p = g = it(p.line, 0)));
            var m = {
              from: p,
              to: g,
              text: c ? c[h % c.length] : s,
              origin: i || (a ? 'paste' : e.state.cutIncoming > l ? 'cut' : '+input'),
            };
            Zo(e.doc, m), Tr(e, 'inputRead', e, m);
          }
          t && !a && Va(e, t),
            li(e),
            e.curOp.updateInput < 2 && (e.curOp.updateInput = d),
            (e.curOp.typing = !0),
            (e.state.pasteIncoming = e.state.cutIncoming = -1);
        }
        function ja(e, t) {
          var r = e.clipboardData && e.clipboardData.getData('Text');
          if (r)
            return (
              e.preventDefault(),
              t.isReadOnly() ||
                t.options.disableInput ||
                Oi(t, function() {
                  return _a(t, r, 0, null, 'paste');
                }),
              !0
            );
        }
        function Va(e, t) {
          if (e.options.electricChars && e.options.smartIndent)
            for (var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
              var i = r.ranges[n];
              if (!(i.head.ch > 100 || (n && r.ranges[n - 1].head.line == i.head.line))) {
                var o = e.getModeAt(i.head),
                  l = !1;
                if (o.electricChars) {
                  for (var a = 0; a < o.electricChars.length; a++)
                    if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                      l = za(e, i.head.line, 'smart');
                      break;
                    }
                } else
                  o.electricInput &&
                    o.electricInput.test($e(e.doc, i.head.line).text.slice(0, i.head.ch)) &&
                    (l = za(e, i.head.line, 'smart'));
                l && Tr(e, 'electricInput', e, i.head.line);
              }
            }
        }
        function Ga(e) {
          for (var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) {
            var i = e.doc.sel.ranges[n].head.line,
              o = { anchor: it(i, 0), head: it(i + 1, 0) };
            r.push(o), t.push(e.getRange(o.anchor, o.head));
          }
          return { text: t, ranges: r };
        }
        function Ka(e, t, r, n) {
          e.setAttribute('autocorrect', r ? '' : 'off'),
            e.setAttribute('autocapitalize', n ? '' : 'off'),
            e.setAttribute('spellcheck', !!t);
        }
        function qa() {
          var e = D(
              'textarea',
              null,
              null,
              'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none'
            ),
            t = D(
              'div',
              [e],
              null,
              'overflow: hidden; position: relative; width: 3px; height: 0px;'
            );
          return (
            s ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
            g && (e.style.border = '1px solid black'),
            Ka(e),
            t
          );
        }
        function Xa(e) {
          var t = e.optionHandlers,
            r = (e.helpers = {});
          (e.prototype = {
            constructor: e,
            focus: function() {
              window.focus(), this.display.input.focus();
            },
            setOption: function(e, r) {
              var n = this.options,
                i = n[e];
              (n[e] == r && 'mode' != e) ||
                ((n[e] = r),
                t.hasOwnProperty(e) && Ai(this, t[e])(this, r, i),
                ve(this, 'optionChange', this, e));
            },
            getOption: function(e) {
              return this.options[e];
            },
            getDoc: function() {
              return this.doc;
            },
            addKeyMap: function(e, t) {
              this.state.keyMaps[t ? 'push' : 'unshift'](Vl(e));
            },
            removeKeyMap: function(e) {
              for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
            },
            addOverlay: Wi(function(t, r) {
              var n = t.token ? t : e.getMode(this.options, t);
              if (n.startState) throw new Error('Overlays may not be stateful.');
              Z(
                this.state.overlays,
                { mode: n, modeSpec: t, opaque: r && r.opaque, priority: (r && r.priority) || 0 },
                function(e) {
                  return e.priority;
                }
              ),
                this.state.modeGen++,
                Fn(this);
            }),
            removeOverlay: Wi(function(e) {
              for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
                var n = t[r].modeSpec;
                if (n == e || ('string' == typeof e && n.name == e))
                  return t.splice(r, 1), this.state.modeGen++, void Fn(this);
              }
            }),
            indentLine: Wi(function(e, t, r) {
              'string' != typeof t &&
                'number' != typeof t &&
                (t =
                  null == t
                    ? this.options.smartIndent
                      ? 'smart'
                      : 'prev'
                    : t
                    ? 'add'
                    : 'subtract'),
                rt(this.doc, e) && za(this, e, t, r);
            }),
            indentSelection: Wi(function(e) {
              for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
                var i = t[n];
                if (i.empty())
                  i.head.line > r &&
                    (za(this, i.head.line, e, !0),
                    (r = i.head.line),
                    n == this.doc.sel.primIndex && li(this));
                else {
                  var o = i.from(),
                    l = i.to(),
                    a = Math.max(r, o.line);
                  r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                  for (var s = a; s < r; ++s) za(this, s, e);
                  var c = this.doc.sel.ranges;
                  0 == o.ch &&
                    t.length == c.length &&
                    c[n].from().ch > 0 &&
                    Ro(this.doc, n, new io(o, c[n].to()), j);
                }
              }
            }),
            getTokenAt: function(e, t) {
              return kt(this, e, t);
            },
            getLineTokens: function(e, t) {
              return kt(this, it(e), t, !0);
            },
            getTokenTypeAt: function(e) {
              e = dt(this.doc, e);
              var t,
                r = vt(this, $e(this.doc, e.line)),
                n = 0,
                i = (r.length - 1) / 2,
                o = e.ch;
              if (0 == o) t = r[2];
              else
                for (;;) {
                  var l = (n + i) >> 1;
                  if ((l ? r[2 * l - 1] : 0) >= o) i = l;
                  else {
                    if (!(r[2 * l + 1] < o)) {
                      t = r[2 * l + 2];
                      break;
                    }
                    n = l + 1;
                  }
                }
              var a = t ? t.indexOf('overlay ') : -1;
              return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1);
            },
            getModeAt: function(t) {
              var r = this.doc.mode;
              return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r;
            },
            getHelper: function(e, t) {
              return this.getHelpers(e, t)[0];
            },
            getHelpers: function(e, t) {
              var n = [];
              if (!r.hasOwnProperty(t)) return n;
              var i = r[t],
                o = this.getModeAt(e);
              if ('string' == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
              else if (o[t])
                for (var l = 0; l < o[t].length; l++) {
                  var a = i[o[t][l]];
                  a && n.push(a);
                }
              else
                o.helperType && i[o.helperType]
                  ? n.push(i[o.helperType])
                  : i[o.name] && n.push(i[o.name]);
              for (var s = 0; s < i._global.length; s++) {
                var c = i._global[s];
                c.pred(o, this) && -1 == B(n, c.val) && n.push(c.val);
              }
              return n;
            },
            getStateAfter: function(e, t) {
              var r = this.doc;
              return (e = ut(r, null == e ? r.first + r.size - 1 : e)), yt(this, e + 1, t).state;
            },
            cursorCoords: function(e, t) {
              var r,
                n = this.doc.sel.primary();
              return (
                (r =
                  null == e
                    ? n.head
                    : 'object' == typeof e
                    ? dt(this.doc, e)
                    : e
                    ? n.from()
                    : n.to()),
                yn(this, r, t || 'page')
              );
            },
            charCoords: function(e, t) {
              return vn(this, dt(this.doc, e), t || 'page');
            },
            coordsChar: function(e, t) {
              return (e = mn(this, e, t || 'page')), Cn(this, e.left, e.top);
            },
            lineAtHeight: function(e, t) {
              return (
                (e = mn(this, { top: e, left: 0 }, t || 'page').top),
                tt(this.doc, e + this.display.viewOffset)
              );
            },
            heightAtLine: function(e, t, r) {
              var n,
                i = !1;
              if ('number' == typeof e) {
                var o = this.doc.first + this.doc.size - 1;
                e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)),
                  (n = $e(this.doc, e));
              } else n = e;
              return (
                gn(this, n, { top: 0, left: 0 }, t || 'page', r || i).top +
                (i ? this.doc.height - ir(n) : 0)
              );
            },
            defaultTextHeight: function() {
              return Nn(this.display);
            },
            defaultCharWidth: function() {
              return Dn(this.display);
            },
            getViewport: function() {
              return { from: this.display.viewFrom, to: this.display.viewTo };
            },
            addWidget: function(e, t, r, n, i) {
              var o = this.display;
              e = yn(this, dt(this.doc, e));
              var l = e.bottom,
                a = e.left;
              if (
                ((t.style.position = 'absolute'),
                t.setAttribute('cm-ignore-events', 'true'),
                this.display.input.setUneditable(t),
                o.sizer.appendChild(t),
                'over' == n)
              )
                l = e.top;
              else if ('above' == n || 'near' == n) {
                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
                  c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                ('above' == n || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight
                  ? (l = e.top - t.offsetHeight)
                  : e.bottom + t.offsetHeight <= s && (l = e.bottom),
                  a + t.offsetWidth > c && (a = c - t.offsetWidth);
              }
              (t.style.top = l + 'px'),
                (t.style.left = t.style.right = ''),
                'right' == i
                  ? ((a = o.sizer.clientWidth - t.offsetWidth), (t.style.right = '0px'))
                  : ('left' == i
                      ? (a = 0)
                      : 'middle' == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2),
                    (t.style.left = a + 'px')),
                r &&
                  ni(this, {
                    left: a,
                    top: l,
                    right: a + t.offsetWidth,
                    bottom: l + t.offsetHeight,
                  });
            },
            triggerOnKeyDown: Wi(sa),
            triggerOnKeyPress: Wi(da),
            triggerOnKeyUp: ua,
            triggerOnMouseDown: Wi(va),
            execCommand: function(e) {
              if ($l.hasOwnProperty(e)) return $l[e].call(null, this);
            },
            triggerElectric: Wi(function(e) {
              Va(this, e);
            }),
            findPosH: function(e, t, r, n) {
              var i = 1;
              t < 0 && ((i = -1), (t = -t));
              for (var o = dt(this.doc, e), l = 0; l < t; ++l)
                if (((o = Ya(this.doc, o, i, r, n)), o.hitSide)) break;
              return o;
            },
            moveH: Wi(function(e, t) {
              var r = this;
              this.extendSelectionsBy(function(n) {
                return r.display.shift || r.doc.extend || n.empty()
                  ? Ya(r.doc, n.head, e, t, r.options.rtlMoveVisually)
                  : e < 0
                  ? n.from()
                  : n.to();
              }, G);
            }),
            deleteH: Wi(function(e, t) {
              var r = this.doc.sel,
                n = this.doc;
              r.somethingSelected()
                ? n.replaceSelection('', null, '+delete')
                : Gl(this, function(r) {
                    var i = Ya(n, r.head, e, t, !1);
                    return e < 0 ? { from: i, to: r.head } : { from: r.head, to: i };
                  });
            }),
            findPosV: function(e, t, r, n) {
              var i = 1,
                o = n;
              t < 0 && ((i = -1), (t = -t));
              for (var l = dt(this.doc, e), a = 0; a < t; ++a) {
                var s = yn(this, l, 'div');
                if ((null == o ? (o = s.left) : (s.left = o), (l = $a(this, s, i, r)), l.hitSide))
                  break;
              }
              return l;
            },
            moveV: Wi(function(e, t) {
              var r = this,
                n = this.doc,
                i = [],
                o = !this.display.shift && !n.extend && n.sel.somethingSelected();
              if (
                (n.extendSelectionsBy(function(l) {
                  if (o) return e < 0 ? l.from() : l.to();
                  var a = yn(r, l.head, 'div');
                  null != l.goalColumn && (a.left = l.goalColumn), i.push(a.left);
                  var s = $a(r, a, e, t);
                  return (
                    'page' == t && l == n.sel.primary() && oi(r, vn(r, s, 'div').top - a.top), s
                  );
                }, G),
                i.length)
              )
                for (var l = 0; l < n.sel.ranges.length; l++) n.sel.ranges[l].goalColumn = i[l];
            }),
            findWordAt: function(e) {
              var t = this.doc,
                r = $e(t, e.line).text,
                n = e.ch,
                i = e.ch;
              if (r) {
                var o = this.getHelper(e, 'wordChars');
                ('before' != e.sticky && i != r.length) || !n ? ++i : --n;
                var l = r.charAt(n),
                  a = re(l, o)
                    ? function(e) {
                        return re(e, o);
                      }
                    : /\s/.test(l)
                    ? function(e) {
                        return /\s/.test(e);
                      }
                    : function(e) {
                        return !/\s/.test(e) && !re(e);
                      };
                while (n > 0 && a(r.charAt(n - 1))) --n;
                while (i < r.length && a(r.charAt(i))) ++i;
              }
              return new io(it(e.line, n), it(e.line, i));
            },
            toggleOverwrite: function(e) {
              (null != e && e == this.state.overwrite) ||
                ((this.state.overwrite = !this.state.overwrite)
                  ? E(this.display.cursorDiv, 'CodeMirror-overwrite')
                  : L(this.display.cursorDiv, 'CodeMirror-overwrite'),
                ve(this, 'overwriteToggle', this, this.state.overwrite));
            },
            hasFocus: function() {
              return this.display.input.getField() == W();
            },
            isReadOnly: function() {
              return !(!this.options.readOnly && !this.doc.cantEdit);
            },
            scrollTo: Wi(function(e, t) {
              ai(this, e, t);
            }),
            getScrollInfo: function() {
              var e = this.display.scroller;
              return {
                left: e.scrollLeft,
                top: e.scrollTop,
                height: e.scrollHeight - Kr(this) - this.display.barHeight,
                width: e.scrollWidth - Kr(this) - this.display.barWidth,
                clientHeight: Xr(this),
                clientWidth: qr(this),
              };
            },
            scrollIntoView: Wi(function(e, t) {
              null == e
                ? ((e = { from: this.doc.sel.primary().head, to: null }),
                  null == t && (t = this.options.cursorScrollMargin))
                : 'number' == typeof e
                ? (e = { from: it(e, 0), to: null })
                : null == e.from && (e = { from: e, to: null }),
                e.to || (e.to = e.from),
                (e.margin = t || 0),
                null != e.from.line ? si(this, e) : ui(this, e.from, e.to, e.margin);
            }),
            setSize: Wi(function(e, t) {
              var r = this,
                n = function(e) {
                  return 'number' == typeof e || /^\d+$/.test(String(e)) ? e + 'px' : e;
                };
              null != e && (this.display.wrapper.style.width = n(e)),
                null != t && (this.display.wrapper.style.height = n(t)),
                this.options.lineWrapping && un(this);
              var i = this.display.viewFrom;
              this.doc.iter(i, this.display.viewTo, function(e) {
                if (e.widgets)
                  for (var t = 0; t < e.widgets.length; t++)
                    if (e.widgets[t].noHScroll) {
                      Rn(r, i, 'widget');
                      break;
                    }
                ++i;
              }),
                (this.curOp.forceUpdate = !0),
                ve(this, 'refresh', this);
            }),
            operation: function(e) {
              return Oi(this, e);
            },
            startOperation: function() {
              return xi(this);
            },
            endOperation: function() {
              return ki(this);
            },
            refresh: Wi(function() {
              var e = this.display.cachedTextHeight;
              Fn(this),
                (this.curOp.forceUpdate = !0),
                dn(this),
                ai(this, this.doc.scrollLeft, this.doc.scrollTop),
                Vi(this.display),
                (null == e || Math.abs(e - Nn(this.display)) > 0.5 || this.options.lineWrapping) &&
                  En(this),
                ve(this, 'refresh', this);
            }),
            swapDoc: Wi(function(e) {
              var t = this.doc;
              return (
                (t.cm = null),
                this.state.selectingText && this.state.selectingText(),
                yo(this, e),
                dn(this),
                this.display.input.reset(),
                ai(this, e.scrollLeft, e.scrollTop),
                (this.curOp.forceScroll = !0),
                Tr(this, 'swapDoc', this, t),
                t
              );
            }),
            phrase: function(e) {
              var t = this.options.phrases;
              return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
            },
            getInputField: function() {
              return this.display.input.getField();
            },
            getWrapperElement: function() {
              return this.display.wrapper;
            },
            getScrollerElement: function() {
              return this.display.scroller;
            },
            getGutterElement: function() {
              return this.display.gutters;
            },
          }),
            Ce(e),
            (e.registerHelper = function(t, n, i) {
              r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }), (r[t][n] = i);
            }),
            (e.registerGlobalHelper = function(t, n, i, o) {
              e.registerHelper(t, n, o), r[t]._global.push({ pred: i, val: o });
            });
        }
        function Ya(e, t, r, n, i) {
          var o = t,
            l = r,
            a = $e(e, t.line),
            s = i && 'rtl' == e.direction ? -r : r;
          function c() {
            var r = t.line + s;
            return (
              !(r < e.first || r >= e.first + e.size) &&
              ((t = new it(r, t.ch, t.sticky)), (a = $e(e, r)))
            );
          }
          function u(o) {
            var l;
            if ('codepoint' == n) {
              var u = a.text.charCodeAt(t.ch + (r > 0 ? 0 : -1));
              if (isNaN(u)) l = null;
              else {
                var d = r > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
                l = new it(
                  t.line,
                  Math.max(0, Math.min(a.text.length, t.ch + r * (d ? 2 : 1))),
                  -r
                );
              }
            } else l = i ? Yl(e.cm, a, t, r) : ql(a, t, r);
            if (null == l) {
              if (o || !c()) return !1;
              t = Xl(i, e.cm, a, t.line, s);
            } else t = l;
            return !0;
          }
          if ('char' == n || 'codepoint' == n) u();
          else if ('column' == n) u(!0);
          else if ('word' == n || 'group' == n)
            for (
              var d = null, h = 'group' == n, f = e.cm && e.cm.getHelper(t, 'wordChars'), p = !0;
              ;
              p = !1
            ) {
              if (r < 0 && !u(!p)) break;
              var g = a.text.charAt(t.ch) || '\n',
                m = re(g, f) ? 'w' : h && '\n' == g ? 'n' : !h || /\s/.test(g) ? null : 'p';
              if ((!h || p || m || (m = 's'), d && d != m)) {
                r < 0 && ((r = 1), u(), (t.sticky = 'after'));
                break;
              }
              if ((m && (d = m), r > 0 && !u(!p))) break;
            }
          var v = qo(e, t, o, l, !0);
          return lt(o, v) && (v.hitSide = !0), v;
        }
        function $a(e, t, r, n) {
          var i,
            o,
            l = e.doc,
            a = t.left;
          if ('page' == n) {
            var s = Math.min(
                e.display.wrapper.clientHeight,
                window.innerHeight || document.documentElement.clientHeight
              ),
              c = Math.max(s - 0.5 * Nn(e.display), 3);
            i = (r > 0 ? t.bottom : t.top) + r * c;
          } else 'line' == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);
          for (;;) {
            if (((o = Cn(e, a, i)), !o.outside)) break;
            if (r < 0 ? i <= 0 : i >= l.height) {
              o.hitSide = !0;
              break;
            }
            i += 5 * r;
          }
          return o;
        }
        var Za = function(e) {
          (this.cm = e),
            (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null),
            (this.polling = new z()),
            (this.composing = null),
            (this.gracePeriod = !1),
            (this.readDOMTimeout = null);
        };
        function Ja(e, t) {
          var r = Qr(e, t.line);
          if (!r || r.hidden) return null;
          var n = $e(e.doc, t.line),
            i = $r(r, n, t.line),
            o = he(n, e.doc.direction),
            l = 'left';
          if (o) {
            var a = ue(o, t.ch);
            l = a % 2 ? 'right' : 'left';
          }
          var s = on(i.map, t.ch, l);
          return (s.offset = 'right' == s.collapse ? s.end : s.start), s;
        }
        function Qa(e) {
          for (var t = e; t; t = t.parentNode)
            if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
          return !1;
        }
        function es(e, t) {
          return t && (e.bad = !0), e;
        }
        function ts(e, t, r, n, i) {
          var o = '',
            l = !1,
            a = e.doc.lineSeparator(),
            s = !1;
          function c(e) {
            return function(t) {
              return t.id == e;
            };
          }
          function u() {
            l && ((o += a), s && (o += a), (l = s = !1));
          }
          function d(e) {
            e && (u(), (o += e));
          }
          function h(t) {
            if (1 == t.nodeType) {
              var r = t.getAttribute('cm-text');
              if (r) return void d(r);
              var o,
                f = t.getAttribute('cm-marker');
              if (f) {
                var p = e.findMarks(it(n, 0), it(i + 1, 0), c(+f));
                return void (p.length && (o = p[0].find(0)) && d(Ze(e.doc, o.from, o.to).join(a)));
              }
              if ('false' == t.getAttribute('contenteditable')) return;
              var g = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
              if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
              g && u();
              for (var m = 0; m < t.childNodes.length; m++) h(t.childNodes[m]);
              /^(pre|p)$/i.test(t.nodeName) && (s = !0), g && (l = !0);
            } else 3 == t.nodeType && d(t.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
          }
          for (;;) {
            if ((h(t), t == r)) break;
            (t = t.nextSibling), (s = !1);
          }
          return o;
        }
        function rs(e, t, r) {
          var n;
          if (t == e.display.lineDiv) {
            if (((n = e.display.lineDiv.childNodes[r]), !n))
              return es(e.clipPos(it(e.display.viewTo - 1)), !0);
            (t = null), (r = 0);
          } else
            for (n = t; ; n = n.parentNode) {
              if (!n || n == e.display.lineDiv) return null;
              if (n.parentNode && n.parentNode == e.display.lineDiv) break;
            }
          for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == n) return ns(o, t, r);
          }
        }
        function ns(e, t, r) {
          var n = e.text.firstChild,
            i = !1;
          if (!t || !A(n, t)) return es(it(et(e.line), 0), !0);
          if (t == n && ((i = !0), (t = n.childNodes[r]), (r = 0), !t)) {
            var o = e.rest ? Y(e.rest) : e.line;
            return es(it(et(o), o.text.length), i);
          }
          var l = 3 == t.nodeType ? t : null,
            a = t;
          l ||
            1 != t.childNodes.length ||
            3 != t.firstChild.nodeType ||
            ((l = t.firstChild), r && (r = l.nodeValue.length));
          while (a.parentNode != n) a = a.parentNode;
          var s = e.measure,
            c = s.maps;
          function u(t, r, n) {
            for (var i = -1; i < (c ? c.length : 0); i++)
              for (var o = i < 0 ? s.map : c[i], l = 0; l < o.length; l += 3) {
                var a = o[l + 2];
                if (a == t || a == r) {
                  var u = et(i < 0 ? e.line : e.rest[i]),
                    d = o[l] + n;
                  return (n < 0 || a != t) && (d = o[l + (n ? 1 : 0)]), it(u, d);
                }
              }
          }
          var d = u(l, a, r);
          if (d) return es(d, i);
          for (var h = a.nextSibling, f = l ? l.nodeValue.length - r : 0; h; h = h.nextSibling) {
            if (((d = u(h, h.firstChild, 0)), d)) return es(it(d.line, d.ch - f), i);
            f += h.textContent.length;
          }
          for (var p = a.previousSibling, g = r; p; p = p.previousSibling) {
            if (((d = u(p, p.firstChild, -1)), d)) return es(it(d.line, d.ch + g), i);
            g += p.textContent.length;
          }
        }
        (Za.prototype.init = function(e) {
          var t = this,
            r = this,
            n = r.cm,
            i = (r.div = e.lineDiv);
          function o(e) {
            for (var t = e.target; t; t = t.parentNode) {
              if (t == i) return !0;
              if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
            }
            return !1;
          }
          function l(e) {
            if (o(e) && !ye(n, e)) {
              if (n.somethingSelected())
                Ua({ lineWise: !1, text: n.getSelections() }),
                  'cut' == e.type && n.replaceSelection('', null, 'cut');
              else {
                if (!n.options.lineWiseCopyCut) return;
                var t = Ga(n);
                Ua({ lineWise: !0, text: t.text }),
                  'cut' == e.type &&
                    n.operation(function() {
                      n.setSelections(t.ranges, 0, j), n.replaceSelection('', null, 'cut');
                    });
              }
              if (e.clipboardData) {
                e.clipboardData.clearData();
                var l = Ba.text.join('\n');
                if ((e.clipboardData.setData('Text', l), e.clipboardData.getData('Text') == l))
                  return void e.preventDefault();
              }
              var a = qa(),
                s = a.firstChild;
              n.display.lineSpace.insertBefore(a, n.display.lineSpace.firstChild),
                (s.value = Ba.text.join('\n'));
              var c = W();
              P(s),
                setTimeout(function() {
                  n.display.lineSpace.removeChild(a), c.focus(), c == i && r.showPrimarySelection();
                }, 50);
            }
          }
          (i.contentEditable = !0),
            Ka(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize),
            pe(i, 'paste', function(e) {
              !o(e) ||
                ye(n, e) ||
                ja(e, n) ||
                (a <= 11 &&
                  setTimeout(
                    Ai(n, function() {
                      return t.updateFromDOM();
                    }),
                    20
                  ));
            }),
            pe(i, 'compositionstart', function(e) {
              t.composing = { data: e.data, done: !1 };
            }),
            pe(i, 'compositionupdate', function(e) {
              t.composing || (t.composing = { data: e.data, done: !1 });
            }),
            pe(i, 'compositionend', function(e) {
              t.composing &&
                (e.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
            }),
            pe(i, 'touchstart', function() {
              return r.forceCompositionEnd();
            }),
            pe(i, 'input', function() {
              t.composing || t.readFromDOMSoon();
            }),
            pe(i, 'copy', l),
            pe(i, 'cut', l);
        }),
          (Za.prototype.screenReaderLabelChanged = function(e) {
            e ? this.div.setAttribute('aria-label', e) : this.div.removeAttribute('aria-label');
          }),
          (Za.prototype.prepareSelection = function() {
            var e = jn(this.cm, !1);
            return (e.focus = W() == this.div), e;
          }),
          (Za.prototype.showSelection = function(e, t) {
            e &&
              this.cm.display.view.length &&
              ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
          }),
          (Za.prototype.getSelection = function() {
            return this.cm.display.wrapper.ownerDocument.getSelection();
          }),
          (Za.prototype.showPrimarySelection = function() {
            var e = this.getSelection(),
              t = this.cm,
              n = t.doc.sel.primary(),
              i = n.from(),
              o = n.to();
            if (
              t.display.viewTo == t.display.viewFrom ||
              i.line >= t.display.viewTo ||
              o.line < t.display.viewFrom
            )
              e.removeAllRanges();
            else {
              var l = rs(t, e.anchorNode, e.anchorOffset),
                a = rs(t, e.focusNode, e.focusOffset);
              if (!l || l.bad || !a || a.bad || 0 != ot(ct(l, a), i) || 0 != ot(st(l, a), o)) {
                var s = t.display.view,
                  c = (i.line >= t.display.viewFrom && Ja(t, i)) || {
                    node: s[0].measure.map[2],
                    offset: 0,
                  },
                  u = o.line < t.display.viewTo && Ja(t, o);
                if (!u) {
                  var d = s[s.length - 1].measure,
                    h = d.maps ? d.maps[d.maps.length - 1] : d.map;
                  u = { node: h[h.length - 1], offset: h[h.length - 2] - h[h.length - 3] };
                }
                if (c && u) {
                  var f,
                    p = e.rangeCount && e.getRangeAt(0);
                  try {
                    f = M(c.node, c.offset, u.offset, u.node);
                  } catch (e) {}
                  f &&
                    (!r && t.state.focused
                      ? (e.collapse(c.node, c.offset),
                        f.collapsed || (e.removeAllRanges(), e.addRange(f)))
                      : (e.removeAllRanges(), e.addRange(f)),
                    p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()),
                    this.rememberSelection();
                } else e.removeAllRanges();
              }
            }
          }),
          (Za.prototype.startGracePeriod = function() {
            var e = this;
            clearTimeout(this.gracePeriod),
              (this.gracePeriod = setTimeout(function() {
                (e.gracePeriod = !1),
                  e.selectionChanged() &&
                    e.cm.operation(function() {
                      return (e.cm.curOp.selectionChanged = !0);
                    });
              }, 20));
          }),
          (Za.prototype.showMultipleSelections = function(e) {
            N(this.cm.display.cursorDiv, e.cursors), N(this.cm.display.selectionDiv, e.selection);
          }),
          (Za.prototype.rememberSelection = function() {
            var e = this.getSelection();
            (this.lastAnchorNode = e.anchorNode),
              (this.lastAnchorOffset = e.anchorOffset),
              (this.lastFocusNode = e.focusNode),
              (this.lastFocusOffset = e.focusOffset);
          }),
          (Za.prototype.selectionInEditor = function() {
            var e = this.getSelection();
            if (!e.rangeCount) return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return A(this.div, t);
          }),
          (Za.prototype.focus = function() {
            'nocursor' != this.cm.options.readOnly &&
              ((this.selectionInEditor() && W() == this.div) ||
                this.showSelection(this.prepareSelection(), !0),
              this.div.focus());
          }),
          (Za.prototype.blur = function() {
            this.div.blur();
          }),
          (Za.prototype.getField = function() {
            return this.div;
          }),
          (Za.prototype.supportsTouch = function() {
            return !0;
          }),
          (Za.prototype.receivedFocus = function() {
            var e = this,
              t = this;
            function r() {
              t.cm.state.focused &&
                (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, r));
            }
            this.selectionInEditor()
              ? setTimeout(function() {
                  return e.pollSelection();
                }, 20)
              : Oi(this.cm, function() {
                  return (t.cm.curOp.selectionChanged = !0);
                }),
              this.polling.set(this.cm.options.pollInterval, r);
          }),
          (Za.prototype.selectionChanged = function() {
            var e = this.getSelection();
            return (
              e.anchorNode != this.lastAnchorNode ||
              e.anchorOffset != this.lastAnchorOffset ||
              e.focusNode != this.lastFocusNode ||
              e.focusOffset != this.lastFocusOffset
            );
          }),
          (Za.prototype.pollSelection = function() {
            if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
              var e = this.getSelection(),
                t = this.cm;
              if (m && u && this.cm.display.gutterSpecs.length && Qa(e.anchorNode))
                return (
                  this.cm.triggerOnKeyDown({
                    type: 'keydown',
                    keyCode: 8,
                    preventDefault: Math.abs,
                  }),
                  this.blur(),
                  void this.focus()
                );
              if (!this.composing) {
                this.rememberSelection();
                var r = rs(t, e.anchorNode, e.anchorOffset),
                  n = rs(t, e.focusNode, e.focusOffset);
                r &&
                  n &&
                  Oi(t, function() {
                    Uo(t.doc, lo(r, n), j), (r.bad || n.bad) && (t.curOp.selectionChanged = !0);
                  });
              }
            }
          }),
          (Za.prototype.pollContent = function() {
            null != this.readDOMTimeout &&
              (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
            var e,
              t,
              r,
              n = this.cm,
              i = n.display,
              o = n.doc.sel.primary(),
              l = o.from(),
              a = o.to();
            if (
              (0 == l.ch &&
                l.line > n.firstLine() &&
                (l = it(l.line - 1, $e(n.doc, l.line - 1).length)),
              a.ch == $e(n.doc, a.line).text.length &&
                a.line < n.lastLine() &&
                (a = it(a.line + 1, 0)),
              l.line < i.viewFrom || a.line > i.viewTo - 1)
            )
              return !1;
            l.line == i.viewFrom || 0 == (e = Pn(n, l.line))
              ? ((t = et(i.view[0].line)), (r = i.view[0].node))
              : ((t = et(i.view[e].line)), (r = i.view[e - 1].node.nextSibling));
            var s,
              c,
              u = Pn(n, a.line);
            if (
              (u == i.view.length - 1
                ? ((s = i.viewTo - 1), (c = i.lineDiv.lastChild))
                : ((s = et(i.view[u + 1].line) - 1), (c = i.view[u + 1].node.previousSibling)),
              !r)
            )
              return !1;
            var d = n.doc.splitLines(ts(n, r, c, t, s)),
              h = Ze(n.doc, it(t, 0), it(s, $e(n.doc, s).text.length));
            while (d.length > 1 && h.length > 1)
              if (Y(d) == Y(h)) d.pop(), h.pop(), s--;
              else {
                if (d[0] != h[0]) break;
                d.shift(), h.shift(), t++;
              }
            var f = 0,
              p = 0,
              g = d[0],
              m = h[0],
              v = Math.min(g.length, m.length);
            while (f < v && g.charCodeAt(f) == m.charCodeAt(f)) ++f;
            var y = Y(d),
              b = Y(h),
              w = Math.min(y.length - (1 == d.length ? f : 0), b.length - (1 == h.length ? f : 0));
            while (p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)) ++p;
            if (1 == d.length && 1 == h.length && t == l.line)
              while (
                f &&
                f > l.ch &&
                y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1)
              )
                f--, p++;
            (d[d.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, '')),
              (d[0] = d[0].slice(f).replace(/\u200b+$/, ''));
            var C = it(t, f),
              x = it(s, h.length ? Y(h).length - p : 0);
            return d.length > 1 || d[0] || ot(C, x) ? (nl(n.doc, d, C, x, '+input'), !0) : void 0;
          }),
          (Za.prototype.ensurePolled = function() {
            this.forceCompositionEnd();
          }),
          (Za.prototype.reset = function() {
            this.forceCompositionEnd();
          }),
          (Za.prototype.forceCompositionEnd = function() {
            this.composing &&
              (clearTimeout(this.readDOMTimeout),
              (this.composing = null),
              this.updateFromDOM(),
              this.div.blur(),
              this.div.focus());
          }),
          (Za.prototype.readFromDOMSoon = function() {
            var e = this;
            null == this.readDOMTimeout &&
              (this.readDOMTimeout = setTimeout(function() {
                if (((e.readDOMTimeout = null), e.composing)) {
                  if (!e.composing.done) return;
                  e.composing = null;
                }
                e.updateFromDOM();
              }, 80));
          }),
          (Za.prototype.updateFromDOM = function() {
            var e = this;
            (!this.cm.isReadOnly() && this.pollContent()) ||
              Oi(this.cm, function() {
                return Fn(e.cm);
              });
          }),
          (Za.prototype.setUneditable = function(e) {
            e.contentEditable = 'false';
          }),
          (Za.prototype.onKeyPress = function(e) {
            0 == e.charCode ||
              this.composing ||
              (e.preventDefault(),
              this.cm.isReadOnly() ||
                Ai(this.cm, _a)(
                  this.cm,
                  String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode),
                  0
                ));
          }),
          (Za.prototype.readOnlyChanged = function(e) {
            this.div.contentEditable = String('nocursor' != e);
          }),
          (Za.prototype.onContextMenu = function() {}),
          (Za.prototype.resetPosition = function() {}),
          (Za.prototype.needsContentAttribute = !0);
        var is = function(e) {
          (this.cm = e),
            (this.prevInput = ''),
            (this.pollingFast = !1),
            (this.polling = new z()),
            (this.hasSelection = !1),
            (this.composing = null);
        };
        function os(e, t) {
          if (
            ((t = t ? R(t) : {}),
            (t.value = e.value),
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus)
          ) {
            var r = W();
            t.autofocus = r == e || (null != e.getAttribute('autofocus') && r == document.body);
          }
          function n() {
            e.value = a.getValue();
          }
          var i;
          if (e.form && (pe(e.form, 'submit', n), !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;
            try {
              var l = (o.submit = function() {
                n(), (o.submit = i), o.submit(), (o.submit = l);
              });
            } catch (e) {}
          }
          (t.finishInit = function(r) {
            (r.save = n),
              (r.getTextArea = function() {
                return e;
              }),
              (r.toTextArea = function() {
                (r.toTextArea = isNaN),
                  n(),
                  e.parentNode.removeChild(r.getWrapperElement()),
                  (e.style.display = ''),
                  e.form &&
                    (me(e.form, 'submit', n),
                    t.leaveSubmitMethodAlone ||
                      'function' != typeof e.form.submit ||
                      (e.form.submit = i));
              });
          }),
            (e.style.display = 'none');
          var a = Fa(function(t) {
            return e.parentNode.insertBefore(t, e.nextSibling);
          }, t);
          return a;
        }
        function ls(e) {
          (e.off = me),
            (e.on = pe),
            (e.wheelEventPixels = to),
            (e.Doc = xl),
            (e.splitLines = Ee),
            (e.countColumn = I),
            (e.findColumn = K),
            (e.isWordChar = te),
            (e.Pass = _),
            (e.signal = ve),
            (e.Line = ar),
            (e.changeEnd = ao),
            (e.scrollbarModel = bi),
            (e.Pos = it),
            (e.cmpPos = ot),
            (e.modes = Ie),
            (e.mimeModes = ze),
            (e.resolveMode = _e),
            (e.getMode = je),
            (e.modeExtensions = Ve),
            (e.extendMode = Ge),
            (e.copyState = Ke),
            (e.startState = Xe),
            (e.innerMode = qe),
            (e.commands = $l),
            (e.keyMap = Rl),
            (e.keyName = jl),
            (e.isModifierKey = Ul),
            (e.lookupKey = Bl),
            (e.normalizeKeyMap = zl),
            (e.StringStream = Ye),
            (e.SharedTextMarker = ml),
            (e.TextMarker = pl),
            (e.LineWidget = ul),
            (e.e_preventDefault = xe),
            (e.e_stopPropagation = ke),
            (e.e_stop = Me),
            (e.addClass = E),
            (e.contains = A),
            (e.rmClass = L),
            (e.keyNames = El);
        }
        (is.prototype.init = function(e) {
          var t = this,
            r = this,
            n = this.cm;
          this.createField(e);
          var i = this.textarea;
          function o(e) {
            if (!ye(n, e)) {
              if (n.somethingSelected()) Ua({ lineWise: !1, text: n.getSelections() });
              else {
                if (!n.options.lineWiseCopyCut) return;
                var t = Ga(n);
                Ua({ lineWise: !0, text: t.text }),
                  'cut' == e.type
                    ? n.setSelections(t.ranges, null, j)
                    : ((r.prevInput = ''), (i.value = t.text.join('\n')), P(i));
              }
              'cut' == e.type && (n.state.cutIncoming = +new Date());
            }
          }
          e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
            g && (i.style.width = '0px'),
            pe(i, 'input', function() {
              l && a >= 9 && t.hasSelection && (t.hasSelection = null), r.poll();
            }),
            pe(i, 'paste', function(e) {
              ye(n, e) || ja(e, n) || ((n.state.pasteIncoming = +new Date()), r.fastPoll());
            }),
            pe(i, 'cut', o),
            pe(i, 'copy', o),
            pe(e.scroller, 'paste', function(t) {
              if (!_r(e, t) && !ye(n, t)) {
                if (!i.dispatchEvent) return (n.state.pasteIncoming = +new Date()), void r.focus();
                var o = new Event('paste');
                (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
              }
            }),
            pe(e.lineSpace, 'selectstart', function(t) {
              _r(e, t) || xe(t);
            }),
            pe(i, 'compositionstart', function() {
              var e = n.getCursor('from');
              r.composing && r.composing.range.clear(),
                (r.composing = {
                  start: e,
                  range: n.markText(e, n.getCursor('to'), { className: 'CodeMirror-composing' }),
                });
            }),
            pe(i, 'compositionend', function() {
              r.composing && (r.poll(), r.composing.range.clear(), (r.composing = null));
            });
        }),
          (is.prototype.createField = function(e) {
            (this.wrapper = qa()), (this.textarea = this.wrapper.firstChild);
          }),
          (is.prototype.screenReaderLabelChanged = function(e) {
            e
              ? this.textarea.setAttribute('aria-label', e)
              : this.textarea.removeAttribute('aria-label');
          }),
          (is.prototype.prepareSelection = function() {
            var e = this.cm,
              t = e.display,
              r = e.doc,
              n = jn(e);
            if (e.options.moveInputWithCursor) {
              var i = yn(e, r.sel.primary().head, 'div'),
                o = t.wrapper.getBoundingClientRect(),
                l = t.lineDiv.getBoundingClientRect();
              (n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top))),
                (n.teLeft = Math.max(
                  0,
                  Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)
                ));
            }
            return n;
          }),
          (is.prototype.showSelection = function(e) {
            var t = this.cm,
              r = t.display;
            N(r.cursorDiv, e.cursors),
              N(r.selectionDiv, e.selection),
              null != e.teTop &&
                ((this.wrapper.style.top = e.teTop + 'px'),
                (this.wrapper.style.left = e.teLeft + 'px'));
          }),
          (is.prototype.reset = function(e) {
            if (!this.contextMenuPending && !this.composing) {
              var t = this.cm;
              if (t.somethingSelected()) {
                this.prevInput = '';
                var r = t.getSelection();
                (this.textarea.value = r),
                  t.state.focused && P(this.textarea),
                  l && a >= 9 && (this.hasSelection = r);
              } else
                e ||
                  ((this.prevInput = this.textarea.value = ''),
                  l && a >= 9 && (this.hasSelection = null));
            }
          }),
          (is.prototype.getField = function() {
            return this.textarea;
          }),
          (is.prototype.supportsTouch = function() {
            return !1;
          }),
          (is.prototype.focus = function() {
            if ('nocursor' != this.cm.options.readOnly && (!v || W() != this.textarea))
              try {
                this.textarea.focus();
              } catch (e) {}
          }),
          (is.prototype.blur = function() {
            this.textarea.blur();
          }),
          (is.prototype.resetPosition = function() {
            this.wrapper.style.top = this.wrapper.style.left = 0;
          }),
          (is.prototype.receivedFocus = function() {
            this.slowPoll();
          }),
          (is.prototype.slowPoll = function() {
            var e = this;
            this.pollingFast ||
              this.polling.set(this.cm.options.pollInterval, function() {
                e.poll(), e.cm.state.focused && e.slowPoll();
              });
          }),
          (is.prototype.fastPoll = function() {
            var e = !1,
              t = this;
            function r() {
              var n = t.poll();
              n || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, r));
            }
            (t.pollingFast = !0), t.polling.set(20, r);
          }),
          (is.prototype.poll = function() {
            var e = this,
              t = this.cm,
              r = this.textarea,
              n = this.prevInput;
            if (
              this.contextMenuPending ||
              !t.state.focused ||
              (He(r) && !n && !this.composing) ||
              t.isReadOnly() ||
              t.options.disableInput ||
              t.state.keySeq
            )
              return !1;
            var i = r.value;
            if (i == n && !t.somethingSelected()) return !1;
            if ((l && a >= 9 && this.hasSelection === i) || (y && /[\uf700-\uf7ff]/.test(i)))
              return t.display.input.reset(), !1;
            if (t.doc.sel == t.display.selForContextMenu) {
              var o = i.charCodeAt(0);
              if ((8203 != o || n || (n = '\u200b'), 8666 == o))
                return this.reset(), this.cm.execCommand('undo');
            }
            var s = 0,
              c = Math.min(n.length, i.length);
            while (s < c && n.charCodeAt(s) == i.charCodeAt(s)) ++s;
            return (
              Oi(t, function() {
                _a(t, i.slice(s), n.length - s, null, e.composing ? '*compose' : null),
                  i.length > 1e3 || i.indexOf('\n') > -1
                    ? (r.value = e.prevInput = '')
                    : (e.prevInput = i),
                  e.composing &&
                    (e.composing.range.clear(),
                    (e.composing.range = t.markText(e.composing.start, t.getCursor('to'), {
                      className: 'CodeMirror-composing',
                    })));
              }),
              !0
            );
          }),
          (is.prototype.ensurePolled = function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1);
          }),
          (is.prototype.onKeyPress = function() {
            l && a >= 9 && (this.hasSelection = null), this.fastPoll();
          }),
          (is.prototype.onContextMenu = function(e) {
            var t = this,
              r = t.cm,
              n = r.display,
              i = t.textarea;
            t.contextMenuPending && t.contextMenuPending();
            var o = Hn(r, e),
              c = n.scroller.scrollTop;
            if (o && !d) {
              var u = r.options.resetSelectionOnContextMenu;
              u && -1 == r.doc.sel.contains(o) && Ai(r, Uo)(r.doc, lo(o), j);
              var h,
                f = i.style.cssText,
                p = t.wrapper.style.cssText,
                g = t.wrapper.offsetParent.getBoundingClientRect();
              if (
                ((t.wrapper.style.cssText = 'position: static'),
                (i.style.cssText =
                  'position: absolute; width: 30px; height: 30px;\n      top: ' +
                  (e.clientY - g.top - 5) +
                  'px; left: ' +
                  (e.clientX - g.left - 5) +
                  'px;\n      z-index: 1000; background: ' +
                  (l ? 'rgba(255, 255, 255, .05)' : 'transparent') +
                  ';\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);'),
                s && (h = window.scrollY),
                n.input.focus(),
                s && window.scrollTo(null, h),
                n.input.reset(),
                r.somethingSelected() || (i.value = t.prevInput = ' '),
                (t.contextMenuPending = y),
                (n.selForContextMenu = r.doc.sel),
                clearTimeout(n.detectingSelectAll),
                l && a >= 9 && v(),
                k)
              ) {
                Me(e);
                var m = function() {
                  me(window, 'mouseup', m), setTimeout(y, 20);
                };
                pe(window, 'mouseup', m);
              } else setTimeout(y, 50);
            }
            function v() {
              if (null != i.selectionStart) {
                var e = r.somethingSelected(),
                  o = '\u200b' + (e ? i.value : '');
                (i.value = '\u21da'),
                  (i.value = o),
                  (t.prevInput = e ? '' : '\u200b'),
                  (i.selectionStart = 1),
                  (i.selectionEnd = o.length),
                  (n.selForContextMenu = r.doc.sel);
              }
            }
            function y() {
              if (
                t.contextMenuPending == y &&
                ((t.contextMenuPending = !1),
                (t.wrapper.style.cssText = p),
                (i.style.cssText = f),
                l && a < 9 && n.scrollbars.setScrollTop((n.scroller.scrollTop = c)),
                null != i.selectionStart)
              ) {
                (!l || (l && a < 9)) && v();
                var e = 0,
                  o = function() {
                    n.selForContextMenu == r.doc.sel &&
                    0 == i.selectionStart &&
                    i.selectionEnd > 0 &&
                    '\u200b' == t.prevInput
                      ? Ai(r, Yo)(r)
                      : e++ < 10
                      ? (n.detectingSelectAll = setTimeout(o, 500))
                      : ((n.selForContextMenu = null), n.input.reset());
                  };
                n.detectingSelectAll = setTimeout(o, 200);
              }
            }
          }),
          (is.prototype.readOnlyChanged = function(e) {
            e || this.reset(),
              (this.textarea.disabled = 'nocursor' == e),
              (this.textarea.readOnly = !!e);
          }),
          (is.prototype.setUneditable = function() {}),
          (is.prototype.needsContentAttribute = !1),
          Ea(Fa),
          Xa(Fa);
        var as = 'iter insert remove copy getEditor constructor'.split(' ');
        for (var ss in xl.prototype)
          xl.prototype.hasOwnProperty(ss) &&
            B(as, ss) < 0 &&
            (Fa.prototype[ss] = (function(e) {
              return function() {
                return e.apply(this.doc, arguments);
              };
            })(xl.prototype[ss]));
        return (
          Ce(xl),
          (Fa.inputStyles = { textarea: is, contenteditable: Za }),
          (Fa.defineMode = function(e) {
            Fa.defaults.mode || 'null' == e || (Fa.defaults.mode = e), Be.apply(this, arguments);
          }),
          (Fa.defineMIME = Ue),
          Fa.defineMode('null', function() {
            return {
              token: function(e) {
                return e.skipToEnd();
              },
            };
          }),
          Fa.defineMIME('text/plain', 'null'),
          (Fa.defineExtension = function(e, t) {
            Fa.prototype[e] = t;
          }),
          (Fa.defineDocExtension = function(e, t) {
            xl.prototype[e] = t;
          }),
          (Fa.fromTextArea = os),
          ls(Fa),
          (Fa.version = '5.65.2'),
          Fa
        );
      });
    },
    a2PE: function(e, t, r) {
      'use strict';
      (function(e) {
        function n() {
          return (
            (n =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
            n.apply(this, arguments)
          );
        }
        function i(e) {
          '@babel/helpers - typeof';
          return (
            (i =
              'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      'function' === typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            i(e)
          );
        }
        var o = (function() {
          var e = function(t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function(t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r ? Object.create(r) : ((n.prototype = r.prototype), new n()));
          };
        })();
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.UnControlled = t.Controlled = void 0);
        var l,
          a = r('q1tI'),
          s = 'undefined' === typeof navigator || !0 === e['PREVENT_CODEMIRROR_RENDER'];
        s || (l = r('VrN/'));
        var c = (function() {
            function e() {}
            return (
              (e.equals = function(e, t) {
                var r = this,
                  n = Object.keys,
                  o = i(e),
                  l = i(t);
                return e && t && 'object' === o && o === l
                  ? n(e).length === n(t).length &&
                      n(e).every(function(n) {
                        return r.equals(e[n], t[n]);
                      })
                  : e === t;
              }),
              e
            );
          })(),
          u = (function() {
            function e(e, t) {
              (this.editor = e), (this.props = t);
            }
            return (
              (e.prototype.delegateCursor = function(e, t, r) {
                var n = this.editor.getDoc();
                r && this.editor.focus(), t ? n.setCursor(e) : n.setCursor(e, null, { scroll: !1 });
              }),
              (e.prototype.delegateScroll = function(e) {
                this.editor.scrollTo(e.x, e.y);
              }),
              (e.prototype.delegateSelection = function(e, t) {
                var r = this.editor.getDoc();
                r.setSelections(e), t && this.editor.focus();
              }),
              (e.prototype.apply = function(e) {
                e &&
                  e.selection &&
                  e.selection.ranges &&
                  this.delegateSelection(e.selection.ranges, e.selection.focus || !1),
                  e &&
                    e.cursor &&
                    this.delegateCursor(
                      e.cursor,
                      e.autoScroll || !1,
                      this.editor.getOption('autofocus') || !1
                    ),
                  e && e.scroll && this.delegateScroll(e.scroll);
              }),
              (e.prototype.applyNext = function(e, t, r) {
                e &&
                  e.selection &&
                  e.selection.ranges &&
                  t &&
                  t.selection &&
                  t.selection.ranges &&
                  !c.equals(e.selection.ranges, t.selection.ranges) &&
                  this.delegateSelection(t.selection.ranges, t.selection.focus || !1),
                  e &&
                    e.cursor &&
                    t &&
                    t.cursor &&
                    !c.equals(e.cursor, t.cursor) &&
                    this.delegateCursor(
                      r.cursor || t.cursor,
                      t.autoScroll || !1,
                      t.autoCursor || !1
                    ),
                  e &&
                    e.scroll &&
                    t &&
                    t.scroll &&
                    !c.equals(e.scroll, t.scroll) &&
                    this.delegateScroll(t.scroll);
              }),
              (e.prototype.applyUserDefined = function(e, t) {
                t &&
                  t.cursor &&
                  this.delegateCursor(
                    t.cursor,
                    e.autoScroll || !1,
                    this.editor.getOption('autofocus') || !1
                  );
              }),
              (e.prototype.wire = function(e) {
                var t = this;
                Object.keys(e || {})
                  .filter(function(e) {
                    return /^on/.test(e);
                  })
                  .forEach(function(e) {
                    switch (e) {
                      case 'onBlur':
                        t.editor.on('blur', function(e, r) {
                          t.props.onBlur(t.editor, r);
                        });
                        break;
                      case 'onContextMenu':
                        t.editor.on('contextmenu', function(e, r) {
                          t.props.onContextMenu(t.editor, r);
                        });
                        break;
                      case 'onCopy':
                        t.editor.on('copy', function(e, r) {
                          t.props.onCopy(t.editor, r);
                        });
                        break;
                      case 'onCursor':
                        t.editor.on('cursorActivity', function(e) {
                          t.props.onCursor(t.editor, t.editor.getDoc().getCursor());
                        });
                        break;
                      case 'onCursorActivity':
                        t.editor.on('cursorActivity', function(e) {
                          t.props.onCursorActivity(t.editor);
                        });
                        break;
                      case 'onCut':
                        t.editor.on('cut', function(e, r) {
                          t.props.onCut(t.editor, r);
                        });
                        break;
                      case 'onDblClick':
                        t.editor.on('dblclick', function(e, r) {
                          t.props.onDblClick(t.editor, r);
                        });
                        break;
                      case 'onDragEnter':
                        t.editor.on('dragenter', function(e, r) {
                          t.props.onDragEnter(t.editor, r);
                        });
                        break;
                      case 'onDragLeave':
                        t.editor.on('dragleave', function(e, r) {
                          t.props.onDragLeave(t.editor, r);
                        });
                        break;
                      case 'onDragOver':
                        t.editor.on('dragover', function(e, r) {
                          t.props.onDragOver(t.editor, r);
                        });
                        break;
                      case 'onDragStart':
                        t.editor.on('dragstart', function(e, r) {
                          t.props.onDragStart(t.editor, r);
                        });
                        break;
                      case 'onDrop':
                        t.editor.on('drop', function(e, r) {
                          t.props.onDrop(t.editor, r);
                        });
                        break;
                      case 'onFocus':
                        t.editor.on('focus', function(e, r) {
                          t.props.onFocus(t.editor, r);
                        });
                        break;
                      case 'onGutterClick':
                        t.editor.on('gutterClick', function(e, r, n, i) {
                          t.props.onGutterClick(t.editor, r, n, i);
                        });
                        break;
                      case 'onInputRead':
                        t.editor.on('inputRead', function(e, r) {
                          t.props.onInputRead(t.editor, r);
                        });
                        break;
                      case 'onKeyDown':
                        t.editor.on('keydown', function(e, r) {
                          t.props.onKeyDown(t.editor, r);
                        });
                        break;
                      case 'onKeyHandled':
                        t.editor.on('keyHandled', function(e, r, n) {
                          t.props.onKeyHandled(t.editor, r, n);
                        });
                        break;
                      case 'onKeyPress':
                        t.editor.on('keypress', function(e, r) {
                          t.props.onKeyPress(t.editor, r);
                        });
                        break;
                      case 'onKeyUp':
                        t.editor.on('keyup', function(e, r) {
                          t.props.onKeyUp(t.editor, r);
                        });
                        break;
                      case 'onMouseDown':
                        t.editor.on('mousedown', function(e, r) {
                          t.props.onMouseDown(t.editor, r);
                        });
                        break;
                      case 'onPaste':
                        t.editor.on('paste', function(e, r) {
                          t.props.onPaste(t.editor, r);
                        });
                        break;
                      case 'onRenderLine':
                        t.editor.on('renderLine', function(e, r, n) {
                          t.props.onRenderLine(t.editor, r, n);
                        });
                        break;
                      case 'onScroll':
                        t.editor.on('scroll', function(e) {
                          t.props.onScroll(t.editor, t.editor.getScrollInfo());
                        });
                        break;
                      case 'onSelection':
                        t.editor.on('beforeSelectionChange', function(e, r) {
                          t.props.onSelection(t.editor, r);
                        });
                        break;
                      case 'onTouchStart':
                        t.editor.on('touchstart', function(e, r) {
                          t.props.onTouchStart(t.editor, r);
                        });
                        break;
                      case 'onUpdate':
                        t.editor.on('update', function(e) {
                          t.props.onUpdate(t.editor);
                        });
                        break;
                      case 'onViewportChange':
                        t.editor.on('viewportChange', function(e, r, n) {
                          t.props.onViewportChange(t.editor, r, n);
                        });
                        break;
                    }
                  });
              }),
              e
            );
          })(),
          d = (function(e) {
            function t(t) {
              var r = e.call(this, t) || this;
              return s
                ? r
                : ((r.applied = !1),
                  (r.appliedNext = !1),
                  (r.appliedUserDefined = !1),
                  (r.deferred = null),
                  (r.emulating = !1),
                  (r.hydrated = !1),
                  (r.initCb = function() {
                    r.props.editorDidConfigure && r.props.editorDidConfigure(r.editor);
                  }),
                  (r.mounted = !1),
                  r);
            }
            return (
              o(t, e),
              (t.prototype.hydrate = function(e) {
                var t = this,
                  r = e && e.options ? e.options : {},
                  i = n({}, l.defaults, this.editor.options, r),
                  o = Object.keys(i).some(function(e) {
                    return t.editor.getOption(e) !== i[e];
                  });
                o &&
                  Object.keys(i).forEach(function(e) {
                    r.hasOwnProperty(e) &&
                      t.editor.getOption(e) !== i[e] &&
                      (t.editor.setOption(e, i[e]), t.mirror.setOption(e, i[e]));
                  }),
                  this.hydrated ||
                    (this.deferred ? this.resolveChange(e.value) : this.initChange(e.value || '')),
                  (this.hydrated = !0);
              }),
              (t.prototype.initChange = function(e) {
                this.emulating = !0;
                var t = this.editor.getDoc(),
                  r = t.lastLine(),
                  n = t.getLine(t.lastLine()).length;
                t.replaceRange(e || '', { line: 0, ch: 0 }, { line: r, ch: n }),
                  this.mirror.setValue(e),
                  t.clearHistory(),
                  this.mirror.clearHistory(),
                  (this.emulating = !1);
              }),
              (t.prototype.resolveChange = function(e) {
                this.emulating = !0;
                var t = this.editor.getDoc();
                if (
                  ('undo' === this.deferred.origin
                    ? t.undo()
                    : 'redo' === this.deferred.origin
                    ? t.redo()
                    : t.replaceRange(
                        this.deferred.text,
                        this.deferred.from,
                        this.deferred.to,
                        this.deferred.origin
                      ),
                  e && e !== t.getValue())
                ) {
                  var r = t.getCursor();
                  t.setValue(e), t.setCursor(r);
                }
                (this.emulating = !1), (this.deferred = null);
              }),
              (t.prototype.mirrorChange = function(e) {
                var t = this.editor.getDoc();
                return (
                  'undo' === e.origin
                    ? (t.setHistory(this.mirror.getHistory()), this.mirror.undo())
                    : 'redo' === e.origin
                    ? (t.setHistory(this.mirror.getHistory()), this.mirror.redo())
                    : this.mirror.replaceRange(e.text, e.from, e.to, e.origin),
                  this.mirror.getValue()
                );
              }),
              (t.prototype.componentDidMount = function() {
                var e = this;
                s ||
                  (this.props.defineMode &&
                    this.props.defineMode.name &&
                    this.props.defineMode.fn &&
                    l.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                  (this.editor = l(this.ref, this.props.options)),
                  (this.shared = new u(this.editor, this.props)),
                  (this.mirror = l(function() {}, this.props.options)),
                  this.editor.on('electricInput', function() {
                    e.mirror.setHistory(e.editor.getDoc().getHistory());
                  }),
                  this.editor.on('cursorActivity', function() {
                    e.mirror.setCursor(e.editor.getDoc().getCursor());
                  }),
                  this.editor.on('beforeChange', function(t, r) {
                    if (!e.emulating) {
                      r.cancel(), (e.deferred = r);
                      var n = e.mirrorChange(e.deferred);
                      e.props.onBeforeChange && e.props.onBeforeChange(e.editor, e.deferred, n);
                    }
                  }),
                  this.editor.on('change', function(t, r) {
                    e.mounted &&
                      e.props.onChange &&
                      e.props.onChange(e.editor, r, e.editor.getValue());
                  }),
                  this.hydrate(this.props),
                  this.shared.apply(this.props),
                  (this.applied = !0),
                  (this.mounted = !0),
                  this.shared.wire(this.props),
                  this.editor.getOption('autofocus') && this.editor.focus(),
                  this.props.editorDidMount &&
                    this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
              }),
              (t.prototype.componentDidUpdate = function(e) {
                if (!s) {
                  var t = { cursor: null };
                  this.props.value !== e.value && (this.hydrated = !1),
                    this.props.autoCursor ||
                      void 0 === this.props.autoCursor ||
                      (t.cursor = this.editor.getDoc().getCursor()),
                    this.hydrate(this.props),
                    this.appliedNext ||
                      (this.shared.applyNext(e, this.props, t), (this.appliedNext = !0)),
                    this.shared.applyUserDefined(e, t),
                    (this.appliedUserDefined = !0);
                }
              }),
              (t.prototype.componentWillUnmount = function() {
                s || (this.props.editorWillUnmount && this.props.editorWillUnmount(l));
              }),
              (t.prototype.shouldComponentUpdate = function(e, t) {
                return !s;
              }),
              (t.prototype.render = function() {
                var e = this;
                if (s) return null;
                var t = this.props.className
                  ? 'react-codemirror2 ' + this.props.className
                  : 'react-codemirror2';
                return a.createElement('div', {
                  className: t,
                  ref: function(t) {
                    return (e.ref = t);
                  },
                });
              }),
              t
            );
          })(a.Component);
        t.Controlled = d;
        var h = (function(e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return s
              ? r
              : ((r.applied = !1),
                (r.appliedUserDefined = !1),
                (r.continueChange = !1),
                (r.detached = !1),
                (r.hydrated = !1),
                (r.initCb = function() {
                  r.props.editorDidConfigure && r.props.editorDidConfigure(r.editor);
                }),
                (r.mounted = !1),
                (r.onBeforeChangeCb = function() {
                  r.continueChange = !0;
                }),
                r);
          }
          return (
            o(t, e),
            (t.prototype.hydrate = function(e) {
              var t = this,
                r = e && e.options ? e.options : {},
                i = n({}, l.defaults, this.editor.options, r),
                o = Object.keys(i).some(function(e) {
                  return t.editor.getOption(e) !== i[e];
                });
              if (
                (o &&
                  Object.keys(i).forEach(function(e) {
                    r.hasOwnProperty(e) &&
                      t.editor.getOption(e) !== i[e] &&
                      t.editor.setOption(e, i[e]);
                  }),
                !this.hydrated)
              ) {
                var a = this.editor.getDoc(),
                  s = a.lastLine(),
                  c = a.getLine(a.lastLine()).length;
                a.replaceRange(e.value || '', { line: 0, ch: 0 }, { line: s, ch: c });
              }
              this.hydrated = !0;
            }),
            (t.prototype.componentDidMount = function() {
              var e = this;
              s ||
                ((this.detached = !0 === this.props.detach),
                this.props.defineMode &&
                  this.props.defineMode.name &&
                  this.props.defineMode.fn &&
                  l.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                (this.editor = l(this.ref, this.props.options)),
                (this.shared = new u(this.editor, this.props)),
                this.editor.on('beforeChange', function(t, r) {
                  e.props.onBeforeChange &&
                    e.props.onBeforeChange(e.editor, r, e.editor.getValue(), e.onBeforeChangeCb);
                }),
                this.editor.on('change', function(t, r) {
                  e.mounted &&
                    e.props.onChange &&
                    (e.props.onBeforeChange
                      ? e.continueChange && e.props.onChange(e.editor, r, e.editor.getValue())
                      : e.props.onChange(e.editor, r, e.editor.getValue()));
                }),
                this.hydrate(this.props),
                this.shared.apply(this.props),
                (this.applied = !0),
                (this.mounted = !0),
                this.shared.wire(this.props),
                this.editor.getDoc().clearHistory(),
                this.props.editorDidMount &&
                  this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
            }),
            (t.prototype.componentDidUpdate = function(e) {
              if (
                (this.detached &&
                  !1 === this.props.detach &&
                  ((this.detached = !1), e.editorDidAttach && e.editorDidAttach(this.editor)),
                this.detached ||
                  !0 !== this.props.detach ||
                  ((this.detached = !0), e.editorDidDetach && e.editorDidDetach(this.editor)),
                !s && !this.detached)
              ) {
                var t = { cursor: null };
                this.props.value !== e.value &&
                  ((this.hydrated = !1), (this.applied = !1), (this.appliedUserDefined = !1)),
                  e.autoCursor ||
                    void 0 === e.autoCursor ||
                    (t.cursor = this.editor.getDoc().getCursor()),
                  this.hydrate(this.props),
                  this.applied || (this.shared.apply(e), (this.applied = !0)),
                  this.appliedUserDefined ||
                    (this.shared.applyUserDefined(e, t), (this.appliedUserDefined = !0));
              }
            }),
            (t.prototype.componentWillUnmount = function() {
              s || (this.props.editorWillUnmount && this.props.editorWillUnmount(l));
            }),
            (t.prototype.shouldComponentUpdate = function(e, t) {
              var r = !0;
              return s && (r = !1), this.detached && e.detach && (r = !1), r;
            }),
            (t.prototype.render = function() {
              var e = this;
              if (s) return null;
              var t = this.props.className
                ? 'react-codemirror2 ' + this.props.className
                : 'react-codemirror2';
              return a.createElement('div', {
                className: t,
                ref: function(t) {
                  return (e.ref = t);
                },
              });
            }),
            t
          );
        })(a.Component);
        t.UnControlled = h;
      }.call(this, r('yLpj')));
    },
    'p77/': function(e, t, r) {
      e.exports = {
        CodeMirror: 'CodeMirror',
        'CodeMirror-lines': 'CodeMirror-lines',
        'CodeMirror-line': 'CodeMirror-line',
        'CodeMirror-line-like': 'CodeMirror-line-like',
        'CodeMirror-gutter-filler': 'CodeMirror-gutter-filler',
        'CodeMirror-scrollbar-filler': 'CodeMirror-scrollbar-filler',
        'CodeMirror-gutters': 'CodeMirror-gutters',
        'CodeMirror-linenumber': 'CodeMirror-linenumber',
        'CodeMirror-guttermarker': 'CodeMirror-guttermarker',
        'CodeMirror-guttermarker-subtle': 'CodeMirror-guttermarker-subtle',
        'CodeMirror-cursor': 'CodeMirror-cursor',
        'CodeMirror-secondarycursor': 'CodeMirror-secondarycursor',
        'cm-fat-cursor': 'cm-fat-cursor',
        'CodeMirror-cursors': 'CodeMirror-cursors',
        'cm-tab': 'cm-tab',
        'CodeMirror-rulers': 'CodeMirror-rulers',
        'CodeMirror-ruler': 'CodeMirror-ruler',
        'cm-s-default': 'cm-s-default',
        'cm-header': 'cm-header',
        'cm-quote': 'cm-quote',
        'cm-negative': 'cm-negative',
        'cm-positive': 'cm-positive',
        'cm-strong': 'cm-strong',
        'cm-em': 'cm-em',
        'cm-link': 'cm-link',
        'cm-strikethrough': 'cm-strikethrough',
        'cm-keyword': 'cm-keyword',
        'cm-atom': 'cm-atom',
        'cm-number': 'cm-number',
        'cm-def': 'cm-def',
        'cm-variable-2': 'cm-variable-2',
        'cm-type': 'cm-type',
        'cm-variable-3': 'cm-variable-3',
        'cm-comment': 'cm-comment',
        'cm-string': 'cm-string',
        'cm-string-2': 'cm-string-2',
        'cm-meta': 'cm-meta',
        'cm-qualifier': 'cm-qualifier',
        'cm-builtin': 'cm-builtin',
        'cm-bracket': 'cm-bracket',
        'cm-tag': 'cm-tag',
        'cm-attribute': 'cm-attribute',
        'cm-hr': 'cm-hr',
        'cm-error': 'cm-error',
        'cm-invalidchar': 'cm-invalidchar',
        'CodeMirror-composing': 'CodeMirror-composing',
        'CodeMirror-matchingbracket': 'CodeMirror-matchingbracket',
        'CodeMirror-nonmatchingbracket': 'CodeMirror-nonmatchingbracket',
        'CodeMirror-matchingtag': 'CodeMirror-matchingtag',
        'CodeMirror-activeline-background': 'CodeMirror-activeline-background',
        'CodeMirror-scroll': 'CodeMirror-scroll',
        'CodeMirror-sizer': 'CodeMirror-sizer',
        'CodeMirror-hscrollbar': 'CodeMirror-hscrollbar',
        'CodeMirror-vscrollbar': 'CodeMirror-vscrollbar',
        'CodeMirror-gutter': 'CodeMirror-gutter',
        'CodeMirror-gutter-wrapper': 'CodeMirror-gutter-wrapper',
        'CodeMirror-gutter-background': 'CodeMirror-gutter-background',
        'CodeMirror-gutter-elt': 'CodeMirror-gutter-elt',
        'CodeMirror-wrap': 'CodeMirror-wrap',
        'CodeMirror-linebackground': 'CodeMirror-linebackground',
        'CodeMirror-linewidget': 'CodeMirror-linewidget',
        'CodeMirror-rtl': 'CodeMirror-rtl',
        'CodeMirror-code': 'CodeMirror-code',
        'CodeMirror-measure': 'CodeMirror-measure',
        'CodeMirror-dragcursors': 'CodeMirror-dragcursors',
        'CodeMirror-focused': 'CodeMirror-focused',
        'CodeMirror-selected': 'CodeMirror-selected',
        'CodeMirror-crosshair': 'CodeMirror-crosshair',
        'cm-searching': 'cm-searching',
        'cm-force-border': 'cm-force-border',
        'cm-tab-wrap-hack': 'cm-tab-wrap-hack',
        'CodeMirror-selectedtext': 'CodeMirror-selectedtext',
        blink: 'blink',
      };
    },
  },
]);
