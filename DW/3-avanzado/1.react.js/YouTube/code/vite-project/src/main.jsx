import React from "react";
import ReactDOM from "react-dom/client";
import { FirstComponent } from "./components/FirstComponent";
import { Counter } from "./components/Counter";
import "./stylesheets/styles.css";
import { List } from "./ListApp";
import { UsersApp } from "./UsersApp";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    {/* 
    <FirstComponent
      title="This section is of Prop!!"
      subtitle="Aguacate"
    />
    <Counter value={0} />
    <List /> 
    */}
    <UsersApp />
  </React.StrictMode>
);

/* 01:00 https://www.youtube.com/watch?v=ladwC6Lrs-M*/
