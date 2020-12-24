import React from 'react'
import { Helmet } from 'react-helmet'
import SearchFieldForSearch from './SearchFieldForSearch'
import Lists from './Lists'
function ImageSearch() {
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
                <SearchFieldForSearch />
            </section>
            <section className='home__listings'>
                <Lists />
            </section>
        </main>
    )
}

export default ImageSearch
