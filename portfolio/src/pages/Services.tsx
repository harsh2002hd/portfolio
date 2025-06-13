import { motion } from 'framer-motion';

const services = [
  {
    title: 'Subject Matter Expert (SME)',
    description: 'Expert guidance in AI/ML, Python, and hardware prototyping. Providing in-depth knowledge and solutions for complex technical challenges. Tools: Python, AI/ML frameworks, Hardware platforms. High value – specialized expertise in emerging technologies.',
    icon: '🎓',
  },
  {
    title: 'AI Chatbot Development',
    description: 'Every business wants automation. Tools: Dialogflow, Rasa, GPT APIs, Langchain. High profit – used in e-commerce, education, healthcare, etc. Skill Level: Moderate (easier with templates & APIs)',
    icon: '🤖',
  },
  {
    title: 'Data Annotation & Labeling',
    description: 'Required for training AI/ML models. Tools: Labelbox, CVAT, Supervisely, custom web apps. Medium–High profit – big companies outsource this a lot. Skill Level: Easy – can start as a service business or team.',
    icon: '🏷️',
  },
  {
    title: 'Web Scraping & Automation',
    description: 'Used in price tracking, research, lead gen, SEO. Tools: Python (BeautifulSoup, Selenium), Scrapy. High profit – clients pay well for clean, structured data. Skill Level: Easy–Moderate (basic Python + logic)',
    icon: '🕸️',
  },
  {
    title: 'Custom Web App Development',
    description: 'Small businesses always need websites, dashboards. Tools: HTML, CSS, JS, React, Node.js. High profit – depending on scope; easy to scale as an agency. Skill Level: Moderate (can use templates, drag-drop builders to start)',
    icon: '💻',
  },
  {
    title: 'AI Tools Integration',
    description: 'Businesses want to use GPT, DALL·E, etc., in their workflows. Tools: OpenAI API, Hugging Face, Zapier. High profit – niche + premium clients. Skill Level: Beginner–Intermediate (no need to build model, just integrate)',
    icon: '🔗',
  },
  {
    title: 'Data Dashboards & Reporting Tools',
    description: 'Every manager wants visual insights from data. Tools: Power BI, Tableau, Dash, Streamlit. Medium–High profit – especially in finance, marketing, HR. Skill Level: Easy – drag & drop, Excel-level logic',
    icon: '📊',
  },
];

export default function Services() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <span className="text-5xl mb-4">{service.icon}</span>
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 