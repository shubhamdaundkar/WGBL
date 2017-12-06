var students = []; 
function add(event)
{  
  event.preventDefault();  
  var details = 
  {
    name: "",
    age: 0,
    marks: []
  }
  var form = document.getElementById("addForm");  
  for(var i = 0; i < students.length; i++){
    if(students[i].name == form.name.value){
     
      return;
    }
  }
  details.name = form.name.value;
  details.age = form.age.value;
  details.marks.push(form.m1.value);
  details.marks.push(form.m2.value);
  details.marks.push(form.m3.value);
  students.push(details); 

  if(students.length > 0){    
    document.getElementById("studentLists").style.display = "block";
  }
  var row = document.createElement("tr");
  var column1 = document.createElement("td");
  var column2 = document.createElement("td");
  var column3 = document.createElement("td");
  var column4 = document.createElement("td");
  var column5 = document.createElement("td");
  var column6 = document.createElement("td");
  var column7 = document.createElement("td");
  var value1 = document.createTextNode(details.name);
  var value2 = document.createTextNode(details.age);  
  var value3 = document.createTextNode(details.marks[0]);
  var value4 = document.createTextNode(details.marks[1]);
  var value5 = document.createTextNode(details.marks[2]);
  var value6 = document.createTextNode((parseInt(details.marks[0]) + parseInt(details.marks[1]) + parseInt(details.marks[2]))/3);
  var value7 = document.createTextNode(parseInt(details.marks[0]) > 40 && parseInt(details.marks[1]) > 40 && parseInt(details.marks[0]) > 40 ? "Pass" : "Fail");
  column1.appendChild(value1);
  column2.appendChild(value2);
  column3.appendChild(value3);
  column4.appendChild(value4);
  column5.appendChild(value5);
  column6.appendChild(value6);
  column7.appendChild(value7);
  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  row.appendChild(column5);
  row.appendChild(column6);
  row.appendChild(column7); 
  document.getElementById("studentListsBody").appendChild(row);
  }
