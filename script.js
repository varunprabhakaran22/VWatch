function StopWatch(){

  var startTime = null; 
  var stopTime = null; 
  var running = false; 
}

function getTime(){
  var day = new Date();
  return day.getTime();
}

this.start = function(){ 

  if (running == true)
      return;
  else if (startTime != null) 
      stopTime = null; 
  
  running = true;    
  startTime = getTime();
  
  }
  this.stop = function(){ 

      if (running == false)
          return;    
      
      stopTime = getTime();
      running = false; 
      
      }

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












  //   document.getElementsByClassName
  //   $(".screen1").click(function(){

  //     let hey=
  //     $(".textTitle").append(message.name);

  //   $(".textTitle").append("hey");
  //   console.log(hey);
  // });
      
//hinding the lock screen and displaying the messageinbox
$(".screen1").click(function () {
$(this).hide();
$(".screen2").show();
//   var op = `<div class="msgCont">
//   <div class="textTitle">
//       Barbie
//   </div> 
//   <div  class="textDescription">
//       I'm a Barbie girl in a Barbie world
//   </div>
// </div>
// <div class="msgCont">
//   <div class="textTitle">
//       John Cena
//   </div> 
//   <div  class="textDescription">
//       You ca0n't see me,bcz my name is john cena.
//   </div>
// </div>
// <div class="msgCont">
//   <div class="textTitle">
//       Arya Stark
//   </div> 
//   <div  class="textDescription">
//       Not today.
//   </div>
// </div>`;
//   $("#root").append(op);
// let op = '';
// op += `<div class="name">`+arr.name+'</div><div class="txt">'+arr.xt+`</div>`;
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
