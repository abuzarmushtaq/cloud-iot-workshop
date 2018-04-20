var socket = io();

var switch1 = document.getElementById('switch1');
// var switch2 = document.getElementById('switch2');
// var switch3 = document.getElementById('switch3');
// var switch4 = document.getElementById('switch4');


switch1.addEventListener('change', function () {
    socket.emit('b1', Number(this.checked));
});
// switch2.addEventListener('change', function () {
//     socket.emit('b2', Number(this.checked));
// });

// switch3.addEventListener('change', function () {
//     socket.emit('b3', Number(this.checked));
// });

// switch4.addEventListener('change', function () {
//     socket.emit('b4', Number(this.checked));
// });

