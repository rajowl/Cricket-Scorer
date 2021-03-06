//THIS FILE IS BEING PLACED AT THE END OF THE BODY 
//OF THE INDEX.HTML FILE ALONG WITH THE MENUS.JS FILE.

//AJAX POST
//When the form with the id 'team-name-search-form' is submitted,
//the below function is called.  
$('form#team-name-search-form').submit(function(e){
	//$.post is an AJAX routine. It will make a HTTP POST request to the 
	//localhost URL at the path name 'team_search', with the team 
	//name entered in the form.
	//The server side is listening for a client request at this URL,
	//as seen in the 'urls.py' file in the 'cricket_scoring' dir.
	//'function(data)' parameter speficies a function to run if the 
	//request succeeds. 'Data' holds the data returned from the request.
		$.post('/team_search/', $(this).serialize(), function(data){
			//The data retrieved from the request is now being 
			//passed in between the html tags with the class
			//'teams'.
			$('div#team-name-selection-div').html(data);
		}); 
		e.preventDefault();
});

//same as above but only for player search instead of team search 
$('form#player-name-search-form').submit(function(e){
		$.post('/player_search/', $(this).serialize(), function(data){
			$('div#player-name-selection-div').html(data);
		}); 
		e.preventDefault();
});

function SelectNameDiv(name){
	$("input#hidden-input").val($(name).attr('value'));
	$($(name).submit().attr('id')).submit();
	//There a hidden input fields which are being submitted by the Ajax 
	//rquest to the client side. The below conditionals will set the input 
	//fields in the hidden inputs to store the home and away team names, so
	//on submission these input fields will send the team names to the server. 
	if ( $(name).parent().attr('class')=="search-results home-team" ){
		SetTeamNames('id_home_team',$(name).attr('value'));
		//Setting a client side variable to hold the home team name so 
		//that it can be submitted separately once the match details 
		//modal box is submitted. 
		home_team_name = $(name).attr('value');
	}
	else {
		SetTeamNames('id_away_team',$(name).attr('value'));
		//Setting a client side variable to hold the away team name so 
		//that it can be submitted separately once the match details 
		//modal box is submitted. 
		away_team_name = $(name).attr('value');
	}
};

function SetTeamNames(id,team_name) {
	var options = document.getElementById('id_home_team').getElementsByTagName('option');
	for (tag in options){
		if (options[tag].innerHTML === team_name){
			$('select#'.concat(id)).val(options[tag].value);
		}
	}
};

// Same as the above 2 AJAX requests on this is for the selection of team names 
// and not just for searching.
$('form#team-name-selection-form').submit(function(e){
		e.preventDefault();
		$.post('/team_selection/', $(this).serialize(), function(data){
			//The data retrieved from the server side is now being 
			//passed in between the html tags with the class
			//'home-team' and the id 'player-name-selection-form'
			$('div#player-name-selection-form').html(data);
		});
});

// Same as the above 3 AJAX requests on this is for the selection of player names 
// and not just for searching.
$('form#player-name-selection-form').submit(function(e){
		e.preventDefault();
		//makes an AJAX post request to the server side
		$.post('/player_stats/', $(this).serialize(), function(data){
			//The data retrieved from the server side is now being 
			//passed in between the html tags with the class
			//'home-team' and the id 'player-name-selection-form'
			$('div.stats#player-stats').html(data);
		});
});

