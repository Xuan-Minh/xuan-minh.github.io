window.addEventListener("load", () => {
    clock();

    function clock() {
        const today = new Date();

        // get time components
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        //add '0' to hour, minute & second when they are less 10
        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;

        //make clock a 12-hour time clock
        const hourTime = hour > 12 ? hour - 12 : hour;

        // if (hour === 0) {
        //   hour = 12;
        // }
        //assigning 'am' or 'pm' to indicate time of the day
        const ampm = hour < 12 ? "AM" : "PM";

        // get date components
        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();

        //declaring a list of all months in  a year
        const monthList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        //get current date and time
        const date = monthList[month] + " " + day + ", " + year;
        const time = hourTime + ":" + minute + ":" + second + ampm;

        //combine current date and time
        const dateTime = date + " - " + time;

        //print current date and time to the DOM
        document.getElementById("date-time").innerHTML = dateTime;
        setTimeout(clock, 1000);
    }
});


var timeoutInMiliseconds = 20000;
var timeoutId;

function startTimer() {
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}

function doInactive() {
    // does whatever you need it to actually do - probably signs them out or stops polling the server for info
    $(".stopmoving").css('display', "block")
    $(".location").text('> --------')
    $(".br").css("display", "block")
    $(".rp_crea").css("display", "none")
    $(".accphoto").css("opacity", "1")
    $(".acccrea").css("opacity", "1")
    $(".acccine").css("opacity", "1")
    $(".rp_crea").css("display", "none")
    $(".rp_photo").css("display", "none")
    $(".rp_video").css("display", "none")
    $(".rp_who").css("display", "none")
    $(".who").css("opacity", "1")
    $(".who2").text("Xuan Minh")
    $(".who2").css("color", "white")
    $(".who2").css("font-family", "Basteleur Moonlight")
    $(".Photo_1").css("display", "none")
    $(".Photo_2").css("display", "none")
    $(".Photo_3").css("display", "none")
    $(".Photo_4").css("display", "none")

}

function setupTimers() {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);

    startTimer();
}

function resetTimer() {
    window.clearTimeout(timeoutId)
    startTimer();
}


