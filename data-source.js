

export let array = [
  {
    id: "TX-EX-01",
    categoryTransaction: "jajan",
    colorTransaction: "blue",
    dateTransaction: "2025-02-16",
    nameTransaction: "ASUS ROG RTX 58000",
    nominalTransaction: 20_000_000,
    noteTransaction: "Bjir sultan ",
    typeTransaction: "transactionExpense",
  },
  {
    id: "TX-EX-02",
    categoryTransaction: "kebutuhan",
    colorTransaction: "yellow",
    dateTransaction: "2015-11-16",
    nameTransaction: "Kulkas 5 pintu",
    nominalTransaction: 2_000_000,
    noteTransaction: "Mana ada bjir kulkas 5 pintu ",
    typeTransaction: "transactionExpense",
  },
  {
    id: "TX-EX-03",
    categoryTransaction: "kebutuhan",
    colorTransaction: "yellow",
    dateTransaction: "2015-11-16",
    nameTransaction: "Mie ayam ceu dede",
    nominalTransaction: 25_000,
    noteTransaction: "enak beut dah",
    typeTransaction: "transactionExpense",
  },
  {
    id: "TX-EX-04",
    categoryTransaction: "sedekah",
    colorTransaction: "cyan",
    dateTransaction: "2020-01-16",
    nameTransaction: "Sedekah subuh",
    nominalTransaction: 25_000,
    noteTransaction: "mudah-mudahan Indonesia bebas corona",
    typeTransaction: "transactionExpense",
  },
  {
    id: "TX-IN-05",
    categoryTransaction: "bonus",
    colorTransaction: "green",
    dateTransaction: "2020-01-16",
    nameTransaction: "Bonus kantor cair",
    nominalTransaction: 30_000_000,
    noteTransaction: "Alhamdulillah cair jugaaaa",
    typeTransaction: "transactionIncome",
  },
  {
    id: "TX-IN-06",
    categoryTransaction: "bonus",
    colorTransaction: "green",
    dateTransaction: "2020-01-16",
    nameTransaction: "Bibi ngasih uang banyak",
    nominalTransaction: 25_000_000,
    noteTransaction: "Banyak beut",
    typeTransaction: "transactionIncome",
  },
];

export function totalBalance(dataSourceArray) {


    let result = {};
  let totalBalance = 0;
  let totalIncome = 0;
  let totalExpense = 0;
  for (let a = 0; a < dataSourceArray.length; a++) {
    let transaction = dataSourceArray[a];
    let typeTransaction = transaction.typeTransaction;
    let nominalTransaction = transaction.nominalTransaction;
    if (typeTransaction === "transactionExpense") {
      totalExpense += nominalTransaction;
    } else if (typeTransaction === "transactionIncome") {
      totalIncome += nominalTransaction;
    }
  }

  totalBalance = totalIncome - totalExpense;

  if (totalIncome >= totalExpense) {
    if (result === undefined) {
      result["totalBalance"] = 0;
      result["totalIncome"] = 0;
      result["totalExpense"] = 0;
    }

    result["totalBalance"] = totalBalance;
    result["totalIncome"] = totalIncome;
    result["totalExpense"] = totalExpense;

    return result;
  } else {
    return `Harap cek kembali tabungan anda, transaksi tidak mencukupi`;
  }

  
}

// let email = document.getElementById("emailInput").value;
// let password = document.getElementById("passwordInput").value;

// export function onlogin(email, password) {
//   let result = {}
    
//     if (!email || !password) {
//         return "Email dan password harus diisi!";
//         ;
//     }

//     if(result === undefined) {
//       result['email'] = ''
//       result['password'] = ''
//     }

//     result['email'] = email
//     result['password'] = password

// return result;
//   // event.preventDefault()

// }

// console.log(onlogin(email, password));




// document.getElementById("loginButton").addEventListener("click", onlogin);

