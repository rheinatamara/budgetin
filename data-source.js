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

export default function totalBalance(dataSourceArray) {
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

console.log(totalBalance(array));

