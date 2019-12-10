import React from 'react';
import { Form, FormButton, } from 'semantic-ui-react';

class MenuForm extends React.Component {
    state = { name: '', };

    handleChange = (e) => {
        this.setState({ name: e.target.value, });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.id) {
            this.props.editMenu(this.props.id, this.props.name)
            this.props.toggleEdit()
        } else {
        this.props.addMenu(this.state.name);
        this.setState({ name: "", });
      } 
    }
    
      render() {
        return (
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Menu"
              placeholder="Menu"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form>
        )
      }
    }
    
    export default MenuForm;