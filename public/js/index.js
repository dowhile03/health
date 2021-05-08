function formValidate() {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const bodyTemp = document.getElementById("bodyTemp").value;
    const oxyLevel = document.getElementById("oxyLevel").value;
    const button = document.getElementById("submit");
        const b = parseInt(bodyTemp)
        const c = parseInt(oxyLevel)
    // if(firstName == null || firstName == "", lastName == null || lastName == "", email == null || email == "", bodyTemp == null || bodyTemp == "", oxyLevel == null || oxyLevel == "") {
    //     alert("Please fill all the required fields")
    //     return false;
    // }

    // if(isNaN(b) || isNaN(c)) {
    //     alert("Body Temperature and Oxygen Level must be number")
    //     return false;
    // }
    if(b > 108 || b < 90) {
        alert("Please enter a valid body temperature")
        return false;
    }
    if(c < 50 || c > 110) {
        alert("Please enter a valid oxygen level")
        return false;
    }
}