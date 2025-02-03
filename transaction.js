console.log("ADAAA");
// [TODO] [FEATURE]: TAMBAHKAN TOMBOL KEMBALI KETIKA DI ADD FORM
// data awal
let data = [
  { id: 'TX-EX-01',
    categoryTransaction: "jajan",
    dateTransaction: "2025-02-16",
    nameTransaction: "ASUS ROG RTX 58000",
    nominalTransaction: 28000000,
    noteTransaction: "Bjir sultan ",
    typeTransaction: "transactionExpense",
  },
  { id: 'TX-EX-02',
    categoryTransaction: "kebutuhan",
    dateTransaction: "2015-11-16",
    nameTransaction: "Kulkas 5 pintu",
    nominalTransaction: 29000000,
    noteTransaction: "Mana ada bjir kulkas 5 pintu ",
    typeTransaction: "transactionExpense",
  },
  { id: 'TX-EX-03',
    categoryTransaction: "kebutuhan",
    dateTransaction: "2015-11-16",
    nameTransaction: "Mie ayam ceu dede",
    nominalTransaction: 25000,
    noteTransaction: "enak beut dah",
    typeTransaction: "transactionExpense",
  },
  { id: 'TX-EX-04',
    categoryTransaction: "sedekah",
    dateTransaction: "2020-01-16",
    nameTransaction: "Sedekah subuh",
    nominalTransaction: 2500000,
    noteTransaction: "mudah-mudahan Indonesia bebas corona",
    typeTransaction: "transactionExpense",
  },
  { id: 'TX-IN-01',
    categoryTransaction: "bonus",
    dateTransaction: "2020-01-16",
    nameTransaction: "Bonus kantor cair",
    nominalTransaction: 2500000,
    noteTransaction: "Alhamdulillah cair jugaaaa",
    typeTransaction: "transactionIncome",
  },
  { id: 'TX-IN-06',
    categoryTransaction: "bonus",
    dateTransaction: "2020-01-16",
    nameTransaction: "Bibi ngasih uang banyak",
    nominalTransaction: 2500000,
    noteTransaction: "Banyak beut",
    typeTransaction: "transactionIncome",
  },
];

// fungsi untuk menambah data transaksi
function add(event) {
  event.preventDefault();
  const transactionName = document.getElementById("transactionName");
  const transactionIncome = document.getElementById("transactionIncome");
  const transactionExpense = document.getElementById("transactionExpense");
  const transactionDate = document.getElementById("transactionDate");
  const transactionNominal = document.getElementById("transactionNominal");
  const transactionCategory = document.getElementById("transactionCategory");
  // ![TODO] buat opsi untuk membuat kategori label yang belum ada
  const transactionNote = document.getElementById("transactionNote");
  let transactionType = "";
  if (transactionIncome.checked) {
    transactionType = transactionIncome.value;
  } else if (transactionExpense.checked) {
    transactionType = transactionExpense.value;
  } else {
    transactionType = false;
  }

  

  if (
    transactionName.value.length < 1 ||
    transactionType === false ||
    transactionDate.value.length < 1 ||
    transactionNominal.value.length < 1 ||
    transactionNote.value.length < 1
  ) {
    return alert(`input jangan kosong!`);
  } else {
    let generatedID = generateId(data, transactionType)
    let object = {};
    if (object === undefined) {
      object['id'] = ''
      object["nameTransaction"] = "";
      object["typeTransaction"] = "";
      object["nominalTransaction"] = 0;
      object["dateTransaction"] = "";
      object["categoryTransaction"] = "";
      object["noteTransaction"] = "";
    }
    object['id'] = generatedID
    object["nameTransaction"] = transactionName.value;
    object["typeTransaction"] = transactionType;
    object["nominalTransaction"] = Number(transactionNominal.value);
    object["dateTransaction"] = transactionDate.value;
    object["categoryTransaction"] = transactionCategory.value;
    object["noteTransaction"] = transactionNote.value;

    data.push(object);
    hideFormModal();
    showData(data);
  }
}

const buttonAdd = document.getElementById("buttonAddTransaction");
buttonAdd.addEventListener("click", add);

function generateId(data, transactionType) {
  //cek id
  let num = 0;
  console.log(data.length);
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

  if(num < 10) {
    num = '0' + num
  }
  console.log(num);


  let newID = `TX-${code}-${num}`
  return newID
}

