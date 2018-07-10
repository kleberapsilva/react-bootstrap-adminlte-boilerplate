/**
 *
 * MenuItem
 *
 */

import React from 'react';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MenuItem(props) {
  return <li>
            <Link to={props.path}>
              <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
            </Link>
        </li>
}

MenuItem.propTypes = {};

export default MenuItem;
