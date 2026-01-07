import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Navigation items
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];

// Magnetic NavLink Component with cursor effect
const NavLink = ({ item }) => {
    const linkRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!linkRef.current) return;
        const rect = linkRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <a
            ref={linkRef}
            href={item.href}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-colors duration-300 group"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
            }}
        >
            {/* Spotlight glow effect */}
            <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                    background: `radial-gradient(circle at ${50 + position.x * 2}% ${50 + position.y * 5}%, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
                }}
            />

            {/* Underline animation */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-300" />

            {/* Text */}
            <span className="relative z-10 font-medium">{item.name}</span>
        </a>
    );
};

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track mouse position for navbar glow effect
    const handleNavMouseMove = (e) => {
        if (!navRef.current) return;
        const rect = navRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <nav
            ref={navRef}
            onMouseMove={handleNavMouseMove}
            className={cn(
                "fixed w-full z-40 transition-all duration-500",
                isScrolled
                    ? "py-3"
                    : "py-5"
            )}
        >
            {/* Glassmorphism background */}
            <div
                className={cn(
                    "absolute inset-0 transition-all duration-500",
                    isScrolled
                        ? "bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5"
                        : "bg-transparent"
                )}
            />

            {/* Cursor glow effect on navbar */}
            <div
                className={cn(
                    "absolute pointer-events-none transition-opacity duration-300",
                    isScrolled ? "opacity-100" : "opacity-0"
                )}
                style={{
                    left: mousePos.x - 100,
                    top: mousePos.y - 100,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                }}
            />

            <div className="container relative z-10 flex items-center justify-between px-6">
                {/* Logo */}
                <a
                    className="text-xl font-bold text-primary flex items-center group"
                    href="#hero"
                >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                        <span className="text-foreground">Kamal</span>{" "}
                        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Vishwakarma
                        </span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10">
                    {navItems.map((item, key) => (
                        <NavLink key={key} item={item} />
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden relative p-3 text-foreground z-50 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    <div className="relative w-6 h-6">
                        <X
                            size={24}
                            className={cn(
                                "absolute inset-0 transition-all duration-300",
                                isMenuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                            )}
                        />
                        <Menu
                            size={24}
                            className={cn(
                                "absolute inset-0 transition-all duration-300",
                                isMenuOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                            )}
                        />
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
                        "transition-all duration-500 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-6">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className={cn(
                                    "text-2xl font-medium text-foreground hover:text-primary transition-all duration-300",
                                    "transform hover:translate-x-2"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    transitionDelay: isMenuOpen ? `${key * 50}ms` : '0ms',
                                    opacity: isMenuOpen ? 1 : 0,
                                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};