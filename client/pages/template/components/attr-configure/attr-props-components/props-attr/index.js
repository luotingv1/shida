import Text from "./text";
import imageSrc from "./imageSrc";
import Interval from "./interval";
import videoSrc from "./videoSrc";
import imageSrcList from "./imageSrcList";
import Url from "./url";
import bgColor from "./bgColor";
import musicSrc from "./musicSrc";
import Subtitle from "./subtitle";
// import seizeSymbol from "./seize-symbol";


export default {
  [Text.name]: Text,
  [Subtitle.name]: Subtitle,
  [Interval.name]: Interval,
  [imageSrc.name]: imageSrc,
  [videoSrc.name]: videoSrc,
  [Url.name]: Url,
  [musicSrc.name]: musicSrc,
  [bgColor.name]: bgColor,
  [imageSrcList.name]: imageSrcList,
  // [seizeSymbol.name]:seizeSymbol
};
