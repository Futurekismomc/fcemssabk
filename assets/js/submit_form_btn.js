submit_btn = document.getElementById("alert")
email_form = document.getElementsByName("email")
message_form = document.getElementsByName("message")
name_form = document.getElementsByName("name")
submit_btn.addEventListener('click', submit)

function submit() {
    alert("Form has been submitted")
    email_form.placeholder = "message"
}

