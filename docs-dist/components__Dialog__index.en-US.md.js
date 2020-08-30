;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11, 7, 8, 9, 10],
  {
    '5Bio': function (e, n, t) {
      'use strict'
      t.r(n)
      var l = t('0Owb'),
        a = t('q1tI'),
        o = t.n(a),
        r = (t('B2uJ'), t('+su7'), t('qOys')),
        c = t.n(r),
        i = t('5Yjd'),
        u = t.n(i),
        m = o.a.memo(function () {
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
              { id: 'dialog' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#dialog' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Dialog',
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
            u.a,
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
            o.a.createElement(m, null),
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
            u.a,
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
              { id: 'close' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#close' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Close',
            ),
          ),
          o.a.createElement(
            u.a,
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
              { id: 'context--hooks' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#context--hooks' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Context & Hooks',
            ),
          ),
          o.a.createElement(
            u.a,
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
              ' is a function that includes the following methods.',
            ),
            o.a.createElement(
              'ul',
              null,
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.open'),
                ' Creates a dialog box.',
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.update'),
                ' Updates a dialog box via id.',
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.close'),
                ' Closes a dialog box via id.',
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog.clear'),
                ' Clears the dialog box in the current instance (the instance created by ',
                o.a.createElement('code', null, 'dialog'),
                ').',
              ),
            ),
            o.a.createElement(
              'p',
              null,
              'The ',
              o.a.createElement('code', null, 'useDialog'),
              ' Hook and ',
              o.a.createElement('code', null, 'dialog'),
              ' functions are identical.',
            ),
            o.a.createElement(c.a, {
              code:
                "import { useDialog } from 'are-visual'\n\nconst [dialogApi, DialogHolder] = useDialog()\n\nexport default () => {\n  reeturn(\n    <div>\n      {/* Instances created by hooks must be inserted in order to access the context and make contact with the current component. */}\n      <DialogHolder />\n    </div>,\n  )\n}\n",
              lang: 'ts',
            }),
            o.a.createElement(
              'p',
              null,
              o.a.createElement('code', null, 'useDialog'),
              ' Hook and ',
              o.a.createElement('code', null, 'dialog'),
              ' do not share the same internal data, except that they are used in the same way. Therefore, dialog boxes created by ',
              o.a.createElement('code', null, 'useDialog'),
              ' Hook cannot be closed and emptied by the ',
              o.a.createElement('code', null, 'dialog'),
              ' function, and vice versa.',
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
                  o.a.createElement('td', null, 'id (required)'),
                  o.a.createElement('td', null, 'Dialog Key.'),
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
                    'Dialog distance from the top.',
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
                    'Set ',
                    o.a.createElement('code', null, 'z-index'),
                  ),
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
                  o.a.createElement('td', null, 'Dialog title.'),
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
                  o.a.createElement('td', null, 'Dialog content.'),
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
                    'Display the top right corner close button.',
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
                    'Click on the mask to turn it off.',
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
                  o.a.createElement('td', null, 'Custom footer content.'),
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
                      'Cancel and Confirm buttons',
                    ),
                  ),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'confirmText'),
                  o.a.createElement('td', null, 'Text of the Confirm button.'),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'string'),
                    o.a.createElement('br', null),
                    'If it is a falsy value, it is not rendered.',
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'cancelText'),
                  o.a.createElement('td', null, 'Text of the Cancel button.'),
                  o.a.createElement(
                    'td',
                    null,
                    o.a.createElement('code', null, 'string'),
                    o.a.createElement('br', null),
                    'If it is a falsy value, it is not rendered.',
                  ),
                  o.a.createElement('td', null, '-'),
                ),
                o.a.createElement(
                  'tr',
                  null,
                  o.a.createElement('td', null, 'onClose'),
                  o.a.createElement('td', null, 'Callback Functions on Close.'),
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
                    'Cancel button callback function.',
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
                    'Confirm button callback function.',
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
                  o.a.createElement('td', null, 'The Cancel button props.'),
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
                  o.a.createElement('td', null, 'The Confirm button props.'),
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
          i = c.Provider,
          u = c.Consumer,
          m = () => {
            t.open({
              id: 'Consumer',
              title: 'Context',
              content: o.a.createElement(u, null, (e) => {
                var n = e.name
                return n
              }),
              confirmText: 'OK',
              zIndex: 2e3,
            })
          }
        return o.a.createElement(
          i,
          { value: { name: 'Are Visual Dialog.' } },
          o.a.createElement(a, null),
          o.a.createElement(r['Button'], { onClick: m }, 'Related'),
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
  },
])
