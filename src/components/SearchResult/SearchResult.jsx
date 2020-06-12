import React, {Component} from 'react';
import * as strings from '../../constants/strings';
import './SearchResult.css'

class SearchResult extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props);
    }

    render() {
        return (
            <div>
                <input type="hidden" name={strings.resPath} value={this.props.path}/>
                <input className="ResItem" onClick={() => this.props.displayInfo(this.props.path)} type="submit" value={this.props.name}/>
            </div>
        );
    }

}

export default SearchResult;