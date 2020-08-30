;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [31],
  {
    ID0x: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = n('q1tI'),
        l = n.n(t),
        r = (n('B2uJ'), n('+su7'), n('qOys')),
        c = n.n(r)
      n('5Yjd')
      a['default'] = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'context-\u4e0e-hooks' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#context-\u4e0e-hooks' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Context \u4e0e Hooks',
            ),
            l.a.createElement(
              'p',
              null,
              '\u5982\u679c\u4f60\u4f7f\u7528\u8fc7 ',
              l.a.createElement('code', null, 'Are'),
              ' \u4e00\u4e9b',
              l.a.createElement(
                'strong',
                null,
                '\u51fd\u6570\u8c03\u7528\u5f62\u5f0f',
              ),
              '\u7684\u7ec4\u4ef6\uff0c\u4f60\u5e94\u8be5\u90fd\u80fd\u770b\u5230\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a Hook\u3002',
            ),
            l.a.createElement('p', null, '\u4f8b\u5982\uff1a'),
            l.a.createElement(
              'ul',
              null,
              l.a.createElement(
                'li',
                null,
                l.a.createElement('code', null, 'message'),
                ' \u51fd\u6570 \u4e0e ',
                l.a.createElement('code', null, 'useMessage'),
                ' Hook',
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement('code', null, 'dialog'),
                ' \u51fd\u6570 \u4e0e ',
                l.a.createElement('code', null, 'useDialog'),
                ' Hook',
              ),
            ),
            l.a.createElement(
              'p',
              null,
              '\u8fd9\u4e9b Hook \u7684\u51fa\u73b0\u662f\u4e3a\u4e86\u89e3\u51b3\u7531 ',
              l.a.createElement('code', null, 'Provider'),
              ' \u5411\u4e0b\u4f20\u9012\u6570\u636e\uff0c\u4f7f\u7528 ',
              l.a.createElement('code', null, 'Consumer'),
              ' \u63a5\u6536\u65f6\u7ec4\u4ef6\u603b\u662f\u6e32\u67d3\u9ed8\u8ba4\u503c\u7684\u95ee\u9898\u3002',
            ),
            l.a.createElement('br', null),
            l.a.createElement(
              'p',
              null,
              '\u901a\u5e38\u4f1a\u8fd9\u6837\uff1a',
            ),
            l.a.createElement(c.a, {
              code:
                "import React, { createContext } from 'react'\nimport { Button, message } from 'are-visual'\n\n/** \u521d\u59cb\u5316 name \u4e3a `default` \u5b57\u7b26\u4e32 */\nconst DemoCtx = createContext({ name: 'default' })\n\nexport default () => {\n  const { Provider, Consumer } = DemoCtx\n\n  const onClick = () => {\n    /**\n     * \u4f7f\u7528 `Consumer` \u63a5\u6536\u6570\u636e\u3002\u8fd9\u6761\u63d0\u793a\u6d88\u606f\u7684\u5185\u5bb9\u662f\u4ec0\u4e48\uff1f\n     * \u5f53\u7136\u5e94\u5f53\u662f\uff1a`Are Visual Message.`\n     *\n     * \u4f46\u662f\u4e8b\u4e0e\u613f\u8fdd\uff0c\u8fd9\u6761\u63d0\u793a\u6d88\u606f\u7684\u5185\u5bb9\u5374\u662f\uff1a`default`\n     */\n    message.info(<Consumer>{({ name }) => name}</Consumer>)\n  }\n\n  return (\n    <Provider value={{ name: 'Are Visual Message.' }}>\n      {/* \u70b9\u51fb\u6309\u94ae\u65f6\uff0c\u4f1a\u5c55\u793a\u4e00\u6761\u63d0\u793a\u6d88\u606f */}\n      <Button onClick={onClick}>Related</Button>\n    </Provider>\n  )\n}\n",
              lang: 'ts',
            }),
            l.a.createElement(
              'p',
              null,
              '\u4ee5\u4e0a\u7684\u4ee3\u7801\u663e\u7136\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u4f46\u662f\u5b83\u4f9d\u65e7\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4e3a\u4f60\u8bf4\u660e\u8fd9\u4e9b\u539f\u56e0\u3002',
            ),
            l.a.createElement(
              'h2',
              { id: 'reactdomrender-\u51fd\u6570' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#reactdomrender-\u51fd\u6570' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ReactDOM.render \u51fd\u6570',
            ),
            l.a.createElement(
              'p',
              null,
              '\u8fd8\u8bb0\u5f97\u8fd9\u4e2a\u51fd\u6570\u5417\uff1f\u6211\u4eec\u521a\u5f00\u59cb\u521b\u5efa React \u9879\u76ee\u65f6\uff0c\u901a\u5e38\u4f1a\u4f7f\u7528\u5230\u5b83\u3002',
            ),
            l.a.createElement(c.a, {
              code:
                "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport App from './App'\n\n/** \u5c31\u662f\u6b64\u523b\u5c06 App \u7ec4\u4ef6\u6e32\u67d3\u5230 #root DOM \u5bb9\u5668\u4e2d */\nReactDOM.render(<App />, document.getElementById('root'))\n",
              lang: 'ts',
            }),
            l.a.createElement(
              'p',
              null,
              '\u8fd9\u6bb5\u4ee3\u7801\u672b\u5c3e\u5904\u8c03\u7528\u4e86 ',
              l.a.createElement('code', null, 'ReactDOM.render'),
              ' \u51fd\u6570\uff0c\u521b\u5efa\u4e00\u4e2a React \u5b9e\u4f8b\uff08\u6682\u4e14\u79f0\u5176\u4e3a ',
              l.a.createElement('code', null, 'App \u5b9e\u4f8b'),
              '\uff09\u3002',
            ),
            l.a.createElement(
              'p',
              null,
              '\u5728\u8c03\u7528 ',
              l.a.createElement('code', null, 'message'),
              ' \u51fd\u6570\u65f6\u5b83\u4f1a\u4f7f\u7528 ',
              l.a.createElement('code', null, 'ReactDOM.render'),
              ' \u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u989d\u5916\u7684 React \u5b9e\u4f8b\uff08\u6682\u4e14\u79f0\u5176\u4e3a ',
              l.a.createElement('code', null, 'Symbol \u5b9e\u4f8b'),
              '\uff09\uff0c\u63a5\u7740\u4f1a\u5728\u5c4f\u5e55\u9876\u90e8\u663e\u793a\u4e00\u6761\u63d0\u793a\u6d88\u606f\uff0c\u8fd9\u6761\u63d0\u793a\u6d88\u606f\u88ab\u8bb0\u5f55\u5728 ',
              l.a.createElement('code', null, 'Symbol \u5b9e\u4f8b'),
              ' \u5185\u90e8\u3002',
            ),
            l.a.createElement(
              'p',
              null,
              '\u56e0\u6b64\uff0c\u8fd9\u662f\u4e24\u4e2a React \u5b9e\u4f8b\uff0c\u5b83\u4eec\u6ca1\u6709\u4efb\u4f55\u5173\u8054\u3002\u5f53\u4f60\u4f7f\u7528 ',
              l.a.createElement('code', null, 'createContext'),
              ' \u5411\u4e0b\u4f20\u9012\u6570\u636e\u65f6\uff0c\u662f\u5728 ',
              l.a.createElement('code', null, 'App \u5b9e\u4f8b'),
              ' \u4e2d\u7684\u884c\u4e3a\uff0c\u5373\u4f7f\u4f60\u5199\u8fd9\u6837\u7684\u4ee3\u7801\u4e5f\u65e0\u6d4e\u4e8e\u4e8b\u3002',
            ),
            l.a.createElement(c.a, {
              code: 'message.info(<Consumer>{({ name }) => name}</Consumer>)\n',
              lang: 'ts',
            }),
            l.a.createElement(
              'p',
              null,
              '\u6240\u4ee5\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u6837\u7684\u95ee\u9898\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684 Hook\u3002',
            ),
            l.a.createElement(
              'h2',
              { id: 'hook' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#hook' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Hook',
            ),
            l.a.createElement(
              'p',
              null,
              l.a.createElement('code', null, 'useMessage'),
              ' Hook \u662f\u89e3\u51b3 ',
              l.a.createElement('code', null, 'message'),
              ' \u51fd\u6570\u65e0\u6cd5\u83b7\u53d6 Context \u5185\u5bb9\u7684\u7684\u89e3\u51b3\u65b9\u6cd5\uff0c\u5b83\u8c03\u7528\u540e\u4f1a\u8fd4\u56de\u8fd9\u6837\u7684\u503c\uff1a',
            ),
            l.a.createElement(c.a, {
              code:
                '/** \u5f53\u7136\uff0c\u5982\u4f55\u547d\u540d\u53ef\u4ee5\u968f\u4f60\u7684\u559c\u597d */\nconst [msgApi, MessageHolder] = useMessage()\n',
              lang: 'ts',
            }),
            l.a.createElement(
              'p',
              null,
              '\u6b64\u5904\u7684\u7684 ',
              l.a.createElement('code', null, 'useMessage'),
              ' \u5219\u6ca1\u6709\u521b\u5efa React \u5b9e\u4f8b\uff0c\u800c\u662f\u8fd4\u56de\u5305\u88c5\u8fc7\u7684 Message \u7ec4\u4ef6\u3002\u6240\u4ee5\u4f60\u53ea\u8981\u5728\u4f60\u9700\u8981\u7684\u5730\u65b9\u63d2\u5165 ',
              l.a.createElement('code', null, 'MessageHolder'),
              '\uff0c\u5373\u53ef\u4e0e ',
              l.a.createElement('code', null, 'App \u5b9e\u4f8b'),
              ' \u4ea7\u751f\u5173\u8054\uff0c\u6210\u4e3a\u4e86\u7236\u5b50\u7ec4\u4ef6\u7684\u5173\u7cfb\u3002',
            ),
            l.a.createElement(c.a, {
              code:
                "/** \u7701\u7565\u90e8\u5206\u4ee3\u7801 */\n\nconst [msgApi, MessageHolder] = useMessage()\n\n/** \u6210\u529f\u83b7\u53d6\u5230 Context \u7684\u6570\u636e\uff0c\u8fd9\u6761\u63d0\u793a\u6d88\u606f\u5185\u5bb9\u4e3a\uff1aAre Visual Message. */\nmsgApi.info(<Consumer>{({ name }) => name}</Consumer>)\n\n\n<Provider value={{ name: 'Are Visual Message.' }}>\n  {/* \u63d2\u5165 MessageHolder */}\n  <MessageHolder />\n</Provider>\n",
              lang: 'ts',
            }),
            l.a.createElement(
              'p',
              null,
              '\u81f3\u5173\u91cd\u8981\u7684\u4e00\u6b65\u4fbf\u662f\u63d2\u5165 ',
              l.a.createElement('code', null, 'MessageHolder'),
              '\u3002',
            ),
            l.a.createElement(
              'h2',
              { id: '\u4ea7\u751f\u7684\u5f71\u54cd' },
              l.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u4ea7\u751f\u7684\u5f71\u54cd',
                },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4ea7\u751f\u7684\u5f71\u54cd',
            ),
            l.a.createElement(
              'p',
              null,
              '\u5982\u679c\u4f60\u4f7f\u7528\u8fc7 ',
              l.a.createElement('code', null, 'message'),
              ' \u51fd\u6570\uff0c\u90a3\u4e48\u4f60\u6216\u8bb8\u77e5\u9053\u6709\u4e00\u4e2a ',
              l.a.createElement('code', null, 'message.clear()'),
              ' \u51fd\u6570\uff0c\u5b83\u7684\u4f5c\u7528\u662f\u6e05\u7a7a\u63d0\u793a\u6d88\u606f\u3002 \u5148\u524d\u4ecb\u7ecd\u8fc7\u5b83\u521b\u5efa\u4e86\u989d\u5916\u7684 React \u5b9e\u4f8b\u4fdd\u5b58\u8fd9\u4e9b\u63d0\u793a\u6d88\u606f\uff0c\u6240\u4ee5\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u90e8\u5206\u3002\u800c ',
              l.a.createElement('code', null, 'useMessage'),
              ' \u5219\u6ca1\u6709\u521b\u5efa\u5b9e\u4f8b\uff0c\u6240\u4ee5\u8fd9\u4e24\u8005\u4e0d\u4e92\u901a\uff0c\u4f60\u65e0\u6cd5\u901a\u8fc7 ',
              l.a.createElement('code', null, 'message.clear()'),
              ' \u51fd\u6570\u6e05\u7a7a\u7531 ',
              l.a.createElement('code', null, 'useMessage'),
              ' \u521b\u5efa\u7684\u63d0\u793a\u6d88\u606f\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002',
              l.a.createElement('code', null, 'message.close()'),
              ' \u4e5f\u662f\u4e00\u6837\u3002',
            ),
            l.a.createElement('br', null),
            l.a.createElement(
              'p',
              null,
              '\u8fd8\u8bb0\u5f97\u6b64\u7bc7\u6587\u6863\u5f00\u5934\u4ecb\u7ecd\u7684\u5176\u4ed6 Hooks \u5417\uff1f\u4e5f\u662f\u8fd9\u4e2a\u539f\u56e0 :)',
            ),
          ),
        )
      }
    },
  },
])
