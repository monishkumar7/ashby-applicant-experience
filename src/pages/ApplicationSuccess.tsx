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
      <p className="uppercase text-sm font-semibold bg-ashby-100 rounded w-full p-8 text-center">
        Thank you for submitting your application. <br /> We will be in touch if
        we see a fit.
      </p>
    </Layout>
  );
}
