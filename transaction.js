import {loginParsed, LOGIN_DATA} from "./data-source.js";

// console.log("ADAAA");
//[TODO] [FEATURE]: TAMBAHKAN LOCALSTORAGE
// data awal
// console.log(loginParsed);
// let SESSION_LOGIN_KEY = `SESSION_LOGIN-${statusLogin.data.name}`
let dataFromLocalStorage = JSON.parse(localStorage.getItem(LOGIN_DATA));
let data = dataFromLocalStorage.data.transactionData
// console.log(dataFromLocalStorage.data.transactionSummary.totalBalance);
// console.log(data);




// fungsi untuk menambah data transaksi
function add(event) {
  // event.preventDefault()
  const transactionName = document.getElementById("transactionName");
  const transactionIncome = document.getElementById("transactionIncome");
  const transactionExpense = document.getElementById("transactionExpense");
  const transactionDate = document.getElementById("transactionDate");
  const transactionNominal = document.getElementById("transactionNominal");
  let transactionCategoryAndColor = document.getElementById("transactionCategory").value;
  let filteredValue = filteringValue(transactionCategoryAndColor)
  let transactionCategory = filteredValue[0];
  let transactionColor = filteredValue[1]
  const labelDefault = document.getElementById('newLabel')
  const transactionNote = document.getElementById("transactionNote");
  let transactionType = "";
  if (transactionIncome.checked) {
    transactionType = transactionIncome.value;
  } else if (transactionExpense.checked) {
    transactionType = transactionExpense.value;
  } else {
    transactionType = false;
  }

  // if(labelDefault.checked) {
  //   transactionCategory = document.getElementById('newLabelCategoryName').value
  //   transactionColor = document.getElementById('newLabelCategoryColor').value
  // }

  if (
    transactionName.value.length < 1 ||
    transactionType === false ||
    transactionDate.value.length < 1 ||
    transactionNominal.value.length < 1 ||
    transactionNote.value.length < 1 || transactionCategory === 'default' || !transactionCategory
  ) {
    return alert(`input jangan kosong!`);
  } else {
    let generatedID = generateId(data, transactionType);
    let object = {};
    if (object === undefined) {
      object["id"] = "";
      object["nameTransaction"] = "";
      object["typeTransaction"] = "";
      object["nominalTransaction"] = 0;
      object['colorTransaction'] = ''
      object["dateTransaction"] = "";
      object["categoryTransaction"] = "";
      object["noteTransaction"] = "";
    }
    object["id"] = generatedID;
    object["nameTransaction"] = transactionName.value;
    object["typeTransaction"] = transactionType;
    object["nominalTransaction"] = Number(transactionNominal.value);
    object['colorTransaction'] = transactionColor
    object["dateTransaction"] = transactionDate.value;
    object["categoryTransaction"] = transactionCategory;
    object["noteTransaction"] = transactionNote.value;

   
      loginParsed.data.transactionData.push(object);
      localStorage.setItem(LOGIN_DATA, JSON.stringify(loginParsed))

    // console.log(i);
    
    // hideFormModal();
    showData(data);
  }
}


const buttonAdd = document.getElementById("buttonAddTransaction");
buttonAdd.addEventListener("click", add);


function filteringValue(selectValue) {
  let array = []
  let container = ''
  for (let a = 0; a <= selectValue.length; a++) {
      let index = selectValue[a];
      if(index === '|' || index === undefined) {
          array.push(container)
          container = ''
      } else {
          container += index
      }
  }
  
  return array
}

function generateId(data, transactionType) {
  //cek id
  let num = 0;
  // console.log(data.length);
  if (data.length < 1) {
    num = 1;
  } else {
    num = data.length + 1;
  }

  let code = "";

  if (transactionType === "transactionExpense") {
    code += "EX";
  } else if (transactionType === "transactionIncome") {
    code += "IN";
  } else {
    return alert(`tipe transaksi tidak ada`);
  }

  if (num < 10) {
    num = "0" + num;
  }
  // console.log(num);

  let newID = `TX-${code}-${num}`;
  return newID;
}

