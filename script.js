const throttleFunction=(func, delay)=>{
 
    let prev = 0; 
    return (...args) => {
  
      let now = new Date().getTime(); 
      if(now - prev> delay){ 
        prev = now;
  
        return func(...args);  
      }
    }
  }
  document.querySelector("#center").addEventListener("mousemove", throttleFunction((det)=>{
    
      var div = document.createElement("div")
      div.classList.add('imgdiv');
      document.body.appendChild(div);
      div.style.top = det.clientY+"px";
      div.style.left = det.clientX+"px";


      
      var image = document.createElement("img")
      image.setAttribute("src","https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D");
      div.appendChild(image);

        gsap.to(image,{
            y : "0",
            ease : Power1,
            duration : 0.2
        })
        gsap.to(image,{
            y : "100%",
            delay :0.6,
            ease : Power1,

        })

      setTimeout(function(){
        div.remove();
      },2000)
  }, 400)
  );