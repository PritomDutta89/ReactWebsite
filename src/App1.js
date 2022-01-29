import React, { createContext } from "react";
import {Redirect, Route,Switch} from "react-router-dom";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import Error from "./ReactRouter/Error";
import Menu from "./ReactRouter/Menu";
import Search from "./ReactRouter/Search";
import Services from "./ReactRouter/Services";
import UseParam from "./ReactRouter/UseParam";
// import "./index.css";
// import Pockemon from "./Pockemon";
// import UseEffectHook from "./UseEffectHook";
// import CompA from "./ContextApiUseContext/CompA";
// import Header from "./GoogleKeepClone/Header";
// import Footer from "./GoogleKeepClone/Footer";
// import CreateNote from "./GoogleKeepClone/CreateNote";
// import Note from "./GoogleKeepClone/Note";
// import Accordion from "./Accordion/Accordion";

// import Bootstrap1 from "./Bootstrap1";
// import ToDoListNew from "./ToDoListNew";

// import IncrementDecrement from "./IncrementDecrement";
// import ToDoList from "./ToDoList";
// import SlotM from "./SlotM";
// import "./style.css";

// const FirstName = createContext();
// const LastName = createContext();

const App = () => {

  const Name = ()=>{
    return <h1>huu</h1>;
  }
  return (
    <>
    <Menu/>
     
        <Switch>
          <Route exact path="/" component={()=> <About name="About"/>} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/Service" render={()=> <Services name="services"/>} />
          <Route path="/contact/Name" component={Name} />
          <Route path="/UseParam/:fname/:lname" component={UseParam} />
          {/* <Route component={Error}/ */}
          <Redirect to="/"/>
        </Switch>
      
{/* 
      <About/>
     <Contact/> */}
      {/* <Pockemon/> */}
      {/* <UseEffectHook/> */}

      {/* <FirstName.Provider value="pritom">
        <LastName.Provider value="Dutta">
          <CompA />
        </LastName.Provider>
      </FirstName.Provider> */}
    </>
  );
};

export default App;
// export { FirstName, LastName };
