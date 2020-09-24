import styled, { css } from "styled-components";
import { GrLinkedin } from "react-icons/gr";
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from "react-icons/ai";

export const Container = styled.div``;

export const Wrapper = styled.div``;

const generalIconCSS = css`
    width: 24px;
    height: 24px;
`;

export const LinkedinIcon = styled(GrLinkedin)`
    ${generalIconCSS}
`;

export const SearchInput = styled.input``;

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
`;

export const CareDownIcon = styled(AiFillCaretDown)`
    ${generalIconCSS}
`;
