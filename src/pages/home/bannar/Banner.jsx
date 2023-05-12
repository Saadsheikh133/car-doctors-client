import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full my-24">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img src={img1} className="w-full rounded-xl " />
                <div className="absolute rounded-xl h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn bg-orange-500 hover:bg-orange-700 mr-4">Discover More</button>
                            <button className="btn text-white btn-outline btn-warning">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn bg-orange-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img src={img2} className="w-full rounded-xl"/>
                <div className="absolute rounded-xl h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-4">Error</button>
                            <button className="btn btn-outline btn-warning">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn bg-orange-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-4">Error</button>
                            <button className="btn btn-outline btn-warning">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn bg-orange-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-4">Error</button>
                            <button className="btn btn-outline btn-warning">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn bg-orange-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[600px]">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-4">Error</button>
                            <button className="btn btn-outline btn-warning">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn bg-orange-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[600px]">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h1 className='text-7xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-error mr-4">Error</button>
                            <button className="btn btn-outline btn-warning">Button</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn bg-orange-500 btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;