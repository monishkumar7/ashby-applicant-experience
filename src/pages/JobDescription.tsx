import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import JobDetailsMobile from '../components/JobDetailsMobile';
import Layout from '../components/layout/Layout';
import jobDescriptionFile from '../data/engineer-who-can-design.md';

export default function JobDescription() {
  const [jobDescriptionText, setJobDescriptionText] = useState('');

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
    </Layout>
  );
}
