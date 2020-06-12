import React from 'react';
import {SearchResult} from '../../components';
import * as api from '../../dnd5eapi/dnd5eapi';
import * as strings from '../../constants/strings';
import './Search.css';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            [strings.searchbar]: '',
            [strings.dropdown]: '',

            spells: [],
            spellsFil: [],
            monsters: [],
            monstersFil: [],
        }

        
    }

    //loads list of monsters and spells
    componentDidMount = () => {
        console.log("Mount Search Component");
        let monUrl = strings.dnd5eapi + strings.monsters5e;
        let spellUrl = strings.dnd5eapi + strings.spells5e;
        // Promise.all([
        // ])
        api.fetchResources(monUrl)
            .then(res => {
                console.log(res.results);
                this.setState({
                    monsters: res.results,
                    //monstersFil: res.results,
                })
        })
        api.fetchResources(spellUrl)
            .then(res => {
                //console.log(res.results);
                this.setState({
                    spells: res.results,
                    //spellsFil: res.results,
                })
        })
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        //console.log(name);
        //console.log(value);

        //trim down and make generic
        if (name === strings.searchbar)
        {
            let filteredArr;
            if (this.state[strings.dropdown] === strings.monsters5e) 
            {
                filteredArr = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(value.toLowerCase()));
                this.setState({
                    monstersFil: filteredArr,
                })
            } 
            else
            {
                filteredArr = this.state.spells.filter(spell => spell.name.toLowerCase().includes(value.toLowerCase()));
                //console.log(filteredArr);
                this.setState({
                    spellsFil: filteredArr,
                })
            }
            
        }

        this.setState({
            [name]: value,
        });
    }

    getPath = (url) => {
        let type;
        if (this.state[strings.dropdown] === strings.monsters5e)
            type = strings.monsters5e;
        else
            type = strings.spells5e;
        //pass info to SearchPane
        this.props.displayInfo(url, type);
        //Reset the Search bar
        this.setState({
            spellsFil: [],
            monstersFil: [],
            [strings.searchbar]: '',
        })
    }

    //saved into test var
    //can't pass any function into props for the SearchResult items
    //"this is undefined"
    render() {

        let getPath = this.getPath;

        return (

            // <form onSubmit={this.handleSubmit}>
                <div className="container">

                    <div className="left">
                        <select className="dropdown" name={strings.dropdown} value={this.state[strings.dropdown]} onChange={this.handleChange}>
                            <option value={strings.spells5e}>{strings.spells}</option>
                            <option value={strings.monsters5e}>{strings.monsters}</option>
                        </select>
                    </div>

                    <div className="right">

                        <input className="search" autoComplete="off" type="search" name={strings.searchbar} placeholder={strings.search} value={this.state[strings.searchbar]} onChange={this.handleChange}/>

                        <div className="results">
                            {this.state[strings.dropdown] === strings.monsters5e ? 
                                
                                this.state.monstersFil.map(function(item, index) {
                                    return(<SearchResult 
                                        key={index} 
                                        name={item.name} 
                                        path={item.url}
                                        displayInfo={getPath}/>)
                                })
                                :
                                this.state.spellsFil.map(function(item, index) {
                                    return(<SearchResult 
                                        key={index} 
                                        name={item.name} 
                                        path={item.url} 
                                        displayInfo={getPath}/>)
                                })
                            }
                        </div>
                    </div>

                </div>

            // </form>
        );
    }
}

export default Search;