import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative">
            {title}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform scale-x-50"></span>
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;