function includesArray(a: number[], b: number[][]): boolean {
  let equals = false;
  b.forEach((array) => {
    let arrayIsEqual = false;
    let counter = 0;
    a.forEach((item) => {
      if (array.includes(item)) counter += 1;
      if (counter === 3) arrayIsEqual = true;
    });
    if (arrayIsEqual) equals = true;
  });
  return equals;
}

export default includesArray;
