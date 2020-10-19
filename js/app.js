// (()=>console.log("Hello JS!"))();

const form = document.querySelector("#form-validate");

//Rgx
const [emailPattern,passwordPattern] = [/((^[a-z]{5,})[a-zA-Z0-9]+\@[a-z]{5}\.[a-z]{2,5})/,/.[a-zA-Z0-9]{7,}/];
let [namevar,emailvar,passwordvar]=[false];

//Email Validation
form.email.addEventListener('keyup',e=>{
    if(!emailPattern.test(e.target.value)){
        form.email.classList.add("is-invalid");
        form.email.classList.remove("is-valid");
        emailvar=false;
        getable();
    }else{
        form.email.classList.remove("is-invalid");
        form.email.classList.add("is-valid");
        emailvar=true;
        getable();
    }
});

//Password Validation
form.password.addEventListener('keyup',e=>{
    if(!passwordPattern.test(e.target.value)){
        form.password.classList.add("is-invalid");
        form.password.classList.remove("is-valid");
        passwordvar=false;
        getable();
    }else{
        form.password.classList.add("is-valid");
        form.password.classList.remove("is-invalid");
        passwordvar=true;
        getable();
    }
});
let getable = ()=>{
    if(emailvar && passwordvar)form.btns.removeAttribute("disabled","");
    else form.btns.setAttribute("disabled","");
}