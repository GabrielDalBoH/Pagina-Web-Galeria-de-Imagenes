
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
$(document).ready(function(){ /* Cualquier funcionalidad que queramos agregar a la página por medio de jQuery, debe ser incluida cuando el documento está listo para recibir acciones que modifiquen el DOM de la página. */
      $('.azul').click(function(event){ /* Seleccionamos el elemento que queremos que realice la función */ 
         $('body').css('background', '#08c');/* La función a realizar añadir CSS al body previamente seleccionado */
      }); 
      $('.blanco').click(function(event){/* Seleccionamos el elemento que queremos que realice la función */ 
         $('body').css('background', '#fff');/* La función a realizar añadir CSS al body previamente seleccionado */
      }); 
    $('.rojo').click(function(event){/* Seleccionamos el elemento que queremos que realice la función */ 
         $('body').css('background', '#AE4545');/* La función a realizar añadir CSS al body previamente seleccionado */
      });
    $('.verde').click(function(event){/* Seleccionamos el elemento que queremos que realice la función */ 
         $('body').css('background', '#20be07');/* La función a realizar añadir CSS al body previamente seleccionado */
      });
     $('.negro').click(function(event){/* Seleccionamos el elemento que queremos que realice la función */ 
         $('body').css('background', '#0b0c0b');/* La función a realizar añadir CSS al body previamente seleccionado */
      });
     $('.amarillo').click(function(event){/* Seleccionamos el elemento que queremos que realice la función */ 
         $('body').css('background', '#e0ff00');/* La función a realizar añadir CSS al body previamente seleccionado */
      });
}); 