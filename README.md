# Eleventy Webring

A very simple webring website and service built on [Eleventy](https://11ty.dev). Doesn't require _any_ backend services or client-side JavaScript to work. It's just HTML files all the way down.

See [the Amphimorpho webring](https://noodle-r.ing) for an example in use.

## Using Eleventy Webring

### Development

1. [Use this repo as a template](https://github.com/new?template_name=eleventy-webring&template_owner=querkmachine), fork it, or download a copy of this repo.
2. Ensuring you have a recent version of [Node](https://nodejs.org/) installed (version 20 or newer), run `npm ci` in the project directory to install everything.
3. Run `npm start` to start a local server where you can see stuff in action.

The project only comes with the code necessary to make it work, so everything is unstyled by default. You can customise the appearance however you want.

### Adding websites to the ring

Currently this is just done through editing the [webring data file](https://github.com/querkmachine/eleventy-webring/blob/main/src/_data/webring.mjs) manually.

All entries require a unique `id` within the webring, a `url` to direct to, and a `name` to show on the webring site.

```js
export default [
  {
    id: "crouton",
    url: "http://crouton.net",
    name: "The ultimate crouton website",
  },
];
```

`id`s cannot contain forward slash characters, even URL encoded ones, but can otherwise be basically anything you want.

**Suggestion:** Why not make your webring open source and let people pull request themselves onto it?

### Deploying it

1. Make sure you've set a name and the intended homepage in the [meta configuration](https://github.com/querkmachine/eleventy-webring/blob/main/src/_data/meta.mjs).
1. Run `npm run build`. This will generate a bunch of static HTML files in the `_site` directory.
1. Upload that anywhere that'll run HTML.
