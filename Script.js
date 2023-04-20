/*SITE DE APRESENTAÇÃO*/
/*INICIO*/

/*FAQ*/
var collapse = document.getElementsByClassName("Collapsible");
var i;

for(i=0; i<collapse.length;i++){
    collapse[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display ==="block" && content.style.maxHeight){
            content.style.display = "none";
            content.style.maxHeight = null;
        } else{
            content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}