"use strict";

const render = e => {
    let style = e.getAttribute('id');
    let layout = '';
    if(style == 'classic'){
        layout = createLayout('classic')
    }
    if(style == 'modern'){
        layout = createLayout('modern')
    }
    if(style == 'sport'){
        layout = createLayout('sport')
    }
    dialEL.insertAdjacentElement('beforeend', layout);
    getSeconds(style);
    getMinutes(style);
    getHours(style);
}
const createLayout = (style) => {
    let layout = document.createElement('div');
    let container = document.createElement('div');
    let deg = 0;
    container.classList.add(`clock-container-${style}`)
    layout.classList.add(`clock-main-${style}`, `clock-main`);
    for(let i = 0; i < 6; i++){
        container.insertAdjacentElement('beforeend', createIntervals(style, deg));
        deg +=30;
    }
    deg = 0;
    container.insertAdjacentElement('beforeend', createDate(style))
    container.insertAdjacentElement('beforeend', createLines(style, 'seconds'));
    container.insertAdjacentElement('beforeend', createLines(style, 'minutes'));
    container.insertAdjacentElement('beforeend', createLines(style, 'hours'));
    layout.insertAdjacentElement('beforeend', container)
    return layout;
}

const createIntervals = (style, deg) =>{
    let intervals = document.createElement('div');
    intervals.style.transform = `rotate(${deg}deg)`;
    intervals.classList.add(`intervals-${style}`);
    for(let g =0; g < 2 ; g++){
        let interval = document.createElement('div');
        interval.classList.add(`interval-${style}`);
        intervals.insertAdjacentElement('beforeend', interval)
    }
    return intervals
}

const createLines = (style, type) => {
    let lines = document.createElement('div');
    lines.classList.add(`lines-${style}-${type}`, `lines-${style}`);
    for(let i = 0; i < 2; i++){
        let line = document.createElement('div');
        line.classList.add(`line-${style}-${type}`)
        lines.insertAdjacentElement('beforeend', line)
    }
    return lines
}

const createDate = (style) => {
    let dateBlock = document.createElement('div');
    dateBlock.classList.add(`date-${style}`);
    if(style == 'sport'){
        dateBlock.innerHTML = `${dateComputed(month).slice(0, 3)} ${year}`
    } else{
        dateBlock.innerHTML = `${date} ${dateComputed(month)} ${year}`
    }
    return dateBlock;
}
