var goose = 0;
var originalSidebar;
var login = 0;
var postPage;
var currentSidebar;
var homepage;
var allFeed;
var upVote=0;
var downVote=0;

$(document).ready(function(){
	allFeed=$('#mainFeed').clone();
	
	originalSidebar = '<div class="sidebar" id="sidebar"><div class="sidebarText" id="sidebarText">\
   			<h2> Rsahai91 </h2>\
   			<img src="little.jpg" id="FbookImage"\>\
   			<hr id="MobileLineBreak">\
   			<a> <h3> My Feed </h3> </a>\
   			<a> <h3 onclick="post()"> New Post </h3> </a>\
   			<a> <h3> My Posts </h3> </a>\
   			<a><h3 onclick="editMyFeed()"> Edit My Feed </h3></a>\
   			<h2> Categories </h2>\
   			<hr id="MobileLineBreak">\
   			<a> <h3 onclick="allEvents()"> All </h3> </a>\
   			<a> <h3> Athletics </h3> </a>\
   			<a> <h3> Performing Arts </h3> </a>\
   			<a> <h3 onclick="technology()" > Technology </h3> </a>\
   			<a> <h3 onclick="environment()"> Environment </h3> </a>\
   			<a> <h3> Culture </h3> </a>\
   			<a> <h3 onclick="music()"> Music </h3> </a>\
   			<a> <h3> Other </h3> </a>\
   		</div></div>';
   		
   		
	
	postPage = '\
	<div class="content" id="contentPOST">\
   \
   \
   '+originalSidebar+'\
   \
   \
   <!-- page header -->\
   <header>\
      Northwestern University\
   </header>\
   <!-- Sidebar Button -->\
   	<nav>\
   		<ul>\
   			<li id="goose2" class="nav_sidebar" onclick="change()"> -> </li>\
   		</ul>\
   	</nav>\
   	<img id="fbookButton" onclick="change()" src="images/fbookButton.png"/>\
	\
   <!-- H1 means 1st level heading -->\
   <h1>Post an Event!</h1>\
    \
   <!-- P stands for paragraph -->\
   <!-- <p>\
     Fill out these forms and your event will be submitted immediately\
   </p> -->\
   \
   <div id="Add_Photo">\
    \
        <img src="post/plus.jpg" id="addimage"/>\
    \
    \
   </div>\
   \
   \
	<label>Start Time:</label>\
	<input class="inputPOST" type="time" name="start" id="start">\
    \
	<label>End Time:</label>\
	<input class="inputPOST" type="time" name="end" id="end">\
	\
	<label id="dateLabel"> Date:</label>\
	<input class="inputPOST" type="date" name="date" id="date">\
    \
    <div id="title">\
    <label id="titleLabel">Title:</label>\
	<!--<input class="inputPOST" type="address"> -->\
	<form method="post" action="">\
	<textarea name="comments" cols="16" rows="1">\
	</textarea><br>\
    </div>\
	<label for="loc">Location:</label>\
	<!--<input class="inputPOST" type="address" name="loc" id="loc"> -->\
	<form method="post" action="">\
	<textarea name="comments" cols="38" rows="2">\
	</textarea><br>\
	\
	<label for="tag">Tag:</label>\
	<select>\
  	<option value="Technology">Technology</option>\
  	<option value="Athletics">Athletics</option>\
  	<option value="Environment">Environment</option>\
  	<option value="Performing Arts">Performing Arts</option>\
  	<option value="Culture">Culture</option>\
  	<option value="Music">Music</option>\
	</select>\
	<label for="desc">Description:</label>\
	<form method="post" action="">\
	<textarea name="comments" cols="38" rows="4">\
	</textarea><br>\
	<button type="button" id="submitButton" onclick="home()">Submit</button>\
\
	</form>\
	</div>';
	
	fullEventPage='<div class="content">\
	'+originalSidebar+'\
	 <header>\
      	Northwestern University\
  	 </header>\
  	 \
  	 <div class="fullEvent">\
		<img src="Slide12.jpg"/>\
	</div>\
  	 <!-- Sidebar Button -->\
  	 <img id="fbookButton" onclick="change()" src="images/fbookButton.png"/>\
\
   	<nav>\
   		<ul>\
   			<li id="goose2" class="nav_sidebar" onclick="change()"> -> </li>\
   		</ul>\
   	</nav>\
</div>';
	
    //$('#sidebar').delay(0).hide(1);
    
    // if user clicked on button, the overlay layer or the dialogbox, close the dialog  
    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {     
        $('#dialog-overlay, #dialog-box').hide();       
        return false;
    });
     
    // if user resize the window, call the same function again
    // to make sure the overlay fills the screen and dialogbox aligned to center    
    $(window).resize(function () {
         
        //only do it if the dialog box is not hidden
        if (!$('#dialog-box').is(':hidden')) popup();       
    }); 
     
})

