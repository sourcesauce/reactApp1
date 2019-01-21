//React를 이용한 영화 목록보는 Web App
//yts.am 사이트를 이용하여 api 를 json으로 연결
//data 처리를 위해 Loading 구현

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
