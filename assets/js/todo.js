// //check off specific Todos By Clicking
// //아래와 같은 설정이지만 아래처럼 배열로 object사용하는게 편하다
// $("li").click(function() {
//   //change color
//   $(this).css("color", "gray");
//   // font : line through
//   $(this).css("text-decoration", "line-through");
//   //use object
// });


//function 콜백으로 배열을 사용
$("li").click(function() {
  //그냥 === gray와 비교하면 "color"값이 "rgb(128, 128, 128)" 이므로
  //if절이 성립되지 않는다 console에서 jQuery로 선택해서 해당값을 찾고 비교하자
  if($(this).css("color") === "rgb(128, 128, 128)") {
    $(this).css({
      color: "black",
      textDecoration: "none"
  });
  } else {
    //gray 아닐때만 그레이로 변경!
    $(this).css({
      //object로 사용할때는 camelCase쓰는걸 주의하자!
      color: "gray",
      textDecoration: "line-through"
    });
  }
});
