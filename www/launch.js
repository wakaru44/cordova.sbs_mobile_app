document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap is ready
//
function onDeviceReady() {
    console.log(navigator);
    console.log(navigator.notification);
    // Normally Empty
}

// alert dialog dismissed
function alertDismissed() {
    // do something
}

// Show a custom alert
//
function spinup() {
    navigator.notification.alert(
        'hello!',           // message
        alertDismissed,     // callback
        'Game Over',        // title
        'Done'              // buttonName
    );
}


fire_url = "http://m.elo.com.es/v1/fire?s=secret";

call_fire = function (){
    console.log("Calling the fire at " + fire_url);
    $.ajax({
        url:fire_url,
        type:"GET",
        dataType:"json",
        success: onFireSuccess,
        error: onFireError
    });
    console.log("Showing off async");
};

onFireSuccess = function (data) {
    // the callback after call_fire
    // TODO: add a nice succes message
    console.log("Success")
};

onFireError = function (data, textStatus, errorThrown) {
    console.log("data: " + data);
    console.log("text status: " + textStatus);
    console.log("Error thrown: " + errorThrown);
};