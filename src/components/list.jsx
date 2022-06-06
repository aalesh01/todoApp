const list =   [{ id: 1, title: "Wake up", status: true },
        { id: 2, title: "drink tea", status: false },
        { id: 3, title: "eat maggi", status: true },
        { id: 4, title: "sleep", status: false }];

const List=()=>{
       return(
           list.map(
               <li>title</li>
           )
       )
}

export default List;

   