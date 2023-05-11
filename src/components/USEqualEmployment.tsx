import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import Radio from '../components/utilities/Radio';
import selfVolunteerFile from '../data/self-volunteer-text.md';
import raceFile from '../data/race-text.md';
import veteranFile from '../data/veteran-text.md';

const genderOptions = ['Male', 'Female', 'Decline to self-identify'];
const raceOptions = [
  'Hispanic or Latino',
  'White (Not Hispanic or Latino)',
  'Black or African American (Not Hispanic or Latino)',
  'Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)',
  'Asian (Not Hispanic or Latino)',
  'American Indian or Alaska Native (Not Hispanic or Latino)',
  'Two or More Races (Not Hispanic or Latino)',
  'Decline to self-identify'
];
const veteranOptions = [
  'I identify as one or more of the classifications of protected veteran listed above',
  'I am not a protected veteran',
  'I decline to self identify for protected veteran status'
];

export default function USEqualEmployment() {
  const [selfVolunteerText, setSelfVolunteerText] = useState('');
  const [raceText, setRaceText] = useState('');
  const [veteranText, setVeteranText] = useState('');

  useEffect(() => {
    fetch(selfVolunteerFile)
      .then((response) => response.text())
      .then((text) => setSelfVolunteerText(text));
    fetch(raceFile)
      .then((response) => response.text())
      .then((text) => setRaceText(text));
    fetch(veteranFile)
      .then((response) => response.text())
      .then((text) => setVeteranText(text));
  });

  return (
    <div className="flex flex-col space-y-8">
      <h4 className="text-gray-700 mt-8">
        <span className="uppercase">
          U.S. Equal Employment Opportunity Information
        </span>{' '}
        (Compleition is voluntary and will not subject you to adverse treatment)
      </h4>
      <div className="flex flex-col space-y-4">
        <ReactMarkdown
          className="prose text-gray-500"
          children={selfVolunteerText}
        />
        <Radio
          label="Please select your Gender"
          name="gender"
          options={genderOptions}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <ReactMarkdown className="prose text-gray-500" children={raceText} />
        <Radio
          label="Please select your Race"
          name="race"
          options={raceOptions}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <ReactMarkdown className="prose text-gray-500" children={veteranText} />
        <Radio
          label="Please select your Veteran Status"
          name="veteran"
          options={veteranOptions}
        />
      </div>
    </div>
  );
}
