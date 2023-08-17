const fs = require("fs");

const loans = [
  { balance: 126000, rate: 13, minimumPayment: 1400 },
  { balance: 150000, rate: 9.81, minimumPayment: 1300 },
  { balance: 68000, rate: 12, minimumPayment: 700 },
  { balance: 9000, rate: 13.5, minimumPayment: 110 },
  { balance: 55000, rate: 4, minimumPayment: 200 },
];

function jsonToCSV(array) {
  const headers =
    Object.keys(array[0])
      .map((_) => JSON.stringify(_))
      .join(",") + "\n";

  const outdata = array.reduce((acc, row) => {
    return (
      acc +
      Object.values(row)
        .map((_) => JSON.stringify(_))
        .join(",") +
      "\n"
    );
  }, headers);

  fs.writeFile("file.csv", outdata, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("FILE SUCCESSFULLY WRITTEN!");
  });
}
jsonToCSV(loans);
