import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <footer className="footer bg-purple-950 text-white px-6 py-12 rounded-tl-xl mt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
        <form id="contactForm" className="space-y-4">
          <div>
            <label htmlFor="Name" className="block text-sm">Name</label>
            <input type="text" id="Name" placeholder="Your Name" className="w-full p-2 rounded border border-gray-300" />
            <div id="error-Name" className="text-xs text-red-500"></div>
          </div>

          <div>
            <label htmlFor="Email" className="block text-sm">Email</label>
            <input type="email" id="Email" placeholder="Your Email" className="w-full p-2 rounded border border-gray-300" />
            <div id="error-Email" className="text-xs text-red-500"></div>
          </div>

          <div>
            <label htmlFor="Message" className="block text-sm">Message</label>
            <textarea id="Message" placeholder="Your Message" rows="4" className="w-full p-2 rounded border border-gray-300"></textarea>
            <div id="error-Message" className="text-xs text-red-500"></div>
          </div>

          <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-600">Submit</button>
        </form>
      </div>

      <p className="text-center mt-6">© <span id="year"></span>. Your Competitive Programming Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
