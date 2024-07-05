
//show password

const password = document.querySelector("#txtpassword");
const checkbox = document.querySelector("#show");
checkbox.addEventListener('click',function(){
const type =password.getAttribute("type")==="password" ? "text": "password";
password.setAttribute("type",type);
})

// login check

function auth(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("txtpassword").value;

    // if(email=='tamil123' && password=='123456')
     if(email == 'PaItHiYaM' && password == 'Thango@7723')
    {
        window.location.assign('home.html')
        alert("login successfully")
    }
    else{
        alert("invalid information")
    }
}


//video playing

document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });
    });
});
