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
		["rofl", "https://raw.githubusercontent.com/Aesir123/Theme/master/skypeEmoji/rofl.gif"]
//		["", ""],
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
// Definitions end

// Logging start
function writeLogLine(text, tag)
{
	var line = "[ESTheme][" + tag + "] - " + text;
	console.log(line);
}
// Logging end

function GetCurrentServerID() {
	var ID = 0

	$(".guild.selected .avatar-small").each(function() {
		var server = $(this)
		ID = parseInt(server.attr("href").match(/\/(\d+)\//)[1])
	})

	return ID
}

function readRemoteFile(url)
{
	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", url, true);
	txtFile.onreadystatechange = function() {
	  if (txtFile.readyState === 4) {
		if (txtFile.status === 200) {
		  return txtFile.responseText[0];
		}
	  }
	}
	txtFile.send(null);
}

function checkUpdate()
{
	var ver = readRemoteFile(updateFile);
	
	if(ver != document.cookie)
	{
		document.cookie = ver;
		location.reload();
	}
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