setInterval(updateTime, 1000);
let alarmList=[];
function setAlarm() {
    const alarmTime = document.getElementById("alarmTime").value;
    const status = document.getElementById("status");
      if (!alarmTime)
         {
        status.textContent = "Please select a valid time";
        return;
        }
    const now = new Date();
    const alarmDate = new Date(now.toDateString() + ' ' + alarmTime);
     if (alarmDate <= now) {
         status.textContent = "Please set a future time.";
         return;
     }
    alarmList.push(alarmTime);
    const timeToAlarm = alarmDate.getTime() - now.getTime();
    setTimeout(() => {
       alert("Alarm is Ringing");
    }, timeToAlarm);
    showAlarmList();
}
function showAlarmList()
{
    const infoCard = document.getElementById('info-card');
    const currentData = document.getElementById("alarmdata");
    currentData.remove();
    let alarmdata=document.createElement('div');
        alarmdata.id="alarmdata";
    for(i in alarmList) {
        let newCardContent=document.createElement('div');
        newCardContent.classList.add("card-content");
        newCardContent.textContent=alarmList[i];
        newCardContent.id="alarm"+i;
        let newCardButton=document.createElement('button');
        newCardButton.classList.add("deleteButton");
        newCardButton.textContent="Delete";
        newCardButton.id="del"+i;
        newCardButton.setAttribute("onclick","deleteMusic(i)");
        alarmdata.appendChild(newCardContent);
        alarmdata.appendChild(newCardButton);
} 
        infoCard.appendChild(alarmdata);
}



function deleteMusic(id) {
    const buttonToDelete = document.getElementById("del"+id);
    const alarmToDelete = document.getElementById("alarm"+id);
    buttonToDelete.remove(); 
    alarmToDelete.remove();
    alarmList.pop(id);
}



// Update the current time every second
function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let newformat = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    currentTimeElement.innerText = `${hours}:${minutes}:${seconds} ${newformat}`;
}



