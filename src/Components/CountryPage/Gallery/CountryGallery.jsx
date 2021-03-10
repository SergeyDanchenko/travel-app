import React from 'react';
import ImageGallery from 'react-image-gallery';
// import gallery from './CountryGallery.module.scss'
import BrestHeroFortress from './../../../assets/images/Belarus/BrestHeroFortress.jpg'
import SapegasInRuzhany from './../../../assets/images/Belarus/SapegasInRuzhany.jpg'
import NesvizhskijZamok from './../../../assets/images/Belarus/NesvizhskijZamok.jpg'
import NarochNationalPark from './../../../assets/images/Belarus/NarochNationalPark.jpg'
import MirskijZamok from './../../../assets/images/Belarus/MirskijZamok.jpg'
import NationalParkPripyatsky from './../../../assets/images/Belarus/NationalParkPripyatsky.jpeg'

const images = [
    {
      original:  BrestHeroFortress ,
      thumbnail:  BrestHeroFortress ,
      originalTitle: 'Brest Hero-Fortress ',
      description: `It is a massive defensive construction and an open-air museum of Soviet heroic monumental art. The fortress was built in the 19th century and its histiry is pretty impressive. In 1596 Union of Brest was announced here, much later there was signed the Treaty of Brest-Litovsk that ended the participacion of the Soviet Russia in the WWI. But the fortress became really famous after the heroic events of the WWII.
      Don’t break the history timeline: start at the Berestse Museum, the archeological excavations where you can explore the remains of the 11-12th centuries buildings, streets and even a few house.       
      Then head for the Museum of the Defendors of the Brest Fortress. Its territiry is huge, but the most thrilling spot is the Fifth Fort, an abandoned construction with armoured doors, thin shot holes, underground passages, and complete silence. You must be the only tourist there.`
    },
    {
        original:  SapegasInRuzhany ,
        thumbnail:  SapegasInRuzhany ,
        originalTitle: 'The Palace Complex of the Sapegas in Ruzhany',
        description: 'Travel guides call the castle ruins ‘belarusian Versailles’, but it’s not spectacular views or glamourous interios that you should come here for (there is not so much of them left), but strong energy of the place. Just imagine: in the beginning of the 17th century there was founded a castle and the chancellor of the Grand Duchy of Lithuania Lew Sapega took part in it. So as to make life there not only comfortable, but also secure, three massive defensive towers were added to the complex. Important state issues were discussed in here, top managers of those times used to organize balls, also the Sapegas archive and the state treasury were kept in the castle. After the uprising of 1831 was defeated, the Sapegas left the residence and the castle turned into a textile factory. During the WWI the ensemble was set to fire, but after the WWII the idea of restoration was forgotten completely.'
      },
      {
        original:  NesvizhskijZamok ,
        thumbnail:  NesvizhskijZamok ,
        originalTitle: 'Nesvizh and Nesvizh Castle',
        description: `Nesvizh Castle is one of the most popular Belarus tourist attractions and is a UNESCO World Heritage Site.
        The majestic and diverse architecture of the palace, magnificent landscape parks, ponds, the river – all this makes the Nesvizh ensemble a unique place of pilgrimage for the majority of tourists coming to our country.`
      },
      {
        original:  NarochNationalPark ,
        thumbnail:  NarochNationalPark ,
        originalTitle: 'Naroch National Park',
        description: `Naroch National Park is the youngest national park in Belarus, and Naroch is the largest lake in the country. Numerous recreation centers, hotels, and sanatoriums were opened for tourists on the shores of the lake. This is a golden place for connoisseurs of nature and solitude. It also brings lots of tourists visiting Belarus.
        Naroch National Park is the most important health resort in the country and one of the main Belarus tourist attractions. Thanks to the richness of flora and fauna, as well as crystal clear water, and natural sources, this place constantly attracts a large number of tourists.`
      },
      {
        original:  MirskijZamok ,
        thumbnail:  MirskijZamok ,
        originalTitle: 'Mirskij Zamok',
        description: `Mir Castle in Grodno region is one of the most important tourist attractions in Belarus, an outstanding 16th-century fortification and a UNESCO World Heritage site.`
      },
      {
        original:  NationalParkPripyatsky ,
        thumbnail:  NationalParkPripyatsky ,
        originalTitle: 'National Park Pripyatsky',
        description: `The pristine nature in the valley of the Pripyat River, unique swamps and inundated oak woods, rich natural resources represent the fascinating land called Polesie, which is unparalleled in Europe and the rest of the world.

        Pripyatsky, one of the four national parks of Belarus, is located between the rivers Pripyat, Stviga and Ubort. Special protection has been granted to about 190,000 hectares with more than a third represented as a wildlife reserve.`
      },
  ];
  
  class CountryGallery extends React.Component {
    render() {
      return <ImageGallery items={images} />;
    }
  }

export default CountryGallery;