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


navigator.getBattery().then(function(batteryManager){
    var level=(batteryManager.charging);
    var showBatteryLevel= document.getElementById("output")
    showBatteryLevel.innerHTML = level;
})
