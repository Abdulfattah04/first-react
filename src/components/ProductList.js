import style from "./ProductList.module.css"

export function ProductList(props) {
  return (
    <>
      <h2>Products</h2>
      <div className={style.List}>{props.children}</div>
    </>
  );
}