// DOM - Document Object Model
// console.log(document);

// const links = document.querySelectorAll('.tabsLink') // Коллекция
// for (let i = 0; i < links.length; i++) {
//     links[i].style = 'color: yellow; background-color: red;'
// }

const sec  = document.querySelector('.s'),
      min  = document.querySelector('.m'),
      hour = document.querySelector('.h'),
      sNum = document.querySelector('.seconds'),
      mNum = document.querySelector('.minutes'),
      hNum = document.querySelector('.hours');

function clocks() {
    let time = new Date(),
        s    = time.getSeconds()  * 6,
        m    = time.getMinutes() * 6,
        h    = time.getHours() * 30; 
        
    sec.style  = `transform: rotate(${s}deg);`
    min.style  = `transform: rotate(${m}deg);`
    hour.style = `transform: rotate(${h}deg);`
    
    hNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    mNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    sNum.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    
    
    setTimeout(() => clocks(), 1000);
}

clocks()

const links = document.querySelectorAll('.tabsItem'),
      tabs  = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e){
        e.preventDefault()
        for (let ix = 0; ix < links.length; ix++) {
            links[ix].classList.remove('active')
            tabs[ix].classList.remove('active')
        }
        tab(links[i], tabs[i])
    })
}

function tab(link, tab){
    link.classList.add('active')
    tab.classList.add('active')
}

const watchBtn  = document.querySelector('.stopwatch__btn'),
      millWatch = document.querySelector('.stopwatch__millsec'),
      secWatch  = document.querySelector('.stopwatch__seconds'),
      minWatch  = document.querySelector('.stopwatch__minutes'),
      hourWatch = document.querySelector('.stopwatch__hours'),
      watchInfo = document.querySelector('.tabsLink__span');


watchBtn.addEventListener('click', function () {
    if (this.innerHTML === 'start') {
        this.innerHTML  = 'stop'
        watchInfo.classList.add('active')
        let millsecond = 0
        setTimeout(() => stopWatch(this, millsecond), 1000)
    }else if(this.innerHTML === 'stop'){
        this.innerHTML  = 'clear'
        watchInfo.classList.remove('active')
        watchInfo.classList.add('active_clear')
    }else{
        this.innerHTML = 'start'
        watchInfo.classList.remove('active_clear')
        millWatch.innerHTML = secWatch.innerHTML = minWatch.innerHTML = hourWatch.innerHTML = 0
    }
})

function stopWatch(btn, millsecond) {
    if(btn.innerHTML === 'stop'){
        if(millsecond == 99){
            millsecond = 0
            millWatch.innerHTML = millsecond
            if(secWatch.innerHTML == 59){
                secWatch.innerHTML = 0
                minWatch.innerHTML++
                if(minWatch.innerHTML == 59){
                    minWatch.innerHTML = 0
                    hourWatch.innerHTML++
                }else{
                   minWatch++ 
                }
            }else{
                secWatch.innerHTML++
            }
        }else{
            millsecond++
            millWatch.innerHTML = millsecond
        }
        setTimeout(() => stopWatch(btn, millsecond), 10)
    }
}