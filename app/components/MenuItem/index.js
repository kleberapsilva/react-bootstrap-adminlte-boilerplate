/**
 *
 * MenuItem
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MenuItem(props) {
  return (
    <li>
      <NavLink to={props.path}>
        <i className={`fa fa-${props.icon}`} />
        <span>{props.label}</span>
      </NavLink>
    </li>
  );
}

MenuItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default MenuItem;
