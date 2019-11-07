let time;
let h2 = document.getElementsByTagName('h2')[0]
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let clear = document.getElementById('clear')
let seconds = 0, minutes = 0, hours = 0
let t



const message = [
        { name: "Barbie",description:" I'm a Barbie girl in barbie world"},
        { name: "john cena ",description:" You can't see me,bcz my name is john cena."},
        { name: "Arya Strak",description:" not today : these words are said by arya to night king"},

    ];

let i=0;
let messageName="";
let messageDescription="";
for (i = 0; i < message.length; i++) {

messageName= message[i].name;
messageDescription=message[i].description;
document.getElementsByClassName("textTitle")[i].innerHTML=messageName;
document.getElementsByClassName("textDescription")[i].innerHTML=messageDescription;
}

//hinding the lock screen and displaying the messageinbox

$(".textNotification").click(function () {
  $(".screen1").hide();
  $(".screen2").show();
  document.getElementsByClassName("time")[0].innerHTML=time;
});

//expanding the message inbox
$(".envelope").click(function () {
  $(".screen1").hide();
  $(".screen3").hide();
  $(".screen4").hide();
  $(".screen2").show();
});

$(".music").click(function () {
  $(".screen1").hide();
  $(".screen2").hide();
  $(".screen4").hide();
  $(".screen3").show();
});

$(".clock").click(function () {
  $(".screen1").hide();
  $(".screen2").hide();
  $(".screen3").hide();
  $(".screen4").show();
});




// backto previous step
$(".backButtonJs").click(function () {
if($(this).closest('.screen2').hasClass("open")) {
  // alert('Yes');
  $(".msgBox").find(".msgCont").children(".textDescription").removeClass("removeEllipsis");
  $(".msgBox").find(".msgCont").show();
  $(".screen2").removeClass('open');
} else {
  // alert('No');
  $(".screen2").hide();
  $(".screen3").hide();
  $(".screen4").hide();
  $(".screen1").show();  
}
});

$('.msgCont').click(function () {
  $(".screen2").addClass('open');
  $(this).siblings().hide();
  $(this).children(".textDescription").addClass('removeEllipsis');
});
    
//for displaying the time

function getTime(){
  let date=new Date()
  time = date.getHours();
  let minute=date.getMinutes();
  if(minute<10){
      minute='0'+minute;
  } 
  time=time +":"+minute;
  
  document.getElementsByClassName("timeLockScreen")[0].innerHTML=time;
  $(".time").text(time);
}



$("#start").click(function () {
  add()
});




function add() {
  seconds++;
  if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
          minutes = 0;
          hours++;
      }
  }
  h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
  clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
  h2.textContent = "00:00:00";
  seconds = 0; minutes = 0; hours = 0;
}