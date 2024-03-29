const {BrowserWindow} = require('electron');
const {
  user,
  company,
  category,
  brand,
  products,
  vendor,
  client,
} = require('./backend/controllers/index');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 900,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      // worldSafeExecuteJavaScript: true,
      // contextIsolation: true
    },
  });
  // win.removeMenu();
  win.loadFile('index.html');
}


module.exports = {
  user,
  company,
  createWindow,
  category,
  brand,
  products,
  vendor,
  client,
};
