let header = `
 <header>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasCart" aria-labelledby="My Cart">
      <div class="offcanvas-header justify-content-end">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Your cart</span>
            <span class="badge bg-primary rounded-pill">3</span>
          </h4>

          <div class="card_">

            <div class="table-responsive cart">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="card-title text-uppercase text-muted">Product</th>
                    <th scope="col" class="card-title text-uppercase text-muted">Quantity</th>
                    <th scope="col" class="card-title text-uppercase text-muted">Subtotal</th>
                    <th scope="col" class="card-title text-uppercase text-muted"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row" class="py-4">
                      <div class="cart-info d-flex flex-wrap align-items-center mb-4">
                        <div class="col-lg-3">
                          <div class="card-image" style="background-image: url(./images/1\ \(13\).jpg);">

                          </div>
                        </div>
                        <div class="col-lg-9">
                          <div class="card-detail ps-3">
                            <h5 class="card-title">
                              Sunstar Fresh Melon Juice
                            </h5>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4">
                      <div class="input-group product-qty w-50">
                        <span class="input-group-btn">
                          <button type="button" class="quantity-left-minus btn btn-light btn-number" data-type="minus">
                            <svg width="16" height="16">
                              <use xlink:href="#minus"></use>
                            </svg>
                          </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" class="form-control input-number text-center" value="1">
                        <span class="input-group-btn">
                          <button type="button" class="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                            <svg width="16" height="16">
                              <use xlink:href="#plus"></use>
                            </svg>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td class="py-4">
                      <div class="total-price">
                        <span class="money text-dark">$1500.00</span>
                      </div>
                    </td>
                    <td class="py-4">
                      <div class="cart-remove">
                        <a href="#">
                          <svg width="24" height="24">
                            <use xlink:href="#trash"></use>
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row" class="py-4">
                      <div class="cart-info d-flex flex-wrap align-items-center">
                        <div class="col-lg-3">
                          <div class="card-image" style="background-image: url(./images/1\ \(18\).jpg);">

                          </div>
                        </div>
                        <div class="col-lg-9">
                          <div class="card-detail ps-3">
                            <h5 class="card-title">
                              Pink watch                            </h5>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="py-4">
                      <div class="input-group product-qty w-50">
                        <span class="input-group-btn">
                          <button type="button" class="quantity-left-minus btn btn-light btn-number" data-type="minus">
                            <svg width="16" height="16">
                              <use xlink:href="#minus"></use>
                            </svg>
                          </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" class="form-control input-number text-center" value="1">
                        <span class="input-group-btn">
                          <button type="button" class="quantity-right-plus btn btn-light btn-number" data-type="plus" data-field="">
                            <svg width="16" height="16">
                              <use xlink:href="#plus"></use>
                            </svg>
                          </button>
                        </span>
                      </div>
                    </td>
                    <td class="py-4">
                      <div class="total-price">
                        <span class="money text-dark">$870.00</span>
                      </div>
                    </td>
                    <td class="py-4">
                      <div class="cart-remove">
                        <a href="#">
                          <svg width="24" height="24">
                            <use xlink:href="#trash"></use>
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>


          <!-- <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Growers cider</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Fresh grapes</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$8</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Heinz tomato ketchup</h6>
                <small class="text-body-secondary">Brief description</small>
              </div>
              <span class="text-body-secondary">$5</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul> -->
  

          <div class="cart-totals bg-grey py-5">
            <h4 class="text-dark pb-4">Cart Total</h4>
            <div class="total-price ">
              <table cellspacing="0" class="table text-uppercase">
                <tbody>
                  <tr class="d-flex align-items-center justify-content-between">
                
                    <th>Total</th>
                    <td data-title="Total">
                      <span class="price-amount amount text-dark ps-5">
                        <bdi>
                          <span class="price-currency-symbol">$</span>2,370.00</bdi>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        
          </div>
          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
      </div>
    </div>
    
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasSearch" aria-labelledby="Search">
      <div class="offcanvas-header justify-content-center">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Search</span>
          </h4>
          <form role="search" action="index.html" method="get" class="d-flex mt-3 gap-0">
            <input class="form-control rounded-start rounded-0 bg-light" type="email" placeholder="What are you looking for?" aria-label="What are you looking for?">
            <button class="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>

   
      <div class="container-fluid">
        <div class="row pt-3 border-bottom d-flex align-items-center ">
          
          <div class=" col-lg-3 text-center text-sm-start">
            <div class="main-logo">
              <a href="index.html">
                <img src="images/logo.png" alt="logo" class="img-fluid">
              </a>

            <div class="d-flex align-items-center gap-2">
           

              <div class="cart text-end phone d-lg-block dropdown">
                <button class="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                  </svg>
                </button>
              </div>
              <div class=" phone">
                <div class="row ">
                  <div class="nav_bar">
                    <nav class="main-menu d-flex navbar navbar-expand-lg">
        
                      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                      </button>
        
                      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        
                        <div class="offcanvas-header justify-content-end">
                          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
        
                        <div class="offcanvas-body">
                      
                       


                          


                      
                          <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                            <li class="nav-item active">
                              <a href="#women" class="nav-link">Home
                              </a>
                            </li>

                            <li class="nav-item active">
                              <a href="#women" class="nav-link">Dining Ware
                              </a>
                            </li>
                            <li class="nav-item dropdown">
                              <a href="#men" class="nav-link">Kitchen Ware
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="#kids" class="nav-link">Drinking Ware
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="#accessories" class="nav-link">Home Ware
                              </a>
                            </li>
                       
                            <li class="nav-item dropdown">
                              <a href="#men" class="nav-link">Discounted Products

                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="#kids" class="nav-link">New Arrivals
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="#accessories" class="nav-link">Wish List!
                              </a>
                            </li>
                          
                          
                         
                          </ul>
                        
                        </div>
        
                      </div>
        
                    </nav>
                
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          <div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none_ d-lg-block">
            <div class="search-bar row bg-light p-2 my-2 rounded-4 mt-4">
           
              <div class="col-11 ">
                <form id="search-form" class="text-center" action="index.html" method="post">
                  <input type="text" class="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                </form>
              </div>
              <div class="col-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/></svg>
              </div>
            </div>
          </div>
          
          <div class="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end ">
            <div class="support-box text-end d-none d-xl-block">
              <span class="fs-6 text-muted">For Support?</span>
              <h5 class="mb-0">+201070479599</h5>
            </div>

        

            <div class="cart text-end pc d-lg-block dropdown">
              <button class="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
              </button>
            </div>
            
          </div>


         

        </div>
      </div>

      <div class="container">
        <div class="row ">
          <div class="nav_bar">
            <nav class="main-menu d-flex navbar navbar-expand-lg">

       

              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                <div class="offcanvas-header justify-content-center">
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
              
                  <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                    <li class="nav-item active">
                      <a href="#women" class="nav-link">Home
                      </a>
                    </li>

                    <li class="nav-item active">
                      <a href="#women" class="nav-link">Dining Ware
                      </a>
                    </li>
                    <li class="nav-item dropdown">
                      <a href="#men" class="nav-link">Kitchen Ware
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#kids" class="nav-link">Drinking Ware
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#accessories" class="nav-link">Home Ware
                      </a>
                    </li>
               
                    <li class="nav-item dropdown">
                      <a href="#men" class="nav-link">Discounted Products

                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#kids" class="nav-link">New Arrivals
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#accessories" class="nav-link">Wish List!
                      </a>
                    </li>
                  
                  
                 
                  </ul>
                
                </div>

              </div>

            </nav>
        
          </div>
        </div>
      </div>
    
    </header>
    `;

let head = document.getElementById("head");

head.innerHTML = header;
