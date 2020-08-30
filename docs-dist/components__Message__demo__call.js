;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    uUzz: function (e, a, n) {
      'use strict'
      n.r(a)
      var t = n('q1tI'),
        l = n.n(t),
        o = n('/7QA')
      a['default'] = () => {
        var e = () => {
          o['message'].call({
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
          l.a.createElement(o['Button'], { onClick: e }, 'Call Message'),
        )
      }
    },
  },
])
