;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [23],
  {
    m35D: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('tJVT'),
        o = n('q1tI'),
        l = n.n(o),
        i = n('/7QA')
      t['default'] = () => {
        var e = Object(o['useState'])(!1),
          t = Object(a['default'])(e, 2),
          n = t[0],
          r = t[1],
          c = Object(o['useState'])(!1),
          u = Object(a['default'])(c, 2),
          d = u[0],
          s = u[1]
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            i['Modal'],
            {
              title: 'Content',
              visible: n,
              onClose: () => {
                r(!1)
              },
              footer: [
                l.a.createElement(
                  i['Button'],
                  { key: 'cancel', onClick: () => r(!1) },
                  'Cancel',
                ),
                l.a.createElement(
                  i['Button'],
                  { key: 'confirm', type: 'primary', onClick: () => r(!1) },
                  'Confirm',
                ),
              ],
              zIndex: 1e3,
            },
            l.a.createElement(
              'p',
              null,
              'Early in the day it was whispered that we should sail in a boat, only thou and I, and never a soul in the world would know of this our pilgrimage to no country and to no end.',
            ),
          ),
          l.a.createElement(
            i['Modal'],
            {
              title: 'Line style',
              visible: d,
              onClose: () => {
                s(!1)
              },
              footer: [
                l.a.createElement(
                  i['Button'],
                  { key: 'cancel', onClick: () => s(!1) },
                  'Cancel',
                ),
                l.a.createElement(
                  i['Button'],
                  { key: 'confirm', type: 'primary', onClick: () => s(!1) },
                  'Confirm',
                ),
              ],
              zIndex: 1e3,
              line: !0,
            },
            l.a.createElement(
              'p',
              null,
              'Early in the day it was whispered that we should sail in a boat, only thou and I, and never a soul in the world would know of this our pilgrimage to no country and to no end.',
            ),
          ),
          l.a.createElement(
            i['Button'],
            { onClick: () => r(!0) },
            'Display Modal',
          ),
          l.a.createElement(
            i['Button'],
            { onClick: () => s(!0) },
            'Line Style',
          ),
        )
      }
    },
  },
])
