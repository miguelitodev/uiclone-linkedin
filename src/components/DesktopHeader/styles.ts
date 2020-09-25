import styled, { css } from "styled-components";
import { GrLinkedin } from "react-icons/gr";
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from "react-icons/ai";

export const Container = styled.div`
    background: var(--color-header);
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    display: none;

    @media screen and (min-width: 1180px) {
        display: block;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 1128px;
    margin: 0 auto;
    height: 52px;

    .left,
    .right nav {
        display: flex;
        align-items: center;
    }

    .right nav {
        height: 100%;

        > button {
            background: none;
            border: 0;
            outline: 0;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 90px;
            min-height: 100%;

            color: var(--color-icons);
            cursor: pointer;

            &:hover {
                color: var(--color-white);
            }
            &.active {
                border-bottom: 2px solid var(--color-white);
            }
        }
    }
`;

const generalIconCSS = css`
    width: 24px;
    height: 24px;
`;

export const LinkedinIcon = styled(GrLinkedin)`
    height: 34px;
    width: 34px;
    color: var(--color-linkedin);
    background: var(--color-white);
    border-radius: 4px;
    flex-shrink: 0;
`;

export const SearchInput = styled.input`
    margin-left: 12px;
    background: var(--color-input);
    color: var(--color-black);
    font-size: 14px;
    padding: 7.5px 8px;
    outline: none;
    border-radius: 2px;

    &:focus {
        background: var(--color-white);
    }
`;

export const HomeIcon = styled(AiFillHome)`
    ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
    ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: solid 1px var(--color-icons);
    flex-shrink: 0;
`;

export const CareDownIcon = styled(AiFillCaretDown)`
    width: 16px;
    height: 16px;
`;
