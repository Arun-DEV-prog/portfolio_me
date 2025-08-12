import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const budgetOptions = [
  "< $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "> $20,000",
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    messenger: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.email) errs.email = "Please fill out this field.";
    if (!formData.phone) errs.phone = "Please fill out this field.";
    return errs;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleBudgetClick = (option) => {
    setFormData((prev) => ({ ...prev, budget: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setSending(true);

      emailjs
        .send(
          "service_6f7zemq", // your EmailJS service ID
          "template_kfu0t79", // your EmailJS template ID
          {
            from_email: formData.email,
            phone: formData.phone,
            message: formData.messenger,
            budget: formData.budget || "Not specified",
          },
          "ZuMMonymdhbvwUov4" // your EmailJS public key
        )
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Form submitted!",
            text: "Thank you for contacting me. I will get back to you soon.",
            confirmButtonColor: "#6366f1", // Indigo-600 color
          });
          setFormData({ email: "", phone: "", messenger: "", budget: "" });
          setSending(false);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send. Please try again later.",
            confirmButtonColor: "#ef4444", // Red-500 color
          });
          setSending(false);
        });
    } else {
      setErrors(errs);
    }
  };

  return (
    <div className="md:max-w-8/12 mx-auto p-8 bg-[#191615] bg-opacity-70 rounded-xl shadow-lg text-white font-sans">
      <h2 className="text-4xl font-semibold font-playwrite text-center mb-8">
        Contact For Work
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <label
          className="block mb-1 font-playwrite font-semibold"
          htmlFor="email"
        >
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter the Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full bg-transparent border-b border-gray-600 focus:border-indigo-500 outline-none py-2 mb-1 ${
            errors.email ? "border-red-600" : ""
          }`}
          required
          disabled={sending}
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-4">{errors.email}</p>
        )}

        {/* Phone */}
        <label
          className="block mb-1 font-playwrite font-semibold"
          htmlFor="phone"
        >
          Your Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full bg-transparent border-b border-gray-600 focus:border-indigo-500 outline-none py-2 mb-1 ${
            errors.phone ? "border-red-600" : ""
          }`}
          required
          disabled={sending}
        />
        {errors.phone && (
          <p className="text-red-600 text-sm mb-4">{errors.phone}</p>
        )}

        {/* Messenger */}
        <label
          className="block font-playwrite mb-1 font-semibold"
          htmlFor="messenger"
        >
          Messenger
        </label>
        <textarea
          id="messenger"
          name="messenger"
          placeholder="Your message"
          rows="4"
          value={formData.messenger}
          onChange={handleChange}
          className="w-full bg-transparent border border-gray-600 rounded-md p-2 mb-6 resize-none focus:border-indigo-500 outline-none"
          disabled={sending}
        />

        {/* Budget Options */}
        <div className="mb-8">
          <p className="mb-2 font-playwrite font-semibold">Budget</p>
          <div className="flex flex-wrap gap-3">
            {budgetOptions.map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => handleBudgetClick(option)}
                className={`px-4 py-2 font-playwrite rounded-full border border-gray-600 text-sm hover:border-indigo-500 transition ${
                  formData.budget === option
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "text-gray-300"
                }`}
                disabled={sending}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={sending}
          className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition disabled:opacity-50"
        >
          {sending ? "Sending..." : "Get Started"} <MdArrowForward size={24} />
        </button>
      </form>

      {/* Direct Contact Section */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-white font-playwrite font-semibold text-lg">
          Or contact me directly:
        </p>
        <a
          href="tel:+1234567890"
          className="block text-indigo-500 font-semibold hover:underline"
        >
          📞 +8801866999458
        </a>
        <a
          href="https://wa.me/8801866999458"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-green-500 font-semibold hover:underline"
        >
          💬 WhatsApp Chat
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
