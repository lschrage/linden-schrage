import Hero from '../components/Hero/Hero';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';




const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <Image src='/images/v2_profile_picture.jpg' alt="Picture of Linden" className={utilStyles.borderCircle} width = {300} height = {300} />
      </Section>
      
    </Layout>
  );
};

export default Home;
