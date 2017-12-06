var student=[];
student=[
                {
                    name:"Shubham",
                    age :23,
                    marks : [50,40,60]
                },
                {
                    name:"Akshay",
                    age : 22,
                    marks: [10,50,41]
                },
                {
                    name: "xyz",
                    age : 24,
                    marks : [66,54,25]
                }
        ]

        for(var i=0 ; i<student.length ; i++)
        {
            console.log(student[i]);

            for(var j=0 ; j<student[i].marks.length ; j++)
            {
                console.log(student[i].marks[j]);
            }
        }
