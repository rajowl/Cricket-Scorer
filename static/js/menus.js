//THIS FILE IS BEING PLACED AT THE END OF THE BODY 
//OF THE INDEX.HTML FILE ALONG WITH THE AJAX.JS FILE.

// This functions is called by default whenever the page is loaded.
$(document).ready(function(){
	$(".next-button").hide();
	$("input#hidden-input").hide();	
	//A 'hacky' way of hiding all the elements 
	//which will be used to send the home and away team names 
	//back to the server side. I was unable to specify these
	//attributes from the server side 'models.py'.
	$("select#id_away_team").hide();	
	$("label[for='id_away_team']").hide();	
	$("select#id_home_team").hide();	
	$("label[for='id_home_team']").hide();	
	//Another 'hacky' way of setting a max and min value for 
	//number of over in the match input field. I was unable to 
	//specify these attributes from the server side 'models.py'.
	$('#id_overs').attr('max', 100).attr('min', 1);
	$('#id_umpire_1').attr('required', true)
	$('#id_umpire_2').attr('required', true)
});

//Called by event handlers from various html elements. 
//Will make the next button visible when called. 
//Will be called when the user has provided sufficient information
//in a modal box to allow them to proceed to the next modal box. 
function DisplayNext() {
	$(".next-button").show();
};

//Called by event handlers from various html elements. 
//Will make the next button invisible when called. 
//Will often be called when a new modal box is opened.
function HideNext() {
	$(".next-button").hide();
	$('div#team-name-selection-div').html(' ');
	$('div#player-name-selection-div').html(' ');
};

var home_team = [];
var away_team = [];

//This will empty any the team members selected from either team, 
//so that if someone wants to reselect team members, or start a 
//new game after finishing an old one, they can do so when new 
//teams are selected. 
function EmptyTeamArrays() {
	home_team = [];
	away_team = [];
};

$("button.close").click(function() {
	console.log('cross has been pressed');
	// Function empties all lists of players that 
	// have been selected
	EmptyTeamArrays();
	// Resets the sidebar display where players that
	// have been selected appear
	DisplayPlayerNames("home-team", []);
	DisplayPlayerNames("away-team", []);
	// Removes all search results that have been 
	// returned from the server side. All search results 
	// have been returned to html elemented with 
	// id = 'search-results' as specified in the 
	// below line.
	$(".search-results").html(' ');
	// Reset match details form inputs are located inside
	// a div with an id="match-details-submission-form".
	$("#match-details-submission-form")[0].reset();
	HideNext();
});

function TeamsheetDisplayToggle(sender){
	var player_name = $(sender).attr('value');

	//Below IF statements handle the toggling mechanism of the player names.
	//If the player is in the team, then they will be removed
	//from the list by looking up the index of the player name 
	//and remove data at that index using the 'splice' function. 
	//If they are not in the team, they will be 'push'ed onto the 
	//end of their team list. 
	if ( sender.parentNode.className === "home-team" ){
		home_team = CreateTeamsheetList('home-team', player_name, home_team);
		DisplayPlayerNames("home-team", home_team);
		ToggleNextButtonInTeamsheetModalBox(home_team);
	} 
	else {
		away_team = CreateTeamsheetList('away-team', player_name, away_team);
		DisplayPlayerNames("away-team", away_team);
		ToggleNextButtonInTeamsheetModalBox(away_team);
	}
}

// Validates the number of players which have been selected in the teamsheet
// for a team. There should be between 13 and 6.
function ToggleNextButtonInTeamsheetModalBox(team_list) {
	if (team_list.length >= 6 && team_list.length <= 13) {
		DisplayNext();
	}
	else{
		HideNext();
	}
}

function CreateTeamsheetList(parentNode_className, player_name, team_list) {
		if ( CheckIfPlayerInTeam(player_name, team_list) ){
		var player_name_index = team_list.indexOf(player_name);
		team_list.splice(player_name_index, 1);
	}
	else{
		team_list.push(player_name);
	}
	
	return team_list;
}

function CheckIfPlayerInTeam(player_name, team_name){
	if (team_name.includes(player_name)) {
		return true
	}
	else{
		return false 
	}
};

function DisplayPlayerNames(team_name, teamsheet){
	//Contains the class names given by Bootstrap for special 
	//design features of list elements. These special features will
	//be used to high the captain, vc, wiki and 12th and 13th men.
	var special_display_features = {0:['list-group-item-success','(C)'],
		1:['list-group-item-success','(VC)'],
		2:['list-group-item-warning','(Wk)'],
		11:['list-group-item-danger','12th'],
		12:['list-group-item-danger','13th']};
	var teamsheet_html = '';
	var template = '<li class="list-group-item {class}">{name} \
		<span class="badge"></span> \</li>';
	for (var i = 0; i < teamsheet.length; i++){
		//We insert the name of the player into the list element template
		list_element = template.replace("{name}", teamsheet[i]);
		//If the player is a captain, vc or wiki, they will be
		//either the 1st, 2nd, 3rd clicked. Thus they will be in 
		//0th, 1st or 2nd index of the teamsheet list. If these
		//index numbers are being examined in the for loop, 
		//we shall lookup the specific html class name
		//that should be given to them in the 'special_display_features'
		//list above. This should then be inserted into their 
		//list element template. 
		if ([0,1,2,11,12].indexOf(i) != -1){
			list_element = list_element.replace("{class}", 
				special_display_features[i][0]); 
			//CHROME DOESNT ACCEPT CONCAT AS BEING A VALID FUNCTION 
			//DO FIREFOX AND CHROME TESTS SEPARATELY 
			//TESTING THE STRING.CONCAT SYNTAX
			//list_element = list_element.replace("</span>", 
			//	String.concat(special_display_features[i][1],"</span>")); 
			list_element = list_element.replace("</span>", 
				special_display_features[i][1].concat("</span>")); 
		}
		teamsheet_html += list_element;
	}
	//All the list elements templates created are added to the
	//'teamsheet_html' string. This string is then returned to the
	//web page, and since it contains html markup, the elements 
	//of the list will appear as a html list either under the 
	//home-team or away-team teamsheet, depending on which has 
	//been specified in the 'team_name' argument for this function.
	$('ul.'.concat(team_name)).html(teamsheet_html);
	teamsheet_html = '';	
};

// Below function will be called when the final form on the user data entry 
// menus is being submitted. This will provide the user the opportunity to
// stop the submission of the form incase incorrect data has been entered. 
function AreYouSure(message) {
	// Confirm box will contain an ok and cancel button. 
	// ok = true, cancel = false   
	var answer = confirm(message.concat(" Are you sure you want to continue?"));
	return answer;
};

// Below function will be called when the final form on the user data entry 
// menus is being submitted. 
$("form#match-details-submission-form").submit(function(e){
	// AreYouSure function is being called from right above this function. 
	// if ( AreYouSure("Once you submit you can start scoring.") === true ){
	if ( AreYouSure("Once you submit you can start scoring.") === true ){
		// The user wants to submit the form and start scoring. 
		// The values for the home-team and away team names will be 
		// put into the appropriate input fields to be submitted. 
		$('<input />').attr('type','hidden'
			).attr('name','home_team_teamsheet'
			).attr('value',home_team
			).appendTo(this);
		$('<input />').attr('type','hidden'
			).attr('name','away_team_teamsheet'
			).attr('value',away_team
			).appendTo(this);
	}
	else {
		// The user DOES NOT WANT to submit the form and start scoring. 
		// The form will not default to its submitting state and will 
		// then display a message telling the user it has not been 
		// submitted.  
		e.preventDefault();
		alert("Form has not been submitted just yet");
	}
});
