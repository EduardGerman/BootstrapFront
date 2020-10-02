window.addEventListener("scroll", bringmenu);

function bringmenu() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		document.getElementById("bottommenu").style.bottom = "-100%";
	} else {
		document.getElementById("bottommenu").style.bottom = "0";
	}
}
var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
	var st = window.pageYOffset || document.documentElement.scrollTop;  
	if (st > lastScrollTop){
		document.getElementById("bottommenu").style.bottom = "-100%";
	} else {
		document.getElementById("bottommenu").style.bottom = "0";
	}
	lastScrollTop = st;
}, false);
function openForm() {
	document.getElementById("aut").style.display = "block";
}

function closeForm() {
	document.getElementById("aut").style.display = "none";
	document.getElementById("aut-email").value = ""
	document.getElementById("aut-email").placeholder = "Enter Mail"
	document.getElementById("aut-psw").value = ""
	document.getElementById("aut-psw").placeholder = "Enter Password"
}
function alphanumeric(uadd)
{ 
	var letters = /^[0-9a-zA-Z]+$/;
	if(uadd.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('User address must have alphanumericcharactersonly');
		uadd.focus();
		return false;
	}
}
