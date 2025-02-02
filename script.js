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
    transactionType = false
  }

  if(transactionName.value.length < 1 || transactionType === false || transactionDate.value.length < 1 || transactionNominal.value.length < 1 || transactionNote.value.length < 1) {
    return alert(`input jangan kosong!`)
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
  console.log(data);
//   console.log(typeof transactionName.value, transactionName.value.length);
//   console.log(transactionType);
//   console.log(typeof transactionDate.value, transactionDate.value.length);
//   console.log(typeof transactionNominal.value, transactionNominal.value.length);
//   console.log(typeof transactionCategory.value, transactionCategory.value.length);
//   console.log(typeof transactionNote.value, transactionNote.value.length);
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
