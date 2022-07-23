/*! For license information please see countdown.bundle.js.LICENSE.txt */
!(function () {
  var e = {
      1093: function (e) {
        !(function () {
          "use strict";
          var t,
            n,
            s,
            r,
            i,
            o,
            u,
            a,
            d = 1e3,
            c = 60,
            l = 60,
            m = 24,
            f = 864e5,
            h = 12,
            y = 10,
            w = 10,
            p = 10,
            g = Math.ceil,
            v = Math.floor;
          function M(e, t) {
            var n = e.getTime();
            return (
              e.setMonth(e.getMonth() + t), Math.round((e.getTime() - n) / f)
            );
          }
          function S(e) {
            var t = e.getTime(),
              n = new Date(t);
            return (
              n.setMonth(e.getMonth() + 1), Math.round((n.getTime() - t) / f)
            );
          }
          function N(e, t) {
            if (
              ((t =
                t instanceof Date || (null !== t && isFinite(t))
                  ? new Date(+t)
                  : new Date()),
              !e)
            )
              return t;
            var n = +e.value || 0;
            return n
              ? (t.setTime(t.getTime() + n), t)
              : ((n = +e.milliseconds || 0) &&
                  t.setMilliseconds(t.getMilliseconds() + n),
                (n = +e.seconds || 0) && t.setSeconds(t.getSeconds() + n),
                (n = +e.minutes || 0) && t.setMinutes(t.getMinutes() + n),
                (n = +e.hours || 0) && t.setHours(t.getHours() + n),
                (n = +e.weeks || 0) && (n *= 7),
                (n += +e.days || 0) && t.setDate(t.getDate() + n),
                (n = +e.months || 0) && t.setMonth(t.getMonth() + n),
                (n = +e.millennia || 0) && (n *= p),
                (n += +e.centuries || 0) && (n *= w),
                (n += +e.decades || 0) && (n *= y),
                (n += +e.years || 0) && t.setFullYear(t.getFullYear() + n),
                t);
          }
          function b(e, s) {
            return u(e) + (1 === e ? t[s] : n[s]);
          }
          function D() {}
          function E(e, t, n, s, r, i) {
            return (
              e[n] >= 0 && ((t += e[n]), delete e[n]),
              1 + (t /= r) <= 1
                ? 0
                : e[s] >= 0
                ? ((e[s] = +(e[s] + t).toFixed(i)),
                  (function (e, t) {
                    switch (t) {
                      case "seconds":
                        if (e.seconds !== c || isNaN(e.minutes)) return;
                        e.minutes++, (e.seconds = 0);
                      case "minutes":
                        if (e.minutes !== l || isNaN(e.hours)) return;
                        e.hours++, (e.minutes = 0);
                      case "hours":
                        if (e.hours !== m || isNaN(e.days)) return;
                        e.days++, (e.hours = 0);
                      case "days":
                        if (7 !== e.days || isNaN(e.weeks)) return;
                        e.weeks++, (e.days = 0);
                      case "weeks":
                        if (e.weeks !== S(e.refMonth) / 7 || isNaN(e.months))
                          return;
                        e.months++, (e.weeks = 0);
                      case "months":
                        if (e.months !== h || isNaN(e.years)) return;
                        e.years++, (e.months = 0);
                      case "years":
                        if (e.years !== y || isNaN(e.decades)) return;
                        e.decades++, (e.years = 0);
                      case "decades":
                        if (e.decades !== w || isNaN(e.centuries)) return;
                        e.centuries++, (e.decades = 0);
                      case "centuries":
                        if (e.centuries !== p || isNaN(e.millennia)) return;
                        e.millennia++, (e.centuries = 0);
                    }
                  })(e, s),
                  0)
                : t
            );
          }
          function T(e, t, n, s, r, i) {
            var o = new Date();
            if (
              ((e.start = t = t || o),
              (e.end = n = n || o),
              (e.units = s),
              (e.value = n.getTime() - t.getTime()),
              e.value < 0)
            ) {
              var u = n;
              (n = t), (t = u);
            }
            e.refMonth = new Date(t.getFullYear(), t.getMonth(), 15, 12, 0, 0);
            try {
              (e.millennia = 0),
                (e.centuries = 0),
                (e.decades = 0),
                (e.years = n.getFullYear() - t.getFullYear()),
                (e.months = n.getMonth() - t.getMonth()),
                (e.weeks = 0),
                (e.days = n.getDate() - t.getDate()),
                (e.hours = n.getHours() - t.getHours()),
                (e.minutes = n.getMinutes() - t.getMinutes()),
                (e.seconds = n.getSeconds() - t.getSeconds()),
                (e.milliseconds = n.getMilliseconds() - t.getMilliseconds()),
                (function (e) {
                  var t;
                  for (
                    e.milliseconds < 0
                      ? ((t = g(-e.milliseconds / d)),
                        (e.seconds -= t),
                        (e.milliseconds += t * d))
                      : e.milliseconds >= d &&
                        ((e.seconds += v(e.milliseconds / d)),
                        (e.milliseconds %= d)),
                      e.seconds < 0
                        ? ((t = g(-e.seconds / c)),
                          (e.minutes -= t),
                          (e.seconds += t * c))
                        : e.seconds >= c &&
                          ((e.minutes += v(e.seconds / c)), (e.seconds %= c)),
                      e.minutes < 0
                        ? ((t = g(-e.minutes / l)),
                          (e.hours -= t),
                          (e.minutes += t * l))
                        : e.minutes >= l &&
                          ((e.hours += v(e.minutes / l)), (e.minutes %= l)),
                      e.hours < 0
                        ? ((t = g(-e.hours / m)),
                          (e.days -= t),
                          (e.hours += t * m))
                        : e.hours >= m &&
                          ((e.days += v(e.hours / m)), (e.hours %= m));
                    e.days < 0;

                  )
                    e.months--, (e.days += M(e.refMonth, 1));
                  e.days >= 7 && ((e.weeks += v(e.days / 7)), (e.days %= 7)),
                    e.months < 0
                      ? ((t = g(-e.months / h)),
                        (e.years -= t),
                        (e.months += t * h))
                      : e.months >= h &&
                        ((e.years += v(e.months / h)), (e.months %= h)),
                    e.years >= y &&
                      ((e.decades += v(e.years / y)),
                      (e.years %= y),
                      e.decades >= w &&
                        ((e.centuries += v(e.decades / w)),
                        (e.decades %= w),
                        e.centuries >= p &&
                          ((e.millennia += v(e.centuries / p)),
                          (e.centuries %= p))));
                })(e),
                (function (e, t, n, s) {
                  var r = 0;
                  !(1024 & t) || r >= n
                    ? ((e.centuries += e.millennia * p), delete e.millennia)
                    : e.millennia && r++,
                    !(512 & t) || r >= n
                      ? ((e.decades += e.centuries * w), delete e.centuries)
                      : e.centuries && r++,
                    !(256 & t) || r >= n
                      ? ((e.years += e.decades * y), delete e.decades)
                      : e.decades && r++,
                    !(128 & t) || r >= n
                      ? ((e.months += e.years * h), delete e.years)
                      : e.years && r++,
                    !(64 & t) || r >= n
                      ? (e.months && (e.days += M(e.refMonth, e.months)),
                        delete e.months,
                        e.days >= 7 &&
                          ((e.weeks += v(e.days / 7)), (e.days %= 7)))
                      : e.months && r++,
                    !(32 & t) || r >= n
                      ? ((e.days += 7 * e.weeks), delete e.weeks)
                      : e.weeks && r++,
                    !(16 & t) || r >= n
                      ? ((e.hours += e.days * m), delete e.days)
                      : e.days && r++,
                    !(8 & t) || r >= n
                      ? ((e.minutes += e.hours * l), delete e.hours)
                      : e.hours && r++,
                    !(4 & t) || r >= n
                      ? ((e.seconds += e.minutes * c), delete e.minutes)
                      : e.minutes && r++,
                    !(2 & t) || r >= n
                      ? ((e.milliseconds += e.seconds * d), delete e.seconds)
                      : e.seconds && r++,
                    (1 & t && !(r >= n)) ||
                      (function (e, t) {
                        var n,
                          s,
                          r,
                          i = E(e, 0, "milliseconds", "seconds", d, t);
                        if (
                          i &&
                          (i = E(e, i, "seconds", "minutes", c, t)) &&
                          (i = E(e, i, "minutes", "hours", l, t)) &&
                          (i = E(e, i, "hours", "days", m, t)) &&
                          (i = E(e, i, "days", "weeks", 7, t)) &&
                          (i = E(
                            e,
                            i,
                            "weeks",
                            "months",
                            S(e.refMonth) / 7,
                            t
                          )) &&
                          (i = E(
                            e,
                            i,
                            "months",
                            "years",
                            ((s = (n = e.refMonth).getTime()),
                            (r = new Date(s)).setFullYear(n.getFullYear() + 1),
                            Math.round((r.getTime() - s) / f) / S(e.refMonth)),
                            t
                          )) &&
                          (i = E(e, i, "years", "decades", y, t)) &&
                          (i = E(e, i, "decades", "centuries", w, t)) &&
                          (i = E(e, i, "centuries", "millennia", p, t))
                        )
                          throw new Error("Fractional unit overflow");
                      })(e, s);
                })(e, s, r, i);
            } finally {
              delete e.refMonth;
            }
            return e;
          }
          function k(e, t, n, s, r) {
            var i;
            (n = +n || 222),
              (s = s > 0 ? s : NaN),
              (r = r > 0 ? (r < 20 ? Math.round(r) : 20) : 0);
            var o = null;
            "function" == typeof e
              ? ((i = e), (e = null))
              : e instanceof Date ||
                (null !== e && isFinite(e)
                  ? (e = new Date(+e))
                  : ("object" == typeof o && (o = e), (e = null)));
            var u = null;
            if (
              ("function" == typeof t
                ? ((i = t), (t = null))
                : t instanceof Date ||
                  (null !== t && isFinite(t)
                    ? (t = new Date(+t))
                    : ("object" == typeof t && (u = t), (t = null))),
              o && (e = N(o, t)),
              u && (t = N(u, e)),
              !e && !t)
            )
              return new D();
            if (!i) return T(new D(), e, t, n, s, r);
            var a,
              c = (function (e) {
                return 1 & e
                  ? 33.333333333333336
                  : 2 & e
                  ? d
                  : 4 & e
                  ? 6e4
                  : 8 & e
                  ? 36e5
                  : 16 & e
                  ? 864e5
                  : 6048e5;
              })(n),
              l = function () {
                i(T(new D(), e, t, n, s, r), a);
              };
            return l(), (a = setInterval(l, c));
          }
          (D.prototype.toString = function (e) {
            var t = a(this),
              n = t.length;
            if (!n) return e ? "" + e : i;
            if (1 === n) return t[0];
            var o = s + t.pop();
            return t.join(r) + o;
          }),
            (D.prototype.toHTML = function (e, t) {
              e = e || "span";
              var n = a(this),
                o = n.length;
              if (!o)
                return (t = t || i) ? "<" + e + ">" + t + "</" + e + ">" : t;
              for (var u = 0; u < o; u++)
                n[u] = "<" + e + ">" + n[u] + "</" + e + ">";
              if (1 === o) return n[0];
              var d = s + n.pop();
              return n.join(r) + d;
            }),
            (D.prototype.addTo = function (e) {
              return N(this, e);
            }),
            (a = function (e) {
              var t = [],
                n = e.millennia;
              return (
                n && t.push(o(n, 10)),
                (n = e.centuries) && t.push(o(n, 9)),
                (n = e.decades) && t.push(o(n, 8)),
                (n = e.years) && t.push(o(n, 7)),
                (n = e.months) && t.push(o(n, 6)),
                (n = e.weeks) && t.push(o(n, 5)),
                (n = e.days) && t.push(o(n, 4)),
                (n = e.hours) && t.push(o(n, 3)),
                (n = e.minutes) && t.push(o(n, 2)),
                (n = e.seconds) && t.push(o(n, 1)),
                (n = e.milliseconds) && t.push(o(n, 0)),
                t
              );
            }),
            (k.MILLISECONDS = 1),
            (k.SECONDS = 2),
            (k.MINUTES = 4),
            (k.HOURS = 8),
            (k.DAYS = 16),
            (k.WEEKS = 32),
            (k.MONTHS = 64),
            (k.YEARS = 128),
            (k.DECADES = 256),
            (k.CENTURIES = 512),
            (k.MILLENNIA = 1024),
            (k.DEFAULTS = 222),
            (k.ALL = 2047);
          var L = (k.setFormat = function (e) {
              if (e) {
                if ("singular" in e || "plural" in e) {
                  var a = e.singular || [];
                  a.split && (a = a.split("|"));
                  var d = e.plural || [];
                  d.split && (d = d.split("|"));
                  for (var c = 0; c <= 10; c++)
                    (t[c] = a[c] || t[c]), (n[c] = d[c] || n[c]);
                }
                "string" == typeof e.last && (s = e.last),
                  "string" == typeof e.delim && (r = e.delim),
                  "string" == typeof e.empty && (i = e.empty),
                  "function" == typeof e.formatNumber && (u = e.formatNumber),
                  "function" == typeof e.formatter && (o = e.formatter);
              }
            }),
            H = (k.resetFormat = function () {
              (t =
                " millisecond| second| minute| hour| day| week| month| year| decade| century| millennium".split(
                  "|"
                )),
                (n =
                  " milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia".split(
                    "|"
                  )),
                (s = " and "),
                (r = ", "),
                (i = ""),
                (u = function (e) {
                  return e;
                }),
                (o = b);
            });
          (k.setLabels = function (e, t, n, s, r, i, o) {
            L({
              singular: e,
              plural: t,
              last: n,
              delim: s,
              empty: r,
              formatNumber: i,
              formatter: o,
            });
          }),
            (k.resetLabels = H),
            H(),
            e.exports
              ? (e.exports = k)
              : "undefined" != typeof window &&
                "function" == typeof window.define &&
                void 0 !== window.define.amd &&
                window.define("countdown", [], function () {
                  return k;
                });
        })();
      },
    },
    t = {};
  function n(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var i = (t[s] = { exports: {} });
    return e[s](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var s in t)
        n.o(t, s) &&
          !n.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n];
          (s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            "value" in s && (s.writable = !0),
            Object.defineProperty(e, s.key, s);
        }
      }
      var t = n(1093),
        s = n.n(t);
      new ((function () {
        function t() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.timers = document.querySelectorAll(".js-countdown-timer")),
            (this.timer = document.querySelector(".js-countdown-single-timer")),
            (this.timerDays = document.querySelector(
              ".js-countdown-days-number"
            )),
            (this.timerHours = document.querySelector(
              ".js-countdown-hours-number"
            )),
            (this.timerMinutes = document.querySelector(
              ".js-countdown-minutes-number"
            )),
            (this.timerSeconds = document.querySelector(
              ".js-countdown-seconds-number"
            )),
            (this.timerEndsLabel = document.querySelector(
              ".js-countdown-ends-label"
            )),
            this.initCountdown(),
            this.initCountdownSingle();
        }
        var n, r;
        return (
          (n = t),
          (r = [
            {
              key: "format",
              value: function (e) {
                return e < 10 ? "0" + e : e;
              },
            },
            {
              key: "initCountdownSingle",
              value: function () {
                var e = this;
                if (this.timer)
                  var t = this.timer.dataset.countdown.toString(),
                    n = s()(
                      new Date(t),
                      function (t) {
                        t.value > 0
                          ? ((e.timer.innerHTML = e.timer.dataset.expired),
                            e.timerEndsLabel.remove(),
                            window.clearInterval(n))
                          : ((e.timerDays.innerHTML = e.format(t.days)),
                            (e.timerHours.innerHTML = e.format(t.hours)),
                            (e.timerMinutes.innerHTML = e.format(t.minutes)),
                            (e.timerSeconds.innerHTML = e.format(t.seconds)));
                      },
                      s().DAYS | s().HOURS | s().MINUTES | s().SECONDS
                    );
              },
            },
            {
              key: "initCountdown",
              value: function () {
                var e = this;
                this.timers &&
                  this.timers.forEach(function (t) {
                    var n = t.dataset.countdown.toString(),
                      r = s()(
                        new Date(n),
                        function (n) {
                          var s = n.days ? e.format(n.days) + " : " : "",
                            i =
                              n.hours | n.days ? e.format(n.hours) + " : " : "";
                          if (n.value > 0)
                            (t.innerHTML = t.dataset.expired),
                              t.nextElementSibling &&
                                t.nextElementSibling.remove(),
                              t.previousElementSibling &&
                                t.previousElementSibling.remove(),
                              window.clearInterval(r);
                          else {
                            var o = t.nextElementSibling.dataset.countdownleft;
                            (t.innerHTML =
                              s +
                              i +
                              e.format(n.minutes) +
                              " : " +
                              e.format(n.seconds)),
                              (t.nextElementSibling.textContent = o);
                          }
                        },
                        s().DAYS | s().HOURS | s().MINUTES | s().SECONDS
                      );
                  });
              },
            },
          ]) && e(n.prototype, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          t
        );
      })())();
    })();
})();
