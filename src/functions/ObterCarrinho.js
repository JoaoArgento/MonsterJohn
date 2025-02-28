export default function ObterCarrinho()
{
    const PRODUCT_LIST_JSON = localStorage.getItem("carrinho");
    const PRODUCT_LIST = JSON.parse(PRODUCT_LIST_JSON || "[]");
    return PRODUCT_LIST;
}