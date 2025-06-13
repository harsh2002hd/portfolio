import { FaPython, FaJs, FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaGithub, FaCloud, FaCogs, FaMicrochip, FaFileExcel, FaChartLine, FaCode } from 'react-icons/fa';
import { SiCplusplus, SiC, SiHtml5, SiCss3, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiArduino, SiEspressif, SiOpenai } from 'react-icons/si';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'JavaScript', icon: <FaJs /> },
    ],
  },
  {
    category: 'Web',
    items: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'React', icon: <FaReact /> },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'LSTM', icon: <FaCogs /> },
      { name: 'OpenAI', icon: <SiOpenai /> },
      { name: 'Neural Nets', icon: <FaCogs /> },
    ],
  },
  {
    category: 'Data Science',
    items: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Matplotlib', icon: <FaChartLine /> },
      { name: 'PySpark', icon: <FaCode /> },
      { name: 'Databricks', icon: <FaCloud /> },
    ],
  },
  {
    category: 'DB & Cloud',
    items: [
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Azure', icon: <FaCloud /> },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <FaCode /> },
      { name: 'Excel', icon: <FaFileExcel /> },
    ],
  },
  {
    category: 'Hardware',
    items: [
      { name: 'STM32', icon: <FaMicrochip /> },
      { name: 'Arduino', icon: <SiArduino /> },
      { name: 'ESP8266', icon: <SiEspressif /> },
      { name: 'Sensors', icon: <FaCogs /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {group.items.map((item) => (
                <span key={item.name} className="flex flex-col items-center text-blue-600 dark:text-blue-400">
                  <span className="text-3xl mb-1">{item.icon}</span>
                  <span className="text-xs font-medium">{item.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 