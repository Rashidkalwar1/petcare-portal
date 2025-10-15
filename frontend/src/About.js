import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "About | PetCare Portal";
  }, []);

  return (
    <div className="container mt-4">
      <h2>About Bark Buds</h2>
      <p>...</p>
    </div>
  );
}

export default About;
