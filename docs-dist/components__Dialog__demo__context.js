;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    fp0Y: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('tJVT'),
        r = n('q1tI'),
        l = n.n(r),
        o = n('/7QA'),
        u = Object(r['createContext'])({ name: 'default' })
      t['default'] = () => {
        var e = Object(o['useDialog'])(),
          t = Object(a['default'])(e, 2),
          n = t[0],
          r = t[1],
          c = u.Provider,
          i = u.Consumer,
          m = () => {
            n.open({
              id: 'Consumer',
              title: 'Context',
              content: l.a.createElement(i, null, (e) => {
                var t = e.name
                return t
              }),
              confirmText: 'OK',
              zIndex: 2e3,
            })
          }
        return l.a.createElement(
          c,
          { value: { name: 'Are Visual Dialog.' } },
          l.a.createElement(r, null),
          l.a.createElement(o['Button'], { onClick: m }, 'Related'),
        )
      }
    },
  },
])
