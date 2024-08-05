import { 
    file02, 
    homeSmile, 
    notification2, 
    notification3, 
    notification4, 
    plusSquare, 
    searchMd 
} from "../assets";

export const navigation = [
    {
        id: "0",
        title: "Features",
        url: "#features"
    },
    {
        id: "1",
        title: "Pricing",
        url: "#pricing"
    },
    {
        id: "2",
        title: "How to use",
        url: "#how-to-use"
    },
    {
        id: "3",
        title: "Roadmap",
        url: "#roadmap"
    },
    {
        id: "4",
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        id: "5",
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];