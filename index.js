navigator.getBattery().then(function(battery){
    var level=(battery.level*100);
    var showBatteryLevel = document.getElementById("percentage")
    showBatteryLevel.innerHTML = level;
})
navigator.getBattery().then(function(batteryManager){
    var level=(batteryManager.dischargingTime);
    var showBatteryLevel= document.getElementById("percentageRemain")
    showBatteryLevel.innerHTML = level;
})
// var num = n;
// var hours = (num / 60);
// var rhours = Math.floor(hours);
// var minutes = (hours - rhours) * 60;
// var rminutes = Math.round(minutes);
// return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
// }


navigator.getBattery().then(function(batteryManager){
    var level=(batteryManager.charging);
    var showBatteryLevel= document.getElementById("output")
    showBatteryLevel.innerHTML = level;
})
