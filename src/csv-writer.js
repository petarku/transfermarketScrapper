const fs = require('fs');
const normalize = require('normalize-text');

const countryCodeMap = {
	Austria: 'AUT',
	Serbia: 'YUG',
	Spain:'ESP', 
	Netherlands:'HOL',
	Camerun:'CMR', 
	Ireland:'IRL' , 
	Azerbaijan:'AZB', 
	Belarus:'BLS', 
	'Czech Republic':'TCH', 
	Iceland:'ISL', 
	Malta:'MLT', 
	'San Marino':'SMR', 
	'Northern Ireland':'NIR', 
	Slovakia:'SVK', 
	Switzerland:'SUI',
	Chile:'CHL', 
	Venezuela:'VNZ',
	'Costa Rica':'CRC',
	'El Salvador':'ELS',
	'United States':'USA',
	'Burkina Faso':'BFS',
	'Cote d\'Ivoire':'CIV', 
	Mali:'MLI', 
	'South Africa': 'SAF',
	'New Zealand':'NZL', 
	'Montenegro':'CUS', 
	'Cape Verde':'CUS',

};

const positionCodeMap = {
	'Goalkeeper':'GK',
	'Right-Back':'RB',
	'Centre-Back':'D',
	'Left-Back':'LB',
	'Right Winger':'RW',
	'Left Winger':'LW',
	'Central Midfield':'M',
	'Left Midfield':'M', 
	'Right Midfield':'M',
	'Defensive Midfield':'M',
	'Attacking Midfield':'M',
	'Centre-Forward':'A',
	'Second Striker':'A',
};

const formationCodeMap = {
	'4-2-3-1':'4-5-1',
	'3-5-2 flat':'3-5-2', 
	'4-3-3 off.':'4-3-3', 
	'5-3-2':'5-3-2', 
	'4-1-3-2':'4-4-2', 
	'4-3-2-1':'4-5-1',
	'4-3-1-2':'4-4-2', 
	'4-4-2 double 6':'4-4-2', 
	'3-4-2-1': '3-4-3', 
	'4-1-4-1':'5-4-1',
	'3-5-2':'3-5-2', 

};


function slugify (text) {
	return text.toString().toLowerCase().trim()
		.replace(/&/g, '-and-')         // Replace & with 'and'
		.replace(/[\s\W-]+/g, '-')
		.replace(/-{2,}/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '');            // Trim - from end of text
}


function playerLine (player) {
	// player lines: country code, index number (1 - 16), name, position code, black, 0,0,0,0,0,0,0, swos value
	const country = player.flags[0];
	const playerName = normalize.normalizeDiacritics(player.name) ; 
	const skills7 = '0,0,0,0,0,0,0'; 

	return [
		countryCodeMap[country] || country.substr(0, 3).toUpperCase(),
		player.index,
		playerName,
		positionCodeMap[player.position],
		'BLACK',
		skills7,
		player.swosValue
	].join(',');
}

function capGoalkeeperPrice(swosValue) {

	if (['8M', '7M', '6M', '5M'].indexOf(swosValue) >= 0) {
		swosValue= '4.5M ; '
	}
	return swosValue ; 
	/*if ((swosValue ==='8M') || (swosValue ==='7M')
	(swosValue ==='6M') || (swosValue ==='5M') ) {
		swosValue = '4.5M' ; 
		return swosValue ; 
	} else {
		return swosValue ; 
	}*/
}

function petarsWeirdSelection (players) {
	
	let goalkeepers = players.filter(p => p.position === 'Goalkeeper');
	let gkIndex = 1;
	goalkeepers.forEach(gk => {                             // number goalkeepers: 1, 12,
		gk.index = gkIndex;
		gkIndex += 11;
	});
	let firstgoalkeeper = goalkeepers.slice(0, 1);
	let secondGoalkeeper = goalkeepers.slice(1,2) ; 

	var codePriority = [ 
	'Goalkeeper', 
	'Right-Back', 
	'Centre-Back', 
	'Left-Back', 
	'Right Winger',
	'Central Midfield',
	'Left Midfield',
	'Right Midfield',
	'Defensive Midfield',
	'Attacking Midfield',
	'Left Winger',
	'Second Striker',
	'Centre-Forward',
	]

	let firstTeam = players
		.filter(p => p.position !== 'Goalkeeper')           // filter out GK
		.slice(0, 10)                                       // take 14 non-GK players                               // add the 2 goalkeepers
		.sort((a, b) => b.timeInPlay - a.timeInPlay); 

	/*let firstTeam = players 
		.sort((a, b) => b.timeInPlay - a.timeInPlay)        // filter out GK
		.slice(0, 11);  */                                     // take 14 non-GK players                               // add the 2 goalkeepers
		 
	
	let reserveTeam = players 
		.filter(p => p.position !== 'Goalkeeper')         // filter out GK
		.slice(10, 14);                                     // take 14 non-GK players                               // add the 2 goalkeepers
			//
	//console.log(reserveTeam); 

	firstTeam = firstTeam.sort( function(a,b){ 
		return codePriority.indexOf( a.position ) - codePriority.indexOf( b.position ) 
	});

	let idx = 2;
	firstTeam.forEach(player => {                             // number other players
		if (player.index) return;							// don't number if GK is first
		player.index = idx;
		idx += 1;
		
	});
	
	reserveTeam = reserveTeam.sort( function(a,b){ 
		return codePriority.indexOf( a.position ) - codePriority.indexOf( b.position ) 
	});

	idx = 13;
	reserveTeam.forEach(player => {                             // number other players
		if (player.index) return;							// don't number if GK is first
		player.index = idx;
		idx += 1;
		
	});

	//console.log(reserveTeam) ; 
  	let teamCSV = firstgoalkeeper.concat(firstTeam.concat(secondGoalkeeper.concat(reserveTeam))); 

 	//console.log(teamCSV); 
 return teamCSV ; 

}


function writeClub (league, club) {
	const clubName = normalize.normalizeDiacritics(club.name); 
	const clubCoach = normalize.normalizeDiacritics(club.coach); 
	const clubFormation = formationCodeMap[club.formation] || '4-4-2'; 
	const fname = league.name + '-' + slugify(clubName) + '.csv';
	console.log(`Writing CSV for: ${league.name}/${clubName}`);

	const lines = [];

	// first line: club name, nation number, team number, formation, coach name
	lines.push([ clubName, 'NATION NUMBER', 'TEAM NUMBER', clubFormation, clubCoach, '', '', '', '', '', '', '', '' ].join(','));

	petarsWeirdSelection(club.players)
		.forEach(player => {
			lines.push(playerLine(player));
		});

	fs.writeFileSync('data-csv/' + fname, lines.join('\n'));
}


function writeLeague (league, data) {
	data.forEach(club => {
		writeClub(league, club);
	});
}


module.exports = {
	writeLeague,
};
