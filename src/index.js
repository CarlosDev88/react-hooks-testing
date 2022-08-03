import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { CallBackHook } from "./components/06-memos/CallBackHook";
// import { MemoHook } from "./components/06-memos/MemoHook";
// import { FormWhitCustomHook } from "./components/02-useEfect/FormWhitCustomHook";
// import { MultipleCustomHooks } from "./components/03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./components/04-useRef/FocusScreen";
// import { RealExampleRef } from "./components/04-useRef/RealExampleRef";
// import { LayoutEffect } from "./components/05-useLayoutEffect/LayoutEffect";
// import { Memorize } from "./components/06-memos/Memorize";
// import { SimpleForm } from "./components/02-useEfect/SimpleForm";
// import { CounterApp } from "./components/01-useState/CounterApp";
// import { CounterWidthCustomHook } from "./components/01-useState/CounterWidthCustomHook";
// import { HookApp } from "./HookApp";
// import "./components/07-useReducer/intro-recuder";
// import { TodoApp } from "./components/07-useReducer/TodoApp";
import { MainApp } from "./components/08-useContext/MainApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
