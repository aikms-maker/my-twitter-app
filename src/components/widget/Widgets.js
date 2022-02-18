import Search from "@mui/icons-material/Search";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="widgets-search-icon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets-container">
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId={"1482744831357059077"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="aikman42766320"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/aikman42766320"}
          options={{ text: "#React #積み上げ", via: "aikman42766320" }}
        />
      </div>
    </div>
  );
};
