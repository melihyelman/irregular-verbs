import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from "../data"

function VerbList() {
    const [word, setWord] = useState('')
    const filtered = data.filter(verb => verb.base.toLowerCase().includes(word.toLowerCase()))
    return (
        <>
            <header className="app__header">
                <div className="app__header-inner"><a href="/" className="app__logo">English Irregular Verbs</a></div>
            </header>
            <div className="app__content">
                <div className="app__container">
                    <div className="verbs__list-head">
                        <div className="flex-row">
                            <div className="flex-col flex-col_3">
                                <h1 className="verbs__list-title">Full list</h1>
                            </div>
                            <div className="flex-col flex-col_9">
                                <div className="verbs__search">
                                    <input type="text" placeholder="Search verb" value={word} onChange={(e) => setWord(e.target.value)} /><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                        <path
                                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                        </path>
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                    </svg></div>
                            </div>
                        </div>
                        <div className="verbs__list-subhead">
                            <div className="flex-row">
                                <div className="flex-col">Infinitive</div>
                                <div className="flex-col">Past Simple</div>
                                <div className="flex-col">Past Participle</div>
                            </div>
                        </div>
                    </div>
                    <div className="verbs__full-list">
                        <div className="verbs__list">

                            {filtered.length > 0 ? filtered.map(verb => (
                                <div className="flex-row verbs__list-item" key={verb.base}>
                                    <div className="flex-col"><Link to={`/${verb.base}`}  > {verb.base}</Link></div>
                                    <div className="flex-col">{verb.pastSimple}</div>
                                    <div className="flex-col">{verb.pastParticiple}</div>
                                </div>
                            )) : <p>This page contains full list of English irregular verbs.
                                Click on any verb to view more information about it.
                                Here you can find the meaning, forms and usage examples for each of the verbs.
                                Also there is a useful fast search feature at the top of the page.</p>}

                        </div>
                    </div>
                </div>
            </div>
            <footer className="app__footer">
                <div className="app__footer-inner">
                    <div className="app__copyright"><a href="https://github.com/melihyelman">© myelman - 2021</a></div>
                </div>
            </footer>
        </>
    )
}

export default VerbList
