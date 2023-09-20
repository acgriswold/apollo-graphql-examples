import React from "react";

import { gql } from "../__generated__/"
import { useQuery } from "@apollo/client";

import { Layout } from "../components";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

const Tracks = () => {
  const tracksResult = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult {...tracksResult}>
        {
          tracksResult.data?.tracksForHome?.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))
        }
      </QueryResult>
    </Layout>);
};



const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`)

export default Tracks;
