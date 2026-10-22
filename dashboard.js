// bar graph 
const options = {
  series: [
    {
      name: "Income",
      color: "#176B60",
      data: [42000, 46000, 44000, 49000, 47000, 52000],
    },
    {
      name: "Expense",
      data: [14000, 18000, 15000, 21000, 16000, 19000],
      color: "#B77D91",
    }
  ],
  chart: {
    sparkline: {
      enabled: false,
    },
    type: "bar",
    width: "100%",
    height: 280,
    toolbar: {
      show: false,
    }
  },
  fill: {
    opacity: 1,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadiusApplication: "end",
      borderRadius: 4,
      dataLabels: {
        position: "top",
      },
    },
  },
  legend: {
    show: true,
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
    formatter: function (value) {
      return "₹" + value
    }
  },
  xaxis: {
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-body'
      },
      formatter: function(value) {
        return "" + value
      }
    },
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
  max: 60000,
  tickAmount: 5,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: 'text-xs font-normal fill-body'
      },
    formatter: function (value) {
      return value === 0 ? "0" : value / 1000 + "k";
    },
    }
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -20
    },
  },
  fill: {
    opacity: 1,
  }
}

if(document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("bar-chart"), options);
  chart.render();
}






// pie chart 


  // Get the CSS variable --color-brand and convert it to hex for ApexCharts
  const getBrandColor = () => {
    // Get the computed style of the document's root element
    const computedStyle = getComputedStyle(document.documentElement);
    
    // Get the value of the --color-brand CSS variable
    return computedStyle.getPropertyValue('--color-fg-brand').trim() || "#1447E6";
  };

  const getBrandSecondaryColor = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue('--color-fg-brand-subtle').trim() || "#1447E6";
  };

  const getBrandTertiaryColor = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue('--color-fg-brand-strong').trim() || "#1447E6";
  };

  const brandColor = getBrandColor();
  const brandSecondaryColor = getBrandSecondaryColor();
  const brandTertiaryColor = getBrandTertiaryColor();

  const getChartOptions = () => {
    return {
      series:[18,4,2],
colors: ["#176B60", "#8EAE98", "#C994A7"],
      chart: {
  height: 280,
  width: "100%",
  type: "donut",
},
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Properties",
                fontFamily: "Inter, sans-serif",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                  return sum
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value) {
                  return value 
                },
              },
            },
            size: "68%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ["Occupied", "Vacant", "In repair"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "right",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value 
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value 
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    }
  }

  if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions());
    chart.render();

    // Get all the checkboxes by their class name
    const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');

    // Function to handle the checkbox change event
    function handleCheckboxChange(event, chart) {
        const checkbox = event.target;
        if (checkbox.checked) {
            switch(checkbox.value) {
              case 'desktop':
                chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
                break;
              case 'tablet':
                chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
                break;
              case 'mobile':
                chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
                break;
              default:
                chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
            }

        } else {
            chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
        }
    }

    // Attach the event listener to each checkbox
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => handleCheckboxChange(event, chart));
    });
  }
