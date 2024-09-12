# Eleventy Webring

A very simple webring website and service built on [Eleventy](https://11ty.dev). Doesn't require _any_ backend services or client-side JavaScript to work. It's just HTML files all the way down.

## Using Eleventy Webring

### Development

1. Fork or download a copy of this repo.
2. Ensuring you have a recent version of Node installed, run `npm ci` in the project directory to install everything.
3. Run `npm start` to start a local server where you can see stuff in action.

### Adding websites to the ring

Currently this is just done through editing the [webring data file](https://github.com/querkmachine/eleventy-webring/blob/main/src/_data/webring.mjs) manually.

All entries require a unique `id`, a display `name` for the ring's homepage, and a `url` to direct to.

`id`s cannot contain forward slash characters, even URL encoded ones, but can otherwise be basically anything you want.

Why not make your webring open source and let people pull request themselves onto it?

### Deploying it

1. Make sure you've set a name and the intended homepage in the [meta configuration](https://github.com/querkmachine/eleventy-webring/blob/main/src/_data/meta.mjs).
1. Run `npm run build` to generate a bunch of static HTML in the `_site` directory.
1. Upload that anywhere that'll run HTML.
