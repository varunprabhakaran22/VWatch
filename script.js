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


console.log(messageName);
console.log(messageDescription);
}

//for displaying the time

function getTime(){
  let date=new Date()
  let time = date.getHours();
  let minute=date.getMinutes();
  if(minute<10){
      minute='0'+minute;
  } 
  time=time +":"+minute;
  
  document.getElementsByClassName("timeLockScreen")[0].innerHTML=time;
  document.getElementsByClassName("col time")[0].innerHTML=time;
  }


//hinding the lock screen and displaying the messageinbox

$(".textNotification").click(function () {
$(".screen1").hide();
$(".screen2").show();
});

//expanding the message inbox
$(".envelope").click(function () {
$(".screen1").hide();
$(".screen2").show();
});


$(".music").click(function () {
$(".screen1").hide();
$(".screen3").show();
});


$(".backButtonJs").click(function () {
if($(this).closest('.screen2').hasClass("open")) {
  // alert('Yes');
  $(".msgBox").find(".msgCont").children(".textDescription").removeClass("removeEllipsis");
  $(".msgBox").find(".msgCont").show();
  $(".screen2").removeClass('open');
} else {
  // alert('No');
  $(".screen2").hide();
  $(".screen1").show();  
}
});

$('.msgCont').click(function () {
$(".screen2").addClass('open');
$(this).siblings().hide();
$(this).children(".textDescription").addClass('removeEllipsis');
});
    