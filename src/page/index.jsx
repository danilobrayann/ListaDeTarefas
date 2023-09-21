import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Container, TodoList, Input, Button, ListemItem, Trash, Chek } from "./styles";

function Home() {

    const [List, setListe] = useState([]);
    const [task, setTask] = useState("");

    function IpuntMudou(event) {
        setTask(event.target.value)
    }

    function CliqueiNoBotao() {
        if (task) {
            setListe([...List, { id: uuidv4(), task, finished: false }]) 
        }
        
    }

    function FinalizarTarefa(id) {

        const newList = List.map(item => (
            item.id == id ? { ...item, finished: !item.finished } : item
        ))

        setListe(newList)
    }

    function deletarItem(id) {

        const Newlist = List.filter(Intems => Intems.id !== id)
        setListe(Newlist)
    }
    return (
        <>
            <Container>
                <TodoList>
                    <Input type="text" onChange={IpuntMudou} placeholder=" o que tenho para fazer .... ?" />
                    <Button onClick={CliqueiNoBotao} >Adicionar</Button>
                    <ul>
                        {
                            List.length > 0 ? (
                                List.map(Intems => (
                                    <ListemItem isFinished={Intems.finished} key={Intems.id}>
                                        <Chek onClick={() => FinalizarTarefa(Intems.id)} />
                                        <li >{Intems.task}</li>
                                        <Trash onClick={() => deletarItem(Intems.id)} />
                                    </ListemItem>))) : (<h3>não a intens na lista </h3>)
                        }
                    </ul>
                </TodoList>
            </Container>
        </>
    )

}

export default Home