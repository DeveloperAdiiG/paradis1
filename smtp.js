function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "adityagurav54@gmail.com",
        Password : "04BD95B5065355D3B03934DFB51A9EF28A43",
        To : 'adii.dg.2021@gmail.com',
        From : "adityagurav54@gmail.com",
        Subject : "New Enquiry from : "+document.getElementById("mail").value,
        Body : "Name : "+document.getElementById("name").value
                +"<br> Email : "+document.getElementById("mail").value
                +"<br> Phone No."+document.getElementById("phone").value
                +"<br> Message : "+document.getElementById("message").value
    }).then(
      message => alert("Thank You for Contacting Us, We will get back to you soon")
    );
}
