;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
  {
    fOs2: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('tJVT'),
        l = n('q1tI'),
        c = n.n(l),
        r = n('/7QA')
      t['default'] = () => {
        var e = Object(r['useMessage'])(),
          t = Object(a['default'])(e, 2),
          n = t[0],
          l = t[1],
          s = () => {
            n.err('I will not be cleared by the default function', 0)
          },
          o = () => {
            r['message'].info('Keep display message.', 0)
          },
          u = () => {
            r['message'].clear()
          }
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(l, null),
          c.a.createElement(r['Button'], { onClick: o }, 'Keep display'),
          c.a.createElement(r['Button'], { onClick: s }, 'Independent context'),
          c.a.createElement(r['Button'], { onClick: u }, 'Clear all'),
        )
      }
    },
  },
])
