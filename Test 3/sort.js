/* Array Numeric */
let numeric = [10, 9, 102, 66, 5421, 1, 0];

/* Array String */
let string = [
  "Wulan",
  "Raharjo",
  "Widya",
  "Yuda",
  "Cinta",
  "Iskandar",
  "Hidayat",
  "Kusuma",
  "Indah",
  "Jusuf",
];

/* Array Alphanumeric */
let alphanumeric = [
  "Wulan",
  "Raharjo",
  "Widya",
  10,
  9,
  102,
  66,
  5421,
  1,
  0,
  "Yuda",
  "Cinta",
  "Iskandar",
  "Hidayat",
  "Kusuma",
  "Indah",
  "Jusuf",
];

/* Function Check banyaknya index array */
function length(s) {
  var length = 0;
  while (s[length] !== undefined) length++;
  return length;
}

/* Function Sort */
function sort(array, length) {
  /* Anggap variable done dinyatakan salah */
  var done = false;
  while (!done) {
    /* variable done dinyatakan benar */
    done = true;
    /* Loop dari nilai array */
    for (var i = 1; i < length; i += 1) {
      /* Check setiap nilai array[i - 1] > array[] */
      /* i = -1 > 0
       * i = 0 > 1
       * i = 1 > 2
       * i = 2 > 3
       * sampai array tersebut habis
       */

      if (array[i - 1] > array[i]) {
        /* done dinyatakan salah karena nilai dari semua array sudah di sorting */
        done = false;
        /* simpan ke dalam temporary baru */
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  /* Return Array Baru */
  return array;
}

let lNumeric = length(numeric);
let lString = length(string);
let lAlpha = length(string);

console.log(sort(numeric, lNumeric));
console.log(sort(string, lString));
console.log(sort(alphanumeric, lAlpha));
