const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow() {
  // Create browser window
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'/logo.png'})

  // Load index.html
  win.loadURL('file://' + __dirname + '/index.html');

  win.maximize();
}

// Run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});