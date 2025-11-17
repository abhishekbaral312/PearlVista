

window.addEventListener("load", () => {
    const preloaderTag = document.getElementById('loading-gif');
    preloaderTag.src = './images/preloader.gif?' + new Date().getTime();
            const preloader = document.getElementById('preloader');
            const mainContent = document.getElementById('content');

            const preloaderDuration = 5000;

            setTimeout(() => {
                
                preloader.style.display = 'none';
                mainContent.style.display = 'block';

            }, preloaderDuration);


   
        });

