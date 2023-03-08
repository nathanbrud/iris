import React, { useReducer, useRef, useEffect } from 'react';
import { parseToHsl, hslToColorString } from 'polished';

import { Wrapper } from './ColorSelect.style';
import { Props } from './ColorSelect.types';
import { State, reducer } from './ColorSelect.state';

import { HueSlider } from './Slider';
import { ColorInputs } from './Inputs';
import { ColorSelectInput } from './ColorSelectInput';
import { ColorSelectSpectrum } from './ColorSelectSpectrum';
import { Presets, Props as PresetsProps } from './Presets';

import { PopOver } from '../../PopOver/PopOver';
import {
  withIris,
  MinorComponent,
  throttle,
  useOutsideClick,
} from '../../../utils';
import { colorSpaces } from '../../../color';

export const ColorSelect = withIris<
  HTMLInputElement,
  Props,
  { Presets: MinorComponent<PresetsProps> }
>(ColorSelectComponent);

ColorSelect.Presets = Presets;

function ColorSelectComponent({
  children,
  height = 360,
  initial = { color: '#F00', colorSpace: 'HEX' },

  // DEPRECATED
  initialColor,
  //

  label,
  onChange,
  onClose,
  onOpen,
  reset = { color: initial.color, label: 'reset' },

  // DEPRECATED
  resetColor,
  //

  resetLabel,
  size,
  throttleSpeed = 24,
  value,
  width = 360,
  attach = 'bottom',
  showHueSlider = true,
  ...props
}: Props) {
  const childrenRef = useRef();
  const popOverRef = useRef();

  useOutsideClick([childrenRef, popOverRef], () => {
    if (state.open) {
      onClose?.();
      dispatch({ type: 'CLOSE', payload: true });
    }
  });

  // deprecation handling
  if (initialColor) initial.color = initialColor || initial.color;
  if (resetColor) reset.color = resetColor || reset.color;
  if (resetLabel) reset.label = resetLabel;

  const defaultColor = parseToHsl(initial.color);
  const initialColors = colorSpaces(defaultColor);

  const initialState: State = {
    open: false,
    dragging: false,
    editing: false,
    error: false,
    coords: [width, 0],
    colorMeta: { HSL: defaultColor, ...initialColors },
    colorSpace: 'HEX',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { open, dragging, colorMeta } = state;
  const { HSL } = colorMeta;

  useEffect(() => {
    dispatch({ type: 'SET_HEX', payload: value });
  }, [value]);

  const toggle = () => {
    if (open) onClose?.();
    if (!open) onOpen?.();
    dispatch({ type: 'TOGGLE' });
  };

  const setHue = throttle((e) => {
    const hue = parseInt(e.target.value, 10) / 100;
    const newHSL = { ...HSL, hue };

    if (HSL.hue !== newHSL.hue) {
      const color = hslToColorString(newHSL);
      onChange && onChange(color);
      dispatch({ type: 'SET_HSL', payload: newHSL });
    }
  }, throttleSpeed / 4);

  const onMouseDown = () =>
    !dragging && dispatch({ type: 'DRAG_START' });
  const onMouseUp = () => dragging && dispatch({ type: 'DRAG_END' });

  return (
    <PopOver
      attach={attach}
      active={open}
      content={
        <Wrapper width={width} ref={popOverRef}>
          <ColorSelectSpectrum
            dispatch={dispatch}
            dragging={dragging}
            height={height}
            onChange={onChange}
            throttleSpeed={throttleSpeed}
            width={width}
            {...state}
            {...props}
          />
          {showHueSlider && (
            <HueSlider
              dragging={dragging}
              onChange={setHue}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              value={HSL.hue * 100}
              width={width}
              {...state}
            />
          )}
          <ColorInputs
            dispatch={dispatch}
            onChange={onChange}
            {...state}
          />
        </Wrapper>
      }
    >
      {children ? (
        <div onClick={toggle} ref={childrenRef}>
          {children}
        </div>
      ) : (
        <div ref={childrenRef}>
          <ColorSelectInput
            colorMeta={colorMeta}
            dispatch={dispatch}
            label={label}
            onChange={onChange}
            reset={reset}
            size={size}
            toggle={toggle}
          />
        </div>
      )}
    </PopOver>
  );
}
