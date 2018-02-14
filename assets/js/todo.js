// $("li").click(function() {
// //그냥 === gray와 비교하면 "color"값이 "rgb(128, 128, 128)" 이므로
// //if절이 성립되지 않는다 console에서 jQuery로 선택해서 해당값을 찾고 비교하자
// if($(this).css("color") === "rgb(128, 128, 128)") {
//   $(this).css({
//     color: "black",
//     textDecoration: "none"
// });
// //gray 아닐때만 그레이로 변경!
// } else {
//   $(this).css({
//     //object로 사용할때는 camelCase쓰는걸 주의하자!
//     color: "gray",
//     textDecoration: "line-through"
//     });
//   }
// }


//간단하게 css와 toggleClass 조합으로 style을 적용할 수 있다.
//.click() 대신 .on()을 사용한다. .on()은 이후에 추가될 element에
//대해서도 listener를 적용할 수 있기때문이다.
$("ul").on("click", "li", function() {
  $(this).toggleClass("compltedTodo");
});


//Click on X to delete Todo
//span 대신 부모요소인 ul을 지정하고 span을 변경한다.
$("ul").on("click", "span", function(event) {
  // .parent will choose the parent of the child element if use '.parent().parent()'
  // it delete second parent also.
  $(this).parent().fadeOut(500, function() {
    //현재의 this는 클릭한 span이 아닌 this(이시점에서 span).parent()인 li가 된다.
    $(this).remove();
  });
  //when child clicked it calls its parent elements. so need to call off it.
  //Todo that, use .stopPropagation()
  event.stopPropagation();
});

// take user input and add it to li as a Todo
$("input[type='text']").keypress(function(event) {
  //use .which to find out which key has pressed
  if(event.which === 13) {
    //grabbing user input and assign to var
    var todoText = $(this).val();
    //delete user input after pressing enter key
    $(this).val("");
    //create a new li and add it to the ul by .append() - string of HTML
    $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");
  }
})
