//*******************************************************************************************
// CodeFlow Übung lev1_1: conditional-statements punkten
function adult() {
    let age = document.getElementById("age").value;
    document.getElementById("result").innerHTML = age >= 18 ? "volljaehrig" : "minderjaehrig";
}

//*******************************************************************************************
// CodeFlow Übung lev1_3: conditional statements mit form
function greaterThan() {

    let result = document.getElementById("result2");
    result.addEventListener("click", function (event) {
        event.preventDefault()
    });

    let age = document.getElementById("input").value;

    // if (age >= 18) {
    //     result.innerHTML = "Ja. Du darfst Shisha rauchen"
    // } else {
    //     result.innerHTML = "Du darfst noch nicht Shisha rauchen";
    // }

    // using a default
    // result.innerHTML = "Du darfst noch nicht Shisha rauchen";
    // if (age >= 18) {
    //     result.innerHTML = "Ja. Du darfst Shisha rauchen"
    // }

    // using a renary operator
    result.innerHTML = (age >= 18 ? "Ja. Du darfst Shisha rauchen" : "Du darfst noch nicht Shisha rauchen");
}

