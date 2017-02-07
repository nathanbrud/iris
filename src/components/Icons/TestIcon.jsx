
'use strict'

import React from 'react';

class TestIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

              <svg { ...this.props } viewBox="0 0 16 16" >
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect id="Rectangle" fill="#FFFFFF" x="0" y="0" width="16" height="16"></rect>
                  </g>
              </svg>
        );
    }
}

export default TestIcon;
