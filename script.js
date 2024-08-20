alert("Website is on update some features not working")
 function changeBG() {
        const body = document.body;
        const checkbox = document.querySelector('.switch input');
        const headings = document.querySelectorAll('h1');
        const headings2 = document.querySelectorAll('h2');

        if (checkbox.checked) {
            body.style.backgroundColor = "black";
            headings.forEach(h1 => h1.style.color = "white");
            headings2.forEach(h1 => h1.style.color = "white");
        } else {
            body.style.backgroundColor = "white";
            headings.forEach(h1 => h1.style.color = "black");
            headings2.forEach(h1 => h1.style.color = "black");
        }
    }


function clickHam() {
    var element = document.getElementById("hambar1");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}