import styled from "styled-components";

export const CardNews = styled.div`
    min-width:15rem;
    min-height:10rem;
    width:20rem;
    height:25rem;
    border:1px solid #0002;
    border-radius:0.2rem;
    display:flex;
    flex-direction:column;
    position:relative;
    align-items:center;
    gap:0.2rem;
`

export const CardNewsImage = styled.div`
    width:100%;
    height:50%;
    object-fit:cover;
    z-index:1
`

export const CardNewsFront = styled.a`
    position:absolute;
    z-index:10;
    background:#0005;
    opacity:0.8;
    width:100%;
    height:100%;    
`

export const CardNewsButtonBottom = styled.button`
    background:red;
    width:10rem;
    height:2rem;
    position:absolute;
    bottom:0.2rem;
    border-radius:0.12rem;

`
