import React from "react";

import Skeleton from "../../Skeleton";
import Panel from "../../Panel";

import { Container } from "./styles";

const LoadingFeedPost: React.FC = () => {
    return (
        <Container>
            <Panel className="no-shadow">
                <header>
                    <Skeleton className="avatar-skeleton" />
                    <div className="column">
                        <Skeleton className="row-skeleton"></Skeleton>
                        <Skeleton className="row-skeleton"></Skeleton>
                    </div>
                </header>
                <span>
                    <Skeleton className="row-skeleton"></Skeleton>
                    <Skeleton className="row-skeleton"></Skeleton>
                </span>
            </Panel>
        </Container>
    );
};

export default LoadingFeedPost;
