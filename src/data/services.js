export const services = [
  {
    id: 'lighting',
    icon: 'Lightbulb',
    title: 'Commercial Lighting Solutions',
    description:
      'LED retrofits, parking lot lighting, and retail display lighting engineered to boost sales, cut energy costs, and meet commercial code.',
    highlighted: true,
  },
  {
    id: 'maintenance',
    icon: 'Wrench',
    title: 'Maintenance & Service Contracts',
    description:
      'Scheduled inspections, 24/7 emergency response, and proactive troubleshooting to prevent costly downtime across your facilities.',
    highlighted: false,
  },
  {
    id: 'installs',
    icon: 'Building',
    title: 'New Commercial Installs',
    description:
      'Complete wiring and electrical infrastructure for new stores, warehouses, and office buildings — delivered on time and up to code.',
    highlighted: false,
  },
];

export const serviceDropdownOptions = [
  { value: '', label: 'Select a Service…' },
  { value: 'Commercial Lighting Solutions', label: 'Commercial Lighting Solutions' },
  { value: 'Maintenance & Service Contracts', label: 'Maintenance & Service Contracts' },
  { value: 'New Commercial Installs', label: 'New Commercial Installs' },
];
