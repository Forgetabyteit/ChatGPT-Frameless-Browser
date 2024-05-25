# ChatGPT-Frameless-Browser

## Overview

**ChatGPT-Frameless-Browser** is an Electron-based application that creates a frameless browser window specifically tailored for interacting with ChatGPT. This application provides a sleek, minimalistic interface by removing the default window frame and adding custom styling and functionality.

## Features

- **Frameless Window**: The application launches in a frameless window, providing a clean and distraction-free interface.
- **Custom CSS and JavaScript Injection**: Injects custom CSS to create a draggable area and custom JavaScript to enhance the user experience.
- **ChatGPT Integration**: Loads ChatGPT in the browser window for seamless interaction.
- **Cross-Platform**: Compatible with Windows, macOS, and Linux.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/forgetabyteit/ChatGPT-Frameless-Browser.git
   cd ChatGPT-Frameless-Browser
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

## Usage

Upon running the application, a frameless browser window will open, loading the ChatGPT interface. You can drag the window using the top draggable area.

## Code Structure

- **main.js**: The main entry point of the Electron application. It handles the creation of the browser window and the injection of custom scripts and styles.
- **package.json**: Contains metadata about the project and its dependencies.

## Customization

### Injecting Custom Styles

To inject custom CSS, modify the `customStyle` variable in `main.js`:

```javascript
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
```

### Injecting Custom Scripts

To inject custom JavaScript, modify the `customScript` variable in `main.js`:

```javascript
const customScript = `document.body.insertAdjacentHTML('beforeend', \`${customStyle}\`);`;
```

## Contributing

We welcome contributions to enhance the functionality and features of ChatGPT-Frameless-Browser. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Electron](https://www.electronjs.org/) for providing a robust framework for building cross-platform applications.
- [OpenAI](https://www.openai.com/) for developing ChatGPT, the powerful AI language model integrated into this application.

---

For any questions or support, please open an issue on the GitHub repository or contact us directly.

Happy coding!

---

**Repository Link**: [ChatGPT-Frameless-Browser](https://github.com/forgetabyteit/ChatGPT-Frameless-Browser)