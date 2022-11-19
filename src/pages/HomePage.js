import Header from '../components/Header'
import '../styles/HomePage.css'

const Trending = () => {
    return null 
    // TODO
}

const HomePage = () => {
    return (
        <div>
            <Header />
            <body className='homePageBody'>
                <div className='getStartedBox'>
                    <h2>Connect. Review.</h2>
                    <h2>Publish. Earn.</h2>
                    <p>An app that allows you to submit and review scholary articles</p>
                    <button>get started</button>
                </div>

                <div className='trending'>
                    
                </div>
            </body>
        </div>
    )
}


export default HomePage;