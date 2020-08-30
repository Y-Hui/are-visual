;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [20],
  {
    '3ZDe': function (e, a, s) {
      'use strict'
      s.r(a)
      var n = s('q1tI'),
        t = s.n(n),
        r = s('/7QA')
      a['default'] = () => {
        var e = () => {
            r['message'].info('Normal Message')
          },
          a = () => {
            r['message'].warn('Warn Message')
          },
          s = () => {
            r['message'].err('Err Message')
          },
          n = () => {
            r['message'].success('Success Message')
          }
        return t.a.createElement(
          t.a.Fragment,
          null,
          t.a.createElement(r['Button'], { onClick: e }, 'Normal'),
          t.a.createElement(r['Button'], { onClick: a }, 'Warn'),
          t.a.createElement(r['Button'], { onClick: s }, 'Err'),
          t.a.createElement(r['Button'], { onClick: n }, 'Success'),
        )
      }
    },
  },
])
