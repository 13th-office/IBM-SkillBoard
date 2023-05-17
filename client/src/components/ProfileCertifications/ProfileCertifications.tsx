import React from "react";
import "./ProfileCertifications.css";
import {
  Category,
  Certificate,
  User,
  CertificateResponse,
} from "../../../lib/types";
import ProfileCertificationCard from "../ProfileCertificationCard/ProfileCertificationCard";
interface Props {
  user: User;
  certificates: CertificateResponse[];
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
            <ProfileCertificationCard
              certificate={certificate.certificate}
              categories={certificate.categories}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProfileCertifications;
