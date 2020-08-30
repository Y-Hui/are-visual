;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17],
  {
    D2yx: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a('tJVT'),
        r = a('q1tI'),
        c = a.n(r),
        s = a('/7QA'),
        u = Object(r['createContext'])({ name: 'default' })
      t['default'] = () => {
        var e = Object(s['useMessage'])(),
          t = Object(n['default'])(e, 2),
          a = t[0],
          r = t[1],
          l = u.Provider,
          o = u.Consumer,
          i = () => {
            a.success(
              c.a.createElement(o, null, (e) => {
                var t = e.name
                return t
              }),
            )
          }
        return c.a.createElement(
          l,
          { value: { name: 'Are Vision Message.' } },
          c.a.createElement(r, null),
          c.a.createElement(s['Button'], { onClick: i }, 'Related'),
        )
      }
    },
  },
])
