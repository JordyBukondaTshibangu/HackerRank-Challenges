const gradingStudents = grades => {
    if(!grades.length) return;
    grades.forEach(grade =>  console.log((grade < 38 || (grade % 5 < 3)) ? grade : grade + (5 - grade % 5 )))
}

const gradingStudentsWithRecursion = grades => {
    if(!grades.length) return;
    let current = grades.shift();
    console.log((current < 38 || (current % 5 < 3)) ? current : current + (5 - current % 5 ));
    gradingStudentsWithRecursion(grades)
}

gradingStudents([73, 67, 38, 33])
gradingStudents([11, 39, 99, 76])
gradingStudentsWithRecursion([11, 39, 99, 76]);


// failing under 40
// round to the closest multiple of 5 if the grade is within 2 points of that multiple
//if rouding a grade result in a failing grade do not round it 
//ex : 82 = 82 || 83 = 85 || 38 = 40 || 24 = 24

// test cases