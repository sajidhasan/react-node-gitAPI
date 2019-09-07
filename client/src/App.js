import React from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [user, setUser] = React.useState(null);

  React.useEffect( () => {
    axios.get('/api').then(response => {
      console.log(response.data)
      setUser(response.data)
    })
  }, []);

  return (
    user && (
      <div className = "container">
        <div className="col-md-12">
          <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 mx-auto h1"><h1>FIND BASIC INFO OF A GITHUB USER</h1></span>
          </nav>
          <div className="jumbotron">
            <h1 className="display-4">
              Hello, {user.user.name}!  How is the weather today in {user.user.location}?
            </h1>
            <p className="lead"></p>
            
          </div>
          <div className="card">
            <div className="card-header text-center">
              <h2><i className="fab fa-github"></i> Glimpse of your github profile </h2>
            </div>
            <ul className="list-group">
            <li className="list-group-item"><strong><i className="fas fa-id-badge"></i> Git ID:  </strong> {user.user.id}</li>
               <li className="list-group-item"><strong><i className="fas fa-id-card"></i> Name: </strong> {user.user.name}</li>
              <li className="list-group-item"><strong><i className="fas fa-user"></i> Github Username: </strong> {user.user.login}</li>
              <li className="list-group-item"><strong># Public repos:  </strong> {user.user.public_repos}</li>
              <li className="list-group-item"><strong># Public gists:  </strong> {user.user.public_gists}</li>
            </ul>
          </div>
        </div>
      </div>
  ));
}

export default App;
