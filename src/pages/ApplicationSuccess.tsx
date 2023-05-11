import { useParams } from 'react-router-dom';

import { jobListings } from '../data/jobListings';
import JobDetailsMobile from '../components/JobDetailsMobile';
import Layout from '../components/layout/Layout';

export default function ApplicationSuccess() {
  const { name } = useParams();
  const jobDetails = jobListings.find((jobListing) => jobListing.slug === name);
  return (
    <Layout>
      <JobDetailsMobile
        title={jobDetails?.title}
        salary={jobDetails?.salary}
        type={jobDetails?.type}
        location={jobDetails?.location}
      />
      Thank you for submitting your application. We will be in touch if we see a
      fit
    </Layout>
  );
}
