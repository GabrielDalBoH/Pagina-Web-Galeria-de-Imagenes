var config = {
    apiKey: "AIzaSyAGl8eyb5Kytk9hh6qmuqmo6zbLexWijjk",
    authDomain: "mi-pagina-proyecto.firebaseapp.com",
    databaseURL: "https://mi-pagina-proyecto.firebaseio.com",
    projectId: "mi-pagina-proyecto",
    storageBucket: "mi-pagina-proyecto.appspot.com",
    messagingSenderId: "202218442409"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

function login(){
    console.log("estoy aprendiendo")
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("estoy aprendiendo")
        var token = result.credential.accessToken;
        var user = result.user;


        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
        }



    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

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
    {
        $("#./Static/Larga/images.jpg").elevateZoom();
        $("#./Static/Larga/index.jpg").elevateZoom();
        $("#./Static/Larga/index2.jpg").elevateZoom();
        $("./Static/Larga/index4.jpg").elevateZoom();
    }

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

function createHome(){

    var database = firebase.database().ref('/');

    database.on("value", snapshot => {
        snapshot.forEach(snap => {
            let Home = document.getElementById("Home");
            let div, img, div_2, header, h4;
            div = document.createElement("div");
            div.classList = "item";
            img = document.createElement("img");
            img.src = snap.val().url;
            img.classList = "imagen";
            img.setAttribute("data", snap.val().data);
            div_2 = document.createElement("div");
            div_2.classList = "card-body";
            header = document.createElement("header");
            h4 = document.createElement("h4");
            h4.classList = "card-title";
            h4.innerHTML = snap.val().nombre

            if(snap.val().nombre.toLowerCase().includes("goku") && snap.val().nombre.toLowerCase().includes("gif")  == false){

                div.append(img);
                header.append(h4);
                div_2.append(header);
                div.append(div_2);
                Home.append(div);
            } else if (snap.val().nombre.toLowerCase().includes("dragon ball super")){
                div.append(img);
                header.append(h4);
                div_2.append(header);
                div.append(div_2);
                Home.append(div);
            }



        })

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
            {
                $("#./Static/Larga/images.jpg").elevateZoom();
                $("#./Static/Larga/index.jpg").elevateZoom();
                $("#./Static/Larga/index2.jpg").elevateZoom();
                $("./Static/Larga/index4.jpg").elevateZoom();
            }

        });
    })


}
function createHomeWallpapers(){

    var database = firebase.database().ref('/');

    database.on("value", snapshot => {
        snapshot.forEach(snap => {
            let Home = document.getElementById("Home");
            let div, img, div_2, header, h4;
            div = document.createElement("div");
            div.classList = "item";
            img = document.createElement("img");
            img.src = snap.val().url;
            img.classList = "imagen";
            img.setAttribute("data", snap.val().data);
            div_2 = document.createElement("div");
            div_2.classList = "card-body";
            header = document.createElement("header");
            h4 = document.createElement("h4");
            h4.classList = "card-title";
            h4.innerHTML = snap.val().nombre

            if(snap.val().nombre.toLowerCase().includes("fondo") && snap.val().nombre.toLowerCase().includes("gif")  == false){

                div.append(img);
                header.append(h4);
                div_2.append(header);
                div.append(div_2);
                Home.append(div);
            }



        })

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
            {
                $("#./Static/Larga/images.jpg").elevateZoom();
                $("#./Static/Larga/index.jpg").elevateZoom();
                $("#./Static/Larga/index2.jpg").elevateZoom();
                $("./Static/Larga/index4.jpg").elevateZoom();
            }

        });
    })


}

function createHomeComidas(){

    var database = firebase.database().ref('/');

    database.on("value", snapshot => {
        snapshot.forEach(snap => {
            let Home = document.getElementById("Home");
            let div, img, div_2, header, h4;
            div = document.createElement("div");
            div.classList = "item";
            img = document.createElement("img");
            img.src = snap.val().url;
            img.classList = "imagen";
            img.setAttribute("data", snap.val().data);
            div_2 = document.createElement("div");
            div_2.classList = "card-body";
            header = document.createElement("header");
            h4 = document.createElement("h4");
            h4.classList = "card-title";
            h4.innerHTML = snap.val().nombre

            if(snap.val().nombre.toLowerCase().includes("comida") && snap.val().nombre.toLowerCase().includes("gif")  == false){

                div.append(img);
                header.append(h4);
                div_2.append(header);
                div.append(div_2);
                Home.append(div);
            }



        })

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
            {
                $("#./Static/Larga/images.jpg").elevateZoom();
                $("#./Static/Larga/index.jpg").elevateZoom();
                $("#./Static/Larga/index2.jpg").elevateZoom();
                $("./Static/Larga/index4.jpg").elevateZoom();
            }

        });
    })


}

