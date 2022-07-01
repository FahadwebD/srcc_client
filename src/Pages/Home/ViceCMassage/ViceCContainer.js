
import React from 'react';
import './ViceChairmen.scss'
import useStaff from '../../../hooks/useStaff';
import { Link } from 'react-router-dom';





const ViceCContainer = () => {

    const [staffs] = useStaff()
    return (
        <div style={{padding:'40px'}}>
        	<article style={{textAlign:"left"}} className="postcard light red">
			<div className="postcard__img_link" style={{padding:'10px'}}>
                <img className="postcard__img" src={`data:image/png;base64,${staffs[0]?.image}`}  alt="" srcset="" />
				
			</div>
			<div className="postcard__text t-dark">
				<h2 className="postcard__title red">{staffs[0]?.designation}</h2>
				<div className="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
                    {staffs[0]?.name}
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">অধ্যাপক ড. এ এস এম মাকসুদ কামাল লক্ষ্মীপুর জেলায় এক সম্ভ্রান্ত মুসলিম পরিবারে ২১ নভেম্বর ১৯৬৬ সালে জন্মগ্রহণ করেন। তাঁর পিতা মরহুম আলহাজ ফরিদ আহমেদ এবং মাতা মরহুমা মাছুমা খাতুন ছিলেন সমাজহিতৈষী ও বিদ্যানুরাগী ব্যক্তিত্ব। তাঁর পিতা একজন সুপরিচিত ও প্রতিষ্ঠিত ব্যবসায়ীও ছিলেন। তাঁর অগ্রজ জনাব এ কে এম শাহাজাহান কামাল এমপি ইতঃপূর্বে গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের বেসামরিক বিমান পরিবহন ও পর্যটন মন্ত্রণালয়ের মন্ত্রীর দায়িত্ব পালন করেন। অধ্যাপক মাকসুদ কামাল শিক্ষা জীবনের সকল স্তরে প্রথম বিভাগ/শ্রেণি অর্জন করেন। ঢাকা বিশ্ববিদ্যালয়ের ভূতত্ত্ব বিভাগ থেকে তিনি ১ম শ্রেণিতে বি.এসসি (অনার্স) এবং এম.এসসি পাশ করেন।</div>
				<ul className="postcard__tagbox">
                <Link style={{textDecoration:'none'}} to='chairman'><li className="tag__item">Read More</li></Link>
					
				</ul>
			</div>
		</article>
        </div>
    );
};

export default ViceCContainer;