## The concept of the architecture

### Apply design code in the browser, not before
The main idea behind the architecture of this library is to **apply design code in the browser**. There is no need to apply it before that such method as **inline styles** where design code is applied before the application code is even compiled. It is just increasing the time to handle the code such hot-reloading, compilation and server side rendering. And to be frankly, the server does not care about design and the look and feeling of the app.

![](%BASE_URL%/images/lb-mdc-infra.png)
*In the illustration above the design code is coming in from the left and the application code from the right. The design code is not applied until th browser does request it. This means the application is spared from handling that code which will increase TTM (time to market). Developing will go much faster, compiling and deploying will go faster and server performance will increase which will lower time to first byte (TTFB).*


### Back to old but stable methods
So to achieve the vision of apply design only first in the browser, an old but stable method has been used. Instead of using **inline styles** as a primary method we use **vanilla css**, loaded via external files css files and do attach the design to the elements via **css selectors**. The method works in any browser and with any frameworks that (in the end) operates in a browser.

#### Basic example

Element
```html
<div class="style-selecors" />
```
CSS
```css
.style-selecors {
  background-color: 'red'
}
```
&nbsp;
***
&nbsp;
### The infrastructure
We use [Webpack](https://webpack.js.org/) to minify and compile `css` and `js` files. CSS styles is created via `.scss` files that is importing styles from the `MDC` package. The files is then versioned and uploaded to AWS s3-buckets and CloudFront. From there the files can be linked anywhere under the domain `*.blocket.se`.

``` html
<!-- Place in head element -->
<link rel="stylesheet" type="text/css" href="https://assets.blocketcdn.se/mdc/%__LIB_VERSION__%/base.js" />
```

Webpack will also add other static files such svg:s, fonts which can be used within the web applications.

*** *** ***

### Pros and cons with vanilla styles

#### Pros
- Styles is pre compiled which means it does not need to be re-compiled every time there are changes made when developing.
- The styles will be cached by the browser because its loaded via external files.
- The server does not need to deal with rendering tons of style code which will decrease `time to first byte` (TTFB).
- The browser does not need to deal with design related code when initialize the app scripts. This means the app can start much quicker after page request.

#### Cons
- Code split methods will be lost because the pre-compiled files will always be loaded on every page request.


