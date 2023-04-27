import React from "react";
import "./ProfileCertificationCard.css";
import { Certificate } from "../../../lib/types";

interface Props {
  certificate: Certificate;
}

const ProfileCertificationCard = ({ certificate }: Props) => {
  return (
    <div className="profile-certifications-card shadow-md rounded-md">
      <div>
        <p>{certificate.name}</p>
      </div>
      <div>
        <div>
          <p>Expiration Date</p>
          <p>{certificate.expiration_date}</p>
        </div>
        <div>
          <p>Category</p>
          {certificate.categories.map((category) => {
            return <p>{category.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCertificationCard;
