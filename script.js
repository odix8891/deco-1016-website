
// Change colour of licence button when selected
function change(x){  
    document.getElementById("container_"+x).style.border = "2px solid rgb(227, 24, 55)";
    document.getElementById("icon_"+x).style.color = "rgb(227, 24, 55)";
    document.getElementById("img_"+x).src = "img/fish-red.png"; 
    localStorage.setItem('type', x)
    for (i = 1; i <= 4; i++) {
        if (i !== x) {
            document.getElementById("container_"+i).style.border = "2px solid rgb(170 , 175, 180)";
            document.getElementById("icon_"+i).style.color = "rgb(170 , 175, 180)";
            document.getElementById("img_"+i).src = "img/fish-grey.png"; 
        } 
    }
}  

// Save form input in local storage
function save(){
    var startdate= document.getElementById("startdate");
    localStorage.setItem("startdate", startdate.value);

    var firstname= document.getElementById("firstname");
    localStorage.setItem("firstname", firstname.value);

    var lastname= document.getElementById("lastname");
    localStorage.setItem("lastname", lastname.value);

    var dob= document.getElementById("dob");
    localStorage.setItem("dob", dob.value);

    var email= document.getElementById("email");
    localStorage.setItem("email", email.value);

    var phone= document.getElementById("phone");
    localStorage.setItem("phone", phone.value);

    var address= document.getElementById("address");
    localStorage.setItem("postcode", address.value);

    var suburb= document.getElementById("suburb");
    localStorage.setItem("suburb", suburb.value);
}


