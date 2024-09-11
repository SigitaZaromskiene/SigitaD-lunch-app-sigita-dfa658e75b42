import './assets/App.scss';
import Layout from './components/Layout';
import Nav from './components/Nav';
import { ReactElement } from 'react';

const App = (): ReactElement => {
  return (
    <>
      <Layout>
        <Nav />
      </Layout>
    </>
  );
};

export default App;
