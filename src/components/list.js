
const List=()=>{

    const list =   [{ id: 1, title: "Wake up", status: true },
        { id: 2, title: "drink tea", status: false },
        { id: 3, title: "eat maggi", status: true },
        { id: 4, title: "sleep", status: false }];

       return(
        <>
        {
            list.map((element)=>(
            <li key={element.id} style={(element.status ? {color:"green"} : {color:"red"} )}>{element.title}</li>
        )
        )
        }
        </>
       )
}

export default List;

   