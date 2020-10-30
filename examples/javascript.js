const remap = require('../dist');
console.log(remap(0.5, [0,1], [0,100]));

const start = Date.now();
setInterval(() => {
  const elapsed = Date.now() - start;
  const x = Math.sin(elapsed / 1000);
  const height = remap(x, [-1, 1], [10, 1000])
  console.log(elapsed, x, height);
}, 40)
