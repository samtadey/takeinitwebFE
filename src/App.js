import React from 'react';
import { Search, SearchPane } from './components';
import * as strings from './constants/strings';
import * as api from './dnd5eapi/dnd5eapi';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
    };
  }

  tryme = () => {
    let url = strings.dnd5eapi + strings.spells5e;
    console.log("The url is: " + url);

    api.fetchResources(url)
      .then(res => {
        console.log(res.results);

        this.setState({
          spells: res.results,
        })
      })
  }

  render() {
    return (
      <div className="ResCon">
          {/* <Search/> */}
          <SearchPane/>
          {/* <SpellDisplay name='test'/>
          <button onClick={this.tryme}>Load Spell</button> */}
      </div>
    );
  }
}

export default App;
