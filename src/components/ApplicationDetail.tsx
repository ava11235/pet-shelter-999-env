import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { formatDate } from '../utils';
import {StorageImage} from '@aws-amplify/ui-react-storage'

type Application = {
  applicantName: string;
  email: string;
  phone: string;
  submittedAt: string;
  pet: {
    name: string;
    species: string;
    age: string;
    dateEntered: string;
    image: string;
  };
};

const ApplicationDetail = () => {
  const { id } = useParams();
  const [application, _setApplication] = useState<Application>();
  const [loading, _setLoading] = useState(true);
  const [error, _setError] = useState('');
  const navigate = useNavigate();

  async function getApplication() {
    console.log("Not implemented yet");
  }

  useEffect(() => {
    getApplication()
  }, [id]); // Dependency array to re-run the effect when "id" changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!application) {
    return <div>No application found for id {`${id}`}</div>;
  }

  return (
    <div className='adoption-details-wrapper'>
       <div className='adoption-details-card'>
        <button className='btn back-btn' onClick={() => navigate(-1)}>Back to applications</button>
        <p><b>Applicant name:</b> {application.applicantName}</p>
        <p><b>Email:</b> {application.email}</p>
        <p><b>Phone:</b> {application.phone}</p>
        <p><b>Submitted at:</b> {formatDate(application?.submittedAt || "")}</p>
      </div>
      <div className='pet-card'>
        <h3>{application.pet.name}</h3>
        <StorageImage 
          alt={application.pet?.name || "Pet name unavailable"} 
          path={application.pet.image || ""} 
          width="100" />
        <p><b>Species:</b> {application.pet.species}</p>
        <p><b>Age:</b> {application.pet.age}</p>
        <p><b>Date entered:</b> {application.pet.dateEntered}</p>
      </div>
    </div>
  );
};

export default ApplicationDetail;
