

function Home (){

const List = [{id:1528789, task: "Comprar pão"}, 
{id:15287898, task: "Comprar abacate"}, 
{id:152878988, task: "Comprar livro"}]
/*,,*/
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