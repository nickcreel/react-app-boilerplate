import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
/**
 * @param {object} props
 * @returns {JSX}
 */
const Header = ({className}) => {
    return (
        <h1 className={className}>
            🤠👋 Howdy, y'all!
        </h1>
    )
}

Header.propTypes = {
    className: PropTypes.string.isRequired
}

export const StyledHeader = styled(Header)`
    color: brown;
    font-family: Helvetica;
`
