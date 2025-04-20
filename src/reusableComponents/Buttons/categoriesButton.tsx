
import { useEffect, useState } from "react";
import { Dialog, Button, Card } from '@mui/material';
function categoriesButton() {
    const [show, setShow] = useState(false)
    const categories = ['ClassicArt', 'PopCultureIcons', 'MotivationalQuotes', 'NatureLandscapes', 'AbstractModernArt', 'vintageRetro', 'MoviesTvShows', 'MusicLegends', 'TravelDestinations', 'HistoricalMoments', 'SportsHeroes', 'AnimeManga', 'GamingUniverse', 'MinimalistDesigns', 'StreetArtGraffiti', 'FantasySciFi', 'ComicBookCharacters', 'TypographyCalligraphy', 'SpaceAstronomy', 'FamousPaintings']
    const [height, setHeight] = useState(0)
    const [openDrawer , setOpenDrawer] = useState<boolean>(false)
    const handleClick= (categoryName:string)=>{
        console.log("category name ",categoryName)
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
            <Button variant="outlined" 
             onClick={() => setOpenDrawer(true)}
             sx={{borderRadius:"10px"}}
             >
                Categories
            </Button>
            {/* categories container */}
            <Dialog open={openDrawer}  onClose={closeDrawer}>
           <Card >
                {categories.map((item, index) => {
                        return <Button onClick={()=>handleClick(item)}>
                            {item}
                        </Button>
                })}
           </Card>
            </Dialog>
        </>
    )
}

export default categoriesButton