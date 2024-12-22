// Get reference to the form and display area 
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

//Handle form submition
form.addEventListener("submit",(event:Event)=>{  
  event.preventDefault(); //prevent page related
  

  //collect input value;
  const name= (document.getElementById("name") as HTMLInputElement ).value 
  const email= (document.getElementById("email") as HTMLInputElement ).value 
  const phone= (document.getElementById("phone") as HTMLInputElement ).value 
  const education= (document.getElementById("education") as HTMLInputElement ).value 
  const exprience= (document.getElementById("exprience") as HTMLInputElement ).value 
  const skills= (document.getElementById("skills") as HTMLInputElement ).value 
    // Generated the resume conduct dynamically
     const resumeHTML = 
       `<h2><b>Editable Resume</b></h2>
       <h3>Personel Information</h3>
       <p><b>Name</b><span contenteditable="true">${name}</span></p>
        <p><b>email</b><span contenteditable="true">${email}</span></p>
         <p><b>phone</b><span contenteditable="true">${phone}</span></p>
         
         <h3>Education</h3>
         <p contenteditable="true">${education}</p>
         
         <h3>Exprience</h3>
         <p contenteditable="true">${exprience}</p>
         
         <h3>Skills</h3>
         <p contenteditable="true">${skills}</p>`;
    //display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('the resume display  element is missing.');
        
    }
}) 
