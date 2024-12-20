# JavaScript: Handling Null, Undefined, and Objects without Length Property

This repository demonstrates a common JavaScript error: attempting to access the `length` property of a value that isn't an object with a `length` property (e.g., null, undefined, or a number).  The code in `bug.js` shows the erroneous approach, while `bugSolution.js` provides a robust solution.

## The Problem

The `foo` function in `bug.js` attempts to handle `null` and `undefined` values correctly. However, it fails to handle cases where `x` might be a primitive data type (like a number or string) that doesn't have a `length` property. This leads to a runtime error.

## The Solution

`bugSolution.js` presents an improved version of `foo` that explicitly checks if `x` is an object and has a `length` property before attempting to access it. This prevents the runtime error and makes the function more robust.