export default function Footer() {
    return (
        <>
            <footer className="px-10 py-6 border-t border-white/5 flex justify-between items-center text-white/20 text-xs">
                <span>© {new Date().getFullYear()} Aaric Putt</span>
            </footer>
        </>
    )
}