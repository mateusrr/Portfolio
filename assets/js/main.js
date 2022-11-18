let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move");
}
/*
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addAdventListener("click", (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_t0kfmjs","template_d4i1n3r",{
        from_name: msg,
        to_name: name,
        mensagem: msg,
        });
}

function emptyerror() {
    swal({
        title: "Oh no!",
        text: "Field cannot be empty!",
        icon: "error",
      });
}

function success() {
    swal({
        title: "E-mail enviado com sucesso!",
        text: "Aguarde o retorno.",
        icon: "success",
      });
}*/

const btn = document.getElementById('btn');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_d4i1n3r';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});





let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle('header-active', window.scrollY > 0);
})

var button = document.getElementById('button');

button.addEventListener('click', function() {
    var card = document.querySelector('card');
    card.classList.toggle('active');

    if(card.classList.contains('active')) {
        return button.textContent = 'ver menos';
    }

    button.textContent = 'ver mais';

});