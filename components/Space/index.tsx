import cs from 'classnames';
import React, { forwardRef, Fragment, ReactElement, useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import { SpaceProps, SpaceSize } from './interface';

const SIZE_MAP = {
  mini: 4,
  small: 8,
  medium: 16,
  large: 24,
};

function Space(props: SpaceProps, ref: any) {
  const {
    children,
    size = 'small',
    align,
    split,
    direction = 'horizontal',
    wrap,
    className,
    ...rest
  } = props;

  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('space');

  const childrenList = React.Children.toArray(children);

  const _align = align || (direction === 'horizontal' ? 'center' : '');

  const classNames = cs(prefixCls, className, `${prefixCls}-${direction}`, {
    [`${prefixCls}-align-${_align}`]: _align,
    [`${prefixCls}-wrap`]: wrap,
  });

  const getMargin = (size: SpaceSize) => {
    if (Object.prototype.toString.call(size) === '[Object, Number]') {
      return size;
    }
    return SIZE_MAP[size];
  };

  const getMarginStyle = (index: number) => {
    const isLastOne = childrenList.length === index + 1;

    const marginDirection =
      direction === 'vertical' ? 'marginBottom' : 'marginRight';

    let marginStyle = {
      marginRight: 0,
      marginBottom: 0,
    };
    if (['string', 'number'].includes(typeof size)) {
      const space = getMargin(size as SpaceSize);
      marginStyle = {
        marginRight: space,
        marginBottom: space,
      };
    }

    if (Array.isArray(size)) {
      const marginRight = getMargin(size[0]);
      const marginBottom = getMargin(size[1]);
      marginStyle = {
        marginRight,
        marginBottom,
      };
    }
    if (wrap) {
      if (isLastOne) return { marginBottom: marginStyle.marginBottom };
      return marginStyle;
    }
    if (!isLastOne)
      return {
        [marginDirection]: marginStyle[marginDirection],
      };
  };

  return (
    <div ref={ref} className={classNames} {...rest}>
      {childrenList.map((ele, index) => {
        const key = (ele as ReactElement)?.key || index;
        const showRenderSplit =
          split !== undefined && split !== null && index > 0;
        return (
          <Fragment key={key}>
            {showRenderSplit && (
              <div className={`${prefixCls}-item-split`}>{split}</div>
            )}
            <div className={`${prefixCls}-item`} style={getMarginStyle(index)}>
              {ele}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

const SpaceComponent = forwardRef<unknown, SpaceProps>(Space);

SpaceComponent.displayName = 'Space';

export default SpaceComponent;
