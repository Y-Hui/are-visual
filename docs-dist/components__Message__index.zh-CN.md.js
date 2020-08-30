;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [22, 13, 14, 15, 16, 17, 18, 19, 20],
  {
    '3ZDe': function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        l = t.n(a),
        s = t('/7QA')
      n['default'] = () => {
        var e = () => {
            s['message'].info('Normal Message')
          },
          n = () => {
            s['message'].warn('Warn Message')
          },
          t = () => {
            s['message'].err('Err Message')
          },
          a = () => {
            s['message'].success('Success Message')
          }
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(s['Button'], { onClick: e }, 'Normal'),
          l.a.createElement(s['Button'], { onClick: n }, 'Warn'),
          l.a.createElement(s['Button'], { onClick: t }, 'Err'),
          l.a.createElement(s['Button'], { onClick: a }, 'Success'),
        )
      }
    },
    Chmo: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        l = t.n(a),
        s = t('/7QA')
      n['default'] = () => {
        var e = () => {
            s['message'].info('Keep display message.', 0)
          },
          n = () => {
            s['message'].info('Five seconds message.', 5e3)
          },
          t = () => {
            s['message'].info('I hava a close button.', 0, {
              showClose: !0,
              onClose: () => {
                s['message'].warn("I'm callback message")
              },
            })
          },
          a = () => {
            var e = s['message'].info('Message can be closed manually.', 5e3),
              n = e.close
            setTimeout(n, 1e3)
          }
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(s['Button'], { onClick: e }, 'Keep display'),
          l.a.createElement(s['Button'], { onClick: n }, 'Five seconds'),
          l.a.createElement(s['Button'], { onClick: t }, 'Close button'),
          l.a.createElement(s['Button'], { onClick: a }, 'Manual shutdown'),
        )
      }
    },
    D2yx: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('tJVT'),
        l = t('q1tI'),
        s = t.n(l),
        r = t('/7QA'),
        c = Object(l['createContext'])({ name: 'default' })
      n['default'] = () => {
        var e = Object(r['useMessage'])(),
          n = Object(a['default'])(e, 2),
          t = n[0],
          l = n[1],
          o = c.Provider,
          u = c.Consumer,
          m = () => {
            t.success(
              s.a.createElement(u, null, (e) => {
                var n = e.name
                return n
              }),
            )
          }
        return s.a.createElement(
          o,
          { value: { name: 'Are Vision Message.' } },
          s.a.createElement(l, null),
          s.a.createElement(r['Button'], { onClick: m }, 'Related'),
        )
      }
    },
    Jzt6: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('0Owb'),
        l = t('q1tI'),
        s = t.n(l),
        r = (t('B2uJ'), t('+su7'), t('qOys')),
        c = t.n(r),
        o = t('5Yjd'),
        u = t.n(o),
        m = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('U2Y0')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        }),
        i = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('3ZDe')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        }),
        d = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('Chmo')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        }),
        E = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('fOs2')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        }),
        g = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('MgYf')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        }),
        f = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('D2yx')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        }),
        p = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('uUzz')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        }),
        B = s.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('uF94')),
            l = function () {
              return n['default'].createElement(a['default'], null)
            }
          return n['default'].createElement(l)
        })
      n['default'] = function () {
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h2',
              { id: 'message-\u63d0\u793a\u6d88\u606f' },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#message-\u63d0\u793a\u6d88\u606f',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Message \u63d0\u793a\u6d88\u606f',
            ),
            s.a.createElement(
              'h3',
              { id: '\u57fa\u7840\u7528\u6cd5' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u7840\u7528\u6cd5' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u7840\u7528\u6cd5',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { message, Button } from 'are-visual'\n\nexport default () => {\n  const showMessage = () => {\n    message.info('Hello Are Vision.')\n  }\n  return (\n    <>\n      <Button onClick={showMessage}>Normal Message</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { message, Button } from 'are-visual';\nexport default () => {\n  const showMessage = () => {\n    message.info('Hello Are Vision.');\n  };\n\n  return (\n    <>\n      <Button onClick={showMessage}>Normal Message</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/basic-1',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(m, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              {
                id:
                  '\u63d0\u793a\u7c7b\u578b\uff08\u522b\u540d\u51fd\u6570\uff09',
              },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href:
                    '#\u63d0\u793a\u7c7b\u578b\uff08\u522b\u540d\u51fd\u6570\uff09',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u63d0\u793a\u7c7b\u578b\uff08\u522b\u540d\u51fd\u6570\uff09',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { message, Button } from 'are-visual'\n\nexport default () => {\n  const normal = () => {\n    message.info('Normal Message')\n  }\n  const warn = () => {\n    message.warn('Warn Message')\n  }\n  const err = () => {\n    message.err('Err Message')\n  }\n  const success = () => {\n    message.success('Success Message')\n  }\n\n  return (\n    <>\n      <Button onClick={normal}>Normal</Button>\n      <Button onClick={warn}>Warn</Button>\n      <Button onClick={err}>Err</Button>\n      <Button onClick={success}>Success</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { message, Button } from 'are-visual';\nexport default () => {\n  const normal = () => {\n    message.info('Normal Message');\n  };\n\n  const warn = () => {\n    message.warn('Warn Message');\n  };\n\n  const err = () => {\n    message.err('Err Message');\n  };\n\n  const success = () => {\n    message.success('Success Message');\n  };\n\n  return (\n    <>\n      <Button onClick={normal}>Normal</Button>\n      <Button onClick={warn}>Warn</Button>\n      <Button onClick={err}>Err</Button>\n      <Button onClick={success}>Success</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/type',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(i, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              { id: '\u663e\u793a\u65f6\u957f' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u663e\u793a\u65f6\u957f' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u663e\u793a\u65f6\u957f',
            ),
            s.a.createElement(
              'p',
              null,
              '\u63d0\u793a\u6d88\u606f\u9ed8\u8ba4\u663e\u793a\u65f6\u957f\u4e3a ',
              s.a.createElement('code', null, '3000'),
              ' \u6beb\u79d2\u3002\u4f60\u53ef\u4ee5\u4f20\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6765\u4fee\u6539\u65f6\u957f\uff0c\u82e5\u503c\u4e3a ',
              s.a.createElement('code', null, '0'),
              ' \u5219\u6301\u7eed\u663e\u793a\u3002',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { message, Button } from 'are-visual'\n\nexport default () => {\n  const keepDisplay = () => {\n    message.info('Keep display message.', 0)\n  }\n\n  const fiveSeconds = () => {\n    message.info('Five seconds message.', 5000)\n  }\n\n  const closeButton = () => {\n    message.info('I hava a close button.', 0, {\n      showClose: true,\n      onClose: () => {\n        message.warn(`I'm callback message`)\n      },\n    })\n  }\n\n  const manualShutdown = () => {\n    const { close } = message.info('Message can be closed manually.', 5000)\n    setTimeout(close, 1000)\n  }\n\n  return (\n    <>\n      <Button onClick={keepDisplay}>Keep display</Button>\n      <Button onClick={fiveSeconds}>Five seconds</Button>\n      <Button onClick={closeButton}>Close button</Button>\n      <Button onClick={manualShutdown}>Manual shutdown</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { message, Button } from 'are-visual';\nexport default () => {\n  const keepDisplay = () => {\n    message.info('Keep display message.', 0);\n  };\n\n  const fiveSeconds = () => {\n    message.info('Five seconds message.', 5000);\n  };\n\n  const closeButton = () => {\n    message.info('I hava a close button.', 0, {\n      showClose: true,\n      onClose: () => {\n        message.warn(`I'm callback message`);\n      },\n    });\n  };\n\n  const manualShutdown = () => {\n    const { close } = message.info('Message can be closed manually.', 5000);\n    setTimeout(close, 1000);\n  };\n\n  return (\n    <>\n      <Button onClick={keepDisplay}>Keep display</Button>\n      <Button onClick={fiveSeconds}>Five seconds</Button>\n      <Button onClick={closeButton}>Close button</Button>\n      <Button onClick={manualShutdown}>Manual shutdown</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/duration',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(d, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              { id: '\u6e05\u7a7a\u63d0\u793a\u6d88\u606f' },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u6e05\u7a7a\u63d0\u793a\u6d88\u606f',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6e05\u7a7a\u63d0\u793a\u6d88\u606f',
            ),
            s.a.createElement(
              'p',
              null,
              '\u6ce8\u610f\uff1a',
              s.a.createElement('code', null, 'clear'),
              ' \u65b9\u6cd5\u6e05\u7a7a\u7684\u662f\u5f53\u524d\u51fd\u6570\u6240\u5728\u7684\u4e0a\u4e0b\u6587\u7684\u63d0\u793a\u6d88\u606f\u3002',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { message, useMessage, Button } from 'are-visual'\n\nexport default () => {\n  const [msgApi, Message] = useMessage()\n\n  const independentContext = () => {\n    /** Because this is an independent context */\n    msgApi.err('I will not be cleared by the default function', 0)\n  }\n\n  const keepDisplay = () => {\n    message.info('Keep display message.', 0)\n  }\n\n  const clear = () => {\n    message.clear()\n  }\n\n  return (\n    <>\n      <Message />\n      <Button onClick={keepDisplay}>Keep display</Button>\n      <Button onClick={independentContext}>Independent context</Button>\n      <Button onClick={clear}>Clear all</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { message, useMessage, Button } from 'are-visual';\nexport default () => {\n  const [msgApi, Message] = useMessage();\n\n  const independentContext = () => {\n    /** Because this is an independent context */\n    msgApi.err('I will not be cleared by the default function', 0);\n  };\n\n  const keepDisplay = () => {\n    message.info('Keep display message.', 0);\n  };\n\n  const clear = () => {\n    message.clear();\n  };\n\n  return (\n    <>\n      <Message />\n      <Button onClick={keepDisplay}>Keep display</Button>\n      <Button onClick={independentContext}>Independent context</Button>\n      <Button onClick={clear}>Clear all</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/clear',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(E, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              { id: '\u52a0\u8f7d\u72b6\u6001\u4e0e\u66f4\u65b0' },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u52a0\u8f7d\u72b6\u6001\u4e0e\u66f4\u65b0',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u52a0\u8f7d\u72b6\u6001\u4e0e\u66f4\u65b0',
            ),
            s.a.createElement(
              'p',
              null,
              '\u6307\u5b9a ',
              s.a.createElement('code', null, 'id'),
              ' \u7528\u4e8e\u66f4\u65b0',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { message, Button } from 'are-visual'\n\nconst key = 'LOADING_MESSAGE_KEY'\n\nexport default () => {\n  const loading = () => {\n    message.loading('Loading...', 0, {\n      id: key,\n    })\n\n    // update\n    setTimeout(() => {\n      message.success('Loaded!', 400, {\n        id: key,\n      })\n    }, 2000)\n  }\n  return (\n    <>\n      <Button onClick={loading}>Loading</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { message, Button } from 'are-visual';\nconst key = 'LOADING_MESSAGE_KEY';\nexport default () => {\n  const loading = () => {\n    message.loading('Loading...', 0, {\n      id: key,\n    }); // update\n\n    setTimeout(() => {\n      message.success('Loaded!', 400, {\n        id: key,\n      });\n    }, 2000);\n  };\n\n  return (\n    <>\n      <Button onClick={loading}>Loading</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/loading',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(g, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              { id: '\u5173\u8054\u4e0a\u4e0b\u6587' },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u5173\u8054\u4e0a\u4e0b\u6587',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5173\u8054\u4e0a\u4e0b\u6587',
            ),
            s.a.createElement(
              'p',
              null,
              '\u4f60\u53ef\u4ee5\u901a\u8fc7 ',
              s.a.createElement('code', null, 'useMessage'),
              ' hooks \u521b\u5efa\u4e00\u4e2a\u4e0a\u4e0b\u6587\uff0c\u4e0e\u4f60\u7684 ',
              s.a.createElement('code', null, 'Provider'),
              ' \u76f8\u4e92\u5173\u8054\u3002',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React, { createContext } from 'react'\nimport { useMessage, Button } from 'are-visual'\n\nconst DemoCtx = createContext({ name: 'default' })\n\nexport default () => {\n  const [msgApi, MessageHolder] = useMessage()\n  const { Provider, Consumer } = DemoCtx\n\n  const onClick = () => {\n    msgApi.success(<Consumer>{({ name }) => name}</Consumer>)\n  }\n\n  return (\n    <Provider value={{ name: 'Are Vision Message.' }}>\n      <MessageHolder />\n      <Button onClick={onClick}>Related</Button>\n    </Provider>\n  )\n}\n",
                  jsx:
                    "import React, { createContext } from 'react';\nimport { useMessage, Button } from 'are-visual';\nconst DemoCtx = createContext({\n  name: 'default',\n});\nexport default () => {\n  const [msgApi, MessageHolder] = useMessage();\n  const { Provider, Consumer } = DemoCtx;\n\n  const onClick = () => {\n    msgApi.success(<Consumer>{({ name }) => name}</Consumer>);\n  };\n\n  return (\n    <Provider\n      value={{\n        name: 'Are Vision Message.',\n      }}\n    >\n      <MessageHolder />\n      <Button onClick={onClick}>Related</Button>\n    </Provider>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/context-1',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(f, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              { id: '\u5b8c\u6574\u5199\u6cd5' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5b8c\u6574\u5199\u6cd5' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5b8c\u6574\u5199\u6cd5',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { message, Button } from 'are-visual'\n\nexport default () => {\n  const callMessage = () => {\n    message.call({\n      type: 'normal',\n      content: 'Call Message',\n      duration: 5000,\n      loading: true,\n      showClose: true,\n    })\n  }\n  return (\n    <>\n      <Button onClick={callMessage}>Call Message</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { message, Button } from 'are-visual';\nexport default () => {\n  const callMessage = () => {\n    message.call({\n      type: 'normal',\n      content: 'Call Message',\n      duration: 5000,\n      loading: true,\n      showClose: true,\n    });\n  };\n\n  return (\n    <>\n      <Button onClick={callMessage}>Call Message</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/call',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(p, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              { id: '\u94fe\u5f0f\u8c03\u7528' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u94fe\u5f0f\u8c03\u7528' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u94fe\u5f0f\u8c03\u7528',
            ),
          ),
          s.a.createElement(
            u.a,
            Object(a['a'])(
              {
                source: {
                  tsx:
                    "import React from 'react'\nimport { message, Button } from 'are-visual'\n\nexport default () => {\n  const showMessage = () => {\n    message\n      .info('Show Message.', 2000)\n      .then(() => message.info('First callback.', 2000))\n      .then(() => message.success('Second callback.'))\n  }\n  return (\n    <>\n      <Button onClick={showMessage}>Chain call</Button>\n    </>\n  )\n}\n",
                  jsx:
                    "import React from 'react';\nimport { message, Button } from 'are-visual';\nexport default () => {\n  const showMessage = () => {\n    message\n      .info('Show Message.', 2000)\n      .then(() => message.info('First callback.', 2000))\n      .then(() => message.success('Second callback.'));\n  };\n\n  return (\n    <>\n      <Button onClick={showMessage}>Chain call</Button>\n    </>\n  );\n};\n",
                },
              },
              {
                path: '/_demos/chain-call',
                dependencies: { 'are-visual': '1.0.0' },
                files: {},
              },
            ),
            s.a.createElement(B, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              {
                id:
                  '\u522b\u540d\u51fd\u6570\u4f7f\u7528\u65b9\u5f0f\u4e0e\u53c2\u6570\uff1a',
              },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href:
                    '#\u522b\u540d\u51fd\u6570\u4f7f\u7528\u65b9\u5f0f\u4e0e\u53c2\u6570\uff1a',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u522b\u540d\u51fd\u6570\u4f7f\u7528\u65b9\u5f0f\u4e0e\u53c2\u6570\uff1a',
            ),
            s.a.createElement(
              'ul',
              null,
              s.a.createElement(
                'li',
                null,
                s.a.createElement(
                  'p',
                  null,
                  s.a.createElement(
                    'code',
                    null,
                    'message.info(content, [duration], [props])',
                  ),
                ),
              ),
              s.a.createElement(
                'li',
                null,
                s.a.createElement(
                  'p',
                  null,
                  s.a.createElement(
                    'code',
                    null,
                    'message.warn(content, [duration], [props])',
                  ),
                ),
              ),
              s.a.createElement(
                'li',
                null,
                s.a.createElement(
                  'p',
                  null,
                  s.a.createElement(
                    'code',
                    null,
                    'message.err(content, [duration], [props])',
                  ),
                ),
              ),
              s.a.createElement(
                'li',
                null,
                s.a.createElement(
                  'p',
                  null,
                  s.a.createElement(
                    'code',
                    null,
                    'message.success(content, [duration], [props])',
                  ),
                ),
              ),
            ),
            s.a.createElement(
              'p',
              null,
              '\u6bcf\u4e2a\u522b\u540d\u51fd\u6570\u7684\u8fd4\u56de\u503c\u90fd\u5305\u542b\u4e00\u4e2a\u5173\u95ed',
              s.a.createElement(
                'strong',
                null,
                '\u5f53\u524d\u63d0\u793a\u6d88\u606f',
              ),
              '\u7684\u51fd\u6570',
            ),
            s.a.createElement(c.a, {
              code:
                "import { message } from 'are-visual'\n\nconst { close } = message.info('Info Message')\n\n// \u8fd9\u4e2a `close` \u4fbf\u662f\u5173\u95ed\u6b64\u6761\u63d0\u793a\u6d88\u606f\u7684\u51fd\u6570\n",
              lang: 'ts',
            }),
            s.a.createElement('br', null),
            s.a.createElement(
              'p',
              null,
              s.a.createElement(
                'strong',
                null,
                '\u6ce8\u610f\uff1a\u4e00\u65e6\u4f7f\u7528 ',
                s.a.createElement('code', null, '\u94fe\u5f0f\u8c03\u7528'),
                ' \u7684 message \u51fd\u6570\uff0c\u90a3\u4e48 ',
                s.a.createElement('code', null, 'close'),
                ' \u51fd\u6570\u4fbf\u4e0d\u53d7\u652f\u6301\u3002',
              ),
            ),
            s.a.createElement(c.a, {
              code:
                "import { message } from 'are-visual'\n\n// Error: \u6b64\u65f6\u7684 close \u4e3a undefined\nconst { close } = message.info('Info Message', 0).then(() => {\n  console.log('Callback')\n})\n",
              lang: 'ts',
            }),
            s.a.createElement(
              'p',
              null,
              '\u6bcf\u4e00\u4e2a\u522b\u540d\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\u90fd\u7ee7\u627f\u81ea\u4e00\u4e2a ',
              s.a.createElement('code', null, 'PromiseLike'),
              ' \u7c7b\u578b\uff0c\u8c03\u7528 ',
              s.a.createElement('code', null, 'then'),
              ' \u51fd\u6570\u65f6\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u771f\u6b63\u7684 ',
              s.a.createElement('code', null, 'Promise'),
              '\uff0c',
              s.a.createElement('code', null, 'Are'),
              ' \u4ee5\u6b64\u79cd\u65b9\u5f0f\u5b9e\u73b0\u7684\u94fe\u5f0f\u8c03\u7528\uff0c',
              s.a.createElement('code', null, 'then'),
              ' \u51fd\u6570\u8c03\u7528\u5b8c\u6bd5\u540e\uff0c\u8fd4\u56de\u503c\u5185\u5df2\u7ecf\u4e0d\u5b58\u5728\u8fd9\u6837\u4e00\u4e2a ',
              s.a.createElement('code', null, 'close'),
              ' \u51fd\u6570\u4e86\u3002\u6240\u4ee5 ',
              s.a.createElement('code', null, '\u94fe\u5f0f\u8c03\u7528'),
              ' \u548c ',
              s.a.createElement('code', null, 'close'),
              ' \u51fd\u6570\u53ea\u80fd\u53d6\u5176\u4e00\uff0c\u4e8c\u8005\u4e0d\u53ef\u517c\u5f97\u3002',
            ),
            s.a.createElement(
              'h4',
              { id: 'props' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#props' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Props',
            ),
            s.a.createElement(
              'table',
              null,
              s.a.createElement(
                'thead',
                null,
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('th', null, '\u5c5e\u6027'),
                  s.a.createElement('th', null, '\u63cf\u8ff0'),
                  s.a.createElement('th', null, '\u662f\u5426\u5fc5\u586b'),
                  s.a.createElement('th', null, '\u7c7b\u578b'),
                  s.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              s.a.createElement(
                'tbody',
                null,
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'id'),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'Message'),
                    ' \u552f\u4e00\u6807\u8bc6',
                  ),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'number'),
                    ' | ',
                    s.a.createElement('code', null, 'string'),
                  ),
                  s.a.createElement('td', null),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'type'),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'Message'),
                    ' \u6837\u5f0f\u7c7b\u578b',
                  ),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'normal'),
                    ' | ',
                    s.a.createElement('code', null, 'primary'),
                    ' | ',
                    s.a.createElement('code', null, 'warn'),
                    ' |',
                    s.a.createElement('br', null),
                    ' ',
                    s.a.createElement('code', null, 'error'),
                    ' | ',
                    s.a.createElement('code', null, 'success'),
                  ),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'normal'),
                  ),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'content'),
                  s.a.createElement('td', null, '\u63d0\u793a\u5185\u5bb9'),
                  s.a.createElement('td', null, '\u662f'),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'ReactNode'),
                  ),
                  s.a.createElement('td', null),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'duration'),
                  s.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u65f6\u957f\uff08\u6beb\u79d2\uff09',
                    s.a.createElement('br', null),
                    '\u82e5\u503c\u4e3a ',
                    s.a.createElement('code', null, '0'),
                    ' \u5219\u6301\u7eed\u663e\u793a',
                  ),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'number'),
                  ),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, '3000'),
                  ),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'showClose'),
                  s.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u5173\u95ed\u6309\u94ae',
                  ),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'boolean'),
                  ),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'false'),
                  ),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'loading'),
                  s.a.createElement(
                    'td',
                    null,
                    '\u5207\u6362\u4e3a\u52a0\u8f7d\u72b6\u6001',
                  ),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'boolean'),
                  ),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'false'),
                  ),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'onClose'),
                  s.a.createElement(
                    'td',
                    null,
                    '\u63d0\u793a\u5185\u5bb9\u5173\u95ed\u65f6\u7684\u56de\u8c03',
                  ),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, '() => void'),
                  ),
                  s.a.createElement('td', null),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'className'),
                  s.a.createElement('td', null, '\u81ea\u5b9a\u4e49 CSS class'),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'string'),
                  ),
                  s.a.createElement('td', null),
                ),
                s.a.createElement(
                  'tr',
                  null,
                  s.a.createElement('td', null, 'style'),
                  s.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u884c\u5185\u6837\u5f0f',
                  ),
                  s.a.createElement('td', null),
                  s.a.createElement(
                    'td',
                    null,
                    s.a.createElement('code', null, 'CSSProperties'),
                  ),
                  s.a.createElement('td', null),
                ),
              ),
            ),
            s.a.createElement(
              'h3',
              { id: 'clear-\u6e05\u7a7a\u51fd\u6570' },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#clear-\u6e05\u7a7a\u51fd\u6570',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              s.a.createElement('code', null, 'clear'),
              ' \u6e05\u7a7a\u51fd\u6570',
            ),
            s.a.createElement(
              'p',
              null,
              '\u6b64\u51fd\u6570\u6e05\u7a7a\u7684\u662f ',
              s.a.createElement('code', null, 'message \u5b9e\u4f8b'),
              ' \u7684\u63d0\u793a\u6d88\u606f\u3002\u8fd4\u56de ',
              s.a.createElement('code', null, 'message'),
              ' \u51fd\u6570\u3002',
            ),
            s.a.createElement(c.a, {
              code: "import { message } from 'are-visual'\n\nmessage.clear()\n",
              lang: 'ts',
            }),
            s.a.createElement('p', null, '\u94fe\u5f0f\u8c03\u7528\uff1a'),
            s.a.createElement(c.a, {
              code:
                "import { message } from 'are-visual'\n\nmessage.clear().success('\u94fe\u5f0f\u8c03\u7528')\n",
              lang: 'ts',
            }),
            s.a.createElement('br', null),
            s.a.createElement(
              'p',
              null,
              '\u5982\u679c\u4f7f\u7528 ',
              s.a.createElement('code', null, 'useMessage'),
              ' \u90a3\u4e48\u4f60\u5e94\u8be5\u8fd9\u6837\u5199\uff1a',
            ),
            s.a.createElement(c.a, {
              code:
                "import { useMessage } from 'are-visual'\n\nexport default () => {\n  const [msgApi, MessageHolder] = useMessage()\n  return (\n    <>\n      <MessageHolder />\n      <Button onClick={() => msgApi.clear()}>Clear</Button>\n    </>\n  )\n}\n",
              lang: 'ts',
            }),
            s.a.createElement(
              'p',
              null,
              s.a.createElement('code', null, 'useMessage'),
              ' Hook \u548c ',
              s.a.createElement('code', null, 'message'),
              ' \u9664\u4f7f\u7528\u65b9\u6cd5\u4e00\u81f4\u4ee5\u5916\uff0c\u5185\u90e8\u6570\u636e\u5e76\u4e0d\u4e92\u901a\u3002\u6240\u4ee5\uff0c\u7531 ',
              s.a.createElement('code', null, 'useMessage'),
              ' Hook \u521b\u5efa\u7684\u63d0\u793a\u6d88\u606f\u4e0d\u80fd\u591f\u88ab ',
              s.a.createElement('code', null, 'message'),
              ' \u51fd\u6570\u5173\u95ed\u3001\u6e05\u7a7a\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002',
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
    MgYf: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        l = t.n(a),
        s = t('/7QA'),
        r = 'LOADING_MESSAGE_KEY'
      n['default'] = () => {
        var e = () => {
          s['message'].loading('Loading...', 0, { id: r }),
            setTimeout(() => {
              s['message'].success('Loaded!', 400, { id: r })
            }, 2e3)
        }
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(s['Button'], { onClick: e }, 'Loading'),
        )
      }
    },
    U2Y0: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        l = t.n(a),
        s = t('/7QA')
      n['default'] = () => {
        var e = () => {
          s['message'].info('Hello Are Vision.')
        }
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(s['Button'], { onClick: e }, 'Normal Message'),
        )
      }
    },
    fOs2: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('tJVT'),
        l = t('q1tI'),
        s = t.n(l),
        r = t('/7QA')
      n['default'] = () => {
        var e = Object(r['useMessage'])(),
          n = Object(a['default'])(e, 2),
          t = n[0],
          l = n[1],
          c = () => {
            t.err('I will not be cleared by the default function', 0)
          },
          o = () => {
            r['message'].info('Keep display message.', 0)
          },
          u = () => {
            r['message'].clear()
          }
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(l, null),
          s.a.createElement(r['Button'], { onClick: o }, 'Keep display'),
          s.a.createElement(r['Button'], { onClick: c }, 'Independent context'),
          s.a.createElement(r['Button'], { onClick: u }, 'Clear all'),
        )
      }
    },
    uF94: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        l = t.n(a),
        s = t('/7QA')
      n['default'] = () => {
        var e = () => {
          s['message']
            .info('Show Message.', 2e3)
            .then(() => s['message'].info('First callback.', 2e3))
            .then(() => s['message'].success('Second callback.'))
        }
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(s['Button'], { onClick: e }, 'Chain call'),
        )
      }
    },
    uUzz: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        l = t.n(a),
        s = t('/7QA')
      n['default'] = () => {
        var e = () => {
          s['message'].call({
            type: 'normal',
            content: 'Call Message',
            duration: 5e3,
            loading: !0,
            showClose: !0,
          })
        }
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(s['Button'], { onClick: e }, 'Call Message'),
        )
      }
    },
  },
])
