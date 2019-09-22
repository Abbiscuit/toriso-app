import React, { Fragment } from 'react';

const EditProfile = () => {
  return (
    <Fragment>
      <h2 className="section-title">
        <a href="/">Back</a>
      </h2>

      <section className="form-section">
        <h3 className="form-title">プロフィール編集</h3>
        <div className="form-detail">
          <form>
            <label for="skills">学んでいるスキル</label>
            <input
              type="text"
              name="skills"
              id="skills"
              placeholder="例: HTML, CSS, PHP"
            />

            <label for="how-to">どうやって？</label>
            <input
              type="text"
              name="how-to"
              id="how-to"
              placeholder="例: 教本名、コース名など"
            />

            <label for="about-me">わたしについて</label>
            <textarea
              type="text"
              name="about-me"
              id="about-me"
              placeholder="自己紹介を書いてください。今どんな勉強をしているか等を紹介してください。"
            ></textarea>

            <label for="github-account">GitHub連携</label>
            <input
              type="text"
              name="github-account"
              id="github-account"
              placeholder="githubusername"
            />

            <input type="submit" value="更新" className="button button-block" />
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default EditProfile;
