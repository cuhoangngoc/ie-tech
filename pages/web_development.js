import About_service from '../components/Web_development/About_service';
import List_user from '../components/Web_development/List_user';
import Main_header from '../components/Web_development/Main_header';
import Support_serrvice from '../components/Web_development/Support_serrvice';
import Techonolody from '../components/Web_development/Techonolody';
import Choose_paln_index from '../components/Web_development/Choose_plan_index';
import Layout from '../components/Layout/Layout';

import { defaults } from 'autoprefixer';

export const web_development = () => {
  return (
    <Layout>
      {/* main */}
      <Main_header></Main_header>
      <div className="container mx-auto px-2 md:px-4">
        <About_service></About_service>
        <Support_serrvice></Support_serrvice>
        <Techonolody></Techonolody>
        <Choose_paln_index></Choose_paln_index>
        <List_user></List_user>
        {/* <Our_clients></Our_clients> */}
      </div>
      {/* footer */}
    </Layout>
  );
};
export default web_development;
