


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
		["worry", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/worry.gif"]
//		["", ""],
//		["", ""],
	
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

var owner = 'Aesir' // Who else?
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

function GetCurrentServerID() {
	var ID = 0

	$(".guild.selected .avatar-small").each(function() {
		var server = $(this)
		ID = parseInt(server.attr("href").match(/\/(\d+)\//)[1])
	})

	return ID
}

function makeUpdate(ver)
{
	 createCookie('ESUpdate', ver, 1);
	 location.reload();
}


function pushUpdateNotification(currVer, newVer)
{
	if(document.getElementById('themeUpdateNotice')) return;
	
	$('.app').append('<div class="notice notice-info" id="themeUpdateNotice"> \
		<div class="notice-dismiss" onclick="document.getElementById(\'themeUpdateNotice\').remove();"> \
		</div> \
		<strong>ES Theme</strong>\'s automated update system found a new version! | Current Version: ' + currVer + ' | Remote Version: ' + newVer + ' | \
		<a class="btn" onclick="makeUpdate(' + newVer + ')" style="cursor:pointer">Install It!</a> \
		</div>');
}

function setOwnerToolTip()
{
	var members = document.getElementsByClassName('member-username-inner');
	var ownerElement = 0;
	
	for(var i = 0; i < members.length; i++)
		if(members[i].innerHTML == owner) { ownerElement = members[i]; break;} 
	
	if(!ownerElement) return;
	
	ownerElement = ownerElement.parentElement.parentElement.parentElement;
	
	ownerElement.onmouseover = 
     function() { 
         pushOwnerToolTip(ownerElement.position);
     };
	 
	 ownerElement.onmouseout = 
	 function() {
		if(document.getElementById('owner-tooltip')) $('#owner-tooltip').remove(); 
	 };
	
}

function pushOwnerToolTip(position)
{
	pushToolTip(id, position.left, position.top, top, "testShit, don't ask yourself what this is, rather go blame Kasistar.");
}

function pushToolTip(id, x, y, type, content)
{
	if(document.getElementById('id')) $('.' + id).remove();
	
	var toolTips = document.getElementsByClassName('tooltips')[0];
	var toolTipHTML = '<div class="tooltip tooltip-' + type + ' tooltip-normal" style="left: '+x+'; top: '+y+'>"' + content + '</div>';
	toolTips.append(toolTipHTML);
	
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
	
			if(!cookieVer || ver > parseInt(cookieVer))
			{
				pushUpdateNotification(cookieVer, newVer);
			}
		}
	  }
	}
	txtFile.send(null);
	
	
	
}

function loadTheme()
{
	var cssId = 'ESThemeImplementation';
	if (!document.getElementById(cssId))
	{
		var customCss = document.getElementById('customcss');
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'https://rawgit.com/Aesir123/Theme/master/theme.css';
		link.media = 'all';
		customCss.parentElement.insertBefore(link, customCss);
	}
}

function unloadTheme()
{
	$('#ESThemeImplementation').remove();
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
				if(chans[i].className.indexOf(staffChanClass) == -1)
					chans[i].className += (" " + staffChanClass);
				
				break;
			}
		}
	}
}

function main()
{
	var rtn = applyEmoticons();
	writeLogLine("Head replace finished! Replace count: " + rtn, "SkypeEmotes");
	replaceStaffChannelsColor();
	
	

	window.setInterval(function(){
	  checkUpdate();
	}, 15000);


}


esIntegration.prototype.onSwitch = function() {
	replaceStaffChannelsColor();
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
