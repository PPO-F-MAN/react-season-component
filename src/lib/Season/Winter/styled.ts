import styled from "styled-components";

export const WinterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(#fff, 1));

  & .roundSmall,
  & .roundMedium,
  & .roundLarge {
    background: #fff;
    border-radius: 50%;
    position: absolute;
    width: 3px;
    height: 3px;
  }
  & .roundMedium {
    width: 4px;
    height: 4px;
  }
  & .roundLarge {
    width: 5px;
    height: 5px;
  }
  & .starSmall,
  & .starMedium,
  & .starLarge {
    position: absolute;
    width: 10px;
    height: 10px;
    background: url("/asset/season/winter/snowflake1.png");
    background-size: 100% 100%;
  }
  & .starMedium {
    width: 15px;
    height: 15px;
  }
  & .starLarge {
    width: 20px;
    height: 20px;
  }
  & .realSmall,
  & .realMedium,
  & .realLarge {
    position: absolute;
    width: 25px;
    height: 25px;
    background-image: url("/asset/season/winter/snowflake2.png");
    background-size: 100% 100%;
  }
  & .realMedium {
    width: 30px;
    height: 30px;
  }
  & .realLarge {
    width: 40px;
    height: 40px;
  }
  & .sharpSmall,
  & .sharpMedium,
  & .sharpLarge {
    position: absolute;
    width: 20px;
    height: 20px;
    background-size: 100% 100%;
    background-image: url("/asset/season/winter/snowflake3.png");
    background-size: 100% 100%;
  }
  & .sharpMedium {
    width: 28px;
    height: 28px;
  }
  & .sharpLarge {
    width: 35px;
    height: 35px;
  }
  & .ringSmall,
  & .ringMedium,
  & .ringLarge {
    position: absolute;
    width: 15px;
    height: 15px;
    background-image: url("/asset/season/winter/snowflake2.png");
    background-size: 100% 100%;
  }
  & .ringMedium {
    width: 25px;
    height: 25px;
  }
  & .ringLarge {
    width: 35px;
    height: 35px;
  }
`;
