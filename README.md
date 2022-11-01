# sdk-spec
Brambl SDK Specification. 


## Organization

Each high level folder in the `Modules` directory will reflect a module within the Brambl SDK. All `README.md` files are for internal documentation purposes only and will not be included in the final specification. They are used to explain the purpose and content of a given module. Each high level folder in the `Modules` directory will reflect a module within the Brambl SDK. All `README.md` files are for internal documentation purposes only and will not be included in the final specification. They are used to explain the purpose and content of a given module.


### Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install 
```

Node.js >=16.14 is required.

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The pages are deployed automatically to https://topl.github.io/sdk-spec using Github Actions.
