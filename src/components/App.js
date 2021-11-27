import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        {/*         <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          NFT COLOR DAPP
          </a> */}
          <h1 className="navbar-brand col-sm-3 col-md-2 mr-0">NFT DAPP COLOR</h1>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">
              {
                /*                 <a
                                  href="#"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <h1>DAPP COLOR APP NFT</h1>
                                  {<img src={logo} className="App-logo" alt="logo" />}
                                </a> */
              }
              <h1>Dapp NFT Starter Kit</h1>
              <p>
                Edit <code>src/components/App.js</code> and save to reload.
                </p>
{/*               <a
                className="App-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                LEARN BLOCKCHAIN <u><b>NOW! </b></u>
              </a> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
