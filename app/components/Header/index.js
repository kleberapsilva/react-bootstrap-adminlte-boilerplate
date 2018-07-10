/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return(
    <header className='main-header'>
      <a href='/#/' className='logo'>
        <span className='logo-mini'><b>Bi</b>W</span>
        <span className='logo-lg'>
          <i className='fa fa-tachometer'></i>
          <b> Bi</b>Web
        </span>
      </a>
      <nav className='navbar navbar-static-top'>
        <a href='#' className='sidebar-toggle' data-toggle='push-menu'></a>
      </nav>
    </header>
  )
}

Header.propTypes = {};

export default Header;
