// red, yellow, aqua, blue

/*

Változtasd meg a harmadik elem szövegét arra, hogy
A DOM Ereje, ha a word értéke az, hogy cool,
különben pedig változtasd meg erre a negyedik elem szövegét
*/

let color = 'purple'
let number = '10'
let word = 'abc'

if (color = 'purple') {
    $('.red').css('background', 'purple')
}

if (number > 100) {
    $('.yellow').text('wow, de nagy szám')
} else {
    $('.yellow').text('ez csak egy közönséges szám')
}