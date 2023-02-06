import React from "react";
import "../css/home.scss";
import Navbar from "../components/Navbar";
import card from "../assets/icon_content_card.jpg";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <div></div>
      </section>
      <main>
        <div className="container">
          <h2>
            一百多年來，全世界已經有數不清的人收藏水晶球，藉由水晶球封存一段美好的記憶！
          </h2>
          <div className="flex-row">
            <Card
              key={0}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={0}
            />
            <Card
              key={1}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={1}
            />
            <Card
              key={2}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={2}
            />
            <Card
              key={3}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={3}
            />
            <Card
              key={4}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={4}
            />
            <Card
              key={5}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={5}
            />
            <Card
              key={6}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={6}
            />
            <Card
              key={7}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={7}
            />
            <Card
              key={8}
              image={card}
              title="水晶球"
              description="1889 年法國巴黎世界博覽會，全世界第一顆藝術玻璃水晶球問世。"
              id={8}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
