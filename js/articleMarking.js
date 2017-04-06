$(document).ready(function(){

	var row = 1;
	var htmlStr = "<tr><th><p contenteditable='true'></p></th><td><p contenteditable='true'></p></td></tr>"
	$("#plusSign").click(function(){
		addTr("tab",row, htmlStr);
		row++;
	})

	$("#minusSign").click(function(){
		delTr("tab",row);
		row--;
	})
})


function addTr(tab, row, trHtml){
	var $tr = $("#" + tab + " tr").eq(row);
	if($tr == null){
		alert("指定的table id或行数不存在！");
		return;
		}
	$tr.after(trHtml);
}

function delTr(tab, row){
	var $tr = $("#" + tab + " tr").eq(row);
	if($tr == null){
		alert("指定的table id或行数不存在！");
		return;
		}
	$tr.remove();
}