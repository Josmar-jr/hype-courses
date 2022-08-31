import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  error?: FieldError;
  icon?: React.SVGAttributes<HTMLOrSVGElement> | any;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, icon: Icon, ...rest },
  ref
) => {
  return (
    <div className="flex relative h-14 rounded text-zinc-700  bg-zinc-900 focus-within:text-blue-300">
      <input {...rest} className="text-gray-100 bg-transparent border-transparent group rounded block w-full py-2 border-[3px] px-10 focus:outline-none focus:ring-blue-300 focus:border-blue-300 focus:z-10" />
      {Icon && <Icon className="absolute top-[19px] left-[14px]" />}
    </div>
  )
}

export const Input = forwardRef(InputBase);