var bnumber = document.getElementById("item-counter")
var vg = document.getElementById("vegosszeg")
var fntd1 = document.getElementById("fntd1")
var fn1 = document.getElementById("fn1")
var fn2 = document.getElementById("fn2")
var fn3 = document.getElementById("fn3")
var fn4 = document.getElementById("fn4")
var fn5 = document.getElementById("fn5")
var fn6 = document.getElementById("fn6")

function BasketAdd()
{
    var osszeg = 0
    var vegosszeg = 0
    for (let i = 0; i < fn1.value; i++)
    {
        osszeg++
        bnumber.innerHTML = osszeg
        fntd1.innerHTML += '<button onclick="Delete()">asd</button>'
    }
    for (let i = 0; i < fn2.value; i++)
    {
        osszeg++
        bnumber.innerHTML = osszeg
    }
    for (let i = 0; i < fn3.value; i++)
    {
        osszeg++
        bnumber.innerHTML = osszeg
    }
    for (let i = 0; i < fn4.value; i++)
    {
        osszeg++
        bnumber.innerHTML = osszeg
    }
    for (let i = 0; i < fn5.value; i++)
    {
        osszeg++
        bnumber.innerHTML = osszeg
    }
    for (let i = 0; i < fn6.value; i++)
    {
        osszeg++
        bnumber.innerHTML = osszeg
    }
    vegosszeg = osszeg*1500
    vg.innerHTML = vegosszeg
}