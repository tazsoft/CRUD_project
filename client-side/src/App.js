// import React, {Component, Fragment} from 'react';
// import {BrowserRouter,Route} from "react-router-dom";
// // import { Route, Switch } from "react-router"
// import ReadPage from './pages/ReadPage';
// import CreatePage from "./pages/CreatePage";
// import UpdatePage from "./pages/UpdatePage";
// class App extends Component {
//   render() {
//     return (
//         // <Fragment>
//             <BrowserRouter>
//                 {/* <Switch> */}
//                     <Route exact path="/" component={ReadPage}/>
//                     <Route exact path="/create" component={CreatePage}/>
//                     <Route exact path="/update/:id" component={UpdatePage}/>
//                     {/* </Switch> */}
//             </BrowserRouter>
//         // </Fragment>
//     );
//   }
// }
// export default App;

import React from 'react';
import{BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ReadPage from './pages/ReadPage';
import CreatePage from "./pages/CreatePage";
// import UpdatePage from "./pages/UpdatePage";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<ReadPage/>} />
        <Route path='/create' element={<CreatePage/>} />
        {/* <Route path='/update' element={<UpdatePage/>} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;