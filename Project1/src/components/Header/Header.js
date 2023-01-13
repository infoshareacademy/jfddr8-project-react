import { StyledHeader } from "./Header.style"

export function Header (props) {
    return (
        <StyledHeader>{props.children}</StyledHeader>
    )
}

