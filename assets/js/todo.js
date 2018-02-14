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
$("li").click(function() {
  $(this).toggleClass("compltedTodo");
});
