/* Function Check Apakah Palindrome atau bukan */
function palin(no) {
  /* Variable */
  var a,
    no,
    b,
    temp = 0;

  /* Simpan nilai awal ke variable baru */
  b = no;
  while (no > 0) {
    /* nilai awal di modulus 10 */
    a = no % 10;
    no = (no / 10) | 0;

    /* Simpan nilai yang sudah modulus*/
    temp = temp * 10 + a;
  }
  /*
   * Check jika nilai yang sudah modulus sama dengan nilai awal maka benar / true
   * jika tidak sama mak salah / false
   */
  if (temp == b) return true;
  else return false;
}

/* Function Generate Palindrome */
function palindrome(range) {
  /* Variable */
  var x = 2,
    y = 2,
    genPalindrom = x * y;

  /* Looping generate palindrom 50 * range */
  for (x; x <= 50 * range; x++) {
    for (y = x; y <= 50 * range; y++) {
      /* jumlahkan nilai x * y yang akan membuat nilai palindrom */
      genPalindrom = x * y;
      /* Check jika palindrom ke function awal */
      if (palin(genPalindrom)) {
        /* Print Hasil generate palindrom */
        console.log(genPalindrom);
      }
    }
  }
}

palindrome(5);
