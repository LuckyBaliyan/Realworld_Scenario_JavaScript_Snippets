document.addEventListener("DOMContentLoaded",()=>{
    const inputFields = document.querySelectorAll("form input");

    //Scalable
    document.querySelector("form").addEventListener('submit',(e)=>{
        e.preventDefault();

        function isValidInputs(){
            /*inputFields.forEach((input)=>{  here we are basically using the true false in forEach callback where the value 
            hese are always undefined which is a falsy value so we are getting invalid input.
            if(input.value === " "){
                return false;
            }
            return true;
            
          })*/
          return Array.from(inputFields).every((inp)=>inp.value.trim() !== '')
          //Array.form to convert nodeList to array
          //why use every not forEach or map (map not ment for the comparison and forEach returns undefined)

          //Every returns true if all the conditions are ture and stop (false) on first false condition term in array 
          // helpfull in performance optimisations
        }

        isValidInputs()?alert("Login Sucessful"):alert("Invalid Input");  
    })

    //Alternatelty(Simple)

   /* document.querySelector("form").addEventListener('submit',(e)=>{
        e.preventDefault();

        if(document.querySelector("#name").value && document.querySelector("#pass").value) alert("Login Sucessfully")
        else alert("Invali input values");
    })*/
})