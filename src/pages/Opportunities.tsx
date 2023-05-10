import { useState } from 'react';

import DropdownSelector from '../components/utilities/DropdownSelector';
import JobListing from '../components/JobListing';
import Layout from '../components/layout/Layout';

import { jobListings } from '../data/jobListings';

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

  const clearFilters = () => {
    setDepartment('All');
    setLocation('All');
  };

  const filteredJobListings = jobListings.filter(
    (jobListing) =>
      (department === 'All' || jobListing.department === department) &&
      (location === 'All' || jobListing.location === location)
  );

  console.log('\ndepartment', department);
  console.log('\nlocation', location);
  return (
    <Layout>
      <div>Find Your Perfect Role</div>
      <div>
        <DropdownSelector
          label="Department"
          elements={departments}
          defaultSelected={department}
          onValueChange={handleDepartment}
        />
        <DropdownSelector
          label="Location"
          elements={locations}
          defaultSelected={location}
          onValueChange={handleLocation}
        />
        <div className="flex justify-between">
          <p>
            Showing{' '}
            {location === 'All' && department === 'All' ? (
              <span>All Opportunities</span>
            ) : (
              <span className="font-bold">
                {location === 'All' ? (
                  <>
                    {department}{' '}
                    <span className="font-normal">Opportunities</span>
                  </>
                ) : (
                  <>
                    {department}{' '}
                    <span className="font-normal">Opportunities in </span>
                    {location}
                  </>
                )}
              </span>
            )}{' '}
            <span className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-ashby-700 text-white px-1">
              {filteredJobListings.length}
            </span>
          </p>

          <button onClick={clearFilters}>Clear Filters</button>
        </div>
        <div className="flex flex-col space-y-4 py-4">
          {filteredJobListings && filteredJobListings.length ? (
            filteredJobListings.map((jobListing) => (
              <JobListing
                slug={jobListing.slug}
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
