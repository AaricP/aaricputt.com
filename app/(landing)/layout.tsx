import Footer from "./Footer";
import Navigation from "./Navigation";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
