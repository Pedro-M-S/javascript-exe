import React from 'react';

import {URL_API} from './services/Service';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <div>
     <h1>ToDos Web App</h1>
     <p>This web app interacts with REST API availabale at : {URL_API}</p>
     <p>It display a list of users. At click on user data, it displays user's list of to dos.</p>
     <hr></hr>
     <TodosPage />
    </div>
  );
}

export default App;