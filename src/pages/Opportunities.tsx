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
      <div className="flex flex-col space-y-4">
        <p>Find Your Perfect Role</p>

        <DropdownSelector
          label="Department"
          elements={departments}
          preSelected={department}
          onValueChange={handleDepartment}
        />
        <DropdownSelector
          label="Location"
          elements={locations}
          preSelected={location}
          onValueChange={handleLocation}
        />
        <div className="flex justify-between items-baseline">
          <p className="mt-12">
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

          <button
            className={`rounded bg-gray-500 px-4 text-white py-1 ${
              department === 'All' && location === 'All' ? 'opacity-40' : ''
            }`}
            disabled={department === 'All' && location === 'All' ? true : false}
            onClick={clearFilters}
          >
            Clear Filters
          </button>
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
            <p className="text-gray-500 text-sm text-center mt-8">
              No matching jobs found
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
