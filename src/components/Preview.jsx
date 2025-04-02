import React from 'react';

const Preview = ({ form, resumeRef }) => (
  <div
    ref={resumeRef}
    className="bg-white text-black font-serif p-8 shadow w-full max-w-3xl mx-auto overflow-auto"
    style={{ width: '100%', maxWidth: '210mm', minHeight: '297mm', boxSizing: 'border-box' }}
  >
    
  <div className="text-center mb-6">
    <h1 className="text-2xl font-bold">{form.name}</h1>
    <p className="text-sm mt-1">
      {[form.email, form.phone, form.linkedin, form.github]
        .filter(Boolean)
        .join(' | ')}
    </p>
  </div>

    {form.education?.length > 0 && (
      <Section title="Education">
        {form.education.map((edu, idx) => (
          <EduBlock
            key={idx}
            title={edu.title}
            place={edu.place}
            date={edu.date}
            content={edu.details}
          />
        ))}
      </Section>
    )}

    {form.experience?.length > 0 && (
      <Section title="Experience">
        {form.experience.map((exp, idx) => (
          <ExpBlock
            key={idx}
            title={exp.title}
            company={exp.company}
            place={exp.place}
            date={exp.date}
            content={exp.details}
          />
        ))}
      </Section>
    )}

    {form.projects?.length > 0 && (
      <Section title="Projects">
        <ul className="list-disc ml-6 text-sm">
          {form.projects.map((proj, idx) => (
            <li key={idx}>{proj}</li>
          ))}
        </ul>
      </Section>
    )}

    {form.skills && (
      <Section title="Technical Skills">
        <ul className="text-sm list-none space-y-1">
          {form.skills.languages && (
            <li>
              <strong>Languages:</strong> {form.skills.languages}
            </li>
          )}
          {form.skills.frameworks && (
            <li>
              <strong>Frameworks & Libraries:</strong> {form.skills.frameworks}
            </li>
          )}
          {form.skills.technologies && (
            <li>
              <strong>Technologies:</strong> {form.skills.technologies}
            </li>
          )}
        </ul>
      </Section>
    )}

  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 mb-2">{title}</h2>
    {children}
  </div>
);

const ExpBlock = ({ title, place, company, date, content }) => (
  <div className="mb-4 flex justify-between text-sm gap-4">
    <div className="w-2/3 flex flex-col justify-start">
      <div className="font-semibold">{company}</div>
      <div className="italic text-gray-700 mb-1">{title}</div>
      <BulletList text={content} />
    </div>

    <div className="w-1/3 flex flex-col items-end text-right justify-start">
      <div className="font-semibold">{date}</div>
      <div className="italic text-gray-600">{place}</div>
    </div>
  </div>
);


const EduBlock = ({ title, place, date, content }) => (
  <div className="mb-4 flex justify-between text-sm">
    <div className="w-2/3">
      <div className="font-semibold">{title}</div>
      <div className="text-gray-600 italic mt-auto">{content}</div>
    </div>

    <div className="w-1/3 flex flex-col items-end text-right">
      <div className="font-semibold">{date}</div>
      <div className="text-gray-600 italic mt-auto">{place}</div>
    </div>
  </div>
);


const BulletList = ({ text }) => {
  if (!text) return null;
  return (
    <ul className="list-disc ml-6 text-sm">
      {text
        .split('\n')
        .filter((line) => line.trim() !== '')
        .map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
    </ul>
  );
};

export default Preview;
