const formatDate = (timeInSeconds) => {
    if (timeInSeconds === undefined || timeInSeconds === null) { 
        return `0s`;
    } else {
        let hours = Math.floor(timeInSeconds / 3600);
        let minutes = Math.floor(timeInSeconds % 3600 / 60);
        let seconds = Math.floor(timeInSeconds % 3600 % 60);
        let showHour = hours > 0 ? `${hours}h` : ``; // if hours >0 return `${hours}h` else return ``
        let minShow = minutes > 0 ? `${minutes}m` : ``;
        let secShow = seconds > 0 ? `${seconds}s` : ``;
        console.log(showHour, minShow, secShow);
        return showHour + (showHour && minShow ? ' ' : '') + minShow + (secShow && (minShow || showHour) ? ' ' : '') + secShow; 
      }
    };
  

  
  module.exports = formatDate;