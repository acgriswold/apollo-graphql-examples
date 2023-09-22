import React from "react";
import { Layout } from "../components";
import QueryResult from "../components/query-result";
import { gql } from "../__generated__";

import TrackDetail from "../components/track-detail";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";


const Track = () => {
    const { trackId = "" } = useParams();
    const { loading, error, data } = useQuery(GET_TRACK, {
        variables: {
            trackId
        }
    });


    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                <TrackDetail track={data?.track} />
            </QueryResult>
        </Layout>
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
