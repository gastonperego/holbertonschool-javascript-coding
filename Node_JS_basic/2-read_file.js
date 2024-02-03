const fs = require('fs')

function countStudents(path) {
  try {
    const data = (fs.readFileSync(path, 'utf-8'));
    const lines = data.split('\n');
    const finalArray = lines.filter((x) => x.length > 0);
    console.log(`Number of students: ${finalArray.length - 1}`);
    let field1 = 0;
    let field2 = 0;
    const array1 = [];
    const array2 = [];
    for (const line of finalArray) {
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

module.exports = countStudents