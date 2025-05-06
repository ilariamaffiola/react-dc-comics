
const Main = () => {
  return (
    <main>
        <div className="jumbotron"></div>
        <div className="bg-black">
            <div className="container lay-comics">
                <button className="button-series">CURRENT SERIES</button>
                <h3>--&gt; Content goes here &lt;--</h3>
            </div>
        </div>
        <div className="bg-light-blue">
            <div className="container">
                <ul>
                    <li>
                        <div>
                            <img className="digital-comics" src="/src/assets/img/buy-comics-digital-comics.png" alt="" />
                        </div>
                        <div>
                            <a href="#">
                                <span>DIGITAL COMICS</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <img src="/src/assets/img/buy-comics-merchandise.png" alt="" />
                        </div>
                        <div>
                            <a href="#">
                                <span>DC MERCHAMNDISE</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <img src="/src/assets/img/buy-comics-subscriptions.png" alt="" />
                        </div>
                        <div>
                            <a href="#">
                                <span>SUBSCRIPTION</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <img className="shop-locator" src="/src/assets/img/buy-comics-shop-locator.png" alt="" />
                        </div>
                        <div>
                            <a href="#">
                                <span>COMIC SHOP LOCATOR</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                        <img src="/src/assets/img/buy-dc-power-visa.svg" alt="" />
                        </div>
                        <div>
                            <a href="#">
                                <span>DC POWER VISA</span>
                            </a>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </main>
  )
}

export default Main
