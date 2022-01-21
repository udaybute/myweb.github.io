function addnewwefield() {  
    console.log("adding new field we");

   let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter name");
    
   

    let weOb=document.getElementById("we");
    let weaddbtnOb=document.getElementById("weaddbutton");

     weOb.insertBefore(newNode, weaddbtnOb); 
};

function addnewAQfield() {
    console.log("adding new field")
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","enter name");
    
   let aqOb = document.getElementById("aq");
   let aqADDButtonOb =  document.getElementById("aqADDButton");

    aqOb.insertBefore(newNode,aqADDButtonOb);
    // parentNode.insertBefore(newNode, existingNode);

};


//GENERATING CV 

function generateCV(){
    console.log("generating cv ");

    let namefield = document.getElementById("namefield").value;
    let namet = document.getElementById("namet");
    namet.innerHTML=namefield;



    document.getElementById("namet1").innerHTML=namefield;

    // contact

    // document.getElementById("contactT").innerHTML=contactfeild;

    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;

    // address


    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

    document.getElementById("linkedlnt").innerHTML = document.getElementById("Linkedinfield").value;

    document.getElementById("githubt").innerHTML = document.getElementById("Githubfield").value;

    document.getElementById("fbt").innerHTML = document.getElementById("Facebookfield").value;
    



    // OBJECTIVE //error 


     document.getElementById("objectivet").innerHTML= document.getElementById("objectivefield").value;


    //  work_experiance 

     let wes = document.getElementsByClassName("wefield");

     let str=" ";

     for( let e of wes) {
         str = str + `<li> ${e.value} </li>`;
     }
          
     document.getElementById("wet").innerHTML = str;

    


     let aqs = document.getElementsByClassName("aqfield");
     let str1 = " ";
     for (let e of aqs){
         str1 += `<li> ${e.value} </li>`;

     }

     document.getElementById("aqt").innerHTML = str1;

     document.getElementById("cvform").style.display = "none";
     document.getElementById("cv-template").style.display = "block";
    
    };


    // print cv 

    function printcv(){
        window.print();
    }