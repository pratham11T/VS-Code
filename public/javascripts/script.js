var openstatefileform = 0;
var openstatefolderform = 0;

function formOff() {
   document.querySelectorAll(".form")
   .forEach(function(form) {
      form.style.display = "none";
   });
}

document.querySelector("#createfile").addEventListener("click", function() {
   formOff();
   if (openstatefileform===0) {
    document.querySelector(".fileform").style.display = "initial";
    openstatefileform = 1;
   } 
   else{
    document.querySelector(".fileform").style.display = "none";
    openstatefileform = 0;
   }
});

document.querySelector("#createfolder").addEventListener("click", function() {
   formOff();
   if (openstatefolderform===0) {
    document.querySelector(".folderform").style.display = "initial";
    openstatefolderform = 1;
   } 
   else{
    document.querySelector(".folderform").style.display = "none";
    openstatefolderform = 0;
   }
});