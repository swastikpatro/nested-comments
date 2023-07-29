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

  obj.replies = obj.replies.filter(
    ({ id, isDeleted, replies }) =>
      !isDeleted || (replies.length > 0 && id === replyId)
  );
};

export const addCommentsInLocalStorage = (allCommentsClone) =>
  localStorage.setItem('all-comments', JSON.stringify(allCommentsClone));

export const getCommentsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('all-comments'));
export { deleteNode, addNode, editNode };
