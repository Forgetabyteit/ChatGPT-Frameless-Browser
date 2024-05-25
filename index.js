const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false, // Make the window frameless
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Required to allow the custom script to run
    }
  });

  // Load the specified URL
  win.loadURL('https://chatgpt.com/?model=gpt-4o&oai-dm=1');

  // Uncomment below to Open the DevTools by default
  // win.webContents.openDevTools();

  // Inject custom CSS and JavaScript after the page has finished loading
  win.webContents.on('did-finish-load', () => {
    const customStyle = `
      <style>
        #draggableTop {
          -webkit-app-region: drag;
          position: fixed;
          top: 0;
          width: 100%;
          height: 20px;
          z-index: -1;
        }
      </style>
      <div id="draggableTop"></div>
    `;

    const customScript = `document.body.insertAdjacentHTML('beforeend', \`${customStyle}\`);`;

    win.webContents.executeJavaScript(customScript)
      .then(() => {
        console.log("Custom draggable top bar and mutation observer added.");
      })
      .catch(error => {
        console.error("Error injecting custom script:", error);
      });
  });
}

// Initialize and create the window when Electron has finished initialization
app.on('ready', createWindow);

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Re-create a window when the app icon is clicked in the dock (macOS specific)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
