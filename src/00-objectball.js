// Top level object
const topLevelObject = {

    'home': { // object.key0
        'teamName': 'Brooklyn Nets',
        'colors': ['Black', 'White'],
        'players': { 
            /* Array[0] */ "Alan Anderson": {"number": 0, "shoe": 16, "points": 22, "rebounds": 12, "assists": 12, "steals": 3, "blocks": 1, "slamDunks": 1},
            /* Array[1] */ "Reggie Evans": {"number": 30, "shoe": 14, "points": 12, "rebounds": 12, "assists": 12, "steals": 12, "blocks": 12, "slamDunks": 7},
            /* Array[2] */ "Brook Lopez": {"number": 11, "shoe": 17, "points": 17, "rebounds": 19, "assists": 10, "steals": 3, "blocks": 1, "slamDunks": 15},
            /* Array[3] */ "Mason Plumlee": {"number": 1,  "shoe": 19, "points": 26, "rebounds": 12, "assists": 6, "steals": 3, "blocks": 8, "slamDunks": 5},
            /* Array[4] */ "Jason Terry": {"number": 31, "shoe": 15, "points": 19, "rebounds": 2, "assists": 2, "steals": 4, "blocks": 11, "slamDunks": 1}
        }
},

    'away': { // object.key1
        'teamName': 'Charlotte Hornets',
        'colors': ['Turquoise', 'Purple'],
        'players': { 
            /* Array[0] */ "Jeff Adrien": {"number": 4, "shoe": 18, "points": 10, "rebounds": 1, "assists": 1, "steals": 2, "blocks": 7, "slamDunks": 2},
            /* Array[1] */ "Bismak Biyombo": {"number": 0, "shoe": 16, "points": 12, "rebounds": 4, "assists": 7, "steals": 7, "blocks": 15, "slamDunks": 10 },
            /* Array[2] */ "DeSagna Diop": {"number": 2, "shoe": 14, "points": 24, "rebounds": 12, "assists": 12, "steals": 4, "blocks": 5, "slamDunks": 5},
            /* Array[3] */ "Ben Gordon": {"number": 8, "shoe": 15, "points": 33, "rebounds": 3, "assists": 2, "steals": 1, "blocks": 1, "slamDunks": 0},
            /* Array[4] */ "Brendan Haywood": {"number": 33, "shoe": 15, "points": 6, "rebounds": 12, "assists": 12, "steals": 22, "blocks": 5, "slamDunks": 12}
        }
    },
}

function gameObject() {
    return topLevelObject;
}

const object = gameObject(); // Can I have "sharable" const variable at Global Scope for the functions that uses the same variable?

function numPointsScored(playerName) {
    for (const key in object) { 
        
        const playerObject = object[key]['players'];
        for (const player in playerObject) {

            if (playerName === player) {
                console.log(`${player}'s Points: ${playerObject[player]['points']}`);
                return playerObject[player]['points'];
            }

        };
    };
}
numPointsScored('Jeff Adrien');



function shoeSize(playerName) {
    for (const key in object) { 

        const playerObject = object[key];
        for (const player in playerObject['players']) {

            if (playerName === player) {
                console.log(`${player}'s shoe: ${playerObject['players'][player]['shoe']}`);
                return playerObject['players'][player]['shoe'];
            }

        };
    };
}
shoeSize('Brendan Haywood');



function teamColors(team) {
    for (const key in object) { 

        const teamObject = object[key];

        if (team === teamObject['teamName']) {
            console.log(`${teamObject['teamName']}'s Color: ${teamObject['colors']}`);
            return teamObject['colors'];
        }

    };
}
teamColors('Brooklyn Nets');
teamColors('Charlotte Hornets');



function teamNames() {
    const teamName = [];

    for (const key in object) {
        teamName.push(object[key]['teamName']);
    };
    console.log(`Team Name: ${teamName}`);
    return teamName;
}
teamNames();



function playerNumbers(team) {
    const numbers = [];

    for (const key in object) {

        const teamObject = object[key];
        if (team === teamObject['teamName']) {

            for (const player in teamObject['players']) {
                numbers.push(teamObject['players'][player]['number']);    
                console.log(`${player}'s Number: ${teamObject['players'][player]['number']}`);
            };

        }
    };
    return numbers;
}
playerNumbers('Brooklyn Nets');
playerNumbers('Charlotte Hornets');



function playerStats(playerName) {
    for (const key in object) {

        const playerObject = object[key];
        for (player in playerObject['players']) {

            if (playerName === player) {
                console.log(`${player}'s Stat:`, playerObject['players'][player]);
                return playerObject['players'][player];
            } 

        };
    };
}
playerStats('Alan Anderson');


// Refactor!!!!
function bigShoeRebounds() {
    let shoe = 0;
    for (const key in object) {

        const playerObject = object[key]['players'];
        for (player in playerObject) {

            if (playerObject[player]['shoe'] > shoe) {
                shoe = playerObject[player]['shoe'];
            }

        }
    }

    for (const key in object) {
        
        const playerObject = object[key]['players'];
        for (player in playerObject) {

            if (playerObject[player]['shoe'] === shoe) {
                console.log(`Largest Shoe Size Player: ${player}\nShoe Size: ${playerObject[player]['shoe']}\nRebounds: ${playerObject[player]['rebounds']}`);
                return playerObject[player]['rebounds'];
            }

        }
    }
}
bigShoeRebounds();