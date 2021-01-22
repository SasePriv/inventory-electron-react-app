const { app, BrowserWindow} = require('electron');
const path = require("path")

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth:1200,
        minHeight: 900,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile('index.html');
}

if(isDev){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })    
}

app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required")

app.whenReady().then(createWindow)

