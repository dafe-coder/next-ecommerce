type TNavItem = {
  title: string;
  subtitle?: string;
  subTitleOne?: string;
  subTitleTwo?: string;
  subTitleThree?: string;
  subTitleFour?: string;
  innerFields?: Array<{
    demoTitle: string;
    bgImg?: string;
    link: string;
    tag?: string;
    innerSubMenu?: Array<{
      subMenuTitle: string;
      subMenuLink: string;
    }>;
  }>;
  sideImgSrc?: string;
  textOverImage?: string;
};

export default TNavItem; // your array of nav items
