const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex text-[#9873FF] gap-4">
          <button className="px-5 py-2 font-extrabold border border-[#9873FF] rounded">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border border-[#9873FF] rounded">
            {job_type}
          </button>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;




