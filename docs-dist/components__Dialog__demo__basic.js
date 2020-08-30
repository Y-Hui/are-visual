;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    aGB7: function (e, n, t) {
      'use strict'
      t.r(n)
      var a = t('q1tI'),
        o = t.n(a),
        i = t('/7QA')
      n['default'] = () => {
        var e = () => {
          i['dialog'].open({
            id: 'DialogKey_00',
            title: 'TIPS',
            content: 'Write some content in the blank space here.',
            zIndex: 2e3,
            cancelText: 'Cancel',
            confirmText: 'Confirm',
          })
        }
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(i['Button'], { onClick: e }, 'Display dialog'),
        )
      }
    },
  },
])
