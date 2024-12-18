
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function categoriesButton() {
    const [show, setShow] = useState(false)
    const categories = ['ClassicArt', 'PopCultureIcons', 'MotivationalQuotes', 'NatureLandscapes', 'AbstractModernArt', 'vintageRetro', 'MoviesTvShows', 'MusicLegends', 'TravelDestinations', 'HistoricalMoments', 'SportsHeroes', 'AnimeManga', 'GamingUniverse', 'MinimalistDesigns', 'StreetArtGraffiti', 'FantasySciFi', 'ComicBookCharacters', 'TypographyCalligraphy', 'SpaceAstronomy', 'FamousPaintings']
    const [height, setHeight] = useState(0)
    const navigate = useNavigate();
    const handleClick= (categoryName:string)=>{
    navigate(`/search/${categoryName}`,{replace:false});
    setShow(false);
    }
    useEffect(() => {
        if(window.innerWidth<640){
            setHeight(show ? 400 : 0);
        }else{
            setHeight(show ? 110 : 0)
        }
        
    }, [show])

    return (
        <>
            <button className={`border static border-[#a7a3a3b7] py-1 px-3 rounded-xl shadow-md shadow-[#222121] text-[rgb(117,115,115)] hover:scale-105 transition-transform duration-300 ease-in ${show ? 'bg-[#ffffff]' : ''}
            max-sm:text-[0.7rem]
            dark:shadow-[#8183e7] dark:border-[#0c5d7e] dark:shadow-sm dark:text-[#c9bfbf]
            `} 
                onClick={() => setShow(!show)}>
                Categories
            </button>
            {/* categories container */}
            {show && <div className={` fixed left-0 z-[54] top-[3.3rem] justify-center w-full flex flex-wrap  bg-[#ffffff] overflow-hidden rounded-b-xl shadow-lg items-center   border space-x-2 space-y-3  px-[0.5rem] py-3 transition-[height] duration-500 ease-in
            max-sm:top-[5rem] max-sm:space-y-2 
            `}
                style={{ height: height }}>
                {categories.map((category, index) => {
                    return (
                        <button key={index} className='border border-[#069b0d] py-1 px-3 text-[0.7rem] rounded-lg text-[rgb(20,83,20)] transition-transform duration-300 ease-in h-fit
                        hover:scale-[1.2]  hover:border-none hover:text-[#f02727]' onClick={()=>handleClick(category)}>
                            {category}
                        </button>
                    )
                })}
            </div>}
        </>
    )
}

export default categoriesButton