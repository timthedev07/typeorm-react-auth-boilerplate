/* development urls */
export const BACKEND =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "https://your-site-name.heroku.com"; // change this line
