import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// must pass class name and attach to html
// for styled component styles to apply
// see https://styled-components.com/docs/basics#styling-any-component
/**
 * @param {string} className - class name for styled components
 * @return {JSX}
 */
function App({className}) {
  return <div className={className}>Hello, world!</div>;
}

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export const StyledApp = styled(App)`
  text-align: center;
  padding: 10px;
  background: #dad2d8;
  min-height: 100%;
`;
