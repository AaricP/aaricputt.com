import Footer from "./Footer";
import Navigation from "./Navigation";

export default function LandingLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
        .font-syne { font-family: 'Syne', sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #ff7c5c, #ff5f7e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-bg {
          background: radial-gradient(ellipse 60% 60% at 80% 50%, rgba(255,95,126,0.1) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,124,92,0.07) 0%, transparent 60%);
        }
      `}</style>

      <div className="bg-[#0f0e0e] text-white min-h-screen overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
}