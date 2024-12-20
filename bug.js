function foo(x) {
  if (x == null) {
    return 0; // Handles null and undefined
  }
  return x.length; //Error if x is not an object with length property
}