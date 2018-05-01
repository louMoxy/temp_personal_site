import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, my name is Louise Moxhay</h1>
            </header>
            <div className="content">
                <p>I am a front-end developer<br />
                working full time as a developer for <a href="https://www.cityscience.com/" target="_blank">City Science</a></p>
                <ul className="actions">
                    <li><a href="#work" className="button next scrolly">Take a look at some of my work</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
