var createFile = document.querySelector("#createfile");
var flag = 0;


createFile.addEventListener("click", function() {
   if (flag===0) {
    document.querySelector("#fileform").style.display = "initial";
    flag = 1;
   } 
   else{
    document.querySelector("#fileform").style.display = "none";
    flag = 0;
   }
});
