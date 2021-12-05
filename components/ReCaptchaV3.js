import axios from 'axios';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';

import {siteKeyRecaptcha, secretKeyRecaptcha} from '../common/config';

export default function ReCaptchaV3Google() {
  const sendReq = (token) => {
    if (!token) return;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKeyRecaptcha()}&response=${token}`;
    return axios
      .post(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKeyRecaptcha()}>
      <GoogleReCaptcha onVerify={(token) => sendReq(token)} />
    </GoogleReCaptchaProvider>
  );
}
