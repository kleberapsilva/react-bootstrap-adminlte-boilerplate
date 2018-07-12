/**
 *
 * SideBar
 *
 */

import React from 'react';
import Menu from '../Menu';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SideBar() {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <Menu />
      </section>
    </aside>
  );
}

SideBar.propTypes = {};

export default SideBar;