let resultArray = [
  {
    name: "user@example.com",
    password: "password123",
    transactionData: [
      {
        id: "TX-EX-01",
        categoryTransaction: "jajan",
        colorTransaction: "blue",
        dateTransaction: "2025-02-16",
        nameTransaction: "ASUS ROG RTX 58000",
        nominalTransaction: 20_000,
        noteTransaction: "Bjir sultan ",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-EX-07",
        categoryTransaction: "jajan",
        colorTransaction: "blue",
        dateTransaction: "2025-02-16",
        nameTransaction: "Ahmed Beli Bubur",
        nominalTransaction: 20_000,
        noteTransaction: "enak beut",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-EX-02",
        categoryTransaction: "kebutuhan",
        colorTransaction: "yellow",
        dateTransaction: "2015-11-16",
        nameTransaction: "Ahmed beli kulkas 5 pintu",
        nominalTransaction: 2_000_000,
        noteTransaction: "Mana ada bjir kulkas 5 pintu ",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-EX-03",
        categoryTransaction: "kebutuhan",
        colorTransaction: "yellow",
        dateTransaction: "2015-11-16",
        nameTransaction: "Mie ayam ceu dede",
        nominalTransaction: 25_000,
        noteTransaction: "enak beut dah",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-EX-04",
        categoryTransaction: "sedekah",
        colorTransaction: "cyan",
        dateTransaction: "2020-01-16",
        nameTransaction: "Sedekah subuh",
        nominalTransaction: 25_000_000,
        noteTransaction: "mudah-mudahan Indonesia bebas corona",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-IN-05",
        categoryTransaction: "bonus",
        colorTransaction: "green",
        dateTransaction: "2020-01-16",
        nameTransaction: "Bonus kantor cair",
        nominalTransaction: 30_000_000,
        noteTransaction: "Alhamdulillah cair jugaaaa",
        typeTransaction: "transactionIncome",
      },
      {
        id: "TX-IN-06",
        categoryTransaction: "bonus",
        colorTransaction: "green",
        dateTransaction: "2020-01-16",
        nameTransaction: "Bibi ngasih uang banyak",
        nominalTransaction: 25_000_000,
        noteTransaction: "Banyak beut",
        typeTransaction: "transactionIncome",
      },
    ],
    transactionBudgetData: [],
  },
  {
    name: "darius@gmail.com",
    password: "pass123",
    transactionData: [
      {
        id: "TX-EX-01",
        categoryTransaction: "jajan",
        colorTransaction: "blue",
        dateTransaction: "2025-02-16",
        nameTransaction: "ASUS ROG RTX 58000",
        nominalTransaction: 20_000,
        noteTransaction: "Bjir sultan ",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-EX-02",
        categoryTransaction: "kebutuhan",
        colorTransaction: "yellow",
        dateTransaction: "2015-11-16",
        nameTransaction: "Kulkas 5 pintu",
        nominalTransaction: 2_000_000,
        noteTransaction: "Mana ada bjir kulkas 5 pintu ",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-EX-03",
        categoryTransaction: "kebutuhan",
        colorTransaction: "yellow",
        dateTransaction: "2015-11-16",
        nameTransaction: "Mie ayam ceu dede",
        nominalTransaction: 25_000,
        noteTransaction: "enak beut dah",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-EX-04",
        categoryTransaction: "sedekah",
        colorTransaction: "cyan",
        dateTransaction: "2020-01-16",
        nameTransaction: "Sedekah subuh",
        nominalTransaction: 25_000,
        noteTransaction: "mudah-mudahan Indonesia bebas corona",
        typeTransaction: "transactionExpense",
      },
      {
        id: "TX-IN-05",
        categoryTransaction: "bonus",
        colorTransaction: "green",
        dateTransaction: "2020-01-16",
        nameTransaction: "Bonus kantor cair",
        nominalTransaction: 30_000_000,
        noteTransaction: "Alhamdulillah cair jugaaaa",
        typeTransaction: "transactionIncome",
      },
      {
        id: "TX-IN-06",
        categoryTransaction: "bonus",
        colorTransaction: "green",
        dateTransaction: "2020-01-16",
        nameTransaction: "Bibi ngasih uang banyak",
        nominalTransaction: 25_000_000,
        noteTransaction: "Banyak beut",
        typeTransaction: "transactionIncome",
      },
    ],
    transactionBudgetData: [],
  },
  {
    name: 'Jane Doe',
    password: 'jaden123',
    transactionData : [],
    transactionBudgetData : []
  }
];


