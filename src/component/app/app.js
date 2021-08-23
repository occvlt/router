import React from 'react';
import ChildOne from '../child-one';
import ChildTwo from '../child-two';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => {
    return(
        <>
            <Router>
                <div>
                    <Link to="/" style={{marginRight: '10px'}}>Home</Link>
                    <Link to="/childone" style={{marginRight: '10px'}}>ChildOne</Link>
                    <Link to="/childtwo">ChildTwo</Link>
                </div>  

                <Route path="/" render={() => <h1>Home</h1>} exact/>
                <Route path="/" render={() => <div>Welcome to application</div>} exact/>
                
                <Route path="/childone" render={() => <h1>ChildOne</h1>}/>
                <Route path="/childone" component={ChildOne}/>
                
                <Route path="/childtwo" render={() => <h1>ChildTwo</h1>}/>
                <Route path="/childtwo" component={ChildTwo}/>
            </Router>
        </>
    )
}

export default App