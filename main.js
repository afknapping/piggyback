const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  // require('electron-reload')(__dirname)
  const locals = {/* ...*/}
  // const pug = require('electron-pug')({pretty: true}, locals)

  const ServeGitAndModules = require('./scripts/serveGitAndModules')

  p2pDevModeConfig = ServeGitAndModules()

  // how to get this data to the renderer?
  // http://electron.rocks/different-ways-to-communicate-between-main-and-renderer-process/ ?
  console.log(p2pDevModeConfig)

  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  let win

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // clear chache
    win.webContents.session.clearCache(function(){
      console.log('cache cleared')
    });

    // Specify entry point to default entry point of vue.js
    win.loadURL('http://localhost:8080');

    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    })
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.