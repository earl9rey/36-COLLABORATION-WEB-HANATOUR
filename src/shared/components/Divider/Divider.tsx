import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  color?: keyof typeof dividerColorMap;
  length?: string | number;
  thickness?: string | number;
}

const dividerColorMap = {
  purple100: 'bg-[var(--color-purple100)]',
  mint100: 'bg-[var(--color-mint100)]',
  yellow100: 'bg-[var(--color-yellow100)]',
  blue100: 'bg-[var(--color-blue100)]',
  blue200: 'bg-[var(--color-blue200)]',
  blue300: 'bg-[var(--color-blue300)]',
  lightPurple100: 'bg-[var(--color-light-purple100)]',
  red100: 'bg-[var(--color-red100)]',
  bg: 'bg-[var(--color-bg)]',
  gray100: 'bg-[var(--color-gray100)]',
  gray200: 'bg-[var(--color-gray200)]',
  gray300: 'bg-[var(--color-gray300)]',
  gray400: 'bg-[var(--color-gray400)]',
  coolgray100: 'bg-[var(--color-coolgray100)]',
  gray500: 'bg-[var(--color-gray500)]',
  gray600: 'bg-[var(--color-gray600)]',
  gray700: 'bg-[var(--color-gray700)]',
  gray800: 'bg-[var(--color-gray800)]',
  white: 'bg-[var(--color-white)]',
  black: 'bg-[var(--color-black)]',
} as const;

const Divider = ({
  direction = 'horizontal',
  color = 'gray400',
  length = '100%',
  thickness = '0.1rem',
  className,
  ...rest
}: DividerProps) => {
  const isHorizontal = direction === 'horizontal';
  const sizeStyle = isHorizontal ? { width: length, height: thickness } : { height: length, width: thickness };

  const colorClass = dividerColorMap[color ?? 'gray400'];

  return <div className={clsx('block', colorClass, className)} style={sizeStyle} {...rest} />;
};

export default Divider;
