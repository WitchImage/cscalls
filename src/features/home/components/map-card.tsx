import { Card } from '@/common/components';
import { type FC } from 'react';
import Image from 'next/image';

interface MapCardProps {
    mapName: string;
    mapImageURL: string;
    mapLogoURL: string;
}

const MapCard: FC<MapCardProps> = ({ mapName, mapImageURL, mapLogoURL }) => {
    return (
        <Card
            bgImage={mapImageURL}
            clickable
            className='relative h-[420px] transition-all hover:shadow-full lg:hover:translate-y-[-1em] justify-center'
        >
            <Image
                src={mapLogoURL}
                width={125}
                height={0}
                alt='Map logo'
            />
            <h3 className='absolute bottom-0 mb-6'>{mapName}</h3>
        </Card>
    );
};

export default MapCard;
