var bnumber = document.getElementById("item-counter")
var fn = document.getElementById("fn")

function BasketAdd()
{
    for (let i = 0; i < fn.value; i++)
    {
        bnumber.innerHTML += i+1
    }
}