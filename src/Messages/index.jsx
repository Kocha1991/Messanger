import React from "react";
import Contact from "../Contact";
import Ava from "../Img/icons/3people.jpg";

import "./style.scss";

const Messages = () => {
  //вивести меседжі , якщо їх немає , то повідомлення що немає.
  //дані про вибраного контакта*аватара, імя беремо selectedContact
  return (
    <>
      <Contact />
      <div id="messages" className="messages">
        <div className="wrapper-scroll wrapper-scroll_messages">

          <div className="messages__friend">
            <img src={Ava} alt="" className="avatar" />
            <div className="text text_friend">
              Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
          <div className="messages__data messages__data_friend">
            24/08/2022 12:17
          </div>

          <div className="messages__your">
            <div className="text text_your">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              minus dolore officiis velit expedita aliquam deserunt, ad quisquam
              sed in, autem fugiat molestiae nisi aliquid amet reiciendis
              voluptatibus ut unde?
            </div>
          </div>
          <div className="messages__data messages__data_your">
            24/08/2022 12:18
          </div>

          <div className="messages__friend">
            <img src={Ava} alt="" className="avatar" />
            <div className="text text_friend">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              similique fugiat quia dicta tempora laboriosam cum, veritatis quos
              cumque rem.
            </div>
          </div>
          <div className="messages__data messages__data_friend">
            24/08/2022 12:21
          </div>

          <div className="messages__friend">
            <img src={Ava} alt="" className="avatar" />
            <div className="text text_friend">
              Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
          <div className="messages__data messages__data_friend">
            24/08/2022 12:17
          </div>

          <div className="messages__your">
            <div className="text text_your">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              minus dolore officiis velit expedita aliquam deserunt, ad quisquam
              sed in, autem fugiat molestiae nisi aliquid amet reiciendis
              voluptatibus ut unde?
            </div>
          </div>
          <div className="messages__data messages__data_your">
            24/08/2022 12:18
          </div>

          <div className="messages__your">
            <div className="text text_your">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              minus dolore officiis velit expedita aliquam deserunt, ad quisquam
              sed in, autem fugiat molestiae nisi aliquid amet reiciendis
              voluptatibus ut unde?
            </div>
          </div>
          <div className="messages__data messages__data_your">
            24/08/2022 12:18
          </div>

          <div className="messages__friend">
            <img src={Ava} alt="" className="avatar" />
            <div className="text text_friend">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              similique fugiat quia dicta tempora laboriosam cum, veritatis quos
              cumque rem.
            </div>
          </div>
          <div className="messages__data messages__data_friend">
            24/08/2022 12:21
          </div>

        </div>
      </div>
    </>
  );
};

export default Messages;
