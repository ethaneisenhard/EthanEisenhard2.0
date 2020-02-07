import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section id = "homePage">
        <section className = "hero">
          <div className = "contain">
            <h2>Hi, my name is Ethan</h2>
            <Img fluid={data.file.childImageSharp.fluid} />
            <p>I am a web developer and photographer from Philadelphia! I build marketing sites, business applications, and create professional photos.</p>
            <p>Currently working at the Toll Brothers.</p>
          </div>
        </section>
        <section className = "about">
          <div className = "contain">
              <h2>About</h2>
          </div>
        </section>
        <section className = "mission">
          <div className = "contain">
            <h2>Mission</h2>
          </div>
        </section>
        <section className = "benefits">
          <div className = "contain">
            <h2>Benefits</h2>
          </div>
        </section>
        <section className = "testimonial">
          <div className = "contain">
            <h2>Testimonials</h2>
          </div>
        </section>
        <section className = "call-to-action">
          <div className = "contain">
            <h2>Call To Action</h2>
            <button>Start For Free</button>
          </div>
        </section>
        <section className = "blog">
          <div className = "contain">
              <h2>Read Our Blog</h2>
              <Link to="/blog">Go to page 2</Link>
          </div>
        </section>
    </section>
    <div>
      {/* <Image /> */}
    </div>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "EthanEisenhard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`