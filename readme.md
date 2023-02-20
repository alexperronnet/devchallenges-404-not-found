# SportSee

![preview](https://user-images.githubusercontent.com/59840413/219975608-72e540fe-c9ae-4026-bcd8-bb2fceb5f78b.png)

## Overview

For this project, I had to build a sport analytics dashboard. The dashboard is a web application that allows users to visualize data about their sport activities.

### Useful links

- [Live demo](https://sportsee.alexperronnet.dev/)
- [Documentation](https://alexperronnet.github.io/openclassrooms-p12-sportsee/)
- [Figma mockup](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)
- [User stories](https://www.notion.so/openclassrooms/Copy-of-Dev4U-projet-Learn-Home-6686aa4b5f44417881a4884c9af5669e)

## Stack

For this project, I used the following technologies:

| Technology                                             | Usage              |
| ------------------------------------------------------ | ------------------ |
| [React](https://reactjs.org/)                          | Frontend           |
| [Vite](https://vitejs.dev/)                            | Build tool         |
| [Sass](https://sass-lang.com/)                         | Styling            |
| [D3](https://d3js.org/)                                | Data visualization |
| [React Router](https://reactrouter.com/)               | Routing            |
| [Prop Types](https://www.npmjs.com/package/prop-types) | Type checking      |
| [Prettier](https://prettier.io/)                       | Code formatting    |
| [ESLint](https://eslint.org/)                          | Code linting       |
| [PNPM](https://pnpm.io/)                               | Package manager    |
| [Netlify](https://www.netlify.com/)                    | Deployment         |
| [JSDoc](https://jsdoc.app/)                            | Documentation      |

> An alternative version of this project using Recharts is available [here](https://github.com/alexperronnet/openclassrooms-p12-sportsee/tree/recharts).

## Local setup

For the frontend of this project I used [PNPM](https://pnpm.io/) as a package manager. If you don't have it installed, you can install it with the following command:

```bash
npm install -g pnpm
```

### Frontend

1. Clone the repository

```bash
git clone https://github.com/alexperronnet/openclassrooms-p12-sportsee.git
```

2. Navigate to the project folder

```bash
cd openclassrooms-p12-sportsee
```

3. Install dependencies

```bash
pnpm install
```

4. Start the development server

```bash
pnpm run dev
```

5. Build the project

```bash
pnpm run build # Use real api
# or
pnpm run build:staging # Use mock api
```

### Backend

1. Clone the repository

```bash
git clone https://github.com/alexperronnet/openclassrooms-p12-sportsee-micro-api.git
```

2. Navigate to the project folder

```bash
cd openclassrooms-p12-sportsee-micro-api
```

3. Install dependencies

```bash
yarn
```

4. Start the development server

```bash
yarn dev
```

> For more information about the backend, please refer to the [README](https://github.com/alexperronnet/openclassrooms-p12-sportsee-micro-api) of the repository.

## License

This is an OpenClassrooms project. The code is freely reusable, but assets are not because they are not mine.

If you are also a student of OC, you can freely use my work as inspiration, but I advise you not to copy parts of it.
