const flashlight=document.querySelector('#flashlight')
if(flashlight!==null){
   document.addEventListener('mousemove',({clientX,clientY})=>{
      flashlight.style.setProperty("--x",`${clientX}px`)
      flashlight.style.setProperty("--y",`${clientY}px`)
   })
}
