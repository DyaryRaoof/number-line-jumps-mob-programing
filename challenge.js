function kangaroo(x1, v1, x2, v2) {
  if ((x2 - x1) % (v1 - v2) == 0 && v1 > v2) {
    return 'YES';
  }
  return 'NO';
}

//Expected to be NO
console.log(kangaroo(0, 2, 5, 3));
