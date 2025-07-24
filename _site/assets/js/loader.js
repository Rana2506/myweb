document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader-wrapper');
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    document.querySelector('.loader').appendChild(loadingBar);

    let progress = 0;
    const minLoadTime = 3000; // Minimum 3 seconds loading time
    const startTime = Date.now();
    
    function updateProgress() {
        const timeElapsed = Date.now() - startTime;
        const naturalProgress = Math.min((timeElapsed / minLoadTime) * 100, 95);
        
        progress = Math.max(progress, naturalProgress);
        loadingBar.style.setProperty('--progress', `${progress}%`);
        loadingBar.style.width = `${progress}%`;
        
        if (progress < 95) {
            requestAnimationFrame(updateProgress);
        }
    }
    
    // Start the progress animation
    updateProgress();
    
    if (loader) {
        window.addEventListener('load', function() {
            const timeElapsed = Date.now() - startTime;
            const remainingTime = Math.max(0, minLoadTime - timeElapsed);
            
            setTimeout(() => {
                // Complete the progress bar
                progress = 100;
                loadingBar.style.width = '100%';
                
                // Fade out after a short delay
                setTimeout(() => {
                    loader.classList.add('fade-out');
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }, 200);
            }, remainingTime);
        });
    }
});
