import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function Home() {

    const [List, setListe] = useState([{ id: uuidv4(), task: "nada" }]);

    function IpuntMudou(event) {
        setListe([{ id: uuidv4(), task: event.target.value }])
    }

    function CliqueiNoBotao() {

    }

    return (
        <>
            <input type="text" onChange={IpuntMudou} placeholder=" o que tenho para fazer .... ?" />
            <button onAuxClick={CliqueiNoBotao} >Adicionar</button>
            <ul>
                {List.map(Intems => (<li key={Intems.id}>{Intems.task}</li>))}
            </ul>
        </>
    )

}

export default Home