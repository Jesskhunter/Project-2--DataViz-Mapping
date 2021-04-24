# Project-2-VisualizeMe - Global Meteorite Strikes

 ## Group 1

 Alekya Gadiraju, Edyson Katuuo, Jenish Jariwala, Jess Hunter
    

 For this data visualisation project, we utilized a dataset that features meteorite landings in order to track activity of outer space material on Earth. Relevant columns 
 that are included in our chosen dataset include meteorite name, id, year, as well as geographic location denoted through longitude and latitude coordinates. This topic 
 was chosen in order to showcase worldwide landings using D3 visualization to allow the dataset to be graphically represented on our webpage. Due to the fact that our 
 dataset is extremely saturated and includes over 45,000 records, the data was cleaned using Jupyter Notebook to remove approximately 35,000 records. D3.js was used to 
 create a worldwide map and the remaining records were loaded to a new database via Postgres and displayed with markers. Since the cleaned dataset remained very large, we 
 also used a smaller dataset to create 3 views (street, darkmode and satellite) with Leaflet Map. In addition, we mapped a small amount of meteors (120) using GeoJson Map. 
 The dataset was specific to only the 120 largest meteorites by mass. The map tracked the meteors using markers which are color coded based on composition (classification) 
 of the meteorite.
   
   
   

   
 
   
