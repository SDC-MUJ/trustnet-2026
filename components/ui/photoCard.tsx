import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface PhotoCardProps {
  profileimage: string;
  fullName: string;
  des: string;
  linkedin?: string;
  website?: string;
}

const PhotoCard = ({
  profileimage,
  fullName,
  des,
  linkedin,
  website,
}: PhotoCardProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-full h-[250px] border-2 border-[#c84b13] rounded-lg">
        <Image
          src={profileimage}
          alt={fullName}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold">{fullName}</h3>
      <p className="text-sm text-gray-600 mb-4 leading-tight">{des}</p>
      <div className="flex gap-4">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c84b13] hover:text-[#a03a0d] transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c84b13] hover:text-[#a03a0d] transition-colors"
          >
            <FiExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PhotoCard;
