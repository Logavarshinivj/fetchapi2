var url2="https://api.catboys.com/img"
fetch(url2)
.then(res=>res.json())
.then((response)=>{
    console.log(response)
    var child=document.createElement('div')
   child.innerHTML+=`
   <img class="img" src=${response.url}>
   `
   document.body.appendChild(child)
})