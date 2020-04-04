import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.

        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
    return (
        <Layout>
            <h2><strong>Hello, here's my story...</strong></h2>

            <div className={aboutStyle.main}>


            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
                <div className={aboutStyle.texto}>
                    <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>New York, NY</p></div>
                    <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>SUNY Binghamton, B.A. Political Science</p></div>
                    <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p>Javascript, Python, GoLang, HTML, CSS, MySQL</p></div>
                </div>

            </div>
            <div className={aboutStyle.derecha}>
            <p>
            My career started in the Ad Tech world as a media buyer for a large network. I climbed the ranks to manage teams of buyers but found my passion in the Technology that was running the websites we were working with.
            </p>
            <p>
            I self taught myself development and began transitoning to Technical Integrations and Solutions within the company. I built internal tools for QA, automation scripts, and custom integration code for clients. Then I went on to manage a team of Technical Solution Engineers.
            </p>
            <p>
            After being more hands on with the code, I worked my way to a Senior Software Developer role and have been coding ever since.
            </p>
            <p>
            I enjoy continually learning and challenging myself to write more efficient and cleaner software.
            </p>
            <p>
            When I'm not in front of a screen I enjoy doing long distance bike rides, hiking, and yoga.
            </p>

                <div className={aboutStyle.logoContainer}>
                <h3>Some of the tech I use:</h3>
                <img alt="Javascript" className={aboutStyle.logo} src="./logos/javascript.svg" />
                <img alt="NodeJS" className={aboutStyle.logo} src="./logos/nodejs-icon.svg" />
                <img alt="Python" className={aboutStyle.logo} src="./logos/python.png" />
                <img alt="Golang" className={aboutStyle.logo} src="./logos/golang.png" />
                <img alt="MySQL" className={aboutStyle.logo} src="./logos/mysql.png" />
                <img alt="MongoDB" className={aboutStyle.logo} src="./logos/mongodb.png" />
                <img alt="React" className={aboutStyle.logo} src="./logos/react.svg" />
                <img alt="Vue" className={aboutStyle.logo} src="./logos/vue.png" />
                <img alt="AWS" className={aboutStyle.logo} src="./logos/aws.png" />
                <img alt="Docker" className={aboutStyle.logo} src="./logos/docker.png" />
                </div>


                <div className={aboutStyle.socialContainer}>
                <h3>Shoot me a message</h3>
                <a className={aboutStyle.social} href="mailto:colletti.nick@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                <a className={aboutStyle.social} href="https://github.com/ncolleti" target="_blank"><i className="fab fa-github"></i></a>
                <a className={aboutStyle.social} href="https://www.twitter.com/ncolletti85" target="_blank"><i class="fab fa-twitter"></i></a>
                </div>


            </div>

            </div>
        </Layout>
    )
}

export default About