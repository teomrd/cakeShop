import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const cakeData = [
{
'title': 'Lemon cheesecake',
'desc': 'A cheesecake made of lemon',
'image': 'https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg',
},
{
'title': 'victoria sponge',
'desc': 'sponge with jam',
'image': 'http://www.bbcgoodfood.com/sites/bbcgoodfood.com/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg',
},
{
'title': 'Carrot cake',
'desc': 'Bugs bunnys favourite',
'image': 'http://www.villageinn.com/i/pies/profile/carrotcake_main1.jpg',
},
{
'title': 'Banana cake',
'desc': 'Donkey kongs favourite',
'image': 'http://ukcdn.ar-cdn.com/recipes/xlarge/ff22df7f-dbcd-4a09-81f7-9c1d8395d936.jpg',
},
{
'title': 'Birthday cake',
'desc': 'a yearly treat',
'image': 'http://cornandco.com/wp-content/uploads/2014/05/birthday-cake-popcorn.jpg',
},
{
'title': 'Lemon cheesecake',
'desc': 'A cheesecake made of lemon',
'image': 'https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg',
},
{
'title': 'victoria sponge',
'desc': 'sponge with jam',
'image': 'http://www.bbcgoodfood.com/sites/bbcgoodfood.com/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg',
},
{
'title': 'Carrot cake',
'desc': 'Bugs bunnys favourite',
'image': 'http://www.villageinn.com/i/pies/profile/carrotcake_main1.jpg',
},
{
'title': 'Banana cake',
'desc': 'Donkey kongs favourite',
'image': 'http://ukcdn.ar-cdn.com/recipes/xlarge/ff22df7f-dbcd-4a09-81f7-9c1d8395d936.jpg',
},
{
'title': 'Birthday cake',
'desc': 'a yearly treat',
'image': 'http://cornandco.com/wp-content/uploads/2014/05/birthday-cake-popcorn.jpg',
},
{
'title': 'Lemon cheesecake',
'desc': 'A cheesecake made of lemon',
'image': 'https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg',
},
{
'title': 'victoria sponge',
'desc': 'sponge with jam',
'image': 'http://www.bbcgoodfood.com/sites/bbcgoodfood.com/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg',
},
{
'title': 'Carrot cake',
'desc': 'Bugs bunnys favourite',
'image': 'http://www.villageinn.com/i/pies/profile/carrotcake_main1.jpg',
},
{
'title': 'Banana cake',
'desc': 'Donkey kongs favourite',
'image': 'http://ukcdn.ar-cdn.com/recipes/xlarge/ff22df7f-dbcd-4a09-81f7-9c1d8395d936.jpg',
},
{
'title': 'Birthday cake',
'desc': 'a yearly treat',
'image': 'http://cornandco.com/wp-content/uploads/2014/05/birthday-cake-popcorn.jpg',
},
{
'title': 'Lemon cheesecake',
'desc': 'A cheesecake made of lemon',
'image': 'https://s3-eu-west-1.amazonaws.com/s3.mediafileserver.co.uk/carnation/WebFiles/RecipeImages/lemoncheesecake_lg.jpg',
},
{
'title': 'victoria sponge',
'desc': 'sponge with jam',
'image': 'http://www.bbcgoodfood.com/sites/bbcgoodfood.com/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg',
},
{
'title': 'Carrot cake',
'desc': 'Bugs bunnys favourite',
'image': 'http://www.villageinn.com/i/pies/profile/carrotcake_main1.jpg',
},
{
'title': 'Banana cake',
'desc': 'Donkey kongs favourite',
'image': 'http://ukcdn.ar-cdn.com/recipes/xlarge/ff22df7f-dbcd-4a09-81f7-9c1d8395d936.jpg',
},
{
'title': 'Birthday cake',
'desc': 'a yearly treat',
'image': 'http://cornandco.com/wp-content/uploads/2014/05/birthday-cake-popcorn.jpg',
},
]

const CakeList = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Cakes</Subheader>
      {cakeData.map((cake) => (
        <GridTile
          key={cake.img}
          title={cake.title}
          subtitle={<span><b>{cake.desc}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={cake.image} role="presentation"/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default CakeList;
