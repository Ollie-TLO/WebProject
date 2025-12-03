# ICT40120 Certificate IV in Information Technology (Programming)

## Semester 2, 2025 Cluster Name (if applicable)

## Web Technologies

## AT 3 Project

This is Readme for Web Tech Project.

### Project Setup

Install Tailwind version 3:
> npm install -D tailwindcss@3

Initialise Tailwind (either one):
> npm exec tailwindcss init
>
> npx tailwindcss init

Make sure `tailwind.config.js` matches:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./*.html',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

Add the following to root object of `package.json`

```json
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"build": "tailwindcss -i ./src/input.css -o ./assets/css/site.css",
	"watch": "tailwindcss -i ./src/input.css -o ./assets/css/site.css --watch"
}
```

Use either:
> npm run build
>
> npm run watch

### Colour Scheme

Name for Colour     | RGB (rrr, ggg, bbb) | HEX (#rrggbb)
--------------------|---------------------|--------------
white               |    255, 255, 255    |    #ffffff
black               |      0,   0,   0     |    #000000
polarBlue-50        |    232, 234, 241     |    #E8eaF1
polarBlue-200       |    209, 221, 236     |    #d1ddec
polarBlue-500       |     87, 130, 183     |    #5782B7
polarBlue-900       |     14,  22,  32     |    #0E1620
