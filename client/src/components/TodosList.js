import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todoCompleted ? 'completed' : ''}>{props.todo.todoDescription}</td>
        <td className={props.todo.todoCompleted ? 'completed' : ''}>{props.todo.todoResponsible}</td>
        <td className={props.todo.todoCompleted ? 'completed' : ''}>{props.todo.todoPriority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}><button className="btn btn-primary">Edit</button></Link>
            <button onClick={() => props.onDelete(props.todo._id)} className="btn btn-danger ml-1">Delete</button>
        </td>
    </tr>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('/api/todos')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onDelete = (id) => {
        axios.delete('/api/todos/delete/' + id)
            .then(res => {
                axios.get('/api/todos')
                .then(response => {
                    this.setState({todos: response.data});
                })
                .catch(function (error) {
                    console.log(error);
                })               
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    todoList(){
        return this.state.todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} onDelete={this.onDelete} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}