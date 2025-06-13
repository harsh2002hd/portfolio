const projects = [
  {
    title: 'Real-time Chat Application',
    description: 'A WhatsApp-like real-time chat application built with Node.js and Socket.IO, featuring instant messaging and notifications.',
    tech: ['Node.js', 'Socket.IO', 'JavaScript', 'HTML/CSS'],
    icon: '💬',
    link: 'https://github.com/harsh2002hd/realtime-chat-application'
  },
  {
    title: 'HS Esports Gaming Platform',
    description: 'A comprehensive gaming platform for esports tournaments and community engagement.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    icon: '🎮',
    link: 'https://github.com/harsh2002hd/hsesports'
  },
  {
    title: 'Smart Home Energy Monitor',
    description: 'Real-time energy monitoring using Arduino Uno and sensors.',
    tech: ['Arduino Uno', 'Sensors'],
    icon: '🏠',
  },
  {
    title: 'Earthquake Monitoring & Alert System',
    description: 'Remote earthquake detection and alerting using STM32, ESP8266, and Blynk.',
    tech: ['STM32', 'ESP8266', 'Blynk'],
    icon: '🌍',
  },
  {
    title: 'AI Chatbot',
    description: 'Text-based assistant powered by Python and OpenAI API.',
    tech: ['Python', 'OpenAI API'],
    icon: '🤖',
  },
  {
    title: 'Car Price Prediction',
    description: 'Regression ML model for predicting car prices.',
    tech: ['Regression', 'ML'],
    icon: '🚗',
  },
  {
    title: 'Heart Disease Prediction',
    description: 'Classification model for heart disease risk.',
    tech: ['Classification', 'ML'],
    icon: '❤️',
  },
  {
    title: 'Business Data Scraper',
    description: 'Automated data scraping using Python, BeautifulSoup, and Excel.',
    tech: ['Python', 'BeautifulSoup', 'Excel'],
    icon: '🕵️',
  },
  {
    title: 'Stock Market Trend Analyzer',
    description: 'LSTM-based time series forecasting for stock trends.',
    tech: ['LSTM', 'Time Series'],
    icon: '📈',
  },
];

export default function Projects() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col">
            <span className="text-4xl mb-2">{project.icon}</span>
            <h3 className="font-semibold text-lg mb-2">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech) => (
                <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 