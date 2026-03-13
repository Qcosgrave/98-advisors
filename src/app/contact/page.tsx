"use client";

import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrate with your preferred form handler (e.g., Formspree, email API)
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left column */}
            <div className="lg:col-span-5">
              <FadeIn>
                <SectionLabel label="Contact" />
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="font-serif text-5xl md:text-6xl font-light text-ink mt-6 leading-[1.1]">
                  Start a Conversation
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-base font-light text-charcoal leading-relaxed mt-8">
                  Every engagement begins with a confidential discussion about
                  your business, your objectives, and whether our advisory is
                  the right fit.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-sm font-light text-charcoal-light mt-6">
                  Confidential conversations welcome.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="mt-12 space-y-6">
                  <div>
                    <span className="text-xs tracking-widest uppercase text-bronze">
                      Email
                    </span>
                    {/* Update with your actual email */}
                    <p className="text-base font-light text-ink mt-1">
                      advisory@98advisors.com
                    </p>
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase text-bronze">
                      Location
                    </span>
                    <p className="text-base font-light text-ink mt-1">
                      Philadelphia, PA
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right column — form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.2}>
                {submitted ? (
                  <div className="h-full flex items-center">
                    <div>
                      <h3 className="font-serif text-3xl font-light text-ink">
                        Thank you.
                      </h3>
                      <p className="text-base font-light text-charcoal mt-4">
                        We&apos;ve received your message and will be in touch
                        shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="text-xs tracking-widest uppercase text-charcoal-light block mb-3"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full bg-transparent border-b border-rule py-3 text-base font-light text-ink focus:border-bronze focus:outline-none transition-colors duration-300 placeholder:text-charcoal-light/40"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="text-xs tracking-widest uppercase text-charcoal-light block mb-3"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full bg-transparent border-b border-rule py-3 text-base font-light text-ink focus:border-bronze focus:outline-none transition-colors duration-300 placeholder:text-charcoal-light/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs tracking-widest uppercase text-charcoal-light block mb-3"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-rule py-3 text-base font-light text-ink focus:border-bronze focus:outline-none transition-colors duration-300 placeholder:text-charcoal-light/40"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="text-xs tracking-widest uppercase text-charcoal-light block mb-3"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full bg-transparent border-b border-rule py-3 text-base font-light text-ink focus:border-bronze focus:outline-none transition-colors duration-300 placeholder:text-charcoal-light/40"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="text-xs tracking-widest uppercase text-charcoal-light block mb-3"
                      >
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        className="w-full bg-transparent border-b border-rule py-3 text-base font-light text-ink focus:border-bronze focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select an option</option>
                        <option value="sell-side">Sell-Side Advisory</option>
                        <option value="buy-side">Buy-Side Advisory</option>
                        <option value="capital">Capital Advisory</option>
                        <option value="strategic">Strategic Advisory</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="text-xs tracking-widest uppercase text-charcoal-light block mb-3"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full bg-transparent border-b border-rule py-3 text-base font-light text-ink focus:border-bronze focus:outline-none transition-colors duration-300 placeholder:text-charcoal-light/40 resize-none"
                        placeholder="Tell us briefly about your situation."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="text-sm tracking-widest uppercase bg-ink text-ivory px-10 py-5 hover:bg-ink-light transition-colors duration-300 w-full sm:w-auto cursor-pointer"
                      >
                        Send Message
                      </button>
                    </div>

                    <p className="text-xs font-light text-charcoal-light">
                      All inquiries are treated as confidential.
                    </p>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
