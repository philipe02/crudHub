import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.lista.map((item) => (
                    <li key={item.id}>{item.texto}</li>
                ))}
            </ul>
        );
    }
}

export default TodoList;
