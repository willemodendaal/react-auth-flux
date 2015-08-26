# React Auth on Flux 

A React implementation with Facebook authentication using the Flux architecture.

WIP Note: Facebook auth implementation still in progress.

Other features:
- Watch the filesystem for changes while developing (run `npm run watch`).
    - Shows how to run more than one task NPM concurrently.
    - Also copies static resources (html) to distribution folder when changed (using Gulp).
- Use Browserify to be able to use Require('') to import modules on a website.
- Use Ecmascript 6 code, and have Browserify transform it to normal Ecmascript5.
- Getting Browserify and Exorcist to extract source mappings from the bundled javascript and exporting to .map files.
- Hosting the site in a simple Express server.

Authentication logic added with the help of [this article from auth0](https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/)
