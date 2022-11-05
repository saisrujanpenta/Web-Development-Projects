//Title constructor function that creates a Title object


function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");


function addStudent(){
  try {
let table=document.getElementById("myTable");

let tableRows=document.getElementById("myTable").rows;


let rowCount=tableRows.length;
let recordsOfStudents=(rowCount-1)/2;
let addExtraRow=recordsOfStudents+1;
let budget = Math.floor(Math.random() * 100000);
let addExtraRow1 = table.insertRow(rowCount);


  let addTableRowScript = `
  
                  <tr>
                  <td><input type="checkbox" class="checkbox1" onclick ="checkClick()"/><br /><br /><img src="down.png" onclick="downClick(event)" width="25px" /></td>
                  <td>Student ${addExtraRow}</td>
                  <td>Teacher ${addExtraRow}</td>
                  <td>Approved</td>
                  <td>Fall</td>
                  <td>TA</td>
                  <td>${budget}</td>
                  <td>100%</td>
                  <td><button class="hidden" onclick="deleteClick()">Delete</button></td>
			            <td><button class="hidden" onclick="editClick()">Edit</button></td>
                </tr>`;
  addExtraRow1.innerHTML=addTableRowScript;
   rowCount=tableRows.length;
   console.log(rowCount);
let addExtraRow2 = table.insertRow(rowCount);
    let addTableDropDownScript = `              
                  <tr class="dropDownTextArea"><td colspan="8">
                  Advisor:<br /><br />
                  Award Details<br />
                  Summer 1-2014(TA)<br />
                  Budget Number: <br />
                  Tuition Number: <br />
                  Comments:<br /><br /><br />
                  Award Status:<br /><br /><br />
                </td>
                <td></td></tr>
                  `;

  addExtraRow2.innerHTML=addTableDropDownScript;
  addExtraRow2.classList.add("dropDownTextArea");
  alert("New record added successfully!");
} catch (error) {
  alert("New record add failed!");
}
}

var submitbutton = document.getElementById("button");
submitbutton.setAttribute('disabled',true);

function checkClick(){
  let activeElement = document.activeElement; 
  let nextElementSibling1 = activeElement.parentNode.nextElementSibling;
  let deleteButton=nextElementSibling1;
  let editButton;
  let k=1;
  while(k<8){
    deleteButton=deleteButton.nextElementSibling;
    k++;
  }
  
  
  editButton=deleteButton.nextElementSibling;
  deleteButton=deleteButton.firstElementChild;
  editButton=editButton.firstElementChild;;
  let parentRowElement=activeElement.parentNode.parentNode;
  if(activeElement.checked){
    parentRowElement.classList.add("colorYellow");
    submitbutton.removeAttribute('disabled');
    submitbutton.classList.remove("disable");
    submitbutton.classList.add("enable");
    deleteButton.classList.remove("hidden");
    editButton.classList.remove("hidden");  
  }else{
    parentRowElement.classList.remove("colorYellow");
    submitbutton.setAttribute('disabled',true);
    submitbutton.classList.remove("enable");
    submitbutton.classList.add("disable");
    deleteButton.classList.add("hidden");
    editButton.classList.add("hidden");
  }  
}

function editClick(){
  alert("Edit the details");
}

function deleteClick(){
  let activeElement = document.activeElement;
  let parent=activeElement.parentNode.parentNode;
  let parentSibling=parent.nextElementSibling;
  parent.remove();
  parentSibling.remove();
  alert("Record deleted successfully!");
}


function downClick(e){
  let activeElement = document.activeElement;
  let myElement = e.target;
  let parentElement = myElement.parentNode.parentNode;
  let parentSibling=parentElement.nextElementSibling;
  let array1 = Array.from(parentSibling.classList);
  if(array1.indexOf('dropDownTextArea')==-1){
    parentSibling.classList.add("dropDownTextArea");
  }else{
    parentSibling.classList.remove("dropDownTextArea");
  }
}


function shcolumns(){
  
}