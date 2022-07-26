!(function () {
  "use strict";
  function t(t, e) {
    for (var a = 0; a < e.length; a++) {
      var n = e[a];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function e(e, a, n) {
    return (
      a && t(e.prototype, a),
      n && t(e, n),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  new (e(function t() {
    !(function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    })(this, t),
      (this.chartElement = document.getElementById("activityChart")),
      this.chartElement &&
        ((this.labels = [
          "Jan 23",
          "Jan 24",
          "Jan 25",
          "Jan 26",
          "Jan 27",
          "Jan 28",
          "Jan 29",
        ]),
        (this.data = {
          labels: this.labels,
          datasets: [
            {
              type: "line",
              label: "Avg. price",
              backgroundColor: "#10B981",
              borderColor: "#10B981",
              data: [54.73, 64, 53, 96, 130, 100, 102.88],
            },
            {
              type: "bar",
              label: "Sales",
              backgroundColor: "#E7E8EC",
              data: [25, 20, 40, 130, 75, 48, 12],
            },
          ],
        }),
        (this.footer = function (t) {
          var e = 1;
          return (
            t.forEach(function (t) {
              e *= t.parsed.y;
            }),
            "Volume: " +
              Intl.NumberFormat("en-US", { notation: "compact" }).format(e)
          );
        }),
        (this.config = {
          data: this.data,
          options: {
            maintainAspectRatio: !1,
            responsive: !0,
            interaction: { intersect: !1, mode: "index" },
            scales: {
              x: { grid: { display: !1 } },
              y: { ticks: { stepSize: 50 } },
            },
            plugins: {
              legend: { display: !1 },
              decimation: { enabled: !0 },
              tooltip: {
                usePointStyle: !0,
                position: "nearest",
                backgroundColor: "#131740",
                titleAlign: "center",
                bodyAlign: "center",
                footerAlign: "center",
                padding: 12,
                displayColors: !1,
                yAlign: "bottom",
                callbacks: { footer: this.footer },
              },
            },
            animation: !1,
          },
        }),
        (Chart.defaults.font.size = 14),
        (Chart.defaults.font.family =
          "'DM Sans', 'Helvetica', 'Arial', sans-serif"),
        (Chart.defaults.color = "#5A5D79"),
        (Chart.defaults.borderColor = "rgba(196, 197, 207, .25)"),
        (this.activityChart = new Chart(this.chartElement, this.config)));
  }))();
})();
