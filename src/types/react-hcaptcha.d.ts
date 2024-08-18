declare module '@hcaptcha/react-hcaptcha' {
    import * as React from 'react';
  
    interface HCaptchaProps {
      sitekey: string;
      onVerify: (token: string) => void;
      theme?: string;
      size?: string;
      tabindex?: number;
      languageOverride?: string;
    }
  
    const HCaptcha: React.FC<HCaptchaProps>;
  
    export default HCaptcha;
  }
  