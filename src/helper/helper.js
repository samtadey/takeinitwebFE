import * as strings from '../constants/strings';

export const getAbilityScore = value => {
    let score = value;

    if (value % 2 == 1)
        score--;
    score-=10;

    if (value - 10 < 0)
        return score / 2;
    else if (value - 10 > 0)
        return "+" + score / 2;
    return 0;
}

export const getProfTrimmed = string => {
    //remove 'Skill: ' and return the skill
    if (string.includes(strings.skill))
        return string.slice(string.indexOf(":") + 1, string.length);
    else if (string.includes(strings.save))
        return string.slice(string.indexOf(":") + 1, string.length);
}
