import { Loading3QuartersOutlined } from '@ant-design/icons';
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
  const { getPrefixCls, size: ctxSize } = useContext(ConfigContext);

  const {
    children,
    type = 'default',
    disabled,
    style,
    className,
    status,
    htmlType = 'button',
    onClick,
    loading,
    iconOnly,
    block,
    shape = 'square',
    size = ctxSize,
    ...rest
  } = props;

  const innerButtonRef = useRef();
  const buttonRef = ref || innerButtonRef;

  const prefixCls = getPrefixCls('btn');

  const _type = type === 'default' ? 'secondary' : type;

  const classNames = cs(className, prefixCls, `${prefixCls}-${_type}`, {
    [`${prefixCls}-status-${status}`]: status,
    [`${prefixCls}-size-${size}`]: size,
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-shape-${shape}`]: shape,
    [`${prefixCls}-iconOnly`]: iconOnly,
    [`${prefixCls}-block`]: block,
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event: any) => {
    if (loading) {
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
      disabled={disabled}
      onClick={handleClick}
    >
      {loading && (
        <>
          <Loading3QuartersOutlined className={`${prefixCls}-loading-icon`} />
          &nbsp;
        </>
      )}
      {children}
    </button>
  );
}

const ButtonComponent = forwardRef<unknown, ButtonProps>(Button);

ButtonComponent.displayName = 'Button';

export default ButtonComponent;
