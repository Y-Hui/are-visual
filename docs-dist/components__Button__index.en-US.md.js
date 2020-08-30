;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [3],
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
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var u = r ? Object.getOwnPropertyDescriptor(e, o) : null
            u && (u.get || u.set)
              ? Object.defineProperty(n, o, u)
              : (n[o] = e[o])
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
    NXf4: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('0Owb'),
        l = n('q1tI'),
        r = n.n(l),
        o = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        u = n.n(o),
        c = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            a = n('/7QA'),
            l = function () {
              return t['default'].createElement(
                t['default'].Fragment,
                null,
                t['default'].createElement(a.Button, null, 'Default'),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary' },
                  'Primary',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'plain' },
                  'Plain',
                ),
                t['default'].createElement(a.Button, { type: 'text' }, 'Text'),
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
                  'Round',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', shape: 'circle' },
                  'A',
                ),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', shape: 'round' },
                  'Round',
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
                t['default'].createElement(a.Button, { ghost: !0 }, 'Ghost'),
                t['default'].createElement(
                  a.Button,
                  { type: 'primary', ghost: !0 },
                  'Primary',
                ),
                t['default'].createElement(
                  a.Button,
                  { ghost: !0, danger: !0 },
                  'Danger',
                ),
                t['default'].createElement(
                  a.Button,
                  { ghost: !0, disabled: !0 },
                  'Disabled',
                ),
                t['default'].createElement(
                  a.Button,
                  { ghost: !0, shape: 'round' },
                  'Ghost',
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
                  'Block Button',
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
            o = function () {
              var e = (0, l.useState)(!1),
                t = (0, a['default'])(e, 2),
                n = t[0],
                o = t[1],
                u = function () {
                  o(!0)
                  var e = setTimeout(function () {
                    o(!1), clearTimeout(e)
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
                  { type: 'primary', loading: n, onClick: u },
                  'Click Me',
                ),
                l['default'].createElement(
                  r.Button,
                  { type: 'primary', shape: 'circle', loading: n, onClick: u },
                  'A',
                ),
                l['default'].createElement(
                  r.Button,
                  { type: 'text', loading: n, onClick: u },
                  'Loading',
                ),
              )
            }
          return l['default'].createElement(o)
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
              { id: 'button' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#button' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Button',
            ),
            r.a.createElement(
              'h3',
              { id: 'overview' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#overview' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Overview',
            ),
            r.a.createElement(
              'p',
              null,
              'In Are Vision we provide the following button styles:',
            ),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement('li', null, 'Default Button'),
              r.a.createElement('li', null, 'Primary Button'),
              r.a.createElement('li', null, 'Plain Button'),
              r.a.createElement('li', null, 'Text Button'),
            ),
            r.a.createElement(
              'p',
              null,
              'There are four more state attributes:',
            ),
            r.a.createElement(
              'ul',
              null,
              r.a.createElement('li', null, 'Ghost'),
              r.a.createElement('li', null, 'Disabled'),
              r.a.createElement('li', null, 'Loading'),
              r.a.createElement('li', null, 'Danger'),
            ),
            r.a.createElement(
              'h3',
              { id: 'type' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#type' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Type',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => {\n  return (\n    <>\n      <Button>Default</Button>\n      <Button type="primary">Primary</Button>\n      <Button type="plain">Plain</Button>\n      <Button type="text">Text</Button>\n    </>\n  )\n}',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => {\n  return (\n    <>\n      <Button>Default</Button>\n      <Button type="primary">Primary</Button>\n      <Button type="plain">Plain</Button>\n      <Button type="text">Text</Button>\n    </>\n  );\n};\n',
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
              { id: 'shape' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#shape' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Shape',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => (\n  <>\n    <Button shape="circle">A</Button>\n    <Button shape="round">Round</Button>\n    <Button type="primary" shape="circle">\n      A\n    </Button>\n    <Button type="primary" shape="round">\n      Round\n    </Button>\n  </>\n)',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => (\n  <>\n    <Button shape="circle">A</Button>\n    <Button shape="round">Round</Button>\n    <Button type="primary" shape="circle">\n      A\n    </Button>\n    <Button type="primary" shape="round">\n      Round\n    </Button>\n  </>\n);\n',
                },
              },
              {
                title: 'Button shape',
                desc:
                  '<div class="markdown"><p>It only controls the shape of the button and is not involved in the control of other styles.</p></div>',
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
              { id: 'ghost' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#ghost' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Ghost',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => (\n  <>\n    <Button ghost>Ghost</Button>\n    <Button type="primary" ghost>\n      Primary\n    </Button>\n    <Button ghost danger>\n      Danger\n    </Button>\n    <Button ghost disabled>\n      Disabled\n    </Button>\n    <Button ghost shape="round">\n      Ghost\n    </Button>\n    <Button ghost shape="circle">\n      A\n    </Button>\n  </>\n)',
                  jsx:
                    'import React from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => (\n  <>\n    <Button ghost>Ghost</Button>\n    <Button type="primary" ghost>\n      Primary\n    </Button>\n    <Button ghost danger>\n      Danger\n    </Button>\n    <Button ghost disabled>\n      Disabled\n    </Button>\n    <Button ghost shape="round">\n      Ghost\n    </Button>\n    <Button ghost shape="circle">\n      A\n    </Button>\n  </>\n);\n',
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
              { id: 'size' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#size' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Size',
            ),
          ),
          r.a.createElement(
            u.a,
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
              { id: 'disabled' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#disabled' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Disabled',
            ),
          ),
          r.a.createElement(
            u.a,
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
              { id: 'danger' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#danger' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Danger',
            ),
          ),
          r.a.createElement(
            u.a,
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
              { id: 'block' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#block' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Block',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { Button } from 'are-visual'\n\nexport default () => (\n  <>\n    <Button block>Block Button</Button>\n  </>\n)",
                  jsx:
                    "import React from 'react';\nimport { Button } from 'are-visual';\nexport default () => (\n  <>\n    <Button block>Block Button</Button>\n  </>\n);\n",
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
              { id: 'loading' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#loading' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Loading',
            ),
          ),
          r.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    'import React, { useState } from \'react\'\nimport { Button } from \'are-visual\'\n\nexport default () => {\n  const [loading, setLoading] = useState(false)\n  const onClick = () => {\n    setLoading(true)\n    const timer = setTimeout(() => {\n      setLoading(false)\n      clearTimeout(timer)\n    }, 5000)\n  }\n  return (\n    <>\n      <Button type="primary" loading>\n        Loading...\n      </Button>\n      <Button type="primary" loading={loading} onClick={onClick}>\n        Click Me\n      </Button>\n      <Button type="primary" shape="circle" loading={loading} onClick={onClick}>\n        A\n      </Button>\n      <Button type="text" loading={loading} onClick={onClick}>\n        Loading\n      </Button>\n    </>\n  )\n}',
                  jsx:
                    'import React, { useState } from \'react\';\nimport { Button } from \'are-visual\';\nexport default () => {\n  const [loading, setLoading] = useState(false);\n\n  const onClick = () => {\n    setLoading(true);\n    const timer = setTimeout(() => {\n      setLoading(false);\n      clearTimeout(timer);\n    }, 5000);\n  };\n\n  return (\n    <>\n      <Button type="primary" loading>\n        Loading...\n      </Button>\n      <Button type="primary" loading={loading} onClick={onClick}>\n        Click Me\n      </Button>\n      <Button type="primary" shape="circle" loading={loading} onClick={onClick}>\n        A\n      </Button>\n      <Button type="text" loading={loading} onClick={onClick}>\n        Loading\n      </Button>\n    </>\n  );\n};\n',
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
                  r.a.createElement('th', null, 'Props'),
                  r.a.createElement('th', null, 'Description'),
                  r.a.createElement('th', null, 'Type'),
                  r.a.createElement('th', null, 'Defaults'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'type'),
                  r.a.createElement('td', null, 'Button style type.'),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement('code', null, 'plain'),
                    ' | ',
                    r.a.createElement('code', null, 'text'),
                    ' | ',
                    r.a.createElement('code', null, 'ghost'),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'size'),
                  r.a.createElement('td', null, 'Set the button size.'),
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
                  r.a.createElement('td', null, 'Set the button shape.'),
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
                  r.a.createElement('td', null, 'Ghost button.'),
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
                  r.a.createElement('td', null, 'Disable button.'),
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
                  r.a.createElement('td', null, 'Set the danger button.'),
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
                    "Set the button's native type value.",
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
                    'Set the width of the button to 100%.',
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
                  r.a.createElement('td', null, 'Set loading status.'),
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
                  r.a.createElement('td', null, 'Click event callback'),
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
