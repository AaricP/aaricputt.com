import { signIn, signUp } from '@/app/auth/actions'
import Link from 'next/link';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string; mode?: string }>
}) {
  const params = await searchParams
  const isSignUp = params.mode === 'signup'

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
        .gradient-btn {
          background: linear-gradient(135deg, #ff7c5c, #ff5f7e);
        }
        .input-field {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: white;
          transition: border-color 0.2s;
        }
        .input-field::placeholder { color: rgba(255,255,255,0.2); }
        .input-field:focus {
          outline: none;
          border-color: rgba(255, 124, 92, 0.4);
        }
      `}</style>

      <div
        className="min-h-screen bg-[#0f0e0e] flex items-center justify-center px-6"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* background glow */}
        <div className="fixed inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,95,126,0.07) 0%, transparent 70%)'
        }} />

        <div className="w-full max-w-sm relative">

          {/* logo */}
          <Link href="/" className="font-syne gradient-text font-extrabold text-xl tracking-tight block mb-12">
            AP Freelance
          </Link>

          {/* heading */}
          <h1 className="font-syne font-extrabold text-3xl tracking-tight text-white mb-1">
            {isSignUp ? 'Create an account' : 'Welcome back'}
          </h1>
          <p className="text-white/40 text-sm font-light mb-8">
            {isSignUp ? 'Sign up to get started' : 'Sign in to your account'}
          </p>

          {/* feedback messages */}
          {params.error && (
            <div className="mb-6 px-4 py-3 border border-red-500/20 bg-red-500/5 text-red-400 text-sm">
              {params.error}
            </div>
          )}
          {params.message && (
            <div className="mb-6 px-4 py-3 border border-[#ff7c5c]/20 bg-[#ff7c5c]/5 text-[#ff7c5c] text-sm">
              {params.message}
            </div>
          )}

          {/* form */}
          <form action={isSignUp ? signUp : signIn} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-white/30 text-xs tracking-widest uppercase">Email</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="input-field px-4 py-3 text-sm font-light"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/30 text-xs tracking-widest uppercase">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="input-field px-4 py-3 text-sm font-light"
              />
            </div>

            <button
              type="submit"
              className="gradient-btn text-white font-medium py-3 mt-2 hover:opacity-85 transition-opacity text-sm"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* toggle sign in / sign up */}
          <p className="text-white/30 text-sm text-center mt-6 font-light">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <Link
              href={isSignUp ? '/login' : '/login?mode=signup'}
              className="text-[#ff7c5c] hover:opacity-80 transition-opacity"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </Link>
          </p>

        </div>
      </div>
    </>
  )
}