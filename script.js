console.log('ADAAA');
// const buttonEdit = document.getElementById('button-edit') 
// function editTransaksi() {
//     console.log('buttonEdit');
// }

// buttonEdit.addEventListener('click', editTransaksi)
function add (event) {
    event.preventDefault()
    const transactionName = document.getElementById('transactionName')
    const transactionIncome = document.getElementById('transactionIncome')
    const transactionExpense = document.getElementById('transactionExpense')
    const transactionDate = document.getElementById('transactionDate')
    const transactionNominal = document.getElementById('transactionNominal')
    const transactionCategory = document.getElementById('transactionCategory')
    const transactionNote = document.getElementById('transactionNote')
    let transactionType = ''
    if(transactionIncome.checked) {
        transactionType = transactionIncome.value
    } else if (transactionExpense.checked) {
        transactionType = transactionExpense.value
    }
    console.log(transactionName.value,);
    console.log(transactionType);
    console.log(transactionDate.value);
    console.log(transactionNominal.value);
    console.log(transactionCategory.value);
    console.log(transactionNote.value);
}

const buttonAdd = document.getElementById('buttonAddTransaction')
buttonAdd.addEventListener('click', add)

function filter (event) {
    event.preventDefault()
    const filterTransactionName = document.getElementById('filterTransactionName')
    const filterTransactionIncome = document.getElementById('filterTransactionIncome')
    const filterTransactionExpense = document.getElementById('filterTransactionExpense')
    const transactionStartFromNominal = document.getElementById('transactionStartFromNominal')
    const transactionUntilNominal = document.getElementById('transactionUntilNominal')
    const filterTransactionCategory = document.getElementById('filterTransactionCategory')
    const transactionStartFromDate = document.getElementById('transactionStartFromDate')
    const transactionUntilDate = document.getElementById('transactionUntilDate')

    let transactionType = ''
    if(filterTransactionIncome.checked) {
        transactionType = filterTransactionIncome.value
    } else if (filterTransactionExpense.checked) {
        transactionType = filterTransactionExpense.value
    }
    console.log(filterTransactionName.value,);
    console.log(transactionType);
    console.log(transactionStartFromDate.value);
    console.log(transactionUntilDate.value);
    console.log(transactionStartFromNominal.value);
    console.log(transactionUntilNominal.value);
    console.log(filterTransactionCategory.value);
}

const buttonFilter = document.getElementById('transactionFilterButton')
buttonFilter.addEventListener('click', filter)
