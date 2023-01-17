export function Switch () { 
    const [theme, setTheme] = useState('light')

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
    };

    return (
        <>
            <span>Light/Dark mode app</span>
            
        
        </>
        
    )
}