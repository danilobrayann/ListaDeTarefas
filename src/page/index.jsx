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

    function FinalizarTarefa(id) {
        
        const newList = List.map( item =>(
            item.id == id ? {... item, finished: !item.finished} : item
        ))

        setListe(newList)
    }

    function deletarItem(id) {

        const Newlist = List.filter( Intems => Intems.id !== id)
        setListe(Newlist)
    }
    return (
        <>
            <Container>
                <TodoList>
                    <Input type="text" onChange={IpuntMudou} placeholder=" o que tenho para fazer .... ?" />
                    <Button onClick={CliqueiNoBotao} >Adicionar</Button>
                    <ul>
                        {List.map(Intems => (
                        <ListemItem isFinished={Intems.finished} key={Intems.id}>
                            <FcCheckmark onClick={() => FinalizarTarefa(Intems.id)} /> 
                            <li >{Intems.task}</li> 
                            <FcFullTrash onClick={() => deletarItem(Intems.id)}/> 
                            </ListemItem>))}
                    </ul>
                </TodoList>
            </Container>
        </>
    )

}

export default Home