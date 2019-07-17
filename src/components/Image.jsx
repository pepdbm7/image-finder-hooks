import React from "react";

const Image = ({
  image: { largeImageURL, likes, previewURL, tags, views }
}) => {
  console.log(likes);
  return (
    <div className="co-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{likes} Likes</p>
          <p className="card-text">{views} Views</p>
        </div>

        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
            View Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Image;
