import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { rem, rgba } from 'polished';
import COLORS from '../globals/js/constants/COLORS';

export interface FeatureDotProps extends React.HTMLProps<HTMLSpanElement> {
    beaconA11yText: string;
    className?: string;
    mode?: 'inactive' | 'open' | 'active' | 'hidden';
}

export const FeatureDotStyleSettings = {
    beaconSize: 14,
    haloSize: 30,
    wrapperSize: 46,
    haloColor: rgba(COLORS.DarkerBlue, 0.25),
};

interface DotStyledProps extends React.HTMLProps<HTMLSpanElement> {
    mode: 'inactive' | 'open' | 'active' | 'hidden';
}

const WrapperStyled = styled<DotStyledProps, 'span'>('span')`
    display: inline-block;
    overflow: visible;

    width: ${rem(FeatureDotStyleSettings.wrapperSize)};
    height: ${rem(FeatureDotStyleSettings.wrapperSize)};
    padding: ${props =>
        props.mode === 'active'
            ? rem((FeatureDotStyleSettings.wrapperSize - FeatureDotStyleSettings.haloSize) / 2)
            : rem((FeatureDotStyleSettings.wrapperSize - FeatureDotStyleSettings.beaconSize) / 2)};

    &:hover {
        transform: scale(1.14);
    }
`;

const DotStyled = styled<DotStyledProps, 'span'>('span')`
    display: inline-block;

    width: ${rem(FeatureDotStyleSettings.beaconSize)};
    height: ${rem(FeatureDotStyleSettings.beaconSize)};

    border-radius: ${rem(FeatureDotStyleSettings.beaconSize / 2)};

    transition: all 0.1s ease-in-out;
    text-indent: -9999px;
    background-color: ${props =>
        props.mode === 'open' ? COLORS.White : COLORS.DarkerBlue};

    box-shadow: ${props =>
        props.mode === 'open'
            ? `0 0 0 ${rem(2)} ${COLORS.DarkerBlue}, 0 ${rem(1)} ${rem(4)}  ${rem(2)}  rgba(60,90,153,0.66)`
            : 'none'};
`;

const startFinishShadow = css`
    box-shadow: 0 0 ${rem(4)} ${rem(4)} ${rgba(COLORS.VimeoBlue, 0)},
        0 0 ${rem(8)} ${rem(6)} ${rgba(COLORS.VimeoBlue, 0)} 0 0 0 0
            rgba(0, 0, 0, 0),
        0 0 0 0 ${rgba(COLORS.VimeoBlue, 0)};
`;

const haloKeyframes = keyframes`
        0% {
            ${startFinishShadow}
        }

        10% {
            box-shadow: 0 0 ${rem(8)} ${rem(6)} ${rgba(COLORS.DarkerBlue, 0.4)},
            0 0 ${rem(12)} ${rem(10)} rgba(0,0,0,0.0),
            0 0 ${rem(12)} ${rem(14)} ${rgba(COLORS.DarkerBlue, 0.4)};
        }

        25% {
            box-shadow: 0 0 0 rem-calc(8) rem-calc(6) rgba($VimeoBlue, 0),
            0 0 0 rem-calc(80) rgba(0,0,0,0.0),
            0 0 0 rem-calc(80) rgba($VimeoBlue, 0);
        }

        30% {
            ${startFinishShadow}
        }
        100% {
            ${startFinishShadow}
        }
    `;

interface HaloStyledProps extends React.HTMLProps<HTMLSpanElement> {
    isActive: boolean;
}

const HaloStyled = styled<HaloStyledProps, 'span'>('span')`
    display: inline-block;
    ${props =>
        props.isActive
            ? `
        width: ${rem(FeatureDotStyleSettings.haloSize)};
        height: ${rem(FeatureDotStyleSettings.haloSize)};
        padding: ${rem((FeatureDotStyleSettings.haloSize - FeatureDotStyleSettings.beaconSize) / 2)};

        border-radius: ${rem(FeatureDotStyleSettings.haloSize / 2)};
        background-image: radial-gradient(
        circle,
        ${COLORS.White},
        ${COLORS.White}  ${rem(9)},
        ${FeatureDotStyleSettings.haloColor} ${rem(10)},
        ${FeatureDotStyleSettings.haloColor} ${rem(15)},
        rgba(255,255,255, 0) ${rem(16)},
        rgba(255,255,255, 0)
        );

        animation: 2500ms infinite ${haloKeyframes};
    
    `
            : ''};
`;

const FeatureTourDot = ({
    beaconA11yText,
    mode = 'inactive',
    ref: _,
    ...filteredProps
}: FeatureDotProps) => {
    return (
        <WrapperStyled {...filteredProps} mode={mode}>
            <HaloStyled isActive={mode === 'active'}>
                <DotStyled mode={mode}>{beaconA11yText}</DotStyled>
            </HaloStyled>
        </WrapperStyled>
    );
};

export default FeatureTourDot;