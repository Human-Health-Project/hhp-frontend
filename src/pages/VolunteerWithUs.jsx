import React, { useState } from "react";
import ProgramsGrid from "../components/Programs";
import "./VolunteerWithUs.css";

const roleOptions = [
  "Director of Data & Reimbursement (Healthcare Programs)",
  "Director of Clinical Compliance",
  "Director of Care Delivery (CHW & Patient Navigation)",
  "Director of Healthcare Integration (Medi-Cal / Medicare Programs)",
  "Partnerships & University Outreach Coordinator",
  "Education Video & Content Creator",
  "LMS / Learning Platform Specialist",
  "Instructional Designer (Senior / Specialist)",
  "Recruitment & Outreach Specialist",
  "Talent Acquisition & Growth Lead",
  "Talent & Recruitment Lead – Healthcare Innovation",
  "Social Media & Digital Outreach Assistant",
  "Social Impact and Mission Marketing Coordinator",
  "Proposal Writing and Presentation Specialist",
  "Corporate Sponsorship Outreach Lead",
  "Non-Profit Community Engagement and Referral Network Liaison",
  "Non-Profit Innovation and Program Development Assistant",
  "Education & Online Learning Specialist",
  "CMO (Chief Marketing Officer)",
  "Chief Product Officer",
  "Senior Full Stack Engineer",
  "CTO – Chief Technology Officer",
  "Senior SEO Expert",
  "Blog Writer",
  "Fundraising Volunteers for the Human Health Project",
  "Volunteer Recruiter: Senior Team & Board Members",
  "Healthcare Access Services Educator",
  "Laravel Developer Intern",
  "Success & Operations Coordinator",
  "Communications & Marketing Lead",
  "Research & Impact Evaluation Lead",
  "Implementation & Customer Success Lead",
  "Data Analyst (Health + Program Insights)",
  "Training & Certification Manager",
  "Grants & Institutional Funding Manager",
  "Director of Revenue Operations (RevOps)",
  "Marketing Specialist",
  "Business Development Strategist",
  "Animators with Children's Experience",
  "Writers with Children's/Youth Experience",
  "Curriculum Researchers",
  "Experienced Volunteer Program Director",
  "Azure DevOps Engineer",
  "Business Analyst",
  "Web Developer with WordPress Knowledge",
  "Developer Community Evangelist",
  "Partner and Strategic Alliance Coordinator",
  "Business Development Analyst",
  "Donor Relations and Stewardship Assistant",
  "HR Assistant",
  "Video Content Creator Volunteer",
  "Social Media Manager Volunteer",
  "YouTube Content & SEO Assistant Volunteer",
  "Information Security Officer",
  "Addiction Medicine Consultant",
  "Community Health Worker - Student Position",
  "Healthcare Billing Specialist",
  "Health Insurance Specialist",
  "Community Health Worker (CHW), Patient Advocacy Team",
  "Community Health Worker Coordinator - Patient Advocacy",
  "Senior Program Lead, Community Health & Care Management Volunteer",
  "React Developer Intern",
  "React Developer",
  "CDO - Chief Development Officer",
];

export default function VolunteerWithUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    roles: [],
    googleFormFilled: false,
    professionalSummary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleFormCheckbox = () => {
    setFormData((prev) => ({
      ...prev,
      googleFormFilled: !prev.googleFormFilled,
    }));
  };

  const handleRoleSelect = (e) => {
    const selectedRole = e.target.value;
    if (!selectedRole) return;

    setFormData((prev) => {
      if (prev.roles.includes(selectedRole)) return prev;
      return { ...prev, roles: [...prev.roles, selectedRole] };
    });

    e.target.value = "";
  };

  const handleRemoveRole = (roleToRemove) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.filter((role) => role !== roleToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="vwu-pageWrapper">
      <section
        className="vwu-heroSection"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://humanhealthproject.org/wp-content/uploads/2025/11/luca-bravo-9l_326FISzk-unsplash-1200x800.jpg)",
        }}
      >
        <div className="vwu-heroOverlay">
          <div className="vwu-heroContainer">
            <h1 className="vwu-heroTitle">Volunteer with HHP</h1>
          </div>
        </div>
      </section>

      <div className="vwu-mainContainer">
        <section className="vwu-section">
          <h2 className="vwu-sectionTitle">How to Apply</h2>
          <ul className="vwu-stepsList">
            <li className="vwu-stepItem">Choose an area that interests you</li>
            <li className="vwu-stepItem">
              Write a short professional summary (200–300 words) about why you'd
              be a great fit
            </li>
            <li className="vwu-stepItem">
              Fill the Q&amp;A form for your application to be processed
            </li>
            <li className="vwu-stepItem">Attach your Resume</li>
          </ul>
        </section>

        <form onSubmit={handleSubmit} className="vwu-form">
          <div className="vwu-formGroup">
            <label className="vwu-label">
              Full Name <span className="vwu-required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="vwu-input"
              required
            />
          </div>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Email <span className="vwu-required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="vwu-input"
              required
            />
          </div>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Roles <span className="vwu-required">*</span>
            </label>

            <select
              className="vwu-select"
              onChange={handleRoleSelect}
              defaultValue=""
            >
              <option value="" disabled>
                Select a role
              </option>
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            {formData.roles.length > 0 && (
              <div className="vwu-selectedRoles">
                {formData.roles.map((role) => (
                  <div key={role} className="vwu-roleChip">
                    <span>{role}</span>
                    <button
                      type="button"
                      className="vwu-roleRemove"
                      onClick={() => handleRemoveRole(role)}
                      aria-label={`Remove ${role}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="vwu-formLinkText">
            For your application to be processed, complete the Q&amp;A in this
            form{" "}
            <a
              href="https://forms.gle/6sefRinUT8wTw7H8A"
              className="vwu-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          </p>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Application Confirmation <span className="vwu-required">*</span>
            </label>
            <label className="vwu-checkboxLabel">
              <input
                type="checkbox"
                checked={formData.googleFormFilled}
                onChange={handleGoogleFormCheckbox}
                className="vwu-checkbox"
              />
              I have filled out the Google Form mentioned above
            </label>
          </div>

          <div className="vwu-formGroup">
            <label className="vwu-label">
              Please provide a professional summary and how you are a good fit
              for HHP (200–300 words)
              <span className="vwu-required">*</span>
            </label>
            <textarea
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleInputChange}
              className="vwu-textarea"
              rows={6}
              required
            />
          </div>

          <button type="submit" className="vwu-submitButton">
            Submit
          </button>
        </form>

        <ProgramsGrid />
      </div>
    </div>
  );
}