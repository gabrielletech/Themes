import React from 'react'
import useLocalStorage from 'use-local-storage'

export default function App() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

    return (
        <>
            <div className='app' data-theme={theme}>
                <div className='theme-toggle'>
                    <i onClick={switchTheme} className="fas fa-toggle-off"></i>
                </div>
            </div>
        </>
    )
}
