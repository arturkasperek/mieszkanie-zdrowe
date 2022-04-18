/*
function t(){
		sizeFrame("myFrame");
	}
function sizeFrame(myFrame) {

	var F = document.getElementById(myFrame);
	if(F.contentDocument) {
		F.height = F.contentDocument.documentElement.scrollHeight+30; // merge pe chrome
	} else {
		F.height = F.contentWindow.document.body.scrollHeight+30; // merge pe firefox
	}
}

*/

/*
 function t(){
 		sizeFrame("myFrame");
	 }

function sizeFrame(myFrame)
{
	var page_height = document.getElementById(myFrame).contentWindow.document.body.scrollHeight;
	document.getElementById(myFrame).height = page_height+50;
}
	*/

function iframeAutoHeight(){
	setIframeHeight("myiframeid");
}

function getDocHeight(doc) {
	setTimeout(function(){
	},5000);
	doc = doc || document;
	var body = doc.body, html = doc.documentElement;
	var height = Math.min( body.scrollHeight, body.offsetHeight, html.scrollHeight );
	//console.log (body.scrollHeight + " " + body.offsetHeight + " " + html.clientHeight + " " + html.scrollHeight + " " + html.offsetHeight);
	return height;
}
function setIframeHeight(myiframeid) {
	var ifrm = document.getElementById(myiframeid);
	var doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
	//ifrm.style.visibility = 'hidden';
    //ifrm.style.height = "2569px";
	ifrm.style.height = getDocHeight( doc ) + 50+"px";
	//ifrm.style.visibility = 'visible';
}
(function(run){
	for (i=0;i<frames.length; i++) {
		var f1 = document.getElementsByTagName('myiframename')[i];
		if(!f1 && window.addEventListener && !run){
			document.addEventListener('DOMContentLoaded', arguments.callee, false);
			return;
		}
		if(!f1){setTimeout(arguments.callee, 300); return;}
		/*f2 = f1.cloneNode(false);
		f1.src = 'about: blank';
		f2.frameBorder = '0';
		f2.allowTransparency = 'yes';
		f2.scrolling = 'no';
		f1.parentNode.replaceChild(f2, f1);*/
	}
})();