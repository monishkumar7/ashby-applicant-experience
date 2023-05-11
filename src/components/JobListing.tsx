import { Link } from 'react-router-dom';
import { JobListingProps } from '../types/JobListing.types';

export default function JobListing({
  slug,
  title,
  salary,
  type,
  location
}: JobListingProps) {
  return (
    <Link to={`opportunity/${slug}`}>
      <div className="border border-ashby-100 flex flex-col p-4 rounded text-gray-700 space-y-2 bg-white">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm">{salary}</p>
        <div className="flex justify-between text-gray-500 text-sm">
          <p>{type}</p>
          <p>{location}</p>
        </div>
      </div>
    </Link>
  );
}
