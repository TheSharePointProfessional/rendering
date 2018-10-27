
function makeSingleNametag (name) {
  return `<div class="text-center mt-5" style="border-style:solid;border-width:1px">
                <h1 style="background-color:blue;color:white">Hello, my name is:</h1>
                <div style="font-size:60px">${name}</div>
         </div>`
}

function renderNametags (nametags) {
  return nametags.map(makeSingleNametag).join('')

//   var i = 0
//   var html = ''
//   for (i = 0; i < 5; i++) {
//     html += `
//         <div class="text-center mt-5" style="border-style:solid;border-width:1px">
//             <h1 style="background-color:blue;color:white">Hello, my name is:</h1>
//             <div style="font-size:60px">${nametags[i]}</div>
//         </div>
//     `
//   }
//   return html
}

function nametags () {
  var content = document.getElementById('content')

  var nametagsAbstraction = [
    'Kamilah',
    'Kim',
    'Stuart',
    'Ron',
    'Krissy'
  ]

  content.innerHTML = renderNametags(nametagsAbstraction)
}
