function eliminaDiv() {
    var divDaEliminare = document.getElementById("myDiv");
    divDaEliminare.remove();
}

function eliminaDiv2() {
    var divDaEliminare = document.getElementById("myDiv2");
    divDaEliminare.remove();
}


function ricaricaPagina() {
    location.reload();
}



var immaginiIngrandite = {};

function cambiaDimensione(img) {
    var idImmagine = img.alt; 
    var isFullScreen = immaginiIngrandite[idImmagine];

    if (!isFullScreen) {
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.zIndex = "9999";
        img.style.transform = "none"; 
        immaginiIngrandite[idImmagine] = true;
    } else {
        img.style.position = "static";
        img.style.width = "auto";
        img.style.height = "auto";
        img.style.zIndex = "auto";
        immaginiIngrandite[idImmagine] = false;
    }
}