// fungsi untuk memfilter transaksi
function filter(event) {
  event.preventDefault();
  const filterTransactionName = document.getElementById(
    "filterTransactionName"
  );
  const filterTransactionIncome = document.getElementById(
    "filterTransactionIncome"
  );
  const filterTransactionExpense = document.getElementById(
    "filterTransactionExpense"
  );
  const transactionStartFromNominal = document.getElementById(
    "transactionStartFromNominal"
  );
  const transactionUntilNominal = document.getElementById(
    "transactionUntilNominal"
  );
  const filterTransactionCategory = document.getElementById(
    "filterTransactionCategory"
  );
  const transactionStartFromDate = document.getElementById(
    "transactionStartFromDate"
  );
  const transactionUntilDate = document.getElementById("transactionUntilDate");



  let object = {};


  if (object === undefined) {
    object["transactionName"] = "";
    object["transactionStartFromNominal"] = 0;
    object["transactionUntilNominal"] = 0;
    object["transactionStartFromDate"] = "";
    object["transactionUntilDate"] = "";
    object["filterTransactionCategory"] = "";
  }

  object["transactionName"] = filterTransactionName.value;

  if(object['transactionType'] === undefined) {
    object['transactionType'] = []
  }
  if (filterTransactionIncome.checked) {
    object['transactionType'].push(filterTransactionIncome.value);
  }
  
  if (filterTransactionExpense.checked) {
    object['transactionType'].push(filterTransactionExpense.value);
  }
  object["transactionStartFromNominal"] = Number(transactionStartFromNominal.value);
  object["transactionUntilNominal"] = Number(transactionUntilNominal.value)
  object["transactionStartFromDate"] = transactionStartFromDate.value;
  object["transactionUntilDate"] = transactionUntilDate.value;
  object["filterTransactionCategory"] = filterTransactionCategory.value;

  // console.log(object)
}

// const buttonFilter = document.getElementById("transactionFilterButton");

// buttonFilter.addEventListener("click", filter);

// fungsi untuk menampilkan (formulir tambah transaksi dan tombol kembali) dan menghilangkan ( tabel transaksi dan tombol add)
// function showModalAddForm(event) {
//   event.preventDefault();
//   // console.log(`clicked!`);

//   const formTransaction = document.getElementById("addFormTransaction");
//   const sidebarAndTable = document.getElementById("transactionDataSidebar");
//   const buttonAdd = document.getElementById("addModalsTransactionButton");
//   const buttonBack = document.getElementById("buttonBack");
//   const titleBar = document.getElementById("titleBar");
//   // asalnya form add hidden dan trensaction detail visible
//   // ketika diklik
//   // form add visible dan transaction detail hidden,
//   titleBar.textContent = "Tambah Transaksi";
//   sidebarAndTable.classList.add("hidden");
//   buttonAdd.classList.add("invisible");
//   formTransaction.classList.remove("hidden");
//   buttonBack.classList.remove("hidden");

//   //  ketika form submit kembali lagi ke awal
// }
// const buttonShowModal = document.getElementById("addModalsTransactionButton");
// buttonShowModal.addEventListener("click", showModalAddForm);

// fungsi untuk menghilangkan (formulir tambah transaksi dan tombol kembali) dan menampilkan ( tabel transaksi dan tombol add)
// function hideFormModal() {
//   const formTransaction = document.getElementById("addFormTransaction");
//   const sidebarAndTable = document.getElementById("transactionDataSidebar");
//   const buttonAdd = document.getElementById("addModalsTransactionButton");
//   const buttonBack = document.getElementById("buttonBack");
//   const titleBar = document.getElementById("titleBar");

//   titleBar.textContent = "Daftar Transaksi";
//   formTransaction.classList.add("hidden");
//   buttonBack.classList.add("hidden");
//   sidebarAndTable.classList.remove("hidden");
//   buttonAdd.classList.remove("invisible");
// }

// const buttonBack = document.getElementById("buttonBack");
// buttonBack.addEventListener("click", hideFormModal);

