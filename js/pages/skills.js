import { configSkill } from "../modules/config.js";
import { configGlobalSkill } from "../modules/config.js";


document.addEventListener('DOMContentLoaded', function(){


let elements    =   document.querySelectorAll('.btnImg');    
 
for(let i=0; i<elements.length; i++){
    
    elements[i].addEventListener('click', function(){   
            
        configGlobalSkill('visible', 'none');
                
        if (i === 0){
            configSkill("HTML", "Intermediário", "rgb(7, 156, 61)", "75%", "none", "saturate(0)", "saturate(0)");
        }
        else if (i === 1){
            configSkill("CSS", "Regular", "rgb(218, 207, 7)", "50%", "saturate(0)", "none", "saturate(0)");
        }
        else{
        configSkill("JavaScript", "Básico", "rgb(204, 50, 50)", "25%", "saturate(0)", "saturate(0)", "none");
        }
    })
}
})
