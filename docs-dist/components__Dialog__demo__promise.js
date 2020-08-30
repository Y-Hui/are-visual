;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    lTwp: function (e, n, o) {
      'use strict'
      o.r(n)
      var t = o('q1tI'),
        r = o.n(t),
        s = o('/7QA')
      n['default'] = () => {
        var e = () => {
          s['dialog'].open({
            id: 'Dialog_01',
            title: 'Promise',
            content: 'onConfirm supports returning a Promise.',
            zIndex: 2e3,
            confirmText: 'Confirm',
            maskClosable: !1,
            showClose: !1,
            onConfirm() {
              return new Promise((e) => {
                setTimeout(() => {
                  e(), s['message'].success('SUCCESS')
                }, 3e3)
              })
            },
          })
        }
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(s['Button'], { onClick: e }, 'Click me'),
        )
      }
    },
  },
])
