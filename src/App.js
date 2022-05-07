import React from 'react';
import styled from 'styled-components';
// must pass class name and attach to html
// for styled component styles to apply
// see https://styled-components.com/docs/basics#styling-any-component
function App({ className, children }) {
  return <div className={className}>Hello, world!</div>;
}

export const StyledApp = styled(App)`
  text-align: center;
  padding: 10px;
  background: #dad2d8;
  min-height: 100%;
`;
