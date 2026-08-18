import { FiSmile, FiHeart, FiUser, FiDroplet } from "react-icons/fi";

import { IServiceCategory } from "@/types";

// Real menu pulled from her live Square booking page
// (book.squareup.com/appointments/yuyhp03xwgk7nd) — real prices/durations.

export const serviceCategories: IServiceCategory[] = [
    {
        name: "Face Waxing",
        icon: <FiSmile size={22} />,
        services: [
            { name: "Brow Wax", duration: "15 mins", price: "$20" },
            { name: "Lip", duration: "10 mins", price: "$15" },
            { name: "Chin", duration: "15 mins", price: "$15" },
            { name: "Nose", duration: "15 mins", price: "$15" },
            { name: "Ears", duration: "15 mins", price: "$15" },
            { name: "Neck", duration: "15 mins", price: "$15" },
            { name: "Sideburns", duration: "15 mins", price: "$15" },
            { name: "Full Face", duration: "35 mins", price: "$50" },
        ],
    },
    {
        name: "Bikini Waxing",
        icon: <FiHeart size={22} />,
        services: [
            { name: "Basic Bikini", duration: "30 mins", price: "$40" },
            { name: "Extended Bikini", duration: "30 mins", price: "$50" },
            { name: "Full Brazilian", duration: "45 mins", price: "$65" },
            { name: "Full Buttocks", duration: "30 mins", price: "$30" },
            { name: "Inner Backside", duration: "15 mins", price: "$18" },
        ],
    },
    {
        name: "Body Waxing",
        icon: <FiUser size={22} />,
        services: [
            { name: "Underarm", duration: "20 mins", price: "$25" },
            { name: "Half Arm", duration: "30 mins", price: "$35" },
            { name: "Full Arm", duration: "45 mins", price: "$50" },
            { name: "Half Legs", duration: "20 mins", price: "$45" },
            { name: "Full Legs", duration: "50 mins", price: "$75" },
            { name: "Chest", duration: "1 hr 15 mins", price: "$55" },
            { name: "Abdomen", duration: "45 mins", price: "$30" },
            { name: "Half Back", duration: "30 mins", price: "$40" },
            { name: "Full Back", duration: "45 mins", price: "$60" },
        ],
    },
    {
        name: "Add-Ons",
        icon: <FiDroplet size={22} />,
        services: [
            { name: "Anti-Red Treatment", duration: "5 mins", price: "$4" },
            { name: "Lip Mask", duration: "10 mins", price: "$5" },
            { name: "Face Mask", duration: "15 mins", price: "$6" },
            { name: "Under-Eye Mask", duration: "15 mins", price: "$5" },
            { name: "Vajacial Mask", duration: "15 mins", price: "$9" },
        ],
    },
];
