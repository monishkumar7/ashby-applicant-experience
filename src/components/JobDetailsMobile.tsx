import { JobListingProps } from '../types/JobListing.types';

export default function JobDetailsMobile({
  title,
  salary,
  type,
  location
}: JobListingProps) {
  return (
    <div className="flex flex-col py-8 space-y-2">
      <p className="font-bold text-2xl">{title}</p>
      <p className="font-medium text-sm">{salary}</p>
      <p className="flex justify-between text-gray-500">
        <span>{type}</span>
        <span>{location}</span>
      </p>
    </div>
  );
}
