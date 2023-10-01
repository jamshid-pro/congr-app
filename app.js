// boshlash

const start = () => {
  setTimeout(function () {
    confetti.start();
  }, 1000); // 1000=1sec, 5000=5s
};

// to'xtatish

const stop = () => {
  setTimeout(function () {
    confetti.stop();
  }, 1000000);
};

start();
stop();
