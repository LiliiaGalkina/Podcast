import allstyle from "./allstyles.module.scss";

const Banner = ({ bannertext }) => {
	return (
    <div className={allstyle.banner}>
      <div className={allstyle.bannerquote}>
        <img src="/Podcast/image/homepage/quote.png" alt="красные кавычки" />
      </div>
      <h3 className={allstyle.bannertitle}>{bannertext}</h3>
      <div className={allstyle.bannermanblock}>
        <div className={allstyle.banneravatar}>
          <img src="/Podcast/image/homepage/avatar.png" alt="фото John Smith" />
        </div>
        <p className={allstyle.bannername}>John Smith</p>
        <div className={allstyle.bannerpositionbody}>
          <div className={allstyle.bannergreencircle}>
            <img
              src="/Podcast/image/homepage/green-circle.svg"
              alt="зеленый кружок с черными полосками"
            />
          </div>
          <p className={allstyle.bannerposition}>Social Community Manager</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;