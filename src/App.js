import { useState } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import SocialDesktop from './components/SocialDesktop';
import SocialMobile from './components/SocialMobile';

function App() {
  const [socialIcons, setSocialIcons] = useState(false);

  function handleClick() {
    setSocialIcons(!socialIcons);
  }

  return (
    <>
      <main className="relative">
        <Card handleClick={handleClick} />

        {socialIcons && <SocialMobile />}
        {socialIcons && <SocialDesktop />}
      </main>
      <Footer />
    </>
  );
}

export default App;
