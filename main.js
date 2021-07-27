var student_array=[];
function submit()
{
var display_student_array=[];
    for(var j=1; j<=4;j++)
    {
        var name_1=document.getElementById("name_of_the_student_"+j).value;    
        student_array.push(name_1);
    }
    var lenght_of_name_of_students_array = student_array.length;
for(var k=0; k<lenght_of_name_of_students_array;k++)
{
display_student_array.push("<h4>name - "+student_array[k]+"</h4>");
}

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
var display_student_array=[];
student_array.sort();
console.log(student_array);
var lenght_of_name_of_students_array = student_array.length;
for(var k=0; k<lenght_of_name_of_students_array;k++)
{
display_student_array.push("<h4>name - "+student_array[k]+"</h4>");
}

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");

    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}