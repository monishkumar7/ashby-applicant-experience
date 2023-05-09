import { JobListingProps } from '../types/JobListing.types';

export default function JobListing({
  title,
  salary,
  type,
  location
}: JobListingProps) {
  return (
    <div className="border border-ashby-700 flex flex-col p-4 rounded text-gray-700 space-y-2 bg-white">
      <h2 className="font-bold">{title}</h2>
      <p className="text-sm">{salary}</p>
      <div className="flex justify-between text-gray-500 text-sm">
        <p>{type}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
