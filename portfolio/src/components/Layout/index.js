import React from 'react';
import Footer from './footer';
import Header from './header';


// TA recommended and demonstrated this compponent for nicer organization
function Layout({children, setCurrentPage}) {
    return (<>
    <Header setCurrentPage={setCurrentPage}/>
    {children}
    {/* <Footer /> */}
    </> );
}

export default Layout;