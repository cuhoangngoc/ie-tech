import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import IT from "../components/IT_Service/IT";

export default function IT_Page() {
    return (
        <>
            <Head>
                <title>IE Solution</title>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>

            <Navbar />
            <div>
                <IT />
            </div>
        </>
    );
}