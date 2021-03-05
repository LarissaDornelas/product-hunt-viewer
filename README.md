<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://ph-static.imgix.net/ph-logo-2.png?auto=format&auto=compress" alt="Product Hunt Viewer" width="200"></a>
  <br>
  Product Hunt Viewer
  <br>
</h1>

<h4 align="center">An unofficial client for <a href="https://api.producthunt.com/v2/docs" target="_blank">Product Hunt </a>.</h4>

<p align="center">
  <a href="#tecnologies">Tecnologies</a> •
  <a href="#how-to-run">How To Run</a>
</p>

<div align="center">
  <br>
  <img src="./src/assets/images/application.gif" alt="Product Hunt Viewer" width="200"></a>

</div>
## Tecnologies
 
 - ReactJS
 - Styled Components
 - Apollo Client


## How To Run

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/LarissaDornelas/product-hunt-viewer

# Go into the repository
$ cd product-hunt-viewer

# Install dependencies
$ npm install
```

The next step is to create a .env file in your project with these enviroment variables:

```
REACT_APP_API_URL='https://api.producthunt.com/v2/api/graphql'
REACT_APP_API_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```

If you don't know how to get the api access token please [click here](https://api.producthunt.com/v2/docs/oauth_client_only_authentication/oauth_token_ask_for_client_level_token).

After following all the steps you can start the application with this comand:

```bash

$ npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

Obs: To run the tests, please you can run the command below:

```bash
$ npm run tests
```
