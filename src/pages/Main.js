import React from 'react'

import { Navbar, Footer, Landing, About, Skills, Testimonials } from '../components'

function Main() {
    return (
        <div>
            <Navbar />

        
            <Landing />
            <About />
            {/* Education */}
            <Skills />
            {/* Experience */}
            {/* PROJECTS */}
            {/* SERVICES */}
            <Testimonials />
            {/* BLOG */}
            {/* CONTACT */}
            <Footer />
        </div>
    )
}

export default Main
