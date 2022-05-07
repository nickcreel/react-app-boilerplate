import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {StyledHeader} from './components/Header'
// must pass class name and attach to html
// for styled component styles to apply
// see https://styled-components.com/docs/basics#styling-any-component
/**
 * @param {object} props
 * @return {JSX}
 */
function App({className}) {
  return (
    <div className={className}>
      <StyledHeader />
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string.isRequired,
};

export const StyledApp = styled(App)`
  text-align: center;
  padding: 10px;
  background: white;
  min-height: 100%;
`;