// fungsi untuk memunculkan data transaksi
function showData(data) {
  let array = data;
  if(array === undefined) {
    alert('Data kosong!')
  } else {
    //todo: tampilkan transaksi kosong ketika data undefined
  let tableData = document.getElementById("transactionTable");
  let template = "";

  for (let a = 0; a < array.length; a++) {
    let transactionData = array[a];
    // console.log(transactionData, "data");
    let id = transactionData.id
    let nameTransaction = transactionData.nameTransaction;
    let nominalTransaction = transactionData.nominalTransaction;
    let dateTransaction = dateToWord(transactionData.dateTransaction);
    let categoryTransaction = transactionData.categoryTransaction;
    let typeTransaction = transactionData.typeTransaction;
    let colorTransaction = transactionData.colorTransaction;
    let word = "";
    if (typeTransaction === "transactionExpense") {
      word = "Pengeluaran";
    } else if (typeTransaction === "transactionIncome") {
      word = "Pemasukan";
    }

    // console.log(array.length);

    template += `<tr id="${id}">                  
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900" >
                    ${nameTransaction}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Rp. ${nominalTransaction}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${word}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${dateTransaction}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${colorTransaction}-100 text-${colorTransaction}-800"
                    >
                      ${categoryTransaction}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                  class="items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
                  id="deleteBtn"
                  >
                    Hapus
                  </button>
                  <button
                  class="items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  id="editBtn"
                  >
                    Edit
                  </button>
                </td>
                </tr>
    `;
    tableData.innerHTML = template;
    // console.log(array);
  }
  }
  
}

function dynamicLabel(data) {
  if(data === undefined) {
    alert(`Data label kosong!`)
  } else {
    let categoryArray = [];
    for (let a = 0; a < data.length; a++) {
      let transaction = data[a];
      let colorTransaction = transaction.colorTransaction;
      let transactionCategory = transaction.categoryTransaction;
      categoryArray.push([transactionCategory, colorTransaction]);
    }
  
    let template = `
    <option selected value="default">Pilih kategori disini</option>
    `;
    for (let b = 0; b < categoryArray.length; b++) {
      let categoryAndColor = categoryArray[b];
      let categoryName = categoryAndColor[0];
      let categoryColor = categoryAndColor[1];
      // console.log(categoryAndColor);
  
      template += `
        
        <option
        class="items-center px-3 py-1 rounded-full text-sm font-medium bg-${categoryColor}-100 text-${categoryColor}-800"
        value="${categoryName}|${categoryColor}"
        >
        ${categoryName}
        </option>
        `;
    }
    let categoryContainer = document.getElementById("transactionCategory");
    // let categoryFilterContainer = document.getElementById("filterTransactionCategory");
    categoryContainer.innerHTML = template;
    // categoryFilterContainer.innerHTML = template;
  }

}

function label() {
  const labelDefault = document.getElementById('newLabel')
  const newLabelCategoryName = document.getElementById('newLabelCategoryName')
  const newLabelCategoryColor = document.getElementById('newLabelCategoryColor')
  const transactionCategory = document.getElementById('transactionCategory')
  if(labelDefault.checked === true) {
    transactionCategory.value = 'default';
    transactionCategory.disabled = true
    newLabelCategoryName.required = true
    newLabelCategoryColor.required = true
  } else {
    transactionCategory.disabled = false
    transactionCategory.required = true
    newLabelCategoryName.disabled = true
    newLabelCategoryColor.disabled = true
  }
}
// const labelDefault = document.getElementById('newLabel')
// labelDefault.addEventListener('change', label)

// fungsi untuk mengubah format tanggal YYYY-MM-DD menjadi kata yg dipahami
// data = '2018-09-01'
function dateToWord(data) {
  let array = [];
  let container = "";
  for (let a = 0; a <= data.length; a++) {
    let digit = data[a];
    if (digit === "-" || digit === undefined) {
      array.push(container);
      container = "";
    } else {
      container += digit;
    }
  }
  let groupMonth = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let year = array[0];
  let month = array[1];
  let date = array[2];
  let newDate = "";
  for (let a = 0; a < groupMonth.length; a++) {
    if (month[0] === "0") {
      month = month[1] - 1;
    } else if (month[0] === "1") {
      month = month - 1;
    }

    newDate = `${date} ${groupMonth[month]} ${year}`;
    return newDate;
  }
}
// buat munculin data awal
showData(data);
// memunculkan kumpulan labe
dynamicLabel(data)
