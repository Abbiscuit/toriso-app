import React from 'react';

const PostsForm = ({ placeholder }) => {
  return (
    <form>
      <textarea
        type="text"
        name="about-me"
        id="about-me"
        placeholder={!placeholder ? '投稿する' : placeholder}
      ></textarea>

      <input type="submit" value="投稿" className="button button-block" />
    </form>
  );
};

export default PostsForm;
