# Map Range in JS

Inspired by the [map](https://processing.org/reference/map_.html) function in the creative coding framework [Processing](https://processing.org/) and its counterpart [ofMap](https://openframeworks.cc//documentation/math/ofMath/#!show_ofMap) in [openFrameworks](https://openframeworks.cc/). Especially useful for creative coding applications, e.g. animations.

## Just show me some examples!
### Percentages
The value `0.5` in the range *[0,1]* should return as `50` in the range *[0,100]*:
```
const result = remap(0.5, [0,1], [0, 100]); // result === 50
```
### Normalised (float) position to pixels
```
// A pixel in the middle of the screen, normalised in the range [0,1]
const [x, y] = [0.5, 0.5]

// Convert it to a position on display with dimensions 1920x1080
const [px, py] = remapCoords([x,y], [1,1], [1920,1080])
console.log(px, py) // "960, 540"
```

### Animating from a sine wave to heights in metres
You'll see the value of `x` modulate from -1 to 1 smoothly over time.
The remapping keeps the result in a range between 10 and 1000 (mm? who knows)
```
const start = Date.now();
setInterval(() => {
  const elapsed = Date.now() - start;
  const x = Math.sin(elapsed / 1000);
  const height = remap(x, [-1, 1], [10, 1000])
  console.log(elapsed, x, height);
}, 40)
```

## Details
### `remap`
Basic remapping of a value from one range to another.
> **remap (value, inputRange, targetRange, clamp, shouldRound)**

...where the parameters are:

* `value`: a number
* `inputRange`, `targetRange`: arrays of exactly 2 elements each, i.e `[min,max]`
* `clamp` (optional; default `false`): whether to constrain the result within the given target range
* `shouldRound` (optional; default `false`): whether to round to nearest integer, i.e. only whole numbers

Provide the range (`inputMin`, `inputMax`) that your `value` is currently in, and specify a new range (`outputMin`, `outputMax`) and you'll get back a new value as per the target range.

### `remapArray`
Remap many values at once.
> **remapArray (values, inputRange, targetRange, clamp, shouldRound)**

... where the parameters are the same as above, except that `values` is an array values, not a single value.

### `remapCoords`
Remap coordinates in multiple dimensions.
> **remapCoords (inputCoords, inputDimensions, targetDimensions, clamp, shouldRound**

Given a set of "coordinates" in *X* dimensions,

* `inputCoords` is an array representing coordinates in *X* dimensions, i.e. should have a length of *X*
* `inputDimensions` is an array representing **maximum** extents for the input coordinate system, one per dimension. Should therefore also have a length of *X*
* `targetDimensions` is an array representing **maximum** extents for the target coordinate system you want to remap your coordinates to. Should therefore also have a length of *X*

Keep in mind:
* The **minimum** extent for each dimension is always assumed to be zero (`0`)
* Unlike `remap` and `remapArray`, the default for `shouldRound` is `true` because this is convenient for normalised-to-pixel translations which is the most common use case



## Installation
```
npm install @anselan/maprange
```

Import the basics:
```
import { remap } from '@anselan/maprange'
```
...or import other functions you need:
```
import { remap, remapArray, remapCoords } from '@anselan/maprange'
```


If you cannot use `import`, try `require`:
```
const { remap } = require('@anselan/maprange`)
```

## Why not use something else?
Differs from the following similar JS packages:
* [map-range](https://www.npmjs.com/package/map-range) and [@compactjs/remap](https://www.npmjs.com/package/@compactjs/remap) do not include optional clamping
* [range-map](https://www.npmjs.com/package/range-map) always rounds resulting numbers

None of the above provide the following convenience features:
* `remapArray`
* `remapCoords`

Hopefully, you also find the array-format ranges (`[0,1]`, etc.) more readable than the APIs referenced above, too.