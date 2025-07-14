export default function ExperienceItem({ role, company, period, description }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h4>{role}</h4>
        <span className="company">@ {company}</span>
        <span className="period">{period}</span>
      </div>
      <p className="description">{description}</p>
    </div>
  );
} 