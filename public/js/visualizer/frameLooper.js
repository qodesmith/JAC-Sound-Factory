 var frameLooper = function(){
  window.webkitRequestAnimationFrame(frameLooper);
  fbc_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(fbc_array);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'magenta'; 
  bars = 100;
  for (var i = 0; i < bars; i++) {
    bar_x = i * 12;
    bar_width = 10;
    bar_height = -(fbc_array[i] / 1);
    
    ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
  }
}