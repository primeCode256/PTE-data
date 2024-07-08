var student = [];
student[0] = "Itohan Jane Igbinoba";
student[1] = "Ahamba Vincent Chikodi";
student[2] = "Prince Mike Jonathan";
student[3] = "Lilian Victory Okoye";
student[4] = "";
student[5] = "Silvester Miracle";
student[6] = "Ekanna Wills Ekenna";
student[7] = "Matthew Wisdom Kings";
student[8] = "Chioma Mary Duru";
student[9] = "Queen-Esther Ojukwu";
student[10] = "Timi Promise Temitope";

//Set the background picture
var background = 4;



var images = ["amy.jpg","Andrew.jpg", "levi.jpg", "anny.jpg", "futologo.png", "lesson.jpg", "nwuzor.jpg", "vickwayne.jpg", "sley.jpg", "smiles.jpg", "black.jpg"];


var studentsGP = 
[
  [4.8, 3.19, 4.5, 3.6, 3.67, 3.89,4.45, 4.42, 3.67, 3.90],
  [3.9, 4.89, 3.89,4.45, 4.42, 3.67, 3.90,4.5, 3.19, 4.5],
  [3.56, 3.56, 3.6, 3.67,3.56, 3.56,3.56, 3.6,3.19, 4.5],
  [4.0, 3.19, 3.6, 3.67,3.56, 3.56,3.56, 3.6,3.19, 4.5],
  [],
  
  [4.5, 3.19, 4.5, 4.6, 3.67, 3.89,4.45, 4.42, 3.67, 3.90],
  [3.9, 4.89, 3.89,4.45, 4.42, 3.67, 3.90,4.5, 3.98, 4.5],
  [3.56, 4.56, 3.6, 4.67,3.56, 4.56,3.56, 4.67,3.19, 4.5],
  [4.0, 3.19, 3.6, 3.67,3.56, 3.56,3.56, 3.6,3.19, 4.5],
  [3.34, 3.45, 3.6, 4.67,3.56, 4.56,3.56, 3.6,3.19, 4.5],
  [5.0, 5.0, 4.67, 4.86, 3.95, 3.96, 4.92,4.56, 5.0, 4.78]

];

var ROWS = studentsGP.length;
var COLUMNS = studentsGP[0].length;
var searchGP = studentsGP[0][background];



var searchersInput = "";

var MessageOutput = "";

var Dept = "Polymer and Textile Engineering";
var levelup;
var semester;
var knownLevels = 200;
var knownSemesters = [1, 2]







//Create Actions
var knownReg = [20051106, 20051116, 2018998, 200511362, "futo",
 20051136, 20055671, 20056789,20056788, 200599009, 20055353];
var action = "";

//table
var initials = document.querySelector("#initials");
var regno = document.querySelector("#regno");
var dept_1 = document.querySelector("#dept_1");
var level = document.querySelector("#level");
var sem = document.querySelector("#sem");


//GP status
var first1 = document.querySelector("#first1");
var second1 = document.querySelector("#second1");
var cgpa1 = document.querySelector("#cgpa1");
var first2 = document.querySelector("#first2");
var second2 = document.querySelector("#second2");
var cgpa2 = document.querySelector("#cgpa2");
var first3 = document.querySelector("#first3");
var second3 = document.querySelector("#second3");
var cgpa3 = document.querySelector("#cgpa3");
var first4 = document.querySelector("#first4");
var second4 = document.querySelector("#second4");
var cgpa4 = document.querySelector("#cgpa4");
var first5 = document.querySelector("#first5");
var second5 = document.querySelector("#second5");
var cgpa5 = document.querySelector("#cgpa5");
var personal_data = document.querySelector("#personal_data");
var academicdata = document.querySelector("#academicdata");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var table = document.querySelector("table");
var level1 = document.getElementsByTagName("level1");


//The level selection
var dropdown = document.getElementById('myDropdown');

//The semester selection
var dropdown2 = document.getElementById('myDropdown2');


