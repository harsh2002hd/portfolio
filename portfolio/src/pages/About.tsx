import bgImage from '../assets/images/bg.jpg';

export default function About() {
  return (
    <div className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 max-w-4xl mx-auto">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg">
        <img 
          src={bgImage} 
          alt="Harsh Sharma" 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="mb-4 text-lg font-bold">
          BE graduate in Electronics & Communication Engineering (MBM University, Jodhpur – May 2025). 4+ years' experience as a Subject Matter Expert and freelancer in EdTech, specializing in AI/ML, Python, web dev, and hardware prototyping. Passionate about blending intelligent systems with real-world applications.
        </p>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          <strong>Education:</strong> MBM University, Jodhpur<br />
          <strong>Degree:</strong> B.E. Electronics & Communication Engineering<br />
          <strong>Graduation:</strong> May 2025
        </div>
      </div>
    </div>
  );
} 