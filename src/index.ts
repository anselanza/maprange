const remap = (value: number, inputRange: number[], targetRange: number[], clamp: boolean = false): number => {
  if (inputRange.length !== 2 || targetRange.length !== 2) {
    throw Error('inputRange and targetRange must be number arrays with exactly 2 elements');
  }
  // let outgoing = (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  let outgoing = (value - inputRange[0]) / (inputRange[1] - inputRange[0]) * (targetRange[1] - targetRange[0]) + targetRange[0];
  if (clamp === true) {
      if (outgoing > targetRange[1]) { 
        return targetRange[1];
      } else if (outgoing < targetRange[0]) { 
        return targetRange[0]
      } else {
        return outgoing
      }
  } else {
    return outgoing;
  }
}

export default remap;