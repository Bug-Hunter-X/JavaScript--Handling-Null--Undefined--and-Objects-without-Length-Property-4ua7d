function foo(x) {
  if (x == null || typeof x !== 'object' || !x.hasOwnProperty('length')) {
    return 0; // Handles null, undefined, and non-objects
  }
  return x.length;
}