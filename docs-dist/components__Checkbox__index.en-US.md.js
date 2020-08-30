;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
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
    'K+nK': function (e, n) {
      function t(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = t
    },
    kxcH: function (e, n, t) {
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
                i = o[0],
                m = o[1]
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
                  'Checkbox',
                ),
                l['default'].createElement(
                  c.Checkbox,
                  {
                    checked: i,
                    onChange: function (e) {
                      m(e)
                    },
                  },
                  'Checkbox',
                ),
                l['default'].createElement(c.Checkbox, { mixin: !0 }, 'Mixin'),
              )
            }
          return l['default'].createElement(r)
        }),
        i = c.a.memo(function () {
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
                  'Disabled',
                ),
                n['default'].createElement(
                  a.Checkbox,
                  { disabled: !0 },
                  'Disabled',
                ),
              )
            }
          return n['default'].createElement(l)
        }),
        m = c.a.memo(function () {
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
                  'I agree.',
                ),
                l['default'].createElement('br', null),
                l['default'].createElement('br', null),
                l['default'].createElement('p', null, 'Value: ', t),
              )
            }
          return l['default'].createElement(r)
        }),
        s = c.a.memo(function () {
          var e = t('3PQu'),
            n = t('K+nK'),
            a = n(t('tJVT')),
            l = e(t('q1tI')),
            c = t('/7QA'),
            r = function () {
              var e = (0, l.useState)([
                  { value: 'apple', label: 'Apple' },
                  { value: 'banana', label: 'Banana' },
                  { value: 'grape', label: 'Grape' },
                ]),
                n = (0, a['default'])(e, 2),
                t = n[0],
                r = (n[1], (0, l.useState)(['apple'])),
                u = (0, a['default'])(r, 2),
                o = u[0],
                i = u[1],
                m = (0, l.useMemo)(
                  function () {
                    return t.map(function (e) {
                      return e.value
                    })
                  },
                  [t],
                ),
                s = (0, l.useState)('mixin'),
                h = (0, a['default'])(s, 2),
                d = h[0],
                k = h[1]
              ;(0, l.useEffect)(
                function () {
                  var e = m.every(function (e) {
                    return o.includes(e)
                  })
                  k(e ? 'checked' : 0 === o.length ? 'unchecked' : 'mixin')
                },
                [o, m],
              )
              var f = function (e) {
                  i(e)
                },
                b = function () {
                  i('checked' === d ? [] : m)
                }
              return l['default'].createElement(
                l['default'].Fragment,
                null,
                l['default'].createElement(
                  c.Checkbox,
                  {
                    checked: 'checked' === d,
                    mixin: 'mixin' === d,
                    onChange: b,
                  },
                  'Check All',
                ),
                l['default'].createElement(
                  c.Checkbox.Group,
                  { value: o, onChange: f },
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
                  'Value: ',
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
              { id: 'checkbox' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#checkbox' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Checkbox',
            ),
            c.a.createElement(
              'h3',
              { id: 'basic-usage' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#basic-usage' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Basic usage',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React, { useState } from 'react'\nimport { Checkbox } from 'are-visual'\n\nexport default () => {\n  const [check, setCheck] = useState(true)\n  const [check2, setCheck2] = useState(false)\n  return (\n    <>\n      <Checkbox\n        checked={check}\n        onChange={(v) => {\n          setCheck(v)\n        }}\n      >\n        Checkbox\n      </Checkbox>\n      <Checkbox\n        checked={check2}\n        onChange={(v) => {\n          setCheck2(v)\n        }}\n      >\n        Checkbox\n      </Checkbox>\n      <Checkbox mixin>Mixin</Checkbox>\n    </>\n  )\n}",
                  jsx:
                    "import React, { useState } from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  const [check, setCheck] = useState(true);\n  const [check2, setCheck2] = useState(false);\n  return (\n    <>\n      <Checkbox\n        checked={check}\n        onChange={v => {\n          setCheck(v);\n        }}\n      >\n        Checkbox\n      </Checkbox>\n      <Checkbox\n        checked={check2}\n        onChange={v => {\n          setCheck2(v);\n        }}\n      >\n        Checkbox\n      </Checkbox>\n      <Checkbox mixin>Mixin</Checkbox>\n    </>\n  );\n};\n",
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
              { id: 'disabled' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#disabled' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Disabled',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { Checkbox } from 'are-visual'\n\nexport default () => {\n  return (\n    <>\n      <Checkbox checked disabled>\n        Disabled\n      </Checkbox>\n      <Checkbox disabled>Disabled</Checkbox>\n    </>\n  )\n}",
                  jsx:
                    "import React from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  return (\n    <>\n      <Checkbox checked disabled>\n        Disabled\n      </Checkbox>\n      <Checkbox disabled>Disabled</Checkbox>\n    </>\n  );\n};\n",
                },
              },
              { dependencies: { 'are-visual': '1.0.0' }, files: {} },
            ),
            c.a.createElement(i, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: 'specify-values' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#specify-values' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Specify values',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React, { useState } from 'react'\nimport { Checkbox } from 'are-visual'\n\ntype AgreeType = 1 | 2\n\nexport default () => {\n  const [check, setCheck] = useState<AgreeType>(1)\n\n  const onChange = (value: AgreeType) => {\n    console.log(value)\n    setCheck(value)\n  }\n\n  return (\n    <>\n      <Checkbox values={[1, 2]} checked={check} onChange={onChange}>\n        I agree.\n      </Checkbox>\n      <br />\n      <br />\n      <p>Value: {check}</p>\n    </>\n  )\n}",
                  jsx:
                    "import React, { useState } from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  const [check, setCheck] = useState(1);\n\n  const onChange = value => {\n    console.log(value);\n    setCheck(value);\n  };\n\n  return (\n    <>\n      <Checkbox values={[1, 2]} checked={check} onChange={onChange}>\n        I agree.\n      </Checkbox>\n      <br />\n      <br />\n      <p>Value: {check}</p>\n    </>\n  );\n};\n",
                },
              },
              {
                desc:
                  '<div class="markdown"><p>You can specify the return value</p></div>',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            c.a.createElement(m, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: 'check-all' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#check-all' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Check all',
            ),
          ),
          c.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React, { useState, useMemo, useEffect } from 'react'\nimport { Checkbox } from 'are-visual'\n\ntype CheckState = 'checked' | 'unchecked' | 'mixin'\n\nexport default () => {\n  const [fruit, setFruit] = useState([\n    {\n      value: 'apple',\n      label: 'Apple',\n    },\n    {\n      value: 'banana',\n      label: 'Banana',\n    },\n    {\n      value: 'grape',\n      label: 'Grape',\n    },\n  ])\n  /** Default selection of `apple` */\n  const [checkedVal, setCheckedVal] = useState(['apple'])\n\n  const allCheckValue = useMemo(() => fruit.map((item) => item.value), [fruit])\n\n  const [state, setState] = useState<CheckState>('mixin')\n  useEffect(() => {\n    const checkAll = allCheckValue.every((item) => checkedVal.includes(item))\n    if (checkAll) {\n      setState('checked')\n    } else {\n      setState(checkedVal.length === 0 ? 'unchecked' : 'mixin')\n    }\n  }, [checkedVal, allCheckValue])\n\n  const onChange = (v: string[]) => {\n    setCheckedVal(v)\n  }\n\n  const onCheckAllChange = () => {\n    setCheckedVal(state === 'checked' ? [] : allCheckValue)\n  }\n\n  return (\n    <>\n      <Checkbox\n        checked={state === 'checked'}\n        mixin={state === 'mixin'}\n        onChange={onCheckAllChange}\n      >\n        Check All\n      </Checkbox>\n\n      <Checkbox.Group value={checkedVal} onChange={onChange}>\n        {fruit.map((item) => (\n          <Checkbox key={item.value} name={item.value}>\n            {item.label}\n          </Checkbox>\n        ))}\n      </Checkbox.Group>\n      <p>Value: {JSON.stringify(checkedVal)}</p>\n    </>\n  )\n}",
                  jsx:
                    "import React, { useState, useMemo, useEffect } from 'react';\nimport { Checkbox } from 'are-visual';\nexport default () => {\n  const [fruit, setFruit] = useState([\n    {\n      value: 'apple',\n      label: 'Apple',\n    },\n    {\n      value: 'banana',\n      label: 'Banana',\n    },\n    {\n      value: 'grape',\n      label: 'Grape',\n    },\n  ]);\n  /** Default selection of `apple` */\n\n  const [checkedVal, setCheckedVal] = useState(['apple']);\n  const allCheckValue = useMemo(() => fruit.map(item => item.value), [fruit]);\n  const [state, setState] = useState('mixin');\n  useEffect(() => {\n    const checkAll = allCheckValue.every(item => checkedVal.includes(item));\n\n    if (checkAll) {\n      setState('checked');\n    } else {\n      setState(checkedVal.length === 0 ? 'unchecked' : 'mixin');\n    }\n  }, [checkedVal, allCheckValue]);\n\n  const onChange = v => {\n    setCheckedVal(v);\n  };\n\n  const onCheckAllChange = () => {\n    setCheckedVal(state === 'checked' ? [] : allCheckValue);\n  };\n\n  return (\n    <>\n      <Checkbox checked={state === 'checked'} mixin={state === 'mixin'} onChange={onCheckAllChange}>\n        Check All\n      </Checkbox>\n\n      <Checkbox.Group value={checkedVal} onChange={onChange}>\n        {fruit.map(item => (\n          <Checkbox key={item.value} name={item.value}>\n            {item.label}\n          </Checkbox>\n        ))}\n      </Checkbox.Group>\n      <p>Value: {JSON.stringify(checkedVal)}</p>\n    </>\n  );\n};\n",
                },
              },
              {
                desc:
                  '<div class="markdown"><p>Use with <code>Checkbox.Group</code>.</p></div>',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            c.a.createElement(s, null),
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
                  c.a.createElement('th', null, 'Props'),
                  c.a.createElement('th', null, 'Description'),
                  c.a.createElement('th', null, 'Type'),
                  c.a.createElement('th', null, 'Defaults'),
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
                    'Specifies whether the checkbox is selected.',
                    c.a.createElement('br', null),
                    'Although we do not qualify types (for type inference), ',
                    c.a.createElement('br', null),
                    'we recommend using the recommended primitive types on the right.',
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
                    'Used with ',
                    c.a.createElement('code', null, 'Checkbox.Group'),
                    c.a.createElement('br', null),
                    'Make unique identifiers within ',
                    c.a.createElement('code', null, 'Checkbox.Group'),
                    '.',
                    c.a.createElement('br', null),
                    'The original type on the right is recommended',
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
                    'Set selected and unselected status values.',
                    c.a.createElement('br', null),
                    'Recommend using the recommended type on the right.',
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
                    'The mixin checked state of checkbox.',
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
                  c.a.createElement('th', null, 'Props'),
                  c.a.createElement('th', null, 'Description'),
                  c.a.createElement('th', null, 'Type'),
                  c.a.createElement('th', null, 'Defaults'),
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
                    'Used to set this set of selected values.',
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
                    'The callback function that is triggered when the state changes.',
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
