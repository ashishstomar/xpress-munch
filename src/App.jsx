import React from "react";

/** 
 * header
 *  -logo
 *  - Nav bar
 * body
 *  cards
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrap">
        <img className="logo" src="src\assets\icon.svg" />
        <h1>XPRESSMUNCH</h1>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Munchies</li>
          <li>Orders</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  )
}

const ResCard = (props) => {
  const { resData } = props;

  return (
    <article className="cardWrap" >
      <img 
        className="cardImg" 
        src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(', ')}</h5>
      <p>{resData.info.areaName}</p> 
      <div className="cardInfo">
        <h3 className="price" >{resData.info.costForTwo}</h3>
          <div className="cardInfo-Bottom">
            <h4>Rating {resData.info.avgRatingString}</h4>
            <h5>{resData.info.sla.deliveryTime} Min</h5>
          </div>
      </div>
    </article>
  )
}

const resObj = {
  restaurants: [
    {
    info: {
    id: "743364",
    name: "Coca Sandwich",
    cloudinaryImageId: "2cf71db774936e07681bcae9e6e7b8a2",
    locality: "Narendra",
    areaName: "Sudama Nagar",
    costForTwo: "₹200 for two",
    cuisines: [
    "Indian"
    ],
    avgRating: 4.4,
    veg: true,
    parentId: "287337",
    avgRatingString: "4.4",
    totalRatingsString: "10+",
    promoted: true,
    adTrackingId: "cid=13697277~p=0~adgrpid=13697277#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=743364~eid=5490f402-3e92-4d7b-ba90-e7494ee6e7d5~srvts=1716633918044~collid=45995",
    sla: {
    deliveryTime: 28,
    lastMileTravel: 3.8,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "3.8 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 23:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "30% OFF",
    subHeader: "ABOVE ₹159",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=743364",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "581971",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Airport Road",
    areaName: "Kalani Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
    "Pizzas"
    ],
    avgRating: 4.1,
    parentId: "721",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
    deliveryTime: 24,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-26 02:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Pizza.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Pizza.png"
    }
    }
    ]
    },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹90"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=581971",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "84070",
    name: "Gurukripa Restaurant - Sarwate",
    cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
    locality: "Sarwate",
    areaName: "South Tukoganj",
    costForTwo: "₹250 for two",
    cuisines: [
    "North Indian",
    "Thalis",
    "Indian",
    "Fast Food",
    "Chinese",
    "Beverages",
    "Desserts",
    "Jain",
    "Punjabi"
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "92204",
    avgRatingString: "4.3",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 31,
    lastMileTravel: 4.4,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "4.4 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 23:59:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
    description: "Delivery!"
    },
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textExtendedBadges: { },
    textBased: { },
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
    description: "Delivery!"
    }
    },
    {
    attributes: {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹125 OFF",
    subHeader: "ABOVE ₹349",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=84070",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "69420",
    name: "Vijay Chaat House",
    cloudinaryImageId: "mstgatb2vu8v48kcua81",
    locality: "Nihalpura",
    areaName: "Rajwada",
    costForTwo: "₹150 for two",
    cuisines: [
    "Snacks",
    "Sweets",
    "Chaat",
    "Street Food"
    ],
    avgRating: 4.6,
    veg: true,
    parentId: "223165",
    avgRatingString: "4.6",
    totalRatingsString: "1K+",
    sla: {
    deliveryTime: 28,
    lastMileTravel: 2.3,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "2.3 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 20:30:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png",
    description: "Delivery!"
    },
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png",
    description: "Delivery!"
    }
    },
    {
    attributes: {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    }
    ]
    },
    textExtendedBadges: { },
    textBased: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "15% OFF",
    subHeader: "UPTO ₹45"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=69420",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "79502",
    name: "Domino's Pizza",
    cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
    locality: "A BLOCK",
    areaName: "Village Sirpur",
    costForTwo: "₹400 for two",
    cuisines: [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    avgRating: 4.3,
    parentId: "2456",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    promoted: true,
    adTrackingId: "cid=13807347~p=1~adgrpid=13807347#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=79502~eid=6152077d-0372-4ffd-9841-44766fdc9f94~srvts=1716633918044~collid=45995",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 1.5,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 23:59:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Pizza.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "Rxawards/_CATEGORY-Pizza.png",
    description: "Delivery!"
    }
    }
    ]
    },
    textExtendedBadges: { },
    textBased: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹150 OFF",
    subHeader: "ABOVE ₹299",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=79502",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "148404",
    name: "Om Namkeen",
    cloudinaryImageId: "okkh43ib3xm733hebgus",
    locality: "Jawahar Marg",
    areaName: "Lodhipura",
    costForTwo: "₹200 for two",
    cuisines: [
    "Snacks"
    ],
    avgRating: 4.6,
    veg: true,
    parentId: "7861",
    avgRatingString: "4.6",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 19,
    lastMileTravel: 1.6,
    serviceability: "SERVICEABLE",
    slaString: "15-20 mins",
    lastMileTravelString: "1.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 21:30:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    }
    ]
    },
    textExtendedBadges: { },
    textBased: { }
    }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=148404",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "199639",
    name: "Apna Sweets",
    cloudinaryImageId: "kt09zylanc2qd5eg116a",
    locality: "Bhakt Prahlad Nagar",
    areaName: "Bhakt Prahlad Nagar",
    costForTwo: "₹300 for two",
    cuisines: [
    "Sweets",
    "Beverages",
    "Street Food",
    "South Indian",
    "Fast Food",
    "Chinese",
    "Desserts"
    ],
    avgRating: 4.6,
    parentId: "8960",
    avgRatingString: "4.6",
    totalRatingsString: "10K+",
    sla: {
    deliveryTime: 20,
    lastMileTravel: 1.6,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 22:30:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Mithai.png",
    description: "Delivery!"
    },
    {
    imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png",
    description: "Delivery!"
    },
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textExtendedBadges: { },
    textBased: { },
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "Rxawards/_CATEGORY-Mithai.png",
    description: "Delivery!"
    }
    },
    {
    attributes: {
    imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png",
    description: "Delivery!"
    }
    },
    {
    attributes: {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹75 OFF",
    subHeader: "ABOVE ₹249",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "1K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=199639",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "78029",
    name: "Desi Tadka",
    cloudinaryImageId: "xbmwjf42rubfwxrlb2a4",
    locality: "Kalani Nagar",
    areaName: "Kanyakubj Nagar",
    costForTwo: "₹198 for two",
    cuisines: [
    "North Indian"
    ],
    avgRating: 4.1,
    veg: true,
    parentId: "393990",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
    deliveryTime: 31,
    lastMileTravel: 2.4,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "2.4 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 23:50:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textExtendedBadges: { },
    textBased: { },
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "20% OFF",
    subHeader: "UPTO ₹50"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=78029",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "621472",
    name: "Madani Restaurant",
    cloudinaryImageId: "s6jupcy6o8sd5klno5cs",
    locality: "Chandan nagar",
    areaName: "Sudama Nagar",
    costForTwo: "₹450 for two",
    cuisines: [
    "Indian",
    "Snacks"
    ],
    avgRating: 3.6,
    parentId: "370300",
    avgRatingString: "3.6",
    totalRatingsString: "20+",
    promoted: true,
    adTrackingId: "cid=13810017~p=4~adgrpid=13810017#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=621472~eid=59dc8b32-d0c3-4c15-8ffc-da76419c4fc7~srvts=1716633918044~collid=45995",
    sla: {
    deliveryTime: 23,
    lastMileTravel: 2,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "2.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 23:59:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "₹150 OFF",
    subHeader: "ABOVE ₹249",
    discountTag: "FLAT DEAL"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=621472",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "743804",
    name: "The Pizza Box",
    cloudinaryImageId: "598b04a59ba5fb612a820f53448565bc",
    locality: "Sukhdev Nagar",
    areaName: "Kalani Nagar",
    costForTwo: "₹250 for two",
    cuisines: [
    "Pizzas"
    ],
    veg: true,
    parentId: "212550",
    avgRatingString: "--",
    sla: {
    deliveryTime: 30,
    lastMileTravel: 2.1,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "2.1 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 23:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textExtendedBadges: { },
    textBased: { }
    }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=743804",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "737926",
    name: "KFC",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/8ba01310-e5b7-4a90-bef3-98a10bc91238_737926.JPG",
    locality: "Indore",
    areaName: "Bhavarkua",
    costForTwo: "₹400 for two",
    cuisines: [
    "Burgers",
    "Fast Food",
    "Rolls & Wraps"
    ],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "500+",
    sla: {
    deliveryTime: 32,
    lastMileTravel: 4.9,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "4.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-26 02:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Burger.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: {
    badgeObject: [
    {
    attributes: {
    imageId: "Rxawards/_CATEGORY-Burger.png",
    description: "Delivery!"
    }
    }
    ]
    },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "40% OFF",
    subHeader: "UPTO ₹80"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=737926",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "861658",
    name: "Pastas By Pizza Hut",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e6705d31-3941-4fb8-a198-fc6e24cdcc36_861658.JPG",
    locality: "Airport Road",
    areaName: "Kalani Nagar",
    costForTwo: "₹400 for two",
    cuisines: [
    "Pastas"
    ],
    avgRating: 3.7,
    parentId: "306806",
    avgRatingString: "3.7",
    totalRatingsString: "6",
    sla: {
    deliveryTime: 24,
    lastMileTravel: 2.2,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "2.2 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-26 02:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "40% OFF",
    subHeader: "UPTO ₹80"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=861658",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "122585",
    name: "Maharaja Kachori Corner",
    cloudinaryImageId: "igrwplj13sepu899gfwz",
    locality: "Kothari Market",
    areaName: "Mth Compound",
    costForTwo: "₹100 for two",
    cuisines: [
    "Street Food",
    "Fast Food",
    "Snacks"
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "129883",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    promoted: true,
    adTrackingId: "cid=13742062~p=5~adgrpid=13742062#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=122585~eid=a6a53b1f-9cc7-4c8c-ad1e-11376f735768~srvts=1716633918044~collid=45995",
    sla: {
    deliveryTime: 27,
    lastMileTravel: 3.9,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "3.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 22:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "v1695133679/badges/Pure_Veg111.png",
    description: "pureveg"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "pureveg",
    imageId: "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    textExtendedBadges: { },
    textBased: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "10% OFF",
    subHeader: "UPTO ₹40"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=122585",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "742745",
    name: "Top 'N Town",
    cloudinaryImageId: "ce9437130321d9f6417f832e197d918e",
    locality: "Dravid Nagar",
    areaName: "Kalani Nagar",
    costForTwo: "₹200 for two",
    cuisines: [
    "Ice Cream"
    ],
    veg: true,
    parentId: "217200",
    avgRatingString: "--",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-25 23:50:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-Ice-creams.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Ice-creams.png"
    }
    }
    ]
    },
    textExtendedBadges: { }
    }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=742745",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "857210",
    name: "Indiana Burgers",
    cloudinaryImageId: "56c20cff0d4859b758f332e9e93706e4",
    locality: "Dravid Nagar",
    areaName: "Sudama Nagar",
    costForTwo: "₹200 for two",
    cuisines: [
    "Burgers"
    ],
    avgRating: 5,
    parentId: "5714",
    avgRatingString: "5.0",
    totalRatingsString: "2",
    sla: {
    deliveryTime: 27,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-26 00:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textExtendedBadges: { },
    textBased: { },
    imageBased: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=857210",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    },
    {
    info: {
    id: "857212",
    name: "Kaati Zone Rolls & Wraps",
    cloudinaryImageId: "b6fb5a0d41200a54b88be85c7d28185b",
    locality: "Dravid Nagar",
    areaName: "Sudama Nagar",
    costForTwo: "₹200 for two",
    cuisines: [
    "Snacks"
    ],
    avgRating: 5,
    parentId: "248306",
    avgRatingString: "5.0",
    totalRatingsString: "2",
    sla: {
    deliveryTime: 28,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "25-30 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2024-05-26 00:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    textBased: { },
    imageBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120"
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    isNewlyOnboarded: true,
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: { },
    cta: {
    link: "swiggy://menu?restaurant_id=857212",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK"
    }
    }
    ],
}

const Main = () => {
  return (
    <div className="cardsSection" >
      {resObj.restaurants.map((res) => <ResCard key={res.info.id} resData={res} />
    )}
    </div>
  )
}
  
const App = () => {
  return (
    <div>
        <Header />
        <Main />
    </div>
 )
}

export default App;