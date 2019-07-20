import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinner-material';
import { ErrorIcon } from '../ErrorIcon/ErrorIcon';
import {
    FigureComponent,
    ImageFrame,
    FigCaption,
    AspectRatioInnerContent,
    ImageWithAspectRatio
} from './FigureStyle';

const ImageStatus = {
    Loading: 'Loading',
    Loaded: 'Loaded',
    Error: 'Error'
};

export class Figure extends React.PureComponent {
    static propTypes = {
        src: PropTypes.string.isRequired,
        arWidth: PropTypes.number,
        arHeight: PropTypes.number
    };

    static defaultProps = {
        arWidth: 16,
        arHeight: 9
    };

    state = {
        status: ImageStatus.Loading
    };

    componentDidMount() {
        const { src } = this.props;
        const img = new Image();
        img.src = src;

        img.onload = () => this.setState({ status: ImageStatus.Loaded });
        img.onerror = () => this.setState({ status: ImageStatus.Error });
    }

    render() {
        const { children } = this.props;
        const { arHeight, arWidth } = this.props;
        return (
            <FigureComponent>
                <ImageFrame arHeight={arHeight} arWidth={arWidth}>
                    {this.renderContentBasedOnImageStatus()}
                </ImageFrame>
                {children && this.isLoaded() && (
                    <FigCaption>{children}</FigCaption>
                )}
            </FigureComponent>
        );
    }

    renderContentBasedOnImageStatus = () => {
        const { src, arHeight, arWidth } = this.props;
        const { status } = this.state;

        switch (status) {
            case ImageStatus.Loading:
                return (
                    <AspectRatioInnerContent>
                        <Spinner
                            size={60}
                            spinnerColor="#333"
                            spinnerWidth={2}
                            visible={true}
                            spinnerColor="rgba(0,0,0,.3)"
                        />
                    </AspectRatioInnerContent>
                );
            case ImageStatus.Loaded:
                return (
                    <ImageWithAspectRatio
                        src={src}
                        arHeight={arHeight}
                        arWidth={arWidth}
                    />
                );

            case ImageStatus.Error:
            default:
                return (
                    <AspectRatioInnerContent>
                        <ErrorIcon />
                    </AspectRatioInnerContent>
                );
        }
    };

    isLoaded = () => this.state.status === ImageStatus.Loaded;
}
