console.log("ADAAA");
// const buttonEdit = document.getElementById('button-edit')
// function editTransaksi() {
//     console.log('buttonEdit');
// }

let data = [];
// buttonEdit.addEventListener('click', editTransaksi)
function add(event) {
  event.preventDefault();
  const transactionName = document.getElementById("transactionName");
  const transactionIncome = document.getElementById("transactionIncome");
  const transactionExpense = document.getElementById("transactionExpense");
  const transactionDate = document.getElementById("transactionDate");
  const transactionNominal = document.getElementById("transactionNominal");
  const transactionCategory = document.getElementById("transactionCategory");
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
    let object = {};
    if (object === undefined) {
      object["nameTransaction"] = "";
      object["typeTransaction"] = "";
      object["nominalTransaction"] = 0;
      object["dateTransaction"] = "";
      object["categoryTransaction"] = "";
      object["noteTransaction"] = "";
    }
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

function showModalAddForm(event) {
  event.preventDefault();
  console.log(`clicked!`);

  const formTransaction = document.getElementById("addFormTransaction");
  const sidebarAndTable = document.getElementById("transactionDataSidebar");
  // asalnya form add hidden dan trensaction detail visible
  // ketika diklik
  // form add visible dan transaction detail hidden,
  sidebarAndTable.classList.add("hidden");
  formTransaction.classList.remove("hidden");

  //  ketika form submit kembali lagi ke awal
}
const buttonShowModal = document.getElementById("addModalsTransactionButton");
buttonShowModal.addEventListener("click", showModalAddForm);

function hideFormModal() {
  const formTransaction = document.getElementById("addFormTransaction");
  const sidebarAndTable = document.getElementById("transactionDataSidebar");
  formTransaction.classList.add("hidden");
  sidebarAndTable.classList.remove("hidden");
}

function showData(data) {
  let array = data;
  let tableData = document.getElementById("transactionTable");
  let template = '';

  for (let a = 0; a < array.length; a++) {
    let transactionData = array[a];
    console.log(transactionData);
    let nameTransaction = transactionData.nameTransaction;
    let nominalTransaction = transactionData.nominalTransaction;
    let dateTransaction = dateToWord(transactionData.dateTransaction);
    let categoryTransaction = transactionData.categoryTransaction;
    let typeTransaction = transactionData.typeTransaction;
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
  }
}

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
