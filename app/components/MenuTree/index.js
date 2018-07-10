/**
 *
 * MenuTree
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MenuTree(props) {
  return (<li className='treeview'>
          <a href={props.path}>
              <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
              <span className='pull-right-container'>
                <i className='fa fa-angle-left pull-right'></i>
              </span>
          </a>
          <ul className='treeview-menu'>
              {props.children}
          </ul>
        </li>)
}

MenuTree.propTypes = {};

export default MenuTree;
