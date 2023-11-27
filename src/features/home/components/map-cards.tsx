import { type FC } from 'react';
import AncientCardImage from '@public/cs-maps/ancient/ancient-card.webp';
import AncientLogoImage from '@public/cs-maps/ancient/ancient-logo.webp';
import AnubisCardImage from '@public/cs-maps/anubis/anubis-card.webp';
import AnubisLogoImage from '@public/cs-maps/anubis/anubis-logo.webp';
import InfernoCardImage from '@public/cs-maps/inferno/inferno-card.webp';
import InfernoLogoImage from '@public/cs-maps/inferno/inferno-logo.webp';
import MirageCardImage from '@public/cs-maps/mirage/mirage-card.webp';
import MirageLogoImage from '@public/cs-maps/mirage/mirage-logo.webp';
import NukeCardImage from '@public/cs-maps/nuke/nuke-card.webp';
import NukeLogoImage from '@public/cs-maps/nuke/nuke-logo.webp';
import OverpassCardImage from '@public/cs-maps/overpass/overpass-card.webp';
import OverpassLogoImage from '@public/cs-maps/overpass/overpass-logo.webp';
import VertigoCardImage from '@public/cs-maps/vertigo/vertigo-card.webp';
import VertigoLogoImage from '@public/cs-maps/vertigo/vertigo-logo.webp';
import MapCard from './map-card';

const MapCards: FC = () => {
    return (
        <section className='p-24 w-full min-h-screen grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-14 snap-start'>
            <MapCard
                mapName='Ancient'
                mapImageURL={AncientCardImage.src}
                mapLogoURL={AncientLogoImage.src}
            />
            <MapCard
                mapName='Anubis'
                mapImageURL={AnubisCardImage.src}
                mapLogoURL={AnubisLogoImage.src}
            />
            <MapCard
                mapName='Inferno'
                mapImageURL={InfernoCardImage.src}
                mapLogoURL={InfernoLogoImage.src}
            />
            <MapCard
                mapName='Mirage'
                mapImageURL={MirageCardImage.src}
                mapLogoURL={MirageLogoImage.src}
            />
            <MapCard
                mapName='Nuke'
                mapImageURL={NukeCardImage.src}
                mapLogoURL={NukeLogoImage.src}
            />
            <MapCard
                mapName='Overpass'
                mapImageURL={OverpassCardImage.src}
                mapLogoURL={OverpassLogoImage.src}
            />
            <MapCard
                mapName='Vertigo'
                mapImageURL={VertigoCardImage.src}
                mapLogoURL={VertigoLogoImage.src}
            />
        </section>
    );
};

export default MapCards;
