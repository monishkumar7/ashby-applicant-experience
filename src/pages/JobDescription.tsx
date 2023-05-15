import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';

import { jobListings } from '../data/jobListings';
import JobDetailsMobile from '../components/JobDetailsMobile';
import Layout from '../components/layout/Layout';
import jobDescriptionFile from '../data/engineer-who-can-design.md';

export default function JobDescription() {
  const [jobDescriptionText, setJobDescriptionText] = useState('');
  const { name } = useParams();
  const jobDetails = jobListings.find((jobListing) => jobListing.slug === name);

  useEffect(() => {
    fetch(jobDescriptionFile)
      .then((response) => response.text())
      .then((text) => setJobDescriptionText(text));
  }, []);

  return (
    <Layout>
      <JobDetailsMobile
        title={jobDetails?.title}
        salary={jobDetails?.salary}
        type={jobDetails?.type}
        location={jobDetails?.location}
      />
      <h2 className="section-header my-4">Job Description</h2>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        className="prose-description"
        children={jobDescriptionText}
      />
      <Link to={`/opportunity/${name}/application/`} state={{ jobDetails }}>
        <button className="bg-ashby-700 text-white w-full py-1 rounded mt-8">
          Apply for this Job
        </button>
      </Link>
    </Layout>
  );
}
