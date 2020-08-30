;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12, 7, 8, 9, 10],
  {
    'K+nK': function (e, n) {
      function t(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = t
    },
    aGB7: function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('q1tI'),
        a = t.n(l),
        o = t('/7QA')
      n['default'] = () => {
        var e = () => {
          o['dialog'].open({
            id: 'DialogKey_00',
            title: 'TIPS',
            content: 'Write some content in the blank space here.',
            zIndex: 2e3,
            cancelText: 'Cancel',
            confirmText: 'Confirm',
          })
        }
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(o['Button'], { onClick: e }, 'Display dialog'),
        )
      }
    },
    fp0Y: function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('tJVT'),
        a = t('q1tI'),
        o = t.n(a),
        r = t('/7QA'),
        c = Object(a['createContext'])({ name: 'default' })
      n['default'] = () => {
        var e = Object(r['useDialog'])(),
          n = Object(l['default'])(e, 2),
          t = n[0],
          a = n[1],
          u = c.Provider,
          m = c.Consumer,
          i = () => {
            t.open({
              id: 'Consumer',
              title: 'Context',
              content: o.a.createElement(m, null, (e) => {
                var n = e.name
                return n
              }),
              confirmText: 'OK',
              zIndex: 2e3,
            })
          }
        return o.a.createElement(
          u,
          { value: { name: 'Are Visual Dialog.' } },
          o.a.createElement(a, null),
          o.a.createElement(r['Button'], { onClick: i }, 'Related'),
        )
      }
    },
    lTwp: function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('q1tI'),
        a = t.n(l),
        o = t('/7QA')
      n['default'] = () => {
        var e = () => {
          o['dialog'].open({
            id: 'Dialog_01',
            title: 'Promise',
            content: 'onConfirm supports returning a Promise.',
            zIndex: 2e3,
            confirmText: 'Confirm',
            maskClosable: !1,
            showClose: !1,
            onConfirm() {
              return new Promise((e) => {
                setTimeout(() => {
                  e(), o['message'].success('SUCCESS')
                }, 3e3)
              })
            },
          })
        }
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(o['Button'], { onClick: e }, 'Click me'),
        )
      }
    },
    me2r: function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('q1tI'),
        a = t.n(l),
        o = t('/7QA')
      n['default'] = () => {
        var e = () => {
          var e = 'Dialog_'.concat(Date.now()),
            n = 5,
            t = setInterval(() => {
              ;(n -= 1),
                o['dialog'].update({
                  id: e,
                  content: 'Countdown '.concat(n, ' seconds to close.'),
                })
            }, 1e3)
          setTimeout(() => {
            o['dialog'].close(e), clearInterval(t)
          }, 1e3 * n),
            o['dialog'].open({
              id: e,
              title: 'Countdown',
              content: 'Countdown '.concat(n, ' seconds to close.'),
              zIndex: 2e3,
              confirmText: 'Close',
              maskClosable: !1,
              showClose: !1,
              onClose() {
                clearInterval(t)
              },
            })
        }
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(o['Button'], { onClick: e }, 'Manual shutdown'),
        )
      }
    },
    t0Ul: function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('0Owb'),
        a = t('q1tI'),
        o = t.n(a),
        r = (t('B2uJ'), t('+su7'), t('qOys')),
        c = t.n(r),
        u = t('5Yjd'),
        m = t.n(u),
        i = o.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            l = e(t('aGB7')),
            a = function () {
              return n['default'].createElement(l['default'], null)
            }
          return n['default'].createElement(a)
        }),
        d = o.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            l = e(t('lTwp')),
            a = function () {
              return n['default'].createElement(l['default'], null)
            }
          return n['default'].createElement(a)
        }),
        s = o.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            l = e(t('me2r')),
            a = function () {
              return n['default'].createElement(l['default'], null)
            }
          return n['default'].createElement(a)
        }),
        E = o.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            l = e(t('fp0Y')),
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
              { id: 'dialog-\u5bf9\u8bdd\u6846' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#dialog-\u5bf9\u8bdd\u6846' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Dialog \u5bf9\u8bdd\u6846',
            ),
            o.a.createElement(
              'h3',
              { id: '\u57fa\u7840\u7528\u6cd5' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u7840\u7528\u6cd5' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u7840\u7528\u6cd5',
            ),
          ),
          o.a.createElement(
            m.a,
            Object(l['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { dialog, Button } from 'are-visual'\n\nexport default () => {\n  const onClick = () => {\n    dialog.open({\n      id: 'DialogKey_00',\n      title: 'TIPS',\n      content: 'Write some content in the blank space here.',\n      zIndex: 2000,\n      cancelText: 'Cancel',\n      confirmText: 'Confirm',\n    })\n  }\n  return (\n    <>\n      <Button onClick={onClick}>Display dialog</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { dialog, Button } from 'are-visual';\nexport default () => {\n  const onClick = () => {\n    dialog.open({\n      id: 'DialogKey_00',\n      title: 'TIPS',\n      content: 'Write some content in the blank space here.',\n      zIndex: 2000,\n      cancelText: 'Cancel',\n      confirmText: 'Confirm',\n    });\n  };\n\n  return (\n    <>\n      <Button onClick={onClick}>Display dialog</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/basic',
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
              { id: 'promise' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#promise' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Promise',
            ),
          ),
          o.a.createElement(
            m.a,
            Object(l['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { dialog, message, Button } from 'are-visual'\n\nexport default () => {\n  const onClick = () => {\n    dialog.open({\n      id: 'Dialog_01',\n      title: 'Promise',\n      content: 'onConfirm supports returning a Promise.',\n      zIndex: 2000,\n      confirmText: 'Confirm',\n      maskClosable: false,\n      showClose: false,\n      onConfirm() {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            resolve()\n            message.success('SUCCESS')\n          }, 3000)\n        })\n      },\n    })\n  }\n  return (\n    <>\n      <Button onClick={onClick}>Click me</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { dialog, message, Button } from 'are-visual';\nexport default () => {\n  const onClick = () => {\n    dialog.open({\n      id: 'Dialog_01',\n      title: 'Promise',\n      content: 'onConfirm supports returning a Promise.',\n      zIndex: 2000,\n      confirmText: 'Confirm',\n      maskClosable: false,\n      showClose: false,\n\n      onConfirm() {\n        return new Promise(resolve => {\n          setTimeout(() => {\n            resolve();\n            message.success('SUCCESS');\n          }, 3000);\n        });\n      },\n    });\n  };\n\n  return (\n    <>\n      <Button onClick={onClick}>Click me</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/promise',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            o.a.createElement(d, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u624b\u52a8\u5173\u95ed' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u624b\u52a8\u5173\u95ed' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u624b\u52a8\u5173\u95ed',
            ),
          ),
          o.a.createElement(
            m.a,
            Object(l['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { dialog, Button } from 'are-visual'\n\nexport default () => {\n  const onClick = () => {\n    const KEY = `Dialog_${Date.now()}`\n    let countdownTime = 5\n    const timer = setInterval(() => {\n      countdownTime -= 1\n      dialog.update({\n        id: KEY,\n        content: `Countdown ${countdownTime} seconds to close.`,\n      })\n    }, 1000)\n\n    setTimeout(() => {\n      /** close dialog */\n      dialog.close(KEY)\n      clearInterval(timer)\n    }, countdownTime * 1000)\n\n    dialog.open({\n      id: KEY,\n      title: 'Countdown',\n      content: `Countdown ${countdownTime} seconds to close.`,\n      zIndex: 2000,\n      confirmText: 'Close',\n      maskClosable: false,\n      showClose: false,\n      onClose() {\n        clearInterval(timer)\n      },\n    })\n  }\n  return (\n    <>\n      <Button onClick={onClick}>Manual shutdown</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { dialog, Button } from 'are-visual';\nexport default () => {\n  const onClick = () => {\n    const KEY = `Dialog_${Date.now()}`;\n    let countdownTime = 5;\n    const timer = setInterval(() => {\n      countdownTime -= 1;\n      dialog.update({\n        id: KEY,\n        content: `Countdown ${countdownTime} seconds to close.`,\n      });\n    }, 1000);\n    setTimeout(() => {\n      /** close dialog */\n      dialog.close(KEY);\n      clearInterval(timer);\n    }, countdownTime * 1000);\n    dialog.open({\n      id: KEY,\n      title: 'Countdown',\n      content: `Countdown ${countdownTime} seconds to close.`,\n      zIndex: 2000,\n      confirmText: 'Close',\n      maskClosable: false,\n      showClose: false,\n\n      onClose() {\n        clearInterval(timer);\n      },\n    });\n  };\n\n  return (\n    <>\n      <Button onClick={onClick}>Manual shutdown</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/close',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            o.a.createElement(s, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h3',
              { id: '\u4e0a\u4e0b\u6587\uff08context\uff09-\u548c-hooks' },
              o.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u4e0a\u4e0b\u6587\uff08context\uff09-\u548c-hooks',
                },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4e0a\u4e0b\u6587\uff08Context\uff09 \u548c Hooks',
            ),
          ),
          o.a.createElement(
            m.a,
            Object(l['a'])(
              {
                source: {
                  tsx:
                    "import React, { createContext } from 'react'\nimport { useDialog, Button } from 'are-visual'\n\nconst DemoCtx = createContext({ name: 'default' })\n\nexport default () => {\n  const [dialog, DialogHolder] = useDialog()\n  const { Provider, Consumer } = DemoCtx\n\n  const onClick = () => {\n    dialog.open({\n      id: 'Consumer',\n      title: 'Context',\n      content: <Consumer>{({ name }) => name}</Consumer>,\n      confirmText: 'OK',\n      zIndex: 2000,\n    })\n  }\n\n  return (\n    <Provider value={{ name: 'Are Visual Dialog.' }}>\n      <DialogHolder />\n      <Button onClick={onClick}>Related</Button>\n    </Provider>\n  )\n}\n",
                  jsx:
                    "import React, { createContext } from 'react';\nimport { useDialog, Button } from 'are-visual';\nconst DemoCtx = createContext({\n  name: 'default',\n});\nexport default () => {\n  const [dialog, DialogHolder] = useDialog();\n  const { Provider, Consumer } = DemoCtx;\n\n  const onClick = () => {\n    dialog.open({\n      id: 'Consumer',\n      title: 'Context',\n      content: <Consumer>{({ name }) => name}</Consumer>,\n      confirmText: 'OK',\n      zIndex: 2000,\n    });\n  };\n\n  return (\n    <Provider\n      value={{\n        name: 'Are Visual Dialog.',\n      }}\n    >\n      <DialogHolder />\n      <Button onClick={onClick}>Related</Button>\n    </Provider>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/context',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            o.a.createElement(E, null),
          ),
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement('br', null),
            o.a.createElement(
              'p',
              null,
              o.a.createElement('code', null, 'dialog'),
              ' \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5305\u62ec\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a',
            ),
            o.a.createElement(
              'ul',
              null,
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.open'),
                ' \u521b\u5efa\u4e00\u4e2a\u5bf9\u8bdd\u6846\u3002',
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.update'),
                ' \u901a\u8fc7 id \u66f4\u65b0\u4e00\u4e2a\u5bf9\u8bdd\u6846\u3002',
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.close'),
                ' \u901a\u8fc7 id \u5173\u95ed\u4e00\u4e2a\u5bf9\u8bdd\u6846\u3002',
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.clear'),
                ' \u6e05\u7a7a\u5f53\u524d\u5b9e\u4f8b\uff08',
                o.a.createElement('code', null, 'dialog'),
                ' \u6240\u521b\u5efa\u7684\u5b9e\u4f8b\uff09\u4e2d\u7684\u5bf9\u8bdd\u6846\u3002',
              ),
            ),
            o.a.createElement(
              'p',
              null,
              o.a.createElement('code', null, 'useDialog'),
              ' Hook \u548c ',
              o.a.createElement('code', null, 'dialog'),
              ' \u51fd\u6570\u4e00\u81f4\u3002',
            ),
            o.a.createElement(c.a, {
              code:
                "import { useDialog } from 'are-visual'\n\nconst [dialogApi, DialogHolder] = useDialog()\n\nexport default () => {\n  reeturn(\n    <div>\n      {/* \u5fc5\u987b\u63d2\u5165 hooks \u6240\u521b\u5efa\u7684\u5b9e\u4f8b\uff0c\u624d\u80fd\u591f\u8bbf\u95ee\u5230\u4e0a\u4e0b\u6587\uff0c\u4e0e\u5f53\u524d\u7ec4\u4ef6\u4ea7\u751f\u8054\u7cfb\u3002 */}\n      <DialogHolder />\n    </div>,\n  )\n}\n",
              lang: 'ts',
            }),
            o.a.createElement(
              'p',
              null,
              o.a.createElement('code', null, 'useDialog'),
              ' Hook \u548c ',
              o.a.createElement('code', null, 'dialog'),
              ' \u9664\u4f7f\u7528\u65b9\u6cd5\u4e00\u81f4\u4ee5\u5916\uff0c\u5185\u90e8\u6570\u636e\u5e76\u4e0d\u4e92\u901a\u3002\u6240\u4ee5\uff0c\u7531 ',
              o.a.createElement('code', null, 'useDialog'),
              ' Hook \u521b\u5efa\u7684\u5bf9\u8bdd\u6846\u4e0d\u80fd\u591f\u88ab ',
              o.a.createElement('code', null, 'dialog'),
              ' \u51fd\u6570\u5173\u95ed\u3001\u6e05\u7a7a\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002',
            ),
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
                  o.a.createElement('th', null, '\u5c5e\u6027'),
                  o.a.createElement('th', null, '\u63cf\u8ff0'),
                  o.a.createElement('th', null, '\u7c7b\u578b'),
                  o.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              o.a.createElement(
                'tbody',
                null,
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'id\uff08\u5fc5\u586b\uff09'),
                  o.a.createElement(
                    'td',
                    null,
                    'Dialog \u552f\u4e00\u6807\u8bc6',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'string'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'top'),
                  o.a.createElement(
                    'td',
                    null,
                    'Dialog \u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e',
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
                  o.a.createElement('td', null, '\u5c42\u7ea7'),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'number'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'title'),
                  o.a.createElement('td', null, '\u6807\u9898\u5185\u5bb9'),
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
                  o.a.createElement('td', null, 'content'),
                  o.a.createElement('td', null, '\u5185\u5bb9'),
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
                    '\u663e\u793a\u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae',
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
                  o.a.createElement('td', null, 'maskClosable'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u70b9\u51fb\u8499\u5c42\u53ef\u5173\u95ed',
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
                    '\u81ea\u5b9a\u4e49 footer \u5185\u5bb9',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'React.ReactNode'),
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement(
                      'code',
                      null,
                      '\u53d6\u6d88\u3001\u786e\u8ba4\u6309\u94ae',
                    ),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'confirmText'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u786e\u8ba4\u6309\u94ae\u6587\u5b57',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'string'),
                    o.a.createElement('br', null),
                    '\u82e5\u4f20\u5165\u7684\u503c\u88ab\u5224\u65ad\u4e3a falsy\uff0c\u5219\u4e0d\u6e32\u67d3\u3002',
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'cancelText'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u53d6\u6d88\u6309\u94ae\u6587\u5b57',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'string'),
                    o.a.createElement('br', null),
                    '\u82e5\u4f20\u5165\u7684\u503c\u88ab\u5224\u65ad\u4e3a falsy\uff0c\u5219\u4e0d\u6e32\u67d3\u3002',
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
                    '\u5173\u95ed\u65f6\u7684\u56de\u8c03\u51fd\u6570',
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
                  o.a.createElement('td', null, 'onCancel'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u53d6\u6d88\u6309\u94ae\u56de\u8c03\u51fd\u6570',
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
                  o.a.createElement('td', null, 'onConfirm'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u786e\u8ba4\u6309\u94ae\u56de\u8c03\u51fd\u6570',
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
                  o.a.createElement('td', null, 'cancelButtonProps'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u53d6\u6d88\u6309\u94ae Props',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'ButtonProps'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'confirmButtonProps'),
                  o.a.createElement(
                    'td',
                    null,
                    '\u786e\u8ba4\u6309\u94ae Props',
                  ),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'ButtonProps'),
                  ),
                  o.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        )
      }
    },
  },
])
