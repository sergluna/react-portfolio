import React from 'react';
import Layout from './components/Layout';
import '../src/styles/style.css';
import Portfolio from './components/Page/Portfolio';
import About from "./components/Page/About"
import Contact from "./components/Page/Contact"

function App() {
  const [currentPage, setCurrentPage] = React.useState('About');

  const renderPage = () => {
    if (currentPage === 'About') return (<About />)
    if (currentPage === 'Portfolio') return <Portfolio />
    if (currentPage === 'Contact') return <Contact />
  }
  
  return (
    <Layout setCurrentPage={setCurrentPage} >
      <main>
      {renderPage()}
      </main>
    </Layout>

  );
}

export default App;
