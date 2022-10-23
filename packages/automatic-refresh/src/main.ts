// @ts-ignore isolatedModules

function config(callback: (n: number) => void) {
  sessionStorage.issennRefreshTime = 300;
  let time: number;
  if (!sessionStorage.issennRefreshTime) {
    const input = prompt("Please set the interval (seconds) for automatic refresh:", '300');
    time = parseInt(input ? input : '300', 10);
    sessionStorage.issennRefreshTime = time;
  } else {
    time = parseInt(sessionStorage.issennRefreshTime);
  };
  callback(time);
};

function ready(seconds: number) {
  let title = document.title;
  setInterval(() => {
    document.title = "[" + formatTime(seconds, false) + "] " + title;
    if (seconds-- === 0) {
      location.reload();
    };
  }, 1000);
};

const padTime = (n: string | number): string => n.toString().padStart(2, '0');

function formatTime(seconds: number, milliseconds: boolean): string {
  if (milliseconds) {
    seconds = ~~(seconds / 1000);
  }
  return padTime(~~(seconds / 3600))
    + ":" + padTime(~~((seconds % 3600) / 60))
    + ":" + padTime(~~(seconds % 60))
};

config(ready);
