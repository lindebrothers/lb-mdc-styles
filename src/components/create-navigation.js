
import React from 'react';

export default React.forwardRef((props, ref) => {
  var PROPS = Object.assign({navigate: 'please remove'}, props);
  delete PROPS.navigate;
  return(
  <a ref={ref} {...PROPS}>{PROPS.children}</a>
)})