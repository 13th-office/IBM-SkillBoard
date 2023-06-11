import React from "react";
import { CertificateResponse } from "../../../lib/types";
import ProfileCertificationCard from "../ProfileCertificationCard/ProfileCertificationCard";

interface Props {
  certificates: CertificateResponse[];
}

const RecommendedGrid = ({ certificates }: Props) => {
  console.log(certificates);
  return (
    <div className="profile-certifications-cards grid grid-cols-3 gap-5 overflow-x-auto mt-[15px]">
      {certificates.map((certificate, index) => (
        <React.Fragment key={index}>
          <div className="h-[50vh]">
            <ProfileCertificationCard
              certificate={certificate.certificate}
              categories={certificate.categories}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecommendedGrid;
