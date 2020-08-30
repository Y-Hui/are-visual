;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    '3PQu': function (e, t, n) {
      var a = n('z01/')
      function l() {
        if ('function' !== typeof WeakMap) return null
        var e = new WeakMap()
        return (
          (l = function () {
            return e
          }),
          e
        )
      }
      function r(e) {
        if (e && e.__esModule) return e
        if (null === e || ('object' !== a(e) && 'function' !== typeof e))
          return { default: e }
        var t = l()
        if (t && t.has(e)) return t.get(e)
        var n = {},
          r = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var u in e)
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var o = r ? Object.getOwnPropertyDescriptor(e, u) : null
            o && (o.get || o.set)
              ? Object.defineProperty(n, u, o)
              : (n[u] = e[u])
          }
        return (n['default'] = e), t && t.set(e, n), n
      }
      e.exports = r
    },
    'K+nK': function (e, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = n
    },
    Z6uG: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('0Owb'),
        l = n('q1tI'),
        r = n.n(l),
        u = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        o = n.n(u),
        c = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                t['default'].Fragment,
                null,
                t['default'].createElement(
                  a.Button,
                  null,
                  '\u9ed8\u8ba4\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary' },
                  '\u4e3b\u8981\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'plain' },
                  '\u6846\u7ebf\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'text' },
                  '\u6587\u5b57\u6309\u94ae',
                ),
              )
            }
          return t['default'].createElement(l)
        }),
        i = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                t['default'].Fragment,
                null,
                t['default'].createElement(a.Button, { shape: 'circle' }, 'A'),
                t['default'].createElement(
                  a.Button,
                  { shape: 'round' },
                  '\u80f6\u56ca\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', shape: 'circle' },
                  'A',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', shape: 'round' },
                  '\u80f6\u56ca\u6309\u94ae',
                ),
              )
            }
          return t['default'].createElement(l)
        }),
        m = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                t['default'].Fragment,
                null,
                t['default'].createElement(
                  a.Button,
                  { ghost: !0 },
                  '\u5e7d\u7075\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', ghost: !0 },
                  '\u4e3b\u8981\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { ghost: !0, danger: !0 },
                  '\u5371\u9669\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { ghost: !0, disabled: !0 },
                  '\u7981\u7528\u5e7d\u7075',
                ),
                t['default'].createElement(
                  a.Button,
                  { ghost: !0, shape: 'round' },
                  '\u5e7d\u7075\u6309\u94ae',
                ),
                t['default'].createElement(
                  a.Button,
                  { ghost: !0, shape: 'circle' },
                  'A',
                ),
              )
            }
          return t['default'].createElement(l)
        }),
        d = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement('h4', null, 'Small:'),
                t['default'].createElement(
                  a.Button,
                  { size: 'small' },
                  'Default',
                ),
                t['default'].createElement(
                  'h4',
                  { style: { marginTop: 30 } },
                  'middle: (default)',
                ),
                t['default'].createElement(a.Button, null, 'Default'),
                t['default'].createElement(
                  'h4',
                  { style: { marginTop: 30 } },
                  'large:',
                ),
                t['default'].createElement(
                  a.Button,
                  { size: 'large' },
                  'Default',
                ),
              )
            }
          return t['default'].createElement(l)
        }),
        s = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                t['default'].Fragment,
                null,
                t['default'].createElement(
                  a.Button,
                  { disabled: !0 },
                  'Disabled',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', disabled: !0 },
                  'Disabled',
                ),
                t['default'].createElement(
                  a.Button,
                  { shape: 'round', disabled: !0 },
                  'Disabled',
                ),
                t['default'].createElement(
                  a.Button,
                  { shape: 'circle', disabled: !0 },
                  'A',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'text', disabled: !0 },
                  'Disabled',
                ),
              )
            }
          return t['default'].createElement(l)
        }),
        p = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                t['default'].Fragment,
                null,
                t['default'].createElement(a.Button, { danger: !0 }, 'Danger'),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', danger: !0 },
                  'Danger',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'text', danger: !0 },
                  'Danger',
                ),
              )
            }
          return t['default'].createElement(l)
        }),
        f = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                t['default'].Fragment,
                null,
                t['default'].createElement(
                  a.Button,
                  { block: !0 },
                  '\u72ec\u5360\u4e00\u884c',
                ),
              )
            }
          return t['default'].createElement(l)
        }),
        E = r.a.memo(function () {
          var e = n('3PQu'),
            t = n('K+nK'),
            a = t(n('tJVT')),
            l = e(n('q1tI')),
            r = n('/7QA'),
            u = function () {
              var e = (0, l.useState)(!1),
                t = (0, a['default'])(e, 2),
                n = t[0],
                u = t[1],
                o = function () {
                  u(!0)
                  var e = setTimeout(function () {
                    u(!1), clearTimeout(e)
                  }, 5e3)
                }
              return l['default'].createElement(
                l['default'].Fragment,
                null,
                l['default'].createElement(
                  r.Button,
                  { type: 'primary', loading: !0 },
                  'Loading...',
                ),
                l['default'].createElement(
                  r.Button,
                  { type: 'primary', loading: n, onClick: o },
                  'Click Me',
                ),
                l['default'].createElement(
                  r.Button,
                  { type: 'primary', shape: 'circle', loading: n, onClick: o },
                  'A',
                ),
                l['default'].createElement(
                  r.Button,
                  { type: 'text', loading: n, onClick: o },
                  'Danger',
                ),
              )
            }
          return l['default'].createElement(u)
        })
      t['default'] = function () {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'button-\u6309\u94ae' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#button-\u6309\u94ae' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Button \u6309\u94ae',
            ),
            r.a.createElement(
              'h3',
              { id: '\u6982\u89c8' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u6982\u89c8' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6982\u89c8',
            ),
            r.a.createElement(
              'p',
              null,
              '\u5728 Are Vision \u4e2d\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u6309\u94ae\u6837\u5f0f\uff1a',
            ),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement('li', null, '\u9ed8\u8ba4\u6309\u94ae'),
              r.a.createElement('li', null, '\u4e3b\u6309\u94ae'),
              r.a.createElement('li', null, '\u6846\u7ebf\u6309\u94ae'),
              r.a.createElement('li', null, '\u6587\u5b57\u6309\u94ae'),
            ),
            r.a.createElement(
              'p',
              null,
              '\u8fd8\u6709\u4ee5\u4e0b\u56db\u79cd\u72b6\u6001\u5c5e\u6027\uff1a',
            ),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement('li', null, '\u5e7d\u7075'),
              r.a.createElement('li', null, '\u7981\u7528'),
              r.a.createElement('li', null, '\u52a0\u8f7d\u4e2d'),
              r.a.createElement('li', null, '\u5371\u9669'),
            ),
            r.a.createElement(
              'h3',
              { id: '\u6837\u5f0f\u7c7b\u578b-type' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u6837\u5f0f\u7c7b\u578b-type',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6837\u5f0f\u7c7b\u578b Type',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => {\n  return (\n    <>\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n      <Button type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n      <Button type="plain">\u6846\u7ebf\u6309\u94ae</Button>\n      <Button type="text">\u6587\u5b57\u6309\u94ae</Button>\n    </>\n  )\n}',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => {\n  return (\n    <>\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n      <Button type="primary">\u4e3b\u8981\u6309\u94ae</Button>\n      <Button type="plain">\u6846\u7ebf\u6309\u94ae</Button>\n      <Button type="text">\u6587\u5b57\u6309\u94ae</Button>\n    </>\n  );\n};\n',
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            r.a.createElement(c, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u6309\u94ae\u5f62\u72b6-shape' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u6309\u94ae\u5f62\u72b6-shape',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6309\u94ae\u5f62\u72b6 Shape',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => (\n  <>\n    <Button shape="circle">A</Button>\n    <Button shape="round">\u80f6\u56ca\u6309\u94ae</Button>\n    <Button type="primary" shape="circle">\n      A\n    </Button>\n    <Button type="primary" shape="round">\n      \u80f6\u56ca\u6309\u94ae\n    </Button>\n  </>\n)',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => (\n  <>\n    <Button shape="circle">A</Button>\n    <Button shape="round">\u80f6\u56ca\u6309\u94ae</Button>\n    <Button type="primary" shape="circle">\n      A\n    </Button>\n    <Button type="primary" shape="round">\n      \u80f6\u56ca\u6309\u94ae\n    </Button>\n  </>\n);\n',
                },
              },
              {
                title: '\u6309\u94ae\u5f62\u72b6',
                desc:
                  '<div class="markdown"><p>\u5b83\u53ea\u63a7\u5236\u6309\u94ae\u7684\u5f62\u72b6\uff0c\u4e0d\u53c2\u4e0e\u5176\u4ed6\u6837\u5f0f\u7684\u63a7\u5236\u3002</p></div>',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            r.a.createElement(i, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u5e7d\u7075\u6309\u94ae-ghost' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u5e7d\u7075\u6309\u94ae-ghost',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5e7d\u7075\u6309\u94ae Ghost',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => (\n  <>\n    <Button ghost>\u5e7d\u7075\u6309\u94ae</Button>\n    <Button type="primary" ghost>\n      \u4e3b\u8981\u6309\u94ae\n    </Button>\n    <Button ghost danger>\n      \u5371\u9669\u6309\u94ae\n    </Button>\n    <Button ghost disabled>\n      \u7981\u7528\u5e7d\u7075\n    </Button>\n    <Button ghost shape="round">\n      \u5e7d\u7075\u6309\u94ae\n    </Button>\n    <Button ghost shape="circle">\n      A\n    </Button>\n  </>\n)',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => (\n  <>\n    <Button ghost>\u5e7d\u7075\u6309\u94ae</Button>\n    <Button type="primary" ghost>\n      \u4e3b\u8981\u6309\u94ae\n    </Button>\n    <Button ghost danger>\n      \u5371\u9669\u6309\u94ae\n    </Button>\n    <Button ghost disabled>\n      \u7981\u7528\u5e7d\u7075\n    </Button>\n    <Button ghost shape="round">\n      \u5e7d\u7075\u6309\u94ae\n    </Button>\n    <Button ghost shape="circle">\n      A\n    </Button>\n  </>\n);\n',
                },
              },
              {
                background: '#afafaf',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            r.a.createElement(m, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u6309\u94ae\u5c3a\u5bf8-size' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u6309\u94ae\u5c3a\u5bf8-size',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6309\u94ae\u5c3a\u5bf8 Size',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => {\n  return (\n    <div>\n      <h4>Small:</h4>\n      <Button size="small">Default</Button>\n\n      <h4 style={{ marginTop: 30 }}>middle: (default)</h4>\n      <Button>Default</Button>\n\n      <h4 style={{ marginTop: 30 }}>large:</h4>\n      <Button size="large">Default</Button>\n    </div>\n  )\n}',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => {\n  return (\n    <div>\n      <h4>Small:</h4>\n      <Button size="small">Default</Button>\n\n      <h4\n        style={{\n          marginTop: 30,\n        }}\n      >\n        middle: (default)\n      </h4>\n      <Button>Default</Button>\n\n      <h4\n        style={{\n          marginTop: 30,\n        }}\n      >\n        large:\n      </h4>\n      <Button size="large">Default</Button>\n    </div>\n  );\n};\n',
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            r.a.createElement(d, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u7981\u7528\u6309\u94ae-disabled' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u7981\u7528\u6309\u94ae-disabled',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528\u6309\u94ae Disabled',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => {\n  return (\n    <>\n      <Button disabled>Disabled</Button>\n      <Button type="primary" disabled>\n        Disabled\n      </Button>\n      <Button shape="round" disabled>\n        Disabled\n      </Button>\n      <Button shape="circle" disabled>\n        A\n      </Button>\n      <Button type="text" disabled>\n        Disabled\n      </Button>\n    </>\n  )\n}',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => {\n  return (\n    <>\n      <Button disabled>Disabled</Button>\n      <Button type="primary" disabled>\n        Disabled\n      </Button>\n      <Button shape="round" disabled>\n        Disabled\n      </Button>\n      <Button shape="circle" disabled>\n        A\n      </Button>\n      <Button type="text" disabled>\n        Disabled\n      </Button>\n    </>\n  );\n};\n',
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            r.a.createElement(s, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u5371\u9669\u6309\u94ae-danger' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u5371\u9669\u6309\u94ae-danger',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5371\u9669\u6309\u94ae Danger',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => (\n  <>\n    <Button danger>Danger</Button>\n    <Button type="primary" danger>\n      Danger\n    </Button>\n    <Button type="text" danger>\n      Danger\n    </Button>\n  </>\n)',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => (\n  <>\n    <Button danger>Danger</Button>\n    <Button type="primary" danger>\n      Danger\n    </Button>\n    <Button type="text" danger>\n      Danger\n    </Button>\n  </>\n);\n',
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            r.a.createElement(p, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u72ec\u5360\u4e00\u884c-block' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u72ec\u5360\u4e00\u884c-block',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u72ec\u5360\u4e00\u884c Block',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { Button } from 'are-visual'\n\nexport default () => (\n  <>\n    <Button block>\u72ec\u5360\u4e00\u884c</Button>\n  </>\n)",
                  jsx:
                    "import React from 'react';\nimport { Button } from 'are-visual';\nexport default () => (\n  <>\n    <Button block>\u72ec\u5360\u4e00\u884c</Button>\n  </>\n);\n",
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            r.a.createElement(f, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u52a0\u8f7d\u4e2d-loading' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u52a0\u8f7d\u4e2d-loading' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u52a0\u8f7d\u4e2d Loading',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React, { useState } from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => {\n  const [loading, setLoading] = useState(false)\n  const onClick = () => {\n    setLoading(true)\n    const timer = setTimeout(() => {\n      setLoading(false)\n      clearTimeout(timer)\n    }, 5000)\n  }\n  return (\n    <>\n      <Button type="primary" loading>\n        Loading...\n      </Button>\n      <Button type="primary" loading={loading} onClick={onClick}>\n        Click Me\n      </Button>\n      <Button type="primary" shape="circle" loading={loading} onClick={onClick}>\n        A\n      </Button>\n      <Button type="text" loading={loading} onClick={onClick}>\n        Danger\n      </Button>\n    </>\n  )\n}',
                  jsx:
                    'import React, { useState } from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => {\n  const [loading, setLoading] = useState(false);\n\n  const onClick = () => {\n    setLoading(true);\n    const timer = setTimeout(() => {\n      setLoading(false);\n      clearTimeout(timer);\n    }, 5000);\n  };\n\n  return (\n    <>\n      <Button type="primary" loading>\n        Loading...\n      </Button>\n      <Button type="primary" loading={loading} onClick={onClick}>\n        Click Me\n      </Button>\n      <Button type="primary" shape="circle" loading={loading} onClick={onClick}>\n        A\n      </Button>\n      <Button type="text" loading={loading} onClick={onClick}>\n        Danger\n      </Button>\n    </>\n  );\n};\n',
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            r.a.createElement(E, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: 'api' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u63cf\u8ff0'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'type'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6309\u94ae\u6837\u5f0f\u7c7b\u578b',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'primary'),
                    ' | ',
                    r.a.createElement('code', null, 'plain'),
                    ' | ',
                    r.a.createElement('code', null, 'text'),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'size'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6309\u94ae\u5c3a\u5bf8',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'large'),
                    ' | ',
                    r.a.createElement('code', null, 'middle'),
                    ' | ',
                    r.a.createElement('code', null, 'small'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'middle'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'shape'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6309\u94ae\u5f62\u72b6',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'circle'),
                    ' | ',
                    r.a.createElement('code', null, 'round'),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'ghost'),
                  r.a.createElement('td', null, '\u5e7d\u7075\u6309\u94ae'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'disabled'),
                  r.a.createElement('td', null, '\u7981\u7528\u6309\u94ae'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'danger'),
                  r.a.createElement('td', null, '\u5371\u9669\u6309\u94ae'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'nativeType'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u539f\u59cb',
                    r.a.createElement('code', null, 'type'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'submit'),
                    ' | ',
                    r.a.createElement('code', null, 'button'),
                    ' | ',
                    r.a.createElement('code', null, 'reset'),
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'button'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'block'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6309\u94ae\u72ec\u5360\u4e00\u884c',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'loading'),
                  r.a.createElement('td', null, '\u52a0\u8f7d\u72b6\u6001'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'false'),
                  ),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onClick'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u70b9\u51fb\u4e8b\u4ef6\u56de\u8c03',
                  ),
                  r.a.createElement('td', null, '(event) => void'),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        )
      }
    },
    'z01/': function (e, t) {
      function n(t) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (e.exports = n = function (e) {
                return typeof e
              })
            : (e.exports = n = function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }),
          n(t)
        )
      }
      e.exports = n
    },
  },
])
