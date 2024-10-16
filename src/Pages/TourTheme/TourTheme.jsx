import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useGetPackageThemeDataQuery } from '../../Api/Api';

const TourTheme = () => {

    const { isError, error, data, isLoading, isSuccess } = useGetPackageThemeDataQuery();
    const [packageListing, setPackageListing] = useState([]);
    const imageUrl = `${import.meta.env.VITE_REACT_APP_IMAGE_URL}/package-theme/`;
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            setPackageListing(data?.data);
        } else if (isError) {
            console.log("error", isError);
        }
    }, [error, data, isSuccess, isError]);

    const handlePopularThemeOpen = () => {
        navigate("popularTheme");
    }

    const settings = {
        dots: false,
        infinite: packageListing?.length > 1,
        speed: 500,
        slidesToShow: packageListing.length < 5 ? packageListing?.length : 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Added this to remove navigation buttons
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: packageListing?.length < 3 ? packageListing?.length : 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: packageListing?.length < 2 ? packageListing?.length : 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <div>
                {packageListing && packageListing?.length > 0 ? (
                    <div className='2xl:container 2xl:mx-auto'>
                        <div className='flex flex-row justify-center items-center p-5 w-full font-bold text-[30px] text-red-500'>
                            Popular Themes
                        </div>
                        <p className='flex flex-row justify-center items-center text-center text-lg'>
                            Planning your Family Vacations, Honeymoon, Beach Holidays or want to explore the wildlife? Just pick one of the Popular Themes and explore the recommended Deals.
                        </p>
                        <div className='my-3'>
                            <Slider {...settings}>
                                {packageListing.map((theme, index) => (
                                    <div className='w-fit' key={index + "1"}>
                                        <div
                                            onClick={() => handlePopularThemeOpen()}>
                                            <div className='w-[200px] h-[200px]'>
                                                <img
                                                    src={`${imageUrl}${theme?.packageThemeImage}`}
                                                    alt={theme?.name}
                                                    className='object-fill w-full h-full rounded-full border-dotted border-red-400 p-1 border-[3px]'
                                                />
                                            </div>
                                            <div className='m-2'>
                                                <p className='text-black text-center font-semibold text-xl'>
                                                    {theme?.packageName}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                ) :
                    null
                }
            </div>
        </>
    );
};

export default TourTheme;