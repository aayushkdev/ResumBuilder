import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Form from './components/Form';
import Preview from './components/Preview';

const App = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    educationTitle: '',
    educationPlace: '',
    educationDate: '',
    education: '',
    experienceTitle: '',
    experiencePlace: '',
    experienceDate: '',
    experience: '',
    projects: '',
    skills: '',
  });

  const resumeRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save(`${form.name || 'resume'}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-8">
      <Form form={form} onChange={handleChange} onFormSubmit={() => {}} />
      <Preview form={form} resumeRef={resumeRef} />
      <div className="mt-6">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default App;
