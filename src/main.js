// TODO: FOR RESIZE LOOK INTO IPCMAIN GETTING EVENT FROM IPCRENDERER AND UPPING A LIST OF SORTS.
// 16:9 RESOLUTIONS:
//   x340, y180
//   x374, y198
//   x408, y216
//   x442, y234
//   x476, y252
//   x510, y270
//   x544, y288
//   x578, y306
//   x612, y324
//   x646, y342
//   x680, y360

const { app, BrowserWindow, ipcMain } = require('electron/main')

const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    resizable: false,
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('windows/index.html')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})