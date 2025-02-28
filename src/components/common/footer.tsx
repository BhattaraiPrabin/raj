const Footer = () => {
  return (
    <div>
      <div className="border-t border-gray-700"></div>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                Dedicated to transforming spaces with tailored design solutions.
                Specializing in interior and exterior designs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">
                  <span className="font-semibold">Email:</span> info@example.com
                </li>
                <li className="text-gray-400">
                  <span className="font-semibold">Phone:</span> +123 456 7890
                </li>
                <li className="text-gray-400">
                  <span className="font-semibold">Location:</span> 123 Design
                  St., Creative City
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Desgned by Prabin Bhattarai
        </div>
      </footer>
    </div>
  );
};

export default Footer;
