const playBtns = document.querySelectorAll('.play');
const stopBtns = document.querySelectorAll('.stop');
const songs = document.querySelectorAll('.song');
const audios = document.querySelectorAll('audio');
audios.forEach(item=>{
    item.addEventListener('ended',()=>{
        let name = document.querySelector(`.song${item.getAttribute('value')}`);
        name.querySelector('.stop').style.display = "none";
        name.querySelector('.play').style.display = 'block';  
    })
})
playBtns.forEach(item => {
    item.addEventListener('click',()=>{
        let name = item.parentNode.classList[1][4];
        audios.forEach(item=>{
            let name = document.querySelector(`.song${item.getAttribute('value')}`);
            item.pause();
            name.querySelector('.stop').style.display = "none";
            name.querySelector('.play').style.display = 'block';
        })
        audios[name-1].play();
        item.parentNode.querySelector('.stop').style.display = 'flex';
        item.style.display = "none";
    })
});
stopBtns.forEach(item => {
    item.addEventListener('click',()=>{
        let name = item.parentNode.classList[1][4];
        
        audios[name-1].pause();
         item.style.display = "none";
            item.parentNode.querySelector('.play').style.display = 'block';
    })
});
