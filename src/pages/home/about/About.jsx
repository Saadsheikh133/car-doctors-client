import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-14 -bottom-20 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 space-y-6'>
                    <h3 className="text-xl font-bold text-red-500">About Us</h3>
                    <h1 className="text-5xl leading-snug font-bold text-[#151515]">We are qualified <br /> & of experience <br />in this field</h1>
                    <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-orange-600 hover:bg-orange-700">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;