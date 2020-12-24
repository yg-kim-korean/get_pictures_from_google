import React from 'react'
import { Helmet } from 'react-helmet'
import SearchFieldForHome from './SearchFieldForHome'

function Home() {
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
            
        </main>
    )
}

export default Home
