import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Quran Quotes", slug: "quran-quotes" },
  { name: "Hadith Quotes", slug: "hadith-quotes" },
  { name: "Islamic Reminders", slug: "islamic-reminders" },
  { name: "Duas", slug: "duas" },
  { name: "Sabr & Patience", slug: "sabr-patience" },
  { name: "Love in Islam", slug: "love-in-islam" },
  { name: "Death & Akhirah", slug: "death-akhirah" },
  { name: "Morning & Evening Duas", slug: "morning-evening-duas" },
];

const staticPages = [
  { name: "About Us", slug: "about" },
  { name: "Contact Us", slug: "contact" },
  { name: "Privacy Policy", slug: "privacy" },
  { name: "Disclaimer", slug: "disclaimer" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground hidden sm:block">
                Daily Islamic Quotes
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
              >
                Home
              </Link>
              <div className="relative group">
                <button className="nav-link flex items-center gap-1">
                  Categories
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-xl shadow-xl p-2 min-w-[200px]">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/category/${cat.slug}`}
                        className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "nav-link-active" : ""}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "nav-link-active" : ""}`}
              >
                Contact
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <div className="container mx-auto container-padding py-4 space-y-4">
              <Link
                to="/"
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-muted-foreground">Categories</p>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/category/${cat.slug}`}
                    className="block py-2 pl-4 nav-link text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 border-t border-border space-y-2">
                {staticPages.map((page) => (
                  <Link
                    key={page.slug}
                    to={`/${page.slug}`}
                    className="block py-2 nav-link text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border mt-16">
        <div className="container mx-auto container-padding py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">Daily Islamic Quotes</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Inspiring Muslims worldwide with beautiful Islamic quotes from the Quran and Hadith.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.slice(0, 4).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/category/${cat.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Categories */}
            <div>
              <h3 className="font-semibold mb-4">More</h3>
              <ul className="space-y-2">
                {categories.slice(4).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/category/${cat.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {staticPages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      to={`/${page.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Daily Islamic Quotes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
