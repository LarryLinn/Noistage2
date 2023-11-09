    // Get references to the modal and buttons
    var modal = document.getElementById("myModal");
    var openBtn = document.getElementById("openModalBtn");
    var closeBtn = document.getElementById("closeModalBtn");
    var closeBtn2 = document.getElementById('closeModalBtn2')
    var accountmain= document.getElementById("accountmain");
    var registerbtn = document.getElementById("registerpage");
    var accountsite = document.getElementById("accountsite");
    var loginsite= document.getElementById('loginsite');
    var loginbtn = document.getElementById('loginpage');
    // Open the modal when the "Open Modal" button is clicked
    openBtn.onclick = function() {
        accountmain.classList.add('active');
    }

    // Close the modal when the "Close" button is clicked
    closeBtn.onclick = function() {
        accountmain.classList.remove('active')
    }

    closeBtn2.onclick = function() {
        accountmain.classList.remove('active')
    }

    registerbtn.onclick = function() {
        accountsite.classList.add('active')
        loginsite.classList.add('active')
    }


    loginbtn.onclick = function() {
        accountsite.classList.remove('active')
        loginsite.classList.remove('active') 
    }
    