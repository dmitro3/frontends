import { Dialog, DialogContent } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'src/store/modal';

import Transition from './Transition';

const GenreModal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open TransitionComponent={Transition} onClose={onClose} maxWidth="lg">
      <DialogContent>
        <div className="p-3 text-center mb-3 text-xl">Select Pool</div>
        <form className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-700 border-main-400 outline-none   focus:border-main-100"
              placeholder="Search"
              required
            />
          </div>
        </form>

        <div className="w-full my-3  bg-gray-700 border-gray-600 text-white">
          <button
            type="button"
            className="inline-flex rounded relative items-center py-2 px-4 w-full text-sm font-medium border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
          >
            <svg
              aria-hidden="true"
              className="mr-2 w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            GameFi
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenreModal;
