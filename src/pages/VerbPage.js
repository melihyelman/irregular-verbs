import React from 'react'
import { useParams } from 'react-router'
import Container from '../components/Container'
import data from "../data";

function VerbPage() {
    const { verb: tempVerb } = useParams();
    const definiteVerb = data.find(verb => verb.base === tempVerb)
    return (
        <Container>
            <main className="verbs__details">
                <div className="app__container">
                    <main main className="verbs__main" >
                        <article>
                            <div className="verb">
                                <div className="verb__crumbs"><a href="/list" title="English Irregular Verbs - Full list" className="">Verb
                                    list</a>&nbsp; {definiteVerb.base}</div>
                                <h1 className="verb__title"><span className="verb__title-label">Irregular Verb</span><br /><span
                                    className="verb__title-word"> {definiteVerb.base}
                                </span></h1>
                                <section>
                                    <h2>Meaning</h2>
                                    <div className="verb__meaning"><b>{definiteVerb.base} &nbsp;</b>– {definiteVerb.meaning}</div>
                                </section>
                                <section>
                                    <h2>Forms</h2>
                                    <ul className="verb__forms">
                                        <li className="verb__forms-item"><span className="verb__forms-label">Infinitive</span><b>{definiteVerb.base}</b></li>
                                        <li className="verb__forms-item"><span className="verb__forms-label">Past Simple</span><b>{definiteVerb.pastSimple}</b></li>
                                        <li className="verb__forms-item"><span className="verb__forms-label">Past Participle</span><b>{definiteVerb.pastParticiple}</b></li>
                                    </ul>
                                </section>
                                <section className="text">
                                    <h2>Examples of the verb <span style={{ color: "red" }}>"{definiteVerb.base}"</span> in sentences</h2>
                                    <ul className="verb__examples">
                                        <li>"{definiteVerb.example}"</li>
                                    </ul>
                                </section>
                            </div>
                        </article>
                    </main>
                </div>
            </main>
        </Container>
    )
}

export default VerbPage
