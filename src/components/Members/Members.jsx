import React from 'react';

const Members = () => {
    return (
        <div className='mb-24 max-w-screen-md mx-auto'>
            <h1 className='text-2xl md:text-5xl text-center font-bold mt-24'>We build finance software to <br /> empower business</h1>
            <div className='mx-auto w-48 h-12 my-8'>
            <button className='bg-[#47C867] w-48 h-12 rounded-lg font-semibold'>View opportunities</button>
            </div>
            <div className="mt-8">
            <div className="flex flex-col sm:flex-row">
                {/* First row */}
                <div className="flex-1">
                    <img
                        src="https://img.freepik.com/free-photo/indoor-portrait-bearded-young-man-with-trendy-hairstyle_273609-3961.jpg?w=1380&t=st=1702203991~exp=1702204591~hmac=b9bc750ac24ff6e68358432c76eb4de51db75e41672ce2b6631bc5c558f0b91b"
                        alt="Small"
                        className="w-full md:w-52 md:h-36 object-cover md:ml-44 mt-16"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=996&t=st=1702202537~exp=1702203137~hmac=dc3d3ef0def2530177f97632e3bfc006110c7ce17f8cd0c8f8ff47012adceb4c"
                        alt="Big"
                        className="w-full object-cover mt-5 mb-5 md:mb-0"
                    />
                </div>

                {/* Second row */}
                <div className="flex-1 ml-2">
                    <img
                        src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1702202552~exp=1702203152~hmac=141d7a7a54278dad0599470da0ce9f9cf0e5ca69ed45de58d038f4967cb7afb2"
                        alt="Big"
                        className="w-80 h-72 object-cover ml-5 mb-2"
                    />
                    <div className='flex flex-col md:flex-row'>
                    <img
                        src="https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022626.jpg?w=1380&t=st=1702202575~exp=1702203175~hmac=a4337587bb4c1bc3a91a96793cde9394529c2f3aa2582d67bf9f1f51cce2cc9a"
                        alt="Small"
                        className="md:w-40 md:h-32 object-cover mx-5 mt-5"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg?w=740&t=st=1702203956~exp=1702204556~hmac=62955a095c10495d550055b94c3091e21b5a95c84e00e05051174e82267ce20d"
                        alt="Small"
                        className="md:w-36 md:h-52 mt-5 object-cover"
                    />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Members;