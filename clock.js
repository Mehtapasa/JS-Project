let userName = prompt("Lütfen Kullanıcı Adınızı Giriniz:")
let isim = document.querySelector("#myName")
isim.innerHTML = `${isim.innerHTML}${userName}`


let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function showTime(){
    let now = new Date();
    let hours = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = days[now.getDay()];
    
    let time = document.querySelector("#myClock")
    time.innerHTML = `${hours}:${minute}:${second} ${day}`
}

setInterval(showTime, 1000);

//showTime()