import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link, Navigate, useLocation } from 'react-router-dom';

import JobDetailsMobile from '../components/JobDetailsMobile';
import Layout from '../components/layout/Layout';
import TextInput from '../components/utilities/TextInput';
import TextArea from '../components/utilities/TextArea';
import YesNo from '../components/utilities/YesNo';
import USEqualEmployment from '../components/USEqualEmployment';
import FileUpload from '../components/utilities/FileUpload';

export default function JobApplication() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();
  const jobDetails = location.state.jobDetails;

  if (formSubmitted)
    return (
      <Navigate to={`/opportunity/${jobDetails.slug}/application/success`} />
    );

  return (
    <Layout>
      <JobDetailsMobile
        title={jobDetails?.title}
        salary={jobDetails?.salary}
        type={jobDetails?.type}
        location={jobDetails?.location}
      />
      <div className="flex mb-16">
        <Link
          className="p-1 rounded text-center bg-ashby-100 border-[0.5px] border-ashby-700 text-ashby-700 w-full"
          to={`/opportunity/${jobDetails.slug}`}
        >
          View Job Description
        </Link>
      </div>
      <h3 className="section-header my-4">Job Application</h3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          linkedin: '',
          github: '',
          question: '',
          timezone: '',
          experience: '',
          designSystem: '',
          gender: '',
          race: '',
          veteran: '',
          resume: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(25, 'Must be 25 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Please enter a valid email address')
            .required('Required')
        })}
        onSubmit={(values) => {
          console.log('Submitting', values);
          setFormSubmitted(true);
        }}
      >
        <Form className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <h4 className="sub-section-header">Applicant Details</h4>
            <TextInput
              label="Full Name"
              name="name"
              type="text"
              placeholder="John Doe"
            />
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
            />
            <FileUpload
              label="Resume"
              buttonText="Upload Resume (docx or pdf)"
              type="file"
              name="resume"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="sub-section-header">Profile & Links</h4>
            <TextInput
              label="LinkedIn Profile Link"
              name="linkedin"
              type="text"
              placeholder="linkedin.com/johndoe"
            />
            <TextInput
              label="Github Profile Link"
              name="github"
              type="text"
              placeholder="github.com/johndoe"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="sub-section-header">Questions</h4>
            <TextArea
              label="What is most important to you in your next role?"
              name="question"
              type="text"
              placeholder="Impact"
            />
            <YesNo
              question="Are you able to work in North America or EU timezones?"
              questionDetails={`If you live in the Asian-Pacific region, we will reject your application even if you believe you can work in these timezones. We don't believe it's sustainable even with async communication.`}
              name="timezone"
            />
            <YesNo
              question="Do you have 8+ years of experience as a full-time frontend engineer?"
              questionDetails={`We'll also consider folks who have 4+ years and spent the other 4+ years as a product designer.`}
              name="experience"
            />
            <YesNo
              question="Have you made major contributions to a design system?"
              questionDetails={`Either as a designer or frontend engineer.`}
              name="designSystem"
            />
          </div>
          <USEqualEmployment />
          <button
            className="w-full text-center rounded bg-ashby-700 text-white font-semibold py-1"
            type="submit"
          >
            Submit Application
          </button>
        </Form>
      </Formik>
    </Layout>
  );
}
