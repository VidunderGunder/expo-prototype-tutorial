# Digital Coating Report 2.0 <!-- omit in toc -->

WIP...

## 📑 Table of Contents <!-- omit in toc -->

- [🎓 Prerequisites](#-prerequisites)
  - [General](#general)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [🚀 Quick start](#-quick-start)
- [🍑 Backend](#-backend)
  - [Update database](#update-database)
- [🧪 Cross platform and user testing](#-cross-platform-and-user-testing)
  - [Local manual testing](#local-manual-testing)
  - [Remote manual testing](#remote-manual-testing)

## 🎓 Prerequisites

### General

- Terminal ([Windows](https://www.youtube.com/watch?v=jbvqCqb-HJk), [Linux](https://www.suse.com/c/working-command-line-basic-linux-commands/), [Mac](https://www.youtube.com/watch?v=5XgBd6rjuDQ))
- [Node](https://nodejs.org/en/download/)

### Frontend

- [HTML and CSS](https://www.youtube.com/watch?v=vQWlgd7hV4A)
- [Sass](https://www.youtube.com/watch?v=Zz6eOVaaelI)
- [Javascript](https://www.youtube.com/playlist?list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ)
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [React](https://www.youtube.com/watch?v=dGcsHMXbSOA)
  - [Router](https://www.youtube.com/watch?v=Law7wfdg_ls&t=1037s)
  - [State](https://www.youtube.com/watch?v=35lXWvCuM8o)

### Backend

- [Python](https://www.python.org/)
- [Django](https://www.djangoproject.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [GraphQL](https://graphql.org/)

## 🚀 Quick start

1. Install [VSCode](https://code.visualstudio.com/)
1. Install [Node](https://nodejs.org/en/download/)
1. Install [Git](https://git-scm.com/)
1. [Create a GitHub user](https://github.com/join)
1. Get access to the [repository](https://github.com/Andkleven/digital-coating-report-2.0) (will show 404 error if you do not have permission)
1. Open VSCode
1. Clone the repository

   1. Open the command palette (Windows shortcuts are <kbd>F1</kbd> or <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>)
   1. Enter

      ```console
      Git: Clone
      ```

   1. Paste

      ```console
      https://github.com/Andkleven/digital-coating-report-2.0.git
      ```

   1. Select a place to store the project
   1. Follow instructions
   1. Press "yes" to open repository, or open manually

1. Open the [integrated terminal in VSCode](https://code.visualstudio.com/docs/editor/integrated-terminal)

   - Tip: The norwegian keyboard shortcut is <kbd>CTRL</kbd> + <kbd>Ø</kbd>

1. Install extensions:

   Windows

   1. Preferably, uninstall current extensions first:

      ```console
      code --list-extensions | % { code --uninstall-extension $_ }
      ```

   1. Then install extensions:

      ```console
      get-content extensions.txt | % { code --install-extension $_ }
      ```

   1. Close and reopen VSCode.

   Linux

   1. Preferably, uninstall current extensions first:

      ```console
      code --list-extensions | xargs -n 1 code --uninstall-extension
      ```

   1. Then install all extensions:

      ```console
      cat extensions.txt | xargs -n 1 code --install-extension
      ```

   1. Close and reopen VSCode.

   Other (or failed installation)

   All extensions used in the project are listed in `.vscode/extensions.txt`, so you can try [another method](https://stackoverflow.com/questions/35773299/how-can-you-export-the-visual-studio-code-extension-list) or install them manually.

   Optional

   1. Open the command palette (Windows shortcuts are <kbd>F1</kbd> or <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>)

   1. Enter `Material Icons: Activate Icons`

   1. Open the command palette

   1. Enter `Preferences: Color Theme`

   1. Choose your Community Material Theme of choice (we recommend using a high contrast variant)

1. Install all node packages:

   ```console
   npm install
   ```

   Follow instructions to fix vulnerabilities. You only need to to do the automatic fix - don't bother with manual reviews.

1. Install all pip packages:

   ```console
   pip install -r requirements.txt
   ```

1. Create local database:

   ```console
   python manage.py migrate
   ```

1. Create admin user:

   1. Enter:

      ```console
      python manage.py createsuperuser
      ```

   1. Enter `admin` as username and password (skip email)

1. Start the frontend

   ```console
   npm start
   ```

1. Find your computer's local IP address

   By starting the fronted, the terminal should give you the local address like so:

   ```console
   On Your Network:  http://IPADDRESS:PORT/
   ```

   Copy the IPADDRESS.

   If not, try the following:

   - Windows

     ```console
     ipconfig
     ```

   - Linux and Mac

     ```console
     ifconfig
     ```

   Copy the IPv4 address of your computer.

   Follow this [guide](https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108) from the section _How to find your internal IP address_ if you are having trouble.

1. Create a file named `.env.development` at root, and add the following (feel free to use other tokens or backends):

   ```env
   FONTAWESOME_NPM_AUTH_TOKEN=CEFBEF8A-62EA-4EC8-A23C-890E68C06F65
   REACT_APP_BACKEND=http://x.x.x.x:8000
   ```

   - Where x.x.x.x is your local IP address

1. Start the backend:

   1. Open a new terminal

   1. Start backend:

      ```console
      python manage.py runserver x.x.x.x:8000
      ```

      - Where x.x.x.x is your local IP address

      [Taiko](https://docs.taiko.dev/) is used to perform automated tasks and end-to-end testing.

      We'll now use it to create some placeholder users.

      - Windows:

        To enable scripts on your system, you first have to ease up on some security.
        [Open up PowerShell as an administrator](https://www.howtoedge.com/open-powershell-as-administrator-in-windows-10/), and run the following:

        ```console
        Set-ExecutionPolicy RemoteSigned
        ```

        Feel free to tighten up your security settings when done:

        ```console
        Set-ExecutionPolicy Restricted
        ```

      Run the `createUsers` script:

      ```console
      npm run createUsers
      ```

      The automation should open up a browser and create users. If it messes up, try following the above instructions one more time and be sure to do everything you're told. If it still messes up, contact your senior(s) or any of the contributors.

1. To commit, push and pull you need to [enter your username and email for git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

You should now be ready for development and local testing. If not, contact your senior(s) or any of the contributors. Open your browser and go to http://localhost:3000/ or http://x.x.x.x:3000/ (where x.x.x.x is your local IP address).

## 🍑 Backend

### Update database

1. Make changes to `backend.app.models.py`
1. Make migrations:

   ```console
   python manage.py makemigrations
   ```

1. Run migrations:

   ```console
   python manage.py migrate
   ```

## 🧪 Cross platform and user testing

### Local manual testing

Live server is already installed if the [quick start](#-quick-tart) guide is followed, which enables devices on the same network to connect to the app.

_Warning: This may not work on public networks (e.g. school and work)!_

1. Open a browser on a device to connect and enter the following address (make sure it's connected to the same network as the host):

   ```console
   http://IPADDRESS:PORT/
   ```

   For example:

   ```console
   http://192.168.0.36:3000/
   ```

### Remote manual testing

We have two alternatives for remote testing:

1. <a name="devServer"></a>TODO: Development server

1. [CodeSandbox](https://codesandbox.io/)  
   _Warning: As of 19.06.2020, this doesn't work_  
   Note: You will need [CodeSandbox Pro](https://codesandbox.io/pricing) for this, because of privacy settings.

   1. Open the repository in CodeSandbox  
      We recommend using chrome with this [extension](https://chrome.google.com/webstore/detail/open-in-codesandbox/jkhbnhagngalpojoeijaleemepfpefmp?hl=en).  
      Press <kbd>Open in CodeSandbox</kbd> on [GitHub](https://github.com/Andkleven/digital-coating-report-2.0)
   1. Press <kbd>Fork</kbd>
   1. Login to CodeSandbox on the device to test
   1. Enter the preview address in a browser
   1. Test away!

   If you want to share the link with someone who does not have access (e.g. a lead engineer for testing a feature) you may disable privacy and the preview link will be shareable:

   _Warning: The sandbox will be available for everyone with the link and the source code is accessible._

   1. Open `Template info`
   1. Change Privacy from `Private` to `Unlisted`  
      _Important: Never set this to `Public`!_
   1. Send link to recipient
   1. Test away!

   If you want the source code to be kept secret, you can deploy directly from CodeSandbox to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/), but we do not recommend using CodeSandbox for this (see [Development server](#devServer)).
