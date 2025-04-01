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
    education: [{ title: '', place: '', date: '', details: '' }],
    experience: [{ title: '', company:'', place: '', date: '', details: '' }],
    projects: [''],
    skills: '',
  });

  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save(`${form.name || 'resume'}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:flex md:gap-8">
      <div className="md:w-1/2">
        <Form form={form} setForm={setForm} />
        <button
          onClick={handleDownload}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Download PDF
        </button>
      </div>
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <Preview form={form} resumeRef={resumeRef} />
      </div>
    </div>
  );
};

export default App;
