

/* adein 화면 로딩 시 페이드 인 아웃
$("body").css("display", "none");

$("body").fadeIn(300);

$("a.transition").click(function(event){
	event.preventDefault();
	linkLocation = this.href;
	$("body").fadeOut(300, redirectPage);
});

function redirectPage() {
window.location = linkLocation;
}; */


/* 포트폴리오  div 슬라이드 펼쳐짐  */
$(document).ready(function(){
	$("#portfolio_slide").css("display" , "none");
	$("#portfolio_slide").slideDown(1500);
});