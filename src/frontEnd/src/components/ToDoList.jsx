import React, { useState } from 'react';
import { Checkbox, Button, Input, Space } from 'antd';

function ToDoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: '체크박스1', done: false },
        { id: 2, text: '체크박스2', done: true },
    ]);

    const onChange = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
        );
    };

    const insToDo = () => {
        const inputValue = document.getElementById('do').value;
        console.log(inputValue);

        setTodos((prevTodos) => [
            ...prevTodos,
            { id: prevTodos.length + 1, text: inputValue, done: false },
        ]);
    };

    const doing = todos.filter((todo) => !todo.done);
    const done = todos.filter((todo) => todo.done);

    return (
        <div>
            <h1>TO-DO-LIST</h1>
            <hr />
            <Space.Compact
                style={{
                    width: '100%',
                }}>
                <Input placeholder="등록할 ToDoList를 입력하세요" id="do" style={{ width: 200 }} />
                <Button type="primary" onClick={insToDo}>
                    등록
                </Button>
            </Space.Compact>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>진행</h3>
                    {doing.map((todo) => (
                        <Checkbox
                            key={todo.id}
                            onChange={() => onChange(todo.id)}
                            checked={todo.done}>
                            {todo.text}
                        </Checkbox>
                    ))}
                </span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>완료</h3>
                    {done.map((todo) => (
                        <Checkbox
                            key={todo.id}
                            onChange={() => onChange(todo.id)}
                            checked={todo.done}>
                            {todo.text}
                        </Checkbox>
                    ))}
                </span>
            </div>
        </div>
    );
}

export default ToDoList;
