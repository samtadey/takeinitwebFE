import React from 'react';
import * as strings from '../../constants/strings';
import * as helper from '../../helper/helper';
import './MonsterDisplay.css';

class MonsterDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let monster = this.props.monster;

        return (
            <div className='display'>
                <h1>{monster.name}</h1>
                <p><i>{monster.size 
                    + " " + monster.type 
                    //+ monster.subtype ? "(" + monster.subtype + ")" : + ""  
                    + ", " + monster.alignment}</i></p>

                <hr/>

                <p><b>{strings.ac} </b>{monster.armor_class}</p>
                <p><b>{strings.hp} </b>{monster.hit_points}</p>
                <p><b>{strings.speed} </b>{monster.speed.walk}</p>

                <hr/>

                <div className="stat_container">
                    <div className="stat">
                        <p><b>{strings.str}</b></p>
                        <p>{monster.strength + "(" + helper.getAbilityScore(monster.strength) + ")"}</p>
                    </div>
                    <div className="stat">
                        <p><b>{strings.dex}</b></p>
                        <p>{monster.dexterity + "(" + helper.getAbilityScore(monster.dexterity) + ")"}</p>                        
                    </div>
                    <div className="stat">
                        <p><b>{strings.con}</b></p>
                        <p>{monster.constitution + "(" + helper.getAbilityScore(monster.constitution) + ")"}</p>                       
                    </div>
                    <div className="stat">
                        <p><b>{strings.int}</b></p>
                        <p>{monster.intelligence + "(" + helper.getAbilityScore(monster.intelligence) + ")"}</p>                        
                    </div>
                    <div className="stat">
                        <p><b>{strings.wis}</b></p>
                        <p>{monster.wisdom + "(" + helper.getAbilityScore(monster.wisdom) + ")"}</p>                        
                    </div>
                    <div className="stat">
                        <p><b>{strings.cha}</b></p>
                        <p>{monster.charisma + "(" + helper.getAbilityScore(monster.charisma) + ")"}</p>                        
                    </div>
                </div>

                <hr/>

                {/* Super Jank */}
                <p><b>{strings.save} </b> 
                {monster.proficiencies.map(function(item, index) {
                    let prof = "";
                    if (item.name.includes(strings.save))
                    {
                        if (index > 0)
                            prof += ", ";
                        prof += helper.getProfTrimmed(item.name) + " +" + item.value 
                    }
                    return prof;
                })}
                </p>

                {/* Placing the comma
                    Having trouble bc the saving throw and skill proficiencies are grouped
                    So the first index of a skill proficiency is not index 0 */}
                <p><b>{strings.skill} </b> 
                {monster.proficiencies.map(function(item, index) {
                    let prof = "";
                    if (item.name.includes(strings.skill))
                    {
                        if (index > 0)
                            prof += ", ";
                        prof += helper.getProfTrimmed(item.name) + " +" + item.value 
                    }
                    return prof;
                })}
                </p>
                {/* End of Super Jank */}
            </div>
        )
    }
}

export default MonsterDisplay;
