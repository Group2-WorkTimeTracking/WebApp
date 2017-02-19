

$('#login_form').submit(function (e) {

    // Get the Login Name value and trim it
    var name = $.trim($('#name').val());
    var pass = $.trim($('#password').val());

    // Check if empty of not
    if (name === ''  &  pass === '') {
        alert('Please, introduse yourself with an ID and password!');
        return false;
    } else if (name === ''){
        alert('ID number is required!');
    } else if (pass === '') {
        alert('Password is required!');
    } else {
        window.location.replace("PersonalAccountPage.html");
        e.preventDefault();
    }
});
    
$('#reg_form').submit(function (e) {    
    if( $('#name').val() == '' || $('#mail').val() == '' || $('#password').val() == '' ) {
        alert("Some fields are empty! Please, fill in important info!");
        e.preventDefault();    
    }
    else {
        alert("Web form was successfully sent!");
        window.location.href = 'index.html';
        e.preventDefault();   
    }         
});


    


