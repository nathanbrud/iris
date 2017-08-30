// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './TextArea.scss';
import InputWrapper from '../InputWrapper/InputWrapper';

const displayName = 'TextArea';

type Props = {
    className?: string,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    label: string,
    id: string,
    showLabel?: boolean,
};

const TextArea = ({
                        className,
                        disabled,
                        errorMsg,
                        format = 'neutral',
                        helperMsg,
                        label,
                        id,
                        showLabel = true,
                        ...filteredProps
                    }: Props): React$Element<*> => {

    const isNegative = format === 'negative';
    const ariaInvalid = isNegative;
    const hasIcon = isNegative || format === 'positive';

    // className builder
    const componentClass = classNames(
        styles.TextArea,
        styles[format],
        (hasIcon ? styles.hasIcon : null),
        className
    );

    let ariaLabel;

    if (!showLabel) {
        ariaLabel = label;
    }

    return (
            <InputWrapper
                    showLabel= {showLabel}
                    disabled= {disabled}
                    errorMsg = {errorMsg}
                    format = {format}
                    helperMsg = {helperMsg}
                    label = {label}
                    labelForId = {id}
                >
                    <textarea
                        id={id}
                        aria-label={ariaLabel}
                        aria-invalid={ariaInvalid}
                        disabled={disabled}
                        {...filteredProps}
                        className={componentClass}
                    />
                </InputWrapper>
    );
};

TextArea.displayName = displayName;

export default TextArea;