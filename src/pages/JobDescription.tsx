import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';

import JobDetailsMobile from '../components/JobDetailsMobile';
import Layout from '../components/layout/Layout';
import jobDescriptionFile from '../data/engineer-who-can-design.md';

export default function JobDescription() {
  const [jobDescriptionText, setJobDescriptionText] = useState('');
  const { name } = useParams();

  useEffect(() => {
    fetch(jobDescriptionFile)
      .then((response) => response.text())
      .then((text) => setJobDescriptionText(text));
  }, []);

  return (
    <Layout>
      <JobDetailsMobile />
      <h2 className="section-header">Job Description</h2>
      <ReactMarkdown className="prose" children={jobDescriptionText} />
      <Link to={`/opportunity/${name}/application`}>
        <button className="bg-ashby-700 text-white w-full py-1 rounded">
          Apply for this Job
        </button>
      </Link>
    </Layout>
  );
}
