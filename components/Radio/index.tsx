import cs from 'classnames';
import React, { useCallback, useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import useMergeValue from '../_util/hooks/useMergeValue';
import Group, { RadioGroupContext } from './group';
import { RadioProps } from './interface';

function Radio(props: RadioProps) {
  const {
    defaultChecked = false,
    className,
    value,
    children,
    onChange,
    ...rest
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);

  const context = useContext(RadioGroupContext);

  const prefixCls = getPrefixCls('radio');

  const mergeProps = { ...props };

  if (context.group) {
    mergeProps.checked = context.value === props.value;
    mergeProps.disabled = !!(context.disabled || props.disabled);
  }

  // 当前是否选中
  const [checked, setChecked] = useMergeValue(false, {
    value: mergeProps.checked,
    defaultValue: defaultChecked,
  });

  const classNames = cs(
    `${prefixCls}${context.type === 'button' ? '-button' : ''}`,
    {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: mergeProps.disabled,
    },
  );

  // 点击label触发
  const onLabelClick = useCallback(
    (e) => {
      rest.onClick && rest.onClick(e);
    },
    [props.children, rest?.onClick],
  );

  // label与radio绑定，
  const _onChange = (event) => {
    if (mergeProps.disabled) return;
    if (context.group) {
      context.onChangeValue && context.onChangeValue(value, event);
    } else if (!Reflect.has(props, 'checked') && !checked) {
      setChecked(true);
    }
    !checked && onChange && onChange(true, event);
  };

  return (
    <label className={classNames} {...rest} onClick={onLabelClick}>
      <input
        type="radio"
        disabled={mergeProps.disabled}
        value={value || ''}
        checked={checked}
        onChange={(event) => {
          event.persist();
          _onChange(event);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      {context.type === 'radio' ? (
        <>
          <span className={`${prefixCls}-icon`}></span>
          {children && <span className={`${prefixCls}-text`}>{children}</span>}
        </>
      ) : (
        <span className={`${prefixCls}-button-inner`}>{children}</span>
      )}
    </label>
  );
}

Radio.displayName = 'Radio';

Radio.Group = Group;

export default Radio;
