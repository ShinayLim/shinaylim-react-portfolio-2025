import React from "react";
import GlassSection from "../components/GlassSection";
import CircleWithLabel from "../components/CircleWithLabel";
import GlassBannerPlayer from "../components/GlassBannerPlayer";
import myAlbumCover from "./../assets/images/myAlbumCover.jpeg";
import mySongPath from "./../assets/audio/song.mp3";

const Home = () => {
  return (
    <>
      <GlassSection title="basic info.">
        <p>✨HELLO I'M SHIN you can call me SHIN or SHINAY✨</p>
        <p>
          I started out as a graphic designer, freelancing and running my own
          little printing hub where I laid out designs and brought ideas to life
          on paper. Eventually, curiosity pushed me past layouts and logos — and
          into code. Now, as a front-end developer, I get to design and build:
          crafting sleek, responsive websites that work as beautifully as they
          look.
        </p>
      </GlassSection>
      <br />
      <div className="flex flex-1">
        <GlassSection title="personality." className="mr-5 w-full">
          <div class="flex justify-center w-full -mt-10 mb-5">
            <img
              class="w-20 h-20 object-center rounded-full"
              src="https://png.pngtree.com/png-vector/20250518/ourmid/pngtree-cartoon-light-pink-heart-illustration-png-image_16316271.png"
              alt="Rounded avatar"
            ></img>
          </div>
          <p className="text-center text-4xl font-derian">I'M INFJ-T</p>
          <p>
            ✨ As an INFJ, I’m equal parts dreamer and doer. I care deeply about
            people and love creating things that actually make a difference —
            whether it’s a design, a website, or just a small detail that
            brightens someone’s day. I bring empathy, imagination, and a strong
            sense of purpose into my work, which means I’m not just building
            projects — I’m building experiences that connect.
          </p>
        </GlassSection>
        <br />
        <GlassSection title="interests." className="w-full">
          <CircleWithLabel
            imageSrc="https://png.pngtree.com/png-vector/20250518/ourmid/pngtree-cartoon-light-pink-heart-illustration-png-image_16316271.png"
            label="I love cats I have 10 of 'em"
          />

          <CircleWithLabel
            imageSrc="https://png.pngtree.com/png-vector/20250518/ourmid/pngtree-cartoon-light-pink-heart-illustration-png-image_16316271.png"
            label="I love coffee and matcha from ZUS ☕"
          />

          <CircleWithLabel
            imageSrc="https://png.pngtree.com/png-vector/20250518/ourmid/pngtree-cartoon-light-pink-heart-illustration-png-image_16316271.png"
            label="I love thriller & horror books 📚"
          />
        </GlassSection>
      </div>
    </>
  );
};

export default Home;