function createHomeAutos(){

    var database = firebase.database().ref('/');

    database.on("value", snapshot => {
        snapshot.forEach(snap => {
            let Home = document.getElementById("Home");
            let div, img, div_2, header, h4;
            div = document.createElement("div");
            div.classList = "item";
            img = document.createElement("img");
            img.src = snap.val().url;
            img.classList = "imagen";
            img.setAttribute("data", snap.val().data);
            div_2 = document.createElement("div");
            div_2.classList = "card-body";
            header = document.createElement("header");
            h4 = document.createElement("h4");
            h4.classList = "card-title";
            h4.innerHTML = snap.val().nombre

            if(snap.val().nombre.toLowerCase().includes("auto") && snap.val().nombre.toLowerCase().includes("gif")  == false){

                div.append(img);
                header.append(h4);
                div_2.append(header);
                div.append(div_2);
                Home.append(div);
            }



        })

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
            {
                $("#./Static/Larga/images.jpg").elevateZoom();
                $("#./Static/Larga/index.jpg").elevateZoom();
                $("#./Static/Larga/index2.jpg").elevateZoom();
                $("./Static/Larga/index4.jpg").elevateZoom();
            }

        });
    })


}

function createHomeGifs(){

    var database = firebase.database().ref('/');

    database.on("value", snapshot => {
        snapshot.forEach(snap => {
            let Home = document.getElementById("Home");
            let div, img, div_2, header, h4;
            div = document.createElement("div");
            div.classList = "item";
            img = document.createElement("img");
            img.src = snap.val().url;
            img.classList = "imagen";
            img.setAttribute("data", snap.val().data);
            div_2 = document.createElement("div");
            div_2.classList = "card-body";
            header = document.createElement("header");
            h4 = document.createElement("h4");
            h4.classList = "card-title";
            h4.innerHTML = snap.val().nombre

            if(snap.val().nombre.toLowerCase().includes("gif")){

                div.append(img);
                header.append(h4);
                div_2.append(header);
                div.append(div_2);
                Home.append(div);
            }



        })

        /$(".imagen").click(function(e){

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
            {
                $("#./Static/Larga/images.jpg").elevateZoom();
                $("#./Static/Larga/index.jpg").elevateZoom();
                $("#./Static/Larga/index2.jpg").elevateZoom();
                $("./Static/Larga/index4.jpg").elevateZoom();
            }

        });
    })


}






function buscar(){
    var buscar = document.getElementById("search").value;

    var database = firebase.database().ref('/');

    $("#cuerpito").load("./Buscador.html", function(res,stat){
        if(stat != "error"){

            database.on("value", snapshot => {
                snapshot.forEach(snap => {
                    var imgName = snap.val().nombre;

                    if (imgName.toLowerCase().includes(buscar.toLowerCase())){

                        let imgBuscadas = document.getElementById("imgBuscadas")

                        let div, img, div_2, header, h4;

                        div = document.createElement("div");
                        div.classList = "item";
                        img = document.createElement("img");
                        img.src = snap.val().url;
                        img.classList = "imagen";
                        img.setAttribute("data", snap.val().data);
                        div_2 = document.createElement("div");
                        div_2.classList = "card-body";
                        header = document.createElement("header");
                        h4 = document.createElement("h4");
                        h4.classList = "card-title";
                        h4.innerHTML = snap.val().nombre
                        div.append(img);
                        header.append(h4);
                        div_2.append(header);
                        div.append(div_2);
                        imgBuscadas.append(div);


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
                            {
                                $("#./Static/Larga/images.jpg").elevateZoom();
                                $("#./Static/Larga/index.jpg").elevateZoom();
                                $("#./Static/Larga/index2.jpg").elevateZoom();
                                $("./Static/Larga/index4.jpg").elevateZoom();
                            }


                        });


                    }
                })
            })

        }
    })
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

}
