import React, { Component, } from 'react';
import MenuList from './components/MenuList';
import { Container, } from 'semantic-ui-react';
import axios from 'axios';
import MenuForm from './components/MenuForm';
import Menu from './components/Menu';

class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get('/api/menus')
    .then( res => {
      this.setState({ menus: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addMenu = (name) => {
      axios.post('/api/menus', { name })
      .then( res => {
        this.setState({ menus: [...this.state.menus, res.data], });
    });
  }

  editMenu = (id, name) => {
    axios.put(`/api/menus/${id}`, {name})
      .then( res => {
        const menus = this.state.menus.map( m => {
        if (m.id === id)
          return res.data;
        return m;
      });
      this.setState({ menus: [...this.state.menus, res.data], });
    })
  }


  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state;
      this.setState({ menus: menus.filter(t => t.id !== id), })
    });
  }

  // renderMenus = () => {
  //   return this.state.menus.map(menu => <Menu key={menu.id} {...menu} editMenu={this.editMenu} deleteMenu={this.deleteMenu} />)
  // }

  render () {
    return (
      <Container style={{ padding: '30px 0', }}>
        <h1>Restaurant</h1>
        <br />
        <MenuForm addMenu={this.addMenu} />
        <MenuList 
        menus={this.state.menus}
        editMenu={this.editMenu}
        deleteMenu={this.deleteMenu}
        />

      </Container>
    );
  };
}

export default App;
