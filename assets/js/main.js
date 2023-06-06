var bnumber = document.getElementById("item-counter").innerHTML
var fn = document.getElementById("fn1").value

var cv = document.getElementById("checkbox-v").checked
var sznev = document.getElementById("nevszamlazas").innerHTML
var szirsz = document.getElementById("irszszamlazas")
var sztko = document.getElementById("Tlpszamlazas")
var szalnev = document.getElementById("nevszallitas").innerHTML
var szalirsz = document.getElementById("irszszallitas")
var szaltlp = document.getElementById("Tlpszallitas")

function BasketAdd()
{
    for (let i = 0; i < fn; i++) 
    {
        bnumber = i
    }
}

if (cv) {
    szalnev = sznev
}