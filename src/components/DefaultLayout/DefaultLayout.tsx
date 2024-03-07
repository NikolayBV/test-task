import React, {ReactComponentElement, ReactNode} from 'react';
import Header from "../Header";
import Footer from "../Footer";

interface DefaultLyaoutProps {
    children: ReactNode
}

const DefaultLayout = ({children}: DefaultLyaoutProps) => {
    return (
        <div className='container'>
            <Header/>
            <main>
                {children}
            </main>
            <Footer />
        </div>
);
};

export default DefaultLayout;
