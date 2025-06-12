function showForm(formId){
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    //find every element with the class form-box and remove the active class to hide it
    document.getElementById(formId).classList.add("active");
    //take the element whose id matches formID and add the active class to make it visible
}