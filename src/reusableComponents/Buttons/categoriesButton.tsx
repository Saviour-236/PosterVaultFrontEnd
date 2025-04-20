
import {  useState } from "react";
import { Dialog, Button, Card } from '@mui/material';
import { FilterAction } from "../posts";
function categoriesButton({ dispatchFilters }:{dispatchFilters: React.Dispatch<FilterAction>}) {
    const categories = ['ClassicArt', 'PopCultureIcons', 'MotivationalQuotes', 'NatureLandscapes', 'AbstractModernArt', 'vintageRetro', 'MoviesTvShows', 'MusicLegends', 'TravelDestinations', 'HistoricalMoments', 'SportsHeroes', 'AnimeManga', 'GamingUniverse', 'MinimalistDesigns', 'StreetArtGraffiti', 'FantasySciFi', 'ComicBookCharacters', 'TypographyCalligraphy', 'SpaceAstronomy', 'FamousPaintings']
    const [openDrawer , setOpenDrawer] = useState<boolean>(false)
    const handleClick= (categoryName:string)=>{
        dispatchFilters({type:"CATEGORIES",value:categoryName})
    }
    const closeDrawer = () => (setOpenDrawer(false))
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
                        return <Button key={index} onClick={()=>handleClick(item)}>
                            {item}
                        </Button>
                })}
           </Card>
            </Dialog>
        </>
    )
}

export default categoriesButton