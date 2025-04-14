
import { useEffect, useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import { Dialog, Button, Card } from '@mui/material';
function categoriesButton() {
    const [show, setShow] = useState(false)
    const categories = ['ClassicArt', 'PopCultureIcons', 'MotivationalQuotes', 'NatureLandscapes', 'AbstractModernArt', 'vintageRetro', 'MoviesTvShows', 'MusicLegends', 'TravelDestinations', 'HistoricalMoments', 'SportsHeroes', 'AnimeManga', 'GamingUniverse', 'MinimalistDesigns', 'StreetArtGraffiti', 'FantasySciFi', 'ComicBookCharacters', 'TypographyCalligraphy', 'SpaceAstronomy', 'FamousPaintings']
    const [height, setHeight] = useState(0)
    const [openDrawer , setOpenDrawer] = useState<boolean>(false)
    const navigate = useNavigate();
    const handleClick= (categoryName:string)=>{
        navigate(`/search/${categoryName}`,{replace:false});
        setShow(false);
    }
    const closeDrawer = () => (setOpenDrawer(false))
    useEffect(() => {
        if(window.innerWidth<640){
            setHeight(show ? 400 : 0);
        }else{
            setHeight(show ? 110 : 0)
        }
        
    }, [show])

    return (
        <>
            <Button onClick={() => setOpenDrawer(true)}>
                Categories
            </Button>
            {/* categories container */}
            <Dialog open={openDrawer}  onClose={closeDrawer}>
           <Card >
                {categories.map((item, index) => {
                        return <Button onClick={()=>navigate("/search/"+item)}>
                            {item}
                        </Button>
                })}
           </Card>
            </Dialog>
        </>
    )
}

export default categoriesButton