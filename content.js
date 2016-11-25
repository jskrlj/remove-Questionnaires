var block_upcoming = document.getElementsByClassName("block_calendar_upcoming  block");
var listOfEvents = block_upcoming[0].childNodes[1].getElementsByClassName("event");

for(var i = 0; i < listOfEvents.length; i++){
    if(listOfEvents[i].childNodes[1].text.indexOf("Questionnaire") > -1){
        listOfEvents[i].style.display = "none";
    }
}

