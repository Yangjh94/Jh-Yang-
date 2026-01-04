
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { config } from "@/config";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b-2 border-black">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors">
              {config.site.title}<span className="text-primary">.</span>
            </a>
          </Link>
          <nav className="flex gap-8">
            {config.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors",
                    location === item.href ? "text-primary underline decoration-2 underline-offset-4" : "text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="pt-16 min-h-[calc(100vh-4rem)]">
        {children}
      </main>
      <footer className="border-t-2 border-black py-8 bg-black text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold tracking-tight">{config.site.footerText}</div>
          <div className="text-sm text-gray-400">{config.site.footerSubtext}</div>
        </div>
      </footer>
    </div>
  );
}
