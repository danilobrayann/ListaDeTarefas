import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Container, TodoList } from "./styles";

function Home() {

    const [List, setListe] = useState([{ id: uuidv4(), task: "nada" }]);
    const [task, setTask] = useState("");

    function IpuntMudou(event) {
        setTask(event.target.value)
    }

    function CliqueiNoBotao() {
        setListe([...List, { id: uuidv4(), task }])
    }

    return (
        <>
            <Container>
                <TodoList>
                <input type="text" onChange={IpuntMudou} placeholder=" o que tenho para fazer .... ?" />
                <button onClick={CliqueiNoBotao} >Adicionar</button>
                <ul>
                    {List.map(Intems => (<li key={Intems.id}>{Intems.task}</li>))}
                </ul>
                </TodoList>
            </Container>
        </>
    )

}

export default Home