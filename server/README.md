# Terminal Emulator Webpage Server Files

All processing for the Terminal Emulator Webpage takes place on the client side.
As a result, no special server configurations are required. This folder contains
a sample Nginx configuration file for users who would like to set up a localhost
server for local web development and testing. Note that the server configuration
file must be edited to contain the proper website directory before use.

## Contents

* [Directory Contents](#directory-contents): A map of the `server` directory
* [Server Configuration Details](#server-configuration-details):
  Specific notes regarding the server configuration file
* [License](#license)


## <a name="directory-contents"><a/> Directory Contents

* **nginx.conf**: An example configuration file for an NGINX server. This file
  requires modification before deployment.
* **README.md**: This document

## <a name="server-configuration-details"><a/> Server Configuration Details

The provided Nginx server configuration file must be modified before deployment.
Specifically, the path to the website directory must be edited to match the path
for the development machine.

## <a name="license"></a> License

Written in 2017 by Bradley Denby  
Other contributors: None

To the extent possible under law, the author(s) have dedicated all copyright and
related and neighboring rights to this work to the public domain worldwide. This
work is distributed without any warranty.

You should have received a copy of the CC0 Public Domain Dedication with this
work. If not, see <https://creativecommons.org/publicdomain/zero/1.0/>.
