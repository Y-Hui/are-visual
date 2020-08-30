;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [15],
  {
    uF94: function (e, a, n) {
      'use strict'
      n.r(a)
      var s = n('q1tI'),
        t = n.n(s),
        c = n('/7QA')
      a['default'] = () => {
        var e = () => {
          c['message']
            .info('Show Message.', 2e3)
            .then(() => c['message'].info('First callback.', 2e3))
            .then(() => c['message'].success('Second callback.'))
        }
        return t.a.createElement(
          t.a.Fragment,
          null,
          t.a.createElement(c['Button'], { onClick: e }, 'Chain call'),
        )
      }
    },
  },
])
