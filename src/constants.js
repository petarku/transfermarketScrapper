const countryCodeMap = {
	

	Albania:	'ALB',
	Austria:	'AUT',
	Belgium:	'BEL',
	Bulgaria:	'BUL',
	Croatia:	'CRO',
	Cyprus:	'CYP',
	'Czech Republic':	'TCH',
	Denmark:	'DEN',
	England:	'ENG',
	Estonia:	'EST',
	'Faroe Isles':	'FAR',
	Finland:	'FIN',
	France:	'FRA',
	Germany:	'GER',
	Greece:	'GRE',
	Hungary:	'HUN',
	Iceland:	'ISL',
	Israel:	'ISR',
	Italy:	'ITA',
	Ireland: 'IRL',
	Latvia:	'LAT',
	Lithuania:	'LIT',
	Luxembourg:	'LUX',
	Malta:	'MLT',
	Netherlands:	'HOL',
	'Northern Ireland':	'NIR',
	Norway:	'NOR',
	Poland:	'POL',
	Portugal:	'POR',
	Romania:	'ROM',
	Russia:	'RUS',
	'San Marino':	'SMR',
	Scotland:	'SCO',
	Slovenia:	'SLO',
	Sweden:	'SWE',
	Turkey:	'TUR',
	Ukraine:	'UKR',
	Wales:	'WAL',
	Serbia:	'SRB',
	Belarus:	'BLS',
	Slovakia:	'SVK',
	Spain:	'ESP',
	Armenia:	'ARM',
	'Bosnia-Herzegovina':	'BOS',
	Azerbaijan:	'AZB',
	Georgia:	'GEO',
	Switzerland:	'SUI',
	'North Macedonia':	'MAC',
	Turkmenistan:	'TRK',
	Liechtenstein:	'LIE',
	Moldova:	'MOL',
	'Costa Rica':	'CRC',
	'El Salvador':	'SAL',
	Guatemala:	'GUA',
	Honduras:	'HON',
	'Hong Kong':	'HON',
	Bahamas:	'BHM',
	Mexico:	'MEX',
	Panama:	'PAN',
	'United States':	'USA',
	Bahrain:	'BAH',
	Nicaragua:	'NIC',
	Bermuda:	'BER',
	Jamaica:	'JAM',
	'Trinidad and Tobago':	'TRI',
	Canada:	'CAN',
	Barbados:	'BAR',
	'El Salvador':	'ELS',
	'St. Vincent':	'SVC',
	Argentina:	'ARG',
	Bolivia:	'BOL',
	Brazil:	'BRA',
	Chile:	'CHL',
	Colombia:	'COL',
	Ecuador:	'ECU',
	Paraguay:	'PAR',
	Surinam:	'SUR',
	Uruguay:	'URU',
	Venezuela:	'VNZ',
	Guyana:	'GUY',
	Peru:	'PER',
	Algeria:	'ALG',
	'South Africa':	'SAF',
	Botswana:	'BOT',
	'Burkina Faso':	'BFS',
	Burundi:	'BUR',
	Lesotho:	'LES',
	Zair:	'ZAI',
	Zambia:	'ZAM',
	Ghana:	'GHA',
	Senegal:	'SEN',
	'Cote d\'Ivoire': 'CIV',
	Tunisia:	'TUN',
	Mali:	'MLI',
	Madagascar:	'MDG',
	Cameroon:	'CMR',
	Chad:	'CHD',
	Uganda:	'UGA',
	Liberia:	'LIB',
	Mozambique:	'MOZ',
	Kenya:	'KEN',
	Sudan:	'SUD',
	Swaziland:	'SWA',
	Angola:	'ANG',
	Togo:	'TOG',
	Zimbabwe:	'ZIM',
	Egypt:	'EGY',
	Tanzania:	'TAN',
	Niger:	'NIG',
	Nigeria:	'NIG',
	Ethiopia:	'ETH',
	Gabon:	'GAB',
	'Sierra Leone':	'SIE',
	Benin:	'BEN',
	Congo:	'CON',
	'DR Congo': 'CON',
	Guinea:	'GUI',
	Morocco:	'MAR',
	Gambia:	'GAM',
	Malawi:	'MLW',
	Japan:	'JAP',
	Taiwan:	'TAI',
	India:	'IND',
	Indonesia:	'IND',
	Bangladesh:	'BAN',
	Brunei:	'BRU',
	Iraq:	'IRA',
	Jordan:	'JOR',
	'Sri Lanka':	'SRI',
	Syria:	'SYR',
	'South Korea':	'KOR',
	Iran:	'IRN',
	Vietnam:	'VIE',
	Malaysia:	'MLY',
	'Saudi Arabia':	'SAU',
	Yemen:	'YEM',
	Kuwait:	'KUW',
	Laos:	'LAO',
	'North Korea':	'NKR',
	Oman:	'OMA',
	Pakistan:	'PAK',
	Philippines:	'PHI',
	China:	'CHI',
	Singapore:	'SGP',
	Mauritius:	'MAU',
	Myanmar:	'MYA',
	'Papua New Guinea':	'PAP',
	Tajikistan:	'TAD',
	Uzbekistan:	'UZB',
	Qatar:	'QAT',
	'United Arab Emis':	'UAE',
	Australia:	'AUS',
	'New Zealand':	'NZL',
	Fiji:	'FIJ',
	'Solomon Islands':	'SOL',


	

};


const positionCodeMap = {
	'Goalkeeper': 'GK',
	'Right-Back': 'RB',
	'Centre-Back': 'D',
	'Left-Back': 'LB',
	'Right Winger': 'RW',
	'Left Winger': 'LW',
	'Central Midfield': 'M',
	'Left Midfield': 'M',
	'Right Midfield': 'M',
	'Defensive Midfield': 'M',
	'Attacking Midfield': 'M',
	'Centre-Forward': 'A',
	'Second Striker': 'A',
};

const formationCodeMap = {
	'4-2-3-1': '4-5-1',
	'3-5-2 flat': '3-5-2',
	'4-3-3 off.': '4-3-3',
	'4-3-3 Attacking': '4-3-3',
	'5-3-2': '5-3-2',
	'4-1-3-2': '4-4-2',
	'4-3-2-1': '4-5-1',
	'4-3-1-2': '4-4-2',
	'4-4-2 double 6': '4-4-2',
	'3-4-2-1': '3-4-3',
	'4-1-4-1': '5-4-1',
	'4-4-1-1': '4-4-2',
	'3-5-2': '3-5-2',
	'3-4-1-2': '3-5-2',
	'4-4-2': '4-4-2',
	'3-4-3': '3-4-3',
	'5-4-1': '5-4-1',
	'5-4-1 Diamond': '5-4-1',
	'4-5-1 flat': '4-5-1', 
	'3-5-2 Attacking':'3-5-2', 
	'4-4-2 Diamond': '4-4-2' , 
	'3-4-3 Diamond': '3-4-3' ,
	'4-3-3 Defending' : '4-5-1' , 
	'3-1-4-2' : '3-5-2'


};

module.exports = {
	countryCodeMap, 
    positionCodeMap, 
    formationCodeMap 
	
};