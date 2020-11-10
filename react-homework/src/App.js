import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import QuestionPage from './QuestionPage'
import AddQuestion from './components/questions/AddQuestion'
import QuestionPage2 from './components/questions/QuestionPage';


function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route  exact component={QuestionPage} path="/"/>
      <Route  exact component={AddQuestion} path="/create" />
      <Route  exact component={QuestionPage2} path="/question/:id" />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
