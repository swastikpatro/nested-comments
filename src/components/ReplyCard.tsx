import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp, FaEdit, FaTrash } from 'react-icons/fa';
import ReplyForm from './ReplyForm';
import { useReplyContext } from '../App';
import { mainUser } from '../constants';

const ReplyCard = ({ replyData }) => {
  const {
    activeEditReplyId,
    updateActiveEditReplyId,
    deleteReply,
    cancelActiveEditReplyId,
  } = useReplyContext();

  const {
    id,
    replies,
    userData: { img, username, id: userId },
    text,
    isDeleted,
  } = replyData;

  const isReplyCurrentlyEditing = activeEditReplyId === id;

  const [isRepliesVisible, setIsRepliesVisible] = useState(true);

  const [isReplying, setIsReplying] = useState(false);

  const toggleIsReplying = () => {
    if (!isReplying && !!activeEditReplyId) {
      cancelActiveEditReplyId();
    }
    setIsReplying(!isReplying);
  };

  return (
    <article className='mb-2 ml-2'>
      <header className='flex gap-2 align-middle b'>
        <div className='rounded-full w-8 h-8 overflow-hidden'>
          <img
            src={img}
            alt={username}
            className='w-full h-full object-cover'
          />
        </div>

        {isDeleted ? (
          <span className='lowercase text-gray-400'>
            Reply Deleted by {username}
          </span>
        ) : (
          <h2 className='lowercase font-semibold'>{username}</h2>
        )}
      </header>

      <div className={`m-1 ml-4 border-l-2 border-gray-400`}>
        <main className={`${isReplyCurrentlyEditing ? 'pl-2' : 'pl-5'} pb-4`}>
          {isReplyCurrentlyEditing ? (
            <ReplyForm
              isEditingAndData={replyData}
              isAddingAndParentId={null}
              closeForm={cancelActiveEditReplyId}
            />
          ) : (
            <>
              {!isDeleted && <p className='mb-1'>{text}</p>}

              <div className='flex gap-3'>
                {replies.length > 0 && (
                  <button
                    className='flex gap-1 text-blue-700 font-semibold '
                    onClick={() => setIsRepliesVisible(!isRepliesVisible)}
                  >
                    <span className='mt-1'>
                      {isRepliesVisible ? <FaCaretDown /> : <FaCaretUp />}
                    </span>{' '}
                    {replies.length} repl{replies.length === 1 ? 'y' : 'ies'}
                  </button>
                )}

                <button
                  onClick={toggleIsReplying}
                  className='font-semibold text-gray-400'
                >
                  Reply
                </button>

                {userId === mainUser.id && !isDeleted && (
                  <>
                    <button
                      onClick={() => updateActiveEditReplyId(id)}
                      className='font-semibold'
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteReply(id)}
                      className='font-semibold text-red-600 hover:text-red-800'
                    >
                      <FaTrash />
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </main>

        {isRepliesVisible && (
          <div>
            {replies.map((reply) => (
              <ReplyCard replyData={reply} key={reply.id} />
            ))}
          </div>
        )}

        {isReplying && (
          <div className='mt-0 ml-2 mb-4 flex gap-2'>
            <ReplyForm
              isEditingAndData={null}
              isAddingAndParentId={id}
              closeForm={toggleIsReplying}
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default ReplyCard;
