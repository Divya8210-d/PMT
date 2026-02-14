import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
    name: string;
    role: string;
    imageSrc: string;
    linkedinUrl?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
    name,
    role,
    imageSrc,
    linkedinUrl,
}) => {
    return (
        <div className="relative group w-full h-[450px] sm:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-800">
            {/* BACKGROUND IMAGE */}
            <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* OVERLAY - Gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-orange-500 text-xl sm:text-2xl font-bold uppercase mb-1">
                    {name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6">
                    {role}
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4">
                    {linkedinUrl && (
                        <Link
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#0077b5] p-2 rounded-full hover:opacity-80 transition-opacity"
                        >
                            <Linkedin size={18} className="text-white" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
