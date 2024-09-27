/* eslint-disable react/prop-types */
// components/Modal.jsx


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">Request a Granite Quotation</h2>
        <p className="modal-description">
          Please provide the details of your project to receive a customized quotation for granite.
        </p>
        <form className="quote-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity (in sq. ft.):</label>
              <input type="number" id="quantity" name="quantity" placeholder="Enter Quantity" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="project-type">Project Type:</label>
              <select id="project-type" name="projectType" required>
                <option value="">Select Project Type</option>
                <option value="countertop">Countertop</option>
                <option value="flooring">Flooring</option>
                <option value="wall">Wall</option>
                <option value="outdoor">Outdoor</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="granite-type">Granite Type:</label>
              <input type="text" id="granite-type" name="graniteType" placeholder="Type of Granite (e.g., Granite X)" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Information:</label>
            <textarea id="message" name="message" placeholder="Any additional details or requirements" />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
