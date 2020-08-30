;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [24, 23],
  {
    'K+nK': function (e, n) {
      function t(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = t
    },
    cQf2: function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('0Owb'),
        a = t('q1tI'),
        o = t.n(a),
        r = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        c = t.n(r),
        i = o.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            l = e(t('m35D')),
            a = function () {
              return n['default'].createElement(l['default'], null)
            }
          return n['default'].createElement(a)
        })
      n['default'] = function () {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h2',
              { id: 'modal' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#modal' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Modal',
            ),
            o.a.createElement(
              'h3',
              { id: 'basic-usage' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#basic-usage' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Basic usage',
            ),
          ),
          o.a.createElement(
            c.a,
            Object(l['a'])(
              {
                source: {
                  tsx:
                    'import React, { useState } from \'react\'\nimport { Modal, Button } from \'are-visual\'\n\nexport default () => {\n  const [visible, setVisible] = useState(false)\n  const [visible2, setVisible2] = useState(false)\n\n  return (\n    <>\n      <Modal\n        title="Content"\n        visible={visible}\n        onClose={() => {\n          setVisible(false)\n        }}\n        footer={[\n          <Button key="cancel" onClick={() => setVisible(false)}>\n            Cancel\n          </Button>,\n          <Button\n            key="confirm"\n            type="primary"\n            onClick={() => setVisible(false)}\n          >\n            Confirm\n          </Button>,\n        ]}\n        zIndex={1000}\n      >\n        <p>\n          Early in the day it was whispered that we should sail in a boat, only\n          thou and I, and never a soul in the world would know of this our\n          pilgrimage to no country and to no end.\n        </p>\n      </Modal>\n      <Modal\n        title="Line style"\n        visible={visible2}\n        onClose={() => {\n          setVisible2(false)\n        }}\n        footer={[\n          <Button key="cancel" onClick={() => setVisible2(false)}>\n            Cancel\n          </Button>,\n          <Button\n            key="confirm"\n            type="primary"\n            onClick={() => setVisible2(false)}\n          >\n            Confirm\n          </Button>,\n        ]}\n        zIndex={1000}\n        line\n      >\n        <p>\n          Early in the day it was whispered that we should sail in a boat, only\n          thou and I, and never a soul in the world would know of this our\n          pilgrimage to no country and to no end.\n        </p>\n      </Modal>\n      <Button onClick={() => setVisible(true)}>Display Modal</Button>\n      <Button onClick={() => setVisible2(true)}>Line Style</Button>\n    </>\n  )\n}\n',
                  jsx:
                    'import React, { useState } from \'react\';\nimport { Modal, Button } from \'are-visual\';\nexport default () => {\n  const [visible, setVisible] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  return (\n    <>\n      <Modal\n        title="Content"\n        visible={visible}\n        onClose={() => {\n          setVisible(false);\n        }}\n        footer={[\n          <Button key="cancel" onClick={() => setVisible(false)}>\n            Cancel\n          </Button>,\n          <Button key="confirm" type="primary" onClick={() => setVisible(false)}>\n            Confirm\n          </Button>,\n        ]}\n        zIndex={1000}\n      >\n        <p>\n          Early in the day it was whispered that we should sail in a boat, only thou and I, and\n          never a soul in the world would know of this our pilgrimage to no country and to no end.\n        </p>\n      </Modal>\n      <Modal\n        title="Line style"\n        visible={visible2}\n        onClose={() => {\n          setVisible2(false);\n        }}\n        footer={[\n          <Button key="cancel" onClick={() => setVisible2(false)}>\n            Cancel\n          </Button>,\n          <Button key="confirm" type="primary" onClick={() => setVisible2(false)}>\n            Confirm\n          </Button>,\n        ]}\n        zIndex={1000}\n        line\n      >\n        <p>\n          Early in the day it was whispered that we should sail in a boat, only thou and I, and\n          never a soul in the world would know of this our pilgrimage to no country and to no end.\n        </p>\n      </Modal>\n      <Button onClick={() => setVisible(true)}>Display Modal</Button>\n      <Button onClick={() => setVisible2(true)}>Line Style</Button>\n    </>\n  );\n};\n',
                },
              },
              {
                path: '/_demos/basic-2',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            o.a.createElement(i, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: 'api' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            o.a.createElement(
              'table',
              null,
              o.a.createElement(
                'thead',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('th', null, 'Props'),
                  o.a.createElement('th', null, 'Description'),
                  o.a.createElement('th', null, 'Type'),
                  o.a.createElement('th', null, 'Defaults'),
                ),
              ),
              o.a.createElement(
                'tbody',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'visible'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u6a21\u6001\u6846\u662f\u5426\u53ef\u89c1\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'boolean'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'false'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'top'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'string'),
                    ' | ',
                    o.a.createElement('code', null, 'number'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, '20%'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'zIndex'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u6a21\u6001\u6846 ',
                    o.a.createElement('code', null, 'z-index'),
                    '\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'number'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, '1'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'line'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u5206\u5272\u7ebf\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'boolean'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'false'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'title'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u6a21\u6001\u6846\u6807\u9898\uff08header \u90e8\u5206\uff09\u82e5\u4f20\u5165\u7684\u7c7b\u578b\u4e3a ',
                    o.a.createElement('code', null, 'string'),
                    ' \u5219\u663e\u793a\u4e3a\u6807\u9898\uff0c\u5426\u5219\u66ff\u6362 ',
                    o.a.createElement('code', null, 'header'),
                    ' \u90e8\u5206',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'React.ReactNode'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'showClose'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'boolean'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'true'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'lazyRender'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u61d2\u6e32\u67d3-\u9875\u9762\u521d\u59cb\u5316\u65f6\u4e0d\u6e32\u67d3\u7ec4\u4ef6\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'boolean'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'false'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'maskClosable'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u542f\u7528\u70b9\u51fb\u8499\u5c42\u5173\u95ed\u6a21\u6001\u6846\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'boolean'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'true'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'escClosable'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u542f\u7528\u6309\u4e0b ',
                    o.a.createElement('code', null, 'ESC'),
                    ' \u5173\u95ed\u6a21\u6001\u6846\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'boolean'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'true'),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'footer'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u9875\u811a\u5185\u5bb9\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'React.ReactNode'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'onClose'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u5173\u95ed\u6309\u94ae\u3001\u70b9\u51fb\u8499\u5c42\u3001ESC \u6309\u952e\u89e6\u53d1\u4e8b\u4ef6\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, '() => void'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'onClosed'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u6a21\u6001\u6846\u5173\u95ed\u540e\u7684\u56de\u8c03\u51fd\u6570\u3002',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, '() => void'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        )
      }
    },
    m35D: function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('tJVT'),
        a = t('q1tI'),
        o = t.n(a),
        r = t('/7QA')
      n['default'] = () => {
        var e = Object(a['useState'])(!1),
          n = Object(l['default'])(e, 2),
          t = n[0],
          c = n[1],
          i = Object(a['useState'])(!1),
          u = Object(l['default'])(i, 2),
          d = u[0],
          s = u[1]
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            r['Modal'],
            {
              title: 'Content',
              visible: t,
              onClose: () => {
                c(!1)
              },
              footer: [
                o.a.createElement(
                  r['Button'],
                  { key: 'cancel', onClick: () => c(!1) },
                  'Cancel',
                ),
                o.a.createElement(
                  r['Button'],
                  { key: 'confirm', type: 'primary', onClick: () => c(!1) },
                  'Confirm',
                ),
              ],
              zIndex: 1e3,
            },
            o.a.createElement(
              'p',
              null,
              'Early in the day it was whispered that we should sail in a boat, only thou and I, and never a soul in the world would know of this our pilgrimage to no country and to no end.',
            ),
          ),
          o.a.createElement(
            r['Modal'],
            {
              title: 'Line style',
              visible: d,
              onClose: () => {
                s(!1)
              },
              footer: [
                o.a.createElement(
                  r['Button'],
                  { key: 'cancel', onClick: () => s(!1) },
                  'Cancel',
                ),
                o.a.createElement(
                  r['Button'],
                  { key: 'confirm', type: 'primary', onClick: () => s(!1) },
                  'Confirm',
                ),
              ],
              zIndex: 1e3,
              line: !0,
            },
            o.a.createElement(
              'p',
              null,
              'Early in the day it was whispered that we should sail in a boat, only thou and I, and never a soul in the world would know of this our pilgrimage to no country and to no end.',
            ),
          ),
          o.a.createElement(
            r['Button'],
            { onClick: () => c(!0) },
            'Display Modal',
          ),
          o.a.createElement(
            r['Button'],
            { onClick: () => s(!0) },
            'Line Style',
          ),
        )
      }
    },
  },
])
