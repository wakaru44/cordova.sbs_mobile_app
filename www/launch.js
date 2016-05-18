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
