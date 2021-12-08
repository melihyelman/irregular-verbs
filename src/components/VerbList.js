import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from "../data"

function VerbList({ word, setActive }) {
    const { verb: tempVerb } = useParams();

    const verbs = data.filter(verb => verb.base.toLowerCase().includes(word.toLowerCase()))
    return (
        <div className="verbs__nav-list">
            {verbs.map(verb => (
                <div className="verbs__nav-item" key={verb.base}>
                    <Link to={`/${verb.base}`} className={`active--exact ${tempVerb === verb.base ? "active" : ""}`} onClick={() => setActive((prev) => !prev)} > {verb.base}</Link>
                </div>
            ))
            }
        </div >
    )
}

export default VerbList
