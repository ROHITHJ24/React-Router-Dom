import React from 'react';

function About() {
  return (
    <div className="about-container">
    
      <section className="intro">
        <h1>About Our Website</h1>
        <p>
          Welcome to our website! We're dedicated to providing you with dynamic user profiles and useful content. Our platform allows users to easily navigate through different profiles and explore exciting features.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a user-friendly platform where individuals can showcase their profiles, connect with others, and share their stories. We believe in the power of community and connection, and we strive to make it as easy as possible for people to discover and interact with one another.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          We are a passionate group of developers, designers, and content creators working hard to make this platform the best it can be. Our team is dedicated to ensuring that you have an enjoyable and seamless experience.
        </p>
        <ul>
          <li><strong>Monish</strong> - CEO</li>
          <li><strong>Santhosh</strong> - TEAM LEAD</li>
          <li><strong>John</strong> - FULLSTACK DEV</li>
          <li><strong>Rohith</strong> - UI/UX Designer</li>
          <li><strong>Midhun</strong> - Content Creator</li>
          <li><strong>Rathish</strong> - FULLSTACK DEV</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to get in touch with us:</p>
        <ul>
          <li>Email: contact@mywebsite.com</li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Website St, Tech City, TX</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
