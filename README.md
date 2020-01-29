![screen-info.js](http://matswainson.com/wp-content/uploads/2017/01/detect-screen.png)

# screen-info.js

JavaScript detection of device screen size, orientation & pixel density.

### Example

```js
var screenInfo = require('screen-info-js');

/* {
  ...
  maxTouchPoints: 5,
  orientation: 'landscape'
  ...
} */

console.log(screenInfo.maxTouchPoints); // 5
console.log(screenInfo.orientation); // landscape
```

`screenInfo` provides information on:

- height
- maxTouchPoints
- orientation
- pixelDensity
- retinaDisplay
- width
