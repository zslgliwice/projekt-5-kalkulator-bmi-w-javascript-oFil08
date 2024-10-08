var jednostki = document.getElementById("jednostki");


jednostki.addEventListener("change", function(){
    var jednostki = document.getElementById("jednostki");
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");

    if(jednostki.value == "metric"){
        span1.innerHTML = " kg";
        span2.innerHTML = " cm";
    }
    else{
        span1.innerHTML = " lbs";
        span2.innerHTML = " inch";
    }
});

function obliczBMI(){
    var jednostki = document.getElementById("jednostki");
    var waga = parseFloat(document.getElementById("waga").value);
    var wzrost = parseFloat(document.getElementById("wzrost").value);
    var wynik = document.getElementById("wynik");
    var w = 0;
    var string;


    if(isNaN(waga) || isNaN(wzrost)){
        wynik.style.display = "flex";
        wynik.innerHTML = "<h2>Wpisz wartości!<h2>";
        return;
    }


    if(jednostki.value == "metric"){
        w = waga / (Math.pow(wzrost/100, 2));
    }
    else{
        w = (waga/2.205) / (Math.pow(wzrost/39.37, 2));
    }

    w = w.toFixed(1);

    if(w < 18.5){
        string = `<span id = "bmi">BMI ${w}</span> <br> <span id="inter">Niedowaga</span><br><span id="wiadomosc">Powinieneś/Powinnaś trochę przytyć.</span>`;
    }
    else if(w < 25){
        string = `<span id = "bmi">BMI ${w}</span> <br> <span id="inter">Waga prawidłowa</span><br><span id="wiadomosc">Dobra robota!</span>`;
    }
    else if(w < 30){
        string = `<span id = "bmi">BMI ${w}</span> <br> <span id="inter">Nadwaga</span><br><span id="wiadomosc">Powinieneś/Powinnaś trochę schudnąć.</span>`;
    }
    else{
        string = `<span id = "bmi">BMI ${w}</span> <br> <span id="inter">Otyłość</span><br><span id="wiadomosc">Musisz schudnąć!</span>`;
    }

    wynik.style.display = "flex";
    wynik.innerHTML = string;
}

