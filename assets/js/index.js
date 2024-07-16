function submitForm(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var message = document.getElementById("message").value;
    console.log(firstname);
    link = "https://mail.google.com/mail/?view=cm&fs=1&to="+"mohitjain.hmu@gmail.com"+"&su=Lets Get Connected&body="+message+"%0D%0A%0D%0ABest%2C%0D%0A"+firstname+" "+lastname;
    document.getElementById("link").href =link
}