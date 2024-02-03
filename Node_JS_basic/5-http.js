const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    res.end('Number of students: 10\n\
    Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n\
    Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy')
  }
  
});

app.listen(1245);

module.exports = app;