//Add event listeners to the drop down
dropdown.addEventListener('change', function(){
    var selectedValue = dropdown.value;

    //Perform an action based on the selected value
    //Know the action by logging it to the console
    console.log('Selected: ' + selectedValue);

    //Triggering a specific action for each of the drop downs
    if(selectedValue === 'level1')
    {
       levelup = 100;
       searchStud()
       
       
       first2.innerHTML = "";
        second2.innerHTML = "";
        cgpa2.innerHTML = "";
        first3.innerHTML = "";
        second3.innerHTML = "";
        cgpa3.innerHTML = "";
        first4.innerHTML = "";
        second4.innerHTML = "";
        cgpa4.innerHTML = "";
        first5.innerHTML = "";
        second5.innerHTML = "";
        cgpa5.innerHTML = "";
        
        
       
       
       
      
    }
    else if(selectedValue === 'level2')
    {
        levelup = 200;

       searchStud()
       first3.innerHTML = "";
        second3.innerHTML = "";
        cgpa3.innerHTML = "";
        first4.innerHTML = "";
        second4.innerHTML = "";
        cgpa4.innerHTML = "";
        first5.innerHTML = "";
        second5.innerHTML = "";
        cgpa5.innerHTML = "";
    }
    else if(selectedValue === 'level3')
    {
        levelup = 300;
        searchStud()
    }
    else if(selectedValue === 'level4')
    {
        levelup = 400;
    }
    else if(selectedValue === 'level5')
    {
        levelup = 500;
    }
    else
    {
        level.innerHTML = "No level selected";
        first1.innerHTML = "";
        second1.innerHTML = "";
        cgpa1.innerHTML = "";
        first2.innerHTML = "";
        second2.innerHTML = "";
        cgpa2.innerHTML = "";
        first3.innerHTML = "";
        second3.innerHTML = "";
        cgpa3.innerHTML = "";
        first4.innerHTML = "";
        second4.innerHTML = "";
        cgpa4.innerHTML = "";
        first5.innerHTML = "";
        second5.innerHTML = "";
        cgpa5.innerHTML = "";
        academicdata.style.display = "none";
        
    }
});

dropdown2.addEventListener('change', function(){
    var selectedValue2 = dropdown2.value;

    //Perform an action based on the selected value
    //Know the action by logging it to the console
    console.log('Selected: ' + selectedValue2);

    //Triggering a specific action for each of the drop downs
     if(selectedValue2 === 'semester1')
        {
           
           semester = 1;
           searchStud()
           if(levelup === 100 && semester ===1)
       {
           second1.innerHTML = ""
       }
       if(levelup === 200 && semester ===1)
       {
           second2.innerHTML = ""
       }
          
        }
    else if(selectedValue2 === 'semester2')
    {
        semester = 2;
        searchStud()
    }
    else
    {
       sem.innerHTML = "No semester selected"
       academicdata.style.display = "none";
    }
   
});






//The input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var image = document.querySelector("img");
//The button
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
//Display the background/Information
render();

function clickHandler()
{
    validate();
}

function validate()
{
//Get the player's input and convert it to lowerCase
searchersInput = input.value;
if(searchersInput !== knownReg)
{
    output.innerHTML = "Student not found." + "<br>"+ "Please enter a valid registration number and try again"
}
if(isNaN(searchersInput))
{
    output.innerHTML = "Invalid! Enter numbers only";

}


else{
    searchStud();
}
}


