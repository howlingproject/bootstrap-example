(function() 
{
	jQuery.sonEdit = function(sonEdit) {
		var html = "		<table class=\"table table-bordered\"> 			<thead> 				<tr> 					<th colspan=\"2\"> 						<div class=\"btn-toolbar\" id=\"btnToolbar\"> 							<div class=\"btn-group\"> 								<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-font\"></i><span class=\"caret\"></span></button> 								<ul class=\"dropdown-menu\" role=\"menu\"> 									<li> 										<a data-mode=\"font\" data-before=\"[font|돋움]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family:'돋움', dotum;\" unselectable=\"on\">돋움</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\" data-before=\"[font|굴림]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family:'굴림', gulim;\" unselectable=\"on\">굴림</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|궁서]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family:'궁서', gungsuh;\" unselectable=\"on\">궁서</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|바탕]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family:'바탕', batang;\" unselectable=\"on\">바탕</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|Arial]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family: Arial; -webkit-user-select: none; \" unselectable=\"on\">Arial</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|Comic Sans MS]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family: 'Comic Sans MS'; -webkit-user-select: none; \" unselectable=\"on\">Comic Sans MS</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|Courier New]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family: 'Courier New'; -webkit-user-select: none; \" unselectable=\"on\">Courier New</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|Georgia]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family: Georgia; -webkit-user-select: none; \" unselectable=\"on\">Georgia</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|Tahoma]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family: Tahoma; -webkit-user-select: none; \" unselectable=\"on\">Tahoma</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\"data-before=\"[font|Verdana]\" data-center=\" \" data-after=\" [font]\" unselectable=\"on\"> 											<span style=\"font-family: Verdana; -webkit-user-select: none; \" unselectable=\"on\">Verdana</span> 										</a> 									</li> 								</ul> 							</div> 							<div class=\"btn-group\"> 								<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-text-height\"></i><span class=\"caret\"></span></button> 								<ul class=\"dropdown-menu\" role=\"menu\"> 									<li> 										<a data-mode=\"font\" data-before=\"[size|11]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\"> 											<span style=\"font-size:11px;\" unselectable=\"on\">11px</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\" data-before=\"[size|12]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\"> 											<span style=\"font-size:12px;\" unselectable=\"on\">12px</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\" data-before=\"[size|14]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\"> 											<span style=\"font-size:14px;\" unselectable=\"on\">14px</span> 										</a> 									</li> 									<li> 										<a data-mode=\"font\" data-before=\"[size|18]\" data-center=\" \"  data-after=\" [size]\" unselectable=\"on\"> 											<span style=\"font-size:18px;\" unselectable=\"on\">18px</span> 										</a> 									</li> 								</ul> 							</div> 							<div class=\"btn-group\"> 								<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-header\"></i><span class=\"caret\"></span></button> 								<ul class=\"dropdown-menu\" role=\"menu\"> 									<li> 										<a data-mode=\"font\" data-before=\"# \" data-center=\"\"  data-after=\"\" unselectable=\"on\"> 											<span style=\"font-size:18px;\" unselectable=\"on\">h1. 큰 헤드라인</h1> 										</a> 										<a data-mode=\"font\" data-before=\"## \" data-center=\"\"  data-after=\"\" unselectable=\"on\"> 											<span style=\"font-size:14px;\" unselectable=\"on\">h2. 중간 헤드라인</h2> 										</a> 										<a data-mode=\"font\" data-before=\"### \" data-center=\"\"  data-after=\"\" unselectable=\"on\"> 											<span style=\"font-size:12px;\" unselectable=\"on\">h3. 작은 헤드라인</h3> 										</a> 									</li> 								</ul> 							</div> 							<div class=\"btn-group\"> 								<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" data-mode=\"color\" data-before=\"color\" data-center=\" \" data-after=\"color\"><i class=\"fa fa-barcode\"></i><span class=\"caret\"></span></button> 							</div> 							<div class=\"btn-group\"> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"**\" data-center=\" \" data-after=\"**\"><i class=\"fa fa-bold\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"_\" data-center=\" \" data-after=\"_\"><i class=\"fa fa-italic\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"//\" data-center=\" \" data-after=\"//\"><i class=\"fa fa-underline\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[d]\" data-center=\" \" data-after=\"[d]\"><i class=\"fa fa-strikethrough\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[sb]\" data-center=\" \" data-after=\"[sb]\"><i class=\"fa fa-subscript\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[sp]\" data-center=\" \" data-after=\"[sp]\"><i class=\"fa fa-superscript\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[align:left]\" data-center=\" \" data-after=\"[align]\"><i class=\"fa fa-align-left\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[align:center]\" data-center=\" \" data-after=\"[align]\"><i class=\"fa fa-align-center\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[align:right]\" data-center=\" \" data-after=\"[align]\"><i class=\"fa fa-align-right\"></i></button> 							</div> 							<div class=\"btn-group\"> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"insert\" data-before=\"***\" data-center=\"\" data-after=\"\"><i class=\"glyphicon glyphicon-minus\"></i></button> 							</div> 							<div class=\"btn-group\"> 								 							</div>		 							<div class=\"btn-group\"> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"* \" data-center=\" \" data-after=\"\"><i class=\"fa fa-list-ul\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"1. \" data-center=\" \" data-after=\"\"><i class=\"fa fa-list-ol\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[syntax]\" data-center=\"\"  data-after=\"[syntax]\"><i class=\"fa fa-code\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#tableModal\" data-mode=\"layer\" data-type=\"table\"><i class=\"fa fa-table\"></i></button> 								<!-- <button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[note|\" data-center=\"각주\"  data-after=\"#설명]\">각주</button> --> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[field|타이틀]\" data-center=\"\"  data-after=\"[field]\"><i class=\"fa fa-credit-card\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#urlModal\" data-mode=\"layer\" data-type=\"url\" ><i class=\"fa fa-link\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#imgModal\" data-mode=\"layer\" data-type=\"img\" ><i class=\"fa fa-file-image-o\"></i></button> 								 								<!-- <button type=\"button\" class=\"btn btn-default\" >차트</button> --> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\" data-before=\"[alert]\" data-center=\" \" data-after=\"[alert]\"><i class=\"fa fa-exclamation-triangle\"></i></button> 								<button type=\"button\" class=\"btn btn-default\" data-mode=\"append\"  data-before=\"[info]\"  data-center=\" \"  data-after=\"[info]\"><i class=\"fa fa-info\"></i></button> 								 								<button type=\"button\" class=\"btn btn-default\" ><i class=\"fa fa-lightbulb-o\"></i></button> 								 							</div> 						</div> 					</th> 				</tr> 			</thead> 			<tbody> 				<tr> 					<td style=\"width: 50%\"> 						<textarea class=\"form-control\" rows=\"20\" id=\"wikiEditor\" name=\"we_wiki_text\"></textarea> 					</td> 					<td id=\"wikimaincol\" style=\"width: 50%\"> 					 					</td> 				</tr> 			</tbody> 		</table> <div class=\"modal fade\" id=\"urlModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">   <div class=\"modal-dialog\">     <div class=\"modal-content\">     	<div class=\"modal-header\"> 			<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button> 			<h4 class=\"modal-title\">Insert Link</h4>     	</div>      	<div class=\"modal-body\"> 			<form class=\"form\" role=\"form\"> 				<div class=\"form-group\"> 					<label for=\"exampleInputLinkText\">Link Text</label> 					<input type=\"text\" class=\"form-control\" id=\"exampleInputLinkText\" placeholder=\"Link Text\"> 				</div> 				<div class=\"form-group\"> 					<label for=\"exampleInputURL\">URL</label> 					<input type=\"text\" class=\"form-control\" id=\"exampleInputURL\" placeholder=\"URL\"> 				</div> 			</form>       </div>       <div class=\"modal-footer\">         <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>         <button type=\"button\" class=\"btn btn-primary\" id=\"aaa\">Save changes</button>       </div>     </div><!-- /.modal-content -->   </div><!-- /.modal-dialog --> </div><!-- /.modal -->  <div class=\"modal fade\" id=\"imgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">   <div class=\"modal-dialog\">     <div class=\"modal-content\">     	<div class=\"modal-header\"> 			<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button> 			<h4 class=\"modal-title\">Insert Image</h4>     	</div>      	<div class=\"modal-body\"> 			<form class=\"form\" role=\"form\"> 				<div class=\"form-group\"> 					<label for=\"exampleInputLinkText\">Image URL</label> 					<input type=\"text\" class=\"form-control\" id=\"exampleInputImgURL\" placeholder=\"Image URL\"> 				</div> 				<div class=\"form-group\"> 					<label for=\"exampleInputURL\">Alt Text</label> 					<input type=\"text\" class=\"form-control\" id=\"exampleInputImgText\" placeholder=\"Alt Text\"> 				</div> 			</form>       </div>       <div class=\"modal-footer\">         <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>         <button type=\"button\" class=\"btn btn-primary\" id=\"aaa\">Save changes</button>       </div>     </div><!-- /.modal-content -->   </div><!-- /.modal-dialog --> </div><!-- /.modal -->   <div class=\"modal fade\" id=\"tableModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">   <div class=\"modal-dialog\">     <div class=\"modal-content\">       <div class=\"modal-body\">         		<form class=\"form-inline\" id=\"tableHYform\" role=\"form\"> 			<div class=\"form-group\"> 				<input type=\"number\" class=\"form-control\"> 행 x 			</div> 			<div class=\"form-group\"> 				<input type=\"number\" class=\"form-control\"> 열 			</div> 			<button type=\"button\" class=\"btn btn-primary\">적용</button> 		</form>        <hr>                <div id=\"tableHYdiv\">        </div>               </div>       <div class=\"modal-footer\">         <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>         <button type=\"button\" class=\"btn btn-primary\" id=\"ok\">Save changes</button>       </div>     </div><!-- /.modal-content -->   </div><!-- /.modal-dialog --> </div><!-- /.modal -->";
	    $(sonEdit).append(html);
	    var editor = document.getElementById("wikiEditor");
	    $.sonEditAction(editor);
	    $.sonEditTable(editor);
	    $.sonEditLink(editor);
	    
	    setInterval(function() {
			$("#wikimaincol").text("");
			var txt = SONJS.markdown( $("#wikiEditor").val() ); 
			$("#wikimaincol").append( txt ); 
		}, 1000);
	};
	
	jQuery.sonEditAction = function(editor){
		// 각 에디터 버튼 클릭시 액션 처리 
		$("#btnToolbar .btn-group .btn-default").each(function(){
			$(this).on("click", function() {		
				var $me = $(this);
				var data = $me.data();
				// 에디터 액션 처리
				$.editorAction(editor, $me, data);
			});
		});
		
		// 각 에디터 버튼 클릭시 액션 처리 
		$("#btnToolbar .btn-group .dropdown-menu a").each(function(){
			$(this).on("click", function() {		
				var $me = $(this);
				var data = $me.data();
				// 에디터 액션 처리
				$.editorAction(editor, $me, data);
			});
		});
	}
	
	jQuery.sonEditLink = function(editor){
		$("#urlModal .btn-primary").on("click",function(){
			var text = $("#urlModal form").find('input')[0].value ;
			var url  = $("#urlModal form").find('input')[1].value ;
			var html = "["+url+"]("+text+")";		
			$("#urlModal form").find('input')[0].value = "";
			$("#urlModal form").find('input')[1].value = "";
			
			$.textInsert(editor, html, "", "" );
			$('#urlModal').modal('hide');
		});
		 
		//여기서부터 이미지링크
		$("#imgModal .btn-primary").on("click",function(){
			var url = $("#imgModal form").find('input')[0].value ;
			var text  = $("#imgModal form").find('input')[1].value ;
			var html = "!["+text+"]("+url+")";		
			$("#imgModal form").find('input')[0].value = "";
			$("#imgModal form").find('input')[1].value = "";
			
			$.textInsert(editor, html, "", "" );
			$('#imgModal').modal('hide');
		});
	}
	
	jQuery.sonEditTable = function(editor){
		//오케이 했을시 마크업
		$("#tableModal #ok").on("click",function(){
			var html = '';
			html += "||셀제목";
			html += "||셀제목";
			html += "|| \n";

			$("#tableModal #tableHYdiv form").each(function(){
				$(this).find('input').each(function(){ 
					html += "|" + $(this).val();
					$(this).val("");
				});
				html += "| \n"
			});
			
			$.textInsert(editor, html, "", "" );
			$('#tableModal').modal('hide');
		});
		 
		// 행삭제
		tableEvent();
		 
		//행적용
		$("#tableHYform").find("button").on("click", function(){
			var hh = $(this).parent().find("input")[0].value;
			var yy = $(this).parent().find("input")[1].value;
			$("#tableHYdiv").empty();
			$("#tableHYdiv").html( tableEach( hh, yy ) );
			tableEvent();
		});
		
		
		
	}
})(jQuery);

