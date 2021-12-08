import { useState } from 'react';
import Search from '../components/Search'
import VerbList from '../components/VerbList'
import Header from './Header';

function Container({ children }) {
    const [word, setWord] = useState('');
    const [active, setActive] = useState(false);

    return (
        <>
            <Header setActive={setActive} />
            <div className="app__content">
                <div className="verbs">

                    <nav className={`verbs__nav ${active ? "verbs__nav_active" : ""}`} id="irregular-verbs-list">
                        <Search word={word} setWord={setWord} />
                        <VerbList word={word} setActive={setActive} />
                    </nav>
                    {children}
                </div>
            </div>
            <footer className="app__footer"><div className="app__footer-inner"><div className="app__copyright"><a href="https://github.com/melihyelman">© myelman - 2021</a></div></div></footer>
        </>
    )
}

export default Container


