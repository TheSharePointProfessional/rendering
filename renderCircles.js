
function renderCircles (circles) {
  // HINT: You probably need to write a for loop!
  //       Or, if you're feeling fancy, use .map()
  var i = 0
  var html = ''
  for (i = 0; i < 4; i++) {
    html += `
    <div class="mt-2 d-flex justify-content-center">
        <div style="height:${circles[i].radius}px;width:${circles[i].radius}px;border-radius:${circles[i].radius}px;background-color:${circles[i].color}" flex></div>
    </div>
    `
  }
  return html
}

function circles () {
  var content = document.getElementById('content')

  var circlesAbstraction = [
    {
      radius: 50,
      color: '#FF00FF'
    },
    {
      radius: 30,
      color: '#FF99AA'
    },
    {
      radius: 60,
      color: '#0000FF'
    },
    {
      radius: 10,
      color: '#000000'
    }
  ]

  content.innerHTML = renderCircles(circlesAbstraction)
}
