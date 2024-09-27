const ProjectDetails = ({ details }) => {
  if (!details || !details.projectInfo) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
      <div className="col-6 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Thickness</div>
        <div className="pt-text">{details.projectInfo.date}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-6 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Quantity
        </div>
        <div className="pt-text">{details.projectInfo.clientName}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-6 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Size
        </div>
        <div className="pt-text">{details.projectInfo.projectType}</div>
      </div>
      <div className="col-6 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
         Type
        </div>
        <div className="pt-text">{details.projectInfo.type}</div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
