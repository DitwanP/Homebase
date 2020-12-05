import React from 'react';
import axios from 'axios';
import { FormGroup, Form, Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoInputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: "", content: ""};
    
        this.handleInputChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // This will handle the change of the content on the title input box.
    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value, 
        });
    }

    // This will handle the change of the content on the description input box.
    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }
    
    // This will tell the api to create a new todo with the given information 
    // from the title and content boxes.
    handleSubmit = (event) => {
        event.preventDefault()
        const currentTitle = this.state.title;
        const currentContent = this.state.content;

        axios.post('https://homebase-rd.herokuapp.com/api/todo/create/', { title: currentTitle, content: currentContent });
            
        this.setState({ title: '', content: ''})
        this.props.refreshTodos()
    }

    componentDidMount() {
        this.props.refreshTodos();
    }

    render() {
        return (
            // Bootsrap form group for the input of the todo data.
            <div className="input-form-container">
                <Form noValidate>
                    <Form.Row bsPrefix="title-row">
                        <Col bsPrefix="input-columns">
                            <FormGroup bsPrefix="todo-title-form">
                                <input 
                                    as="input" 
                                    className="todo-title-input"
                                    label="todo title"
                                    type="title"
                                    size="sm" 
                                    onChange={this.handleTitleChange}
                                    value={this.state.title}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="todo-title-input" className="title-label"> 
                                    <span className="title-span"> Title: </span> 
                                </label>
                            </FormGroup>
                        </Col>
                    </Form.Row>
                    <Form.Row bsPrefix="description-row">
                        <Col bsPrefix="input-columns">
                            <FormGroup bsPrefix="todo-description-form">
                                <input 
                                    className="todo-description-input"
                                    label="todo description"
                                    onChange={this.handleContentChange} 
                                    value={this.state.content} 
                                    required
                                    autoComplete="off"
                                /> 
                                <label htmlFor="todo-description-input" className="description-label"> 
                                    <span className="description-span"> Description: </span>
                                </label>
                            </FormGroup>
                            <Form.Group bsPrefix="add-todo-button-container">
                                <Button 
                                    type="submit"
                                    variant="primary" 
                                    onClick={this.handleSubmit} 
                                    bsPrefix='add-todo-button'
                                    aria-label="add to todo list"> 
                                    <FontAwesomeIcon icon="plus"/>
                                </Button>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )}
}

export default TodoInputForm;
