var mobile = false;

window.addEventListener("resize", function() {
	if(mobile && window.innerWidth > 805) {
		mobile = false;
		$(".icon-menu").removeClass("_active");
		$(".header_mobile_nav").hide();
	}
});

function choose(el) {
	if($(".icon-menu").hasClass("_active")) {
		$(".icon-menu").removeClass("_active");
		$(".header_mobile_nav").hide();
		mobile = false;
		return;
	}
	$(".icon-menu").addClass("_active");
	$(".header_mobile_nav").show();
	mobile = true;
}