// Custom hook: useForm
import { useState } from 'react';
import useCommentSubmission from '../hooks/useCommentSubmission';

function useForm() {
  const [videoId, setVideoId] = useState('');
  const [formData, setFormData] = useState({});
  const {comments, submitComment, pushInitialComments} = useCommentSubmission();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(formData);
  //   e.target.reset();
  // };

  // const handleFormSubmit = (formData) => {
  //   const { username, comment } = formData;
  //   if (!username || !comment) {
  //     return alert('Harus diisi');
  //   }
  //   const commentData = {
  //     username,
  //     comment,
  //     videoId,
  //   };
  //   submitComment(commentData);

  const setFormDataObject = (formDataObject) => {
    setFormData(formDataObject);
  };

  const onSubmitComment = async (event) => {
    event.preventDefault();

    Object.keys(formData).map((key) => {
      const inputValue = event.target[key]?.value || "";
      if (!inputValue) {
        return alert("harus diisi");
      }
      formData[key] = inputValue;
      return true;
    });

    await submitComment({videoId, ...formData});
    event.target.reset();
  };

  const setInitialComments = (initialComments) => {
    pushInitialComments(initialComments);
  };


return {
    comments,
    setFormDataObject,
    onSubmitComment,
    setInitialComments,
    setVideoId,
  };
}

export default useForm;
