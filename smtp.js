function sendEmail(){
    Email.send({
        SecureToken : "2d0f5046-16dd-4d3e-8b36-2fdf650bd0a4" ,
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
