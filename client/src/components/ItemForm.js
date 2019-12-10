import React from 'react';
import { Form, FormButton, } from 'semantic-ui-react';

class ItemForm extends React.Component {
    state = { name: '', };

    handleChange = (e) => {
        this.setState({ name: e.target.value, });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMenu(this.state.name);
        this.setState({ name: "", });
      }
    
      render() {
        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Item"
              placeholder="Add An Item"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Price"
              placeholder="Add Price"
              required
              value={this.state.price}
              onChange={this.handleChange}
            />
          </Form>
        )
      }
    }
    
    export default ItemForm;