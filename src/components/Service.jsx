import React from 'react';
import { serviceData } from "../Data";



const Service = () => {
  return (
    <div className='p-5 m-5' style={styles.gridContainer}>
      {serviceData.map((service, index) => (
        <div key={index} style={{ ...styles.card, backgroundColor: service.bg }}>
          <div style={styles.icon}>{service.icon}</div>
          <h3 style={styles.title}>{service.title}</h3>
          <p style={styles.subtitle}>{service.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
  },
  card: {
    padding: '20px',
    borderRadius: '0px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#555',
  },
};

export default Service;
