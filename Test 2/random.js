function randomArr(r, c) {
  /* Empty Array */
  var newArr = [];

  /* Array String */
  var stringArr = [
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

  /* banyak index array yang akan dibuat */
  for (i = 0; i < r; i++) {
    /* Buat Array Baru */
    newArr[i] = [];

    /* banyak data dalam 1 index array */
    for (j = 0; j < c; j++) {
      /*
       * Check mengambil isi data dari array string
       * Jika di i lebih dari 0 maka index [0] dikali 2
       * jika di i lebih dari 1 maka index [1], [2], [3] ditambah 5
       */

      newArr[i][j] = i > 0 ? stringArr[j + 5] : stringArr[j * 2];
    }
  }

  /* Return Array Baru */
  return newArr;
}

console.log(randomArr(2, 3));
