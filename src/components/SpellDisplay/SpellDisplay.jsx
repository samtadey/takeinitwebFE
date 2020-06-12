import React from 'react';
import * as strings from '../../constants/strings';
import './SpellDisplay.css';

class SpellDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let spell = this.props.spell;

        return (
            <div className='display'>
                <h1>{spell.name}</h1>
                <h4>{spell.school.name}</h4>
                <p><b>{strings.lvl} </b>{spell.level > 0 ? spell.level : strings.cantrip}</p>
                <p><b>{strings.cast_time} </b>{spell.casting_time}</p>
                <p><b>{strings.range} </b>{spell.range}</p>
                <p><b>{strings.components} </b>{spell.components.map(function(item, index) { return(item + " ") })}</p>
                <p><b>{strings.duration} </b>{spell.duration}</p>
                <p><b>{strings.classes} </b>{spell.classes.map(function(item, index) { return(index === 0 ? item.name : ", " + item.name)} )}</p>
                {spell.desc.map(function(item, index) {
                    return(<p>{item}</p>)
                })}
                {spell.higher_level ? <p><b>{strings.higher_lvl} </b>{spell.higher_level}</p> : <div/>}
            </div>
        )
    }
}

export default SpellDisplay;
