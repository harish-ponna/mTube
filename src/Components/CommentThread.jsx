import React from "react";

const CommentThread = (props) => {
  const {
    snippet: {
      topLevelComment: {
        snippet: { textOriginal, authorDisplayName, authorProfileImageUrl },
      },
    },
  } = props.commentThread;
  return (
    <div className="commentThread" style={{ margin: "30px 0" }}>
      <img
        src={authorProfileImageUrl}
        style={{
          height: "25px",
          width: "25px",
          borderRadius: "50%",
          display: "inline-block",
          marginRight: "15px",
        }}
        alt=""
      />
      <span style={{ fontSize: "13px" }}>{authorDisplayName}</span>
      <p style={{ fontSize: "15px" }}>{textOriginal}</p>
    </div>
  );
};

export default CommentThread;
