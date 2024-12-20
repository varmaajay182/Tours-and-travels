import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({

    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_REACT_APP_API_URL,
    }),

    endpoints: (builder) => ({

        getSlider: builder.query({
            query: () => "get-slider",
        }),

        getBrandLogo: builder.query({
            query: () => "get-brands",
        }),

        getPackages: builder.query({
            query: () => "get-packages",
        }),

        getTestimonial: builder.query({
            query: () => "get-testimonial-active",
        }),

        getTestimonialHotel: builder.query({
            query: () => "get-testimonial-active-hotel",
        }),

        getItenries: builder.query({
            query: (id) => `get-particular-itenary/${id}`,
        }),

        getAllItenaries: builder.query({
            query: (key) => `get-itenary-by-categories/${key}`,
        }),

        getItenariesDetails: builder.query({
            query: (id) => `get-all-details-itenary/${id}`,
        }),

        getCitiesListing: builder.query({
            query: (city) => `get-all-cities?city=${city}`,
        }),

        contactUsPost: builder.mutation({
            query: (contactData) => ({
                url: "contact-us-post",
                method: "POST",
                body: contactData,
            }),
        }),

        contactUsHotelPost: builder.mutation({
            query: (hotelContactUsData) => ({
                url: "contact-us-post-hotel",
                method: "POST",
                body: hotelContactUsData,
            }),
        }),

        getBranches: builder.query({
            query: () => "get-branch-location",
        }),

        getSubBranches: builder.query({
            query: (id) => `get-branch-listing/${id}`,
        }),

        getFlightDetails: builder.mutation({
            query: (searchFlight) => ({
                url: "search-flights-details",
                method: "POST",
                body: searchFlight,
            }),
        }),

        getSpecialFlights: builder.query({
            query: () => "get-special-flight-data_V_P_D",
        }),

        getBlogListing: builder.query({
            query: () => "get-blog-listing",
        }),

        getYoutubeVideos: builder.query({
            query: () => "get-youtube-videos",
        }),

        getTeamMemberDetails: builder.query({
            query: () => "get-all-members-details",
        }),

        getAboutUsContent: builder.query({
            query: () => "get-about-us-content",
        }),

        getSettingListing: builder.query({
            query: () => "get-setting-listing",
        }),

        inqueriesPost: builder.mutation({
            query: (inqueriesData) => ({
                url: "inquery-post",
                method: "POST",
                body: inqueriesData,
            }),
        }),

        testimonialReviewPost: builder.mutation({
            query: (testimonialData) => ({
                url: "add-testimonial-review",
                method: "POST",
                body: testimonialData,
            }),
        }),

        testimonialHotelReviewPost: builder.mutation({
            query: (testimonialHotelData) => ({
                url: "post-hotel-testimonial-review",
                method: "POST",
                body: testimonialHotelData,
            }),
        }),

        getMealType: builder.query({
            query: () => "get-flight-meals",
        }),

        getDataByTheme: builder.mutation({
            query: (id) => ({
                url: `get-data-by-theme/${id}`,
                method: 'GET',
            }),
        }),

        getMealById: builder.query({
            query: (id) => `get-particular-meal-listing/${id}`,
        }),

        getParticularFlight: builder.query({
            query: ({ key, id }) => {
                return `get-particular-flight/${key}/${id}`;
            },
        }),

        addPassengerDetails: builder.mutation({
            query: (payload) => ({
                url: "add-passenger-details",
                method: "POST",
                body: payload,
            }),

        }),

        getPassengerDetailsByContactId: builder.query({
            query: (id) => `get-passengers-by-contact-id?id=${id}`,
        }),

        addMealData: builder.mutation({
            query: (mealData) => ({
                url: "update-meal-order",
                method: "POST",
                body: mealData,
            })
        }),

        getUpdatedMealOrder: builder.query({
            query: (id) => `updated-meal-order?id=${id}`

        }),

        getFlightSeat: builder.query({
            query: (id) => `get-flights-seats/${id}`,
        }),

        updateSeat: builder.mutation({
            query: (seatData) => ({
                url: "update-seat",
                method: "POST",
                body: seatData,
            })
        }),

        getFlightUpdatedSeat: builder.query({
            query: (id) => `get-flights-updated-seat?id=${id}`,
        }),

        getFlightAllBookingDetails: builder.query({
            query: (id) => `get-all-flight-booking-details?contactId=${id}`,
        }),

        createPaymentIntent: builder.mutation({
            query: (payload) => ({
                url: "create-payment-intent",
                method: "POST",
                body: payload,
            }),
        }),

        getPackageThemeData: builder.query({
            query: () => "get-package-theme-active",
        }),

        getHotelCouponCodeData: builder.query({
            query: () => "get-all-coupon-code-active",
        }),

        getSocialMediaLinkListing: builder.query({
            query: () => "get-social-media-link",

        }),

        getParticularHotelListing: builder.query({
            query: (city) => `get-particular-hotel-listing/${city}`,
        }),

        addItenaryParsonDetails: builder.mutation({
            query: (payload) => ({
                url: "itenary-payment",
                method: "POST",
                body: payload,
            }),
        }),

        processHotelPayment: builder.mutation({
            query: (payload) => ({
                url: "hotel-payment",
                method: "POST",
                body: payload,
            }),
        }),

    }),

});

export const {
    useGetSliderQuery,
    useGetBrandLogoQuery,
    useGetPackagesQuery,
    useGetTestimonialQuery,
    useGetTestimonialHotelQuery,
    useGetItenriesQuery,
    useGetAllItenariesQuery,
    useTestimonialReviewPostMutation,
    useTestimonialHotelReviewPostMutation,
    useGetItenariesDetailsQuery,
    useLazyGetCitiesListingQuery,
    useGetSettingListingQuery,
    useContactUsPostMutation,
    useContactUsHotelPostMutation,
    useAddPassengerDetailsMutation,
    useLazyGetPassengerDetailsByContactIdQuery,
    useAddMealDataMutation,
    useLazyGetUpdatedMealOrderQuery,
    useGetBranchesQuery,
    useLazyGetSubBranchesQuery,
    useGetFlightDetailsMutation,
    useGetBlogListingQuery,
    useGetSpecialFlightsQuery,
    useGetYoutubeVideosQuery,
    useGetTeamMemberDetailsQuery,
    useGetAboutUsContentQuery,
    useInqueriesPostMutation,
    useGetMealTypeQuery,
    useGetDataByThemeMutation,
    useLazyGetMealByIdQuery,
    useLazyGetParticularFlightQuery,
    useGetFlightSeatQuery,
    useUpdateSeatMutation,
    useLazyGetFlightUpdatedSeatQuery,
    useGetFlightAllBookingDetailsQuery,
    useCreatePaymentIntentMutation,
    useGetPackageThemeDataQuery,
    useGetHotelCouponCodeDataQuery,
    useGetSocialMediaLinkListingQuery,
    useGetParticularHotelListingQuery,
    useAddItenaryParsonDetailsMutation,
    useProcessHotelPaymentMutation,
} = myApi;