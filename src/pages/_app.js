import '../styles/globals.css';

/**
 * The main app component, which renders the current page.
 *
 * This component is used by Next.js to render the page specified by the
 * router. It receives the following props:
 *
 * - `Component`: The page component to render.
 * - `pageProps`: The props to pass to the page component.
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;