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

// console.log(totalBalance(array));

// let login_db = [
//   {
//     name: "John Doe",
//     password: "johnd03",
//     transactionData: [
//       {
//         id: "TX-EX-01",
//         categoryTransaction: "jajan JOHN",
//         colorTransaction: "blue",
//         dateTransaction: "2025-02-16",
//         nameTransaction: "ASUS ROG RTX 58000",
//         nominalTransaction: 20_000_000,
//         noteTransaction: "Bjir sultan ",
//         typeTransaction: "transactionExpense",
//       },
//     ],
//     transactionBudgetData: [],
//   },

// ];
// console.log(login_db);

let resultArray = [
  {
    name: "Ahmed",
    password: "1321321",
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
        nominalTransaction: 25_000_000_000,
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
    name: "darius",
    password: "0909",
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

// console.log(newUser(user, password, resultArray));

//LOGIN STATUS
let name = "Ahmed";
let katakunci = "1321321";
let summarized = transactionSummary(resultArray)
function loginStatus(summarizedTransaction, user, password) {
  let result = {}
  let userBoolean = false;
  let pwdBoolean = false
  let word = ''
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
    } else if(userBoolean === false && pwdBoolean === false) {
      word =  'Akun belum terdaftar'
    }

  }

  if(result['statusLogin'] === undefined) {
    result['statusLogin'] = ''
  }
  result['statusLogin'] = word
  return result
}

let statusLogin = loginStatus(summarized, name, katakunci)
console.log(statusLogin);

