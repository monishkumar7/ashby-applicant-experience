import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import JobDetailsMobile from '../components/JobDetailsMobile';
import Layout from '../components/layout/Layout';
import FormTextInput from '../components/utilities/FormTextInput';
import FormTextArea from '../components/utilities/FormTextArea';
import FormYesNo from '../components/utilities/FormYesNo';
import USEqualEmployment from '../components/USEqualEmployment';

export default function JobApplication() {
  return (
    <Layout>
      <JobDetailsMobile />
      <div className="flex">
        <a
          className="p-1 rounded text-center bg-ashby-100 border-[0.5px] border-ashby-700 text-ashby-700 w-full"
          href="/jobdescription"
        >
          View Job Description
        </a>
      </div>
      <h3 className="section-header">Job Application</h3>
      <Formik
        initialValues={{
          name: '',
          email: '',
          linkedin: '',
          github: '',
          question: '',
          timezone: '',
          experience: '',
          designSystem: ''
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
        }}
      >
        <Form className="flex flex-col">
          <h4 className="sub-section-header">Applicant Details</h4>
          <FormTextInput
            label="Full Name"
            name="name"
            type="text"
            placeholder="John Doe"
          />
          <FormTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
          />
          <h4 className="sub-section-header">Profile & Links</h4>
          <FormTextInput
            label="LinkedIn Profile Link"
            name="linkedin"
            type="text"
            placeholder="linkedin.com/johndoe"
          />
          <FormTextInput
            label="Github Profile Link"
            name="github"
            type="text"
            placeholder="github.com/johndoe"
          />
          <h4 className="sub-section-header">Questions</h4>
          <FormTextArea
            label="What is most important to you in your next role?"
            name="question"
            type="text"
            placeholder="linkedin.com/johndoe"
          />
          <FormYesNo
            question="Are you able to work in North America or EU timezones?"
            questionDetails={`If you live in the Asian-Pacific region, we will reject your application even if you believe you can work in these timezones. We don't believe it's sustainable even with async communication.`}
            name="timezone"
          />
          <FormYesNo
            question="Do you have 8+ years of experience as a full-time frontend engineer?"
            questionDetails={`We'll also consider folks who have 4+ years and spent the other 4+ years as a product designer.`}
            name="experience"
          />
          <FormYesNo
            question="Have you made major contributions to a design system?"
            questionDetails={`Either as a designer or frontend engineer.`}
            name="experience"
          />
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
