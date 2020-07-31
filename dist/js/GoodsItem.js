import Utils from "./Utils.js";

export default class GoodsItem {
  elem;
  constructor(data) {
    this.elem = this.createElem(data);
    this.a = this.elem.children[0];
    this.ul.addEventListener("mouseover", this.overHandler = e => {
      if (e.target.tagName === "LI") {
        var arr = Array.prototype.slice.call(e.target.parentNode.children)
        // console.log(data.icon[i])
        var that = e.target;
        var index;
        console.log(arr)
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === e.target) {
            index = i;
            //   console.log( e.target.parentNode.parentNode.parentNode.children[1].children[0].tagName)  
            if (e.target.parentNode.parentNode.parentNode.children[1].children[0].tagName === "IMG") {
              e.target.parentNode.parentNode.parentNode.children[1].children[0].src = data.icon[index];
            } else {
              e.target.parentNode.parentNode.parentNode.children[0].children[0].src = data.icon[index];
            }
          }
        }
        e.target.style.border = "3px solid gray";
      }
    });
    this.ul.addEventListener("mouseout", this.outHandler = e => {
      if (e.target.tagName === "LI") {
        //console.log(e.target)
        e.target.style.border = "1px solid gray";
      }
    });
  }
  appendTo(parent) {
    if (typeof parent === "string") {
      parent = document.querySelector(parent);
    }
    parent.appendChild(this.elem);
  }
  createElem(data) {
    var div = Utils.ce("div");
    div.className = "goodsCon";
    var a = Utils.ce("a");
    a.href = data.href;
    a.target = "_blank";
    div.appendChild(a);
    div.addEventListener("mouseenter", this.enterHandler = e => {
      this.h6.textContent = data.enterInfo;
      this.h6.style.color = "red"
    })
    div.addEventListener("mouseleave", this.leaveHandler = e => {
      this.h6.textContent = data.info;
      this.h6.style.color = "#333"
    })
    this.createPriceConDown(a, data.sales, data.priceDown)
    this.createIcon(a, data.icon);
    this.createTitle(a, data.title);
    this.h6 = this.createTitle2(a, data.info);
    this.ul = this.createDotList(a, data.color);
    this.createPriceCon(div, data);
    return div;
  }
  createPriceConDown(parent, sales, priceDown) {
    if (priceDown) {
      var div = Utils.ce("div", {
        width: "46px",
        height: "20px",
        lineHead: "18px",
        border: "1px solid #d5b480",
        color: "#a06e37",
        backgroundColor: "#fffbdf",
        position: "absolute",
        right: "15px",
        top: "15px",
        fontSize: "12px",
        textAlign: "center",
        boxShadow: " 0 1px 3px 0 rgba(0,0,0,.05)",
        borderRadius: "13px"
      })
      var text = document.createTextNode(priceDown)
      div.appendChild(text)
      parent.appendChild(div)
    } else if (sales) {
      var div = Utils.ce("div", {
        width: "46px",
        height: "20px",
        lineHead: "18px",
        border: "1px solid #f3938b",
        color: "#d03b34;",
        backgroundColor: "#ffe7e5",
        position: "absolute",
        right: "15px",
        top: "15px",
        fontSize: "12px",
        textAlign: "center",
        boxShadow: " 0 1px 3px 0 rgba(0,0,0,.05)",
        borderRadius: "13px"
      })
      var text = document.createTextNode("买赠")
      div.appendChild(text)
      parent.appendChild(div)
    }
  }

  createIcon(parent, iconPath) {
    var div = Utils.ce("div")
    var img;
    img = new Image();
    img.src = iconPath[0];
    img.className = "icon";
    div.appendChild(img);
    div.className = "iconDiv";
    parent.appendChild(div);

  }

  createTitle(parent, title) {
    var h4 = Utils.ce("h4");
    h4.className = "title";
    h4.textContent = title;
    // console.log(title)
    parent.appendChild(h4);
  }


  createTitle2(parent, title2) {
    var h6 = Utils.ce("h6");
    h6.className = "title2";
    h6.textContent = title2;
    parent.appendChild(h6);
    return h6;
  }


  createDotList(parent, color) {
    var div = Utils.ce("div", {
      width: "303.5px",
      height: "17px",
      marginTop: "15px"
    });
    var ul = Utils.ce("ul", {
      height: "100%",
      padding: "0",
      display: "flex",
      justifyContent: "center",

    });

    if (color) {
      for (var i = 0; i < color.length; i++) {
        var li = Utils.ce("li", {
          width: "10px",
          height: " 10px",
          border: "1px solid #000",
          float: "left",
          margin: " 3px",
          borderRadius: "50%",
          backgroundColor: color[i]
        });
        ul.appendChild(li);
      }
    }
    div.appendChild(ul);
    parent.appendChild(div);
    return ul;
  }








  createPriceCon(parent, data) {
    var div = Utils.ce("div");
    div.className = "priceCon";
    //this.createHistory(div, data.history);
    this.createPrice(div, data.price, data.oldPrice);
    parent.appendChild(div);

  }

  /* createHistory(parent, history) {
    if (history.trim().length === 0) return;
    var div = Utils.ce("div");
    if(history){
      div.textContent = history;
    }
    
    div.className = "history";
    parent.appendChild(div);
  } */
  createPrice(parent, price, oldPrice) {
    var priceDiv = Utils.ce("span");

    priceDiv.textContent = "￥" + price;
    priceDiv.className = "price";
    var oldPriceDiv = Utils.ce("span");
    if (oldPrice) {
      oldPriceDiv.textContent = "￥" + oldPrice;
    }

    oldPriceDiv.className = "oldPrice";
    parent.appendChild(priceDiv);
    parent.appendChild(oldPriceDiv);
  }
}






