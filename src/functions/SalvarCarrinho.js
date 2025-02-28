export default function SalvarCarrinho(params)
{
    console.log("o id adicionado foi: ", params);

    const RESULT = localStorage.getItem("carrinho");
    const PRODUCT_LIST = JSON.parse(RESULT ||"[]");

    PRODUCT_LIST.push(params);
    const PRODUCT_LIST_JSON = JSON.stringify(PRODUCT_LIST);
    localStorage.setItem("carrinho", PRODUCT_LIST_JSON);
}

