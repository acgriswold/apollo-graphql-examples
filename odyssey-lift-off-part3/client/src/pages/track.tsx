import React from "react";
import { Layout } from "../components";
import QueryResult from "../components/query-result";
import { gql } from "../__generated__";
import TrackCard from "../containers/track-card";

import { useParams } from "react-router-dom";


const Track = () => {
    const { trackId = "" } = useParams();

    return (
        <Layout></Layout>
    );
};

export const GET_TRACK = gql(`
    query GetTrack($trackId: ID!) {
        track(id: $trackId) {
        id
        title
        author {
            id
            name
            photo
        }
        thumbnail
        length
        modulesCount
        numberOfViews
        modules {
            id
            title
            length
        }
        description
        }
    }
`)

export default Track;
