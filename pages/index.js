import AboutCompany from '../components/AboutCompany/AboutCompany';
import Hero from '../components/Hero/Hero';
import WeCarry from '../components/WeCarry/WeCarry';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import List_user from '../components/Web_development/List_user';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../hooks/auth';
import ChatBox from '../components/ChatBox/ChatBox';
export default function Home() {
  const { user } = useAuth({ middleware: 'guest' });
  return (
    <Layout>
      {/* main */}
      <ChatBox />
      {/* <Slider /> */}
      <div className="container mx-auto px-2 md:px-4">
        <Hero />
        <List_user />
        <AboutCompany />
        <WhyChooseUs />
        <WeCarry />
      </div>
      {/* <Our_clients /> */}
    </Layout>
  );
}
