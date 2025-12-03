import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-hero-accent/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic Mouse Following Glow */}
      <div
        className="fixed pointer-events-none z-41 transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 150,
          top: mousePos.y - 150,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(190,115,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${scrolled
        ? 'bg-black/70 backdrop-blur-2xl border-b border-hero-accent/40 shadow-[0_8px_32px_rgba(190,115,255,0.3)]'
        : 'bg-black/20 backdrop-blur-xl border-b border-hero-accent/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
        }`}>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-hero-accent/10 via-transparent to-hero-glow/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

        {/* Flowing Light Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hero-accent/20 to-transparent transform rotate-3 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-hero-glow/20 to-transparent transform -rotate-3 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <nav className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-center relative">

            {/* Enhanced Logo */}
            <div className="absolute left-0 flex items-center gap-3 group">
              <div className="relative overflow-hidden">
                <a href="#home" className="flex items-center gap-3 group/logo">
                  {/* Logo Image */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:rotate-6">
                    <img
                      src="/mo-logo.png"
                      alt="Muhammad Owais Logo"
                      className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(190,115,255,0.6)] group-hover/logo:drop-shadow-[0_0_25px_rgba(190,115,255,0.9)] transition-all duration-500"
                    />
                    <div className="absolute top-0 right-0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300">
                      <Sparkles size={14} className="text-hero-accent animate-spin" />
                    </div>
                  </div>


                  {/* Name Text */}
                  <div className="hidden md:block">
                    <div className="text-sm font-black bg-gradient-to-r from-hero-accent via-hero-glow to-purple-400 bg-clip-text text-transparent transition-all duration-500 group-hover/logo:tracking-wider">
                      Muhammad Owais
                    </div>
                    <div className="text-xs text-foreground/60 font-medium tracking-widest uppercase">
                      Portfolio
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-hero-accent/30 to-hero-glow/30 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-2 py-2">
              {navItems.map((item, index) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="relative text-foreground/90 hover:text-white transition-all duration-500 px-6 py-3 text-xl font-semibold tracking-wide block"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}

                    {/* Underline Animation */}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-hero-accent to-hero-glow group-hover:w-4/5 transition-all duration-500"></span>

                    {/* Glow Background */}
                    <span className="absolute -inset-3 scale-0 rounded-2xl bg-gradient-to-r from-hero-accent/10 to-hero-glow/10 transition-all duration-500 group-hover:scale-100 backdrop-blur-sm opacity-50"></span>

                    {/* Hover Particle Effect */}
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-hero-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></span>
                  </a>
                </div>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden absolute right-0 text-foreground hover:text-white transition-all duration-500 hover:scale-105 p-3 rounded-xl backdrop-blur-sm bg-black/10"
            >
              <div className="relative">
                {isMenuOpen ?
                  <X size={26} className="transform rotate-180 transition-transform duration-300" /> :
                  <Menu size={26} className="transform rotate-0 transition-transform duration-300" />
                }

                {/* Button Glow */}
                <div className="absolute inset-0 bg-hero-accent/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </div>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 animate-in slide-in-from-top-5 fade-in duration-500">
              <div className="flex flex-col space-y-2 items-center backdrop-blur-2xl rounded-3xl p-6 border-2 border-hero-accent/30 shadow-[0_0_30px_rgba(190,115,255,0.2)] bg-gradient-to-br from-black/40 to-black/20">

                {/* Mobile Menu Header Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-hero-accent/10 via-transparent to-hero-glow/10 rounded-3xl opacity-50"></div>

                {navItems.map((item, index) => (
                  <div key={item.label} className="relative w-full group">
                    <a
                      href={item.href}
                      className="relative w-full text-foreground/90 hover:text-white transition-all duration-500 px-8 py-4 text-xl group text-center font-semibold rounded-2xl block backdrop-blur-sm"
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      {item.label}

                      {/* Mobile Underline */}
                      <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-hero-accent to-hero-glow group-hover:w-3/4 transition-all duration-500"></span>

                      {/* Mobile Item Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-hero-accent/10 to-hero-glow/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Bottom Border Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hero-accent/50 to-transparent"></div>
      </header>
    </>
  );
};


export default Header;
