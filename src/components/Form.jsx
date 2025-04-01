import React from 'react';

const Form = ({ form, setForm }) => {
  const handleAddEntry = (type) => {
    const newEntry = { title: '', place: '', date: '', details: '' };
    setForm((prev) => ({
      ...prev,
      [type]: [...prev[type], newEntry],
    }));
  };

  const handleRemoveEntry = (type, index) => {
    setForm((prev) => {
      const updatedEntries = [...prev[type]];
      updatedEntries.splice(index, 1);
      return { ...prev, [type]: updatedEntries };
    });
  };

  const handleChange = (e, type, index) => {
    const { name, value } = e.target;
    const updatedEntries = [...form[type]];
    updatedEntries[index] = { ...updatedEntries[index], [name]: value };
    setForm((prev) => ({ ...prev, [type]: updatedEntries }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form className="space-y-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Education</h2>
          {form.education.map((entry, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
              <input
                type="text"
                name="title"
                value={entry.title}
                onChange={(e) => handleChange(e, 'education', index)}
                className="w-full p-3 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Educational Institution's name"
              />
              <input
                type="text"
                name="place"
                value={entry.place}
                onChange={(e) => handleChange(e, 'education', index)}
                className="w-full p-3 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Place"
              />
              <input
                type="text"
                name="date"
                value={entry.date}
                onChange={(e) => handleChange(e, 'education', index)}
                className="w-full p-3 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Year/Date"
              />
              <textarea
                name="details"
                value={entry.details}
                onChange={(e) => handleChange(e, 'education', index)}
                className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Degree"
              />
              <button
                type="button"
                onClick={() => handleRemoveEntry('education', index)}
                className="text-red-500 hover:text-red-700"
              >
                - Remove Education
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddEntry('education')}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            + Add Education
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Experience</h2>
          {form.experience.map((entry, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
              <input
                type="text"
                name="title"
                value={entry.title}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="w-full p-3 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Job Title"
              />
              <input
                type="text"
                name="company"
                value={entry.company}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="w-full p-3 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Company"
              />
              <input
                type="text"
                name="place"
                value={entry.place}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="w-full p-3 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Place"
              />
              <input
                type="text"
                name="date"
                value={entry.date}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="w-full p-3 border rounded-md mb-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Year/Date"
              />
              <textarea
                name="details"
                value={entry.details}
                onChange={(e) => handleChange(e, 'experience', index)}
                className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Responsibilities"
              />
              <button
                type="button"
                onClick={() => handleRemoveEntry('experience', index)}
                className="text-red-500 hover:text-red-700"
              >
                - Remove Experience
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddEntry('experience')}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            + Add Experience
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Projects</h2>
          {form.projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
              <textarea
                name="project"
                value={project}
                onChange={(e) => {
                  const updatedProjects = [...form.projects];
                  updatedProjects[index] = e.target.value;
                  setForm((prev) => ({ ...prev, projects: updatedProjects }));
                }}
                className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Project Description"
              />
              <button
                type="button"
                onClick={() => {
                  const updatedProjects = [...form.projects];
                  updatedProjects.splice(index, 1);
                  setForm((prev) => ({ ...prev, projects: updatedProjects }));
                }}
                className="text-red-500 hover:text-red-700"
              >
                - Remove Project
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              const updatedProjects = [...form.projects, ''];
              setForm((prev) => ({ ...prev, projects: updatedProjects }));
            }}
            className="mt-2 text-blue-500 hover:text-blue-700"
          >
            + Add Project
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
          <textarea
            name="skills"
            value={form.skills}
            onChange={(e) => handleChange(e, 'skills')}
            className="w-full p-3 border rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
            placeholder="Skills"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
