import React from "react";
import { CertificateResponse } from "../../../lib/types";
import ProfileCertificationCard from "../ProfileCertificationCard/ProfileCertificationCard";

interface Props {
  certificates: CertificateResponse[];
}

const RecommendedGrid = ({ certificates }: Props) => {
  console.log(certificates);
  return (
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
  );
};

export default RecommendedGrid;
