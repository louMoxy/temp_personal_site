import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <p>{props.thanks}</p>
                <form
                method="post"
                data-netlify="true"
                name="contact"
                onSubmit={props.handleSubmit}
                hidden={(props.thanks ? true : false)}
                >
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={props.handleChange} required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={props.handleChange} required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" onChange={props.handleChange} required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:louisemoxy@gmail.com">louisemoxy@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-github"></span>
                        <h3>Github</h3>
                        <a href="https://github.com/louMoxy" target="_blank">https://github.com/louMoxy</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-codepen"></span>
                        <h3>Codepen</h3>
                        <a href="https://codepen.io/moxy/" target="_blank">https://codepen.io/moxy/</a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
