import {} from 'react';

const Error = ({mensaje}) => {
    return (
      <div className="text-center bg-red-800 rounded text-white font-bold p-3 mb-3 uppercase">
        <p>{mensaje}</p>
      </div>
    );
}

export default Error
