import uk from './images/london1.jpg';
import italy from './images/italy1.jpg';
import belarus from './images/belarus1.jpg';
import germany from './images/germany1.jpg';
import france from './images/france1.jpg';
import egypt from './images/egypt1.jpg';
import usa from './images/usa1.jpg';
import switzerland from './images/switzerland1.jpg';

import BrestHeroFortress from './images/Belarus/BrestHeroFortress.jpg';
import SapegasInRuzhany from './images/Belarus/SapegasInRuzhany.jpg';
import NesvizhskijZamok from './images/Belarus/NesvizhskijZamok.jpg';
import NarochNationalPark from './images/Belarus/NarochNationalPark.jpg';
import MirskijZamok from './images/Belarus/MirskijZamok.jpg';
import NationalParkPripyatsky from './images/Belarus/NationalParkPripyatsky.jpeg';

const counrtiesData = [
  {
      id: "0",
      capital: "Minsk",
      description: "Belarus, officially the Republic of Belarus, is a landlocked country in Eastern Europe. It is bordered by Russia to the east and northeast, Ukraine to the south, Poland to the west, and Lithuania and Latvia to the northwest. Covering an area of 207,600 square kilometres (80,200 sq mi) and with a population of 9.4 million, Belarus is the thirteenth-largest and the twentieth-most populous country in Europe. The country is administratively divided into seven regions, and is one of the world's most urbanized, with over 40% of its total land area forested. Minsk is the country's capital and largest city.",
      name: "Belarus",
      capitalLocation: {
          coordinates: [
              27.567444,
              53.893009
          ],
          type: "Point"
      },
      cardImg: belarus,
      imageUrl: "https://president.gov.by/content-pages/belarus/regions/image-thumb__18535__block-right-left/vechernii-minsk.jpg",
      imageGallery: [
          {
              original: BrestHeroFortress,
              thumbnail: BrestHeroFortress,
              originalTitle: "Brest Hero-Fortress",
              description: "It is a massive defensive construction and an open-air museum of Soviet heroic monumental art. The fortress was built in the 19th century and its history is pretty impressive. In 1596 Union of Brest was announced here, much later there was signed the Treaty of Brest-Litovsk that ended the participation of the Soviet Russia in the WWI. But the fortress became really famous after the heroic events of the WWII. Don’t break the history timeline: start at the Berestse Museum, the archeological excavations where you can explore the remains of the 11-12th centuries buildings, streets and even a few house. Then head for the Museum of the Defenders of the Brest Fortress. Its territory is huge, but the most thrilling spot is the Fifth Fort, an abandoned construction with armoured doors, thin shot holes, underground passages, and complete silence. You must be the only tourist there."
          },
          {
              original: SapegasInRuzhany,
              thumbnail: SapegasInRuzhany,
              originalTitle: "The Palace Complex of the Sapegas in Ruzhany",
              description: "Travel guides call the castle ruins ‘belarusian Versailles’, but it’s not spectacular views or glamourous interiors that you should come here for (there is not so much of them left), but strong energy of the place. Just imagine: in the beginning of the 17th century there was founded a castle and the chancellor of the Grand Duchy of Lithuania Lew Sapega took part in it. So as to make life there not only comfortable, but also secure, three massive defensive towers were added to the complex. Important state issues were discussed in here, top managers of those times used to organize balls, also the Sapegas archive and the state treasury were kept in the castle. After the uprising of 1831 was defeated, the Sapegas left the residence and the castle turned into a textile factory. During the WWI the ensemble was set to fire, but after the WWII the idea of restoration was forgotten completely."
          },
          {
              original: NesvizhskijZamok,
              thumbnail: NesvizhskijZamok,
              originalTitle: "Nesvizh and Nesvizh Castle",
              description: "Nesvizh Castle is one of the most popular Belarus tourist attractions and is a UNESCO World Heritage Site. The majestic and diverse architecture of the palace, magnificent landscape parks, ponds, the river – all this makes the Nesvizh ensemble a unique place of pilgrimage for the majority of tourists coming to our country."
          },
          {
              original: NarochNationalPark,
              thumbnail: NarochNationalPark,
              originalTitle: "Naroch National Park",
              description: "Naroch National Park is the youngest national park in Belarus, and Naroch is the largest lake in the country. Numerous recreation centers, hotels, and sanatoriums were opened for tourists on the shores of the lake. This is a golden place for connoisseurs of nature and solitude. It also brings lots of tourists visiting Belarus. Naroch National Park is the most important health resort in the country and one of the main Belarus tourist attractions. Thanks to the richness of flora and fauna, as well as crystal clear water, and natural sources, this place constantly attracts a large number of tourists."
          },
          {
              original: MirskijZamok,
              thumbnail: MirskijZamok,
              originalTitle: "Mirskij Zamok",
              description: "Mir Castle in Grodno region is one of the most important tourist attractions in Belarus, an outstanding 16th-century fortification and a UNESCO World Heritage site."
          },
          {
              original: NationalParkPripyatsky,
              thumbnail: NationalParkPripyatsky,
              originalTitle: "National Park Pripyatsky",
              description: "The pristine nature in the valley of the Pripyat River, unique swamps and inundated oak woods, rich natural resources represent the fascinating land called Polesie, which is unparalleled in Europe and the rest of the world. Pripyatsky, one of the four national parks of Belarus, is located between the rivers Pripyat, Stviga and Ubort. Special protection has been granted to about 190,000 hectares with more than a third represented as a wildlife reserve."
          }
      ],
      videoUrl: "https://www.youtube.com/watch?v=DczN5Iq9AW4&ab_channel=CoolTimes",
      currency: "BYN",
      ISOCode: "BY"
  },
  {
      id: "1",
      capital: "Cairo",
      description: "Egypt (/ˈiːdʒɪpt/ EE-jipt; Arabic: مِصر‎ Miṣr), officially the Arab Republic of Egypt, is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge formed by the Sinai Peninsula. Egypt is a Mediterranean country bordered by the Gaza Strip (Palestine) and Israel to the northeast, the Gulf of Aqaba and the Red Sea to the east, Sudan to the south, and Libya to the west. Across the Gulf of Aqaba lies Jordan, across the Red Sea lies Saudi Arabia, and across the Mediterranean lie Greece, Turkey and Cyprus, although none share a land border with Egypt.",
      name: "Egypt",
      capitalLocation: {
          coordinates: [
              31.233334,
              30.033333
          ],
          type: "Point"
      },
      cardImg: egypt,
      imageUrl: "https://airlinestravel.ro/wp-content/uploads/2020/08/conditii-calatorie-romania-egipt.jpg",
      imageGallery: [
          {
              original: "https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg",
              thumbnail: "https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza-and%20camels-2.jpg",
              originalTitle: "Pyramids of Giza",
              description: "The last surviving of the Seven Wonders of the Ancient World, the Pyramids of Giza are one of the world's most recognizable landmarks. Built as tombs for the mighty Pharaohs and guarded by the enigmatic Sphinx, Giza's pyramid complex has awed travelers down through the ages and had archaeologists (and a fair few conspiracy theorists) scratching their heads over how they were built for centuries.Today, these megalithic memorials to dead kings are still as wondrous a sight as they ever were. An undeniable highlight of any Egypt trip, Giza's pyramids should not be missed."
          },
          {
              original: "https://www.uitvconnect.com/sites/default/files/egypt-luxor-karnak-temple-at-night.jpg",
              thumbnail: "https://www.uitvconnect.com/sites/default/files/egypt-luxor-karnak-temple-at-night.jpg",
              originalTitle: "Luxor's Karnak Temple and the Valley of the Kings",
              description: "Famed for the Valley of the Kings, Karnak Temple, and the Memorial Temple of Hatshepsut, the Nile-side town of Luxor in Upper Egypt has a glut of tourist attractions. This is ancient Thebes, power base of the New Kingdom pharaohs, and home to more sights than most can see on one visit. While the East Bank brims with vibrant souk action, the quieter West Bank is home to a bundle of tombs and temples that has been called the biggest open-air museum in the world. Spend a few days here exploring the colorful wall art of the tombs and gazing in awe at the colossal columns in the temples, and you'll see why Luxor continues to fascinate historians and archaeologists."
          },
          {
              original: "https://www.egypttoursplus.com/wp-content/uploads/2014/03/View-over-Islamic-Cairo-and-the-Mosque-of-Sultan-Hassan.jpg",
              thumbnail: "https://www.egypttoursplus.com/wp-content/uploads/2014/03/View-over-Islamic-Cairo-and-the-Mosque-of-Sultan-Hassan.jpg",
              originalTitle: "Islamic Cairo",
              description: "The atmospheric, narrow lanes of the capital's Islamic Cairo district are crammed full of mosques, madrassas (Islamic schools of learning), and monuments dating from the Fatimid through to the Mameluke eras. This is where you'll find the labyrinth shopping souk of Khan el-Khalili, where coppersmiths and artisans still have their tiny workshops, and stalls are laden with ceramics, textiles, spice, and perfume. Surrounding the market is a muddle of roads, home to some of the most beautiful preserved architecture of the old Islamic empires. There is a wealth of history here to explore. Visit Al-Azhar Mosque and the dazzling Sultan Hassan Mosque, and make sure you climb to the roof of the ancient medieval gate of Bab Zuweila for the best minaret-speckled panoramas across the district."
          },
          {
              original: "https://www.cleopatraegypttours.com/wp-content/uploads/2019/10/best-places-to-visit-in-Aswan-1200x900.jpg",
              thumbnail: "https://www.cleopatraegypttours.com/wp-content/uploads/2019/10/best-places-to-visit-in-Aswan-1200x900.jpg",
              originalTitle: "Aswan",
              description: "Egypt's most tranquil town is Aswan, set upon the winding curves of the Nile. Backed by orange-hued dunes, this is the perfect place to stop and unwind for a few days and soak up the chilled-out atmosphere. Take the river ferry across to Elephantine Island and stroll the colorful streets of the Nubian villages. Ride a camel to the desert monastery of St. Simeon on the East Bank. Or just drink endless cups of tea on one of the riverboat restaurants, while watching the lateen-sailed feluccas drift past. There are plenty of historic sites here and numerous temples nearby, but one of Aswan's most popular things to do is simply kicking back and watching the river life go by."
          },
          {
              original: "https://i2.wp.com/holiday-golightly.com/wp-content/uploads/2017/10/20070602-dsc_0089-lightroom.jpg",
              thumbnail: "https://i2.wp.com/holiday-golightly.com/wp-content/uploads/2017/10/20070602-dsc_0089-lightroom.jpg",
              originalTitle: "Abu Simbel",
              description: "Even in a country festooned with temples, Abu Simbel is something special. This is Ramses II's great temple, adorned with colossal statuary standing guard outside, and with an interior sumptuously decorated with wall paintings. Justly famous for its megalithic proportions, Abu Simbel is also known for the incredible feat, which saw the entire temple moved from its original setting — set to disappear under the water because of the Aswan dam — during the 1960s in a massive UNESCO operation that took four years."
          },
          {
              original: "https://www.egypttoursplus.com/wp-content/uploads/2019/03/Siwa-Oasis-Tour.jpg",
              thumbnail: "https://www.egypttoursplus.com/wp-content/uploads/2019/03/Siwa-Oasis-Tour.jpg",
              originalTitle: "Siwa Oasis",
              description: "Way out west, Siwa is the tranquil tonic to the hustle of Egypt's cities. This gorgeous little oasis, surrounded by date palm plantations and numerous fresh water springs, is one of the Western Desert's most picturesque spots. The town is centered around the ruins of a vast mud-brick citadel that dominates the view. This is a top spot to wind down and go slow for a few days, as well as being an excellent base from which to plan adventures into the surrounding desert."
          }
      ],
      videoUrl: "https://www.youtube.com/watch?v=rsv4drcgHys",
      currency: "EGP",
      ISOCode: "EG"
  },
  {
      id: "2",
      capital: "London",
      description: "England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north. The Irish Sea lies northwest of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.",
      name: "England",
      capitalLocation: {
          coordinates: [
              -0.118092,
              51.509865
          ],
          type: "Point"
      },
      cardImg: uk,
      imageUrl: "https://www.fodors.com/wp-content/uploads/2017/10/Ultimate-Things-To-Do-London-Big-Ben.jpg",
      imageGallery: [
          {
              original: "https://www.discoveringbritain.org/assets/components/phpthumbof/cache/48%20Stonehenge%2C%20Wiltshire%20%28c%29%20Dave%20White%20CROPPED.0f03643af114dd91fae10a4d25092d4d.jpg",
              thumbnail: "https://www.discoveringbritain.org/assets/components/phpthumbof/cache/48%20Stonehenge%2C%20Wiltshire%20%28c%29%20Dave%20White%20CROPPED.0f03643af114dd91fae10a4d25092d4d.jpg",
              originalTitle: "Stonehenge",
              description: "Stonehenge, 10 miles north of the historic city of Salisbury on Salisbury Plain, is Europe's best-known prehistoric monument. It's so popular that visitors need to purchase a timed ticket in advance to guarantee entry. Exhibitions at the excellent Stonehenge visitor center set the stage for a visit, explaining through audio-visual experiences and more than 250 ancient objects how the megaliths were erected between 3000 and 1500 BC, and sharing information about life during this time."
          },
          {
              original: "https://evanevanstours.com/blog/wp-content/uploads/2019/12/tower-of-london.jpg",
              thumbnail: "https://evanevanstours.com/blog/wp-content/uploads/2019/12/tower-of-london.jpg",
              originalTitle: "Tower of London",
              description: "Prison, palace, treasure vault, observatory, and menagerie: the Tower of London has done it all and it's one of the top attractions in London. Widely considered the most important building in England, there's enough to see and do at this World Heritage Site to keep visitors busy for hours."
          },
          {
              original: "https://assets.simpleview-europe.com/bristol2014/imageresizer/?image=%2Fdmsimgs%2FTorchlit-Great-Bath_175776271.jpg&action=ProductDetailNew",
              thumbnail: "https://assets.simpleview-europe.com/bristol2014/imageresizer/?image=%2Fdmsimgs%2FTorchlit-Great-Bath_175776271.jpg&action=ProductDetailNew",
              originalTitle: "The Roman Baths and Georgian City of Bath",
              description: "If you only have time to visit one smaller city in England, you couldn't do much better than Bath. This remarkably beautiful city in Somerset boasts more fantastic tourist attractions than you could hope to visit in a day. While most famous for the magnificent 2,000-year-old Roman Baths built around the city's rejuvenating hot springs, it's equally well known for its honey-colored Georgian Townhouses, such as those located on Royal Crescent."
          },
          {
              original: "https://7wonders.org/wp-content/uploads/2019/09/eden-project-big.jpg",
              thumbnail: "https://7wonders.org/wp-content/uploads/2019/09/eden-project-big.jpg",
              originalTitle: "Eden Project",
              description: "The incredible Eden Project is a collection of unique artificial biomes containing an amazing collection of plants from around the world. Located in a reclaimed quarry in Cornwall, this spectacular botanical gardens complex consists of huge domes that look rather like massive igloo-shaped greenhouses. Each of these impressive (and futuristic-looking) buildings houses thousands of different plant species in tropical and Mediterranean environments."
          },
          {
              original: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1620,h_1080,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/n8qnaxln6nyva0j4xcqe/WarwickCastleAdmission.webp",
              thumbnail: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1620,h_1080,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/n8qnaxln6nyva0j4xcqe/WarwickCastleAdmission.webp",
              originalTitle: "Warwick Castle",
              description: "If you're looking for a truly memorable English excursion for the whole family - and one that offers a fascinating insight into life in medieval times - you couldn't do much better than visit Warwick Castle. Located in the beautiful city of Warwick on the River Avon, this impressive fortress has dominated the landscape and history of the region for more than 900 years. Today, it serves as a backdrop to medieval-themed events and reenactments, from jousting festivals to fairs and concerts."
          },
          {
              original: "https://employeebenefits.co.uk/content/uploads/2019/08/National-Gallery.jpg",
              thumbnail: "https://employeebenefits.co.uk/content/uploads/2019/08/National-Gallery.jpg",
              originalTitle: "The National Gallery",
              description: "Displaying one of the most comprehensive collections of paintings in the world, the National Gallery is London's second-most visited museum. The collections, which present an almost complete cross-section of European painting from 1260 until 1920, are especially strong in the Dutch Masters and the Italian Schools of the 15th and 16th centuries. In the Italian galleries, look for works by Fra Angelico, Giotto, Bellini, Botticelli, Correggio, Titian, Tintoretto, and Veronese, and especially for Leonardo da Vinci's Madonna and Child with St. Anne and John the Baptist, Raphael's The Crucifixion, and The Entombment by Michelangelo."
          }
      ],
      videoUrl: "https://www.youtube.com/watch?v=wSHXd-K-jIk&ab_channel=touropia",
      currency: "GBP",
      ISOCode: "GB-ENG"
  },
  {
      id: "3",
      capital: "Paris",
      description: "France (French: [fʁɑ̃s] Listen), officially the French Republic is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories. The metropolitan area of France extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian Oceans. France borders Belgium, Luxembourg and Germany to the northeast, Switzerland, Monaco and Italy to the east, Andorra and Spain to the south, as well as the Netherlands, Suriname and Brazil in the Americas. The country's eighteen integral regions (five of which are situated overseas) span a combined area of 643,801 km2 (248,573 sq mi) and a total population of 67.4 million (as of February 2021). France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille and Nice. France, including its overseas territories, has the most time zones of any country, with a total of twelve.",
      name: "France",
      capitalLocation: {
          coordinates: [
              2.294694,
              48.858093
          ],
          type: "Point"
      },
      cardImg: france,
      imageUrl: "https://www.counterpointresearch.com/wp-content/uploads/2019/05/France-Smartphone-Market.jpg",
      imageGallery: [
          {
              original: "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/5c/3e.jpg",
              thumbnail: "https://media.tacdn.com/media/attractions-content--1x-1/0b/27/5c/3e.jpg",
              originalTitle: "Eiffel Tower",
              description: "The symbol of Paris, the Eiffel Tower is a feat of ingenuity as much as it is a famous landmark. This structure of 8,000 metallic parts was designed by Gustave Eiffel as a temporary exhibit for the World Fair of 1889. Originally loathed by critics, the 320-meter-high tower is now a beloved and irreplaceable fixture of the Paris skyline."
          },
          {
              original: "https://www.louvre.fr/sites/default/files/medias/medias_images/images/louvre-vue-de-la-pyramide-du-louvre.jpg",
              thumbnail: "https://www.louvre.fr/sites/default/files/medias/medias_images/images/louvre-vue-de-la-pyramide-du-louvre.jpg",
              originalTitle: "Louvre Museum",
              description: "In a stately palace that was once a royal residence, the Louvre ranks among the top European collections of fine arts. Many of Western Civilization's most famous works are found here, including the Mona Lisa by Leonardo DaVinci, the Wedding Feast at Cana by Veronese, and the 1st-century-BC Venus de Milo sculpture."
          },
          {
              original: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chateau-de-versailles1-1569321755.jpg?crop=0.575xw:1.00xh;0.128xw,0&resize=480:*",
              thumbnail: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chateau-de-versailles1-1569321755.jpg?crop=0.575xw:1.00xh;0.128xw,0&resize=480:*",
              originalTitle: "Palace of Versailles",
              description: "More than just a royal residence, Versailles was designed to show off the glory of the French monarchy. Sun King Louis XIV transformed his father's small hunting lodge into an opulent palace with a sumptuous Baroque interior. The palace became Louis XIV's symbol of absolute power and set the standard for princely courts in Europe. Architect Jules Hardouin-Mansart created the elegant Baroque facade and lavish interior of the Château de Versailles, which is designated as a UNESCO World Heritage Site."
          },
          {
              original: "https://miro.medium.com/max/600/1*0fpFNRnN_86eR35kQ0RARA.jpeg",
              thumbnail: "https://miro.medium.com/max/600/1*0fpFNRnN_86eR35kQ0RARA.jpeg",
              originalTitle: "Côte d'Azur",
              description: "The most fashionable stretch of coastline in France, the Côte d'Azur extends from Saint-Tropez to Menton near the border with Italy. Côte d'Azur translates to Coast of Blue, a fitting name to describe the Mediterranean's mesmerizing cerulean waters. To English speakers, this glamorous seaside destination is known as the French Riviera, words that have a ring of sun-drenched decadence."
          },
          {
              original: "https://static.toiimg.com/thumb/70828131/Mont-Saint-Michel.jpg?width=1200&height=900",
              thumbnail: "https://static.toiimg.com/thumb/70828131/Mont-Saint-Michel.jpg?width=1200&height=900",
              originalTitle: "Mont Saint-Michel",
              description: "Rising dramatically from a rocky islet off the Normandy coast, the UNESCO-listed Mont Saint-Michel is one of France's most striking landmarks. This Pyramid of the Seas is a mystical sight, perched 80 meters above the bay and surrounded by imposing defensive walls and bastions."
          },
          {
              original: "https://www.cellartours.com/wp-content/uploads/2019/09/most-beautiful-villages-of-provence-e1606646480472.jpg",
              thumbnail: "https://www.cellartours.com/wp-content/uploads/2019/09/most-beautiful-villages-of-provence-e1606646480472.jpg",
              originalTitle: "Provence",
              description: "Provence is a gorgeous landscape of olive groves, sun-drenched rolling hills, and deep purple lavender fields, with little villages nestled in the valleys and perched on rocky outcrops. The vibrant scenery has enchanted many famous artists, including Cézanne, Matisse, Chagall, and Picasso."
          }
      ],
      videoUrl: "https://www.youtube.com/watch?v=zTjnQ0XlAc4&ab_channel=touropia",
      currency: "EUR",
      ISOCode: "FR"
  },
  {
      id: "4",
      capital: "Berlin",
      description: "Germany (German: Deutschland, German pronunciation: [ˈdɔʏtʃlant]), officially the Federal Republic of Germany, is a country at the intersection of Central and Western Europe. It is situated between the Baltic and North seas to the north, and the Alps to the south; covering an area of 357,022 square kilometres (137,847 sq mi), with a population of over 83 million within its 16 constituent states. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. Germany is the second-most populous country in Europe after Russia, as well as the most populous member state of the European Union. Its capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr.",
      name: "Germany",
      capitalLocation: {
          coordinates: [
              52.531677,
              13.381777
          ],
          type: "Point"
      },
      cardImg: germany,
      imageUrl: "https://i.guim.co.uk/img/media/0ed9d8265e163396637e6e53ff1f87008b04ec30/0_95_5208_3126/master/5208.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=3c4381bc2dd4ed861f98977e307e59b3",
      imageGallery: [
          {
              original: "https://3tsll33cscvk11pae33oze51-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/brandenburg-gate-berlin-germany.png",
              thumbnail: "https://3tsll33cscvk11pae33oze51-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/brandenburg-gate-berlin-germany.png",
              originalTitle: "Berlin's Brandenburg Gate",
              description: "Modeled on the Acropolis in Athens and built for King Frederick William II in 1791, the monumental sandstone Brandenburg Gate in Berlin's Mitte district was the city's first Neoclassical structure. Measuring an impressive 26 meters in height - including the Quadriga, the spectacular four-horse chariot carrying the goddess of victory perched atop - its six huge columns on each side of the structure form five impressive passages: four were used by regular traffic, while the center was reserved for the royal carriages. Huge Doric columns also decorate the two buildings at each side of the Gate, once used by toll-collectors and guards."
          },
          {
              original: "https://cdn.theculturetrip.com/wp-content/uploads/2017/09/shutterstock_374295496.jpg",
              thumbnail: "https://cdn.theculturetrip.com/wp-content/uploads/2017/09/shutterstock_374295496.jpg",
              originalTitle: "Cologne Cathedral (Kölner Dom)",
              description: "The towering Cologne Cathedral (Kölner Dom) - the Cathedral of St. Peter and St. Mary - is located on the banks of the Rhine and is undoubtedly Cologne's most impressive landmark. This masterpiece of High Gothic architecture, one of the largest cathedrals in Europe, was begun in 1248 and was the most ambitious building project of the Middle Ages."
          },
          {
              original: "https://assets.hiphotels.com/attachments/5e4eb23d9c0e156c3a00014a/hd.jpg?1582215740",
              thumbnail: "https://assets.hiphotels.com/attachments/5e4eb23d9c0e156c3a00014a/hd.jpg?1582215740",
              originalTitle: "The Black Forest",
              description: "The beautiful Black Forest with its dark, densely-wooded hills is one of the most visited upland regions in all of Europe. Situated in the southwestern corner of Germany and extending 160 kilometers from Pforzheim in the north to Waldshut on the High Rhine in the south, it's a hiker's heaven. On the west side, it descends steeply to the Rhine, crossed by lush valleys, while on the east, it slopes more gently down to the upper Neckar and Danube valleys."
          },
          {
              original: "http://itap-world.com/uploads/countries/0/735/562.jpg",
              thumbnail: "http://itap-world.com/uploads/countries/0/735/562.jpg",
              originalTitle: "The Ultimate Fairytale Castle: Neuschwanstein",
              description: "The quaint old town of Füssen, situated between the Ammergau and Allgäu Alps and a popular alpine resort and winter sports center, is a good base from which to explore nearby Neuschwanstein Castle, one of Europe's most famous (and picturesque) royal castles. King Ludwig II of Bavaria built this many-towered and battlement-covered fantasy fortress - the inspiration for Walt Disney's famous theme park castles - from 1869-86."
          },
          {
              original: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jhzuyx4qnhiqfbqyz90m/King's%20Lake%20(K%C3%B6nigssee)%20and%20Salt%20Mine%20Day%20Tour%20from%20Munich.jpg",
              thumbnail: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jhzuyx4qnhiqfbqyz90m/King's%20Lake%20(K%C3%B6nigssee)%20and%20Salt%20Mine%20Day%20Tour%20from%20Munich.jpg",
              originalTitle: "Königssee (King's Lake)",
              description: "The lovely Bavarian lake of Königssee is one of the great beauty spots of the region of Germany referred to as Berchtesgadener Land. Also known as the King's Lake, this area near Salzburg is a hiking (and biking) paradise thanks to its vast network of trails. One of the most popular things to do is follow the attractive footpath located along the east side of the Königssee to the Malerwinkel, or Painters' Corner, notable for its superb views over the lake and the surrounding mountains."
          },
          {
              original: "https://digitourist.files.wordpress.com/2015/09/schloss_sanssouci-tmb-fotoarchiv_wieck_20.jpg?w=640",
              thumbnail: "https://digitourist.files.wordpress.com/2015/09/schloss_sanssouci-tmb-fotoarchiv_wieck_20.jpg?w=640",
              originalTitle: "Sanssouci Park and Palace, Potsdam",
              description: "Spectacular Sanssouci Park, laid out between 1744 and 1756, is considered the most celebrated example of Potsdam Rococo. Reflecting the personal influence of Frederick the Great, the park includes a lovely Baroque flower garden, more than 3,000 fruit trees, and numerous greenhouses. It's a pleasure strolling around this huge park, especially the straight-as-an-arrow, two-and-a-half-kilometer-long avenue, shielded on each side by trimmed hedges, perfect lawns, and gorgeous gardens."
          }
      ],
      videoUrl: "https://www.youtube.com/watch?v=IPbzWJNmndY&ab_channel=touropia",
      currency: "EUR",
      ISOCode: "DE"
  },
  {
      id: "5",
      capital: "Rome",
      description: "Italy (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubːlika itaˈljaːna]), is a country consisting of a peninsula delimited by the Alps and several islands surrounding it. Italy is located in Southern Europe, and is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial enclave in Switzerland (Campione) and a maritime exclave in Tunisian waters (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union.",
      name: "Italy",
      capitalLocation: {
          coordinates: [
              12.496365,
              41.902782
          ],
          type: "Point"
      },
      cardImg: italy,
      imageUrl: "https://www.atlanticcouncil.org/wp-content/uploads/2020/09/Rome-coroavirus-large-1024x683.jpg",
      imageGallery: [
          {
              original: "https://media.cntraveler.com/photos/59d3a805ddaded4e04772233/master/pass/Rome_GettyImages-841851056.jpg",
              thumbnail: "https://media.cntraveler.com/photos/59d3a805ddaded4e04772233/master/pass/Rome_GettyImages-841851056.jpg",
              originalTitle: "Colosseum",
              description: "This huge amphitheater, the largest of its kind ever built by the Roman Empire and the largest of their constructions to survive, remained a model for sports facilities right up to modern times. Built by Vespasian in AD 72 and enlarged by the addition of a fourth story by his son, Titus, it was a venue for public spectacles and shows - even mock sea battles."
          },
          {
              original: "https://www.planetware.com/photos-large/I/cathedral-of-santa-maria-del-fiore.jpg",
              thumbnail: "https://www.planetware.com/photos-large/I/cathedral-of-santa-maria-del-fiore.jpg",
              originalTitle: "Florence Duomo Santa Maria del Fiore",
              description: "Regarded as one of the finest cathedrals in the world, the Duomo Santa Maria del Fiore, or the Cathedral of Santa Maria del Fiore, dominates the Florence skyline. The cathedral was built between the 13th and 15th centuries, with the most famous piece being the extraordinary dome, completed by Filippo Brunelleschi in 1434. The cathedral's bell tower stands close beside the cathedral in Piazza del Duomo, covered in the same patterned marble typical of Tuscan Romanesque architecture."
          },
          {
              original: "https://cdn.britannica.com/63/153463-050-06B6270D/Grand-Canal-Venice.jpg",
              thumbnail: "https://cdn.britannica.com/63/153463-050-06B6270D/Grand-Canal-Venice.jpg",
              originalTitle: "The Grand Canal in Venice",
              description: "The Grand Canal is the largest and most famous of these waterways, cutting a wide S-shaped route through the city. Along its sides are the grandest of the palaces once owned by the wealthiest and most powerful families of the Venetian Republic. The best way to see many of the grand palaces, whose fronts face the water, is from a Vaporetto ride along the Grand Canal."
          },
          {
              original: "https://www.touropia.com/gfx/b/2016/11/Vesuvius.jpg",
              thumbnail: "https://www.touropia.com/gfx/b/2016/11/Vesuvius.jpg",
              originalTitle: "Pompeii and Mount Vesuvius",
              description: "The still smoking volcano of Mt. Vesuvius looks down on the remains of the city it destroyed in AD 79. But that same eruption also preserved many of the city's art treasures: frescoes, mosaics, and sculptures that were encased in the lava as it cooled. Several centuries of excavations have revealed the remains of houses, markets, baths, temples, theaters, streets, and human remains. Visitors can tour the site, walk along the old streets scarred by the tracks of chariots, and see the engineering used by Romans more than 2,000 years ago."
          },
          {
              original: "https://www.solitarywanderer.com/wp-content/uploads/2012/05/leaning-tower-pisa.jpg",
              thumbnail: "https://www.solitarywanderer.com/wp-content/uploads/2012/05/leaning-tower-pisa.jpg",
              originalTitle: "Leaning Tower of Pisa",
              description: "The Leaning Tower of Pisa (La Torre Pendente) is just one of many attractions in the city of Pisa, one whose world fame comes not from the considerable elegance of its design, but from a flaw. Work began on the tower in the 1100s, and the sinking, which led to the lean, began by the time the tower reached the third story. Leaning more and more over the centuries, before restoration work in the 1990s, it was predicted to topple over by the year 2000. Today, visitors can climb up the stairs of the tower for a fabulous view over the city."
          },
          {
              original: "https://www.romeanditaly.com/wp-content/uploads/2019/11/Amalfi-Coast-Tour-01-min.jpg",
              thumbnail: "https://www.romeanditaly.com/wp-content/uploads/2019/11/Amalfi-Coast-Tour-01-min.jpg",
              originalTitle: "Amalfi Coast",
              description: "The Amalfi Coast, a UNESCO World Heritage Site, is a stunning stretch of coastline along the Sorrentine Peninsula, south of Naples and Sorrento. Hillside towns are built precariously along the steep mountainsides that cascade down to the sea. The main towns along here are Positano and Amalfi, with its colorfully domed cathedral. You can tour the coast by road, or hop between towns by boat for different perspectives of the dramatic and almost vertical shore."
          }
      ],
      videoUrl: "https://youtu.be/FlRwssZYRM0",
      currency: "EUR",
      ISOCode: "IT"
  },
  {
      id: "6",
      capital: "Bern",
      description: "Switzerland, officially the Swiss Confederation, is a country situated at the confluence of Western, Central, and Southern Europe. It is a federal republic composed of 26 cantons, with federal authorities based in Bern. Switzerland is a landlocked country bordered by Italy to the south, France to the west, Germany to the north, and Austria and Liechtenstein to the east. It is geographically divided among the Swiss Plateau, the Alps, and the Jura, spanning a total area of 41,285 km2 (15,940 sq mi), and land area of 39,997 km2 (15,443 sq mi). While the Alps occupy the greater part of the territory, the Swiss population of approximately 8.5 million is concentrated mostly on the plateau, where the largest cities and economic centres are located, among them Zürich, Geneva and Basel. These cities are home to several offices of international organisations such as the headquarters of FIFA, the UN's second-largest Office, and the main building of the Bank for International Settlements. The main international airports of Switzerland are also located in these cities.",
      name: "Switzerland",
      capitalLocation: {
          coordinates: [
              7.4474,
              46.9481
          ],
          type: "Point"
      },
      cardImg: switzerland,
      imageUrl: "https://lp-cms-production.imgix.net/features/2017/08/shutterstock_611229743-bde2e023e33c.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
      imageGallery: [
          {
              original: "https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2019/07/travel-matterhorn-mountain.jpg?quality=80&strip=all&ssl=1",
              thumbnail: "https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2019/07/travel-matterhorn-mountain.jpg?quality=80&strip=all&ssl=1",
              originalTitle: "The Matterhorn",
              description: "The Matterhorn, Switzerland's iconic pointed peak is one of the highest mountains in the Alps. On the border with Italy, this legendary peak rises to 4,478 meters, and its four steep faces lie in the direction of the compass points. The first summiting in 1865 ended tragically when four climbers fell to their death during the descent. Today, thousands of experienced climbers come here each summer."
          },
          {
              original: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1c/11/39.jpg",
              thumbnail: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1c/11/39.jpg",
              originalTitle: "Jungfraujoch: The Top of Europe",
              description: "One of the most popular things to do in the beautiful Bernese Oberland is the train journey to Jungfraujoch, the Top of Europe, with an observation terrace and scientific observatory perched at 3,454 meters. The longest glacier in Europe, the Great Aletsch Glacier begins at Jungfraujoch, and is a UNESCO World Heritage Site. The famous Eiger Trail from the Eiger glacier station to Alpiglen clings to the rocks at the foot of the north face."
          },
          {
              original: "https://www.breathintravel.com/wp-content/uploads/2020/02/things-to-do-interlaken-e1582389156772.jpg",
              thumbnail: "https://www.breathintravel.com/wp-content/uploads/2020/02/things-to-do-interlaken-e1582389156772.jpg",
              originalTitle: "Interlaken",
              description: "Nestled between Lake Thun to the west and Lake Brienz to the east, Interlaken is one of Switzerland's most popular summer holiday resorts. In the center of town, Höhematte is a marvel of urban planning with 35 acres of open space. Flower gardens, hotels, and cafés surround the Höheweg, the main boulevard through here with breathtaking vistas of the mountains. The mighty peaks of the Eiger, Mönch, and Jungfrau tower above the town providing excellent opportunities for alpine adventures. Hiking, climbing, abseiling, and kayaking are prime pursuits."
          },
          {
              original: "https://www.dmuglobal.com/wp-content/uploads/2019/11/Lucerne-1920x1200.jpeg",
              thumbnail: "https://www.dmuglobal.com/wp-content/uploads/2019/11/Lucerne-1920x1200.jpeg",
              originalTitle: "Lucerne",
              description: "Imagine a sparkling blue lake surrounded by mountains, a car-free medieval old town, covered bridges, waterfront promenades, frescoed historic buildings, and sun-splashed plazas with bubbling fountains. No wonder Lucerne (in German, Luzern) is a top spot for tourists. Famed for its music concerts, this quintessential Swiss town lures renowned soloists, conductors, and orchestras to its annual International Music Festival. The Culture and Convention Center is home to one of the world's leading concert halls."
          },
          {
              original: "https://lp-cms-production.imgix.net/2019-06/GettyImages-553201627_super.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312",
              thumbnail: "https://lp-cms-production.imgix.net/2019-06/GettyImages-553201627_super.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312",
              originalTitle: "Lake Geneva",
              description: "Lake Geneva, Europe's largest Alpine lake, straddles the Swiss/French border, and laps at the shores of some of Switzerland's most popular cities. The city of Geneva (in French Genève; in German Genf) sits between pretty snow-capped peaks at the point where the Rhône spills into Lake Geneva."
          },
          {
              original: "https://media-cdn.tripadvisor.com/media/photo-s/1c/3d/89/cc/carlton-hotel-st-moritz.jpg",
              thumbnail: "https://media-cdn.tripadvisor.com/media/photo-s/1c/3d/89/cc/carlton-hotel-st-moritz.jpg",
              originalTitle: "St. Moritz",
              description: "Mirror-like lakes, glaciers, jagged peaks, alpine forests, and oodles of sunshine make St. Moritz one of the world's top mountain destinations and a must-have on your list of things to do in Switzerland. Palatial hotels and pricey restaurants are par for the course at this chic resort town, which has hosted two winter Olympics. Sitting in an alpine valley 1,800 meters above sea level, the town is divided into two parts: St. Moritz Dorf sits on a sunny terrace overlooking the Lake of St. Moritz. The other part of town, lakeside St. Moritz Bad on the valley floor, is a health resort with less expensive lodging. Winter sports run the gamut, from skiing, snowboarding, skating, and bobsledding to tobogganing on the famous 1.2-kilometer-long Cresta Run."
          }
      ],
      videoUrl: "https://www.youtube.com/watch?v=oZRBUBbfIJ8&ab_channel=touropia",
      currency: "CHF",
      ISOCode: "CH"
  },
  {
      id: "7",
      capital: "Washington",
      description: "The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major self-governing territories, 326 Indian reservations, and some minor possessions. At 3.8 million square miles (9.8 million square kilometers), it is the world's third- or fourth-largest country by total area. With a population of more than 328 million people, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city is New York City.",
      name: "USA",
      capitalLocation: {
          coordinates: [
              -120.740135,
              47.751076
          ],
          type: "Point"
      },
      cardImg: usa,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/1280px-Statue_of_Liberty%2C_NY.jpg",
      imageGallery: [
          {
              original: "https://cdn2.wanderlust.co.uk/media/1231/dreamstime_xxl_14224279.jpg?anchor=center&mode=crop&width=1920&height=858&format=auto&rnd=131455360240000000",
              thumbnail: "https://cdn2.wanderlust.co.uk/media/1231/dreamstime_xxl_14224279.jpg?anchor=center&mode=crop&width=1920&height=858&format=auto&rnd=131455360240000000",
              originalTitle: "Grand Canyon",
              description: "This incredible natural attractions is one of the most visited places in the United States. Carved out by the Colorado River, the Grand Canyon cuts deep into the landscape, creating dramatic cliff walls and ledges. Visitors standing on the rim of the canyon can see down to the canyon floor a mile below, and look out over the ridges and cliffs that run as far as the eye can see. The South Rim is the most visited section of Grand Canyon National Park, with a large visitors center, regular bus service along the Rim in the high season, and a walkway that runs along the canyon with numerous viewing points and platforms. The North Rim, which also has lookout areas, provides a different perspective. This section of the park has limited access from November to May due to snow and winter conditions."
          },
          {
              original: "https://www.niagarafallstourism.com/site/assets/files/1/shutterstock_373218787_hornblower_rainbow.jpg",
              thumbnail: "https://www.niagarafallstourism.com/site/assets/files/1/shutterstock_373218787_hornblower_rainbow.jpg",
              originalTitle: "Niagara Falls",
              description: "Situated along the Canada-US border, Niagara Falls is one of the most famous waterfalls in the world. The water from Lake Erie flows into Lake Ontario over these massive waterfalls, known for the great quantity of water that is constantly tumbling over the vertical drop. The amount of water going over the falls is actually reduced in winter, when more water is used to produce hydroelectric power. Most visitors will not notice a difference."
          },
          {
              original: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg",
              thumbnail: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc1MTk3ODI0MDAxNjA5/topic-statue-of-liberty-gettyimages-960610006-promo.jpg",
              originalTitle: "Statue of Liberty",
              description: "A universal symbol of freedom, the Statue of Liberty is America's most familiar icon and the largest statue in the world. Standing 152 ft in New York Harbor, visitors can admire the statue from various points around the city, particularly Battery Park, or take a ferry right to the statue. For people who plan to go out to the statue, options include grounds tickets, pedestal tickets, or crown tickets, which allow different levels of access to the site. Anyone who plans on going inside the Statue of Liberty is encouraged to make advanced ticket reservations."
          },
          {
              original: "https://www.trolleytours.com/wp-content/uploads/2016/06/white-house.jpg",
              thumbnail: "https://www.trolleytours.com/wp-content/uploads/2016/06/white-house.jpg",
              originalTitle: "White House",
              description: "The White House is the official residence of the President of the United States, and on almost all tourists' list of things to see in Washington. This historic structure has been the home of every president except George Washington. It was originally built by James Hoban in 1792 and, after being burned down by British forces in 1814, was rebuilt in 1818. Tours of the White House are free, but reservations must be made a minimum of three weeks in advance. Strict security rules are always in effect."
          },
          {
              original: "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/01/08ET/top-10-wonders-west-yellowstone-national-park.jpg.rend.hgtvcom.616.462.suffix/1491581132559.jpeg",
              thumbnail: "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/01/08ET/top-10-wonders-west-yellowstone-national-park.jpg.rend.hgtvcom.616.462.suffix/1491581132559.jpeg",
              originalTitle: "Yellowstone National Park",
              description: "Yellowstone National Park is home to a huge ancient volcano which has resulted in a dramatic landscape and awesome natural phenomena. Geysers and hot springs, along with incredible waterfalls along the Yellowstone River are just some of the attractions drawing in huge numbers of tourists each year. The park, the oldest national park in the USA, is also home to all kinds of wildlife, with free roaming bison, bighorn sheep, antelope, black bears, and grizzly bears."
          },
          {
              original: "https://mma.prnewswire.com/media/1328839/Magic_Kingdom_Park.jpg?p=publish",
              thumbnail: "https://mma.prnewswire.com/media/1328839/Magic_Kingdom_Park.jpg?p=publish",
              originalTitle: "Walt Disney World Resort",
              description: "This mega amusement park in Orlando is the top family attraction in the country, and has been catering to both young and old for decades. Opened in 1971, Walt Disney World has managed to maintain its relevance and its allure for children and even many adults throughout the years. Walt Disney World Resort encompasses not only the various theme parks, it also includes water parks, Downtown Disney with shopping and theaters, and much more, from fine dining to golf. Although many visitors plan to spend a few days here, it's possible to spend a week or longer if people want to take in all there is to see and do."
          }
      ],
      videoUrl: "https://youtu.be/b7FNvq11CEw",
      currency: "USD",
      ISOCode: "US"
  }
]

export default counrtiesData;
