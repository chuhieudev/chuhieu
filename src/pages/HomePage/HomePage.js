import React, { Component } from 'react';
import { $CombinedState } from 'redux';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: true
        }
    }
    close = () => {
        this.setState({
            isDisplay: false
        })
    }
    render() {
        var ads = this.state.isDisplay ? <div class="ads">
            <div class="anh">
                <img class="anh" src="/ads.jpg" alt="" width="200px" height="200px" />
            </div>
            <div class="close" onClick={this.close}>
                <p>x</p>
            </div>
        </div> : ''
        return (
            <div>
                <div className="row-2">
                    <div className="main">
                        <div className="container_12">
                            <div className="grid_9">
                                <h1>
                                    <a className="logo" href="/">Int<strong>e</strong>rior</a>
                                    <span>Design</span>
                                </h1>
                            </div>
                            <div className="grid_3">
                                <form id="search-form" method="post" enctype="multipart/form-data">
                                    <fieldset>
                                        <div className="search-field">
                                            <input name="search" type="text" />
                                            <a className="search-button" href="#" onclick="document.getElementById('search-form').submit()"><span>search</span></a>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="banner">
                        <img className="banner" src="/banner.jpg" alt="" />
                        <div className="content">
                            <div>
                                <h1>Lorem ipsum dolor sit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur,
                                elit.Fugit soluta praesentium quasi omnis aperiam,
                                dolores sapiente nostrum officia nihil,
                                corrupti esse illo repellendus, pariatur consequuntur?</p>
                            </div>
                            <div className="shopnow">
                                <button>Shop Now</button>
                                <div className="after"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-child">
                    <div className="content-list">
                        <div className="item">
                            <div className="row-one">
                                <div className="img">
                                    <img src="/product-13.jpg" width="82px" height="82px" />
                                </div>
                                <div className="infor">
                                    <p>Shoes</p>
                                    <b>Lorem ipsum dolor.</b>
                                    <div className="star">
                                        <ion-icon name="star" class="rate"></ion-icon>
                                        <ion-icon name="star" class="rate"></ion-icon>
                                        <ion-icon name="star-half" class="rate"></ion-icon>
                                        <ion-icon name="star-outline" class="rate"></ion-icon>
                                        <ion-icon name="star-outline" class="rate"></ion-icon>
                                    </div>
                                </div>
                            </div>
                            <div className="row-two">
                                <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cmque neque odio animi illo sunt explicabo officiis quaerat rem, fuga corrupti nisi?</h>
                                <p><i>Lorem ipsum. 29 May 2020</i></p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row-one">
                                <div className="img">
                                    <img src="/product-13.jpg" width="82px" height="82px" />
                                </div>
                                <div className="infor">
                                    <p>Shoes</p>
                                    <b>Lorem ipsum dolor.</b>
                                    <div className="star">
                                        <ion-icon name="star" class="rate"></ion-icon>
                                        <ion-icon name="star" class="rate"></ion-icon>
                                        <ion-icon name="star-half" class="rate"></ion-icon>
                                        <ion-icon name="star-outline" class="rate"></ion-icon>
                                        <ion-icon name="star-outline" class="rate"></ion-icon>
                                    </div>
                                </div>
                            </div>
                            <div className="row-two">
                                <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cmque neque odio animi illo sunt explicabo officiis quaerat rem, fuga corrupti nisi?</h>
                                <p><i>Lorem ipsum. 29 May 2020</i></p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row-one">
                                <div className="img">
                                    <img src="/product-13.jpg" width="82px" height="82px" />
                                </div>
                                <div className="infor">
                                    <p>Shoes</p>
                                    <b>Lorem ipsum dolor.</b>
                                    <div className="star">
                                        <ion-icon name="star" class="rate"></ion-icon>
                                        <ion-icon name="star" class="rate"></ion-icon>
                                        <ion-icon name="star-half" class="rate"></ion-icon>
                                        <ion-icon name="star-outline" class="rate"></ion-icon>
                                        <ion-icon name="star-outline" class="rate"></ion-icon>
                                    </div>
                                </div>
                            </div>
                            <div className="row-two">
                                <h>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cmque neque odio animi illo sunt explicabo officiis quaerat rem, fuga corrupti nisi?</h>
                                <p><i>Lorem ipsum. 29 May 2020</i></p>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                            <div className="sale">
                                <p>Sale</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                            <div className="new">
                                <p>New</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-one">
                                <img src="/product-7.jpg" width="265px" />

                                <div className="img-two">
                                    <img src="/product-122.jpg" width="265px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="item">
                                <p>Help + Info</p>
                                <ul>
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="#">Returns + Exchanges</a></li>
                                    <li><a href="#">shipping</a></li>
                                    <li><a href="#">Orders + Payments</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">See All Help Topics</a></li>
                                    <li><a href='#'>Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="item">
                                <p>Quick Links</p>
                                <ul>
                                    <li><a href="#">Brands</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                    <li><a href="#">Casreers</a></li>
                                    <li><a href="#">Shop Europe</a></li>
                                    <li><a href="#">Shop Canada</a></li>
                                </ul>
                            </div>
                            <div class="item">
                                <p>Extras</p>
                                <ul>
                                    <li><a href="#">UO Rewards</a></li>
                                    <li><a href="#">UO MRKT</a></li>
                                    <li><a href="#">UO Blog</a></li>
                                    <li><a href="#">UO Community Cares</a></li>
                                    <li><a href="#">Creative Service</a></li>
                                    <li><a href="#">Afterpay</a></li>
                                </ul>
                            </div>
                            <div class="item">
                                <p>Find A Store</p>
                                <ul>
                                    <li><a href="#">Store Locator</a></li>
                                    <li><a href="#">UO Spaces</a></li>
                                    <li><a href="#">Campus Bookstores</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="design">
                    <p>Design by Chu Hieu</p>
                </div>
            {ads}
            </div>
        );
    }
}

export default HomePage;