let img = document.querySelector(".card-image") as HTMLImageElement;

function updateImageSource(): void {
    if (window.innerWidth <= 768) {
        img.src = "images/image-product-mobile.jpg";
    } else {
        img.src = "images/image-product-desktop.jpg";
    }
}

updateImageSource();

window.addEventListener("resize", updateImageSource);
