
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
// Logic
let goalData = []
const today = new Date();
function formatDate(date) {
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
function calculateRemainingDays(endDate) {
  let today = new Date(); 
  let targetDate = new Date(endDate); 
  let difference = targetDate - today;
  let remainingDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return remainingDays;
}
function formatIDR(num){
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(num);
}
function addIncome(data, amount) {
  data.totalSaved += amount;
  data.savingsHistory.push({ id: data.savingsHistory.length + 1, amount });
  data.percentage = ((data.totalSaved / data.goalAmount) * 100);
  if (data.percentage > 100) {
    data.percentage = 100;
  }
  return data
}
function focusedItem(arr){
  for (let i = 0; i < arr.length; i++) {
    let data = arr[i];
    if (i === arr.length - 1) {
      console.log(data, "last item")
      return data;
    } 
  }
}

// DOM Manipulation
document.addEventListener('DOMContentLoaded', function () {
  const startDateInput = document.getElementById('datepicker-range-start');
  const endDateInput = document.getElementById('datepicker-range-end');
  if (startDateInput) {
      startDateInput.value = formatDate(today);
      startDateInput.readOnly = true;
  }
  const endPicker = new Datepicker(endDateInput, {
      autohide: true,
      format: "yyyy-mm-dd",
      minDate: today, 
  });
  endDateInput.addEventListener("click", () => endPicker.show());
  endDateInput.addEventListener("changeDate", function (e) {
      if (e.date < today) {
          endDateInput.value = formatDate(today);
      }
      
  });
  // addIncome({budgetName: "rheina",
  //   category: "Trip",
  //   endDate: "2025-02-05",
  //   goalAmount: Number("100000"),
  //   id: 1,
  //   percentage: 0,
  //   remainingDays: 2,
  //   startDate: "2025-02-03",
  //   totalSaved:0,
  //   savingsHistory: []},20000)
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  const budgetData = {
      id: goalData.length + 1,
      budgetName: document.getElementById("first_name").value,
      category: document.getElementById("budget_name").value,
      startDate: document.getElementById("datepicker-range-start").value,
      endDate: document.getElementById("datepicker-range-end").value,
      goalAmount: Number(document.getElementById("currency-input").value),
      remainingDays: calculateRemainingDays(document.getElementById("datepicker-range-end").value),
      percentage: 0,
      totalSaved : 0,
      savingsHistory:[]
  };

  goalData.push(budgetData) 
  document.getElementById("first_name").value = '';
  document.getElementById("budget_name").value = 'Choose a category';
  document.getElementById("datepicker-range-start").value = formatDate(new Date());
  document.getElementById("datepicker-range-end").value = '';
  document.getElementById("currency-input").value = '';
});


document.querySelectorAll(".area-chart").forEach((chartElement) => {
    if (typeof ApexCharts !== "undefined") {
        const chart = new ApexCharts(chartElement, options);
        chart.render();
    }
});


