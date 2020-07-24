import React from "react";
import { Link } from "react-router-dom";
import "./Animation.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "./mutify-logo.png";

function Animation() {
  const muted = [{ transform: "translateX(20px)" }];
  const cart = [{ transform: "translateY(20px)" }];

  const mutedTiming = {
    duration: 3000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
  };

  const appeartwo = [{ transform: "translateY(-20px)" }];

  const appeartwoTiming = {
    delay: 500,
    duration: 3000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
  };

  const appear = [{ transform: "translateY(20px)" }];

  const appearTiming = {
    delay: 500,
    duration: 3000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out",
  };

  const muted__png = useWebAnimations({
    keyframes: muted,
    timing: mutedTiming,
  });
  const cart__png = useWebAnimations({
    keyframes: cart,
    timing: mutedTiming,
  });

  const appear__png = useWebAnimations({
    keyframes: appeartwo,
    timing: appeartwoTiming,
  });

  const fbMessenger__png = useWebAnimations({
    keyframes: appeartwo,
    timing: appeartwoTiming,
  });
  const gotomeeting__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const fbMessengerBlur__png = useWebAnimations({
    keyframes: appeartwo,
    timing: appeartwoTiming,
  });

  const viberBlur__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const telegramBlur__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });
  const slackBlur__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const hangoutsBlur__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });
  const skypeBlur__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const skype__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const webex__png = useWebAnimations({
    keyframes: appeartwo,
    timing: appeartwoTiming,
  });

  const telegram__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const viber__png = useWebAnimations({
    keyframes: appeartwo,
    timing: appeartwoTiming,
  });

  const hangouts__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const zoom__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });

  const slack__png = useWebAnimations({
    keyframes: appear,
    timing: appearTiming,
  });
  return (
    <div>
      <div className="product-hunt">
        <div className="container">
          <div className="product-hunt__content">
            <span>
              Hey ProductHunters! Get a 30% discount with the promocode:{" "}
              <b>PRODUCTHUNT</b>
            </span>
            <img
              src="./images/producthunt-79dc7b92d7.png"
              alt=""
              // srcset="./images/producthunt-79dc7b92d7.png, ./images/producthunt@2x-8dc26617ae.png 2x"
            />
          </div>
        </div>
      </div>
      <div className="content-wrap">
        <header className="header">
          <div className="header__inner container">
            <nav className="main-nav">
              <div className="main-nav__inner">
                <div className="main-nav__logo">
                  <img
                    src="https://mutify.app/images/mutify-logo@2x-43fd3a1fd6.png"
                    // srcset="images/mutify-logo@2x-43fd3a1fd6.png 2x"
                    alt="Mutify"
                  />
                  <span>Mutify</span>
                </div>
                <ul className="main-nav__menu">
                  <li>
                    <Link to="/">Works With</Link>
                  </li>
                  <li>
                    <Link to="/">Noise Level</Link>
                  </li>
                  <li>
                    <Link to="/">Switch Device</Link>
                  </li>
                  <li>
                    <Link to="/">Feedback</Link>
                  </li>
                </ul>
                <Link
                  className="button button_small main-nav__button download-button"
                  to="/"
                >
                  Download
                </Link>
                <button className="main-nav__burger"></button>
              </div>
            </nav>
          </div>
        </header>
        <div className=" section intro">
          <div className="intro__inner container">
            <h1 className="title intro__title">Mutify for Mac</h1>
            <p>
              Use a shortcut or the touch bar on any&nbsp;Mac device
              to&nbsp;quickly mute your&nbsp;microphone
            </p>
            <div className="intro__buttons-wrapper">
              <Link className="button intro__button download-button" to="/">
                Download
              </Link>
              <Link
                to="/"
                className="button button_white button_bold intro__button buy-button"
              >
                Buy: $4.99
              </Link>
            </div>
            <div ref={muted__png.ref} className="intro__video-wrapper">
              <video
                src="https://mutify.app/videos/main-screen@1x.mp4"
                poster="images/mutify-video@2x-5f70260dcb.jpg"
                data-2x-src="videos/main-screen@2x.mp4"
                data-2x-poster="images/mutify-video@2x-5f70260dcb.jpg"
                muted=""
                autoplay=""
                loop="Infinite"
              ></video>
              <img
                src="images/mutify-video-7a62103fb9.jpg"
                // srcset="images/mutify-video@2x-5f70260dcb.jpg 2x"
                alt=""
              />
              <div className="intro__wave-wrapper">
                <img
                  src="https://mutify.app/images/wave-1-ddc3a23018.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" section work-with">
          <div className="work-with__inner container">
            <div className="work-with__microphone-control">
              <h2 className="title title_medium work-with__title">
                Control your&nbsp;microphone anywhere
              </h2>
              <p>Even during calls</p>
              <img
                ref={cart__png.ref}
                src="https://mutify.app/images/FaceTimePopup-8b68d7ca18.jpg"
                // srcset="images/FaceTimePopup@2x-11df12166f.jpg 2x"
                alt="FaceTime Popup"
              />
              <div className="work-with__logos-wrapper">
                <div
                  ref={appear__png.ref}
                  className="work-with__logo work-with__logo_appear work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Appear-1ad98c17f8.png"
                    // srcset="images/Appear@2x-524960b483.png 2x"
                    alt="Appear"
                  />
                  <span>Appear</span>
                </div>
                <div
                  ref={fbMessenger__png.ref}
                  className="work-with__logo work-with__logo_fb work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/FB-1b46484926.png"
                    // srcset="images/FB@2x-22351c148e.png 2x"
                    alt="FB Messenger"
                  />
                  <span>FB Messenger</span>
                </div>
                <div
                  ref={gotomeeting__png.ref}
                  className="work-with__logo work-with__logo_go-to-meetings work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/GoToMeetings-6907108d0d.png"
                    // srcset="images/GoToMeetings@2x-9a4bc25e56.png 2x"
                    alt="GoToMeetings"
                  />
                  <span>GoToMeetings</span>
                </div>
                <div
                  ref={skype__png.ref}
                  className="work-with__logo work-with__logo_skype work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Skype-64e68baaf2.png"
                    // srcset="images/Skype@2x-184b075740.png 2x"
                    alt="Skype"
                  />
                  <span>Skype</span>
                </div>
                <div
                  ref={slack__png.ref}
                  className="work-with__logo work-with__logo_slack work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Slack-a34e725729.png"
                    // srcset="images/Slack@2x-aa29d1f637.png 2x"
                    alt="Slack"
                  />
                  <span>Slack</span>
                </div>
                <div
                  ref={zoom__png.ref}
                  className="work-with__logo work-with__logo_zoom work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Zoom-0cb3267633.png"
                    // srcset="images/Zoom@2x-5fea776a6d.png 2x"
                    alt="Zoom"
                  />
                  <span>Zoom</span>
                </div>
                <div
                  ref={hangouts__png.ref}
                  className="work-with__logo work-with__logo_hangouts work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Hangouts-de6270cae5.png"
                    // srcset="images/Hangouts@2x-25426e4a32.png 2x"
                    alt="Hangouts"
                  />
                  <span>Hangouts</span>
                </div>
                <div
                  ref={webex__png.ref}
                  className="work-with__logo work-with__logo_webex work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Webex-0b269eb5af.png"
                    // srcset="images/Webex@2x-d5b4bc2142.png 2x"
                    alt="Webex"
                  />
                  <span>Webex</span>
                </div>
                <div
                  ref={viber__png.ref}
                  className="work-with__logo work-with__logo_viber work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Viber-bcad9961af.png"
                    // srcset="images/Viber@2x-f5bb2dfd9d.png 2x"
                    alt="Viber"
                  />
                  <span>Viber</span>
                </div>
                <div
                  ref={telegram__png.ref}
                  className="work-with__logo work-with__logo_telegram work-with__logo_floating"
                >
                  <img
                    src="https://mutify.app/images/Telegram-d2ec968abe.png"
                    // srcset="images/Telegram@2x-22661ce92e.png 2x"
                    alt="Telegram"
                  />
                  <span>Telegram</span>
                </div>
                <div
                  ref={skypeBlur__png.ref}
                  className="work-with__logo work-with__logo_skype work-with__logo_blurred"
                >
                  <img
                    src="https://mutify.app/images/Skype-64e68baaf2.png"
                    // srcset="images/Skype@2x-184b075740.png 2x"
                    alt="Skype"
                  />
                </div>
                <div
                  ref={viberBlur__png.ref}
                  className="work-with__logo work-with__logo_viber work-with__logo_blurred"
                >
                  <img
                    src="https://mutify.app/images/Viber-bcad9961af.png"
                    // srcset="images/Viber@2x-f5bb2dfd9d.png 2x"
                    alt="Viber"
                  />
                </div>
                <div
                  ref={telegramBlur__png.ref}
                  className="work-with__logo work-with__logo_telegram work-with__logo_blurred"
                >
                  <img
                    src="https://mutify.app/images/Telegram-d2ec968abe.png"
                    // srcset="images/Telegram@2x-22661ce92e.png 2x"
                    alt="Telegram"
                  />
                </div>
                <div
                  ref={slackBlur__png.ref}
                  className="work-with__logo work-with__logo_slack work-with__logo_blurred"
                >
                  <img
                    src="https://mutify.app/images/Slack-a34e725729.png"
                    // srcset="images/Slack@2x-aa29d1f637.png 2x"
                    alt="Slack"
                  />
                </div>
                <div
                  ref={fbMessengerBlur__png.ref}
                  className="work-with__logo work-with__logo_fb work-with__logo_blurred"
                >
                  <img
                    src="https://mutify.app/images/FB-1b46484926.png"
                    // srcset="images/FB@2x-22351c148e.png 2x"
                    alt="FB Messenger"
                  />
                </div>
                <div
                  ref={hangoutsBlur__png.ref}
                  className="work-with__logo work-with__logo_hangouts work-with__logo_blurred"
                >
                  <img
                    src="https://mutify.app/images/Hangouts-de6270cae5.png"
                    // srcset="images/Hangouts@2x-25426e4a32.png 2x"
                    alt="Hangouts"
                  />
                </div>
              </div>
            </div>
            <ScrollAnimation animateIn="fadeOut">
              <div className="work-with__macbook-wrapper">
                <img
                  src="https://mutify.app/images/macbook-1-51fcc36e0a.png"
                  srcset="images/macbook-1@2x-7437a8b433.png 2x"
                  alt="MacBook"
                />

                <motion.img
                  animate={{ scale: [0, 1] }}
                  src="https://mutify.app/images/magnifier-1878b93fb0.png"
                  srcset="images/magnifier@2x-31e24730ea.png 2x"
                  alt="Mute button"
                  className="animated bounceIn"
                />

                <div className="work-with__wave-wrapper">
                  <img
                    src="https://mutify.app/images/wave-2-ca2e74569e.svg"
                    alt=""
                  />
                </div>
              </div>
            </ScrollAnimation>
            <p>
              Use a shortcut or the touch bar on any&nbsp;Mac device
              to&nbsp;quickly mute your&nbsp;microphone
            </p>
            <div className="work-with__buttons-wrapper">
              <Link
                className="button work-with__button download-button"
                to="https://storage.mutify.app/data/Mutify.dmg"
              >
                Download
              </Link>
              <Link
                to="/"
                className="button button_white button_bold work-with__button buy-button"
              >
                Buy: $4.99
              </Link>
            </div>
          </div>
        </div>
        <div className="noise-level">
          <div className="noise-level__inner container">
            <div className="noise-level__block">
              <div className="noise-level__content">
                <h2 className="title title_medium title_white noise-level__title">
                  Easily control the volume level
                </h2>
                <p>
                  Use a shortcut to&nbsp;quickly access a&nbsp;window for
                  your&nbsp;microphone volume&nbsp;controls
                </p>
                <Link className="button button_white" to="/">
                  Try It Free
                </Link>
              </div>
              <div className="noise-level__right-block">
                <img
                  src="https://mutify.app/images/wave-c1b84a9196.png"
                  srcset="images/wave@2x-7ab45b32d6.png 2x"
                  alt=""
                />
                <div className="noise-level__circles-wrapper">
                  <div className="noise-level__circle noise-level__circle_active"></div>
                  <div className="noise-level__circle noise-level__circle_active"></div>
                  <div className="noise-level__circle"></div>
                  <div className="noise-level__circle"></div>
                  <div className="noise-level__circle"></div>
                  <div className="noise-level__circle"></div>
                  <div className="noise-level__circle"></div>
                  <div className="noise-level__circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="switch-device">
          <div className="switch-device__inner container">
            <div className="switch-device__content">
              <h2 className="title title_medium switch-device__title">
                Stay muted even on a newly connected device
              </h2>
              <p>
                If you mute your mic on a call and switch to a new device, such
                as your AirPods, the app will detect the&nbsp;change and mute
                the new device as well
              </p>
              <Link
                className="button switch-device__button download-button"
                to="/"
              >
                Download
              </Link>
            </div>
            <div className="switch-device__images-wrapper">
              <img
                className="switch-device__macbook-image"
                src="https://mutify.app/images/Mockup_010-d63c73e7e3.png"
                srcset="images/Mockup_010@2x-ae14ac1830.png 2x"
                alt="MacBook"
                title=""
              />
              <ScrollAnimation animateIn="fadeOut">
                <motion.div
                  animate={{ scale: [0, 0.5, 1] }}
                  transition={{
                    // duration: 1,
                    ease: "easeInOut",
                    // times: [0, 1],
                    loop: 1,
                  }}
                >
                  <img
                    className="switch-device__mutify-window-image animated fadeInAngle"
                    src="https://mutify.app/images/muted-screen-04789f86b7.png"
                    srcset="images/muted-screen@2x-8fb72fee3e.png 2x"
                    alt="Mutify window"
                    title=""
                  />
                  <div className="switch-device__airpods-wrapper">
                    <img
                      src="https://mutify.app/images/airpods-left-7c7413e6a7.png"
                      srcset="images/airpods-left@2x-5904767628.png 2x"
                      alt="Left airpod"
                      className="animated fadeInUp"
                    />
                    <img
                      src="https://mutify.app/images/airpods-right-1edfc7c6a2.png"
                      srcset="images/airpods-right@2x-32b66e95b0.png 2x"
                      alt="Right airpod"
                      className="animated fadeInUp"
                    />
                  </div>
                </motion.div>
              </ScrollAnimation>

              <div className="switch-device__wave-wrapper">
                <img
                  src="https://mutify.app/images/wave-3-e6584704b7.svg"
                  alt=""
                />
              </div>
            </div>
            <img
              className="switch-device__full-image"
              src="images/switch-device-image-395c6d0238.png"
              srcset="images/switch-device-image@2x-4d3bcd1e26.png"
              alt=""
              role="presentation"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer__inner container">
          <div className="footer__feedback">
            <h2 className="title title_medium footer__title">
              Have an Idea or Feedback?
            </h2>
            <Link to="/">help@mutify.app</Link>
            <video
              src="https://mutify.app/videos/wave-white@1x.mp4"
              poster="images/wave-white-pic@1x-c0ee74053d.jpg"
              data-2x-src="videos/wave-white@2x.mp4"
              data-2x-poster="images/wave-white-pic@2x-6d7635f668.jpg"
              muted=""
              autoplay=""
              loop="Infinite"
            ></video>

            <img
              src="https://mutify.app/images/wave-white.jpg"
              srcset="images/wave-white-pic@2x-6d7635f668.jpg 2x"
              alt=""
            ></img>
          </div>
          <nav className="main-nav footer__main-nav">
            <div className="main-nav__inner">
              <div className="main-nav__logo">
                <img
                  src={logo}
                  // srcset="images/mutify-logo@2x-43fd3a1fd6.png 2x"
                  alt="Mutify"
                />
                <span>Mutify</span>
              </div>
              <ul className="main-nav__menu">
                <li>
                  <Link to="/">Works With</Link>
                </li>
                <li>
                  <Link to="/">Noise Level</Link>
                </li>
                <li>
                  <Link to="/">Switch Device</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
              <Link
                className="button button_small main-nav__button download-button"
                to="/"
              >
                Download
              </Link>
              <button className="main-nav__burger"></button>
            </div>
          </nav>
          <div className="footer__copyright">
            Made by&nbsp;
            <Link to="/">Pixel Point&nbsp;</Link>– Web, Mobile, AI, Blockchain
            development company. © 2019 Mutify. All right reserved
          </div>
        </div>
      </div>
      <nav className="mobile-nav mobile-nav_hidden">
        <div className="mobile-nav__inner container">
          <div className="mobile-nav__logo">
            <img
              src="images/mutify-logo-6ab64e5ad7.png"
              // srcset="images/mutify-logo@2x-43fd3a1fd6.png 2x"
              alt="Mutify"
            />
            <span>Mutify</span>
          </div>
          <ul className="mobile-nav__menu">
            <li>
              <Link to="/">Work With</Link>
            </li>
            <li>
              <Link to="/">Noise level</Link>
            </li>
            <li>
              <Link to="/">Switch Device</Link>
            </li>
            <li>
              <Link to="/">Feedback</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
          <button className="mobile-nav__close"></button>
        </div>
      </nav>
    </div>
  );
}

export default Animation;
