"use strict";

var now = new Date;
var year = now.getFullYear();
var month = ('0' + (now.getMonth()+1)).slice(-2);
var date = ('0' + now.getDate()).slice(-2);

const getSeconds = (style) =>{
    let el = document.querySelector(`.lines-${style}-seconds`);
    el.style.transform = `rotate(${('0' + new Date().getSeconds()).slice(-2) * 6}deg)`;
}

const getMinutes = (style) => {
    let el = document.querySelector(`.lines-${style}-minutes`);
    el.style.transform = `rotate(${('0' + new Date().getMinutes()).slice(-2) * 6}deg)`;
}

const getHours = (style) => {
    let el = document.querySelector(`.lines-${style}-hours`);
    el.style.transform = `rotate(${('0' + new Date().getHours()).slice(-2) * 30}deg)`;
}

const dateComputed = (date) => {
    let month = '';
    switch(date){
        case '01':
            month= 'января';
            break;
        case '02':
            month = 'февраля';
            break;
        case '03':
            month= 'марта';
            break;
        case '04':
            month = 'апреля';
            break;
        case '05':
            month= 'мая';
            break;
        case '06':
            month = 'июня';
            break;
        case '07':
            month= 'июля';
            break;
        case '08':
            month = 'августа';
            break;
        case '09':
            month= 'сентября';
            break;
        case '10':
            month = 'октября';
            break;
        case '11':
            month= 'ноября';
            break;
        case '12':
            month = 'декабря';
            break;       
    }
    return month
}