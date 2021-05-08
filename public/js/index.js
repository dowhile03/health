function formValidate() {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const bodyTemp = document.getElementById("bodyTemp").value;
    const oxyLevel = document.getElementById("oxyLevel").value;
    const age = document.getElementById("age").value;
    const button = document.getElementById("submit");
        const b = parseInt(bodyTemp)
        const c = parseInt(oxyLevel)
        const d = parseInt(age)
  
    if(b > 108 || b < 90) {
        alert("Please enter a valid body temperature")
        return false;
    }
    if(c < 50 || c > 110) {
        alert("Please enter a valid oxygen level")
        return false;
    }
    if(d < 3 || d > 110) {
        alert("Please enter a valid age")
        return false;
    }
}