import { useState } from 'react';

import DropdownSelector from '../components/utilities/DropdownSelector';
import JobListing from '../components/JobListing';
import Layout from '../components/layout/Layout';

import { jobListings } from '../data/jobListing';

const departments = ['All', 'Design', 'Engineering'];
const locations = ['All', 'Remote - Europe', 'Remote - North/South America'];

export default function Opportunities() {
  const [department, setDepartment] = useState('All');
  const [location, setLocation] = useState('All');

  const handleDepartment = (department: string) => {
    setDepartment(department);
  };
  const handleLocation = (location: string) => {
    setLocation(location);
  };

  const filteredJobListings = jobListings.filter(
    (jobListing) =>
      (department === 'All' || jobListing.department === department) &&
      (location === 'All' || jobListing.location === location)
  );

  console.log('\nfilteredJobListings', filteredJobListings);

  return (
    <Layout>
      <div>Find Your Perfect Role</div>
      <div>
        <DropdownSelector
          label="Department"
          elements={departments}
          defaultSelected="All"
          onValueChange={handleDepartment}
        />
        <DropdownSelector
          label="Location"
          elements={locations}
          defaultSelected="All"
          onValueChange={handleLocation}
        />
        <div className="flex justify-between">
          <p>
            Showing{' '}
            {location === 'All' && department === 'All' ? (
              <span>All</span>
            ) : (
              <span className="font-bold">
                {location === 'All'
                  ? `${department} Opportunities`
                  : `${department} Opportunities in ${location}`}
              </span>
            )}{' '}
          </p>

          <button>Clear Filters</button>
        </div>
        <div className="flex flex-col space-y-4 py-4">
          {filteredJobListings && filteredJobListings.length ? (
            filteredJobListings.map((jobListing) => (
              <JobListing
                title={jobListing.title}
                salary={jobListing.salary}
                type={jobListing.type}
                location={jobListing.location}
                department={jobListing.department}
              />
            ))
          ) : (
            <p>No matches</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
