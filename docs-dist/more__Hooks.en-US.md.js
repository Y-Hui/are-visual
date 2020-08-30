;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [30],
  {
    fsyL: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('q1tI'),
        o = a.n(n),
        l = (a('B2uJ'), a('+su7'), a('qOys')),
        s = a.n(l)
      a('5Yjd')
      t['default'] = function () {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            'div',
            { className: 'markdown' },
            o.a.createElement(
              'h2',
              { id: 'context--hooks' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#context--hooks' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Context & Hooks',
            ),
            o.a.createElement(
              'p',
              null,
              "If you've used some of the components of ",
              o.a.createElement('code', null, 'Are'),
              ' in the form of ',
              o.a.createElement('strong', null, 'function calls'),
              ", you'll have seen that we also provide a hook.",
            ),
            o.a.createElement('p', null, 'Such as\uff1a'),
            o.a.createElement(
              'ul',
              null,
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'message'),
                ' and ',
                o.a.createElement('code', null, 'useMessage'),
                ' Hook',
              ),
              o.a.createElement(
                'li',
                null,
                o.a.createElement('code', null, 'dialog'),
                ' and ',
                o.a.createElement('code', null, 'useDialog'),
                ' Hook',
              ),
            ),
            o.a.createElement(
              'p',
              null,
              'These hooks were created to solve the problem of components always rendering default values when received with ',
              o.a.createElement('code', null, 'Consumer'),
              ' when data is passed down by ',
              o.a.createElement('code', null, 'Provider'),
              '.',
            ),
            o.a.createElement('br', null),
            o.a.createElement('p', null, 'Example:'),
            o.a.createElement(s.a, {
              code:
                "import React, { createContext } from 'react'\nimport { Button, message } from 'are-visual'\n\n/** Initialize name to the `default` string. */\nconst DemoCtx = createContext({ name: 'default' })\n\nexport default () => {\n  const { Provider, Consumer } = DemoCtx\n\n  const onClick = () => {\n    /**\n     * Receive data using `Consumer`. What is the content of this message?\n     * Of course it should read: `Are Visual Message.`\n     *\n     * But contrary to expectations, the message reads `default`.\n     */\n    message.info(<Consumer>{({ name }) => name}</Consumer>)\n  }\n\n  return (\n    <Provider value={{ name: 'Are Visual Message.' }}>\n      {/* When the button is clicked, a `Message` is displayed. */}\n      <Button onClick={onClick}>Related</Button>\n    </Provider>\n  )\n}\n",
              lang: 'ts',
            }),
            o.a.createElement(
              'p',
              null,
              "The above code is apparently fine, but it still doesn't work properly, and we'll explain why for these reasons.",
            ),
            o.a.createElement(
              'h2',
              { id: 'reactdomrender' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#reactdomrender' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ReactDOM.render',
            ),
            o.a.createElement(
              'p',
              null,
              'Do you remember this function? We usually use it when we first start creating ',
              o.a.createElement('code', null, 'React'),
              ' projects.',
            ),
            o.a.createElement(s.a, {
              code:
                "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport App from './App'\n\n/** This is where you render the app component into the #root DOM container. */\nReactDOM.render(<App />, document.getElementById('root'))\n",
              lang: 'ts',
            }),
            o.a.createElement(
              'p',
              null,
              'The ',
              o.a.createElement('code', null, 'ReactDOM.render'),
              " function is called at the end of this code to create a React instance (let's call it an ",
              o.a.createElement('code', null, 'App instance'),
              ').',
            ),
            o.a.createElement(
              'p',
              null,
              'When the ',
              o.a.createElement('code', null, 'message'),
              " function is called it creates an additional React instance (let's call it a ",
              o.a.createElement('code', null, 'Symbol instance'),
              ') using the ',
              o.a.createElement('code', null, 'ReactDOM.render'),
              ' function, which then displays a prompt message at the top of the screen, which is logged inside the ',
              o.a.createElement('code', null, 'Symbol instance'),
              '.',
            ),
            o.a.createElement(
              'p',
              null,
              'So these are two React instances that have nothing to do with each other. When you use ',
              o.a.createElement('code', null, 'createContext'),
              " to pass data down, it's in the ",
              o.a.createElement('code', null, 'App instance'),
              ", and it doesn't help if you write code like that.",
            ),
            o.a.createElement(s.a, {
              code: 'message.info(<Consumer>{({ name }) => name}</Consumer>)\n',
              lang: 'ts',
            }),
            o.a.createElement(
              'p',
              null,
              'So, to solve such a problem, we provide the corresponding ',
              o.a.createElement('code', null, 'Hook'),
              '.',
            ),
            o.a.createElement(
              'h2',
              { id: 'hook' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#hook' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Hook',
            ),
            o.a.createElement(
              'p',
              null,
              o.a.createElement('code', null, 'useMessage'),
              ' Hook is a workaround for the ',
              o.a.createElement('code', null, 'message'),
              " function's inability to retrieve Context content, and it returns this value when called.",
            ),
            o.a.createElement(s.a, {
              code:
                '/** Of course, you can name it whatever you like. */\nconst [msgApi, MessageHolder] = useMessage()\n',
              lang: 'ts',
            }),
            o.a.createElement(
              'p',
              null,
              'The ',
              o.a.createElement('code', null, 'useMessage'),
              " in this case doesn't create a React instance, but returns a wrapped Message component. So you just insert ",
              o.a.createElement('code', null, 'MessageHolder'),
              ' where you want it, and it becomes associated with the ',
              o.a.createElement('code', null, 'App Instance'),
              ' as a parent-child component.',
            ),
            o.a.createElement(s.a, {
              code:
                "/** Some codes omitted */\n\nconst [msgApi, MessageHolder] = useMessage()\n\n/** Successfully obtained data for `Context`, the message reads: Are `Visual Message`. */\nmsgApi.info(<Consumer>{({ name }) => name}</Consumer>)\n\n\n<Provider value={{ name: 'Are Visual Message.' }}>\n  {/* Insert the MessageHolder */}\n  <MessageHolder />\n</Provider>\n",
              lang: 'ts',
            }),
            o.a.createElement(
              'p',
              null,
              'The most important step is to insert ',
              o.a.createElement('code', null, 'MessageHolder'),
              '.',
            ),
            o.a.createElement(
              'h2',
              { id: 'effect' },
              o.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#effect' },
                o.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Effect',
            ),
            o.a.createElement(
              'p',
              null,
              "If you've used the ",
              o.a.createElement('code', null, 'message'),
              " function, then you probably know that there's a ",
              o.a.createElement('code', null, 'message.clear()'),
              " function that does this by emptying the message prompts. It was described earlier as creating additional React instances to hold these messages, so it's a separate section. ",
              o.a.createElement('code', null, 'useMessage'),
              ", on the other hand, doesn't create instances, so the two are not interoperable, and you can't empty a message created by ",
              o.a.createElement('code', null, 'useMessage'),
              ', or vice versa, with the ',
              o.a.createElement('code', null, 'message.clear()'),
              ' function. The same goes for ',
              o.a.createElement('code', null, 'message.close()'),
              '.',
            ),
            o.a.createElement('br', null),
            o.a.createElement(
              'p',
              null,
              "Remember the other Hooks described at the beginning of this document? That's the same reason :)",
            ),
          ),
        )
      }
    },
  },
])
