import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#f06292',
            main: '#ec407a',
            dark: '#ba2d65',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff4081',
            main: '#f50057',
            dark: '#c51162',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif',
        ].join(','),
        h1: {
            fontSize: '3rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1.25rem',
        },
        body2: {
            fontSize: '1rem',
        },
    },
});

export default theme;