let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let periods = [
  "Summer Maximum",
  "Moderate Heat",
  "Most Sweltering",

  "Autumn Begins",
  "Heat Withdraws",
  "White Dew",
  "Autumn Equinox",
  "Cold Dews",
  "Frost",

  "Winter Begins",
  "Light Snow",
  "Heavy Snow",
  "Winter Solstice",
  "Moderate Cold",
  "Severe Cold",

  "Spring Begins",
  "Spring Showers",
  "Animals Awakens",
  "Vernal Equinox",
  "Clear and Bright",
  "Wheat Rain",

  "Summer Begins",
  "Creature Plenish",
  "Seeding Millet ",
];

let date = [
  "June 21",
  "July 7",
  "July 22",

  "August 7",
  "August 23",
  "September 7",
  "September 23",
  "October 8",
  "October 23",

  "November 7",
  "November 22",
  "December 7",
  "December 21",
  "January 5",
  "January 20",

  "February 3",
  "February 18",
  "Match 5",
  "Match 20",
  "April 4",
  "April 20",

  "May 5",
  "May 21",
  "June 5",
];

let poem = {
  start:
    "$A /$B /$C /$D /$E /$F /$G /$H /$I /$J /$K /$L /$M /$N /$O /$P /$Q /$R /$S /$T /$U /$V /$W /$X",

  A: "$a10 $a11 $a12 $a13.|The day is $a1 &when the night $a2.|$a7 &$a8 $a9.|$a3! &$a4 $a5 $a6.",
  a1: "maximum long|a fire|overwhelming|unbearable|a tough guy",
  a2: "burns off half the candle|is always dawing upon|is stolen away",
  a3: "Redcurrants|Raspberries|Strawberries|Plums",
  a4: "take|taste|here you are|now or never",
  a5: "a bite of|a mouth of",
  a6: "midsummer heat and huste|midsummer memory|supreme summer express",
  a7: "At noon,|In the endless daydream,",
  a8: "here grows|here blooms",
  a9: "half a summer|another lotus seed|a new antler",
  a10: "Thunder|Lightning|The blazing sun|Thunderstorm",
  a11: "divides up|splits up|dominates|rules",
  a12: "the summer day|a day",
  a13: "in the name of solstice|as the host of June",

  B: "$b3, &waking up the $b2.|$b1 blooming against $b2.",
  b1:
    "Dianthus are|Magnolias are|Water lilies are|Eiphyllums are|Orchids are|Lotus flowers are|Jasmines are",
  b2:
    "the southern wind|the southern invaders|the southern waves|the No.8 thunderstorm|the blazing sun",
  b3:
    "Bamboo leaves voice in noises|Crickets are chirping with birds|Eagles soar beyond their minds|The southern waves|Thunderstorms",

  C: "When will $c1 fade away? &Whatever in chill is by no means from $c2.|$c3, &$c4 is $c5.",
  c1: "this bare sun|these blushing faces|the blush of apricots",
  c2: "a breeze|the stream|in the air|from above the cloud",
  c3: "Every second|Every minute|Every breathing-in",
  c4: "a scorch|the burning stream|a new shower of magma|a knot of fear",
  c5: "scratching your stomach|challenging your guts|piercing your throat",

  D: "$d1 rustle before $d2 are flipped.|$d3 $d4 $d5.|$d6 have $d7 $d8.|$d9 $d10 $d11.",
  d1: "Bushes|Cicades|Pages|Pastoral songs",
  d2: "leaves|foliages|the days|the nights",
  d3: "Autumn|Autumn wind|Autumn breezes",
  d4: "arrives (earlier|anxiously|unexpectively)",
  d5: "upon the pale-green leaves|under the vast sky|than the returning geese",
  d6: "Dianthus|Magnolias|Water lilies|Eiphyllums|Lotus flowers|Jasmines",
  d7: "not yet been (well prepared|ready)",
  d8: "for the farewell|to say goodbye|for their departure",
  d9: "Anyway,|Says,",
  d10: "don't forget|keep in mind|hold over",
  d11: "your last bite of watermelon|the flowers you have kept away",

  E: "$e1 has been $e2, &leaving $e3 all over.|Can you $e4?",
  e1: "Summer|Lingering heat",
  e2: "penalized|withdrawn|expelled|erased|isolated",
  e3: "the gold|the coolness|his adherents|his followers",
  e4:
    "hear the last song of grassplot harmony|bear the sigh of ivy barrier|catch the late autumn breezes",

  F: "Dotted on the $f1, &dews are the $f2.|$f3 to $f4.",
  f1: "petals|the grass|seedlings",
  f2:
    "tears of the hardest goodbye|pearls of the most generous gift|sweats from good old sweltering days|recorders of season changing",
  f3: "Take care|Be careful",
  f4: "when on your muddy way back home|of the blinding drizzle",

  G: "$g1 are equal partners &forever apart.|They $g2 &and $g3 $g4.|$G3|$G4",
  G3:
    "Blue is the sky, &and sky is the blue.|Moon is the wane, &and wane is the moon.|Shadow is the light, &and light is the shadow.|Daydream is a nightmare, &and the nightmare is a dream.",
  G4:
    "A drumbeat in nightime wakes up a wake-up call.|An evening mumble alarms the alarming verse.|A distant cloud waves at the wave after wave.|The light has been lighting up shadow.",
  g1:
    "Waning moon and setting sun|Daydream and nightmare|Daytime and nightime|Light and shadow",
  g2: "meet in early spring|greet each other in spring| embrace in springtime",
  g3: "eventually|then|",
  g4:
    "separate in fall|autumn is their intersaction|drift apart in autumn|deem to become estranged",

  H: "$h1 $h2 as the dew.|$h4, &it $h5 $h6.|$h7,while $h7.nr().|Dew after dew...... &And $h1 $h3.",
  h1: "Homesickness|Homesickness|Sorrow|Memory|Grief",
  h2: "accumulates|condense",
  h3: "turns out crystal clear|drops as tears",
  h4:
    "Carried by the ginkgo leaf by leaf|Bedewed on the coat|Dimming the moonlight",
  h5: "buries|conceals|messes up",
  h6: "everything|every untold word|every regretful second",
  h7:
    "Wintersweet are delighted|Pine trees stand erect|Waves roar deep|Autumn breeze's on the rail|Branches shake off dews",

  I: "$i1 are not the frost, &but $i2.|$i3 $i4 &with the frost $i5.",
  i1: "Desolations|Coldnesses|Vicissitudes|Sentiments",
  i2:
    "the wolves howling to full moon|the autumn mood only be killed with moonshine|the chrysanthemums bloom upon Frost|the plaintive cries of homecoming wild geese",
  i3:
    "The almost full moon|The moonshine|The lingering October|The drowning sky",
  i4:
    "echoes the wolves|return the swinging autumn moon|cherishes the chrysanthemum blooms|guiding the returning wildfowls",
  i5:
    "across thousand miles|in 15 days|throughout forests and grasslands|of new generations",

  J: "$j1... $j2 than (ever|yesterday|last year).|$j3 have been $j4.|$j5 is only going to be $j2.|But $j6 $j7 $j8.",
  j1:
    "This is a night|That is a night|That is another hour|That is another second",
  j2: "longer|colder|quieter|darker|even more silent|the same",
  j3: "Autumn|Autumn wind|Autumn breezes",
  j4: "exhausted",
  j5: "Tomorrow",
  j6: "the oil lamp|a bright moon|a little red flame",
  j7: "promises to|decides to|will",
  j8: "watch over you|be your company",

  K: "Snow is $k1...|It snows $k2 to $k3.",
  k1: "pouring dews of (repentance|penance|regret|pity)",
  k2: "little|moderately",
  k3: "sound out how inclusive is this land|spy for a winter conspiracy",

  L: "But is the snow $l1 enough to $l2?|Time to $l3 its $l4!",
  l1: "fresh|clear|bright|warm|crystal",
  l2: "wash away its sins|relieve its misery|for (renewal|reborn)",
  l3: "show off|reveal",
  l4: "ambition|conspiracy",

  M: "$m1 are the tourist of $m2.|$m3 are their post station.|$m4, &as (the night|this night)is always too long to overcome.|Dumplings or sweet dumplings, &$m5.",
  m1: "Light and shadow",
  m2: "generations|every winter",
  m3: "We",
  m4:
    "The moonlight is too bright for the drowsiness|The sheet is too cold for recharging|The air is too cold for calming down",
  m5: "that is the question|they are deliverer of endangered warmth",

  N: "Moderate, but enough that $n1.|$n2, never moderate enough for $n3.",
  n1:
    "the rivers are locked|the quarrels are frozen|the day lasts for an eternity",
  n2: "Secret sprouts",
  n3: "early January|the new year",

  O: "Between $o1 &is $o2.|If the snow is not yet melting, &$o3 may last forever.",
  o1:
    "the roaring of snow and the hum of conservation|the hell and the heaven|the wild and the haven",
  o2: "a dead-locked door and impermeable four walls",
  o3: "winter|the coldness|the day|the deadlock",

  P: "$p1, &the Spring is arriving.|It lands on as soon as $p2.|Is it melted snow or spring rain that &$p3 $p4?|Vague as $p5, &and hurried as $p6",
  p1: "Rushing into eaves|Putting up umbrellas",
  p2:
    "a winter drunkard is awake|pastoral songs are overspread|February begins|Winter falls asleep",
  p3: "branches of willows|shadows of all creations|desires in your eyes",
  p4: "swaying in|reflected on|flourishing|booming out",
  p5: "the fog over the pool",
  p6: "the grass has been reborn",

  Q: "She knows Spring, sneaks into night on $q1 &and moisters eyes with $q2.|She $q3.|Meet her $q4 &$q5.|She is $q6.",
  q1: "wind|clouds|starlights|secret lanes",
  q2: "dots of reds|raindrops on grass|weights of blossoms",
  q3: "switches sceneries like a smooth transition",
  q4:
    "at the entrance of the lane|at the deep alley|at the corner of the street",
  q5: "where magnolias smells pure",
  q6: "now all around you|waiting for your acquaintance in springtime",

  R: "Is it because $r1?|$r2 $r3.",
  r1:
    "an alarm for early spring|a clarion call for vitality|the sound of trumpets that burst into life",
  r2: "Butterflies land on windows|Ladybugs jump onto tips",
  r3:
    "without announcing in advance|as a preview of the new year|unlike what is shown in trailer",

  S: "$s1 in the east while $s2 on the west side.|$s3 start sharing the vernal scenery.|$s4 is drunken by $s5, &while $s6 wide awake.|Pave the land by $s7, &or disrupt it by $s8.",
  s1: "Sun shines",
  s2: "Rain pours",
  s3:
    "Daytime and nightime|Light and shadow|The bloom and the fallen|Lands and rivers",
  s4: "Branches of willows by waterside",
  s5: "spring vapour|desires in your eyes",
  s6: "a pair of swallows are",
  s7: "the spring chorus",
  s8: "a kite",

  T: "Yesterday, the $t1.|Raindrops scatter as if they were those winter dews.|In $t3, $t4 has been swallowed.|$t2, &and it turns out clear and bright.",
  t1:
    "swallow arrived|pear blossom fell|thunder was rumbling|ghosts were homed",
  t2:"The past has been washed away|The bitter has been buried deeply",
  t3:"a bottle of liquid",
  t4:"homesickness|sorrow|memory|grief",
  
  U: "The rain sheds flower petals, &and it $u1.|The wheats embrace raindrops, &grow wild as if $u2.",
  u1:
    "steals away spring in the air|buries them into waterside|cherishes them as memento",
  u2: "they were spring flowers",

  V: "Spring has not yet retired, &but Summer has already built up shelter.|$v2 lets out the secret of Summer.|It is hard to keep the springtime, not &even for the $v1 where it was born.|Either $v1 or $v1.nr() &is now busily for new beings in the coming season.",
  v1:
    "the cherry blossom trees|the rows of willow|the banks of stream|the handful of soil",
  v2:"A warble of orioles",

  W: "$w0, &both in $w1 and $w2.|$w3 fill up $w4.",
  w0:"Plenitiful|Plenty of plenty",
  w1:
    "the smells of gold|the wheat ears|the flavour of air|the layers of greenery",
  w2:
    "the restless mind|the croak of frogs|the trills of cicadas|the birds singing",
  w3:"The golden frangrance|The rich summertime flavour in air|The greenery over the greenery|The chorus by frogs|The ensemble of insects|The joy of birds",
  w4:"the wheat ears|the restless mind",

  X: "Millet are seeded as $x1 as if $x2.|$x3 will then be relieved by the maize and millet.",
  x1: "much|heavily|deeply",
  x2: "raindrops|burdens|rainstorms",
  x3: "The burdens|The dark clouds",
};

