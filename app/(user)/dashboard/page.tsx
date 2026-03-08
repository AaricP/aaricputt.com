import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from '@/app/auth/actions'

export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

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
        .card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .card:hover {
          background: rgba(255,255,255,0.05);
        }
      `}</style>

      <div className="min-h-screen bg-[#0f0e0e] text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* background glow */}
        <div className="fixed inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(255,95,126,0.06) 0%, transparent 70%)'
        }} />

        {/* nav */}
        <nav className="border-b border-white/5 px-10 py-5 flex items-center justify-between">
          <span className="font-syne gradient-text font-extrabold text-xl tracking-tight">AP Freelance</span>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-sm font-light">{user.email}</span>
            <form action={signOut}>
              <button type="submit" className="text-white/40 hover:text-white transition-colors text-sm">
                Sign out
              </button>
            </form>
          </div>
        </nav>

        {/* main */}
        <main className="px-10 py-16 max-w-5xl mx-auto">

          {/* header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 text-[#ff7c5c] text-xs font-medium tracking-[0.2em] uppercase mb-3">
              <span className="block w-6 h-px bg-[#ff7c5c]" />
              Dashboard
            </div>
            <h1 className="font-syne font-extrabold text-4xl tracking-tight">
              Welcome back.
            </h1>
          </div>

          {/* stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/5 mb-12">
            {[
              { label: 'Active Projects', value: '0' },
              { label: 'Messages', value: '0' },
              { label: 'Invoices', value: '0' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0f0e0e] px-8 py-8 hover:bg-white/2 transition-colors">
                <div className="font-syne font-extrabold text-4xl gradient-text mb-1">{stat.value}</div>
                <div className="text-white/35 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Projects', desc: 'View and manage your active projects.' },
              { title: 'Messages', desc: 'Check your latest messages and updates.' },
              { title: 'Invoices', desc: 'Track payments and download invoices.' },
              { title: 'Settings', desc: 'Update your account and preferences.' },
            ].map((item) => (
              <div key={item.title} className="card p-8 transition-colors cursor-pointer">
                <h3 className="font-syne font-bold text-lg tracking-tight mb-2">{item.title}</h3>
                <p className="text-white/35 text-sm font-light leading-relaxed">{item.desc}</p>
                <div className="mt-6 text-[#ff7c5c] text-xs tracking-widest uppercase">
                  Coming soon →
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </>
  )
}