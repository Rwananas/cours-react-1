import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo />
            {/* Les images importées depuis la balise IMG sont accessible dans 'PUBLIC' */}
            <Navigation />
            <Countries />
        </div>
    );
};

export default Home;