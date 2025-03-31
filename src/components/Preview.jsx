import React from 'react';

const Preview = ({ form, resumeRef }) => (
  <div
    ref={resumeRef}
    className="bg-white text-black font-serif p-12 shadow w-full max-w-3xl mx-auto"
    style={{ width: '210mm', minHeight: '297mm', boxSizing: 'border-box' }}
  >
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold">{form.name}</h1>
      <p className="text-sm mt-1">{form.email} | {form.phone}</p>
    </div>

    <Section title="Education">
      <EduOrExpBlock
        title={form.educationTitle}
        place={form.educationPlace}
        date={form.educationDate}
        content={form.education}
      />
    </Section>

    <Section title="Experience">
      <EduOrExpBlock
        title={form.experienceTitle}
        place={form.experiencePlace}
        date={form.experienceDate}
        content={form.experience}
      />
    </Section>

    <Section title="Projects">
      <BulletList text={form.projects} />
    </Section>

    <Section title="Skills">
      <p className="text-sm whitespace-pre-line">{form.skills}</p>
    </Section>
  </div>
);

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-sm font-bold uppercase tracking-wide border-b border-gray-300 mb-2">{title}</h2>
    {children}
  </div>
);

const EduOrExpBlock = ({ title, place, date, content }) => (
  <div className="mb-2">
    <div className="flex justify-between text-sm font-semibold">
      <span>{title} — {place}</span>
      <span>{date}</span>
    </div>
    <BulletList text={content} />
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
