$(document).ready(function(){
	$(".login_ipt input").keyup(function(){
		placeholder_hack(this);
	});
});
function placeholder_hack(input){
		if($(input).val() != ''){
			$(input).parent().children().last().css("display","none");
		}else{
			$(input).parent().children().last().css("display","block");
		}
}