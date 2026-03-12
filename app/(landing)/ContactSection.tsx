"use client";

import { useState } from "react";

export default function ContactSection() {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  setSent(true);
};

    return (
        <section id="contact" className="bg-[#1a1818] px-10 py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                <div>
                    <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
                        <span className="block w-6 h-px bg-[#ff7c5c]" />
                        Get In Touch
                    </div>
                    <h2 className="font-syne font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-tight mb-6">
                        Open to new opportunities.
                    </h2>
                    <p className="text-white/45 leading-relaxed font-light mb-8 max-w-sm">
                        I'm currently looking for full-time role in web development. If you think I'd be a good fit for your team, I'd love to hear from you.
                    </p>
                </div>

                <div>
                    {sent ? (
                        <div className="text-[#ff7c5c] text-sm p-4 border border-[#ff7c5c]/20 bg-[#ff7c5c]/5">
                            Thanks for reaching out — I'll get back to you soon.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {[
                                { label: "Your Name", type: "text", key: "name", placeholder: "John Doe" },
                                { label: "Work Email", type: "email", key: "email", placeholder: "john@company.com" },
                            ].map((f) => (
                                <div key={f.key} className="flex flex-col gap-1.5">
                                    <label className="text-white/30 text-xs tracking-widest uppercase">{f.label}</label>
                                    <input
                                        type={f.type}
                                        placeholder={f.placeholder}
                                        required
                                        className="bg-white/4 border border-white/8 text-white placeholder-white/20 px-4 py-3 text-sm font-light outline-none focus:border-[#ff7c5c]/40 transition-colors"
                                        onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                                    />
                                </div>
                            ))}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/30 text-xs tracking-widest uppercase">Message</label>
                                <textarea
                                    placeholder="Tell me about the role or opportunity..."
                                    required
                                    rows={5}
                                    className="bg-white/4 border border-white/8 text-white placeholder-white/20 px-4 py-3 text-sm font-light outline-none focus:border-[#ff7c5c]/40 transition-colors resize-y"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button
                                type="submit"
                                className="self-start bg-gradient-to-br from-[#ff7c5c] to-[#ff5f7e] text-white font-medium px-8 py-3.5 hover:opacity-85 transition-opacity"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}