import { FiStar, FiGift, FiHeart } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-around p-5 py-10 overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <main className="relative z-10  mt-4 flex flex-col items-center text-center max-w-[700px] gap-8">
        {/* Logo/Brand */}
        <div className="animate-fade-in border border-white/10 rounded-full bg-white/5 w-[150px] h-[50px] flex items-center justify-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            WishCube
          </h1>
        </div>

        {/* Main headline */}
        <div
          className="flex flex-col items-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            A Universe Where{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Dreams
            </span>{" "}
            Meet{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
        </div>

        <div
          className="flex gap-8 flex-wrap justify-center mt-2 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <FiGift />
            </div>
            <span>Create Wishlists</span>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <FiHeart />
            </div>
            <span>Share Dreams</span>
          </div>
          <div className="flex items-center gap-2.5 text-zinc-400 text-sm">
            <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-zinc-300">
              <FiStar />
            </div>
            <span>Fulfill Wishes</span>
          </div>
        </div>

        {/* Social links */}
        <div
          className="flex flex-col items-center gap-4 mt-4 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-sm text-zinc-500">Follow us on X for updates</p>
          <div className="flex gap-4">
            <Link
              href="https://x.com/wishcubeapp"
              className="flex items-center gap-2"
            >
              <div
                className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-zinc-400 text-xl transition-all duration-300 hover:bg-white/15 hover:border-white/25 hover:text-white hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </div>
              <span className="text-zinc-400">@wishcubeapp</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className=" z-10 mt-12 text-zinc-600 text-sm animate-fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <p>© 2026 WishCube. All rights reserved.</p>
      </footer>
    </div>
  );
}
