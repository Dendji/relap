import styled from 'styled-components';

export const FigureComponent = styled.div`
    max-width: 100%;
    position: relative;
`;

export const ImageFrame = styled.div`
    width: 100%;
    padding-top: ${props =>
        props.arHeight && props.arWidth
            ? (props.arHeight / props.arWidth) * 100 + '%'
            : '100%'};
    overflow: hidden;
    position: relative;
`;

export const FigCaption = styled.figcaption`
    padding: 20px 5px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
`;

export const AspectRatioInnerContent = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
`;

export const ImageWithAspectRatio = styled.img`
    height: auto;
    margin: auto;
    position: absolute;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    max-width: ${props =>
        props.arWidth > props.arHeight ? '100%' : undefined};
    max-height: ${props =>
        props.arWidth <= props.arHeight ? '100%' : undefined};
`;
