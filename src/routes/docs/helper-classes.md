## Helper classes

The library contains prepared CSS helper classes that will make life easier working with this branded MDC library. It is prepared css-classes with properties that will only affect wanted elements in a desired way.

Before you can access the helper classes you need add following code snippet to your `html document`.
``` html
<!-- Place in head element -->
<link rel="stylesheet" type="text/css" href="https://assets.blocketcdn.se/mdc/<version>/helpers.js" />
```

### Usage example
```html
<div class="helper-flex-display helper-flex-row helper-full-width-height">
  <div>Some text</div>
  <div>Some other text</div>
</div>
```
*This wrapping element will turn to be displayed with a `flex` property and with a flex-direction of a `row`. It will also try expand its width and height as much as possible. The children will concur of the total space and in this case they will have `50%` because there are 2 elements in the flex container*.

### Some examples of helper classes
Below you will find some of the helper classes. You can find a full list of all helper class by viewing the [helper classes css file](https://github.schibsted.io/blocket/blocket-web-material-design/blob/master/lib/scss/entry-helpers.scss).


#### Alignments
| Name | Description |
| - | - |
| **helper-full-width** | Take maximum of its parents width |
| **helper-full-width-height** | Take maximum of its parents width and height |
| **helper-flex-display** | Turn element to have flex display property |
| **helper-flex-row** | Add flex-direction property of a row |
| **helper-flex-column** | Add flex-direction property of a column |
| **helper-flex-space-between** | Make its children to have maximum space in between  |
| **helper-flex-start** | Aligned children from the left/top depending on `flex-direction` |
| **helper-flex-end** | Aligned children from the right/bottom depending on `flex-direction` |
| **helper-flex-align-start** | Make its children to be aligned from the left |
| **helper-flex-align-center** | Make its children to be aligned from the center |
| **helper-flex-align-right** | Make its children to be aligned from the right |

#### Fonts and coloring
| Name | Description |
| - | - |
| **helper-text-negative** | Will make its text and its lower order white |
| **helper-hr-negative** | Will create a white solid bottom border on its element |
| **helper-opacity-25** | Set opacity `.25` on targeted element and its children |
| **helper-opacity-50** | Set opacity `.5` on targeted element and its children |
| **helper-opacity-75** | Set opacity `.75` on targeted element and its children |

