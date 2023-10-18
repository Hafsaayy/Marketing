import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "GOOGLE ADS",
          "FACEBOOK ADS",
          "SOCIAL MEDIA MARKETING",
          "WEB MARKETING",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
