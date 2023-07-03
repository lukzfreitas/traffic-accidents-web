import styled from "styled-components";

interface PropsRow {    
    height?: string;
    width?: string;
    widthTablet?: string;
    widthMobile?: string;
    padding?: string;
    paddingTablet?: string;
    paddingMobile?: string;
    color?: string;
}

export const Row = styled.div<PropsRow>`
    display: flex;
    flex-wrap: wrap;    
    height: ${(p: PropsRow) => p.height};
    width: ${(p: PropsRow) => p.width};
    background-color: ${(p: PropsRow) => p.color};
    padding: ${(p: PropsRow) => p.padding};
    @media (max-width: 1200px) {
        padding: ${(p: PropsRow) => p.paddingTablet};
        width: ${(p: PropsRow) => p.widthTablet};
    }
    @media (max-width: 700px) {
        padding: ${(p: PropsRow) => p.paddingMobile};
        width: ${(p: PropsRow) => p.widthMobile};
    }
    `