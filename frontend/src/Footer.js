import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light text-center py-4 mt-5 border-top">
      <p>&copy; {year} Bark Buds. All rights reserved.</p>

      <p>
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms</a> | <a href="/refund">Refund Policy</a>
      </p>

      <p>Secure Checkout 🔒 | Fast Shipping 🚚 | Trusted by Pet Lovers 🐾</p>

      <div className="mt-3">
        <a href="https://facebook.com/barkbuds" target="_blank" rel="noopener noreferrer" className="mx-2">📘 Facebook</a>
        <a href="https://instagram.com/barkbuds" target="_blank" rel="noopener noreferrer" className="mx-2">📸 Instagram</a>
        <a href="https://wa.me/923000099089" target="_blank" rel="noopener noreferrer" className="mx-2">💬 WhatsApp</a>
      </div>

      <p className="mt-3">
        Contact us: <a href="mailto:support@barkbuds.com">support@barkbuds.com</a> | <a href="/contact">Contact Form</a> | <a href="/chat">Live Chat</a>
      </p>
    </footer>
  );
}

export default Footer;
