
function Header({ setActive }) {
    return (
        <header className="app__header">
            <div className="app__header-inner">
                <a href="/" className="app__logo">English Irregular Verbs</a>
                <div className="nav-btn" onClick={() => setActive((prev) => !prev)}></div>
            </div>
        </header>
    )
}

export default Header
