import cs from 'classnames';
import React, {
  forwardRef,
  MouseEventHandler,
  useContext,
  useRef,
} from 'react';
import { ConfigContext } from '../ConfigProvider';
import type { ButtonProps } from './interface';

function Button(props: ButtonProps, ref: any) {
  const {
    children,
    type = 'default',
    disabled,
    style,
    className,
    htmlType = 'button',
    onClick,
    ...rest
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);

  const innerButtonRef = useRef();
  const buttonRef = ref || innerButtonRef;

  const prefixCls = getPrefixCls('btn');

  const classNames = cs(prefixCls, {
    [className]: className,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-disabled`]: disabled,
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event: any) => {
    if (disabled) {
      if (typeof event?.preventDefault === 'function') {
        event.preventDefault();
      }
      return;
    }
    // onClick && onClick(event);
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      {...rest}
      ref={buttonRef}
      type={htmlType}
      className={classNames}
      style={style}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

const ButtonComponent = forwardRef<unknown, ButtonProps>(Button);

ButtonComponent.displayName = 'Button';

export default ButtonComponent;
