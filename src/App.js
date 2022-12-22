import logo from './logo.svg';
import './App.css';
import MyFirstComp from './MyFirstComp';
import { useState } from 'react';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Fallback } from './Fallback';
import { Courses } from './Courses';
import { ReactCourse } from './ReactCourse';
import { FED } from './FED';
import { MyFirstFunctionalComp } from './MyFirstFunctionalComp';
import MyStore from './components/store';
import { UserProvider } from './MyUserContext';
import { HooksDemo } from './HooksDemo';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
import  Header  from './Header';
import { Footer } from './Footer';
import { ShowData } from './ShowData';
import ParentComp from './ParentComp';
import MyClassComp from './MyClassComp';

// features of React / Why we use react/ 




// when you are using defauly keyword-->  {}
// when you are not using default  

//  React is fast--> Virtual DOM-->
// One Way Data flow-- Data always flow from parent comp to child comp
// Scalable --> 
// Component based architecture


// Class components and functional components

// Class components--> ES6 classes syntax
//                     Life cycle methods 


// Functional components --> JS Functions syntax and it has react hooks


// props and state---> 
// props are used to pass data from parent component to child component
// props are immutable--> its value cant be changed


//state--> use for data manipulation 
// states value can be changed


function App() {

  const [cnt,incCnt] = useState(0)

  const Details = {
    Name : "Aadesh",
    Age : 32
  }

  return (<div>
          <MyClassComp/>
     </div>
    );
}

export default App;
