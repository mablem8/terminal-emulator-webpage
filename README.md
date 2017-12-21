# Terminal Emulator Webpage

A lightweight webpage that emulates the look and behavior of a command line or
old school hacker terminal. It's great for novelty websites or as a film prop
when expanded to full screen. All processing takes place on the client side; no
special server configurations are required.

**Current version**: 0.1.0

* This library uses [semantic versioning](http://semver.org).

**Dependencies**

* None; open `index.html` with a standard web browser. For hosting over the web,
  simply paste the website files into the appropriate server location. No
  special server configurations are required.

**How do I use this webpage?**

Double-click on `index.html`. The webpage should open with your default browser.

Edit `script.js` to change the behavior of the webpage. Edit `data.js` to change
the content printed in response to terminal commands. Colors can be changed by
editing `style.css`.

## Contents

* [Design](#design): An overview of the repository and its structure
* [Directory Contents](#directory-contents): A map of the repository directory
* [Quick Start Guides](#quick-start-guides): Guides for using the repository
    * [Viewing the Webpage](#viewing-the-webpage): Immediately view and use the
      webpage
    * [Set up a Localhost Server](#set-up-a-localhost-server): Set up a
      localhost server for development (optional)
        * [Debian Linux (e.g. Ubuntu)](#debian-linux-eg-ubuntu)
        * [Mac](#mac)
        * [Windows](#windows)
* [License](#license)

## <a name="design"></a> Design

The Terminal Emulator Webpage mimics the look and behavior of a command line or
old school hacker terminal. It's great for novelty websites or as a movie prop
when expanded to full screen. All processing takes place on the client side; no
special server configurations are required.

The webpage is lightweight and simple. The majority of the page functionality is
contained within the `script.js` file. Data (e.g. the text printed to the screen
in response to terminal commands) are separated into a separate `data.js` file.
There are no external Javascript library dependencies. Colors and other visual
behavior (such as preserving whitespace when displayed as HTML) are specified in
`style.css`.

## <a name="directory-contents"></a> Directory Contents

* **documentation**: Contains documentation related files
* **server**: No special server configuration files are required
* **website**: Contains the website files
* **CHANGELOG.md**: A log of changes made to the repository
* **CONTRIBUTING.md**: Rules for contributing to the repository
* **LICENSE.txt**: License information
* **README.md**: This document

## <a name="quick-start-guides"></a> Quick Start Guides

Quick start guides are available for viewing the webpage and, optionally, to set
up a localhost server for local web development and testing.

### <a name="viewing-the-webpage"></a> Viewing the Webpage

This quick start guide for viewing the webpage is applicable to all desktop
platforms and web browsers.

1. Download a ZIP file of the repository, and **be sure to unpack it**.
2. Open a web browser and navigate to a new tab.
3. Drag the `index.html` file from the repository into the address field or tab
   bar of the web browser. The webpage should now be visible in the browser
   window.

### <a name="set-up-a-localhost-server"></a> Set up a Localhost Server (Optional)

This quick start guide describes how to set up a localhost server for local web
development and testing. It covers Debian Linux (e.g. Ubuntu), Mac, and Windows
operating systems.

#### <a name="debian-linux-eg-ubuntu"></a> Debian Linux (e.g. Ubuntu)

1. Ensure that the system is up-to-date.  
```bash
$ sudo apt-get update
$ sudo apt-get upgrade
```

2. Create a folder for websites.  
```bash
$ mkdir /home/username/Sites
```

3. Install Nginx (pronounced "Engine X").  
```bash
$ sudo apt-get install nginx
```

4. Copy the default Nginx configuration file to a backup location, and replace
   it with a new configuration file. An example configuration file is included
   in the `server` folder [here](server/nginx.conf). **Note**: Before using the
   example configuration file, edit the file so that
   `http > server > location > root` matches the path created in Step 2.  
```bash
$ sudo mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
# Ensure that nginx.conf contains /home/username/Sites (before or after copying)
$ sudo cp path/to/repo/server/nginx.conf /etc/nginx/nginx.conf
```

5. Start or restart the service.  
```bash
# Ubuntu 14.04
$ sudo service nginx restart
# Ubuntu 16.04
$ sudo systemctl restart nginx
```

6. Copy the contents of the repository `website` directory into the `Sites`
   directory. Note the period at the end of the path to the repository.  
```bash
$ cp -a path/to/repo/website/. /home/username/Sites/
```

7. Open a web browser and visit the site. Enter `http://localhost` for the URL.

#### <a name="mac"></a> Mac

1. Ensure that Xcode and the Xcode command line tools have been installed. To
   install Xcode, search for Xcode in the Mac App Store. Once Xcode is
   installed, install command line tools with the following command.  
```bash
$ xcode-select --install
```

2. Create a folder for websites.  
```bash
$ mkdir /Users/username/Sites
```

3. If it is not already present, install `brew`. See [brew.sh](http://brew.sh)
   for details.  
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

4. Install Nginx (pronounced "Engine X").  
```bash
brew install nginx
```

5. Copy the default Nginx configuration file to a backup location, and replace
   it with a new configuration file. An example configuration file is included
   in the `server` folder [here](server/nginx.conf). **Note**: Before using the
   example configuration file, edit the file so that
   `http > server > location > root` matches the path created in Step 2.  
```bash
$ sudo mv /usr/local/etc/nginx/nginx.conf /usr/local/etc/nginx/nginx.conf.bak
# Ensure that nginx.conf contains /Users/username/Sites (before or after copying)
$ sudo cp path/to/repo/server/nginx.conf /usr/local/etc/nginx/nginx.conf
```

6. Start the service.  
```bash
$ sudo brew services start nginx
```

7. Copy the contents of the repository `website` directory into the `Sites`
   directory. Note the period at the end of the path to the repository.  
```bash
$ cp -a path/to/repo/. /Users/username/Sites/
```

8. Open a web browser and visit the site. Enter `http://localhost` for the URL.

#### <a name="windows"></a> Windows

Setting up an Apache or Nginx web server on a Windows operating system can be a
long and complex process. Instead, use a Python HTTP Server. **Help expand this
quick start guide by contributing a procedure for setting up an Nginx server on
Windows.**

1. Install the latest Python 3 release for Windows. Visit
   [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)
   and choose "Latest Python 3 Release." A Windows x86-64 executable installer
   is available near the bottom of the page.
2. In the Command Prompt, navigate to the repository folder. Either drag the
   folder into the Command Prompt window, or use the command `cd path\to\repo`.
3. Using the Command Prompt, launch the Python server. If a Windows Firewall
   alert appears, be sure to check the option to allow communication on private
   networks.  
```bash
python -m http.server
```

4. Open a web browser and visit the site. Enter `http://127.0.0.1:8000` as the
   URL.

## <a name="license"></a> License

Written in 2017 by Bradley Denby  
Other contributors: None

To the extent possible under law, the author(s) have dedicated all copyright and
related and neighboring rights to this work to the public domain worldwide. This
work is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication with this
work. If not, see <https://creativecommons.org/publicdomain/zero/1.0/>.
