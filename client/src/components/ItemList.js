import React from 'react';
import Menu from './Menu';


const ItemList = (props) => (
    <div>
    { <Menu
          key={menu.id} {...menu}
          deleteItem={props.deleteItem}
        />
      )}
  </div>
)

export default ItemList;