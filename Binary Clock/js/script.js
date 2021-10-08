let hour1 = document.getElementsByClassName('hour-1')
let hour2 = document.getElementsByClassName('hour-2')
let min1 = document.getElementsByClassName('min-1')
let min2 = document.getElementsByClassName('min-2')

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    
    let h = hour.toString()
    let m = minute.toString()
    if(h <= 9)
        h = '0'.concat(h)
    
    if(m <= 9)
        m = '0'.concat(m);
    
    let h1 = Number(h[0]).toString(2).split('').reverse().join('')
    let h2 = Number(h[1]).toString(2).split('').reverse().join('')
    let m1 = Number(m[0]).toString(2).split('').reverse().join('')
    let m2 = Number(m[1]).toString(2).split('').reverse().join('')
    
    let fill = '#fff';
    let j = 3;
    for(let i = 0; i <= 3; i++) {
        if(h1[j] === '1')
            hour1[j].style.background = fill;
        if(h2[i] === '1')
            hour2[j].style.background = fill;
        if(m1[i] === '1')
            min1[j].style.background = fill;
        if(m2[j] === '1')
            min2[i].style.background = fill;
        j--;
    }

}, 1000)