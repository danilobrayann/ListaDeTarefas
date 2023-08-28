import { v4 as uuidv4 } from 'uuid';

function Home (){

const List = [{id:uuidv4(), task: "Comprar pão"}, 
{id:uuidv4(), task: "Comprar abacate"}, 
{id:uuidv4(), task: "Comprar livro"}]
/*,,*/

console.log(List)
function IpuntMudou(){

}

function CliqueiNoBotao(){

}

return(
    <>
   <input type="text" onChange={IpuntMudou} placeholder=" o que tenho para fazer .... ?" />
   <button onAuxClick={CliqueiNoBotao} >Adicionar</button>
   <ul>
   {List.map(Intems => (<li key={Intems.id}>{Intems.task}</li> ))}
   </ul>
    </>
)

}

export default Home