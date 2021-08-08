// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption
// } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../../images/yt.jpg';


// const items = [
//   {
//     src:img1,
//     altText: 'Slide 1',
//     caption: 'https://www.youtube.com/watch?v=-dqwh8LoMzo'
    
//   },
//   {
//     src: img1,
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//     caption2:"https://www.youtube.com/watch?v=-dqwh8LoMzo"
//   },
//   {
//     src: img1,
//     altText: 'Slide 3',
//     caption: 'Slide 3'
//   }
// ];

// const Carrousel = (props) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   }

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   }

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   }

//   const slides = items.map((item) => {
//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img src={item.src} alt={item.altText} width="100%" height="700px"/>
//         <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//     >
//       <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//       {slides}
//       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//     </Carousel>
//   );
// }

// export default Carrousel;
// import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: img1,
    altText: 'Slide 1',
    caption: 'https://www.youtube.com/watch?v=-dqwh8LoMzo',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: img1 ,
    altText: 'Slide 2',
    caption: 'https://www.youtube.com/watch?v=-dqwh8LoMzo',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: img1,
    altText: 'Slide 3',
    caption: 'https://www.youtube.com/watch?v=-dqwh8LoMzo',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;