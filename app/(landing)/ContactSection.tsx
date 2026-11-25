"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";

const inputClass =
	"w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20";

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
		<section id="contact" className="border-t border-zinc-200 py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
				<div>
					<Eyebrow>Get in touch</Eyebrow>
					<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-5">Looking for a developer?</h2>
					<p className="text-zinc-600 leading-relaxed max-w-sm mb-8">
						Whether you&apos;re hiring for a team, exploring collaborations, or need help bringing a project to life, I&apos;d love to connect.
					</p>
					<div className="flex gap-5 text-sm font-medium">
						<a href="https://linkedin.com/in/aaricputt" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
							LinkedIn ↗
						</a>
						<a href="https://github.com/aaricp" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
							GitHub ↗
						</a>
					</div>
				</div>

				<div>
					{sent ? (
						<div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-700">
							Thanks for reaching out — I&apos;ll get back to you soon.
						</div>
					) : (
						<form onSubmit={handleSubmit} className="flex flex-col gap-5">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
								{[
									{ label: "Name", type: "text", key: "name", placeholder: "Jane Doe" },
									{ label: "Email", type: "email", key: "email", placeholder: "jane@company.com" },
								].map((f) => (
									<div key={f.key} className="flex flex-col gap-1.5">
										<label htmlFor={`contact-${f.key}`} className="text-sm font-medium text-zinc-700">{f.label}</label>
										<input
											id={`contact-${f.key}`}
											type={f.type}
											placeholder={f.placeholder}
											required
											className={inputClass}
											onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
										/>
									</div>
								))}
							</div>
							<div className="flex flex-col gap-1.5">
								<label htmlFor="contact-message" className="text-sm font-medium text-zinc-700">Message</label>
								<textarea
									id="contact-message"
									placeholder="Tell me about the role or opportunity..."
									required
									rows={5}
									className={`${inputClass} resize-y`}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								/>
							</div>
							<button
								type="submit"
								className="self-start rounded-full bg-accent-600 text-white text-sm font-medium px-6 py-3 hover:bg-accent-700 transition-colors"
							>
								Send message
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
