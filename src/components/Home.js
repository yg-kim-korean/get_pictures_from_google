import React from 'react'
import { Helmet } from 'react-helmet'
import SearchField from './SearchField'
import Lists from './Lists'
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
                <SearchField />
            </section>
            <section className='home__listings'>
                <Lists />
            </section>
        </main>
    )
}

export default Home
