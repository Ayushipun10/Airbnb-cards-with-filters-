import React, { useState } from "react";
import "./Cards.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import BookIcon from "../Components/BookIcon/BookIcon";

type CardData = {
  imgSrc: string[];
  title: string;
  rating: number;
  desc: string;
  property_type : string[]
  checkInDate: string;
  checkOutDate: string;
  price: string;
  total_before_taxes: string;
  selectedCategory: string | null;
  displayBeforeTaxes: boolean;
}[];

function formatDates(checkInDate: string, checkOutDate: string) {
  const checkInDateParts = checkInDate.split("-");
  const checkOutDateParts = checkOutDate.split("-");

  const checkInDay = checkInDateParts[2];
  const checkInMonth = new Date(checkInDate).toLocaleString("default", {
    month: "short",
  });

  const checkOutDay = checkOutDateParts[2];
  const checkOutMonth = new Date(checkOutDate).toLocaleString("default", {
    month: "short",
  });

  if (checkInMonth === checkOutMonth) {
    return `${checkInDay}-${checkOutDay} ${checkOutMonth}`;
  } else {
    return `${checkInDay} ${checkInMonth}-${checkOutDay} ${checkOutMonth}`;
  }
}

function Card({ data }: { data: CardData }) {
  const [likedStates, setLikedStates] = useState(
    Array(data.length).fill(false)
  );

  // const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  const handleLikeClick = (index: number) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

  return (
    <div className="cards-flex">
      {data.map((card, index) => (
        <div className="card-box" key={index}>
          <div className="heart-icon" onClick={() => handleLikeClick(index)}>
            {likedStates[index] ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteIcon style={{ color: "lightgrey" }} />
            )}
          </div>
          <BookIcon />
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            mousewheel={true}
            cssMode={true}
            pagination
            modules={[Pagination, Navigation]}
            className="swiper-container"
          >
            {card.imgSrc.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} className="card-img" alt={`Image ${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="card-info-flex">
            <h3 className="card-title">{card.title}</h3>
            <div className="card-rating">
              <StarRateRoundedIcon />
              <p>{card.rating}</p>
            </div>
          </div>
          <div className="about-card">
            <p
              className="line"
              style={{ margin: 0, color: "var(--font-grey)" }}
            >
              {card.desc}
            </p>
            <p
              className="line"
              style={{ marginTop: "-8px", color: "var(--font-grey)" }}
            >
              {formatDates(card.checkInDate, card.checkOutDate)}
            </p>
            <p
              style={{
                marginTop: "-8px",
                fontSize: "1rem",
                color: "var(--black)",
              }}
            >
              <span className="line" style={{ fontWeight: "600" }}>
                ₹{card.price}
              </span>{" "}
              night
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;