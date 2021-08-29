import React from "react";
import ReactDOM from "react-dom";
import App from "./app"


function ScreenRender(){
    return (<div>
        <App/>
    </div>)
}

ReactDOM.render(<ScreenRender/>,document.getElementById("root"))