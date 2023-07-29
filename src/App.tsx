import ReplyForm from './components/ReplyForm';

import React, { useContext, useState } from 'react';
import { replies } from './replies-data';
import ReplyCard from './components/ReplyCard';
import { createContext } from 'react';
import {
  addNode,
  deleteNode,
  editNode,
  addCommentsInLocalStorage,
  getCommentsFromLocalStorage,
} from './utils';

const ReplyContext = createContext(null);

export const useReplyContext = () => useContext(ReplyContext);

function App() {
  const [allComments, setAllComments] = useState(
    getCommentsFromLocalStorage() ?? replies
  );
  const [activeEditReplyId, setActiveEditReplyId] = useState('');

  const cancelActiveEditReplyId = () => setActiveEditReplyId('');

  const updateActiveEditReplyId = (replyId) => setActiveEditReplyId(replyId);

  const addReply = (replyDataToAdd, parentId) => {
    const allCommentsClone = structuredClone(allComments);

    addNode(allCommentsClone, replyDataToAdd, parentId);
    setAllComments(allCommentsClone);
    addCommentsInLocalStorage(allCommentsClone);
  };

  const editReply = (edittedText, replyIdForEdit) => {
    const allCommentsClone = structuredClone(allComments);

    editNode(allCommentsClone, edittedText, replyIdForEdit);

    setAllComments(allCommentsClone);
    cancelActiveEditReplyId();
    addCommentsInLocalStorage(allCommentsClone);
  };

  const deleteReply = (replyId) => {
    const allCommentsClone = structuredClone(allComments);

    deleteNode(allCommentsClone, replyId);
    setAllComments(allCommentsClone);
    addCommentsInLocalStorage(allCommentsClone);
  };

  return (
    <ReplyContext.Provider
      value={{
        allComments,
        addReply,
        editReply,
        deleteReply,
        cancelActiveEditReplyId,
        activeEditReplyId,
        updateActiveEditReplyId,
      }}
    >
      <main className='p-5'>
        <ReplyForm
          isEditingAndData={null}
          isAddingAndParentId={allComments.id}
          closeForm={null}
        />

        <div className='m-2 mt-4 ml-0'>
          {allComments.replies.map((reply) => (
            <ReplyCard replyData={reply} key={reply.id} />
          ))}
        </div>
      </main>
    </ReplyContext.Provider>
  );
}

export default App;
