/*<div>
    <div id="parent">
        <div id="child">
            <h1>Vishnu</h1>
            <h2>Shiva</h2>

        </div>
        <div id="child2">
        <h1>par</h1>
        </div>

    </div>

</div>
*/
const newElement=React.createElement("div",{id:"parent"},
    ([React.createElement('div',{id:'child'},([React.createElement('h1',{},"Vishnu"),
    React.createElement("h2",{},"Shiva")]),
    React.createElement("div",{id:"child2"},
        React.createElement("h1",{},"Parvati")
    )
)])
)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(newElement)