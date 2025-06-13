import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const socials = [
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:hd2002sharma@gmail.com' },
  { icon: <FaPhone />, label: 'Phone', href: 'tel:+916350584687' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-sharma-325713227/' },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/harsh2002hd' },
  { icon: <FaGlobe />, label: 'Portfolio', href: 'https://harsh-portfolio-azure.vercel.app/' },
];

export default function Contact() {
  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
      <form 
        className="flex flex-col gap-4 bg-white dark:bg-gray-800 rounded-xl shadow p-6" 
        action="https://formsubmit.co/hd2002sharma@gmail.com" 
        method="POST"
      >
        <input type="hidden" name="_subject" value="New Portfolio Contact!" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://harsh-portfolio-azure.vercel.app/thanks" />
        
        <input type="text" name="name" placeholder="Name" required className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" name="email" placeholder="Email" required className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="subject" placeholder="Subject" required className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <textarea name="message" placeholder="Message" required rows={5} className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold">Send Message</button>
      </form>
      <div className="flex justify-center gap-6 mt-8">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 dark:text-blue-400 hover:scale-110 transition-transform" aria-label={s.label}>
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
} 