import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import selfVolunteerFile from '../data/self-volunteer-text.md';
import raceFile from '../data/race-text.md';
import veteranFile from '../data/veteran-text.md';

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
    <div>
      <h4 className="text-gray-500 mb-4">
        <span className="uppercase">
          U.S. Equal Employment Opportunity Information
        </span>{' '}
        (Compleition is voluntary and will not subject you to adverse treatment)
      </h4>
      <ReactMarkdown
        className="prose text-gray-500"
        children={selfVolunteerText}
      />
      <ReactMarkdown className="prose text-gray-500" children={raceText} />
      <ReactMarkdown className="prose text-gray-500" children={veteranText} />
    </div>
  );
}
