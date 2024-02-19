document.addEventListener('DOMContentLoaded', function() {
    animateProgress(0);
});

function updateFundraiserProgress(percentage) {
    var imageFront = document.querySelector('.image-front');
    var progressBar = document.querySelector('.progress-bar');
    var progressText = document.querySelector('.progress-text'); 

    imageFront.style.height = (100 - percentage) + '%';
    progressBar.style.width = percentage + '%';
    progressText.textContent = percentage + '%'; 
}

function animateProgress(currentProgress) {
    const targetProgress = 100; 
    const increment = 1; 
    const intervalTime = 50; 

    if (currentProgress <= targetProgress) {
        updateFundraiserProgress(currentProgress);
        setTimeout(() => animateProgress(currentProgress + increment), intervalTime);
    }
}
