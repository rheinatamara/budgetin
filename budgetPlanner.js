
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
let goalData = JSON.parse(localStorage.getItem('goalData')) || [];
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
  data.remainingAmount = data.goalAmount - data.totalSaved
  if (data.percentage > 100) {
    data.percentage = 100;
  }
  return data
}
function showDataCards(arr) {
  const parentCard = document.querySelector('#grid-cards');
  parentCard.innerHTML = ''; 

  for (let data of arr) {
    if (!data["selected"]) {
      parentCard.innerHTML += `
        <div class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm  h-[20rem]">
          <div>
            <h5 id="dataTitle" class="mb-4 text-2xl font-medium tracking-tight text-gray-900">${data["budgetName"]}</h5>
          </div>
          <div class="mb-4">
            <p class="py-3 font-bold text-2xl text-gray-700">${formatIDR(data["remainingAmount"])}</p>
            <p class="font-normal text-gray-400">of ${formatIDR(data["goalAmount"])}</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div class="bg-blue-600 h-1.5 rounded-full" style="width: ${data["percentage"]}%"></div>
          </div>
          <a href="#" class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            More details
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      `;
    }
  }
}

function focusedItem(arr){ 
  for(let data of arr){
    if(data["selected"]){
      return data
    }
  }
}

// DOM Manipulation
document.addEventListener('DOMContentLoaded', function () {
  const startDateInput = document.querySelector('#datepicker-range-start');
  const endDateInput = document.querySelector('#datepicker-range-end');
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
    document.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      if(goalData.length !== 0) {
        for(let data of goalData){
          data["selected"] = false
        }
        const budgetData = {
          id: goalData.length + 1,
          budgetName: document.querySelector("#first_name").value,
          category: document.querySelector("#budget_name").value,
          startDate: document.querySelector("#datepicker-range-start").value,
          endDate: document.querySelector("#datepicker-range-end").value,
          goalAmount: Number(document.querySelector("#currency-input").value),
          remainingDays: calculateRemainingDays(document.querySelector("#datepicker-range-end").value),
          percentage: 0,
          totalSaved : 0,
          selected: true,
          savingsHistory:[],
          remainingAmount: Number(document.querySelector("#currency-input").value)
      };
    
      goalData.push(budgetData) 
      localStorage.setItem('goalData', JSON.stringify(goalData));
      document.querySelector("#first_name").value = '';
      document.querySelector("#budget_name").value = 'Choose a category';
      document.querySelector("#datepicker-range-start").value = formatDate(new Date());
      document.querySelector("#datepicker-range-end").value = '';
      document.querySelector("#currency-input").value = '';
          let data = focusedItem(goalData)
          updateUI(data)

      } else {
        const budgetData = {
          id: goalData.length + 1,
          budgetName: document.querySelector("#first_name").value,
          category: document.querySelector("#budget_name").value,
          startDate: document.querySelector("#datepicker-range-start").value,
          endDate: document.querySelector("#datepicker-range-end").value,
          goalAmount: Number(document.querySelector("#currency-input").value),
          remainingDays: calculateRemainingDays(document.querySelector("#datepicker-range-end").value),
          percentage: 0,
          totalSaved : 0,
          selected: true,
          savingsHistory:[],
          remainingAmount: Number(document.querySelector("#currency-input").value)
      };
    
      goalData.push(budgetData) 
      localStorage.setItem('goalData', JSON.stringify(goalData));
      document.querySelector("#first_name").value = '';
      document.querySelector("#budget_name").value = 'Choose a category';
      document.querySelector("#datepicker-range-start").value = formatDate(new Date());
      document.querySelector("#datepicker-range-end").value = '';
      document.querySelector("#currency-input").value = '';
          let data = focusedItem(goalData)
          updateUI(data)
          showDataCards(goalData)

      }
      
          
    });
    function updateUI(data) {
      const remainingAmount = document.querySelector('#remainingAmount');
      const progressBar = document.querySelector('#progressBar');
      const remainingDays = document.querySelector('#remainingDays');
      const goalName = document.querySelector('#goalName');
      if (data) {
          remainingAmount.textContent = formatIDR(data.remainingAmount);
          progressBar.style.width = `${data.percentage}%`;
          progressBar.textContent = `${data.percentage}%`;
          remainingDays.textContent = `${data.remainingDays} days left`;
          goalName.textContent = `${data.budgetName}`
          showDataCards(goalData)
      }
  }
  if (goalData.length > 0) {
      updateUI(focusedItem(goalData));
      showDataCards(goalData)
  }
    document.querySelectorAll(".area-chart").forEach((chartElement) => {
      if (typeof ApexCharts !== "undefined") {
          const chart = new ApexCharts(chartElement, options);
          chart.render();
      }
  });
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

