
const options = {
  chart: {
    height: "90%",
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
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
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
  series: [
    {
      name: "Balance",
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: "#1A56DB",
    },
  ],
  xaxis: {
    categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
}
let savingsHistory = [
  {
    id: 1,
    type: "Incoming budget",
    amount: 40_000,
  },
  {
    id: 2,
    type: "Incoming budget",
    amount: 40_000,
    date: new Date()
  },
]
let goalData = {
  name: "Budget to bahamas",
  category: "Trip",
  startDate: new Date().toISOString().split('T')[0] ,
  endDate: new Date().toISOString().split('T')[0],
  goalAmount : 500_000
}
function formatIDR(num){
  return `Rp. ${num.toLocaleString('id-ID')}`
}

function addGoal(data){
  return data
  //add remaining date from today to the goalData and percentage
}
function getTotal(history,goal){
  let total = 0
  for(let element of history){
    total += element["amount"]
  }
  return [formatIDR(total),formatIDR(goal)]
}
function goalPercentage(data){
  console.log(data)
}
//input getTotal(savingsHistory, 500000)
//output [ 'Rp. 80.000', 'Rp. 400.000' ]

// document.querySelectorAll(".area-chart").forEach((chartElement) => {
//     if (typeof ApexCharts !== "undefined") {
//         const chart = new ApexCharts(chartElement, options);
//         chart.render();
//     }
// });
