
///////////////////////////////////////////////////////////////////////////////////////


// Definitions start

var emojiList = [
		["bitch", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/bitch.gif"],
		["nod", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/nod.gif"],
		["tauri", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/tauri.gif"],
		["morningafter", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/morningafter.gif"],
		["hug", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/hug.gif"],
		["doh", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/doh.gif"],
		["fail", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/fail.gif"],
		["what", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/what.gif"],
		["fuckyou", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/fuckyou.gif"],
		["rofl", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/rofl.gif"],
		["bandit", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/bandit.gif"],
		["clap", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/clap.gif"],
		["cool", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/cool.gif"],
		["cry", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/cry.gif"],
		["cwl", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/cwl.gif"],
		["dance", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/dance.gif"],
		["devil", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/devil.gif"],
		["emo", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/emo.gif"],
		["festiveparty", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/festiveparty.gif"],
		["ghost", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/ghost.gif"],
		["headphones", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/headphones.gif"],
		["highfive", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/highfive.gif"],
		["holidayspirit", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/holidayspirit.gif"],
		["idea", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/idea.gif"],
		["kiss", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/kiss.gif"],
		["masang", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/masang.gif"],
		["monkey", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/monkey.gif"],
		["nerdy", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/nerdy.gif"],
		["poop", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/poop.gif"],
		["punch", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/punch.gif"],
		["rock", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/rock.gif"],
		["santamooning", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/santamooning.gif"],
		["sheep", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/sheep.gif"],
		["shock", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/shock.gif"],
		["slap", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/slap.gif"],
		["sleepy", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/sleepy.gif"],
		["swear", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/swear.gif"],
		["time", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/time.gif"],
		["tmi", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/tmi.gif"],
		["tumbleweed", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/tumbleweed.gif"],
		["wait", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/wait.gif"],
		["wasntme", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/wasntme.gif"],
		["whew", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/whew.gif"],
		["worry", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/worry.gif"],
		["happy", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/happy.gif"],
		["drunk", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/drunk.gif"],
		["waiting", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/waiting.gif"],
		["shake", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/shake.gif"],
		["captain", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/captain.gif"],
		["fubar", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/fubar.gif"]
//		["", ""],
//		["", ""]
	
	];
	
var staffChanNames = [
		"staff",
		"headquarters"
	];
	
var ESServerID = 220645473747206140;

var staffChanClass = "staff-channel-name";

var dir = process.env.APPDATA + "\\BetterDiscord\\plugins\\"

var updateFile = "https://rawgit.com/Aesir123/Theme/master/update.txt"

var localUpdateFile = "ESUpdateData.txt"

var owners = ['Cælestis', 'Arch']; // Who else?

var ownersTooltips = [
	"This is the owner of the theme you're using, cool, isn't it? Drop him a thank or rather give him some pussy, he needs that so much! :(", // Aesir
	"I'm a potato : l Modified the theme to look nicer." // Priit
];

var ranks = [
	"Bot",
	"Kasistar",
	"Server Admin",
	"Community Manager",
	"Web Admin",
	"Super Game Admin",
	"Game Admin",
	"Super Game Master",
	"Game Master",
	"Trial Game Master",
	"Game Artist",
	"Beta Tester",
	"Online",
	"Offline"
];
// Definitions end

// Logging start
function writeLogLine(text, tag)
{
	var line = "[ESTheme][" + tag + "] - " + text;
	console.log(line);
}
// Logging end

// Cookie management start
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}
// Cookie management end

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function GetCurrentServerID() {
	var ID = 0

	$(".guild.selected .avatar-small").each(function() {
		var server = $(this)
		ID = parseInt(server.attr("href").match(/\/(\d+)\//)[1])
	})

	return ID
}

// Update shit start
function makeUpdate(ver)
{
	 createCookie('ESUpdate', ver, 31);
	 location.reload();
}

function updateTimer(ver)
{
	var elementX = document.getElementById('updateTimerElement');
	var leftTime = 10;
	var updateVer = ver;
	setInterval(function () {
			
			leftTime--;
			if(leftTime <= 0)
				makeUpdate(updateVer);
			
			elementX.innerHTML = leftTime;
    }, 1000);
}

function pushUpdateNotification(currVer, newVer)
{
	if(document.getElementById('themeUpdateNotice')) return;
	
	$('.app').append('<div class="notice notice-info" id="themeUpdateNotice"> \
		<strong>ES Theme</strong>\'s automated update system found a new version! \
		<strong><span id="updateTimerElement">N/A</span></strong> seconds left until install! \
		| Current Version: ' + currVer + ' | Remote Version: ' + newVer + ' | \
		</div>');
		
	updateTimer(newVer);
}

function checkUpdate()
{
	
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", updateFile, true);
	txtFile.onreadystatechange = function() {
	  if (txtFile.readyState === 4) {
		if (txtFile.status === 200) {
		  var ver = parseInt(txtFile.responseText);
		  var cookieVer = readCookie('ESUpdate');
	
			if(ver != parseInt(cookieVer))
			{
				pushUpdateNotification(cookieVer, ver);
			}
		}
	  }
	}
	txtFile.send(null);
	
}
// Update shit end


// Really cool shit start
function createjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    return fileref
}

function replacejscssfile(oldfilename, newfilename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist using
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
            var newelement=createjscssfile(newfilename, filetype)
            allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
        }
    }
}

function patchDiscordCore()
{
	writeLogLine("Patching Discord core...", "");
	replacejscssfile("/assets/22d05df3752ed5186dc5.js", "https://rawgit.com/Aesir123/Theme/master/core/coreFile1.js", "js");
	replacejscssfile("22d05df3752ed5186dc5.js", "https://rawgit.com/Aesir123/Theme/master/core/coreFile1.js", "js"); // not sure but...
	writeLogLine("Discord core patched!", "");
	
}
// Really cool shit end


function pushDoubleClickEdit()
{
	
	writeLogLine("Setting up dbl-clk edit...", "Misc");
	$(document).on("dblclick.dce", function(e) {
        var target = $(e.target);
        if(target.parents(".message").length > 0) {
            var msg = target.parents(".message").first();
            var opt = msg.find(".btn-option");
            opt.click();

            $.each($(".popout .btn-item"), (index, value) => {
                var option = $(value);
                if(option.text() === "Edit") {
                    option.click();
                }
            });

        }
	});
	writeLogLine("Dbl-click edit applied", "Misc");
}


function setOwnerToolTip()
{
	writeLogLine("Applying owners styles...", "Theme");
	for(var x = 0; x < owners.length; x++)
	{
		var members = document.getElementsByClassName('member-username-inner');
		var ownerElement = 0;
		
		for(var i = 0; i < members.length; i++)
			if(members[i].innerHTML == owners[x]) { ownerElement = members[i]; break;} 
		
		if(!ownerElement) return;
		
		ownerElement = ownerElement.parentElement.parentElement.parentElement;
		
		ownerElement.getElementsByClassName('status')[0].style = "background-color: #00FFFF !important;";
		
		ownerElement.onmouseover = 
		 function() { 
			 pushOwnerToolTip(this.getBoundingClientRect(), this.getElementsByClassName('member-username-inner')[0].innerHTML == owners[0] ? 0 : 1);
		 };
		 
		 ownerElement.onmouseout = 
		 function() {
			if(document.getElementById('owner-tooltip')) $('#owner-tooltip').remove(); 
		 };
	}
	
	writeLogLine("Owners style applied!", "Theme");
}

function pushOwnerToolTip(position, type)
{
	writeLogLine("Applying owners tooltips", "Tooltip");
	pushToolTip('owner-tooltip', position.left, position.top, top, ownersTooltips[type]);
}

function pushToolTip(id, x, y, type, content)
{
	if(document.getElementById('id')) $('.' + id).remove();
	
	var toolTips = document.getElementsByClassName('tooltips')[0];
	var toolTipHTML = '<div id="' + id + '" class="tooltip tooltip-' + type + ' tooltip-normal" style="left: '+x+'; top: '+y+'">' + content + '</div>';
	toolTips.innerHTML += toolTipHTML;
	writeLogLine("Tooltip " + id + " applied", "Tooltip");
}


function loadTheme()
{
	var cssId = 'ESThemeImplementation';
	writeLogLine("Detecting custom css...", "Theme");
	if (!document.getElementById(cssId))
	{
		writeLogLine("Custom css missing! Applying ESTheme css...", "Theme");
		var customCss = document.getElementById('customcss');
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'https://rawgit.com/Aesir123/Theme/master/theme.css';
		link.media = 'all';
		head.insertBefore(link, customCss);
	}
	else
		writeLogLine("Custom css already applied!", "Theme");
}

function unloadTheme()
{
	$('#ESThemeImplementation').remove();
	$(document).off("dblclick.dce");
}

function getImagesByAlt(alt) {
    var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alt) {
            images.push(allImages[i]);
        }
    }
    return images;
}


function applyEmoticon(name, url)
{
	
	var emoticons = getImagesByAlt(":" + name + ":");
	var x = 0;
	
	for(var i = 0; i < emoticons.length; i++)
	{
		emoticons[i].src = url;
		x++;
	}
	
	return x;
}

function applyEmoticons()
{
	
	
	var cnt = 0;
	
	for(var i = 0; i < emojiList.length; i++)
	{
		cnt += applyEmoticon(emojiList[i][0], emojiList[i][1]);
	}
	
	pushHuan();
	
	return cnt;
}


function replaceStaffChannelsColor()
{
	var chans = document.getElementsByClassName("channel-name");
	
	var isEsServer = (GetCurrentServerID() == ESServerID);
	
	if(!isEsServer) writeLogLine("This is not ES Server! Removing channels customizations...", "Theme");
	
	for(var i = 0; i < chans.length; i++)
	{
		if(!isEsServer) {chans[i].className.replace(' '+ staffChanClass, ''); continue; }
		
		
		for(var x = 0; x < staffChanNames.length; x++)
		{
			if(chans[i].innerHTML == staffChanNames[x]
				&& chans[i].parentElement.className != 'title')
			{
				writeLogLine("Channels customization applied to " + chans[i].innerHTML + " channel", "Theme");
				if(chans[i].className.indexOf(staffChanClass) == -1)
					chans[i].className += (" " + staffChanClass);
				
				break;
			}
		}
	}
}

function pushHuan()
{
	var msgs = document.getElementsByClassName('markup');
	var huanText = "<span id=\"huan\" />";
	for(var i = 0; i < msgs.length; i++)
	{
		msgs[i].innerHTML = msgs[i].innerHTML.replace(": l", " " + huanText);
	}
}

function main()
{
/*	var canvas = document.createElement('canvas');
    div = document.getElementsByClassName('app')[0]; 
    canvas.id     = "spiders";
    canvas.width  = 1224;
    canvas.height = 768;
    canvas.style.zIndex   = 8;
    canvas.style.position = "absolute";
    canvas.style.border   = "1px solid";
    div.appendChild(canvas);
	loadScript('https://rawgit.com/Aesir123/Theme/master/dot_anim.js', pushHuan);*/
	patchDiscordCore();
	var rtn = applyEmoticons();
	writeLogLine("Head replace finished! Replace count: " + rtn, "SkypeEmotes");
	replaceStaffChannelsColor();
	
	if(GetCurrentServerID() == ESServerID) setOwnerToolTip();
	pushDoubleClickEdit();

	window.setInterval(function(){
	  checkUpdate();
	}, 15000);


}


esIntegration.prototype.onSwitch = function() {
	replaceStaffChannelsColor();
	var rtn = applyEmoticons();
	if(document.getElementById('owner-tooltip')) $('#owner-tooltip').remove();
	if(GetCurrentServerID() == ESServerID) setOwnerToolTip();
	
}
esIntegration.prototype.load = function() {}


esIntegration.prototype.observer = function () {}
esIntegration.prototype.getSettingsPanel = function () {
	return ""
}

esIntegration.prototype.unload = function() {
	unloadTheme();
}
esIntegration.prototype.stop = function() {
	unloadTheme();
}

esIntegration.prototype.onMessage = function() { 
	var rtn = applyEmoticons();
	writeLogLine("Message replace finished! Replace count: " + rtn, "SkypeEmotes");
}
