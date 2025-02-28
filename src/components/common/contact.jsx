import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="py-16 bg-black-900 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/images/contact.jpg"
            alt="Contact Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-4xl font-bold mb-4">
              Let’s Create Something Beautiful
            </h2>
            <p className="text-lg text-gray-400">
              Reach out to discuss your next project or ask any questions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-black-700 text-white rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 bg-black-700 text-white rounded-lg"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-black-700 text-white rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-semibold">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 bg-black-700 text-white rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-semibold">
                Subject (Optional)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 bg-black-700 text-white rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-800 text-white p-4 rounded-lg mt-6 hover:bg-red-700"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12">
            <p className="text-lg font-semibold mb-4">Contact Info</p>
            <p className="text-lg text-gray-400">
              Email: info@rajeshdesigns.com
            </p>
            <p className="text-lg text-gray-400">Phone: +123 456 7890</p>
            <div className="mt-6 flex justify-start space-x-6">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
