import "./ProfileCertificationCard.css";
import { Certificate } from "../../../lib/types";

interface Props {
  certificate: Certificate;
}

const ProfileCertificationCard = ({ certificate }: Props) => {
  return (
    <div className="profile-certifications-card shadow-md rounded-md hover:scale-105 ease-in-out duration-150">
      <div className="profile-certifications-card-title">
        <p className="text-2xl mt-auto mb-auto">{certificate.name}</p>
      </div>

      <div className="profile-certifications-card-data">
        <div className="profile-certifications-card-section">
          <p className="text-sm text-gray-400 mb-3">Expiration Date</p>
          <p className="text-sm">{certificate.expiration_date}</p>
        </div>
        <div className="profile-certifications-card-section">
          <p className="text-sm text-gray-400 mb-3">Category</p>
          {certificate.categories.map((category) => {
            return <p className="text-sm">{category.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileCertificationCard;
