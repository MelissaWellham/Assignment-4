//jQuery 

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$("a").click(function(event){
    event.preventDefault();
});


// About
$("#show").click(showabout);

function showabout() {
	$(".hide").slideDown("slow");
	$(".hide").removeClass("hide");
	$("#show").hide();

}

// Blog 1

$(".moreblog").hide();
$("#moreblog").click(showblog);

function showblog() {
	var isCollapsed = $(".moreblog").hide().slideDown("slow");

	if (isCollapsed == true) {
		$("#moreblog").show();
		$("#lessblog").hide();
	}

		else {
		$(".moreblog").show();
		$("#moreblog").hide();
		$("#lessblog").show();
	}
}

$("#lessblog").click(hideblog);

function hideblog() {
	var isnotCollapsed = $(".moreblog").show();

	if (isnotCollapsed == true) {
		$("#moreblog").hide();
		$("#lessblog").show();
	}

	else {
		$("#moreblog").show();
		$("#lessblog").hide();
		$(".moreblog").hide();
	}
}


// Blog 2

$(".moreblog2").hide();
$("#moreblog2").click(showblog2);

function showblog2() {
	var isCollapsed = $(".moreblog2").hide().slideDown("slow");

	if (isCollapsed == true) {
		$("#moreblog2").show();
		$("#lessblog2").hide();
	}

		else {
		$(".moreblog2").show();
		$("#moreblog2").hide();
		$("#lessblog2").show();
	}
}

$("#lessblog2").click(hideblog2);

function hideblog2() {
	var isnotCollapsed = $(".moreblog2").show().slideUp("slow");

	if (isnotCollapsed == true) {
		$("#moreblog2").hide();
		$("#lessblog2").show();
	}

	else {
		$("#moreblog2").show();
		$("#lessblog2").hide();
		$(".moreblog2").hide();
	}
}
