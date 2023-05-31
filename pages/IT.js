import Layout from "../components/Layout/Layout";
import IT from "../components/IT_Service/IT";

export default function IT_Page() {
  return (
    <Layout>
      <head>
        <title>IT Service</title>
        <meta name = "description" content = "IT Service" />
      </head>
      <IT />
    </Layout>
  );
}
