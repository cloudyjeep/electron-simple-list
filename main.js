const { app, BrowserWindow, screen } = require("electron");
// const path = require("path");

let mainWindow;
const isDevelopment = !app.isPackaged;

function createWindow() {
  const screenSize = screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    ...screenSize,
    minWidth: 1000,
    minHeight: 600,
    titleBarStyle: "hidden",
    autoHideMenuBar: true,
    trafficLightPosition: {
      x: 20,
      y: 32,
    },
    webPreferences: {
      spellcheck: false,
      contextIsolation: true,
      nodeIntegration: false,
    },
    // show: false
  });

  if (isDevelopment) {
    mainWindow.loadURL(`http:localhost:3000`);
    // mainWindow.openDevTools();
  } else {
    mainWindow.loadFile("dist/_resource/index.html")
    // mainWindow.loadURL(path.join(__dirname, "build/index.html"));
  }
  
  
  mainWindow.openDevTools();
  // mainWindow.setTitle(isDevelopment ? "AKU"  : "DIA");
  // mainWindow.loadFile("./dist/_resource/index.html").catch(() => {
  //   mainWindow.loadFile("http:localhost:3000")
  // });

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
