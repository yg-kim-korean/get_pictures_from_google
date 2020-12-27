import React from 'react'
import { Helmet } from 'react-helmet'
import SearchFieldForSearch from './SearchFieldForSearch'
import ImageLists from './ImageLists'
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
                {/* <ImageLists /> */}
            </section>
        </main>
    )
}

export default ImageSearch
