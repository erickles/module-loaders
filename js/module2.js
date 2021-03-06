var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Judith",
  "last_name": "Berry",
  "email": "jberry0@sourceforge.net",
  "gender": "Female",
  "ip_address": "76.58.63.173"
}, {
  "id": 2,
  "first_name": "Donna",
  "last_name": "Robinson",
  "email": "drobinson1@instagram.com",
  "gender": "Female",
  "ip_address": "80.37.107.184"
}, {
  "id": 3,
  "first_name": "Kenneth",
  "last_name": "Perry",
  "email": "kperry2@studiopress.com",
  "gender": "Male",
  "ip_address": "183.20.108.81"
}, {
  "id": 4,
  "first_name": "Ann",
  "last_name": "Walker",
  "email": "awalker3@discovery.com",
  "gender": "Female",
  "ip_address": "42.134.181.146"
}, {
  "id": 5,
  "first_name": "Bonnie",
  "last_name": "Burton",
  "email": "bburton4@mediafire.com",
  "gender": "Female",
  "ip_address": "163.145.9.125"
}, {
  "id": 6,
  "first_name": "Sandra",
  "last_name": "Montgomery",
  "email": "smontgomery5@themeforest.net",
  "gender": "Female",
  "ip_address": "69.163.177.150"
}, {
  "id": 7,
  "first_name": "Debra",
  "last_name": "Freeman",
  "email": "dfreeman6@independent.co.uk",
  "gender": "Female",
  "ip_address": "147.123.78.83"
}, {
  "id": 8,
  "first_name": "Johnny",
  "last_name": "Reyes",
  "email": "jreyes7@clickbank.net",
  "gender": "Male",
  "ip_address": "14.67.118.239"
}, {
  "id": 9,
  "first_name": "Nicholas",
  "last_name": "George",
  "email": "ngeorge8@reference.com",
  "gender": "Male",
  "ip_address": "239.70.229.90"
}, {
  "id": 10,
  "first_name": "Lawrence",
  "last_name": "Chavez",
  "email": "lchavez9@mtv.com",
  "gender": "Male",
  "ip_address": "37.52.0.14"
}, {
  "id": 11,
  "first_name": "Justin",
  "last_name": "Little",
  "email": "jlittlea@umich.edu",
  "gender": "Male",
  "ip_address": "174.139.172.52"
}, {
  "id": 12,
  "first_name": "Billy",
  "last_name": "Evans",
  "email": "bevansb@noaa.gov",
  "gender": "Male",
  "ip_address": "39.154.98.40"
}, {
  "id": 13,
  "first_name": "Tina",
  "last_name": "Watkins",
  "email": "twatkinsc@webs.com",
  "gender": "Female",
  "ip_address": "114.140.57.153"
}, {
  "id": 14,
  "first_name": "Richard",
  "last_name": "Turner",
  "email": "rturnerd@google.com.hk",
  "gender": "Male",
  "ip_address": "164.119.20.238"
}, {
  "id": 15,
  "first_name": "Anne",
  "last_name": "Lewis",
  "email": "alewise@harvard.edu",
  "gender": "Female",
  "ip_address": "24.183.198.48"
}, {
  "id": 16,
  "first_name": "Gloria",
  "last_name": "Reid",
  "email": "greidf@discovery.com",
  "gender": "Female",
  "ip_address": "172.117.28.74"
}, {
  "id": 17,
  "first_name": "Louis",
  "last_name": "Fields",
  "email": "lfieldsg@plala.or.jp",
  "gender": "Male",
  "ip_address": "250.79.255.26"
}, {
  "id": 18,
  "first_name": "Roger",
  "last_name": "Johnston",
  "email": "rjohnstonh@pagesperso-orange.fr",
  "gender": "Male",
  "ip_address": "17.81.235.186"
}, {
  "id": 19,
  "first_name": "Michelle",
  "last_name": "Knight",
  "email": "mknighti@barnesandnoble.com",
  "gender": "Female",
  "ip_address": "218.17.68.166"
}, {
  "id": 20,
  "first_name": "Jose",
  "last_name": "Olson",
  "email": "jolsonj@google.it",
  "gender": "Male",
  "ip_address": "238.0.105.137"
}, {
  "id": 21,
  "first_name": "Harold",
  "last_name": "Olson",
  "email": "holsonk@wisc.edu",
  "gender": "Male",
  "ip_address": "129.90.124.116"
}, {
  "id": 22,
  "first_name": "Nancy",
  "last_name": "Price",
  "email": "npricel@canalblog.com",
  "gender": "Female",
  "ip_address": "62.54.57.213"
}, {
  "id": 23,
  "first_name": "Shawn",
  "last_name": "Griffin",
  "email": "sgriffinm@hud.gov",
  "gender": "Male",
  "ip_address": "153.148.55.132"
}, {
  "id": 24,
  "first_name": "Paul",
  "last_name": "Pierce",
  "email": "ppiercen@4shared.com",
  "gender": "Male",
  "ip_address": "58.196.11.16"
}, {
  "id": 25,
  "first_name": "Helen",
  "last_name": "Mitchell",
  "email": "hmitchello@phoca.cz",
  "gender": "Female",
  "ip_address": "25.137.147.73"
}, {
  "id": 26,
  "first_name": "Andrea",
  "last_name": "Boyd",
  "email": "aboydp@imdb.com",
  "gender": "Female",
  "ip_address": "106.164.81.177"
}, {
  "id": 27,
  "first_name": "Joan",
  "last_name": "Reid",
  "email": "jreidq@epa.gov",
  "gender": "Female",
  "ip_address": "170.228.121.227"
}, {
  "id": 28,
  "first_name": "Eugene",
  "last_name": "Freeman",
  "email": "efreemanr@freewebs.com",
  "gender": "Male",
  "ip_address": "100.45.149.132"
}, {
  "id": 29,
  "first_name": "Virginia",
  "last_name": "Stephens",
  "email": "vstephenss@quantcast.com",
  "gender": "Female",
  "ip_address": "240.70.186.105"
}, {
  "id": 30,
  "first_name": "Sean",
  "last_name": "Gordon",
  "email": "sgordont@wufoo.com",
  "gender": "Male",
  "ip_address": "134.138.91.224"
}, {
  "id": 31,
  "first_name": "Ashley",
  "last_name": "Cox",
  "email": "acoxu@epa.gov",
  "gender": "Female",
  "ip_address": "68.131.106.39"
}, {
  "id": 32,
  "first_name": "Shawn",
  "last_name": "Peters",
  "email": "spetersv@smugmug.com",
  "gender": "Male",
  "ip_address": "4.53.93.209"
}, {
  "id": 33,
  "first_name": "Robert",
  "last_name": "Howell",
  "email": "rhowellw@vimeo.com",
  "gender": "Male",
  "ip_address": "45.15.108.175"
}, {
  "id": 34,
  "first_name": "Norma",
  "last_name": "Bradley",
  "email": "nbradleyx@twitpic.com",
  "gender": "Female",
  "ip_address": "185.195.19.40"
}, {
  "id": 35,
  "first_name": "Gloria",
  "last_name": "Mills",
  "email": "gmillsy@marketwatch.com",
  "gender": "Female",
  "ip_address": "64.115.187.16"
}, {
  "id": 36,
  "first_name": "Eugene",
  "last_name": "Young",
  "email": "eyoungz@ebay.com",
  "gender": "Male",
  "ip_address": "27.64.242.150"
}, {
  "id": 37,
  "first_name": "Bobby",
  "last_name": "Baker",
  "email": "bbaker10@goo.ne.jp",
  "gender": "Male",
  "ip_address": "105.207.221.196"
}, {
  "id": 38,
  "first_name": "Arthur",
  "last_name": "Willis",
  "email": "awillis11@yellowbook.com",
  "gender": "Male",
  "ip_address": "40.57.151.25"
}, {
  "id": 39,
  "first_name": "Jennifer",
  "last_name": "Roberts",
  "email": "jroberts12@sun.com",
  "gender": "Female",
  "ip_address": "10.92.58.238"
}, {
  "id": 40,
  "first_name": "Virginia",
  "last_name": "Lee",
  "email": "vlee13@pinterest.com",
  "gender": "Female",
  "ip_address": "106.67.89.84"
}, {
  "id": 41,
  "first_name": "Ralph",
  "last_name": "Gonzalez",
  "email": "rgonzalez14@springer.com",
  "gender": "Male",
  "ip_address": "128.227.115.26"
}, {
  "id": 42,
  "first_name": "Brian",
  "last_name": "Bowman",
  "email": "bbowman15@springer.com",
  "gender": "Male",
  "ip_address": "105.244.238.20"
}, {
  "id": 43,
  "first_name": "Patricia",
  "last_name": "Parker",
  "email": "pparker16@google.com.hk",
  "gender": "Female",
  "ip_address": "221.135.163.153"
}, {
  "id": 44,
  "first_name": "Patrick",
  "last_name": "Fowler",
  "email": "pfowler17@webmd.com",
  "gender": "Male",
  "ip_address": "200.67.107.154"
}, {
  "id": 45,
  "first_name": "Earl",
  "last_name": "Peters",
  "email": "epeters18@1und1.de",
  "gender": "Male",
  "ip_address": "168.84.245.21"
}, {
  "id": 46,
  "first_name": "Doris",
  "last_name": "Little",
  "email": "dlittle19@xing.com",
  "gender": "Female",
  "ip_address": "5.76.24.186"
}, {
  "id": 47,
  "first_name": "Lawrence",
  "last_name": "Price",
  "email": "lprice1a@ucoz.ru",
  "gender": "Male",
  "ip_address": "18.116.65.129"
}, {
  "id": 48,
  "first_name": "Keith",
  "last_name": "Fowler",
  "email": "kfowler1b@youku.com",
  "gender": "Male",
  "ip_address": "158.81.58.126"
}, {
  "id": 49,
  "first_name": "Clarence",
  "last_name": "Nelson",
  "email": "cnelson1c@a8.net",
  "gender": "Male",
  "ip_address": "180.48.183.125"
}, {
  "id": 50,
  "first_name": "Diana",
  "last_name": "Weaver",
  "email": "dweaver1d@biglobe.ne.jp",
  "gender": "Female",
  "ip_address": "219.238.12.48"
}, {
  "id": 51,
  "first_name": "Kathy",
  "last_name": "Carter",
  "email": "kcarter1e@youtu.be",
  "gender": "Female",
  "ip_address": "149.171.131.20"
}, {
  "id": 52,
  "first_name": "Anne",
  "last_name": "Morris",
  "email": "amorris1f@google.ru",
  "gender": "Female",
  "ip_address": "113.16.208.75"
}, {
  "id": 53,
  "first_name": "Doris",
  "last_name": "Anderson",
  "email": "danderson1g@shutterfly.com",
  "gender": "Female",
  "ip_address": "220.157.146.244"
}, {
  "id": 54,
  "first_name": "Julie",
  "last_name": "Howard",
  "email": "jhoward1h@shareasale.com",
  "gender": "Female",
  "ip_address": "46.86.84.226"
}, {
  "id": 55,
  "first_name": "Russell",
  "last_name": "Martin",
  "email": "rmartin1i@freewebs.com",
  "gender": "Male",
  "ip_address": "43.149.207.157"
}, {
  "id": 56,
  "first_name": "Roger",
  "last_name": "Armstrong",
  "email": "rarmstrong1j@etsy.com",
  "gender": "Male",
  "ip_address": "196.253.68.8"
}, {
  "id": 57,
  "first_name": "Lillian",
  "last_name": "Washington",
  "email": "lwashington1k@npr.org",
  "gender": "Female",
  "ip_address": "194.29.52.140"
}, {
  "id": 58,
  "first_name": "Catherine",
  "last_name": "Robertson",
  "email": "crobertson1l@hud.gov",
  "gender": "Female",
  "ip_address": "252.48.143.248"
}, {
  "id": 59,
  "first_name": "Susan",
  "last_name": "Romero",
  "email": "sromero1m@ftc.gov",
  "gender": "Female",
  "ip_address": "179.96.246.139"
}, {
  "id": 60,
  "first_name": "Patrick",
  "last_name": "Hart",
  "email": "phart1n@ft.com",
  "gender": "Male",
  "ip_address": "80.93.79.187"
}, {
  "id": 61,
  "first_name": "Anthony",
  "last_name": "Price",
  "email": "aprice1o@paypal.com",
  "gender": "Male",
  "ip_address": "150.87.201.54"
}, {
  "id": 62,
  "first_name": "Willie",
  "last_name": "Roberts",
  "email": "wroberts1p@oracle.com",
  "gender": "Male",
  "ip_address": "61.190.92.92"
}, {
  "id": 63,
  "first_name": "Jose",
  "last_name": "Fuller",
  "email": "jfuller1q@dailymotion.com",
  "gender": "Male",
  "ip_address": "90.95.15.178"
}, {
  "id": 64,
  "first_name": "Karen",
  "last_name": "Williamson",
  "email": "kwilliamson1r@over-blog.com",
  "gender": "Female",
  "ip_address": "120.8.234.6"
}, {
  "id": 65,
  "first_name": "Walter",
  "last_name": "Coleman",
  "email": "wcoleman1s@alibaba.com",
  "gender": "Male",
  "ip_address": "52.129.247.49"
}, {
  "id": 66,
  "first_name": "Jonathan",
  "last_name": "James",
  "email": "jjames1t@deliciousdays.com",
  "gender": "Male",
  "ip_address": "207.221.65.181"
}, {
  "id": 67,
  "first_name": "Shawn",
  "last_name": "Ward",
  "email": "sward1u@facebook.com",
  "gender": "Male",
  "ip_address": "115.43.89.141"
}, {
  "id": 68,
  "first_name": "Joan",
  "last_name": "Phillips",
  "email": "jphillips1v@ucoz.com",
  "gender": "Female",
  "ip_address": "179.168.106.118"
}, {
  "id": 69,
  "first_name": "Theresa",
  "last_name": "Ruiz",
  "email": "truiz1w@japanpost.jp",
  "gender": "Female",
  "ip_address": "89.76.37.148"
}, {
  "id": 70,
  "first_name": "Emily",
  "last_name": "Lane",
  "email": "elane1x@linkedin.com",
  "gender": "Female",
  "ip_address": "57.173.15.28"
}, {
  "id": 71,
  "first_name": "Ralph",
  "last_name": "Gutierrez",
  "email": "rgutierrez1y@ovh.net",
  "gender": "Male",
  "ip_address": "197.139.228.90"
}, {
  "id": 72,
  "first_name": "Joyce",
  "last_name": "Diaz",
  "email": "jdiaz1z@linkedin.com",
  "gender": "Female",
  "ip_address": "83.3.72.148"
}, {
  "id": 73,
  "first_name": "Joe",
  "last_name": "Day",
  "email": "jday20@ycombinator.com",
  "gender": "Male",
  "ip_address": "174.252.163.57"
}, {
  "id": 74,
  "first_name": "Cynthia",
  "last_name": "Harper",
  "email": "charper21@tamu.edu",
  "gender": "Female",
  "ip_address": "144.1.37.219"
}, {
  "id": 75,
  "first_name": "Cheryl",
  "last_name": "Hayes",
  "email": "chayes22@etsy.com",
  "gender": "Female",
  "ip_address": "254.151.187.83"
}, {
  "id": 76,
  "first_name": "Barbara",
  "last_name": "Harrison",
  "email": "bharrison23@techcrunch.com",
  "gender": "Female",
  "ip_address": "71.202.213.124"
}, {
  "id": 77,
  "first_name": "Scott",
  "last_name": "Bennett",
  "email": "sbennett24@icio.us",
  "gender": "Male",
  "ip_address": "159.50.117.194"
}, {
  "id": 78,
  "first_name": "Todd",
  "last_name": "Stone",
  "email": "tstone25@csmonitor.com",
  "gender": "Male",
  "ip_address": "126.93.173.61"
}, {
  "id": 79,
  "first_name": "Brenda",
  "last_name": "Edwards",
  "email": "bedwards26@mediafire.com",
  "gender": "Female",
  "ip_address": "39.11.26.217"
}, {
  "id": 80,
  "first_name": "Kathleen",
  "last_name": "Fox",
  "email": "kfox27@google.ru",
  "gender": "Female",
  "ip_address": "118.72.234.20"
}, {
  "id": 81,
  "first_name": "Antonio",
  "last_name": "Lewis",
  "email": "alewis28@microsoft.com",
  "gender": "Male",
  "ip_address": "28.255.117.200"
}, {
  "id": 82,
  "first_name": "Christopher",
  "last_name": "Sullivan",
  "email": "csullivan29@census.gov",
  "gender": "Male",
  "ip_address": "174.176.92.68"
}, {
  "id": 83,
  "first_name": "Lawrence",
  "last_name": "Moreno",
  "email": "lmoreno2a@dropbox.com",
  "gender": "Male",
  "ip_address": "139.204.171.5"
}, {
  "id": 84,
  "first_name": "Charles",
  "last_name": "Ramos",
  "email": "cramos2b@ow.ly",
  "gender": "Male",
  "ip_address": "247.233.53.215"
}, {
  "id": 85,
  "first_name": "Janet",
  "last_name": "Gray",
  "email": "jgray2c@scientificamerican.com",
  "gender": "Female",
  "ip_address": "133.247.138.71"
}, {
  "id": 86,
  "first_name": "Antonio",
  "last_name": "Sanchez",
  "email": "asanchez2d@upenn.edu",
  "gender": "Male",
  "ip_address": "186.70.109.201"
}, {
  "id": 87,
  "first_name": "Ruby",
  "last_name": "Hill",
  "email": "rhill2e@infoseek.co.jp",
  "gender": "Female",
  "ip_address": "4.57.244.125"
}, {
  "id": 88,
  "first_name": "Ralph",
  "last_name": "Bowman",
  "email": "rbowman2f@squidoo.com",
  "gender": "Male",
  "ip_address": "103.6.210.168"
}, {
  "id": 89,
  "first_name": "Harry",
  "last_name": "Scott",
  "email": "hscott2g@technorati.com",
  "gender": "Male",
  "ip_address": "190.131.171.64"
}, {
  "id": 90,
  "first_name": "Kathleen",
  "last_name": "Murphy",
  "email": "kmurphy2h@amazon.de",
  "gender": "Female",
  "ip_address": "196.63.87.158"
}, {
  "id": 91,
  "first_name": "Paula",
  "last_name": "Hudson",
  "email": "phudson2i@digg.com",
  "gender": "Female",
  "ip_address": "155.56.131.118"
}, {
  "id": 92,
  "first_name": "Nancy",
  "last_name": "Butler",
  "email": "nbutler2j@ameblo.jp",
  "gender": "Female",
  "ip_address": "109.25.2.22"
}, {
  "id": 93,
  "first_name": "Diane",
  "last_name": "James",
  "email": "djames2k@illinois.edu",
  "gender": "Female",
  "ip_address": "22.131.231.6"
}, {
  "id": 94,
  "first_name": "Robin",
  "last_name": "Armstrong",
  "email": "rarmstrong2l@dailymotion.com",
  "gender": "Female",
  "ip_address": "156.144.147.133"
}, {
  "id": 95,
  "first_name": "Paul",
  "last_name": "Torres",
  "email": "ptorres2m@jigsy.com",
  "gender": "Male",
  "ip_address": "65.197.18.70"
}, {
  "id": 96,
  "first_name": "Barbara",
  "last_name": "Anderson",
  "email": "banderson2n@nhs.uk",
  "gender": "Female",
  "ip_address": "100.62.230.246"
}, {
  "id": 97,
  "first_name": "Rebecca",
  "last_name": "Brown",
  "email": "rbrown2o@storify.com",
  "gender": "Female",
  "ip_address": "178.99.66.120"
}, {
  "id": 98,
  "first_name": "Lois",
  "last_name": "Cooper",
  "email": "lcooper2p@wunderground.com",
  "gender": "Female",
  "ip_address": "40.185.137.120"
}, {
  "id": 99,
  "first_name": "Ruby",
  "last_name": "Howard",
  "email": "rhoward2q@merriam-webster.com",
  "gender": "Female",
  "ip_address": "73.23.31.211"
}, {
  "id": 100,
  "first_name": "Paula",
  "last_name": "Ruiz",
  "email": "pruiz2r@topsy.com",
  "gender": "Female",
  "ip_address": "210.72.212.175"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females!");

console.log("module2 stuff");