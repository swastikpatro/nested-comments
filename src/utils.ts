import { mainUser } from './constants';

const addNode = (obj, data, parentId) => {
  if (obj.id === parentId) {
    obj.replies.push(data);
    return;
  }

  obj.replies.forEach((childObj) => {
    addNode(childObj, data, parentId);
  });
};

const editNode = (obj, edittedText, idWhoseTextToEdit) => {
  if (obj.id === idWhoseTextToEdit) {
    obj.text = edittedText;
    return;
  }

  obj.replies.forEach((childObj) => {
    editNode(childObj, edittedText, idWhoseTextToEdit);
  });
};

const deleteNode = (obj, replyId) => {
  if (obj.id === replyId) {
    obj.isDeleted = true;
    return;
  }

  obj.replies.forEach((childObj) => {
    deleteNode(childObj, replyId);
  });

  const indexOfObjToBeRemoved = obj.replies.findIndex(
    ({ isDeleted, replies, userData: { id: userId } }) =>
      isDeleted && userId === mainUser.id && replies.length < 1
  );
  if (indexOfObjToBeRemoved !== -1)
    obj.replies.splice(indexOfObjToBeRemoved, 1);
};

export const addCommentsInLocalStorage = (allCommentsClone) =>
  localStorage.setItem('all-comments', JSON.stringify(allCommentsClone));

export const getCommentsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('all-comments'));
export { deleteNode, addNode, editNode };
