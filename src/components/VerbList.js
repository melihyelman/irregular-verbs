import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from "../data"

function VerbList({ word }) {
    const { verb: tempVerb } = useParams();

    const verbs = data.filter(verb => verb.base.includes(word))
    return (
        <div className="verbs__nav-list">
            {verbs.map(verb => (
                <div className="verbs__nav-item" key={verb.base}>
                    <Link to={`/${verb.base}`} className={`active--exact ${tempVerb === verb.base ? "active" : ""}`} > {verb.base}</Link>
                </div>
            ))
            }
        </div >
    )
}

export default VerbList
