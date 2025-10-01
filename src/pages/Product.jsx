import { useOutlet, useOutletContext } from "react-router"
import { useParams } from "react-router";


export const Product = () => {
const {products} = useOutletContext()
const {id} = useParams();
const findProduct = products.find((p) => p.id === +id)


    return (
        <>
       
  

 {findProduct?
         <section className="content">
            <div className="container">
                <div className="content-box">
                    <div className="content-product">
                        <div className="content-product_left">
                            <h2 className="content-product_title">{findProduct.title}</h2>
                            <img className="content-product_img" src={findProduct.img} alt="product-imf-img" />
                            <p className="content-product_text">
                                {findProduct.description} <br />
                                Торг возможен. <br /> 
                                За период эксплуатации не выявлено ни одной проблемы. <br />
                                Из минусов — нужно прокачать задний тормоз. <br />
                                Установлен отсекатель сзади. <br />
                                Покрышки CST внедорожные. <br />
                                Все на подшипниках, болты протянуты. <br />
                                Пробег 881км, это немного для такого зверя.
                            </p>
                        </div>

                        <div className="content-product_right">
                            <h2 className="content-product_price">{findProduct.price}</h2>
                            <button className="btn btn-primary btn-large">Показать телефон</button>
                        </div>

                    </div>

                    <div className="content-side">
                        <h3 className="content-side_title">Сервисы и услуги</h3>
                        <div className="content-side_box">
                            <div className="content-side_list">
                                <div className="content-side_list-item">
                                    <img className="content-side_list-item--img" src="/images/side-info-1.svg"
                                        alt="side-info" />
                                    <h5 className="content-side_list-item--title">Доставка</h5>
                                    <p className="content-side_list-item--text">Проверка при получении и возможность
                                        бесплатно вернуть товар</p>
                                </div>
                                <div className="content-side_list-item">
                                    <img className="content-side_list-item--img" src="/images/side-info-2.svg"
                                        alt="side-info" />
                                    <h5 className="content-side_list-item--title">Автотека</h5>
                                    <p className="content-side_list-item--text">Отчёт с историей авто: пробег, владельцы,
                                        сведения о залоге, ДТП и ремонтах</p>
                                </div>
                                <div className="content-side_list-item">
                                    <img className="content-side_list-item--img" src="/images/side-info-3.svg"
                                        alt="side-info" />
                                    <h5 className="content-side_list-item--title">Онлайн-бронирование жилья</h5>
                                    <p className="content-side_list-item--text">Посуточная аренда квартир и домов: большой
                                        выбор вариантов для поездок по России</p>
                                </div>
                            </div>


                            <div className="content-side_footer">
                                <p className="content-side_footer--item">
                                    © ООО «Абито», 2011–2021
                                </p>
                                <a href="#!" className="content-side_footer--item">
                                    Политика конфиденциальности
                                </a>
                                <a href="#!" className="content-side_footer--item">
                                    Обработка данных
                                </a>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </section>
         : 
         <h2>Такого товара не существует</h2>
         }




        </>
    )
}