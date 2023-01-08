import { useField } from "formik";
import React, { useState } from "react";

import ErrorMessage from "../ErrorMessage";
import Icon from "../Icons";

const FormikCustomInput = ({ className, container, type, iconClass, disabled, icon, inputClassName, iconPosition, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [field, meta] = useField(props);

  return (
    <>
      <div className={` ${className} flex items-center h-[57.14px] w-full ${meta.touched && meta.error ? "!border !border-[#A0000B]" : ""} `}>
        <div className={`flex px-5 bg-white text-black items-center justify-start  h-full w-full rounded-[5px] border-citiGray-100 ${container}`}>
          {icon && iconPosition === "start" && <Icon className={iconClass} name={icon} />}
          <input
            className={`${inputClassName} border-none focus:ring-0 autofill:shadow-reset-bg autofill:hover:shadow-reset-bg autofill:focus:shadow-reset-bg autofill:active:shadow-reset-bg h-full w-full py-0 `}
            disabled={disabled}
            tabIndex={0}
            type={type === "password" && showPassword ? "text" : type}
            {...field}
            {...props}
          />
          {icon && iconPosition === "end" && <Icon className={iconClass} name={icon} />}
          {type === "password" && showPassword ? (
            <Icon className="cursor-pointer" name="eyeSlash" onClick={handleShowPassword} />
          ) : (
            type === "password" && !showPassword && <Icon className="cursor-pointer" name="eye" onClick={handleShowPassword} />
          )}
        </div>
      </div>
      {type !== "password" && meta.touched && meta.error && <ErrorMessage error={meta.error} />}
      {type === "password" && meta.error && meta.touched && <ErrorMessage error={meta.error} />}
    </>
  );
};

export default FormikCustomInput;
