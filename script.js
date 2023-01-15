function validateForm(){
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let carText = document.getElementById("car-text");
    if(name.value.length < 3 || name.value.length > 30){
        let error = document.getElementById("errorName");
        error.classList.remove("correct");
        error.classList.add("error");
    } else if(phone.value.length < 10 || phone.value.length > 15){
        let error = document.getElementById("errorPhone");
        error.classList.remove("correct");
        error.classList.add("error");
    } else if(carText.value.length < 3 || carText.value.length > 30){
        let error = document.getElementById("errorCar");
        error.classList.remove("correct");
        error.classList.add("error");
    }
}

document.getElementById("main-btn").addEventListener("click", function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});

let btns = document.getElementsByClassName("car-btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    });
}



document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
})
});