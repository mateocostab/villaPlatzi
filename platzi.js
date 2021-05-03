var vp = document.getElementById("villaplatzi");
var paper = vp.getContext("2d");

var background = {
    url: "./img/tile.png",
    loadOK: false
 };  

var cow = {
    url: "./img/vaca.png",
    loadOK: false
};

var chicken = {
    url: "./img/pollo.png",
    loadOK: false
};

var pig = {
    url: "./img/cerdo.png",
    loadOK: false
};

var cowQuantity = randomNumber(1, 10);
var chickenQuantity = randomNumber(3, 20);
var pigQuantity = randomNumber(0, 15);

background.img = new Image();
background.img.src = background.url;
background.img.addEventListener("load", loadBg);

cow.img = new Image();
cow.img.src = cow.url;
cow.img.addEventListener("load", loadCow);

chicken.img = new Image();
chicken.img.src = chicken.url;    
chicken.img.addEventListener("load", loadChicken);
 
pig.img = new Image();
pig.img.src = pig.url;
pig.img.addEventListener("load", loadPig);

function loadBg()
{
    background.loadOK = true;
    draw();
}

function loadCow()
{
    cow.loadOK = true;
    draw();
}

function loadChicken()
{
    chicken.loadOK = true;
    draw();
}

function loadPig()
{
    pig.loadOK = true;
    draw();
}


function draw()
{
    if(background.loadOK)
    {
        paper.drawImage(background.img, 0, 0);
    }
    if(cow.loadOK)
    {
        console.log(cowQuantity);
        for(var c=0; c < cowQuantity; c++)
        {
            var x = randomNumber(0, 5);
            var y = randomNumber(0, 5);
            var x = x * 70;
            var y = y * 70;
            paper.drawImage(cow.img, x, y);
        }        
    }
    if(chicken.loadOK)
    {
        console.log(chickenQuantity);
        for(var ch=0; ch < chickenQuantity; ch++)
        {
            var x = randomNumber(0, 7);
            var y = randomNumber(0, 7);
            var x = x * 80;
            var y = y * 80;
            paper.drawImage(chicken.img, x, y);
        }      
    }
    if(pig.loadOK)
    {
        console.log(pigQuantity);
        for(var p=0; p < pigQuantity; p++)
        {
            var x = randomNumber(0, 4);
            var y = randomNumber(0, 4);
            var x = x * 90;
            var y = y * 90;
            paper.drawImage(pig.img, x, y);
        }
    }
}

function randomNumber(min, maxi)
{
    var result
    result = Math.floor(Math.random()*(maxi - min + 1)) + min;
    return result;   
}
