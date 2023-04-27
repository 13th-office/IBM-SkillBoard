import React from "react";
import "./ProfileCertifications.css";
import { Certificate, User } from "../../../lib/types";
import ProfileCertificationCard from "../ProfileCertificationCard/ProfileCertificationCard";

interface Props {
  user: User;
  certificates: Certificate[];
}

const ProfileCertifications = ({ user, certificates }: Props) => {
  return (
    <div className="profile-certifications-general">
      <h3 className="profile-certifications-title">
        {user.name}'s Certifications
      </h3>
      <div className="profile-certifications-cards gap-5 overflow-x-auto">
        {certificates.map((certificate, index) => (
          <React.Fragment key={index}>
            <ProfileCertificationCard certificate={certificate} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfileCertifications;
