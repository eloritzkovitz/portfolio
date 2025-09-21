import { useTranslation } from "react-i18next";

import React from "react";

interface ProfileCardProps {
  profileUrl: string;
  avatarUrl: string;
  username: string;
  joinedDate: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profileUrl,
  avatarUrl,
  username,
  joinedDate,
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-102">
      <h2 className="text-3xl font-bold mb-8">{t("github.profile")}</h2>

      {/* Avatar */}
      <div className="mt-8 mb-8">
        <img
          src={avatarUrl}
          alt="GitHub Avatar"
          className="mx-auto rounded-full shadow-lg"
          style={{
            width: "min(90vw, 240px)",
            height: "min(90vw, 240px)",
          }}
          aria-label="GitHub avatar"
        />
      </div>

      {/* Profile Information */}
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-semibold hover:text-blue-300"
        aria-label="Visit GitHub profile"
      >
        {username}
      </a>
      <p className="text-sm mt-4">Joined on {joinedDate}</p>
    </div>
  );
};

export default ProfileCard;
