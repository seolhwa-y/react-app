import React, { useState } from 'react';
import { Checkbox, Button, Input, Space } from 'antd';

function ToDoList() {
    const [todos, setTodos] = useState([]); // 투투리스트 저장 State

    // 투두리스트 상태 변경 시 해당 구역으로 이동
    const onChange = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
        );
    };

    // 투두리스트 추가
    const insToDo = () => {
        const inputValue = document.getElementById('do').value;
        console.log(inputValue);

        setTodos((prevTodos) => [
            ...prevTodos,
            { id: prevTodos.length + 1, text: inputValue, done: false },
        ]);
    };

    // 투두리스트 영역 그리기
    const GridToDoList = () => {
        return (
            <>
                <fieldset
                    style={{
                        width: '45%',
                        minHeight: '20em',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <legend>진행</legend>
                    {doing.map((todo) => (
                        <Checkbox
                            key={todo.id}
                            onChange={() => onChange(todo.id)}
                            checked={todo.done}>
                            {todo.text}
                        </Checkbox>
                    ))}
                </fieldset>
                <fieldset
                    style={{
                        width: '45%',
                        minHeight: '20em',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <legend>완료</legend>
                    {done.map((todo) => (
                        <Checkbox
                            key={todo.id}
                            onChange={() => onChange(todo.id)}
                            checked={todo.done}>
                            {todo.text}
                        </Checkbox>
                    ))}
                </fieldset>
            </>
        );
    };

    // 투투리스트 State에서 진행과 완료 구분
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
                {/* 3차 - 그리는 방식을 태그로 변형 */}
                <GridToDoList></GridToDoList>

                {/* 2차 - 디자인 때문에 태그 변경 */}
                {/* <fieldset
                    style={{
                        width: '45%',
                        minHeight: '20em',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <legend>진행</legend>
                    {doing.map((todo) => (
                        <Checkbox
                            key={todo.id}
                            onChange={() => onChange(todo.id)}
                            checked={todo.done}>
                            {todo.text}
                        </Checkbox>
                    ))}
                </fieldset>
                <fieldset
                    style={{
                        width: '45%',
                        minHeight: '20em',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    <legend>완료</legend>
                    {done.map((todo) => (
                        <Checkbox
                            key={todo.id}
                            onChange={() => onChange(todo.id)}
                            checked={todo.done}>
                            {todo.text}
                        </Checkbox>
                    ))}
                </fieldset> */}

                {/* 1차 - 간단하게 */}
                {/* <span style={{ display: 'flex', flexDirection: 'column' }}>
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
                </span> */}
            </div>
        </div>
    );
}

export default ToDoList;
