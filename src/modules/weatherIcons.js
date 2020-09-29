import clear from "../assets/clear.svg";
import moon from "../assets/moon.svg";
import night from "../assets/night.svg";
import cloudy from "../assets/cloudy.svg";
import cloudySunFew from "../assets/cloudySunFew.svg";
import lightRain from "../assets/lightRain.svg";
import mediumRain from "../assets/mediumRain.svg";
import heavyRain from "../assets/heavyRain.svg";
import thunderstorm from "../assets/thunderstorm.svg";
import thunderstormRain from "../assets/thunderstormRain.svg";
import snow from "../assets/snow.svg";
import mist from "../assets/mist.svg";




export const icons = {
    200: thunderstormRain,
    201: thunderstormRain,
    202: thunderstormRain,
    210: thunderstorm,
    211: thunderstorm,
    212: thunderstorm,
    221: thunderstorm,
    230: thunderstormRain,
    231: thunderstormRain,
    232: thunderstormRain,

    300: lightRain,
    301: lightRain,
    302: lightRain,
    310: lightRain,
    311: lightRain,
    312: lightRain,
    313: lightRain,
    314: lightRain,
    321: lightRain,

    500: lightRain,
    501: mediumRain,
    502: heavyRain,
    503: heavyRain,
    504: heavyRain,
    511: snow,
    520: heavyRain,
    521: heavyRain,
    522: heavyRain,
    531: heavyRain,

    600: snow,
    601: snow,
    602: snow,
    611: snow,
    612: snow,
    613: snow,
    615: snow,
    616: snow,
    620: snow,
    621: snow,

    701: mist,
    711: mist,
    721: mist,
    731: mist,
    741: mist,
    751: mist,
    761: mist,
    762: mist,
    771: mist,
    781: mist,

    800: clear,
    801: cloudySunFew,
    802: cloudy,
    803: cloudy,
    804: cloudy,
    getWeatherIcon(code, icon) {

        if(code === 800) {
            return icon === '01d' ? clear : night;
        } else if(code === 801) {
            return icon === '02d' ? cloudySunFew : moon;
        }

        return this[code];

    }
};