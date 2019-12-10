import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import MenuForm from './MenuForm'


class Menu extends React.Component {
    state = { editing: false }

    toggleEdit = () => {
        this.setState({editing: !this.state.editing})
    }

    render () {
        return (
    <div style={{display: 'flex'}}>
        <div>
            {
            this.state.editing ? 
            <MenuForm name={this.props.name} id={this.props.id} editMenu={this.props.editMenu} toggleEdit={this.toggleEdit}/>
            :
            <div>
                <h3>{this.props.name}</h3>
            </div>
            }
        </div>
        <div>
            <Button 
            icon 
            color="blue" 
            size="tiny" 
            // onClick={() => )} 
            style={{ marginLeft: "15px", }}
            >View Menu
            </Button>
            <Button 
            icon 
            color="green" 
            size="tiny" 
            onClick={this.toggleEdit} 
            style={{ marginLeft: "15px", }}
            >
            <Icon name="pencil" />
            </Button>
            <Button 
            icon 
            color="red" 
            size="tiny" 
            onClick={() => this.props.deleteMenu(this.props.id)} 
            style={{ marginLeft: "15px", }}
            >
            <Icon name="trash" />
            </Button>
        </div>
    </div>
        )
    }
};

export default Menu;