const $arrow = document.querySelector('.arrow');

$arrow.animate([
    {top: '0px'},
    {top: '-10px'},
    {top: '0px'}
],{
    duration: 700,
    iterations: Infinity
});
