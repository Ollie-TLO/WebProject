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
