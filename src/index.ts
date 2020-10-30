const remap = (value: number, start1: number, stop1: number, start2: number, stop2: number, clamp: boolean = false): number => {
  let outgoing = (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
  if (clamp === true) {
      if (outgoing > stop2) { 
        return stop2;
      } else if (outgoing < start2) { 
        return start2
      } else {
        return outgoing
      }
  } else {
    return outgoing;
  }
}

export default remap;