var box=document.getElementById('box')
var str=""
for(var i=1;i<11;i++){
  str+=`<img src="image/${i}.jpg">`
}
box.innerHTML=str