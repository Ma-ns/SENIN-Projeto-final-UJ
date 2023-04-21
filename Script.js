/*SITE DE APRESENTAÇÃO*/
/*INICIO*/
document.addEventListener('DOMContentLoaded', function () {
  window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);
});

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

/*Teste drag and drop*/
function handleDragStart(e) {
    this.style.opacity = '0.4';
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
  }

  let items = document.querySelectorAll('#Create_ContentRight .Drag_Question');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });

  function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    return false;
  }

  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });

  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDrop(e) {
    e.stopPropagation();
  
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }