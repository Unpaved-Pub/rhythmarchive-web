"use client";
import styled from 'styled-components'
import Link from '../Common/link';

const StyledHeader = styled.div`
    background : white;
    padding : 10px 30px;
    border : 10px 0px;
    filter : drop-shadow(0 0 0.75rem #AAAAAA);
`;

function HeaderButton({href, children}) {

    return (
        <>
            <Link href={href}>
                {children}
            </Link>
        </>
    )
}


export default function Header() {
    return (
        <>
            <StyledHeader>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link href='/'>
                        TITLE
                    </Link>

                    <div
                        style={{
                            display: 'flex',
                            gap : 10,
                            
                        }}
                    >
                        <HeaderButton href="/about">About</HeaderButton>
                        <HeaderButton href="/terms">Terms</HeaderButton>
                    </div>
                        
                </div>
            </StyledHeader>
        </>
    )
}