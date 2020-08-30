;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [21, 13, 14, 15, 16, 17, 18, 19, 20],
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
        o = Object(l['createContext'])({ name: 'default' })
      n['default'] = () => {
        var e = Object(r['useMessage'])(),
          n = Object(a['default'])(e, 2),
          t = n[0],
          l = n[1],
          c = o.Provider,
          u = o.Consumer,
          m = () => {
            t.success(
              s.a.createElement(u, null, (e) => {
                var n = e.name
                return n
              }),
            )
          }
        return s.a.createElement(
          c,
          { value: { name: 'Are Vision Message.' } },
          s.a.createElement(l, null),
          s.a.createElement(r['Button'], { onClick: m }, 'Related'),
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
          o = () => {
            t.err('I will not be cleared by the default function', 0)
          },
          c = () => {
            r['message'].info('Keep display message.', 0)
          },
          u = () => {
            r['message'].clear()
          }
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(l, null),
          s.a.createElement(r['Button'], { onClick: c }, 'Keep display'),
          s.a.createElement(r['Button'], { onClick: o }, 'Independent context'),
          s.a.createElement(r['Button'], { onClick: u }, 'Clear all'),
        )
      }
    },
    ni5v: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('0Owb'),
        l = t('q1tI'),
        s = t.n(l),
        r = (t('B2uJ'), t('+su7'), t('qOys')),
        o = t.n(r),
        c = t('5Yjd'),
        u = t.n(c),
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
        h = s.a.memo(function () {
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
              { id: 'message' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#message' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Message',
            ),
            s.a.createElement(
              'h3',
              { id: 'basic-usage' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#basic-usage' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Basic usage',
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
              { id: 'message-type-alias-function' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#message-type-alias-function' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Message Type (Alias function)',
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
              { id: 'duration' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#duration' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Duration',
            ),
            s.a.createElement(
              'p',
              null,
              'By default, messages are displayed for ',
              s.a.createElement('code', null, '3000'),
              ' milliseconds. You can change the duration by passing a second parameter, which is always displayed if the value is ',
              s.a.createElement('code', null, '0'),
              '.',
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
              { id: 'clear-messages' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#clear-messages' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Clear messages',
            ),
            s.a.createElement(
              'p',
              null,
              'Note: The ',
              s.a.createElement('code', null, 'clear'),
              ' method clears the prompt for the context of the current function.',
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
              { id: 'loading-and-update' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#loading-and-update' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Loading and update',
            ),
            s.a.createElement(
              'p',
              null,
              'Specify ',
              s.a.createElement('code', null, 'id'),
              ' for updating',
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
              { id: 'relevant-context' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#relevant-context' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Relevant context',
            ),
            s.a.createElement(
              'p',
              null,
              'You can create a context to interrelate with your ',
              s.a.createElement('code', null, 'Provider'),
              ' through ',
              s.a.createElement('code', null, 'useMessage'),
              ' hooks!',
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
              { id: 'configuring-with-object-forms' },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#configuring-with-object-forms',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Configuring with object forms',
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
              { id: 'chain-call' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#chain-call' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Chain call',
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
            s.a.createElement(h, null),
          ),
          s.a.createElement(
            'div',
            { className: 'markdown' },
            s.a.createElement(
              'h3',
              { id: 'alias-function-usage-and-parameters' },
              s.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#alias-function-usage-and-parameters',
                },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Alias function usage and parameters:',
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
              'The return value of each alias function contains a function that closes the ',
              s.a.createElement('strong', null, 'current prompt message'),
              '.',
            ),
            s.a.createElement(o.a, {
              code:
                "import { message } from 'are-visual'\n\nconst { close } = message.info('Info Message')\n\n// This `close` is the function that closes this message.\n",
              lang: 'ts',
            }),
            s.a.createElement('br', null),
            s.a.createElement(
              'p',
              null,
              s.a.createElement(
                'strong',
                null,
                'Note: Once the message function of ',
                s.a.createElement('code', null, 'Chain Call'),
                ' is used, the ',
                s.a.createElement('code', null, 'close'),
                ' function is not supported.',
              ),
            ),
            s.a.createElement(o.a, {
              code:
                "import { message } from 'are-visual'\n\n// Error: Ths close is undefined\nconst { close } = message.info('Info Message', 0).then(() => {\n  console.log('Callback')\n})\n",
              lang: 'ts',
            }),
            s.a.createElement(
              'p',
              null,
              'Each alias function inherits a ',
              s.a.createElement('code', null, 'PromiseLike'),
              ' type for its return type, and calls to the ',
              s.a.createElement('code', null, 'then'),
              ' function return a true ',
              s.a.createElement('code', null, 'Promise'),
              ', this is how ',
              s.a.createElement('code', null, 'Are'),
              ' implements chain calls. When the ',
              s.a.createElement('code', null, 'then'),
              ' function is called, there is no such ',
              s.a.createElement('code', null, 'close'),
              ' function left in the return value. So the ',
              s.a.createElement('code', null, 'Chain call'),
              ' and the ',
              s.a.createElement('code', null, 'close'),
              ' function can only be one or the other, not both.',
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
                  s.a.createElement('th', null, 'Props'),
                  s.a.createElement('th', null, 'Description'),
                  s.a.createElement('th', null, 'Required or not'),
                  s.a.createElement('th', null, 'Type'),
                  s.a.createElement('th', null, 'Defaults'),
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
                    ' Unique ID.',
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
                    ' style type.',
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
                  s.a.createElement('td', null, 'message content'),
                  s.a.createElement('td', null, 'YES'),
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
                    'Display duration (ms)',
                    s.a.createElement('br', null),
                    'If the value is ',
                    s.a.createElement('code', null, '0'),
                    ', it is always displayed.',
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
                  s.a.createElement('td', null, 'Show close button.'),
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
                  s.a.createElement('td', null, 'Switch to loading state'),
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
                    'Specify a function that will be called when the message is closed.',
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
                  s.a.createElement('td', null, 'Customized CSS class'),
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
                  s.a.createElement('td', null, 'Customized inline style'),
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
              { id: 'about-clear' },
              s.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#about-clear' },
                s.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'About clear',
            ),
            s.a.createElement(
              'p',
              null,
              'This function clears the default ',
              s.a.createElement('code', null, 'context'),
              ' prompt message. The return value is the ',
              s.a.createElement('code', null, 'message'),
              ' function.',
            ),
            s.a.createElement(o.a, {
              code: "import { message } from 'are-visual'\n\nmessage.clear()\n",
              lang: 'ts',
            }),
            s.a.createElement('p', null, 'Chain call\uff1a'),
            s.a.createElement(o.a, {
              code:
                "import { message } from 'are-visual'\n\nmessage.clear().success('Chain call')\n",
              lang: 'ts',
            }),
            s.a.createElement('br', null),
            s.a.createElement(
              'p',
              null,
              'If you use ',
              s.a.createElement('code', null, 'useMessage'),
              ' then you should write something like this.',
            ),
            s.a.createElement(o.a, {
              code:
                "import { useMessage } from 'are-visual'\n\nexport default () => {\n  const [msgApi, MessageHolder] = useMessage()\n  return (\n    <>\n      <MessageHolder />\n      <Button onClick={() => msgApi.clear()}>Clear</Button>\n    </>\n  )\n}\n",
              lang: 'ts',
            }),
            s.a.createElement(
              'p',
              null,
              s.a.createElement('code', null, 'useMessage'),
              ' Hook and ',
              s.a.createElement('code', null, 'message'),
              ' do not share internal data except for the same usage. Therefore, a message created by ',
              s.a.createElement('code', null, 'useMessage'),
              ' Hook cannot be closed and cleared by the ',
              s.a.createElement('code', null, 'message'),
              ' function, and vice versa.',
            ),
          ),
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
