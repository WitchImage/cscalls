import Header from './components/header';
import MapCards from './components/map-cards';

const HomeFeature = () => {
    return (
        <main className='h-screen bg-cover bg-fixed snap-y snap-always snap-mandatory overflow-y-auto'>
            <Header />
            <MapCards />
        </main>
    );
};

export default HomeFeature;
