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
            />
            <div style={{ paddingTop: isSmallScreen ? 16 : 0 }}>
                <Link href={"/"} >
                    Kailash Gautham
                </Link>
            </div>
            Welcome to my website :)
            <br></br>
            <ThemeToggle />
            <nav>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    {MENU_LIST.map((menu, _) => (
                        <div
                            key={menu.text}
                            style={{ width: "auto" }}
                        >
                            <Link href={menu.href}>
                                {...menu.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </Grid>
    )
};

export default Sidenav;