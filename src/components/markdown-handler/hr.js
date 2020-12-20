import React from "react";

export default (props) => {

  let attr = {
    className: 'mdc-list-divider',
  }

  return React.createElement('hr', attr, props.children)
}