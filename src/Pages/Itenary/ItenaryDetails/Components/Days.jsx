import CloseIcon from '@mui/icons-material/Close';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageModal from '../../../ImageModal';

const Description = ({ description }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <span className='text-[16px] font-normal text-justify'>
                {isExpanded ? description : description?.slice(0, maxLength)}
                {description && description?.length > maxLength && (
                    <button
                        onClick={toggleExpanded}
                        className='text-red-500 text-[16px] font-medium ml-2 hover:border-b-2 hover:border-red-400'
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </span>
        </div>
    );
};

const Modal = ({ isOpen, onClose, siteDetails }) => {

    const siteSeenImage = `${import.meta.env.VITE_REACT_APP_IMAGE_URL}/siteseen-image/`
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const maxWords = 45;

    if (!isOpen) return null;

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const getDescription = (description) => {
        const words = description?.split(' ');
        return isExpanded ? description : words?.slice(0, maxWords).join(' ');
    };

    const handleImageClick = (imageUrl) => {
        setModalImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <>
            <div className='modal z-20 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                <div className='modal-content bg-white rounded-lg p-5 w-[40%]'>
                    <div className='flex justify-between'>
                        <p className='font-semibold text-red-500 text-lg'>{siteDetails?.SiteseenName}</p>
                        <CloseIcon
                            onClick={onClose}
                            sx={{
                                cursor: 'pointer',
                                color: '#ef4444',
                            }}
                        />
                    </div>
                    <div className='border border-gray-300 my-2'></div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div
                            className='w-full'
                            onClick={() =>
                                handleImageClick(`${siteSeenImage}${siteDetails?.siteseen}`)
                            }
                        >
                            <img src={`${siteSeenImage}${siteDetails?.siteseen}`} alt={siteDetails?.SiteseenName} className='w-full h-48 object-cover rounded-lg' />
                        </div>
                        <div>
                            <p className='text-base text-justify'>{getDescription(siteDetails?.SiteseenDescription)}</p>
                            {siteDetails?.SiteseenDescription?.split(' ')?.length > maxWords && (
                                <button onClick={toggleExpanded} className='text-red-500 text-[16px] font-medium ml-2'>
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ImageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                imageUrl={modalImage}
            />
        </>

    );
};

const Days = ({ days }) => {

    const [allDaysViseItenary, setAllDaysViseItenary] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedSiteSeen, setSelectedSiteSeen] = useState(null);
    const siteSeenImage = `${import.meta.env.VITE_REACT_APP_IMAGE_URL}/siteseen-image/`
    const defultImage = `${import.meta.env.VITE_REACT_APP_IMAGE_URL}/packages-Image/`;

    const handleSiteseenModel = (siteSeen) => {
        setSelectedSiteSeen(siteSeen);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedSiteSeen(null);
    };

    useEffect(() => {
        if (days) {
            setAllDaysViseItenary(days)
        }
    }, [days])

    return (
        <div className='w-[60%] h-[100%]'>
            {allDaysViseItenary && allDaysViseItenary.map((daysItenary, index) => {

                return (

                    <div
                        key={index + "daysItenaries"}
                        className='card bg-white rounded-xl shadow-[0_.5rem_1rem_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-lg p-3 my-2'
                    >
                        <span className='text-lg text-red-500 font-bold'>Day {index + 1}</span>
                        <div className='grid grid-cols-2 mt-2'>
                            <div className='w-[100%]'>
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    {daysItenary?.siteseens?.length > 0 ? (
                                        daysItenary.siteseens.map((siteseen, index) => {

                                            return (
                                                <SwiperSlide key={index + "siteseens"}>
                                                    <img
                                                        src={`${siteSeenImage}${siteseen?.siteseen}`}
                                                        alt={siteseen?.siteseen}
                                                        className="w-[90%] h-48 rounded-lg"
                                                    />
                                                </SwiperSlide>
                                            )

                                        })
                                    ) : (
                                        <img
                                            src={`${defultImage}${daysItenary?.deFaultImage}`}
                                            alt={daysItenary?.deFaultImage}
                                            className="w-[90%] h-48 rounded-lg"
                                        />
                                    )}

                                </Swiper>
                            </div>

                            <div>
                                <div className='mb-2'>
                                    <span className='text-[18px] text-red-500 lowercase font-bold'>{daysItenary?.title}</span>
                                </div>
                                <div>
                                    <Description description={daysItenary?.description} />
                                </div>
                                {daysItenary?.siteseens && daysItenary.siteseens.length > 0 && (
                                    <div>

                                        <div className='text-black font-bold text-[15px] mt-3'>
                                            <p>Sight Seeing Included:</p>
                                        </div>

                                        <div className='flex flex-wrap gap-2'>
                                            {daysItenary.siteseens.map((siteseen, index) => {
                                                return (
                                                    <div key={index} onClick={() => handleSiteseenModel(siteseen)}>
                                                        <p className='w-[100%] cursor-pointer font-semibold text-red-500'>
                                                            {siteseen?.SiteseenName}
                                                            {index < daysItenary.siteseens.length - 1 && ' /'}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                )}

                                <div>
                                    <div className='flex items-center gap-2 mt-3'>
                                        {daysItenary?.meal && daysItenary?.meal.map((meal, index) => {
                                            return (
                                                <div key={index + "meals"} className='flex items-center gap-1'>
                                                    <div>
                                                        <span>
                                                            <LunchDiningIcon
                                                                fontSize="large"
                                                                sx={{
                                                                    color: '#ef4444'
                                                                }}
                                                            />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span>{meal}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                siteDetails={selectedSiteSeen}
            />
        </div>
    )
}

export default Days;