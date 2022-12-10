import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

// const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   text: "swap",
//   mono: "swap",
//   weights: [100, 300, 400, 500, 700, 900],
// });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
