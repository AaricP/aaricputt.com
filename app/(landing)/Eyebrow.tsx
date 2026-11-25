// Small section label: neutral text, with the accent color carried by the rule, not the text.
export default function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
	return (
		<p className={`flex items-center gap-3 text-sm font-medium text-zinc-500 mb-3 ${className}`}>
			<span aria-hidden className="block h-0.5 w-6 rounded-full bg-accent-500" />
			{children}
		</p>
	);
}
