// Allowed numeral systems (can be adapted if the assignment specifies differently)
function permittedInputSystems() {
  return [2, 10, 16];
}

function permittedOutputSystems() {
  return [2, 10, 16];
}


// Helper: convert single digit character to numeric value (0–15)
function charToValue(ch) {
  const upper = ch.toUpperCase();
  if (upper >= "0" && upper <= "9") {
    return upper.charCodeAt(0) - "0".charCodeAt(0);
  }
  if (upper >= "A" && upper <= "F") {
    return upper.charCodeAt(0) - "A".charCodeAt(0) + 10;
  }
  return -1;
}

// Helper: convert numeric value 0–15 to digit character
function valueToChar(val) {
  if (val >= 0 && val <= 9) {
    return String.fromCharCode("0".charCodeAt(0) + val);
  }
  return String.fromCharCode("A".charCodeAt(0) + (val - 10));
}

// Convert from any base (2–16) to decimal (base 10)
function toDecimal(valueStr, base) {
  let result = 0;
  for (let i = 0; i < valueStr.length; i++) {
    const digitVal = charToValue(valueStr[i]);
    if (digitVal < 0 || digitVal >= base) {
      throw new Error("Invalid digit for base " + base + ": " + valueStr[i]);
    }
    result = result * base + digitVal;
  }
  return result;
}

// Convert from decimal (base 10) to any base (2–16)
function fromDecimal(decimalNumber, base) {
  if (decimalNumber === 0) {
    return "0";
  }

  let n = decimalNumber;
  let result = "";

  while (n > 0) {
    const remainder = n % base;
    result = valueToChar(remainder) + result;
    n = Math.floor(n / base);
  }

  return result;
}


// Main conversion function required by the tests
function main(valueStr, inputBase, outputBase) {
  if (!permittedInputSystems().includes(inputBase)) {
    throw new Error("Input base not permitted: " + inputBase);
  }
  if (!permittedOutputSystems().includes(outputBase)) {
    throw new Error("Output base not permitted: " + outputBase);
  }

  const vStr = String(valueStr).trim();
  const decimalValue = toDecimal(vStr, inputBase);
  const result = fromDecimal(decimalValue, outputBase);

  return result;
}


// Explicit exports required by tests
export { main, permittedInputSystems, permittedOutputSystems };
