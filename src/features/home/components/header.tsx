import { MouseIcon } from '@/common/components';
import Wallpaper from '@public/wallpaper.jpg';

const Header = () => {
    return (
        <header
            className='relative w-full h-screen snap-start flex items-center justify-center lg:justify-start xl:justify-end bg-cover'
            style={{
                backgroundImage: `linear-gradient(to bottom, transparent, var(--background-start-color)), url(${Wallpaper.src})`,
            }}
        >
            <div className='w-full lg:w-1/2 flex flex-col items-center gap-4'>
                <h1 className='text-primary'>Counter-Strike Calls</h1>
                <span className='text-4xl'>Stop noobing around</span>
                <div className='absolute bottom-0 mb-16 flex flex-col items-center gap-3'>
                    <MouseIcon />
                    <p>Search for the best utilities in CS2 maps</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
