declare module 'react-slick' {
    import { Component } from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      cssEase?: string;
      adaptiveHeight?: boolean;
      arrows?: boolean;
      pauseOnHover?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Settings;
      }>;
      [key: string]: any; // Allow additional properties
    }
  
    export default class Slider extends Component<Settings> {}
  }
  