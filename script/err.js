"use strict";

const createErr = (text) => {
    let err = document.createElement('div');
    err.classList.add('err');
    err.innerHTML = `${text}`
    return err
}