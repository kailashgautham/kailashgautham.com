import { useEffect, useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';
import { Grid, Switch } from '@mui/material';
export default function ThemeToggle() {

    const [theme, setTheme] = useState('light');
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', defaultTheme);
        setTheme(defaultTheme);
        setChecked(defaultTheme === 'light' ? true : false);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
        setChecked(!checked);
    };

    return (
        <div>
            <Grid
                container
                alignItems="center"
                display="flex"
            >
                <DarkMode />
                <Switch checked={checked} onClick={toggleTheme}/>
                <LightMode />
            </Grid>
        </div>
    );
}
