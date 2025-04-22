const secondText = document.getElementById("small-txt-1");
const thirdText = document.getElementById("small-txt-2");
const popUp = document.getElementById("pop-up");
const popUp2 = document.getElementById("pop-up-2");

document.getElementById("card-btn-1").onclick = function(){
    popUp.classList.remove("close");

    document.getElementById("pop-up-text").innerHTML = "Are you sure you want to the choose 1 month option";
    document.getElementById("1").innerHTML = "I love you (text)";
    document.getElementById("2").innerHTML = "1 Hug";
    document.getElementById("3").style.display = "block";
    document.getElementById("3").innerHTML = "";
}

document.getElementById("card-btn-2").onclick = function(){
    document.getElementById("pop-up-text").innerHTML = "Are you sure you want to the choose 2 months option";
    document.getElementById("1").innerHTML = "I love you (text)";
    document.getElementById("2").innerHTML = "2 Hugs";
    document.getElementById("3").innerHTML = "Call everyday";
    document.getElementById("3").style.display = "";
    
    popUp.classList.remove("close");
}

document.getElementById("card-btn-3").onclick = function(){
    document.getElementById("pop-up-text").innerHTML = "Are you sure you want to the choose 1 year option";
    document.getElementById("1").innerHTML = "I love you (text)";
    document.getElementById("2").innerHTML = "4 Hugs";
    document.getElementById("3").innerHTML = "Call everyday";
    document.getElementById("3").style.display = "";
    
    popUp.classList.remove("close");
}

let n_1 = 0;

let n_2 = 0;

document.getElementById("indicator-1").onclick=function(){
    n_1 += 1;
    changeSecondText(n_1);

}

document.getElementById("indicator-2").onclick=function(){
    n_1 -= 1;
    changeSecondText(n_1);
}

document.getElementById("indicator-4").onclick=function(){
    n_2 -= 1;
    changeThirdText(n_2);
}

document.getElementById("indicator-3").onclick=function(){
    n_2 += 1;
    changeThirdText(n_2);
}

document.getElementById("menu-1").onclick=function(){
    window.scroll(0, 0);
}

document.getElementById("menu-2").onclick=function(){
    window.scroll(0, 1000);
}

document.getElementById("menu-3").onclick=function(){
    window.scroll(0, 2055);
}

document.getElementById("close").onclick=function(){
    popUp.classList.add("close");

}

document.getElementById("close-3").onclick=function(){
    popUp2.classList.add("close");
}

document.getElementById("None").onclick=function(){
    popUp2.classList.remove("close");
}

function changeSecondText(n){

    if (n%2 == 0){
        secondText.classList.add("hidden");
    }

    else if (n===1){
        secondText.innerHTML = "Congratulations, you turned 16 !!";
        secondText.classList.remove("hidden");
    }
    

    else if (n ===3){
        secondText.innerHTML = "God damn you getting old";
        secondText.classList.remove("hidden");
    }

    else if (n === 5){
        secondText.innerHTML = "Jokes aside good job surviving another year of teenage mate";
        secondText.classList.remove("hidden");
    }

    if (n === 6){
        secondText.classList.remove("hidden");
        window.scroll(0, 1000);
    }
}

function changeThirdText(n){
    if (n%2 == 0){
        thirdText.classList.add("hidden");
    }

    else if (n === 1){
        thirdText.innerHTML = "I didn't really know what to do so, yea....";
        thirdText.classList.remove("hidden");
    }

    else if (n === 3){
        thirdText.innerHTML = "And I am sorry it is kinda scuffed.";
        thirdText.classList.remove("hidden");
    }

    else if (n === 5){
        thirdText.innerHTML = "My lazy ass procrasinated till the last moment.";
        thirdText.classList.remove("hidden");
    }

    else if (n === 7){
        thirdText.innerHTML = "The first gift I want to give you for your birthday is ....";
        thirdText.classList.remove("hidden");
    }

    else if (n === 9){
        thirdText.innerHTML = "Renewing our relationship subcription cause tomorrow";
        thirdText.classList.remove("hidden");
    }

    else if (n === 11){
        thirdText.innerHTML = "It will be 1 year of us being together.";
        thirdText.classList.remove("hidden");
    }

    else if (n === 13){
        thirdText.innerHTML = "You can choose any of the subcription given in the next page if you want.";
        thirdText.classList.remove("hidden");
    }

    else if (n === 15){
        thirdText.innerHTML = "I will ask you to renew the subcription when it ends (: (if you want me to)";
        thirdText.classList.remove("hidden");
    }

    if (n === 16){
        thirdText.classList.remove("hidden");
        window.scroll(0,2055);
    }
}