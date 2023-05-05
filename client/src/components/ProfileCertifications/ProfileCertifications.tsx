import React from "react";
import "./ProfileCertifications.css";
import { Category, Certificate, User } from "../../../lib/types";
import ProfileCertificationCard from "../ProfileCertificationCard/ProfileCertificationCard";

interface CertificateResponse {
  certificate: Certificate;
  categories: Category[];
}
interface Props {
  user: User;
  certificates: CertificateResponse[];
}

const ProfileCertifications = ({ user, certificates }: Props) => {
  console.log(certificates);
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
