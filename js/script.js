
function openMenu() {
    "use strict";
    document.getElementById("menu").lastElementChild.style.display = "flex";
}

function closeMenu() {
    "use strict";
    document.getElementById("menu").lastElementChild.style.display = "";
}

function menu() {
    "use strict";
    if (document.getElementById("menu").lastElementChild.style.display === "flex") {
        closeMenu();
    } else {
        openMenu();
    }
}

// MODAL
if(document.getElementById("abrirModal1")){
    'use strict';
    
    var modal1 = document.getElementById("modal1");
    var abrir1 = document.getElementById("abrirModal1");
    var span = document.getElementsByClassName("close1")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir1.onclick = function() {
        modal1.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal1.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal2")){
    'use strict';
    
    var modal2 = document.getElementById("modal2");
    var abrir2 = document.getElementById("abrirModal2");
    var span = document.getElementsByClassName("close2")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir2.onclick = function() {
        modal2.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal2.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal3")){
    'use strict';
    
    var modal3 = document.getElementById("modal3");
    var abrir3 = document.getElementById("abrirModal3");
    var span = document.getElementsByClassName("close3")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir3.onclick = function() {
        modal3.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal3.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal4")){
    'use strict';
    
    var modal4 = document.getElementById("modal4");
    var abrir4 = document.getElementById("abrirModal4");
    var span = document.getElementsByClassName("close4")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir4.onclick = function() {
        modal4.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal4.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal4) {
            modal4.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal5")){
    'use strict';
    
    var modal5 = document.getElementById("modal5");
    var abrir5 = document.getElementById("abrirModal5");
    var span = document.getElementsByClassName("close5")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir5.onclick = function() {
        modal5.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal5.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal5) {
            modal5.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal6")){
    'use strict';
    
    var modal6 = document.getElementById("modal6");
    var abrir6 = document.getElementById("abrirModal6");
    var span = document.getElementsByClassName("close6")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir6.onclick = function() {
        modal6.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal6.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal6) {
            modal6.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal7")){
    'use strict';
    
    var modal7 = document.getElementById("modal7");
    var abrir7 = document.getElementById("abrirModal7");
    var span = document.getElementsByClassName("close7")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir7.onclick = function() {
        modal7.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal7.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal7) {
            modal7.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal8")){
    'use strict';
    
    var modal8 = document.getElementById("modal8");
    var abrir8 = document.getElementById("abrirModal8");
    var span = document.getElementsByClassName("close8")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir8.onclick = function() {
        modal8.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal8.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal8) {
            modal8.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal9")){
    'use strict';
    
    var modal9 = document.getElementById("modal9");
    var abrir9 = document.getElementById("abrirModal9");
    var span = document.getElementsByClassName("close9")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir9.onclick = function() {
        modal9.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal9.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal9) {
            modal9.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal10")){
    'use strict';
    
    var modal10 = document.getElementById("modal10");
    var abrir10 = document.getElementById("abrirModal10");
    var span = document.getElementsByClassName("close10")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir10.onclick = function() {
        modal10.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal10.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal10) {
            modal10.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal11")){
    'use strict';
    
    var modal11 = document.getElementById("modal11");
    var abrir11 = document.getElementById("abrirModal11");
    var span = document.getElementsByClassName("close11")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir11.onclick = function() {
        modal11.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal11.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal11) {
            modal11.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal12")){
    'use strict';
    
    var modal12 = document.getElementById("modal12");
    var abrir12 = document.getElementById("abrirModal12");
    var span = document.getElementsByClassName("close12")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir12.onclick = function() {
        modal12.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal12.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal12) {
            modal12.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal13")){
    'use strict';
    
    var modal13 = document.getElementById("modal13");
    var abrir13 = document.getElementById("abrirModal13");
    var span = document.getElementsByClassName("close13")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir13.onclick = function() {
        modal13.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal13.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal13) {
            modal13.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal14")){
    'use strict';
    
    var modal14 = document.getElementById("modal14");
    var abrir14 = document.getElementById("abrirModal14");
    var span = document.getElementsByClassName("close14")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir14.onclick = function() {
        modal14.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal14.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal14) {
            modal14.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal15")){
    'use strict';
    
    var modal15 = document.getElementById("modal15");
    var abrir15 = document.getElementById("abrirModal15");
    var span = document.getElementsByClassName("close15")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir15.onclick = function() {
        modal15.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal15.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal15) {
            modal15.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal16")){
    'use strict';
    
    var modal16 = document.getElementById("modal16");
    var abrir16 = document.getElementById("abrirModal16");
    var span = document.getElementsByClassName("close16")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir16.onclick = function() {
        modal16.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal16.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal16) {
            modal16.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};

if(document.getElementById("abrirModal17")){
    'use strict';
    
    var modal17 = document.getElementById("modal17");
    var abrir17 = document.getElementById("abrirModal17");
    var span = document.getElementsByClassName("close17")[0];
    var body = document.getElementsByTagName("body")[0];

    abrir17.onclick = function() {
        modal17.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal17.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal17) {
            modal17.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
};