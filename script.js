var homeUrl = "http://lev-hak.url.ph";
var loginUrl = homeUrl + "/wp-login.php"
var redirectUrl = loginUrl + "?action=wordpress_social_authenticate&provider=Google&redirect_to=" + loginUrl;
/*
var check = function(status) {
	if(status == 500) {
		window.location.assign(homeUrl);
	}
	else {
		window.location.assign(redirectUrl);
	}
};

$(function() {
	$.ajax({
		type: "GET",
		url: redirectUrl,
		complete: function(xhr, textStatus) {
			//window.location.assign(homeUrl);
			//check(xhr.status);
		}
	});
});*/
	
var inAppBrowser = null;

var initInAppBrowser = function() {
	return window.open(homeUrl + '/mobile.php', '_self', 'location=yes');
};

var initMenuKeyDown = function() {
	document.addEventListener("menubutton", function(){ 
		alert("menu key is pressed");
	}, false);
};

document.addEventListener("deviceready", function(){
	alert("device is ready")
	//inAppBrowser = initInAppBrowser();
	initMenuKeyDown();
}, false); 

