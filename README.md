# Bitvalley - Innovative Software & Web Development

This is a Next.js web application for Bitvalley, a software and web development company. The application showcases the company's services, portfolio, technologies, client testimonials, and provides contact information. It also integrates Genkit for potential AI-powered features.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Key Technologies](#key-technologies)
- [Available Scripts](#available-scripts)
- [Styling](#styling)
- [GenAI (Genkit)](#genai-genkit)
- [Environment Variables](#environment-variables)
- [Linting and Type Checking](#linting-and-type-checking)
- [Customization](#customization)
- [Deployment](#deployment)

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the Next.js development server:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:9002`.

To run the Genkit development server (for AI flows):

```bash
npm run genkit:dev
# or, for watching changes:
npm run genkit:watch
```

Genkit flows will typically be available for inspection at `http://localhost:4000` (Genkit Developer UI).

## Project Structure

-   `src/app/`: Contains the main application pages and layouts using Next.js App Router.
    -   `(pages)/`: Route groups for different sections of the website (e.g., `about`, `contact`, `services`).
    -   `layout.tsx`: The root layout for the application.
    -   `page.tsx`: The home page of the application.
    -   `globals.css`: Global styles and Tailwind CSS theme configuration.
-   `src/components/`: Reusable React components.
    -   `common/`: General purpose components (e.g., `Section`, `CTASection`).
    -   `home-page/`, `contact-page/`, etc.: Components specific to certain pages.
    -   `layout/`: Layout components like `Header` and `Footer`.
    -   `ui/`: ShadCN UI components.
-   `src/lib/`: Utility functions, data, and server actions.
    -   `actions.ts`: Server Actions (e.g., for form submissions).
    -   `data.ts`: Static data used across the application (e.g., services, portfolio items).
    -   `utils.ts`: General utility functions (e.g., `cn` for class names).
-   `src/ai/`: Genkit related files.
    -   `genkit.ts`: Genkit initialization and configuration.
    -   `dev.ts`: Entry point for Genkit development server, imports flows.
    -   `flows/`: Directory for Genkit flow implementations (if any are added).
-   `public/`: Static assets.
-   `next.config.ts`: Next.js configuration file.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `components.json`: ShadCN UI configuration.

## Key Technologies

-   **Next.js (App Router):** React framework for server-side rendering, static site generation, and client-side applications.
-   **TypeScript:** Superset of JavaScript that adds static typing.
-   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-   **ShadCN UI:** Collection of re-usable components built with Radix UI and Tailwind CSS.
-   **Genkit:** Toolkit for building AI-powered applications (Google AI plugin configured).
-   **Lucide React:** Icon library.
-   **React Hook Form:** For managing forms (used in `ContactForm`).
-   **Zod:** For schema validation (used in server actions and Genkit flows).
-   **Anime.js:** JavaScript animation library used for some UI animations.

## Available Scripts

In the `package.json` file, you can find the following scripts:

-   `dev`: Starts the Next.js development server with Turbopack on port 9002.
-   `genkit:dev`: Starts the Genkit development server.
-   `genkit:watch`: Starts the Genkit development server with file watching.
-   `build`: Builds the Next.js application for production.
-   `start`: Starts the Next.js production server.
-   `lint`: Runs ESLint to check for code quality issues.
-   `typecheck`: Runs TypeScript compiler to check for type errors.

## Styling

-   **Tailwind CSS:** Used for styling components. Utility classes are preferred.
-   **ShadCN Theme:** The application uses a custom theme configured in `src/app/globals.css`. HSL CSS variables are used for colors (background, foreground, primary, secondary, accent, etc.). You can modify these variables to change the overall color scheme.
-   **CSS Animations:** Basic fade-in animations are defined in `globals.css`. More complex animations might use `anime.js` or `framer-motion` (though `framer-motion` was removed due to build errors, `anime.js` is present).

## GenAI (Genkit)

The application is set up to use Genkit for AI-powered features.

-   **Configuration:** Genkit is initialized in `src/ai/genkit.ts` using the `googleAI` plugin and configured to use the `gemini-2.0-flash` model.
-   **Development Server:** Genkit flows are developed and tested using the Genkit development server, which can be started with `npm run genkit:dev`. The Genkit Developer UI is typically accessible at `http://localhost:4000`.
-   **Flows:** AI logic is encapsulated in "flows". If flows are added, they should typically reside in the `src/ai/flows/` directory and be imported in `src/ai/dev.ts` to be discoverable by the Genkit dev server.

## Environment Variables

Certain features might require environment variables. For example, to enable Google Maps on the contact page:

1.  Create a `.env.local` file in the root of the project.
2.  Add your Google Maps API key:
    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_API_KEY_HERE
    ```
    Make sure the API key has the "Maps JavaScript API" enabled in your Google Cloud Console.

Other environment variables for Genkit or other services might be needed as the project evolves.

## Linting and Type Checking

-   To run ESLint:
    ```bash
    npm run lint
    ```
-   To run TypeScript type checking:
    ```bash
    npm run typecheck
    ```

## Customization

-   **Theme:** Modify HSL variables in `src/app/globals.css` to change colors.
-   **Components:** Add new reusable components in `src/components/`. ShadCN UI components can be added using the ShadCN CLI: `npx shadcn-ui@latest add <component-name>`.
-   **Content:** Update static data in `src/lib/data.ts` (e.g., services, portfolio items, testimonials).
-   **Pages:** Add or modify pages in `src/app/`.

## Deployment

The application can be deployed to any platform that supports Next.js (e.g., Vercel, Netlify, Firebase Hosting with Cloud Functions, or a custom Node.js server).

Ensure that environment variables (if any) are set up correctly in your deployment environment.

For production builds:
```bash
npm run build
npm run start
```

The build process will create an optimized version of your application in the `.next` directory.
