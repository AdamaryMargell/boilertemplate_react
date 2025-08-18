import React from 'react';
import { Tag } from 'primereact/tag'; // Asumiendo que estás usando PrimeReact
import XIcon from './XIcons/XIcon';

interface TagProps {
  severity?: 'magenta' | 'aqua' | 'mint' | 'sand' | 'orange' | string;
  icon?: string;
  value: string;
  children?: React.ReactNode;
}

const XTag: React.FC<TagProps> = ({ severity, icon, value, children }) => {
  // Mapeo de clases según severity
  const getSeverityClasses = () => {
    switch (severity) {
      case 'magenta':
        return 'bg-magenta-50 text-magenta-500';
      case 'aqua':
        return 'bg-aqua-50 text-aqua-500';
      case 'mint':
        return 'bg-mint-50 text-mint-500';
      case 'sand':
        return 'bg-sand-50 text-sand-500';
      case 'orange':
        return 'bg-orange-50 text-orange-500';
      default:
        return '';
    }
  };

  return (
    <Tag 
      severity={severity} 
      className={getSeverityClasses()}
    >
      {icon && <XIcon name={icon} className="p-tag-icon" />}
      <span className={icon ? 'pl-1' : 'p-tag-value'}>{value}</span>
      {children}
    </Tag>
  );
};

export default XTag;

