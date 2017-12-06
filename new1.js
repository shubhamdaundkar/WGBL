var students = []; 
          var details = 
          {
            name: "",
            age: 0,
            marks: []
          }

	  
      function add(event)
      {  
      	event.preventDefault();  
          

	 var form = document.getElementById("addForm");    
          details.name = form.name.value;
          details.age = form.age.value;
          details.marks.push(form.m1.value);
          details.marks.push(form.m2.value);
          details.marks.push(form.m3.value);
          students.push(details);  
          alert("Saved!!");    
          console.log(students);

            form.name.value = "";
          form.age.value = null;
          form.m1.value = null;
          form.m2.value = null;
          form.m3.value = null;          
          return false;


	
}


function searchAge(event)
{
	event.preventDefault();
	var name1=document.getElementById('name1').value;
	//var form=document.getElementById("search");
	
	


		if( details.name == name1);
		{
			document.write(details.age);
        }
       var per=0;
        
  //for(var i = 0; i<details.marks.length ; i++)
  per =(details.marks[0]+details.marks[1]+details.marks[2])/3
  
  document.write(per);
  
	
}

/*function calculate(event)
{
  event.preventDefault();
var calc=document.getElementById('calc').value;

  var per = 0;

if(details.name == calc)
{
  for(var i = 0; i<details.marks.length ; i++)
  per +=(details.marks[i])/3
  return per;
}
}
*/

