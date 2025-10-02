
# Ideas Tracker

A simple React + Vite app for tracking and sharing ideas, with authentication and persistent storage powered by [Appwrite](https://appwrite.io/).

## Features

- User authentication (register, login, logout)
- Submit new ideas (title & description)
- View latest ideas (10 most recent)
- Remove your own ideas
- Responsive, modern UI with Tailwind CSS

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/) (database & authentication)


## Getting Started

### Clone or Fork the Repository

To clone this repository:

```sh
git clone https://github.com/sheikh-mohammad-rakib/Ideas_tracker.git
cd Ideas_tracker
```

To fork, click the "Fork" button on GitHub, then clone your fork:

```sh
git clone https://github.com/<your-username>/Ideas_tracker.git
cd Ideas_tracker
```

### Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

```sh
npm install
```

### Configure Environment Variables

Copy `.env` and fill in your Appwrite project details.

### Run the Project Locally

Start the development server:

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
.env
.gitignore
eslint.config.js
index.html
package.json
vite.config.js
public/
src/
  App.jsx
  main.jsx
  index.css
  lib/
	 appwrite.js
	 context/
		user.jsx
		ideas.jsx
  pages/
	 Home.jsx
	 Login.jsx
```

## Customization

- Update Appwrite credentials in `.env`.
- Modify UI styles in `src/index.css` and component files.

## License

MIT
