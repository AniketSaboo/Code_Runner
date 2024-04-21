

//components
import Code from './Code';
import Result from './Result';
import Header from './Header';

const Home = () => {
    return (
        <>
            <Header />
            <div style={{display: 'flex', flexDirection: 'row', height: '90%' }}>
            <Code />
            <Result />

            </div>
        </>
    )
}

export default Home;