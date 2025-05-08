import React from 'react';

function Contact() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="space-y-4">
        <p className="text-lg">
          <strong>Email:</strong> <a href="mailto:info@fishfarming.rw" className="text-blue-600 hover:underline">info@fishfarming.rw</a>
        </p>
        <p className="text-lg">
          <strong>Phone:</strong> <a href="tel:+250785933044" className="text-blue-600 hover:underline">+250785933044 </a>
        </p>
        <p className="text-lg">
          <strong>Address:</strong> 123 Aquaculture Lane, Kigali, Rwanda
        </p>
      </div>
      <div className="mt-8">
        <p className="text-gray-600">
          Have questions about fish farming or our platform? Reach out to our team for support!
        </p>
      </div>
    </div>
  );
}

export default Contact;