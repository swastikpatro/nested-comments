import React, { useState } from 'react';
import { useReplyContext } from '../App';
import { mainUser } from '../constants';

const ReplyForm = ({ isAddingAndParentId, closeForm, isEditingAndData }) => {
  const [inputText, setInputText] = useState<string>(
    isEditingAndData ? isEditingAndData.text : ''
  );
  const { addReply, editReply } = useReplyContext();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const trimmedInput = inputText.trim();

    if (!trimmedInput) {
      alert('Please enter some text in input');
      return;
    }

    if (isAddingAndParentId) {
      addReply(
        {
          // eslint-disable-next-line
          id: self.crypto.randomUUID(),
          userData: mainUser,
          text: trimmedInput,
          replies: [],
        },
        isAddingAndParentId
      );

      setInputText('');
    }

    if (isEditingAndData) {
      editReply(trimmedInput, isEditingAndData.id);
    }

    if (closeForm) {
      closeForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 flex-wrap'>
      {!isEditingAndData && (
        <div className='rounded-full w-8 h-8 overflow-hidden self-center'>
          <img
            src={mainUser.img}
            alt={mainUser.username}
            className='w-full h-full object-cover'
          />
        </div>
      )}

      <textarea
        className='bg-white shadow-md rounded p-2 w-56 h-16'
        value={inputText}
        onChange={({ target: { value } }) => setInputText(value)}
        placeholder='Write your thoughts..'
        autoFocus={true}
      />

      <div className='flex flex-wrap gap-2'>
        <button
          className='middle none center rounded-lg bg-blue-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-7 self-end'
          data-ripple-light='true'
          type='submit'
        >
          {isEditingAndData ? 'Update' : 'Reply'}
        </button>

        {closeForm && (
          <button
            className='middle none center rounded-lg bg-red-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-7 self-end'
            data-ripple-light='true'
            onClick={closeForm}
          >
            cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ReplyForm;