// 행삭제
function tableEvent(){
	$("#tableModal #tableHYdiv form").each(function(){
		$(this).find("button").on("click",function(){
			$(this).parent().remove(); 
		});
	});
}

function tableEach(hh, yy){
	 var html = "";
	 for( var h=0; h < hh; h++ ){
		 html += "<form class=\"form-inline\" role=\"form\">\n";
		 for( var y=0; y < yy; y++ ){
			 html += "<div class=\"form-group\">\n";
			 html += "<input type=\"text\" class=\"form-control\">\n";
			 html += "</div>\n";
		 }
		 html += "<button type=\"button\" class=\"btn btn-primary\">행삭제</button>\n</form>\n";			 
	 }
	 return html;
}

function tableRex( contexts ){
	if( contexts == null ){
		var editText = $("#wikiEditor").val();	
	}else{
		var editText = contexts;	
	}
	
	var regTitle = /^\|\|(.*)\|\|/igm;
	var regTitle2 = /\|\|(.*)\|\|/igm;
	var regBody = /\|(.*)\|/igm;
	var regBody2 = /\|(.*)\|/igm;
	var arrayContents = editText.split("<br>");
	var flag = false ;
	for( var i = 0; i < arrayContents.length; i++ ){
		// 셀제목
		if( arrayContents[i].match( regTitle ) != null ){
			var idx = 0;
			while( arrayContents[i].match( regTitle2 ) != null  ){
				if( idx == 0){
					arrayContents[i] = arrayContents[i].replace(regTitle2,"<tr class=\"active\">\n<td>\n$1\n</td>\n</tr>");	
				}else{
					arrayContents[i] = arrayContents[i].replace(regTitle2,"\n</td>\n<td>\n$1\n</td>\n<td>");	
				}
				idx++;
			}
			arrayContents[i] = arrayContents[i].replace("||","\n</td>\n<td>\n");
			arrayContents[i] = "<thead>" + arrayContents[i] + "</thead>"
			if( !flag ){
				flag = true;
				arrayContents[i] = "<table class=\"table table-bordered\">\n" + arrayContents[i];
			}
			// 셀제목 끝
		}else if( arrayContents[i].match( regBody ) != null ){
			// 로우
			flag = true;
			var idx = 0;
			while( arrayContents[i].match( regBody2 ) != null  ){
				if( idx == 0){
					arrayContents[i] = arrayContents[i].replace(regBody2,"<tr>\n<td>\n$1\n</td>\n</tr>");	
				}else{
					arrayContents[i] = arrayContents[i].replace(regBody2,"\n</td>\n<td>\n$1\n</td>\n<td>");	
				}
				idx++;
			}
			arrayContents[i] = arrayContents[i].replace("|","\n</td>\n<td>\n");
			arrayContents[i] = "<tbody>" + arrayContents[i] + "</tbody>"
			if( !flag ){
				flag = true;
				arrayContents[i] = "<table class=\"table table-bordered\">\n" + arrayContents[i];
			}
			// 로우 끝
		}else if( flag ){
			arrayContents[i-1] = arrayContents[i-1] + "\n</table>";
			flag = false;
		}
		
	}
	return arrayContents.join("<br>");
}

