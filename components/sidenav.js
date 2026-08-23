import {
    Grid,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from "./themetoggle";

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Experience", href: "/work" },
    { text: "Projects", href: "/projects" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Resume", href: "/resume" },
    { text: "Contact", href: "/contact" },
];

const Sidenav = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid size={{ xs: 12, sm: 4 }} className={isSmallScreen ? "no-border" : "navbarContainer"}>
            <Image
                priority
                src="/profile.jpg"
                className="borderCircle"
                height={isSmallScreen ? 80 : 200}
                width={isSmallScreen ? 80 : 200}
                alt=""
                style={{
                    height: 'auto',
                    width: '100%',
                    maxWidth: isSmallScreen ? '80px' : '200px',
                    objectFit: 'cover',
                    borderRadius: '50%' // if you want circular image
                }}
            />
            <div style={{ paddingTop: isSmallScreen ? 16 : 0 }}>
                <Link href={"/"} className="siteTitle">
                    Kailash Gautham
                </Link>
            </div>
            <span style={{ color: "#808080", fontSize: "0.9rem" }}>Software Engineer</span>
            <ThemeToggle />
            <nav>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    {MENU_LIST.map((menu) => (
                        <Link key={menu.text} href={menu.href} className="navLink">
                            {menu.text}
                        </Link>
                    ))}
                </div>
            </nav>
        </Grid>
    )
};

export default Sidenav;
