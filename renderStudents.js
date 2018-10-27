function rollCall (name) {
  if (name.isPresent === true) {
    return `
    <div class="text-center mt-5">
      <div style="background-color:greenyellow;border-style:solid;border-width:1px">
      <h2>${name.name}</h2>
      <h4>Present</h4>
      </div>
    </div>
    `
  } else {
    return `
    <div class="text-center mt-5">
      <div style="background-color:red;border-style:solid;border-width:1px">
      <h2>${name.name}</h2>
      <h4>Absent</h4>
      </div>
    </div>
    `
  }
}

function renderStudents (students) {
  return `<div class="mt-2 d-flex justify-content-center"><h1><strong>Roll Call!!!</strong></h1></div>` + students.map(rollCall).join('')
}

function students () {
  var content = document.getElementById('content')

  var studentsAbstraction = [
    {
      name: 'Kamilah',
      isPresent: true
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]

  content.innerHTML = renderStudents(studentsAbstraction)
}
