import { useState } from 'react';

import { JobListingProps } from '../types/JobListing.types';
import DropdownSelector from '../components/utilities/DropdownSelector';
import JobListing from '../components/JobListing';
import Layout from '../components/layout/Layout';

const departments = ['All', 'Design', 'Engineering'];
const locations = ['All', 'Remote - Europe', 'Remote - North/South America'];

const jobListings: JobListingProps[] = [
  {
    title: 'Design Technologist',
    salary: '$50K - $185K / 0.01% - 0.38%',
    type: 'Full-time',
    location: 'Remote - Europe'
  },
  {
    title: 'Design Technologist',
    salary: '$120K - $260K / 0.01% - 0.5%',
    type: 'Full-time',
    location: 'Remote - North/South America'
  },
  {
    title: 'Engineer Who Can Design',
    salary: '$50K - $185K / 0.01% - 0.38%',
    type: 'Full-time',
    location: 'Remote - Europe'
  },
  {
    title: 'Engineer Who Can Design',
    salary: '$120K - $260K / 0.01% - 0.5%',
    type: 'Full-time',
    location: 'Remote - North/South America'
  }
];

export default function Opportunities() {
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const handleDepartment = (department: string) => {
    setDepartment(department);
  };
  const handleLocation = (location: string) => {
    setLocation(location);
  };
  return (
    <Layout>
      <div>Find Your Perfect Role</div>
      <div>
        <DropdownSelector
          label="Department"
          elements={departments}
          onValueChange={handleDepartment}
        />
        <DropdownSelector
          label="Location"
          elements={locations}
          onValueChange={handleLocation}
        />
        <div className="flex justify-between">
          <p>
            Showing{' '}
            {location === 'All' && department === 'All' ? (
              <span>All</span>
            ) : (
              <span className="font-bold">
                {location === 'All' ? department : ''}
              </span>
            )}{' '}
            Opportunities
          </p>
          <button>Clear Filters</button>
        </div>
        <div className="flex flex-col space-y-4 py-4">
          {jobListings.map((jobListing) => (
            <JobListing
              title={jobListing.title}
              salary={jobListing.salary}
              type={jobListing.type}
              location={jobListing.location}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
