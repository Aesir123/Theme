

function loadTheme()
{
	var cssId = 'ESThemeImplementation';  // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'https://rawgit.com/Aesir123/Theme/master/theme.css';
		link.media = 'all';
		head.appendChild(link);
	}
}

function main()
{
	$(".app").append("<canvas />");
//	loadTheme();
//	alert("i'm working c:");
}