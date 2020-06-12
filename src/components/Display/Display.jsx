import React from 'react';
import {SpellDisplay, MonsterDisplay} from '../../components';
import * as strings from '../../constants/strings';

class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                {this.props.id === strings.spells5e && this.props.content ? 
                    <SpellDisplay
                        spell={this.props.content}/> 
                    : this.props.id === strings.monsters5e && this.props.content ?
                    <MonsterDisplay
                        monster={this.props.content}/>
                    : <div/>}
            </div>
        )
    }

}

export default Display;