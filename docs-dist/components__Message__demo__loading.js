;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [19],
  {
    MgYf: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = n('q1tI'),
        s = n.n(t),
        o = n('/7QA'),
        i = 'LOADING_MESSAGE_KEY'
      a['default'] = () => {
        var e = () => {
          o['message'].loading('Loading...', 0, { id: i }),
            setTimeout(() => {
              o['message'].success('Loaded!', 400, { id: i })
            }, 2e3)
        }
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(o['Button'], { onClick: e }, 'Loading'),
        )
      }
    },
  },
])
