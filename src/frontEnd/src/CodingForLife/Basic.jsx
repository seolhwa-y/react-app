import { React, useState } from 'react';

// 헤더 - HEADER
function Header(props) {
    console.table(props);

    return (
        <header /*className="App-header"*/>
            <h1 className="title">
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault(); // 기본 동작 방지
                        props.onChangeMode();
                    }}>
                    {props.title}
                </a>
            </h1>
        </header>
    );
}

// 내비 - LIST
function Nav(props) {
    console.table(props);

    const lis = [];

    // 동적으로 생성한 경우 유니크한 key값을 준다. for문 또는 map 사용하여 동적으로 뿌리기
    for (let i = 0; i < props.topics.length; i++) {
        let cont = props.topics[i];

        lis.push(
            <li key={cont.id}>
                <a
                    id={cont.id} // id를 alert로 띄우기 위하여 id 지정
                    href={'/01/' + cont.id}
                    onClick={(event) => {
                        event.preventDefault();
                        props.onChangeMode(Number(event.target.id)); // 해당 타켓의 id로 이벤트 발생
                    }}>
                    {cont.title}
                </a>
            </li>
        );
    }

    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}

// 아티클 - DETAIL
function Article(props) {
    console.table(props);

    const title = props.title;
    const body = props.body;

    return (
        <article>
            <h2>{title}</h2> {body}
        </article>
    );
}
// 수정 - UPDATE
function Update(props) {
    // props => 외부자 => 내부자
    // state => 내부자 => 내부자
    console.table('Update', props);
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    return (
        <article>
            <h3>수정</h3>
            <form
                onSubmit={(event) => {
                    const _title = event.target.title.value;
                    const _body = event.target.body.value;
                    props.onUpdate(_title, _body);
                }}>
                <p>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </p>
                <p>
                    <textarea
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={(event) => {
                            setBody(event.target.value);
                        }}
                    />
                </p>
                <p>
                    <input type="submit" value="Update" />
                </p>
            </form>
        </article>
    );
}

// 생성 - CREATE
function Create(props) {
    return (
        <article>
            <h3>생성</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    const title = event.target.title.value;
                    const body = event.target.body.value;
                    props.onCreate(title, body);
                }}>
                <p>
                    <input type="text" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body" />
                </p>
                <p>
                    <input type="submit" value="Create" />
                </p>
            </form>
        </article>
    );
}

// 화면 로딩 기능 추가
function Basic() {
    const [mode, setMode] = useState('WELCOME'); // State 값 확인(mode)과 값 변경(welcode)
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'js', body: 'js is ...' },
        { id: 3, title: 'css', body: 'css is ...' },
    ]); // props로 내용을 동적으로 바꾸기
    let contents = '';
    let contextControl = null;
    let title,
        body = null;

    if (mode === 'WELCOME') {
        contents = <Article title="안녕하세요" body="리액트 기초 배우기!!"></Article>;
    } else if (mode === 'READ') {
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        contents = <Article title={title} body={body}></Article>;
        contextControl = (
            <>
                <li>
                    <a
                        href={'/update/' + id}
                        onClick={(event) => {
                            event.preventDefault();
                            setMode('UPDATE');
                        }}>
                        수정
                    </a>
                </li>
                <li>
                    <input
                        type="button"
                        value="delete"
                        onClick={() => {
                            const newTopics = [];

                            for (let i = 0; i < topics.length; i++) {
                                if (topics[i].id !== id) {
                                    newTopics.push(topics[i]);
                                }
                            }

                            setTopics(newTopics);
                            setMode('WELCOME');
                        }}
                    />
                </li>
            </>
        );
    } else if (mode === 'CREATE') {
        contents = (
            <Create
                onCreate={(_title, _body) => {
                    console.log(_title, _body);

                    const newTopics = [...topics];
                    const newTopic = { id: nextId, title: _title, body: _body };

                    newTopics.push(newTopic);
                    setTopics(newTopics);
                    setMode('READ');
                    setId(nextId);
                    setNextId(nextId + 1);
                }}></Create>
        );
    } else if (mode === 'UPDATE') {
        for (let i = 0; i < topics.length; i++) {
            if (topics[i].id === id) {
                title = topics[i].title;
                body = topics[i].body;
                break;
            }
        }

        contents = (
            <Update
                onUpdate={(_title, _body) => {
                    console.log('onUpdate', _title, _body);

                    const updTopic = { id: id, title: _title, body: _body };

                    for (let i = 0; i < topics.length; i++) {
                        if (topics[i].id === updTopic.id) {
                            topics[i] = updTopic;
                            break;
                        }
                    }

                    setMode('READ');
                    setId(id);
                }}
                title={title}
                body={body}></Update>
        );
    }

    return (
        <div>
            {/*
              -- 생활코딩 React 기본
              1. 컴포넌트 만들기 : 사용자 정의 header는 대문자, 소문자는 리액트에서 제공하는 것
              2. 속성 PROPS      : title='타이틀' => param props => {props.title} => 타이틀 표기됨 외부자
              3. 이벤트 생성     : 해당 컴포넌트에 특정이벤트 이름을 주고 이벤트를 부여후 컴포넌트 쪽에 어떤 경우에 작동할지 작성하면 된다.
              4. State           : 내부자 [값확인(변수), 값변경(function)] = useState('값');
              5. Create          : 
              6. Update          :
              7. Delete          :
                    // const [value, setValue] = useState(PRIMITIVE); -- string, number, bigint, boolean, undefined, symbol, null
                    // const [value, setValue] = useState(OBJECT); -- object, array
                    // newValue = {...value} newValue = [...value]

             */}

            <Header
                title="REACT"
                onChangeMode={() => {
                    setMode('WELCOME');
                    // alert('danger!');
                }}></Header>
            <Nav
                topics={topics}
                onChangeMode={(_id) => {
                    // alert(_id);
                    setId(_id);
                    setMode('READ');
                }}></Nav>
            {contents}

            <li>
                <a
                    href="/create"
                    onClick={(event) => {
                        event.preventDefault();
                        setMode('CREATE');
                    }}>
                    생성
                </a>
            </li>
            {contextControl}
        </div>
    );
}

export default Basic;
