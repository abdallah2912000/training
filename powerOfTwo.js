function isPowerOfTwo(e) {
  for (let i = 0; i < e; i++) {
    if ((e / 2) % 2 === 0) {
      return true;
    }
    return e === 2 || e === 1 ? true : false;
  }
}

console.log(isPowerOfTwo(3));
