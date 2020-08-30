;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    me2r: function (e, o, n) {
      'use strict'
      n.r(o)
      var t = n('q1tI'),
        a = n.n(t),
        l = n('/7QA')
      o['default'] = () => {
        var e = () => {
          var e = 'Dialog_'.concat(Date.now()),
            o = 5,
            n = setInterval(() => {
              ;(o -= 1),
                l['dialog'].update({
                  id: e,
                  content: 'Countdown '.concat(o, ' seconds to close.'),
                })
            }, 1e3)
          setTimeout(() => {
            l['dialog'].close(e), clearInterval(n)
          }, 1e3 * o),
            l['dialog'].open({
              id: e,
              title: 'Countdown',
              content: 'Countdown '.concat(o, ' seconds to close.'),
              zIndex: 2e3,
              confirmText: 'Close',
              maskClosable: !1,
              showClose: !1,
              onClose() {
                clearInterval(n)
              },
            })
        }
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(l['Button'], { onClick: e }, 'Manual shutdown'),
        )
      }
    },
  },
])
