// const { number } = require("assert-plus");

// Top level object
function gameObject() {
    return {

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
}



function allPlayers() {
    return {...gameObject()['home']['players'], ...gameObject()['away']['players']};
}



function findPlayer(playerName) {
    const players = allPlayers();

    for (const player in players) {

        if (playerName === player) {
            return players[player];
        } 
    }
}



function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return !!player ? player.points : "Player not found";
}



function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return !!player ? player.shoe : "Player not found";
}



function teamColors(nameOfTeam) {
    const teamValues = Object.values(gameObject());

    for (const value of teamValues) {
        if (value.teamName === nameOfTeam) {
            return value.colors;
        }
    }
}



function teamNames() {
    const teamArray = [];
    const teamValues = Object.values(gameObject());

    for (const value of teamValues) {
        teamArray.push(value.teamName);
    }
    return teamArray;
}



function playerNumbers(nameOfTeam) {
    const teamValues = Object.values(gameObject());

    for (const value of teamValues) {

        if (nameOfTeam === value.teamName) {
            const playerProperty = Object.values(value.players);
            const playerNumbers = playerProperty.map(element => element.number);

            return playerNumbers;
        }

    }
}



function playerStats(playerName) {
    const player = findPlayer(playerName);
    return !!player ? player : "Player not found";
}



/*
Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
First, find the player with the largest shoe size
Then, return that player's number of rebounds
Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.
*/
function bigShoeRebounds() {
    const playerValues = Object.values(allPlayers())
    const playerShoes = playerValues.map(element => element.shoe);
    const maxShoe = Math.max(...playerShoes);
    
    for (const player of playerValues) {
        if (player.shoe === maxShoe) {
            return player.rebounds;
        }
    }
}