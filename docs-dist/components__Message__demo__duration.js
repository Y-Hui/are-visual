;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [18],
  {
    Chmo: function (e, a, s) {
      'use strict'
      s.r(a)
      var n = s('q1tI'),
        o = s.n(n),
        t = s('/7QA')
      a['default'] = () => {
        var e = () => {
            t['message'].info('Keep display message.', 0)
          },
          a = () => {
            t['message'].info('Five seconds message.', 5e3)
          },
          s = () => {
            t['message'].info('I hava a close button.', 0, {
              showClose: !0,
              onClose: () => {
                t['message'].warn("I'm callback message")
              },
            })
          },
          n = () => {
            var e = t['message'].info('Message can be closed manually.', 5e3),
              a = e.close
            setTimeout(a, 1e3)
          }
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(t['Button'], { onClick: e }, 'Keep display'),
          o.a.createElement(t['Button'], { onClick: a }, 'Five seconds'),
          o.a.createElement(t['Button'], { onClick: s }, 'Close button'),
          o.a.createElement(t['Button'], { onClick: n }, 'Manual shutdown'),
        )
      }
    },
  },
])
