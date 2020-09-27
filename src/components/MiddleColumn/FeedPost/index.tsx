import React from "react";

import Panel from "../../Panel";

import {
    Container,
    Row,
    PostImage,
    Separator,
    Avatar,
    Column,
    LikeIcon,
    CommentIcon,
    ShareIcon,
    SendIcon,
} from "./styles";

const FeedPost: React.FC = () => {
    return (
        <Panel>
            <Container>
                <Row className="heading">
                    <Avatar
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        alt="Eva Simone"
                    />
                    <Column>
                        <h3>Eva Simone</h3>
                        <h4>Random person</h4>
                        <time>1 sem</time>
                    </Column>
                </Row>

                <PostImage
                    src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png"
                    alt="Rocketseat Blog"
                />

                <Row className="likes">
                    <span className="circle blue" />
                    <span className="circle green" />
                    <span className="circle red" />
                    <span className="number">49</span>
                </Row>

                <Row>
                    <Separator />
                </Row>

                <Row className="actions">
                    <button>
                        <LikeIcon />
                        <span>Gostei</span>
                    </button>
                    <button>
                        <CommentIcon />
                        <span>Comentar</span>
                    </button>
                    <button>
                        <ShareIcon />
                        <span>Compartilhar</span>
                    </button>
                    <button>
                        <SendIcon />
                        <span>Enviar</span>
                    </button>
                </Row>
            </Container>
        </Panel>
    );
};

export default FeedPost;
