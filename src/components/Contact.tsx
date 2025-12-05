'use client'

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { socialLinks as socialData } from "@/data/links";
import { contactInfo as contactData } from "@/data/contact";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    fieldErrors: Record<string, string[] | undefined>
    formErrors: string[]
  }>({ fieldErrors: {}, formErrors: [] });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear field error on change
    if (errors.fieldErrors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        fieldErrors: { ...prev.fieldErrors, [e.target.name]: undefined },
      }))
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.subject}\n\n${formData.message}`,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        // Surface server-side validation errors (Zod flatten output)
        if (json?.errors) {
          setErrors({
            fieldErrors: json.errors.fieldErrors ?? {},
            formErrors: json.errors.formErrors ?? [],
          })
        } else {
          alert("Please check your input and try again.");
        }
        setIsSubmitting(false);
        return;
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({ fieldErrors: {}, formErrors: [] })
    } catch (err) {
      console.error("Contact form submission error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIconById = (id: string): JSX.Element => {
    if (id === "email") return <Mail className="w-6 h-6" />;
    if (id === "phone") return <Phone className="w-6 h-6" />;
    return <MapPin className="w-6 h-6" />;
  };

  const contactInfo = contactData.map((item) => ({
    icon: getIconById(item.id),
    label: item.label,
    value: item.value,
    link: item.link ?? null,
  }));

  const getIcon = (linkId: string) => {
    if (linkId === "github") return <GitHubLogoIcon className="w-5 h-5" />;
    if (linkId === "linkedin") return <LinkedInLogoIcon className="w-5 h-5" />;
    if (linkId === "email") return <Mail className="w-5 h-5" />;
    return <TwitterLogoIcon className="w-5 h-5" />;
  };

  const getHoverColor = (linkId: string) => {
    if (linkId === "github") return "hover:bg-gray-900";
    if (linkId === "linkedin") return "hover:bg-blue-600";
    if (linkId === "email") return "hover:bg-primary-600";
    return "hover:bg-blue-400";
  };

  const socialLinks = socialData.map((link) => {
    const icon = getIcon(link.id);
    const color = getHoverColor(link.id);
    return { icon, label: link.label, url: link.href, color };
  });

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your next project? Let&apos;s discuss how we can
              work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Let&apos;s Connect
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I&apos;m always interested in new opportunities and exciting
                  projects. Whether you&apos;re looking for a full-stack
                  developer, need technical consultation, or just want to say
                  hello, I&apos;d love to hear from you.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I typically respond within 24 hours and am available for both
                  remote and on-site work.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`p-3 bg-white rounded-lg text-gray-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-800 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.fieldErrors?.name?.length ? (
                        <p className="mt-2 text-sm text-red-600">{errors.fieldErrors.name[0]}</p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                      {errors.fieldErrors?.email?.length ? (
                        <p className="mt-2 text-sm text-red-600">{errors.fieldErrors.email[0]}</p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-800 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.fieldErrors?.message?.length ? (
                      <p className="mt-2 text-sm text-red-600">{errors.fieldErrors.message[0]}</p>
                    ) : null}
                  </div>

                  {errors.formErrors?.length ? (
                    <div className="text-sm text-red-600">
                      {errors.formErrors[0]}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