function searchStud()
{
    
    MessageOutput = "";
    action = "";
    //Figure out the player's action
    for(var i = 0; i < knownReg.length; i++)
    {
        if(searchersInput.indexOf(knownReg[i]) !== -1)
        {
            action = knownReg[i];
            regno.innerHTML = knownReg[i];
            console.log("Admin's Search: " + action);
            break;
        }
    }

    //Choose the correct action 
    switch(action)
    {
        case 20051106:
          background = 0;
          break;
        case 20051116:
          background = 1;
          break;

        case 2018998:
          background = 2;
          break;

        case 200511362:
            background = 3;
            break;

        case "futo":
            background = 4;
            break;
        

        case 20051136:
          background = 5;
          break;

        case 20055671:
            background = 6;
            break;

        case 20056789:
            background = 7;
            break;
        
        case 20056788:
           background = 8;
            break;
             
        case 200599009:
            background = 9;
            break;
    
        case 20055353:
            background = 10;
            break;

        

        
        default:
            MessageOutput = "Student not found check the registration number and try again"

    }
    
    initials.innerHTML = student[i]
    
    dept_1.innerHTML = Dept;
    level.innerHTML = levelup;
    if(semester === 1)
    {
        sem.innerHTML = "Harmattan"
    }
    else if(semester === 2)
    {
        sem.innerHTML = "Rain"
    }
    

    for(var row = 0; row < ROWS; row++)
    {
        for(var column = 0; column < COLUMNS; column++)
        {
            if(levelup === knownLevels && semester === 1 )
            {
                personal_data.style.display = "block";
                academicdata.style.display = "block";
                
                first1.innerHTML = studentsGP[i][0];
                cgpa1.innerHTML = studentsGP[i][0];
            }
            else if(levelup === 100 && semester === 2)

             {
                
                 
                 first1.innerHTML = studentsGP[i][0];
                 second1.innerHTML = studentsGP[i][1];
                 cgpa1.innerHTML= ((studentsGP[i][0] + studentsGP[i][1])/2);
             }
             else if(levelup === 200 && semester === 1)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                first2.innerHTML = studentsGP[i][2];
                cgpa1.innerHTML= ((studentsGP[i][0] + studentsGP[i][1])/2);
                cgpa2.innerHTML= Math.ceil((studentsGP[i][0] + studentsGP[i][1]+ studentsGP[i][2] )/3);
               

             }else if(levelup === 200 && semester === 2)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                first2.innerHTML = studentsGP[i][2];
                second2.innerHTML = studentsGP[i][3];
                cgpa1.innerHTML= ((studentsGP[i][0] + studentsGP[i][1])/2);
                cgpa2.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]))/4);
             }
             else if(levelup === 300 && semester === 1)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                cgpa1.innerHTML= (studentsGP[i][0] + studentsGP[i][1])/2;
                first2.innerHTML = studentsGP[i][2];
                second2.innerHTML = studentsGP[i][3];
                cgpa2.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]))/4);
                first3.innerHTML = studentsGP[i][4];
                cgpa3.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4]))/5);

             }
             else if(levelup === 300 && semester === 2)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                cgpa1.innerHTML= (studentsGP[i][0] + studentsGP[i][1])/2;
                first2.innerHTML = studentsGP[i][2];
                second2.innerHTML = studentsGP[i][3];
                cgpa2.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]))/4);
                first3.innerHTML = studentsGP[i][4];
                second3.innerHTML = studentsGP[i][5];
                cgpa3.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ))/6);
               
               

             }
             else if(levelup === 400 && semester === 1)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                cgpa1.innerHTML= (studentsGP[i][0] + studentsGP[i][1])/2;
                first2.innerHTML = studentsGP[i][2];
                second2.innerHTML = studentsGP[i][3];
                cgpa2.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]))/4);
                first3.innerHTML = studentsGP[i][4];
                second3.innerHTML = studentsGP[i][5];
                cgpa3.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ))/6);
                first4.innerHTML = studentsGP[i][6];
                cgpa4.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ) + (studentsGP[i][6]))/7);
                
             }
             else if(levelup === 400 && semester === 2)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                cgpa1.innerHTML= (studentsGP[i][0] + studentsGP[i][1])/2;
                first2.innerHTML = studentsGP[i][2];
                second2.innerHTML = studentsGP[i][3];
                cgpa2.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]))/4);
                first3.innerHTML = studentsGP[i][4];
                second3.innerHTML = studentsGP[i][5];
                cgpa3.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][5] + studentsGP[i][5] ))/6);
                first4.innerHTML = studentsGP[i][6];
                second4.innerHTML = studentsGP[i][7];
                cgpa4.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ) + (studentsGP[i][6] + studentsGP[i][7]))/8);
             }
             else if(levelup === 500 && semester === 1)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                cgpa1.innerHTML= (studentsGP[i][0] + studentsGP[i][1])/2;
                first2.innerHTML = studentsGP[i][2];
                second2.innerHTML = studentsGP[i][3];
                cgpa2.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]))/4);
                first3.innerHTML = studentsGP[i][4];
                second3.innerHTML = studentsGP[i][5];
                cgpa3.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ))/6);
                first4.innerHTML = studentsGP[i][6];
                second4.innerHTML = studentsGP[i][7];
                cgpa4.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ) + (studentsGP[i][6] + studentsGP[i][7]))/8);
                first5.innerHTML = studentsGP[i][8];
                cgpa5.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ) + (studentsGP[i][6] + studentsGP[i][7]) + studentsGP[i][8])/9);
             }
             else if(levelup === 500 && semester === 2)
             {
                first1.innerHTML = studentsGP[i][0];
                second1.innerHTML = studentsGP[i][1];
                cgpa1.innerHTML= (studentsGP[i][0] + studentsGP[i][1])/2;
                first2.innerHTML = studentsGP[i][2];
                second2.innerHTML = studentsGP[i][3];
                cgpa2.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]))/4);
                first3.innerHTML = studentsGP[i][4];
                second3.innerHTML = studentsGP[i][5];
                cgpa3.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ))/6);
                first4.innerHTML = studentsGP[i][6];
                second4.innerHTML = studentsGP[i][7];
                cgpa4.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ) + (studentsGP[i][6] + studentsGP[i][7]))/8);
                first5.innerHTML = studentsGP[i][8];
                second5.innerHTML = studentsGP[i][9];
                cgpa5.innerHTML= (((studentsGP[i][2] + studentsGP[i][3])+ (studentsGP[i][0] + studentsGP[i][1]) + (studentsGP[i][4] + studentsGP[i][5] ) + (studentsGP[i][6] + studentsGP[i][7]) + studentsGP[i][8] + studentsGP[i][9])/10); 
             }
             else
             {
                academicdata.style.display = "none";
                 output.innerHTML = "The selected level does not exist";
                sem.innerHTML = "";

             }
        }
    }
        
    
         
        
    

    

    //Render
    render();
}

function render()
{
    //Render the location
    output.innerHTML = student[background];
    image.src = "../images/" + images[background];

    //Display the game message
    output.innerHTML += "<br><em>" + MessageOutput + "</em>";
    

}

