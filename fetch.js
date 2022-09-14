const display=document.querySelector('#display')
const button=document.querySelector('#button')

button.addEventListener('click', function(){
    getDogs();
})


  async function getDogs(){
   let response=await fetch('https://random.dog/woof.json')
  .then((response) => response.json())
  .then((data) => {console.log(data);
    
        
display.innerHTML=`<img src=${data.url} alt="dog" />`
            
            
            
        
    }).catch(error => {
        console.log("oops");
    });
    }