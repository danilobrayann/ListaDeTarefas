

function Home (){

const List = ["Comprar pão","Comprar abacate","Comprar livro"]

function IpuntMudou(){

}

function CliqueiNoBotao(){

}

return(
    <>
   <input type="text" onChange={IpuntMudou} placeholder=" o que tenho para fazer .... ?" />
   <button onAuxClick={CliqueiNoBotao} >Adicionar</button>
   <ul>
   {List.map(Intems => (<li>{Intems}</li> ))}
   </ul>
    </>
)

}

export default Home