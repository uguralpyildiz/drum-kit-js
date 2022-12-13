
const keymap = document.querySelector('.keymap');
const keymapBtn = document.querySelector('.keymap-btn-c');

document.addEventListener("click", (e)=>{

const isClick =  keymapBtn.contains(e.target)
const zrt =  keymap.contains(e.target)
if (!isClick) {
    keymap.classList.remove("scae")
}else{
    keymap.classList.add("scae")
}
if (zrt) {
    keymap.classList.add("scae")
}
})


        

function keyPresson(e) {
        const box = document.querySelector(`div[data-key="${e.keyCode}"]`);
        const boxes = document.querySelectorAll(".box");
    

        
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].classList.remove("active");
            }
            
            if (!box) {         
                return;
            }

        box.classList.add("active")
      }

      window.addEventListener("keyup", (e)=>{
        const hihat = document.querySelector(".hihat-top-cymbal");
        const crash = document.querySelector(".crash-cymbal");
        let unicode = e.keyCode;
       
        if (unicode == "74") {
         
            crash.style.transform = "rotate(0deg)";
        }
        if (unicode == "75" || unicode == "76") {
         
         hihat.style.top = "85px";
     }
    
      })

      window.addEventListener("keydown", (e)=>{
        const hihat = document.querySelector(".hihat-top-cymbal");
        const crash = document.querySelector(".crash-cymbal");
        let unicode = e.keyCode;
        
        if (unicode == "74") {
            crash.style.transform = "rotate(7deg)";
        }

        if (unicode == "75" || unicode == "76") {
         
         hihat.style.top = "95px";
     }
        
      })

      
      

            //---------------------------------
      window.addEventListener("keydown",(e)=>{

      
        
        const box = document.querySelector(`div[data-key="${e.keyCode}"]`);
        const boxes = document.querySelectorAll(".box");
        if (!box) {         
                return;
            }
        box.classList.remove("active")
       
     } )

      //---------------------------------
      window.addEventListener("keyup", (e)=>{
       
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) {         
            return;
        }
        audio.currentTime = 0;
        audio.play();
       
        keyPresson(e)
        
      })



      

     

     
     

    

      
 
      
       
