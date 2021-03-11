const {createWindow} = require('./main');
const {app} = require('electron');
const path = require('path');

require('./database')();

const isDev = !app.isPackaged;

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
}

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

app.whenReady().then(createWindow);
