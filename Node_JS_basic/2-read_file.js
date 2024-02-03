const fs = require('fs')

function countStudents(path) {
  try {
    const data = (fs.readFileSync(path, 'utf-8'));
    const lines = data.split('\n');
    const final_array = lines.filter((x) => x.length > 0);
    console.log(`Number of students: ${final_array.length - 1}`);
    let field1 = 0;
    let field2 = 0;
    let array1 = [];
    let array2 = [];
    for (line of final_array) {
      const data = line.split(',');
      if (data[3] === 'CS') {
        array1.push(data[0]);
        field1 += 1;
      }
      if (data[3] === 'SWE') {
        array2.push(data[0]);
        field2 += 1;
      }
    }
    console.log(`Number of students in CS: ${field1}. List: ${array1.join(', ')}`);
    console.log(`Number of students in SWE: ${field2}. List: ${array2.join(', ')}`);
  }
  catch (err){
    throw new Error('Cannot load the database');
  }
}

module.exports = {
    countStudents
}