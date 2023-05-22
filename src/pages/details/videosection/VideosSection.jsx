import React, { useState } from "react";

import "./style.scss";

import { ContentWraper, Img, VideoPopUp } from "../../../components";

import { PlayIcon } from "../Playbtn";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <>
      {data && (
        <div className="videosSection">
          <ContentWraper>
            <div className="sectionHeading">Official Videos</div>
            {!loading ? (
              <div className="videos">
                {data?.results?.map((video) => (
                  <div
                    key={video.id}
                    className="videoItem"
                    onClick={() => {
                      setVideoId(video.key);
                      setShow(true);
                    }}
                  >
                    <div className="videoThumbnail">
                      <Img
                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                      />
                      <PlayIcon />
                    </div>
                    <div className="videoTitle">{video.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="videoSkeleton">
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
                {loadingSkeleton()}
              </div>
            )}
          </ContentWraper>
          <VideoPopUp
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoId}
          />
        </div>
      )}
    </>
  );
};

export default VideosSection;
