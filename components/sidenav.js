import {
    Grid,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Work Experience", href: "/work" },
    { text: "Projects", href: "/projects" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" },
];

const Sidenav = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid item xs={12} sm={4} className={isSmallScreen ? "no-border" : "navbarContainer"} >
            <Image
                priority
                src="/profile.jpg"
                className="borderCircle"
                height={200}
                width={200}
                alt=""
            />
            <Link href={"/"} >
                <p className="logo">Kailash Gautham</p>
            </Link>
            <p>Welcome to my website :)</p>
            <br></br>
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