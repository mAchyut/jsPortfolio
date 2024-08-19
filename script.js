let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
for(tabLink of tabLinks){
    tabLink.classList.remove("active-link")
}
for(tabContent of tabContents){
    tabContent.classList.remove("active-tab")
}
event.target.classList.add("active-link")
document.getElementById(tabName).classList.add("active-tab")
}

// =====================================Small Screen=======================================
let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

//========================================Form Submission===================================


const scriptURL = 'https://script.google.com/macros/s/AKfycbzebvLZhVoFjcbp6xGUXosZXvpYaNqMv72QbPIL_ZSKnCH6EIMDhHqQkzEJFej6Kudk/exec'
  const form = document.forms['submit-to-google-sheet']
  let message = document.getElementById("message")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         message.innerHTML = "Thank you for your response!"

         setTimeout(()=>{
             message.innerHTML = ""
            },4000)

            form.reset();
        })
      .catch(error => console.error('Error!', error.message))
  });