//MENYATUKAN TRANSACTION SUMMARY DGN OBJEK
function transactionSummary(dataSource) {


    for(let a = 0; a < dataSource.length; a++) {
      let count = totalBalance(dataSource[a].transactionData)
      // console.log(count);
      if(dataSource[a]['transactionSummary'] === undefined) {
        dataSource[a]['transactionSummary'] = count
      }
    }
    
    return resultArray;


}
//USER BARU

function newUser(user, password, array) {
  let result = {};
  if (result["user"] === undefined) {
    result["user"] = "";
    result["password"] = "";
  }
  result["user"] = user;
  result["password"] = password;
  result["transactionData"] = [];
  result["transactionBudgetData"] = [];

  array.push(result);
  return array;
}

function loginStatus(summarizedTransaction, user, password) {
  let result = {}
  let userBoolean = false;
  let pwdBoolean = false
  let word = ''
  if(user === undefined || password === undefined) {
    return `Harap isi input`
  } else {
    for(let a = 0; a < summarizedTransaction.length; a++) {
      let transaction = summarizedTransaction[a]
      let nameUser = transaction.name
      let pwdUser = transaction.password
  
      if(nameUser === user) {
        userBoolean = true
      }
  
      if(pwdUser === password) {
        pwdBoolean = true
      }
  
      if (userBoolean === true && pwdBoolean === true ) {
        word = 'Login berhasil'
        if(result['data'] === undefined) {
          result['data'] = transaction
        }
      } else if(userBoolean === true || pwdBoolean === true ){
        word =  'Username atau password salah'
      } else {
         word =  'Username belum terdaftar'
      }
  
    }
  
    if(result['statusLogin'] === undefined) {
      result['statusLogin'] = ''
    }
    result['statusLogin'] = word
    return result

  }

   
  }

// console.log(newUser(user, password, resultArray));
// let loginData = onlogin()
//LOGIN STATUS




// let name = "user@example.com";
// let katakunci = "password123";

// export let dataTransaksi = statusLogin.data.transactionData
// export let dataSummary = statusLogin.data.transactionSummary

// console.log(dataTransaksi);





window.addEventListener('load', function() {
  if(typeof (Storage) !== 'undefined') {
    if(localStorage.getItem('DATABASE') === null) {
      localStorage.setItem('DATABASE', JSON.stringify(resultArray))
    }


    addLoginData()
  } else {
    alert('Browser anda tidak mendukung local storage')
  }
})

// let data = JSON.parse(localStorage.getItem('DATABASE'));
// let summarizedFromLocalStorage = transactionSummary(data)
// console.log(summarizedFromLocalStorage);
// console.log(summarizedFromLocalStorage);

// let login = loginData()
export let LOGIN_DATA = `LOGIN`

// let loginStringify = JSON.stringify(loginData())
// console.log(loginStringify, 'login');

function addLoginData () {
  
}

// console.log(JSON.parse(loginStringify));

let loginObject = localStorage.getItem('LOGIN')
export let loginParsed = JSON.parse(loginObject)
console.log(loginParsed);

function loginData() {
  let name = document.getElementById("emailInput").value;;
  let katakunci = document.getElementById("passwordInput").value;
  let data = JSON.parse(localStorage.getItem('DATABASE'))
  let summarized = transactionSummary(data)
  console.log(summarized);
let statusLogin = loginStatus(summarized, name, katakunci)
if(localStorage.getItem('LOGIN') === null) {
  localStorage.setItem('LOGIN', JSON.stringify(statusLogin))
} else {
  localStorage.setItem('LOGIN', JSON.stringify(statusLogin))
}
console.log(statusLogin);
location.href = './dashboard.html'
}

let button = document.getElementById('loginButton')
window.addEventListener('DOMContentLoaded', function () {
  button.addEventListener('click', function() {
    loginData()
  })
})
