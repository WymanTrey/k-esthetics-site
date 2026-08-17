import { FiAward, FiList, FiCalendar } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "Licensed Esthetician",
        icon: <FiAward size={34} className="text-primary" />,
        description: "Trained, licensed, and dedicated to quality waxing and skin care."
    },
    {
        title: "25+ Services",
        icon: <FiList size={34} className="text-secondary" />,
        description: "Face, bikini, and body waxing, plus soothing skin add-ons."
    },
    {
        title: "Online Booking",
        icon: <FiCalendar size={34} className="text-primary" />,
        description: "Book your appointment any time — day or night, no phone call needed."
    }
];
