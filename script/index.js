"use strict";

let dialEL = document.getElementById('dial');
let btns = document.querySelectorAll('.b-btn');
let secondInterval;
let minutesInterval;
let hoursInterval;
let clockMain;

const searcher = (el) =>{
    return document.querySelector(`.${el}`);
}

const setIntervals = (style) => {
    secondInterval = setInterval(getSeconds, 100, `${style}`);
    minutesInterval = setInterval(getMinutes, 1000, `${style}`);
    hoursInterval = setInterval(getHours, 1000, `${style}`);
}
const clearIntervals = () => {
    clearInterval(secondInterval)
    clearInterval(minutesInterval)
    clearInterval(hoursInterval)
}

const start = (e) =>{
    if(!searcher(`clock-main`)){
        render(e.target)
        setIntervals(e.target.id)
        btnActivate(e.target)
    } else if(searcher(`clock-main-${e.target.id}`)){
        btnDeactivate(e.target);
        clearIntervals()
        searcher(`clock-main-${e.target.id}`).remove();
    } else if(searcher(`clock-main`)){
        render(e.target)
        searcher(`clock-main`).remove()
        btnDeactivate(document.querySelector(`.b-active`))
        btnActivate(e.target)
        clearIntervals()
        setIntervals(e.target.id)
    }
}

btns.forEach(btn =>{
    btn.addEventListener('click', start)
})
