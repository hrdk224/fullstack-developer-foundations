function processData(multiplier, ...values) {
  let innerArrow = () => {
    return arguments[0];
  };

  console.log('Arrow evaluation:', innerArrow()); // 2
  return values.map(num => num * multiplier);
}

let dataArray = [10, 20, 30];
let result = processData(2, ...dataArray);
console.log('Final result:', result); // [20, 40, 60 ]
