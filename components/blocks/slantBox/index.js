import styles from "./slantBox.module.css";
const SlantBox = ({ height, width, className, bgColor }) => {
  return <div className={`${styles.slant}  ${height || "h-8 lg:h-12"} ${width || "w-6 lg:w-10"} ${bgColor || "bg-secondary"} ${className || ""}`} />;
};
export default SlantBox;
