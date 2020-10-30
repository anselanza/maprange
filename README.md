# Map Range in JS

Inspired by the [map](https://processing.org/reference/map_.html) function in the creative coding framework [Processing](https://processing.org/).

Differs from the following similar JS packages:
*  [map-range](https://www.npmjs.com/package/map-range) and [@compactjs/remap](https://www.npmjs.com/package/@compactjs/remap) do not include optional clamping
* [range-map](https://www.npmjs.com/package/range-map) always rounds resulting numbers

## Usage
### Essentially:
> **remap (value, inputRange, targetRange, clamp, shouldRound)**

...where the parameters are:

* `value`: a number
* `inputRange`, `targetRange`: arrays of exactly 2 elements each, i.e `[min,max]`
* `clamp` (optional; default `false`): whether to constrain the result within the given target range
* `shouldRound` (optional; default `false`): whether to round to nearest integer, i.e. only whole numbers

### Description
Provide the range (`inputMin`, `inputMax`) that your `value` is currently in, and specify a new range (`outputMin`, `outputMax`) and you'll get back a new value as per the target range.

## Installation
```
npm install @anselan/remap
```

Then (depending on your environment):
```
import remap from 'remap`
```
...or:
```
const remap = require('remap`)
```

## Useful example applications
### Percentages
The value `0.5` in the range *[0,1]* should return as `50` in the range *[0,100]*:
```
const result = remap(0.5, [0,1], [0, 100]); // result === 50
```
### Float position to pixels
Coordinates can often be normalised in the range [0,1]. Let's try convert to pixel values instead:
```
// These could be coordinates in [0,1] range:
const x = 0.5;
const y = 0.8967;

// Assume a display of 1920x1080 pixels:
const px = remap(0.5, [0,1], [0,1920]);
const py = remap(0.8967, [0,1], [0,1080]);
console.log(px, py); // "960, 968.436"
```
Often you want whole numbers for things like pixels. Optional rounding is included for convenience:
```
const py = remap(0.8967, [0,1], [0,1080], false, true);
console.log(py); // "968" (rounded from 968.436)
```


