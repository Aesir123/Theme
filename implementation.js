

// implementation.js start


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
		["fubar", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/fubar.gif"],
		["overthunking", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/overthunking.gif"]
//		["", ""]
	
	];
	
var staffChanNames = [
		"staff",
		"headquarters"
	];
	
var ESServerID = 220645473747206140;

var staffChanClass = "staff-channel-name";

var dir = process.env.APPDATA + "\\BetterDiscord\\plugins\\";

var updateFile = "https://rawgit.com/Aesir123/Theme/master/update.txt";

var localUpdateFile = "ESUpdateData.txt";

var owners = ['Cælestis', 'Arch']; // Who else?

var animatedAvatarsDir = "https://rawgit.com/Aesir123/Theme/master/avatars/";

var animatedAvatars = [
	["181871636268449792", "Aesir.gif"],
	["175329182333665281", "Future.gif"],
	["185506413253099521", "Knock.gif"]
];


var ownersTooltips = [
	"This is the owner of the theme you're using, cool, isn't it? Drop him a thank or rather give him some pussy, he needs that so much! :(", // Aesir
	"I'm a potato : l Modified the theme to look nicer." // Priit
];

var channelsTag = [
	["220645473747206145", "💬"], // general
	["231874452508377088", "🎧"], // music
//	["231143479953195008", ""], // offtopic
	["256828044398952448", "🤖"], // bot reserved
	["271024891548008449", "🐱"], // cat room
//	["221599128013111298", ""], // beta test
	["224688138608443392", "🎮"], // game chat
	["221283829552381953", "📜"], // rules
	["220913649634508802", "📜"], // news
	["243082056563687424", "🏩"], // nfsw
	["239037686000779265", "📜"], // theme
	["220999021009829890", "📜"], // events
	["220999136416235531", "📜"], // patchnotes
	
	//[, ""],
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

var developerVersion = false;
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

function isOnIRCMode()
{
	return document.getElementsByClassName('compact').length > 0;
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
	
	applyChannelIcon();
}

function applyChannelIcon()
{
	if(GetCurrentServerID() != ESServerID)
		return;
	
	for(var i = 0; i < channelsTag.length; i++)
	{
		var channelNameChild = document.querySelectorAll("[href$='" + channelsTag[i][0] + "'] > .channel-name")[0];
		
		if(channelNameChild.className.indexOf("es-theme-tagged") != -1)
			continue;
		
		var channelName = channelNameChild.innerHTML;
		channelNameChild.innerHTML = channelsTag[i][1] + " " + channelName/* + " " + channelsTag[i][1]*/;
		channelNameChild.className += " es-theme-tagged";
	}
}


function pushHuan()
{
	if(isOnIRCMode())
		return;
	
	var msgs = document.getElementsByClassName('markup');
	var huanText = "<span id=\"huan\" />";
	for(var i = 0; i < msgs.length; i++)
	{
		msgs[i].innerHTML = msgs[i].innerHTML.replace(": l", " " + huanText);
	}
}

//listen to window size change and if maximized change padding of an element because discord window.innerWidth is fucked and 2px go off screen on both sides
function guildsFullscreen()
{
	
	$(window).resize(function() {
		
		var selStyles = document.querySelector("div.scroller.guilds");
		//window width when maximized is 4px more than actual screen width >.>
		if(window.innerWidth == (screen.availWidth + 4))
		{
			//This would just resize the window without visual change, but kind of intrusive to user experience : l
			//window.resizeTo(screen.availWidth, window.innerHeight);
			selStyles.style = "padding-left: 16px !important";
			writeLogLine("changed to fullscreen, apply 16px", "guildsTest");
		} else 
		{
			selStyles.style = "padding-left: 15px !important";
			writeLogLine("changed to window, apply 15px", "guildsTest");
		}
	});
	
}

function replaceAvatars(avatars)
{
	for(var i = 0; i < avatars.length; i++)
	{
		for(var k = 0; k < animatedAvatars.length; k++)
		{
			if(avatars[i].style.backgroundImage.indexOf(animatedAvatars[k][0]) != -1)
			{
				avatars[i].style.backgroundImage = 'url(' + animatedAvatarsDir + animatedAvatars[k][1] + ')';
				break;
			}
		}
	}
}

function replaceAllAvatars()
{
	replaceAvatars(document.getElementsByClassName('avatar-large'));
	replaceAvatars(document.getElementsByClassName('avatar-popout'));
	replaceAvatars(document.getElementsByClassName('avatar-small'));
}


function main()
{

	var rtn = applyEmoticons();
	writeLogLine("Head replace finished! Replace count: " + rtn, "SkypeEmotes");
	replaceStaffChannelsColor();
	guildsFullscreen();
	
	if(GetCurrentServerID() == ESServerID) 
	{ 
		setOwnerToolTip();
	}
	pushDoubleClickEdit();
	
	if(!developerVersion)
	{
		window.setInterval(function(){
			checkUpdate();
		}, 15000);
	}
	
	replaceAllAvatars();

}


esIntegration.prototype.onSwitch = function() {
	replaceStaffChannelsColor();
	replaceAllAvatars();
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
	replaceAllAvatars();
	var rtn = applyEmoticons();
	writeLogLine("Message replace finished! Replace count: " + rtn, "SkypeEmotes");
}


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////