import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

// const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   text: "swap",
//   mono: "swap",
//   weights: [100, 300, 400, 500, 700, 900],
// });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    import('preline');
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ duration: 0.5 }}
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}
      >
        <Provider store={store}>
          <Component {...pageProps} />
          <ToastContainer />
        </Provider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
