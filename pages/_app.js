import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { wrapper } from "@/store";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
