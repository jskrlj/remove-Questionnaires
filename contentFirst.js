var block_upcoming = document.getElementsByClassName("block_calendar_upcoming  block");
console.log(block_upcoming);


console.log(block_upcoming[0].childNodes[1]);

var listOfEvents = block_upcoming[0].childNodes[1].getElementsByClassName("event");

for(var i = 0; i < listOfEvents.length; i++){
    //console.log(block_upcoming[0].childNodes[1].childNodes[i]);

    //console.log(listOfEvents[i]);
    //console.log(listOfEvents[i].childNodes[1].text)



    if(listOfEvents[i].childNodes[1].text.indexOf("Questionnaire") > -1){
        listOfEvents[i].style.display = "none";
    }
}

//console.log(block_upcoming[0].childNodes[1].childNodes[0].childNodes[1].text)
//Anketa o predmetu Procesna avtomatika (Questionnaire Opens)


//console.log(block_upcoming[0].childNodes[1].childNodes[0].childNodes[1].text.indexOf("Questionnaire"))
//39