function unorderList( contexts ){

	if( contexts == null ){
		var editText = $("#wikiEditor").val();	
	}else{
		var editText = contexts;	
	}

	var reg = /^[\*\-\+] (.*)/igm;
	var reg2 = /^\s{1,}[\*\-\+] (.*)/igm;
	editText = getOrderListReplaceAll(reg, reg2, "ul", editText);
	editText = getOrderListReplaceAll(reg2, reg, "ul", editText);
	
	return editText;
	
}

function getOrderListReplaceAll( reg, reg2, tag, editText ){
	var arrayContents = editText.split("<br>");
	var flag = false;
	for( var i = 0; i < arrayContents.length; i++ ){
		if( arrayContents[i].match( reg ) != null ){
			if( flag ){
				arrayContents[i] = "<li>" + arrayContents[i].replace(reg, "$1" ) + "</li>\n" ;
			}else{
				flag = true;
				arrayContents[i] = "\n<"+tag+">\n<li>" + arrayContents[i].replace(reg, "$1" ) + "</li>\n" ;
			}
			
		}else if( arrayContents[i].match( reg2 ) != null ){
			arrayContents[i] = arrayContents[i];
			
		}else if( flag ){
			arrayContents[i-1] = arrayContents[i-1] + "\n</"+tag+">\n";
			flag = false;
		}
	}
	return arrayContents.join("<br>");
}

function orderList( contexts ){
	if( contexts == null ){
		var editText = $("#wikiEditor").val();	
	}else{
		var editText = contexts;	
	}

	var reg = /^[\d]. (.*)/igm;
	var reg2 = /^\s{1,}[\d]. (.*)/igm;
	editText = getOrderListReplaceAll(reg, reg2, "ol", editText);
	editText = getOrderListReplaceAll(reg2, reg, "ol", editText);
	
	return editText;
}