# Ember & Olive Restaurant

A modern, responsive restaurant website built with **React**, **Vite**,
and **Tailwind CSS**. Ember & Olive presents the restaurant's story,
menu, dining experience, contact information, and a reservation request
form through a warm, editorial-style interface.

**Live Demo:** https://ember-olive-restaurant-lake.vercel.app/\
**GitHub Repository:**
https://github.com/chandrusm171-ux/Ember-Olive-Restaurant-

------------------------------------------------------------------------

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Quick Start](#quick-start)
-   [Available Scripts](#available-scripts)
-   [Pages and Routes](#pages-and-routes)
-   [Deployment](#deployment)
-   [Important Note](#important-note)

------------------------------------------------------------------------

## Features

### User Interface and Experience

-   Warm restaurant-inspired color palette and typography
-   Responsive layouts for desktop, tablet, and mobile screens
-   Reusable navigation, footer, buttons, containers, and section
    headings
-   Food photography and featured dish sections
-   Hover effects and visual details for a polished browsing experience

### Restaurant Pages

-   **Home:** Hero section, featured menu, restaurant introduction,
    dining experience, and testimonials
-   **About:** Restaurant story and brand information
-   **Menu:** Menu items displayed by category, with interactive
    category filtering
-   **Reservation:** Form for guest contact details, preferred date and
    time, party size, and special requests
-   **Contact:** Restaurant contact information, address, and
    opening-hour details

### Reservation and Contact Forms

-   Controlled form inputs using React state
-   Submission feedback in the interface
-   Basic client-side interaction without a connected booking backend

------------------------------------------------------------------------

## Tech Stack

  Technology                Purpose
  ------------------------- -----------------------------------------
  React 19                  Component-based user interface
  Vite                      Development server and production build
  Tailwind CSS 4            Responsive styling and utility classes
  React Router DOM          Client-side page routing
  Lucide React              Interface icons
  JavaScript (ES modules)   UI logic and interactive behavior
  HTML5                     Application document structure
  Git and GitHub            Version control and source hosting
  Vercel                    Public deployment and hosting

------------------------------------------------------------------------

## Project Structure

``` text
ember-and-olive/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── home/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── FeaturedMenu.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Container.jsx
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   ├── menuData.js
│   │   └── restaurantData.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Menu.jsx
│   │   └── Reservation.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

------------------------------------------------------------------------

## Quick Start

### Prerequisites

-   Node.js and npm installed
-   Git installed (optional, if cloning the repository)

### 1. Clone the repository

``` bash
git clone https://github.com/chandrusm171-ux/Ember-Olive-Restaurant-.git
cd Ember-Olive-Restaurant-
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Start the development server

``` bash
npm run dev
```

Open the local URL shown in the terminal, usually
`http://localhost:5173`.

------------------------------------------------------------------------

## Available Scripts

  Command             Description
  ------------------- -------------------------------------------------
  `npm run dev`       Start the Vite development server
  `npm run build`     Create an optimized production build in `dist/`
  `npm run preview`   Preview the production build locally
  `npm run lint`      Run ESLint checks

------------------------------------------------------------------------

## Pages and Routes

  Page          Route
  ------------- ----------------
  Home          `/`
  About         `/about`
  Menu          `/menu`
  Contact       `/contact`
  Reservation   `/reservation`

------------------------------------------------------------------------

## Deployment

The application is deployed on **Vercel**.

To deploy your own version:

1.  Push the project to a GitHub repository.
2.  Import the repository into [Vercel](https://vercel.com/).
3.  Keep the project root set to the folder containing `package.json`.
4.  Use the standard Vite build command: `npm run build`.
5.  Set the output directory to `dist` if Vercel does not detect it
    automatically.
6.  Deploy the project.

No backend environment variables are required for the current frontend
implementation.

------------------------------------------------------------------------

## Important Note

The reservation and contact forms currently demonstrate client-side form
handling and submission feedback. They do **not** send reservations or
enquiries to a restaurant, store them in a database, or confirm real
table availability. A backend API or third-party booking service would
be needed for live reservations.

------------------------------------------------------------------------

## Links

-   **Live Demo:** https://ember-olive-restaurant-lake.vercel.app/
-   **GitHub:**
    https://github.com/chandrusm171-ux/Ember-Olive-Restaurant-
