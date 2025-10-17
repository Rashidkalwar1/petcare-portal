import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "About | PetCare Portal";
  }, []);

  return (
    <div className="container mt-4">
      <h2>About Bark Buds</h2>
      <p>
        Bark Buds is a playful and professional pet care platform designed to connect pet lovers with trusted services. 
        Whether you're registering a new furry friend or browsing our pet listings, we make it easy, secure, and joyful.
      </p>
    </div>
  );
}

export default About;
