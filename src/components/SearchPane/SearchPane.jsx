import React from 'react';
import {Search, Display} from '../../components';
import * as api from '../../dnd5eapi/dnd5eapi';
import * as strings from '../../constants/strings';
import './SearchPane.css';

class SearchPane extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            to_display: '',
            to_display_type_id: '',
        };
    }

    
    displayInfo = (url, type) => {
        let display_url = strings.dnd5eapi + url;
        console.log(display_url);

        //returns as res not res.results
        api.fetchResources(display_url)
            .then(res => {
                console.log(res);
                this.setState({
                    to_display: res,
                    to_display_type_id: type,
                })
        })
    }

    render() {
        return (
            <div className="search_pane">
                <h1>SearchPane</h1>
                <Search displayInfo={this.displayInfo}/>
                <Display id={this.state.to_display_type_id} content={this.state.to_display} />
            </div>
        )
    }

}

export default SearchPane;