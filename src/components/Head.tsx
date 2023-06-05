import React from 'react';
import { Link } from 'react-router-dom';
 
export function Head({
  heading, paragraph, linkName, isLogin
}) {
  return (
    <div className="mb-10">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        {paragraph}{' '}
          <button className="font-medium text-blue-600 hover:text-blue-500" onClick={isLogin}>
              {linkName}
          </button>
      </p>
    </div>
  );
}