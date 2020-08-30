;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '3PQu': function (e, n, t) {
      var a = t('z01/')
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
      function c(e) {
        if (e && e.__esModule) return e
        if (null === e || ('object' !== a(e) && 'function' !== typeof e))
          return { default: e }
        var n = l()
        if (n && n.has(e)) return n.get(e)
        var t = {},
          c = Object.defineProperty && Object.getOwnPropertyDescriptor
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            var u = c ? Object.getOwnPropertyDescriptor(e, r) : null
            u && (u.get || u.set)
              ? Object.defineProperty(t, r, u)
              : (t[r] = e[r])
          }
        return (t['default'] = e), n && n.set(e, t), t
      }
      e.exports = c
    },
    GtyV: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('0Owb'),
        l = t('q1tI'),
        c = t.n(l),
        r = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        u = t.n(r),
        o = c.a.memo(function () {
          var e = t('3PQu'),
            n = t('K+nK'),
            a = n(t('tJVT')),
            l = e(t('q1tI')),
            c = t('/7QA'),
            r = function () {
              var e = (0, l.useState)(!0),
                n = (0, a['default'])(e, 2),
                t = n[0],
                r = n[1],
                u = (0, l.useState)(!1),
                o = (0, a['default'])(u, 2),
                m = o[0],
                i = o[1]
              return l['default'].createElement(
                l['default'].Fragment,
                null,
                l['default'].createElement(
                  c.Checkbox,
                  {
                    checked: t,
                    onChange: function (e) {
                      r(e)
                    },
                  },
                  '\u590d\u9009\u6846',
                ),
                l['default'].createElement(
                  c.Checkbox,
                  {
                    checked: m,
                    onChange: function (e) {
                      i(e)
                    },
                  },
                  '\u590d\u9009\u6846',
                ),
                l['default'].createElement(
                  c.Checkbox,
                  { mixin: !0 },
                  '\u6df7\u5408\u72b6\u6001',
                ),
              )
            }
          return l['default'].createElement(r)
        }),
        m = c.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = t('/7QA'),
            l = function () {
              return n['default'].createElement(
                n['default'].Fragment,
                null,
                n['default'].createElement(
                  a.Checkbox,
                  { checked: !0, disabled: !0 },
                  '\u52fe\u9009\u4e14\u7981\u7528',
                ),
                n['default'].createElement(
                  a.Checkbox,
                  { disabled: !0 },
                  '\u672a\u52fe\u9009\u7981\u7528',
                ),
              )
            }
          return n['default'].createElement(l)
        }),
        i = c.a.memo(function () {
          var e = t('3PQu'),
            n = t('K+nK'),
            a = n(t('tJVT')),
            l = e(t('q1tI')),
            c = t('/7QA'),
            r = function () {
              var e = (0, l.useState)(1),
                n = (0, a['default'])(e, 2),
                t = n[0],
                r = n[1],
                u = function (e) {
                  console.log(e), r(e)
                }
              return l['default'].createElement(
                l['default'].Fragment,
                null,
                l['default'].createElement(
                  c.Checkbox,
                  { values: [1, 2], checked: t, onChange: u },
                  '\u540c\u610f\u7528\u6237\u534f\u8bae',
                ),
                l['default'].createElement('br', null),
                l['default'].createElement('br', null),
                l['default'].createElement('p', null, 'Value: ', t),
              )
            }
          return l['default'].createElement(r)
        }),
        d = c.a.memo(function () {
          var e = t('3PQu'),
            n = t('K+nK'),
            a = n(t('tJVT')),
            l = e(t('q1tI')),
            c = t('/7QA'),
            r = function () {
              var e = (0, l.useState)([
                  { value: 'apple', label: '\u82f9\u679c' },
                  { value: 'banana', label: '\u9999\u8549' },
                  { value: 'grape', label: '\u8461\u8404' },
                ]),
                n = (0, a['default'])(e, 2),
                t = n[0],
                r = (n[1], (0, l.useState)(['apple'])),
                u = (0, a['default'])(r, 2),
                o = u[0],
                m = u[1],
                i = (0, l.useMemo)(
                  function () {
                    return t.map(function (e) {
                      return e.value
                    })
                  },
                  [t],
                ),
                d = (0, l.useState)('mixin'),
                h = (0, a['default'])(d, 2),
                s = h[0],
                k = h[1]
              ;(0, l.useEffect)(
                function () {
                  var e = i.every(function (e) {
                    return o.includes(e)
                  })
                  k(e ? 'checked' : 0 === o.length ? 'unchecked' : 'mixin')
                },
                [o, i],
              )
              var E = function (e) {
                  m(e)
                },
                f = function () {
                  m('checked' === s ? [] : i)
                }
              return l['default'].createElement(
                l['default'].Fragment,
                null,
                l['default'].createElement(
                  c.Checkbox,
                  {
                    checked: 'checked' === s,
                    mixin: 'mixin' === s,
                    onChange: f,
                  },
                  '\u5168\u9009',
                ),
                l['default'].createElement(
                  c.Checkbox.Group,
                  { value: o, onChange: E },
                  t.map(function (e) {
                    return l['default'].createElement(
                      c.Checkbox,
                      { key: e.value, name: e.value },
                      e.label,
                    )
                  }),
                ),
                l['default'].createElement(
                  'p',
                  null,
                  '\u5df2\u9009\u62e9\uff1a',
                  JSON.stringify(o),
                ),
              )
            }
          return l['default'].createElement(r)
        })
      n['default'] = function () {
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h2',
              { id: 'checkbox-\u590d\u9009\u6846' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#checkbox-\u590d\u9009\u6846' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Checkbox \u590d\u9009\u6846',
            ),
            c.a.createElement(
              'h3',
              { id: '\u57fa\u7840\u7528\u6cd5' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u7840\u7528\u6cd5' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u7840\u7528\u6cd5',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React, { useState } from 'react'\nimport { Checkbox } from 'are-visual'\n\nexport default () => {\n  const [check, setCheck] = useState(true)\n  const [check2, setCheck2] = useState(false)\n  return (\n    <>\n      <Checkbox\n        checked={check}\n        onChange={(v) => {\n          setCheck(v)\n        }}\n      >\n        \u590d\u9009\u6846\n      </Checkbox>\n      <Checkbox\n        checked={check2}\n        onChange={(v) => {\n          setCheck2(v)\n        }}\n      >\n        \u590d\u9009\u6846\n      </Checkbox>\n      <Checkbox mixin>\u6df7\u5408\u72b6\u6001</Checkbox>\n    </>\n  )\n}",
                  jsx:
                    "import React, { useState } from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  const [check, setCheck] = useState(true);\n  const [check2, setCheck2] = useState(false);\n  return (\n    <>\n      <Checkbox\n        checked={check}\n        onChange={v => {\n          setCheck(v);\n        }}\n      >\n        \u590d\u9009\u6846\n      </Checkbox>\n      <Checkbox\n        checked={check2}\n        onChange={v => {\n          setCheck2(v);\n        }}\n      >\n        \u590d\u9009\u6846\n      </Checkbox>\n      <Checkbox mixin>\u6df7\u5408\u72b6\u6001</Checkbox>\n    </>\n  );\n};\n",
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            c.a.createElement(o, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u7981\u7528\u72b6\u6001' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u7981\u7528\u72b6\u6001' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528\u72b6\u6001',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { Checkbox } from 'are-visual'\n\nexport default () => {\n  return (\n    <>\n      <Checkbox checked disabled>\n        \u52fe\u9009\u4e14\u7981\u7528\n      </Checkbox>\n      <Checkbox disabled>\u672a\u52fe\u9009\u7981\u7528</Checkbox>\n    </>\n  )\n}",
                  jsx:
                    "import React from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  return (\n    <>\n      <Checkbox checked disabled>\n        \u52fe\u9009\u4e14\u7981\u7528\n      </Checkbox>\n      <Checkbox disabled>\u672a\u52fe\u9009\u7981\u7528</Checkbox>\n    </>\n  );\n};\n",
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            c.a.createElement(m, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u6307\u5b9a\u503c' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u6307\u5b9a\u503c' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6307\u5b9a\u503c',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React, { useState } from 'react'\nimport { Checkbox } from 'are-visual'\n\ntype AgreeType = 1 | 2\n\nexport default () => {\n  const [check, setCheck] = useState<AgreeType>(1)\n\n  const onChange = (value: AgreeType) => {\n    console.log(value)\n    setCheck(value)\n  }\n\n  return (\n    <>\n      <Checkbox values={[1, 2]} checked={check} onChange={onChange}>\n        \u540c\u610f\u7528\u6237\u534f\u8bae\n      </Checkbox>\n      <br />\n      <br />\n      <p>Value: {check}</p>\n    </>\n  )\n}",
                  jsx:
                    "import React, { useState } from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  const [check, setCheck] = useState(1);\n\n  const onChange = value => {\n    console.log(value);\n    setCheck(value);\n  };\n\n  return (\n    <>\n      <Checkbox values={[1, 2]} checked={check} onChange={onChange}>\n        \u540c\u610f\u7528\u6237\u534f\u8bae\n      </Checkbox>\n      <br />\n      <br />\n      <p>Value: {check}</p>\n    </>\n  );\n};\n",
                },
              },
              {
                desc:
                  '<div class="markdown"><p>\u4f60\u53ef\u4ee5\u6307\u5b9a<strong>\u9009\u62e9\u3001\u672a\u9009\u62e9</strong>\u7684\u8fd4\u56de\u503c</p></div>',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            c.a.createElement(i, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u5168\u9009' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5168\u9009' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5168\u9009',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React, { useState, useMemo, useEffect } from 'react'\nimport { Checkbox } from 'are-visual'\n\ntype CheckState = 'checked' | 'unchecked' | 'mixin'\n\nexport default () => {\n  const [fruit, setFruit] = useState([\n    {\n      value: 'apple',\n      label: '\u82f9\u679c',\n    },\n    {\n      value: 'banana',\n      label: '\u9999\u8549',\n    },\n    {\n      value: 'grape',\n      label: '\u8461\u8404',\n    },\n  ])\n  /** \u9ed8\u8ba4\u9009\u62e9 `apple` */\n  const [checkedVal, setCheckedVal] = useState(['apple'])\n\n  const allCheckValue = useMemo(() => fruit.map((item) => item.value), [fruit])\n\n  const [state, setState] = useState<CheckState>('mixin')\n  useEffect(() => {\n    const checkAll = allCheckValue.every((item) => checkedVal.includes(item))\n    if (checkAll) {\n      setState('checked')\n    } else {\n      setState(checkedVal.length === 0 ? 'unchecked' : 'mixin')\n    }\n  }, [checkedVal, allCheckValue])\n\n  const onChange = (v: string[]) => {\n    setCheckedVal(v)\n  }\n\n  const onCheckAllChange = () => {\n    setCheckedVal(state === 'checked' ? [] : allCheckValue)\n  }\n\n  return (\n    <>\n      <Checkbox\n        checked={state === 'checked'}\n        mixin={state === 'mixin'}\n        onChange={onCheckAllChange}\n      >\n        \u5168\u9009\n      </Checkbox>\n\n      <Checkbox.Group value={checkedVal} onChange={onChange}>\n        {fruit.map((item) => (\n          <Checkbox key={item.value} name={item.value}>\n            {item.label}\n          </Checkbox>\n        ))}\n      </Checkbox.Group>\n      <p>\u5df2\u9009\u62e9\uff1a{JSON.stringify(checkedVal)}</p>\n    </>\n  )\n}",
                  jsx:
                    "import React, { useState, useMemo, useEffect } from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  const [fruit, setFruit] = useState([\n    {\n      value: 'apple',\n      label: '\u82f9\u679c',\n    },\n    {\n      value: 'banana',\n      label: '\u9999\u8549',\n    },\n    {\n      value: 'grape',\n      label: '\u8461\u8404',\n    },\n  ]);\n  /** \u9ed8\u8ba4\u9009\u62e9 `apple` */\n\n  const [checkedVal, setCheckedVal] = useState(['apple']);\n  const allCheckValue = useMemo(() => fruit.map(item => item.value), [fruit]);\n  const [state, setState] = useState('mixin');\n  useEffect(() => {\n    const checkAll = allCheckValue.every(item => checkedVal.includes(item));\n\n    if (checkAll) {\n      setState('checked');\n    } else {\n      setState(checkedVal.length === 0 ? 'unchecked' : 'mixin');\n    }\n  }, [checkedVal, allCheckValue]);\n\n  const onChange = v => {\n    setCheckedVal(v);\n  };\n\n  const onCheckAllChange = () => {\n    setCheckedVal(state === 'checked' ? [] : allCheckValue);\n  };\n\n  return (\n    <>\n      <Checkbox checked={state === 'checked'} mixin={state === 'mixin'} onChange={onCheckAllChange}>\n        \u5168\u9009\n      </Checkbox>\n\n      <Checkbox.Group value={checkedVal} onChange={onChange}>\n        {fruit.map(item => (\n          <Checkbox key={item.value} name={item.value}>\n            {item.label}\n          </Checkbox>\n        ))}\n      </Checkbox.Group>\n      <p>\u5df2\u9009\u62e9\uff1a{JSON.stringify(checkedVal)}</p>\n    </>\n  );\n};\n",
                },
              },
              {
                desc:
                  '<div class="markdown"><p>\u914d\u5408 <code>Checkbox.Group</code> \u4e00\u8d77\u4f7f\u7528\u3002\u6b64\u65f6 <code>mixin</code> \u6df7\u5408\u72b6\u6001\u5c31\u80fd\u6d3e\u4e0a\u7528\u573a\u3002</p></div>',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            c.a.createElement(d, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: 'api' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            c.a.createElement(
              'h4',
              { id: 'checkbox-api' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#checkbox-api' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Checkbox API',
            ),
            c.a.createElement(
              'table',
              null,
              c.a.createElement(
                'thead',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('th', null, '\u5c5e\u6027'),
                  c.a.createElement('th', null, '\u63cf\u8ff0'),
                  c.a.createElement('th', null, '\u7c7b\u578b'),
                  c.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              c.a.createElement(
                'tbody',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'checked'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u9009\u4e2d',
                    c.a.createElement('br', null),
                    '\u867d\u7136\u6211\u4eec\u6ca1\u6709\u9650\u5b9a\u7c7b\u578b\uff08\u9002\u7528\u4e8e\u7c7b\u578b\u63a8\u65ad\uff09 ',
                    c.a.createElement('br', null),
                    '\u4f46\u662f\u5efa\u8bae\u4f7f\u7528\u53f3\u4fa7\u63a8\u8350\u7684\u539f\u59cb\u7c7b\u578b\u3002',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'boolean'),
                    ' | ',
                    c.a.createElement('code', null, 'number'),
                    ' | ',
                    c.a.createElement('code', null, 'string'),
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'false'),
                  ),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'disabled'),
                  c.a.createElement('td', null, 'disable checkbox'),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'boolean'),
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'false'),
                  ),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'name'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u914d\u5408 ',
                    c.a.createElement('code', null, 'Checkbox.Group'),
                    '\u4e00\u8d77\u4f7f\u7528',
                    c.a.createElement('br', null),
                    '\u4f5c\u4e3a\u9009\u4e2d\u503c\u548c\u552f\u4e00\u6807\u8bc6\u7b26',
                    c.a.createElement('br', null),
                    '\u63a8\u8350\u4f7f\u7528\u53f3\u4fa7\u7684\u539f\u59cb\u7c7b\u578b\u3002',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'boolean'),
                    ' | ',
                    c.a.createElement('code', null, 'number'),
                    ' | ',
                    c.a.createElement('code', null, 'string'),
                  ),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'values'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u9009\u62e9\u3001\u672a\u9009\u62e9\u7684\u72b6\u6001\u503c\u3002',
                    c.a.createElement('br', null),
                    '\u63a8\u8350\u4f7f\u7528\u53f3\u4fa7\u7684\u7c7b\u578b\u3002',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'string[]'),
                    ' | ',
                    c.a.createElement('code', null, 'number[]'),
                    ' | ',
                    c.a.createElement('code', null, 'boolean[]'),
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, '[true, false]'),
                  ),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'mixin'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u590d\u9009\u6846\u7684\u6df7\u5408\u72b6\u6001\u3002',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'boolean'),
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'false'),
                  ),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'onChange'),
                  c.a.createElement(
                    'td',
                    null,
                    'The callback function that is triggered when the state changes.',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, '(value) => void'),
                  ),
                  c.a.createElement('td', null, '-'),
                ),
              ),
            ),
            c.a.createElement(
              'h4',
              { id: 'checkboxgroup-api' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#checkboxgroup-api' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Checkbox.Group API',
            ),
            c.a.createElement(
              'table',
              null,
              c.a.createElement(
                'thead',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('th', null, '\u5c5e\u6027'),
                  c.a.createElement('th', null, '\u63cf\u8ff0'),
                  c.a.createElement('th', null, '\u7c7b\u578b'),
                  c.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              c.a.createElement(
                'tbody',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'values'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u8fd9\u7ec4\u9009\u5b9a\u7684\u6570\u503c\u3002',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'string[]'),
                    ' | ',
                    c.a.createElement('code', null, 'number[]'),
                    ' | ',
                    c.a.createElement('code', null, 'boolean[]'),
                  ),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'disabled'),
                  c.a.createElement('td', null, 'disable this group.'),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'boolean'),
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'false'),
                  ),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'onChange'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u4fee\u6539\u72b6\u6001\u7684\u56de\u8c03\u51fd\u6570\u3002',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, '(value: T[]) => void'),
                  ),
                  c.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        )
      }
    },
    'K+nK': function (e, n) {
      function t(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = t
    },
    'z01/': function (e, n) {
      function t(n) {
        return (
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? (e.exports = t = function (e) {
                return typeof e
              })
            : (e.exports = t = function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              }),
          t(n)
        )
      }
      e.exports = t
    },
  },
])
