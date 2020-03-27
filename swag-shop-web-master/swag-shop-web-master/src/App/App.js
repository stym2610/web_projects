import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Services
import HttpService from '../services/http-service';

//Components
import Product from '../product/product'
import WishList from '../wishlist/wishlist';


const http = new HttpService();


class App extends Component {
    
	constructor(props) {
		super(props);
		http.getProducts();
	}

    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My first React.js Application.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to the Swag Shop
          </a>
        </header>
		<div className="container-fluid App-main">
			<div className="row">
				<div className="col-sm-8">
					<div className="row">{this.productList()}</div>	
				</div>
			</div>	
		</div>
	</div>
    );
  }
};

export default App;
