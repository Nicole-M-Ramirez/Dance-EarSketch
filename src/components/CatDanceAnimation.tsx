import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlaying } from '../daw/dawState';

const CatDanceAnimation: React.FC = () => {
  const playing = useSelector(selectPlaying);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {playing && (
        <div className="w-16 h-16 relative">
          <div className="absolute w-8 h-8 bg-orange-400 rounded-full animate-bounce" style={{ animationDuration: '0.5s' }}>
            <div className="absolute -top-2 left-2 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute -top-2 right-2 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-1 w-1 h-1 bg-orange-400 rounded-full"></div>
            <div className="absolute -bottom-1 right-1 w-1 h-1 bg-orange-400 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatDanceAnimation; 