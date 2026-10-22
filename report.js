
// Get the CSS variable --color-brand and convert it to hex for ApexCharts
const getBrandColor = () => {
  // Get the computed style of the document's root element
  const computedStyle = getComputedStyle(document.documentElement);
  
  // Get the value of the --color-brand CSS variable
  return computedStyle.getPropertyValue('--color-fg-brand').trim() || "#1447E6";
};

const brandColor = "#176B60"

const options = {
  chart: {
    height: 340,
    maxWidth: "100%",
    type: "area",
    fontFamily: "Inter, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: brandColor,
      gradientToColors: [brandColor],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
  width: 3,
  curve: "smooth"
},
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    },
  },
 series: [{
  name: "Rental Revenue",
  data: [14, 15, 14.5, 17, 16, 16.5],
  color: brandColor
}],
  xaxis: {
  categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  labels: {
    show: true
  },
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  }
},

yaxis: {
  show: true,
  min: 0,
  max: 20,
  tickAmount: 4,
  labels: {
    formatter: function (value) {
      return "₹" + value + "L";
    }
  }
},
}

if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("area-chart"), options);
  chart.render();
}







// double graph
const getTenantColor = () => {
  return "#B77D91";
};

const tenantColor = getTenantColor();

const tenantGrowthOptions = {
  dataLabels: {
    enabled: true,
    offsetY: -8,
    background: {
      enabled: false
    },
    style: {
      fontSize: "12px",
      fontWeight: 500,
      colors: ["#392630"]
    }
  },

  grid: {
    show: true,
    borderColor: "#EDE5E8",
    strokeDashArray: 4,
    padding: {
      left: 10,
      right: 20,
      top: 15
    }
  },

  series: [
    {
      name: "Total Tenants",
      data: [204, 212, 220, 225, 236, 248],
      color: tenantColor
    }
  ],

  chart: {
    height: 280,
    type: "area",
    fontFamily: "DM Sans, sans-serif",
    dropShadow: {
      enabled: false
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },

  tooltip: {
    enabled: true,
    y: {
      formatter: function (value) {
        return value + " tenants";
      }
    }
  },

  legend: {
    show: false
  },

  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.35,
      opacityTo: 0.03,
      gradientToColors: [tenantColor],
      stops: [0, 100]
    }
  },

  stroke: {
    curve: "smooth",
    width: 3
  },

  markers: {
    size: 4,
    colors: [tenantColor],
    strokeColors: "#FFFFFF",
    strokeWidth: 2
  },

  xaxis: {
    categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: true,
      style: {
        colors: "#7A6A70",
        fontSize: "12px"
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },

  yaxis: {
    show: true,
    min: 0,
    max: 300,
    tickAmount: 5,
    labels: {
      style: {
        colors: "#7A6A70",
        fontSize: "12px"
      },
      formatter: function (value) {
        return Math.round(value);
      }
    }
  }
};

if (
  document.getElementById("data-labels-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const tenantGrowthChart = new ApexCharts(
    document.getElementById("data-labels-chart"),
    tenantGrowthOptions
  );

  tenantGrowthChart.render();
}




const expensePieOptions = {
  series: [48000, 30000, 18000, 14400, 9600],
responsive: [
  {
    breakpoint: 640,
    options: {
      chart: {
        height: 340
      },
      legend: {
        position: "bottom",
        itemMargin: {
          horizontal: 8,
          vertical: 5
        }
      }
    }
  }
],
  labels: [
    "Maintenance",
    "Utilities",
    "Insurance",
    "Taxes",
    "Other"
  ],

  colors: [
    "#946577",
    "#B77D91",
    "#D6B892",
    "#939F83",
    "#D5C8C2"
  ],

  chart: {
    height: 250,
    width: "100%",
    type: "pie",
    fontFamily: "DM Sans, sans-serif",
    foreColor: "#392630",
    toolbar: {
      show: false
    }
  },

  stroke: {
    colors: ["#FFFFFF"],
    width: 2
  },

  plotOptions: {
    pie: {
      dataLabels: {
        offset: -15
      }
    }
  },

  dataLabels: {
    enabled: true,
    formatter: function (value) {
      return Math.round(value) + "%";
    },
    style: {
      fontSize: "14px",
      fontFamily: "DM Sans, sans-serif",
      fontWeight: 500,
      colors: ["#392630"]
    },
    dropShadow: {
      enabled: false
    }
  },

  legend: {
  position: "right",
  fontSize: "13px",
  fontFamily: "DM Sans, sans-serif",
  itemMargin: {
    horizontal: 10,
    vertical: 6
  }
},
  tooltip: {
    y: {
      formatter: function (value) {
        return "₹" + value.toLocaleString("en-IN");
      }
    }
  }
};

if (
  document.getElementById("pie-chart") &&
  typeof ApexCharts !== "undefined"
) {
  const expensePieChart = new ApexCharts(
    document.getElementById("pie-chart"),
    expensePieOptions
  );

  expensePieChart.render();
}