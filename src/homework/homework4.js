/**
 * kolobok
 * @param {string} name
 * @returns {string}
 */
function kolobok(name) {
    let s;

    switch(name) {
        case 'дедушка':
            s = 'Я от дедушки ушел';
            break;
        case 'бабушка':
            s = 'Я от бабушки ушел';
            break;
        case 'волк':
            s = 'И от тебя, волк, убегу';
            break;
    }

    return s;
};

/**
 * newYear
 * @param {string} name
 * @returns {string}
 */
function newYear(name) {
    return `${name}! `.repeat(3).trim();
};

export { kolobok, newYear };