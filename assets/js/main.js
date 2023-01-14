let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addAdventListener("click", (e) => {
        e.preventDefault();
        if(name.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, msg) {
    emailjs.send("service_7cem6x4","template_87dzzq1", {
        from_name: name,
        to_name: "Mateus",
        mensagem: msg,
        });
}


let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle('header-active', window.scrollY > 0);
})