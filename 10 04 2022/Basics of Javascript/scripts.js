let name = "Dorina"
let age = "27"
console.log('Javascript is also loaded')

// >, <, >=, <=, == (két érték azonossága), === (típust is összehasonlít)

if (age >= 21) {
    console.log('Old enough to drink a beer in the US')
} else if (age >= 18) {
    console.log('Old enough to drink a beer in Europe')
} else {
    console.log('Not old enough to drink a beer')
}

let otherage = 16

if (otherage >= 21) {
    console.log('Old enough to drink a beer in the US')
} else if (otherage >= 18) {
    console.log('Old enough to drink a beer in Europe')
} else {
    console.log('Not old enough to drink a beer')
}

console.log ('This is the end')

// jQuery part

console.log ($('h1').text())

$('h1').text('This has been modified from JavaScript!')

if (age >= 21) {
    $('h1').text('Old enough to drink a beer in the US')
} else if (age >= 18) {
    $('h1').text('Old enough to drink a beer in Europe')
} else {
    $('h1').text('Not old enough to drink a beer')
}

console.log($('.yellow').css('background-color'))
// $('li').css('background-color', 'lime')
// $('.yellow').css('background-color', 'magenta')
$('p').html('alma, ami <strong>nagyon</strong> fontos')
$('li:last-of-type').toggleClass('yellow')

function anotherli(){
    $('ol').append('<li>new element</li>')
}
$('#add').click(anotherli)

$('#remove').click(() => {
    $('li:last-of-type').remove('')
})

// -------------------------

for (let i = 0; i < 20; i = i + 1) {
    $('ol').append('<li>I will never cheat again</li>')
}

let colors = ['orange', 'magenta', 'red', 'brown', 'green', 'blue', 'teal']

function colorbox (color) {
$('.container').append('<div class="box"></div>')
$('.container div:last-of-type').css('background-color', color)
}

colorbox ('lime')
colorbox ('pink')

colors.forEach(colorbox)

// -----------------------