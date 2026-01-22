let timerValue = 0;
    let timerInterval;

    const timerDisplay = document.getElementById('timer');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    

    startBtn.addEventListener('click', () => {
      if (!timerInterval) {
        timerInterval = setInterval(() => {
          timerValue++;
          timerDisplay.textContent = timerValue;
        }, 1000);
      }
    });

    stopBtn.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerInterval = null;
    }); 