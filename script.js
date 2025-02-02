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

