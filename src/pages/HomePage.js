import Container from '../components/Container'


function HomePage() {

    return (
        <Container >
            <main className="verbs__details">
                <div className="app__container">
                    <article className="verb text">
                        <h1>English Irregular Verbs</h1>
                        <p>When you begin learning the English language one of the first knowledge you get is that it has different
                            tenses. Verbs have three tenses: past, present, and future. It means that verbs change their forms
                            depending on the tense used in the sentence.</p>
                        <h2>What are irregular verbs?</h2>
                        <p>It would be great if all the verbs had the only <b>form </b>to change with <b>‘-ed’ </b>ending in past
                            tenses. The majority of the verbs really have this form when we talk about the Past. For example:</p>
                        <ul>
                            <li>I played football yesterday.</li>
                            <li>My friend helped me do the task.</li>
                            <li>Alice enjoyed traveling by car.</li>
                        </ul>
                        <p>But there is a list of so called <b>irregular verbs </b>that has to be memorized. Unfortunately, there is
                            no other way to learn them and there is no way to avoid them in our speech. We use many of them in our
                            everyday life.</p>
                        <p>Irregular verbs do not change their forms as regular ones. That means, it would be a mistake if you say
                            ‘He <s>eated </s>two apples’ instead of ‘He <b>ate </b>two apples’. Here you can find the <a
                                href="/list" title="English Irregular Verbs - Full list">full list of irregular verbs.</a></p>
                        <h2>How to learn irregular verbs</h2>
                        <p>Moreover, there is no logic to help you learn irregular verbs. You need to be brave and patient — this
                            list needs to be memorized.</p>
                        <p>Irregular verbs do not follow the simple system of adding some letters to the end of the word. But each
                            attentive student can see that there are verbs that change forms in the same way. For example:</p>
                        <ul>
                            <li>drink — drank — drunk</li>
                            <li>begin — began — begun</li>
                            <li>grow — grew — grown</li>
                        </ul>
                        <p>You can form the list of irregular verbs as you want in order to make the process of memorization easier
                            for you. Another hint is to make up flashcards that you can take with you every day and use them in your
                            spare time.</p>
                        <h2>Alternative way to learn irregular verbs</h2>
                        <p>You can use this website as a reference. It has a list of irregular verbs, cards with their forms,
                            meanings and examples. </p>
                        <p></p>
                    </article>
                </div>
            </main>
        </Container>
    )
}

export default HomePage
