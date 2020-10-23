
let cancel = document.getElementById('cancel');
let giveOut = document.getElementById('giveOut');
cancel.onclick = function(){
    location.reload()
}
giveOut.onclick = function(){
    let input = document.getElementById('input').value;
    let coin5000 = 0;
    let coin1000 = 0;
    let coin500 = 0;
    let coin100 = 0;
    let coin50 = 0;
    if(input % 50 !== 0 || input <= 0)
    { alert("other amount")}
    else 
    { 
        while(input >= 5000)
        {input = input - 5000,
        coin5000 = coin5000 +1
        }
        while(input >= 1000)
        {input = input - 1000,
        coin1000 = coin1000 +1
        }
        while(input >= 500)
        {input = input - 500,
        coin500 = coin500 +1
        }
        while(input >= 100)
        {input = input - 100,
        coin100 = coin100 +1
        }
        while(input >= 50)
        {input = input - 50,
        coin50 = coin50 +1
        }
        document.getElementById('coins5000').innerHTML = coin5000;
        document.getElementById('coins1000').innerHTML = coin1000;
        document.getElementById('coins500').innerHTML = coin500;
        document.getElementById('coins100').innerHTML = coin100;
        document.getElementById('coins50').innerHTML = coin50;
        alert("calculation is ready")
        refresh = function(){
            alert("renewal")
            location.reload()
        }

        setTimeout(refresh, 4000)
    }    
}