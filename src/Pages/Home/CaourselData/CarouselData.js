import React from 'react';
import Banner from '../Banner/Banner';
import bannerImage1 from '../../../assets/images/242060438_4438952249537185_1536504917694597543_n.jpg'

const CarouselData = () => {
    const data = [
        {
          image:
            "https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/242060438_4438952249537185_1536504917694597543_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FpNXgx2dsF4AX83xsYl&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_GwcVWsmDLGgEBCiUZxWhaeXnSakypdbd8GJP79c-TJw&oe=62A6FA43",
          caption: `
          মহান বিজয় দিবস উপলক্ষে সিলেট রেড ক্রিসেন্ট নার্সিং কলেজ 
          `,
        },
        {
          image:
            "https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/268645119_4438952262870517_6507874272854008249_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JdL1fylP1OAAX8msDnD&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT8EI1qnm8e5JrU091FvCFVioeBzXLGr_5OtFmb8zVMdaA&oe=62A77F82",
          caption: "<div>মহান বিজয় দিবস উপলক্ষে সিলেট রেড ক্রিসেন্ট নার্সিং কলেজ </div>",
        },
        {
          image:
            "https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/242060438_4438952249537185_1536504917694597543_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FpNXgx2dsF4AX83xsYl&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_GwcVWsmDLGgEBCiUZxWhaeXnSakypdbd8GJP79c-TJw&oe=62A6FA43",
          caption: "<div>মহান বিজয় দিবস উপলক্ষে সিলেট রেড ক্রিসেন্ট নার্সিং কলেজ </div>",
        },
        
      
      ];
    
      const captionStyle = {
        fontSize: "2em",
        fontWeight: "bold",
      };
      const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
      };
     
      return (
        <div>
          <div>
              <Banner
                data={data}
                time={3000}
                width="100%"
                height="600px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={false}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={false}
                thumbnailWidth="100px"
                showNavBtn={true}
                style={{
                  margin: "0px auto",
                  width:'100%'
                }}
              />
           
          </div>
        </div>
      );
};

export default CarouselData;