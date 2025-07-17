
const StatsSection = () => {
  const stats = [
    { number: '4', label: 'Cities Covered' },
    { number: '50+', label: 'Restaurants' },
    { number: '15+', label: 'Beaches' },
    { number: '18+', label: 'Age Friendly' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tampa-dark mb-2">
                {stat.number}
              </div>
              <div className="text-tampa-gray font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
