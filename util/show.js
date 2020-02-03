let exp = (expression, comment) => {
  if (comment)
    console.log(comment);
  console.log(`${expression}      //${eval(expression)} `);
};

let err = errMsg => {
  console.error(errMsg);
};
export { exp };
export { err };
