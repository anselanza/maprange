const checkValidRanges = (arrays: number[][]): boolean => 
  arrays.reduce((result, a) => a.length !== 2 || a[0] === a[1] ? false : result, true)

const remap = (value: number, inputRange: number[], targetRange: number[], clamp: boolean = false, shouldRound: boolean = false): number => {
  if (!checkValidRanges([inputRange, targetRange])) {
    throw Error('inputRange and targetRange must be number arrays with exactly 2 elements, and these must differ; you gave:' 
    + JSON.stringify({inputRange, targetRange}));
  }
  // let outgoing = (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  let outgoing = (value - inputRange[0]) / (inputRange[1] - inputRange[0]) * (targetRange[1] - targetRange[0]) + targetRange[0];
  if (clamp === true) {
    if (targetRange[0] < targetRange[1]) { // normal output range
      if (outgoing > targetRange[1]) { 
        outgoing = targetRange[1];
      } else if (outgoing < targetRange[0]) { 
        outgoing = targetRange[0]
      } 
    } else { // inverse output range
      if (outgoing < targetRange[1]) { 
        outgoing = targetRange[1];
      } else if (outgoing > targetRange[0]) { 
        outgoing = targetRange[0]
      } 
    }

  } 
  return shouldRound ? Math.round(outgoing) : outgoing; 
}

const remapArray = (values: number[], inputRange: number[], targetRange: number[], clamp: boolean = false, shouldRound: boolean = false): number[] => 
  values.reduce((result, v) => [
    ...result,
    remap(v, inputRange, targetRange, clamp, shouldRound)
  ], [])

const remapCoords = (inputCoords: number[], inputDimensions: number[], targetDimensions: number[], clamp=false, shouldRound = false): number[] => {
  if (inputCoords.length !== targetDimensions.length || inputCoords.length !== inputDimensions.length) {
    throw Error('coordinates must have same number of dimensions as input and target dimensions')
  }
  return inputCoords.map((x, index) => remap(x, [0, inputDimensions[index]], [0, targetDimensions[index]], clamp, shouldRound))
}

export {
  remap,
  remapArray,
  remapCoords
}
