import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

export const TweetBox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox-input">
          <Avatar />
          <input placeholder="いまどうしてる？" type="text"></input>
        </div>
        <input
          className="tweet-img-input"
          placeholder="画像のURLを入力してください"
          type="text"
        ></input>
        <Button className="tweet-btn" type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  );
};
