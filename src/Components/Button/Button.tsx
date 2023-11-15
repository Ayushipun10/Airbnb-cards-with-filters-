import React, { ButtonHTMLAttributes } from 'react';
// import './Button.scss';
 
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    // text ?: string;
    className ? : string;
  count: number | string;
  selected?: boolean;
  onClick?: (count : number | string) => void;
}
 
const Button: React.FC<ButtonProps> = ({ className, count, selected = false, onClick, ...props }) => {

    const handleClick = () => {
        if(onClick){
            onClick(count)
        }
    }
  return (
    <button className={`button ${selected ? 'selected' : ''}`} onClick={handleClick} {...props}>
      {/* {count}  */}
      {typeof count === 'number' ? `${count}`: count}
    </button>
  );
};
 
export default Button;
