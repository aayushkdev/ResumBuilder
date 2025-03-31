import React from 'react';

const Form = ({ form, onChange }) => (
  <div className="w-full max-w-lg mx-auto p-6">
    <form>
      <div className="mb-4">
        <label className="block font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={onChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Education Title</label>
        <input
          type="text"
          name="educationTitle"
          value={form.educationTitle}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Education Place</label>
        <input
          type="text"
          name="educationPlace"
          value={form.educationPlace}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Education Date</label>
        <input
          type="text"
          name="educationDate"
          value={form.educationDate}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Education Details</label>
        <textarea
          name="education"
          value={form.education}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Experience Title</label>
        <input
          type="text"
          name="experienceTitle"
          value={form.experienceTitle}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Experience Place</label>
        <input
          type="text"
          name="experiencePlace"
          value={form.experiencePlace}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Experience Date</label>
        <input
          type="text"
          name="experienceDate"
          value={form.experienceDate}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Experience Details</label>
        <textarea
          name="experience"
          value={form.experience}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Projects</label>
        <textarea
          name="projects"
          value={form.projects}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Skills</label>
        <textarea
          name="skills"
          value={form.skills}
          onChange={onChange}
          className="w-full p-2 border rounded"
        />
      </div>
    </form>
  </div>
);

export default Form;
