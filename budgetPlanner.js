
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

// let goalData = JSON.parse(localStorage.getItem('goalData')) || [];
const totalBalance = document.querySelector('#totalBalance');
let datas = JSON.parse(localStorage.getItem('LOGIN'))
let goalData = datas.data.transactionBudgetData // empty array
let usersTotalBalance = datas.data.transactionSummary.totalBalance
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
  if (data.totalSaved > data.goalAmount) {
      data.totalSaved = data.goalAmount;
      data.savingsHistory.push({ id: data.savingsHistory.length + 1, amount: data.remainingAmount });
      data.remainingAmount = 0
      data.percentage = 100;
      usersTotalBalance = usersTotalBalance - data.goalAmount

  } else {
    data.savingsHistory.push({ id: data.savingsHistory.length + 1, amount });
    data.percentage = Math.floor((data.totalSaved / data.goalAmount) * 100);
    data.remainingAmount = data.goalAmount - data.totalSaved
    data.percentage = Math.floor((data.totalSaved / data.goalAmount) * 100);
    usersTotalBalance = usersTotalBalance - data.totalSaved
  }
  for (let goal of goalData) {
    if (goal.id === data.id) {
      goal = data;
      break;
    }
  }
  
  localStorage.setItem('LOGIN', JSON.stringify(datas));
  updateUI(data);
  return data;

}
function filterHistory(arr,id,data){ 
  let output = []
  for(let item of arr){
    if(item.id !== id){
      output.push(item)
    }
  }
  updateUI(data)
  return output
}
function historyData(data){ //{focusedData}
  const parentList = document.querySelector("#savings-list")
  parentList.innerHTML = '';
  if (data["selected"]) {
    let sorted = (data.savingsHistory).sort(function(a, b) { 
      return Number(b.id) - Number(a.id);
    });
    for(let savings of sorted){
      parentList.innerHTML += `
      <li class="pb-3 sm:pb-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-500 pb-2 truncate">Anggaran Masuk</p>
            <p class="text-base font-bold text-gray-900 truncate">${formatIDR(savings.amount)}</p>
          </div>
          <div class="inline-flex items-center space-x-2">
            <button class="deleteButton" data-id="${savings.id}">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="black" class="w-5 h-5">
                <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"/>
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;
      
    }
    const deleteButtons = document.querySelectorAll(".deleteButton");
    for(let button of deleteButtons){
      button.addEventListener("click", function(e){
        e.preventDefault()
        const savingsHistory = data.savingsHistory
        const savingsId = Number(button.getAttribute('data-id')); 
        for(let item of savingsHistory){
          if(item.id === savingsId){
            let amount = item.amount
            data.remainingAmount += amount
            let filtered =  filterHistory(savingsHistory,savingsId,data)
            data.savingsHistory = filtered
            data.totalSaved = data.totalSaved - amount;
            data.percentage = Math.floor((data.totalSaved / data.goalAmount) * 100);
                  usersTotalBalance += amount
            localStorage.setItem('LOGIN', JSON.stringify(datas));
          updateUI(data)
          }
        }

      })
    }
    const totalItem = document.createElement('li');
    totalItem.classList.add('pt-3', 'pb-0', 'sm:pt-4');
    totalItem.innerHTML = `
      <div class="flex flex-row justify-between">
        <div class="inline-flex items-center space-x-2">
          <p class="text-xl font-bold text-gray-900 truncate">${formatIDR(data.totalSaved)} <span class="font-normal text-xl text-gray-400">dari ${formatIDR(data.goalAmount)}</span></p>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xl font-bold text-gray-900 truncate text-end">Total</p>
        </div>
      </div>
    `;
    parentList.appendChild(totalItem);
   
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
  const totalSavings = document.querySelector('#totalSavings');
  const remainingSection = document.querySelector("#remainingSection")
  if (data) {
      let total = 0
      for(let item of goalData){
        if(item.savingsHistory.length){
          for(let saving of item.savingsHistory){
            total += saving.amount
          }
        }
      }
      remainingSection.innerHTML = `
      <h1 id="goalName" class="text-black-900 text-3xl mb-4 mt-10 font-semibold">${data.budgetName}</h1>
      <div class="bg-white rounded-lg shadow-sm p-6 relative">


        <div class="p-4">
          <h3 class="text-gray-500 text-sm text-center">Tersisa</h3>
          <p id="remainingAmount" class="text-4xl font-bold text-center text-gray-900 py-2">${formatIDR(data.remainingAmount)}</p>
          <p id="remainingDays" class="text-gray-600 text-center text-sm">tinggal ${data.remainingDays} hari lagi</p>
        </div>

        <div class="w-full bg-gray-200 rounded-full mt-2">
          <div id="progressBar" class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: ${data.percentage}%">${data.percentage}%</div>
        </div>

        <span class="text-xs text-gray-500 mt-1 block text-center pt-4">Hari ini</span>
      </div>
    
 `
      // const deleteButtons = document.querySelectorAll(".deleteBudget");
      // for(let button of deleteButtons){
      //   button.addEventListener("click", function(e){
      //     e.preventDefault()
      //     const dataId = Number(button.getAttribute('data-id')); 
      //     filterBudget(dataId)
          

      //   })
      // }
      totalSavings.textContent = formatIDR(total);
      totalBalance.textContent = formatIDR(usersTotalBalance);
      showDataCards(goalData)
      historyData(focusedItem(goalData))
  }
}
const dreamSection = document.querySelector("#dreamSection")
const parentCard = document.querySelector('#grid-cards');
function showDataCards(arr) {
  parentCard.innerHTML = '';
  if(goalData.length > 1){
    dreamSection.innerHTML=
    `
    <div> <h1 class="text-black-900 text-3xl mb-6 mt-10 font-semibold">Impianmu yang lain</h1>
    </div>
    `
  }
  for (let data of arr) {
    if (!data["selected"]) {
      parentCard.innerHTML += `
        <div class="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm h-[20rem]">
          <div>
            <h5 id="dataTitle" class="mb-4 text-2xl font-medium tracking-tight text-gray-900">${data["budgetName"]}</h5>
          </div>
          <div class="mb-4">
            <p class="py-3 font-bold text-2xl text-gray-700">${formatIDR(data["remainingAmount"])}</p>
            <p class="font-normal text-gray-400">dari ${formatIDR(data["goalAmount"])}</p>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div class="bg-blue-600 h-1.5 rounded-full" style="width: ${data["percentage"]}%"></div>
          </div>
          <button class="detailButton inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" data-id="${data["id"]}">
            Lebih detail
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
  totalBalance.textContent = formatIDR(usersTotalBalance);
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

      localStorage.setItem('LOGIN', JSON.stringify(datas));
      document.querySelector("#budget_name").value = '';
      document.querySelector("#category_name").selectedIndex = 0
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
      // usersTotalBalance = usersTotalBalance - Number(document.querySelector("#currency-input").value)
      localStorage.setItem('LOGIN', JSON.stringify(datas));
      document.querySelector("#budget_name").value = '';
      document.querySelector("#category_name").selectedIndex = 0
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
        let focused = focusedItem(goalData);
        historyData(focused);
        updateUI(focused);
        showDataCards(goalData);
      } 
    
  // klik more detail button
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
        localStorage.setItem('LOGIN', JSON.stringify(datas));
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