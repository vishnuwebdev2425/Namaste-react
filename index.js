import React from "react"
import ReactDOM from "react-dom/client"

const FirstComponent=()=>(
   
        <div>
            <h1>Shiva</h1>

        </div>
)

const SecondComponent=()=>{
    return(<div>
        < FirstComponent/>
        <h2>Parvati</h2>
    </div>)
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(< SecondComponent/>)