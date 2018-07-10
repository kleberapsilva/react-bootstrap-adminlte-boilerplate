import React from 'react';
import MenuItem from '../MenuItem';
import MenuTree from '../MenuTree';

function Menu() {
  return (
    <ul className="sidebar-menu tree" data-widget="tree">
      <MenuItem path="/" label="Dashboard" icon="dashboard" />
      <MenuTree label="Cadastro" icon="edit">
        <MenuItem
          path="billingCycles"
          label="Ciclos de Pagamentos"
          icon="usd"
        />
      </MenuTree>
    </ul>
  );
}

Menu.propTypes = {};

export default Menu;