$(document).ready(function() {
    setupTimers();


    $(document).on("click", ".location", function() {
        $(".stopmoving").css('display', "block")
        $(".location").text('> --------')
        $(".br").css("display", "block")
        $(".rp_crea").css("display", "none")
        $(".accphoto").css("opacity", "1")
        $(".acccrea").css("opacity", "1")
        $(".acccine").css("opacity", "1")
        $(".rp_crea").css("display", "none")
        $(".rp_photo").css("display", "none")
        $(".rp_video").css("display", "none")
        $(".rp_who").css("display", "none")
        $(".who").css("opacity", "1")
        $(".who2").text("Xuan Minh")
        $(".who2").css("color", "white")
        $(".who2").css("font-family", "Basteleur Moonlight")
        $(".Photo_1").css("display", "none")
        $(".Photo_2").css("display", "none")
        $(".Photo_3").css("display", "none")
        $(".Photo_4").css("display", "none")
        $(".Video_1").css("display", "none")
        $(".Video_2").css("display", "none")
        $(".Video_3").css("display", "none")
        $(".Video_4").css("display", "none")
        $(".Video_5").css("display", "none")
        $(".Crea_1").css("display", "none")
        $(".Crea_2").css("display", "none")
        $(".Crea_3").css("display", "none")
        $(".rp_subtitle").css("opacity", "1")




    })
    $(document).on("click", ".who", function() {
        $(".stopmoving").css('display', "none")
        $(".location").text('moi / > homepage')
        $(".br").css("display", "none")
        $(".rp_crea").css("display", "none")
        $(".rp_photo").css("display", "none")
        $(".rp_video").css("display", "none")
        $(".rp_who").css("display", "block")
        $(".who").css("opacity", "0.5")
        $(".accphoto").css("opacity", "1")
        $(".acccrea").css("opacity", "1")
        $(".acccine").css("opacity", "1")
        $(".who2").text("Xuan Minh")

        $(".who2").css("color", "black")
        $(".who2").css("font-family", "Yellow")
        $(".Photo_1").css("display", "none")
        $(".Photo_2").css("display", "none")
        $(".Photo_3").css("display", "none")
        $(".Photo_4").css("display", "none")
        $(".Video_1").css("display", "none")
        $(".Video_2").css("display", "none")
        $(".Video_3").css("display", "none")
        $(".Video_4").css("display", "none")
        $(".Video_5").css("display", "none")
        $(".Crea_1").css("display", "none")
        $(".Crea_2").css("display", "none")
        $(".Crea_3").css("display", "none")
        $(".rp_subtitle").css("opacity", "1")




    })
    $(document).on("click", ".activities_cat", function() {
        $(".stopmoving").css('display', "none")
        $(".br").css("display", "none")
        $(".rp_crea").css("display", "none")
        $(".Photo_1").css("display", "none")
        $(".Photo_2").css("display", "none")
        $(".Photo_3").css("display", "none")
        $(".Photo_4").css("display", "none")
        $(".Video_1").css("display", "none")
        $(".Video_2").css("display", "none")
        $(".Video_3").css("display", "none")
        $(".Video_4").css("display", "none")
        $(".Video_5").css("display", "none")
        $(".Crea_1").css("display", "none")
        $(".Crea_2").css("display", "none")
        $(".Crea_3").css("display", "none")
        $(".rp_subtitle").css("opacity", "1")



    })

    $(document).on("click", ".acccrea", function() {
        $(".location").text('Créa / > homepage')
        $(".rp_crea").css("display", "flex")
        $(".rp_video").css("display", "none")
        $(".rp_photo").css("display", "none")
        $(".rp_who").css("display", "none")
        $(".acccrea").css("opacity", "0.5")
        $(".acccine").css("opacity", "1")
        $(".accphoto").css("opacity", "1")
        $(".who").css("opacity", "1")
        $(".who2").text("Créatif🎨")
        $(".who2").css("color", "black")
        $(".who2").css("font-family", "Yellow")

    })
    $(document).on("click", ".acccine", function() {
        $(".location").text('Vidéos / > homepage')
        $(".rp_crea").css("display", "none")
        $(".rp_video").css("display", "flex")
        $(".rp_who").css("display", "none")
        $(".rp_photo").css("display", "none")
        $(".acccine").css("opacity", "0.5")
        $(".acccrea").css("opacity", "1")
        $(".accphoto").css("opacity", "1")
        $(".who").css("opacity", "1")
        $(".who2").text("Vidéaste 🎥")
        $(".who2").css("color", "black")
        $(".who2").css("font-family", "Yellow")
    })
    $(document).on("click", ".accphoto", function() {
        $(".location").text('Souvenirs /  > homepage')
        $(".rp_photo").css("display", "flex")
        $(".rp_video").css("display", "none")
        $(".rp_crea").css("display", "none")
        $(".rp_who").css("display", "none")
        $(".accphoto").css("opacity", "0.5")
        $(".acccrea").css("opacity", "1")
        $(".acccine").css("opacity", "1")
        $(".who").css("opacity", "1")
        $(".who2").text("Archiveur de souvenirs📸")
        $(".who2").css("color", "black")
        $(".who2").css("font-family", "Yellow")

    })
    $(document).on("click", ".crea_trigger1", function() {
        $(".Crea_1").css("display", "none")
        $(".Crea_2").css("display", "none")
        $(".Crea_3").css("display", "none")
        $(".crea_trigger1").css("opacity", "0.5")
        $(".crea_trigger2").css("opacity", "1")
        $(".crea_trigger3").css("opacity", "1")
        alert("WORK IN PROGRESS");

    })
    $(document).on("click", ".crea_trigger2", function() {
        $(".Crea_1").css("display", "none")
        $(".Crea_2").css("display", "flex")
        $(".Crea_3").css("display", "none")
        $(".crea_trigger1").css("opacity", "1")
        $(".crea_trigger2").css("opacity", "0.5")
        $(".crea_trigger3").css("opacity", "1")


    })
    $(document).on("click", ".crea_trigger3", function() {
        $(".Crea_1").css("display", "none")
        $(".Crea_2").css("display", "none")
        $(".Crea_3").css("display", "flex")
        $(".crea_trigger1").css("opacity", "1")
        $(".crea_trigger2").css("opacity", "1")
        $(".crea_trigger3").css("opacity", "0.5")


    })
    $(document).on("click", ".photo_trigger1", function() {
        $(".Photo_1").css("display", "block")
        $(".Photo_2").css("display", "none")
        $(".Photo_3").css("display", "none")
        $(".Photo_4").css("display", "none")
        $(".photo_trigger1").css("opacity", "0.5")
        $(".photo_trigger2").css("opacity", "1")
        $(".photo_trigger3").css("opacity", "1")
        $(".photo_trigger4").css("opacity", "1")



    })
    $(document).on("click", ".photo_trigger2", function() {
        $(".Photo_1").css("display", "none")
        $(".Photo_2").css("display", "block")
        $(".Photo_3").css("display", "none")
        $(".Photo_4").css("display", "none")
        $(".photo_trigger1").css("opacity", "1")
        $(".photo_trigger2").css("opacity", "0.5")
        $(".photo_trigger3").css("opacity", "1")
        $(".photo_trigger4").css("opacity", "1")



    })
    $(document).on("click", ".photo_trigger3", function() {
        $(".Photo_1").css("display", "none")
        $(".Photo_2").css("display", "none")
        $(".Photo_3").css("display", "block")
        $(".Photo_4").css("display", "none")
        $(".photo_trigger1").css("opacity", "1")
        $(".photo_trigger2").css("opacity", "1")
        $(".photo_trigger3").css("opacity", "0.5")
        $(".photo_trigger4").css("opacity", "1")

    })
    $(document).on("click", ".photo_trigger4", function() {
        $(".Photo_1").css("display", "none")
        $(".Photo_2").css("display", "none")
        $(".Photo_3").css("display", "none")
        $(".Photo_4").css("display", "block")
        $(".photo_trigger1").css("opacity", "1")
        $(".photo_trigger2").css("opacity", "1")
        $(".photo_trigger3").css("opacity", "1")
        $(".photo_trigger4").css("opacity", "0.5")

    })

    $(document).on("click", ".video_trigger1", function() {
        $(".Video_1").css("display", "block")
        $(".Video_2").css("display", "none")
        $(".Video_3").css("display", "none")
        $(".Video_4").css("display", "none")
        $(".Video_5").css("display", "none")
        $(".video_trigger1").css("opacity", "0.5")
        $(".video_trigger2").css("opacity", "1")
        $(".video_trigger3").css("opacity", "1")
        $(".video_trigger4").css("opacity", "1")
        $(".video_trigger5").css("opacity", "1")
    })
    $(document).on("click", ".video_trigger2", function() {
        $(".Video_1").css("display", "none")
        $(".Video_2").css("display", "block")
        $(".Video_3").css("display", "none")
        $(".Video_4").css("display", "none")
        $(".Video_5").css("display", "none")
        $(".video_trigger1").css("opacity", "1")
        $(".video_trigger2").css("opacity", "0.5")
        $(".video_trigger3").css("opacity", "1")
        $(".video_trigger4").css("opacity", "1")
        $(".video_trigger5").css("opacity", "1")
    })
    $(document).on("click", ".video_trigger3", function() {
        $(".Video_1").css("display", "none")
        $(".Video_2").css("display", "none")
        $(".Video_3").css("display", "block")
        $(".Video_4").css("display", "none")
        $(".Video_5").css("display", "none")
        $(".video_trigger1").css("opacity", "1")
        $(".video_trigger2").css("opacity", "1")
        $(".video_trigger3").css("opacity", "0.5")
        $(".video_trigger4").css("opacity", "1")
        $(".video_trigger5").css("opacity", "1")
    })
    $(document).on("click", ".video_trigger4", function() {
        $(".Video_1").css("display", "none")
        $(".Video_2").css("display", "none")
        $(".Video_3").css("display", "none")
        $(".Video_4").css("display", "block")
        $(".Video_5").css("display", "none")
        $(".video_trigger1").css("opacity", "1")
        $(".video_trigger2").css("opacity", "1")
        $(".video_trigger3").css("opacity", "1")
        $(".video_trigger4").css("opacity", "0.5")
        $(".video_trigger5").css("opacity", "1")
    })
    $(document).on("click", ".video_trigger5", function() {
        $(".Video_1").css("display", "none")
        $(".Video_2").css("display", "none")
        $(".Video_3").css("display", "none")
        $(".Video_4").css("display", "none")
        $(".Video_5").css("display", "block")
        $(".video_trigger1").css("opacity", "1")
        $(".video_trigger2").css("opacity", "1")
        $(".video_trigger3").css("opacity", "1")
        $(".video_trigger4").css("opacity", "1")
        $(".video_trigger5").css("opacity", "0.5")
    })
    $(document).on("click", ".mail_clip", function() {
        var copyText = "naux.pro@gmail.com";
        navigator.clipboard.writeText("naux.pro@gmail.com");
        alert("que tu as copié mon adresse eMail ! Ctrl + V");
    })
})



function mouseIn() {
    $(".who2").css('background-color', 'black');
    $(".who1").css('color', 'white');
};

function mouseOut() {
    $(".who2").css('background-color', 'white');
    $(".who1").css('color', 'black');
};

$(document).on("mouseenter", ".who", mouseIn);
$(document).on("mouseleave", ".who", mouseOut);

function hover_acOn() {
    $('.accphoto').text("Archiveur de souvenirs📸");
}

function hover_acOff() {
    $('.accphoto').text("Archiveur de souvenirs📷");
}

$(document).on("mouseenter", ".accphoto", hover_acOn);
$(document).on("mouseleave", ".accphoto", hover_acOff);

function hover_acOn2() {
    $('.acccine').text("Videaste🎞️");
}

function hover_acOff2() {
    $('.acccine').text("Videaste🎥");
}

$(document).on("mouseenter", ".acccine", hover_acOn2);
$(document).on("mouseleave", ".acccine", hover_acOff2);


function hover_acOn3() {
    $('.acccrea').text("Créatif🎨");
}

function hover_acOff3() {
    $('.acccrea').text("Créatif🖌️");
}

$(document).on("mouseenter", ".acccrea", hover_acOn3);
$(document).on("mouseleave", ".acccrea", hover_acOff3);