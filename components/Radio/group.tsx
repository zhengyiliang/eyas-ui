import cs from 'classnames';
import React, { createContext, PropsWithChildren, useContext } from 'react';
import Radio from '.';
import { ConfigContext } from '../ConfigProvider';
import useMergeValue from '../_util/hooks/useMergeValue';
import { isObject } from '../_util/is';
import { RadioGroupContextProps, RadioGroupProps } from './interface';

const defaultContextValue: RadioGroupContextProps = {
  type: 'radio',
};

export const RadioGroupContext =
  createContext<RadioGroupContextProps>(defaultContextValue);

export const ClearRadioGroupContext = ({ children }: PropsWithChildren<{}>) => {
  return (
    <RadioGroupContext.Provider value={defaultContextValue}>
      {children}
    </RadioGroupContext.Provider>
  );
};

function Group(props: PropsWithChildren<RadioGroupProps>) {
  const {
    type = 'radio',
    name,
    disabled,
    defaultValue,
    style,
    options,
    children,
    onChange,
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);

  const [value, setValue] = useMergeValue(undefined, {
    defaultValue: defaultValue,
    value: props?.value,
  });

  const prefixCls = getPrefixCls('radio');

  const classNames = cs(`${prefixCls}-group`);

  const onChangeValue = (v: any, event): void => {
    if (v !== value) {
      if (!Reflect.has(props, 'value')) {
        setValue(v);
      }
      onChange && onChange(v, event);
    }
  };

  return (
    <RadioGroupContext.Provider
      value={{
        onChangeValue,
        type,
        value,
        disabled,
        group: true,
        name,
      }}
    >
      <div className={classNames} role="radiogroup" style={style}>
        {options && Array.isArray(options)
          ? options.map((option, index) => {
              if (isObject(option)) {
                return (
                  <Radio
                    key={option.value}
                    disabled={disabled || option.disabled}
                    value={option.value}
                  >
                    {option.label}
                  </Radio>
                );
              }
              return (
                <Radio key={index} value={option} disabled={disabled}>
                  {option}
                </Radio>
              );
            })
          : children}
      </div>
    </RadioGroupContext.Provider>
  );
}

Group.displayName = 'RadioGroup';

export default Group;
