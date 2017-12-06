function searchAge(event) {
    event.preventDefault();
    var name1 = document.getElementById('name1').value;
    for (var i = 0; i < students.length; i++) {
        for (key in students[i]) {
            if (students[i][key].indexOf(name1) != -1) {
                var row = document.createElement("tr");
                var name = document.createElement("td");
                var age = document.createElement("td");
                var m1 = document.createElement("td");
                var m2 = document.createElement("td");
                var m3 = document.createElement("td");
                var per = document.createElement("td");
                var res = document.createElement("td");
                var value1 = document.createTextNode(students[i].name);
                var value2 = document.createTextNode(students[i].age);
                var value3 = document.createTextNode(students[i].marks[0]);
                var value4 = document.createTextNode(students[i].marks[1]);
                var value5 = document.createTextNode(students[i].marks[2]);
                var total = 0;

                for (var j = 0; j < students[i].marks.length; j++) {
                    total += (students[i].marks[j]) / 3;
                }
                var value6 = document.createTextNode(total.toFixed(2));
                var value7 = document.createTextNode((students[i].marks[0]) >= 40 && (students[i].marks[1]) >= 40 && (students[i].marks[2]) >= 40 ? "Pass" : "Fail");
                name.appendChild(value1);
                age.appendChild(value2);
                m1.appendChild(value3);
                m2.appendChild(value4);
                m3.appendChild(value5);
                per.appendChild(value6);
                res.appendChild(value7);
                row.appendChild(name);
                row.appendChild(age);
                row.appendChild(m1);
                row.appendChild(m2);
                row.appendChild(m3);
                row.appendChild(per);
                row.appendChild(res);
                document.getElementById("index").appendChild(row);
            }
        }
    }
}
