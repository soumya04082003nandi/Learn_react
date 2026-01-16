import React from 'react'

const Button = (props) => {
  const list = props.data;

  return (
    <div className="flex gap-3">
      {list.map((item) => (
        <a
          key={item.id}
          href={item.url}
          aria-label={item.name}
          className="w-10 h-10 flex items-center justify-center
                     rounded-full bg-gray-200 shadow-md
                     transition-all duration-300
                     hover:scale-110 hover:shadow-lg hover:bg-white"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-6 h-6 object-contain"
          />
        </a>
      ))}
    </div>
  );
};

export default Button;




