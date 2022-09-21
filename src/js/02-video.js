import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle (onUpdateTime, 1000));


function onUpdateTime (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
  }; 


const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime).then(function(seconds) {

}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          
          break;

      default:
          
          break;
  }
});