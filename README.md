# Bootcamp - ReactJS

## Utils

- [Tailwindcss](https://tailwindcss.com/docs/presets#merging-logic-in-depth)

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js

```javascript
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

- styles.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [Open Weather Map](https://openweathermap.org/current)
- [OWM API](https://home.openweathermap.org/api_keys)
- [OWM Icons](https://openweathermap.org/weather-conditions)

## TypeScript

- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
  - Ventajas, ¿qué es?
  - Type annotation
    - Datos primitivos
    - Objectos
    - Arrays
    - Functions
  - Interface
  - Type
  - Enum
  - Explicit vs. Implicit types

```shell
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

- tsconfig.json
  - [Compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

```json
{
	"compilerOptions": {
		"jsx": "react",
		"module": "commonjs",
		"noImplicitAny": true,
		"outDir": "./build/",
		"preserveConstEnums": true,
		"removeComments": true,
		"sourceMap": true,
		"target": "es5"
	},
	"include": ["./src/**/**/*"]
}
```

## Redux

- Global State Management

  - Store
  - Action
  - Dispatch
  - Reducer

-

```shell
npm install redux react-redux
```

```json
{
 "compilerOptions": {
  "target": "es5", // Specify ECMAScript target version
  "allowJs": true, // Allow JavaScript files to be compiled
  "skipLibCheck": true, // Skip type checking of all declaration files
  "esModuleInterop": true, // Disables namespace imports (import * as fs from "fs") and enables CJS/AMD/UMD style imports (import fs from "fs")
  "allowSyntheticDefaultImports": true, // Allow default imports from modules with no default export
  "forceConsistentCasingInFileNames": true, // Disallow inconsistently-cased references to the same file.
  "module": "esnext", // Specify module code generation
  "moduleResolution": "node", // Resolve modules using Node.js style
  "isolatedModules": true, // Unconditionally emit imports for unresolved files
  "resolveJsonModule": true, // Include modules imported with .json extension
  "jsx": "react", // Support JSX in .tsx files
  "sourceMap": true // Generate corresponding .map file
 },
 "include": ["src/**/*"],
 "exclude": ["node_modules", "build"]
```
