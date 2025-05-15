import { useEffect, useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Grid, Switch } from '@mui/material';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(null); // initially null
    const [checked, setChecked] = useState(null); // initially null

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        // fallback if stored theme is missing or unreliable
        const prefersDark = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

        setTheme(initialTheme);
        setChecked(initialTheme === 'light');
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setChecked(newTheme === 'light');
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Avoid rendering until state is initialized (prevents flicker)
    if (theme === null || checked === null) return null;

    return (
        <Grid container alignItems="center">
            <DarkMode />
            <Switch checked={checked} onChange={toggleTheme} />
            <LightMode />
        </Grid>
    );
}
