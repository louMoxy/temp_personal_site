import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';

import africanChef from '../assets/images/The_African_Chef-thumbnail.jpg';
import veganCookbook from '../assets/images/vegan-cookbook-thumbnail.jpg';
import chessPiece from '../assets/images/chess-piece-thumbnail.jpg';
import rentAHome from '../assets/images/rent-a-home-thumbnail.jpg';
import naomiDavies from '../assets/images/naomi-davies-thumbnail.jpg';
import codepen from '../assets/images/codepen-thumbnail.jpg';

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="work" className="tiles">
                        <article style={{backgroundImage: `url(${africanChef})`}}>
                            <header className="major">
                                <h3>African Chef</h3>
                                <p>A Shopify based e-commerce site</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${veganCookbook})`}}>
                            <header className="major">
                                <h3>Vegan Cookbook</h3>
                                <p>A Jamstack CMS recipe site</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${chessPiece})`}}>
                            <header className="major">
                                <h3>3D Modelling</h3>
                                <p>3D modelling and animation using blender</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${rentAHome})`}}>
                            <header className="major">
                                <h3>Rent A Home Services</h3>
                                <p>A wordpress based property listing subscription site</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${naomiDavies})`}}>
                            <header className="major">
                                <h3>Naomi Davies Design</h3>
                                <p>A wordpress based e-commerce site</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${codepen})`}}>
                            <header className="major">
                                <h3>Codepen</h3>
                                <p>Examples of code experiments which include D3 and three.js</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p>I am a front-end developer who likes SVG, animation, and data visualisation. I work full time, but also freelance on projects I find interesting. Check out my <a href="https://github.com/louMoxy">github</a> to see some examples of my code, and many of my projects are opensource so help yourself.</p>
                            <p>If your interested in working together then please get in touch.</p>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`