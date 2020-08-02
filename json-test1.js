let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  let json = JSON.stringify(student)

  console.log(typeof json);           // string
  console.log(json);



  let parse = JSON.parse(json)
  console.log(typeof parse);          // object
  console.log(parse);