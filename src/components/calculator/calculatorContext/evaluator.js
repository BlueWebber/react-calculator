import { evaluate as mathEval } from "mathjs";

function isInt(n) {
  return n % 1 === 0;
}

const mapObj = {
  "√": "sqrt",
  "²": "^2",
  "×": "*",
  "÷": "/",
};

export const evaluateResult = (input) => {
  const strippedInput = input.replace(/√|²|×|÷/gi, function (matched) {
    return mapObj[matched];
  });
  const result = mathEval(strippedInput);
  if (!isInt(result)) {
    return result.toFixed(4);
  }
  return result;
};
