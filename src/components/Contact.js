import React from 'react'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thanks: false
        };
      }
    
      handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }
    
      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contactForm", ...this.state })
        })
          .then(() => this.setState({'thanks': 'Thanks for getting in contact.'}))
          .catch(error => alert(error));
        e.preventDefault();
      };
    render() {
        return (
        <section id="contact">
        <div className="inner">
            <section>
                <p>{this.state.thanks}</p>
                <form
                method="post"
                data-netlify="true"
                name="contactForm"
                onSubmit={this.handleSubmit}
                data-netlify-honeypot="bot-field"
                hidden={(this.state.thanks ? true : false)}
                >
                <div hidden>
                    <label>Don’t fill this out: <input name="bot-field" onChange={this.handleChange} /></label>
                </div>
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={this.handleChange} required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.handleChange} required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" onChange={this.handleChange} required></textarea>
                    </div>
                    <ul className="actions">
                        <li><button type="submit" className="special">Send Message</button></li>
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
    </section>);
    }
}
