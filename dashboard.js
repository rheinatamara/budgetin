
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
  
  document.querySelectorAll(".area-chart").forEach((chartElement) => {
      if (typeof ApexCharts !== "undefined") {
          const chart = new ApexCharts(chartElement, options);
          chart.render();
      }
  });

  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
        }
      },
      fontFamily: {
        'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    }
  }
  // const totalBalance = document.querySelector('#totalBalance');
  let datas = JSON.parse(localStorage.getItem('LOGIN'))
  let goalData = datas.data.transactionBudgetData // empty array
  let usersTotalBalance = datas.data.transactionSummary.totalBalance
  const remainingSection = document.querySelector("#remainingSection")
  function formatIDR(num){
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  }
  // let usersTotalBalance = datas.data.transactionSummary.totalBalance
  function render(){
    if(goalData.length > 0){
      for(let data of goalData){
        if(data.selected){
          remainingSection.innerHTML = `
              <h1 class="text-black-900 mb-6 mt-10">${data.budgetName}</h1>
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
        

        }
      }
    }

  }
  render()