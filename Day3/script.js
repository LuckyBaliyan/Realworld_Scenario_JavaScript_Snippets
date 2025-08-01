document.addEventListener("DOMContentLoaded",()=>{
    const input = document.querySelector("input");

    input.addEventListener('input',(e)=>{
        const userInput = e.target.value.trim().toLowerCase();
        console.log(userInput);

        const items = document.querySelectorAll(".list-item");
        items.forEach((item)=>{
            const listText = item.textContent.toLowerCase();
            const index = listText.indexOf(userInput); //if the userInput found so return index of first accurance else -1
            
            if(index !== -1 && userInput !== " "){
                const highlightedText = item.textContent.substring(
                    index,
                    index + userInput.length
                ); // will give the continues string from the index of first match to the input length

                item.innerHTML = item.textContent.replace(
                    highlightedText,`<span class="highlight">${highlightedText}</span>`
                );
            }
            else{
                item.innerHTML = item.textContent;
            }
        })
    })
})

//Programm flow
/*
1. steup the input eventListner
2. take value from input as userinput
3. iterate through all items
4. take text of each li in listText
5. take the index of first accurance of userInput from li text
6. if index!= - 1 and userinput not empty
   taka a  highlighted text from li substring from index of first accurance to userInput length
   and replace the highlighted text content to new highlighting content having the highlight class.
7. else change the innerHTML of li to its initial textcontent as we done nothing here..
*/