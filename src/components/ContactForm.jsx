import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section id="contact" className="pt-20 w-full px-7 md:px-0">
      <div className="text-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter">Contact Me</h2>
          <span className="text-lg text-gray-400">You can fill the form or reach me directly</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-fit mx-auto rounded-full p-0.5 bg-gradient-to-tr from-rose-400 via-fuchsia-400 to-indigo-500"
        >
          <a
            href="mailto:divya.inapakurthi@gmail.com"
            className="flex items-center text-lg gap-4 bg-neutral-900 hover:opacity-90 rounded-full px-6 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-plus"
            >
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              <path d="M19 16v6"></path>
              <path d="M16 19h6"></path>
            </svg>
            <span>divya.inapakurthi@gmail.com</span>
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="opacity-90 space-y-4 max-w-xl mx-auto mt-6"
        >
          {/* Name Input */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex bg-neutral-900 gap-4 border border-neutral-700 py-2 px-4 transition-all focus-within:ring-2 ring-neutral-400 rounded group"
          >
            <div className="text-neutral-700 group-focus-within:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-user-round"
              >
                <path d="M18 20a6 6 0 0 0-12 0" />
                <circle cx="12" cy="10" r="4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <input
              className="flex-1 focus:outline-none bg-transparent"
              placeholder="Your Name"
              required
              name="name"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex bg-neutral-900 gap-4 border border-neutral-700 py-2 px-4 transition-all focus-within:ring-2 ring-neutral-400 rounded group"
          >
            <div className="text-neutral-700 group-focus-within:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <input
              className="flex-1 focus:outline-none bg-transparent"
              type="email"
              placeholder="Contact Email"
              required
              name="email"
            />
          </motion.div>

          {/* Subject Input */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex bg-neutral-900 gap-4 border border-neutral-700 py-2 px-4 transition-all focus-within:ring-2 ring-neutral-400 rounded group"
          >
            <div className="text-neutral-700 group-focus-within:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-square-quote"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 12a2 2 0 0 0 2-2V8H8" />
                <path d="M14 12a2 2 0 0 0 2-2V8h-2" />
              </svg>
            </div>
            <input
              className="flex-1 focus:outline-none bg-transparent"
              placeholder="Subject"
              name="subject"
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.textarea
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            name="message"
            className="w-full border border-neutral-700 bg-neutral-900 rounded px-4 py-2"
            placeholder="Your Message..."
            required
            rows="10"
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="inline-flex gap-2 items-center justify-center font-medium focus:ring-4 focus:ring-gray-300 transition duration-200 active:scale-[98%] shadow hover:shadow-md bg-gray-100 hover:bg-gray-200 text-gray-900 text-base rounded-md px-5 py-2.5 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send size-5"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            Send
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;