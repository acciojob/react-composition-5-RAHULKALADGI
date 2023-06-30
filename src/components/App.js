
import React ,{useState} from "react";
import './../styles/App.css';

let a = [{title : "Tab" , content : 1} , {title : "Tab" , content : 2} , {title : "Tab" , content : 3} ]

let b = [{title : "Tab" , content : "A"} , {title : "Tab" , content : "B"} , {title : "Tab" , content : "C"} ]

const App = ()=> {
   let [count , setCount] = useState(1);
   let [alpha , setAlpha] = useState("A");

   return (
    <div>
        <ul>
            {
                a.map((e)=> (
                    <li onClick={()=>setCount(e.content)}>{e.title} {e.content}</li>
                ))
            }
        </ul>
        <p>Content for Tab {count}</p>

        <ul>
            {
                b.map((e)=> (
                    <li onClick={()=>setAlpha(e.content)}>{e.title} {e.content}</li>
                ))
            }
        </ul>
        <p>Content for Tab {alpha}</p>
    </div>
   )
}

export default App