// fungsi untuk memfilter transaksi
// [TODO]: transactionStartFromNominal sama transactionUntilNominal nya masih string belum number
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

  let transactionType = "";
  if (filterTransactionIncome.checked) {
    transactionType = filterTransactionIncome.value;
  } else if (filterTransactionExpense.checked) {
    transactionType = filterTransactionExpense.value;
  }

  let object = {};
  if (object === undefined) {
    object["transactionName"] = "";
    object["transactionType"] = "";
    object["transactionStartFromNominal"] = 0;
    object["transactionUntilNominal"] = 0;
    object["transactionStartFromDate"] = "";
    object["transactionUntilDate"] = "";
    object["filterTransactionCategory"] = "";
  }

  object["transactionName"] = filterTransactionName.value;
  object["transactionType"] = transactionType;
  object["transactionStartFromNominal"] = transactionStartFromNominal.value;
  object["transactionUntilNominal"] = transactionUntilNominal.value;
  object["transactionStartFromDate"] = transactionStartFromDate.value;
  object["transactionUntilDate"] = transactionUntilDate.value;
  object["filterTransactionCategory"] = filterTransactionCategory.value;

  console.log(object);

  // console.log(filterTransactionName.value,);
  // console.log(transactionType);
  // console.log(transactionStartFromDate.value);
  // console.log(transactionUntilDate.value);
  // console.log(transactionStartFromNominal.value);
  // console.log(transactionUntilNominal.value);
  // console.log(filterTransactionCategory.value);
}

const buttonFilter = document.getElementById("transactionFilterButton");

buttonFilter.addEventListener("click", filter);

// fungsi untuk menampilkan (formulir tambah transaksi dan tombol kembali) dan menghilangkan ( tabel transaksi dan tombol add)
function showModalAddForm(event) {
  event.preventDefault();
  console.log(`clicked!`);

  const formTransaction = document.getElementById("addFormTransaction");
  const sidebarAndTable = document.getElementById("transactionDataSidebar");
  const buttonAdd = document.getElementById('addModalsTransactionButton')
  const buttonBack = document.getElementById('buttonBack')
  const titleBar = document.getElementById('titleBar')
  // asalnya form add hidden dan trensaction detail visible
  // ketika diklik
  // form add visible dan transaction detail hidden,
  titleBar.textContent = 'Tambah Transaksi'
  sidebarAndTable.classList.add("hidden");
  buttonAdd.classList.add('invisible')
  formTransaction.classList.remove("hidden");
  buttonBack.classList.remove('hidden')

  //  ketika form submit kembali lagi ke awal
}
const buttonShowModal = document.getElementById("addModalsTransactionButton");
buttonShowModal.addEventListener("click", showModalAddForm);

// fungsi untuk menghilangkan (formulir tambah transaksi dan tombol kembali) dan menampilkan ( tabel transaksi dan tombol add)
function hideFormModal() {
  const formTransaction = document.getElementById("addFormTransaction");
  const sidebarAndTable = document.getElementById("transactionDataSidebar");
  const buttonAdd = document.getElementById('addModalsTransactionButton')
  const buttonBack = document.getElementById('buttonBack')
  const titleBar = document.getElementById('titleBar')

  titleBar.textContent = 'Daftar Transaksi'
  formTransaction.classList.add("hidden");
  buttonBack.classList.add('hidden')
  sidebarAndTable.classList.remove("hidden");
  buttonAdd.classList.remove('invisible')
  
}

const buttonBack = document.getElementById('buttonBack')
buttonBack.addEventListener('click', hideFormModal)

// fungsi untuk memunculkan data transaksi
function showData(data) {
  let array = data;
  let tableData = document.getElementById("transactionTable");
  let template = "";

  for (let a = 0; a < array.length; a++) {
    let transactionData = array[a];
    console.log(transactionData);
    //[TODO] tambahkan id untuk setiap transaksi
    let nameTransaction = transactionData.nameTransaction;
    let nominalTransaction = transactionData.nominalTransaction;
    let dateTransaction = dateToWord(transactionData.dateTransaction);
    //! [TODO] tampilkan data label dengan yang sudah tersimpan sebelumnya
    let categoryTransaction = transactionData.categoryTransaction;
    let typeTransaction = transactionData.typeTransaction;
    //! [TODO] data warna pada label belum dinamis
    let colorTransaction = "yellow";
    let word = "";
    if (typeTransaction === "transactionExpense") {
      word = "Pengeluaran";
    } else if (typeTransaction === "transactionIncome") {
      word = "Pemasukan";
    }

    // console.log(nameTransaction);
    template += `<tr>                  
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
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
                </tr>
    `;
    tableData.innerHTML = template;
    console.log(array);
  }
}

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
showData(data)
