import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ settingData, settingIsSuccess, settingIsError, settingError }) => {

  const pathname = window.location.pathname.replace('/', '');
  const [activeLink, setActiveLink] = useState(pathname);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [websiteLogo, setWebsiteLogo] = useState(false);
  const mainLogoImage = `${import.meta.env.VITE_REACT_APP_IMAGE_URL}/setting-image/`

  const navigate = useNavigate();

  const handleLinkClick = (link, isDropdownItem = false) => {
    setActiveLink(isDropdownItem ? 'holidays' : link);
    navigate(`/${link}`);
    if (isPackagesOpen) {
      setIsPackagesOpen(false);
    }
  };

  const getActiveClass = (link) => (
    activeLink === link || (link === 'holidays' && activeLink === 'holidays')
      ? "bg-[#161b31] border-t-4 border-t-[#c62a82]"
      : ""
  );

  const togglePackagesDropdown = () => {
    setIsPackagesOpen(!isPackagesOpen);
    setActiveLink('holidays');
  };

  const handleClickOnDashboard = () => {
    navigate("/");
  }

  useEffect(() => {
    if (settingIsSuccess) {
      setWebsiteLogo(settingData?.data)
    } else {
      console.log("error", settingIsError);
    }
  }, [settingData, settingIsSuccess, settingIsError])

  return (
    <>

      <nav className="sticky top-0 bg-[#1f2746] h-[80px] z-50">
        <div className='h-full container mx-auto grid grid-cols-3 px-4'>

          <div className='flex justify-start items-center cursor-pointer w-fit' onClick={() => {
            handleClickOnDashboard()
          }}>
            {websiteLogo && websiteLogo.map((items, index) => {
              if (items?.keyName == "Main_Logo") {
                return (
                  <div key={index + "key"}>
                    <img src={`${mainLogoImage}${items?.valueContent}`} alt={items?.keyName} className='h-[78px]' />
                  </div>
                )
              }
            })}
          </div>

          <div className='col-span-2'>

            <div className='grid grid-cols-7 gap-4 items-center h-full'>

              <button
                className={`flex justify-center items-center h-full ${getActiveClass('')}`}
                onClick={() => handleLinkClick('')}
              >
                <div className='font-semibold text-lg text-white'>HOME</div>
              </button>

              <button
                className={`flex justify-center items-center h-full ${getActiveClass('aboutUs')}`}
                onClick={() => handleLinkClick('aboutUs')}
              >
                <div className='font-semibold text-lg text-white'>About Us</div>
              </button>


              <div className="relative h-full">
                <button
                  className={`flex justify-center items-center h-full w-full ${getActiveClass('holidays')}`}
                  onClick={togglePackagesDropdown}
                >
                  <div className='font-semibold text-lg text-white mr-2'>PACKAGES</div>
                  <span className="text-white text-lg">&#9662;</span>
                </button>
                {isPackagesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-md shadow-lg">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      onClick={() => handleLinkClick('International', true)}
                    >
                      International
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      onClick={() => handleLinkClick('Domestic', true)}
                    >
                      Domestic
                    </button>
                  </div>
                )}
              </div>

              <button
                className={`flex justify-center items-center h-full ${getActiveClass('flights')}`}
                onClick={() => handleLinkClick('flights')}
              >
                <div className='font-semibold text-lg text-white'>Flights Booking</div>
              </button>

              <button
                className={`flex justify-center items-center h-full ${getActiveClass('hotels')}`}
                onClick={() => handleLinkClick('hotels')}
              >
                <div className='font-semibold text-lg text-white'>Hotels Booking</div>
              </button>

              <button
                className={`flex justify-center items-center h-full ${getActiveClass('Blogs')}`}
                onClick={() => handleLinkClick('Blogs')}
              >
                <div className='font-semibold text-lg text-white'>Blogs</div>
              </button>
              <button
                className={`flex justify-center items-center h-full ${getActiveClass('contact')}`}
                onClick={() => handleLinkClick('contact')}
              >
                <div className='font-semibold text-lg text-white'>CONTACTS</div>
              </button>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
};

export default NavBar;