function change(){

	var tag = document.getElementById("goose2");
	
	if (goose==0){
	
		$('#sidebar').delay(0).show(1);
        $('#sidebar').animate({width:"220px"}, 500 );
        //$('.nav_sidebar').animate({left:"220px"}, 500 );
        $('#fbookButton').animate({left:"222px"}, 500 );
        $('#sidebar').css("z-index", 2);

        //tag.innerHTML="<-";	
		goose++;
		
		}
	else if(goose==1){
		$('#sidebar').animate({width:"0px"}, 500 );
        //$('.nav_sidebar').animate({left:"0px"}, 500 );
        $('#fbookButton').animate({left:"0px"}, 500 );
        $('#sidebar').delay(0).hide(1);
		goose--;
		//tag.innerHTML="->";
	} 
	
}

function editMyFeed(){

	var tag = document.getElementById("sidebarText");
	tag.innerHTML="<h2>Edit My Feed</h2>\
	<hr id='MobileLineBreak'>\
	<form id='editMyFeed'>\
	Athletics:<input type='checkbox' id='checkboxID'><br><br>\
	Performing Arts:<input type='checkbox' id='checkboxID'><br><br>\
	Technology:<input type='checkbox' id='checkboxID'><br><br>\
	Environment:<input type='checkbox' id='checkboxID'><br><br>\
	Culture:<input type='checkbox' id='checkboxID'><br><br>\
	Music:<input type='checkbox' id='checkboxID'></form><br>\
	<button type='button' id='backButton' onclick='backToSidebar()'>Cancel</button>\
	<button type='button' id='saveButton' onclick='backToSidebar()'>Save</button>";
	
	/*<h2> Rsahai91 </h2>
   			<hr id="MobileLineBreak">
   			<form>Athletics:<input type='checkbox'><br>Performing Arts:<input type='checkbox'></form>
   			<br>Technology:<input type='checkbox'><br>Environment:<input type='checkbox'><br>Culture:<input type='checkbox'><br>Music:<input type='checkbox'><br>
   			*/

}

function technology(){
	var tag = document.getElementById("mainFeed");
	tag.innerHTML='\
		<div class="event">\
			<img src="images/CarlSagan.jpg" onclick="fullEvent()"/>\
   		</div>\
   		\
   		<div class="event">\
   			<img src="images/GoogleCar.jpg"/>\
   		</div>\
   		\
   		<div class="event">\
   			<img src="images/RobotComp.jpg">\
   		</div>';
   	change();
}

function environment(){
	var tag = document.getElementById("mainFeed");
	tag.innerHTML='\
		<div class="event">\
			<img src="images/GEenergy.jpg"/>\
   		</div>';
   	change();

}

function music(){
	var tag = document.getElementById("mainFeed");

	tag.innerHTML='\
		<div class="event">\
			<img src="images/AOBlowout.jpg"/>\
   		</div>\
   		\
   		<div class="event">\
   			<img src="images/BattleotBands.jpg"/>\
   		</div>';
   	change();
   	
}

function allEvents(){
	$(".content").replaceWith(homepage);
	$("#mainFeed").replaceWith(allFeed);
	change();
}

function post(){
	currentSidebar=$('#sidebarText').clone();
	$(".content").replaceWith(postPage);
	goose--;

}
//AFTERLOGIN
function backToSidebar(){
	$("#sidebar").replaceWith(originalSidebar);
	$('#sidebar').animate({width:"220px"}, 10 );
	login++;
	homepage=$('.content').clone();
}

function home(){
	popup('Your post has been successfully submitted and will be live in a few minutes!');
	$(".content").replaceWith(homepage);
	$('#sidebar').animate({width:"0px"}, 500 );
	$('#fbookButton').animate({left:"2px"}, 0 );
	var tag = document.getElementById("goose2");
	//tag.innerHTML="->";
}

function fullEvent(){
	if (login==0){
		change();
	} else{
	$(".content").replaceWith(fullEventPage);
	}
	//goose--;


}

function upvote(){

if (login==0){
		change();
	} 
else{
	if (upVote==0){
		var tag = document.getElementById("womensLax");
		tag.innerHTML='<img src="images/WomensLaxUp.jpg"/>';
		upVote++;
	}else{
		var tag2 = document.getElementById("womensLax");
		tag2.innerHTML='<img src="images/WomensLax.jpg"/>';
		upVote--;
	}
}	

}

function downvote(){

if (login==0){
		change();
	} 
else{
	if (downVote==0){
		var tag = document.getElementById("womensLax");
		tag.innerHTML='<img src="images/WomensLaxDown.jpg"/>';
		downVote++;
	}else{
		var tag2 = document.getElementById("womensLax");
		tag2.innerHTML='<img src="images/WomensLax.jpg"/>';
		downVote--;
	}
}
}

//Popup dialog
function popup(message) {
         
    // get the screen height and width  
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();
     
    // calculate the values for center alignment
    var dialogTop =  (maskHeight/3) - ($('#dialog-box').height());  
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
     
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:350, left:155}).show();
     
    // display the message
    $('#dialog-message').html(message);
             
}