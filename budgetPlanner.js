
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
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);
}
function addSavings(amount, data) { 
  data.totalSaved += amount;
  data.savingsHistory.push({ id: data.savingsHistory.length + 1, amount });
  data.percentage = Math.floor((data.totalSaved / data.goalAmount) * 100);
  data.remainingAmount = data.goalAmount - data.totalSaved
  if (data.percentage > 100) {
    data.percentage = 100;
  } 
 for(let goal of goalData){
  if(goal.id === data.id){
    goal = data
    break
  }
 }
 localStorage.setItem("goalData", JSON.stringify(goalData));
  updateUI(data)
  return data
}
function historyData(data){ //{focusedData}
  const parentList = document.querySelector("#savings-list")
  parentList.innerHTML = '';
  if (data["selected"]) {
    let sorted = (data.savingsHistory).sort(function(a, b) { 
      return Number(b.id) - Number(a.id);
    });
    console.log(sorted, '<<')
    for(let savings of sorted){
      parentList.innerHTML += `
      <li class="pb-3 sm:pb-4">
      <div class="flex items-center space-x-4 rtl:space-x-reverse">
        <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-500 truncate">Incoming Budget</p>
            <p class="text-base font-bold text-gray-900 truncate">${formatIDR(savings.amount)}</p>
        </div>
        <div class="inline-flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" class="w-5 h-5">
                <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="black" class="w-5 h-5"><path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
        </div>
        </div>
        
        </li>
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
const parentCard = document.querySelector('#grid-cards');
function showDataCards(arr) {
  parentCard.innerHTML = '';
  for (let data of arr) {
    if (!data["selected"]) {
      parentCard.innerHTML += `
        <div class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm h-[20rem]">
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
          <button class="detailButton inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" data-id="${data["id"]}">
            More details
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      `;
    }
  }
}

// DOM Manipulation
function render() {
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
  const addSavingsData = document.querySelector("#historySavings")
  addSavingsData.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
    let data = focusedItem(goalData) ;
    const savingsAmount = Number(document.querySelector("#savings-input").value)
    addSavings(savingsAmount,data)
    historyData(data)
    document.querySelector("#savings-input").value = ''
  })
  const addNewForm = document.querySelector("#addNewForm");
    addNewForm.querySelector("form").addEventListener("submit", function (e) {
      e.preventDefault();
      if(goalData.length !== 0) {
        for(let data of goalData){
          data["selected"] = false
        }
        const budgetData = {
          id: goalData.length + 1,
          budgetName: document.querySelector("#budget_name").value,
          category: document.querySelector("#category_name").value,
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
      document.querySelector("#budget_name").value = '';
      document.querySelector("#category_name").value = 'Choose a category';
      document.querySelector("#datepicker-range-start").value = formatDate(new Date());
      document.querySelector("#datepicker-range-end").value = '';
      document.querySelector("#currency-input").value = '';
          let data = focusedItem(goalData)
          historyData(data)
          updateUI(data)

      } else {
        const budgetData = {
          id: goalData.length + 1,
          budgetName: document.querySelector("#budget_name").value,
          category: document.querySelector("#category_name").value,
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
      document.querySelector("#budget_name").value = '';
      document.querySelector("#category_name").value = 'Choose a category';
      document.querySelector("#datepicker-range-start").value = formatDate(new Date());
      document.querySelector("#datepicker-range-end").value = '';
      document.querySelector("#currency-input").value = '';
          let data = focusedItem(goalData)
          historyData(data)
          updateUI(data)
          showDataCards(goalData)

      }          
    });
  if (goalData.length > 0) {
      let focused = focusedItem(goalData)
      historyData(focused)
      updateUI(focused);
      showDataCards(goalData)
  }
  parentCard.addEventListener("click", function (e) {
    if (e.target.classList.contains("detailButton")) {
      const id = Number(e.target.getAttribute("data-id"));
      if (goalData.length !== 0) {
        goalData.forEach((data) => {
          data["selected"] = data.id === id;
        });
        let selectedItem = focusedItem(goalData);
        historyData(selectedItem)
        updateUI(selectedItem);
        showDataCards(goalData);
      }
    }
  });
    document.querySelectorAll(".area-chart").forEach((chartElement) => {
      if (typeof ApexCharts !== "undefined") {
          const chart = new ApexCharts(chartElement, options);
          chart.render();
      }
  });

  document.querySelectorAll(".select-item").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedId = Number(this.getAttribute("data-id"));
      selectItem(selectedId);
    });
  });
 

}
render()