import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import SearchFieldForHome from '../components/SearchFieldForHome'

function HomePage() {
    return (
        <main className='home'>
            <Helmet>
                <title>Home</title>
                <meta
                    name='description'
                    content='검색 홈'
                />
            </Helmet>
            <section className='home__search'>
                <SearchFieldForHome />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}

export default HomePage
