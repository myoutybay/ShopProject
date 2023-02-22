import React from "react";
import { Link } from "react-router-dom";
import Tabs from "../Tabs";
import Author from "../Author";
import Panel from "../Tabs/Panel";
import "../Tabs/Tabs.scss";

import Section from "./Section";
import Content from "./Content";
import UserProduct from "./UserProduct";

function Product({ product, banks }) {
  return (
    product && (
      <>
        <div class="breadcrumb">
          <div class="breadcrumb-left">
            <div class="breadcrumb-page-title">Product</div>
          </div>
          <div class="breadcrumb-right">
            <Link class="breadcrumb-item" to="/">
              Product
            </Link>
            <span class="breadcrumb-item active">Thông tin sản phẩm</span>
          </div>
        </div>
        <div className="main-layout">
          <Section product={product} banks={banks} />
          <Tabs>
            <Panel title="Content">
              <Content product={product} />
            </Panel>
            <Panel title="Về tác giả">
              <Author product={product} />
            </Panel>
            <Panel title="Sản phẩm khác của tác giả">
              <UserProduct product={product} />
            </Panel>
          </Tabs>
        </div>
      </>
    )
  );
}
export default React.memo(Product);
