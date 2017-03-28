const electron = require('electron')
const path = require('path')
const url = require('url')

const { app, BrowserWindow, ipcMain: ipc } = electron

let mainWindow = null;

app.on('ready', _ => {
    mainWindow = new BrowserWindow();

    mainWindow.loadURL(url.format({
        protocol: 'file:',
        slashes: true,
        pathname: path.join(__dirname, 'index.html')
    }))

    // mainWindow.webContents.openDevTools();
})