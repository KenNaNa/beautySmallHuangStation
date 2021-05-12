main.js

```js
const {
  app,
  BrowserWindow
} = require('electron')
let mainWindow
let windowConfig = { // 窗口配置程序运行窗口的大小
  width: 1000,
  height: 800,
}
const path = require('path')

function createWindow() {
  mainWindow = new BrowserWindow(windowConfig)
  mainWindow.show()
  mainWindow.loadFile('dist/index.html') // 项目里build出的静态资源包地址为www，
  mainWindow.webContents.openDevTools() // electron窗口打开调试工具
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.on('resize', () => {
    mainWindow.reload()
  })
}

app.on('ready', () => {
  createWindow()
  const {
    Menu
  } = require('electron')
  Menu.setApplicationMenu(null) // window下 隐藏菜单栏
})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
  console.log(this, 'main')
})
```

package.json

```js
"electron": "electron .",
"dist": "npm run build && electron-builder",
"packager": "npm run build && electron-packager ./dist/ --platform=win32 --arch=x64 --icon=./src/assets/login.ico --overwrite",
```









