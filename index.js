navigator.getBattery().then(function(battery){
    // console.log(battery)
    var level=(battery.level*100);
    var showBatteryLevel = document.getElementById("percentage")
    showBatteryLevel.innerHTML = level;
    var discharge = (battery.dischargingTime/3600).toFixed(2);
    var showBatteryLevel= document.getElementById("percentageRemain")
    showBatteryLevel.innerHTML = `${discharge} Hours`;
    var status;
    if(battery.charging === false){
        status = "Not Charging";
    }else{
        status = "Charging";
    }
    var showBatteryLevel= document.getElementById("output")
    showBatteryLevel.innerHTML = status;
    var batteryIcon = document.getElementById('batteryIcon')
    batteryIcon.style.width = `${level}%`;
})