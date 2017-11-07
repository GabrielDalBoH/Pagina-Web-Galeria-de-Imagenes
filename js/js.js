
$(".imagen").click(function(e){
    
	var enlaceImagen = e.target.src;
    console.log(enlaceImagen);
	var data = $(this).attr("data");
	var lightbox = '<div class="ligthbox">'+
						'<img src="'+data+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
						'<div class="btn-close">X</div>'+
					'</div>';
	$("body").append(lightbox)
	$("#zoom_mw").elevateZoom({
		scrollZoom : true,
		cursor: "crosshair",
		zoomWindowOffetx: 15
	});
	$(".btn-close").click(function(){
		$(".ligthbox").remove();
        $(".zoomContainer").remove();
        $(".zoomLens").remove();
        $(".zoomWindowContainer").remove();
	})
    $("#./Static/Larga/images.jpg").elevateZoom();
    $("#./Static/Larga/index.jpg").elevateZoom();
    $("#./Static/Larga/index2.jpg").elevateZoom();
    $("./Static/Larga/index4.jpg").elevateZoom();
});