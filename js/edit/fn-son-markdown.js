
var SONJS = (function(){
	var SONJS = {};
	SONJS.markdown = {};

	SONJS.markdown = function(contents){
		contents = SONJS.markdown.H1( contents );
		contents = SONJS.markdown.HR( contents );
		contents = contents.replace(/(^\s*)|(\s*$)/g, "" ).replace(/\n/ig, "<br>");
		contents = SONJS.markdown.FONT( contents );
		contents = SONJS.markdown.FONTSIZE( contents );
		contents = SONJS.markdown.FONTSTYLE( contents );
		contents = SONJS.markdown.ALIGN( contents );
		contents = SONJS.markdown.BOLD( contents );
		contents = SONJS.markdown.ITALIC( contents );
		contents = SONJS.markdown.DEL( contents );
		contents = SONJS.markdown.UNDERLINING( contents );
		contents = SONJS.markdown.SUPERSCRIPT( contents );
		contents = SONJS.markdown.SUBERSCRIPT( contents );
		
		contents = SONJS.markdown.FIELD( contents );
		contents = SONJS.markdown.ALERT( contents );
		contents = SONJS.markdown.INFO( contents );
		contents = SONJS.markdown.LINK( contents );
		contents = tableRex( contents );
		contents = orderList( contents );
		contents = unorderList( contents );
		return contents;
	};
	
	
	SONJS.append = function(){
		loadJQuery("../js/edit/sonjs/sonjs-markup-FONT.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-ALIGN.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-BOLD.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-ITALIC.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-DEL.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-UNDERLINING.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-SUPERSCRIPT.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-SUBERSCRIPT.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-H1.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-HR.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-FIELD.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-ALERT.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-INFO.js");
		loadJQuery("../js/edit/sonjs/sonjs-markup-LINK.js");
	};
	SONJS.append();
	
	return SONJS;
})();

function loadJQuery(src) {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";		  
    oScript.src = src;	
    document.getElementsByTagName("head")[0].appendChild(oScript);
}