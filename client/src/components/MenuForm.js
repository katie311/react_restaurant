import React from 'react';
import { Form, FormButton, } from 'semantic-ui-react';

class MenuForm extends React.Component {
    state = { name: '', };

    componentDidMount() {
      if (this.props.id) {
        const { name,} = this.props;
        this.setState({name})
      }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
      }
    
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.id) {
        this.props.editMenu(this.props.id, this.state)
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
            name="name"
          />
        </Form>
        )
      }
    }
    
    export default MenuForm;