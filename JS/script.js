// Cursor Progress bar Script
let CursorMeter = document.getElementById('CursorMeter');
document.addEventListener('mousemove', function(e){
    CursorMeter.style.top = e.clientY + 'px';
    CursorMeter.style.left = e.clientX + 'px';
    
})

let persent = document.getElementById('persent');
let progressBar = document.getElementById('progressBar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll =  function(){
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
    persent.innerHTML = 'Page Scrolled ' + Math.round(progress) + '%';
}

