setTimeout(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            location.replace("index.html");
        }
        else {
            console.log(user)
            document.getElementById("user").innerHTML = "Welcome:" + user.email
        }
    })
}, 2000);


let popped = 0;

document.addEventListener('mouseover', function (e) {

    if (e.target.className === "blue") {

        e.target.style.backgroundColor = "black";
        e.target.textContent = "!";
        popped++;
        checkAllPopped();

    }
    if (e.target.className === "balloon") {

    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};

function checkAllPopped() {
    if (popped === 6) {
        let gallery = document.querySelector('#balloons');
        let message = document.getElementById('wellplayed');
        gallery.innerHTML = 'Move To Next Level'
        window.location.href = "./game3.html";
        message.style.display = 'block';
    }
};