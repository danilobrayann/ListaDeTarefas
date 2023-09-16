import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FcFullTrash, FcCheckmark } from "react-icons/fc";
import { Container, TodoList, Input, Button, ListemItem } from "./styles";

function Home() {

    const [List, setListe] = useState([{ id: uuidv4(), task: "nada" , finished: true}]);
    const [task, setTask] = useState("");

    function IpuntMudou(event) {
        setTask(event.target.value)
    }

    function CliqueiNoBotao() {
        setListe([...List, { id: uuidv4(), task, finished: false }])
    }

    return (
        <>
            <Container>
                <TodoList>
                    <Input type="text" onChange={IpuntMudou} placeholder=" o que tenho para fazer .... ?" />
                    <Button onClick={CliqueiNoBotao} >Adicionar</Button>
                    <ul>
                        {List.map(Intems => (<ListemItem isFinished={Intems.finished}> <FcCheckmark /> <li key={Intems.id}>{Intems.task}</li> <FcFullTrash /> </ListemItem>))}
                    </ul>
                </TodoList>
            </Container>
        </>
    )

}

export default Home