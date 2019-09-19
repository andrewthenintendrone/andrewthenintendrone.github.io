var characters = ["Baby Peach",
"Baby Daisy",
"Baby Rosalina",
"Lemmy",
"Baby Mario",
"Baby Luigi",
"Dry Bones",
"Mii",
"Toadette",
"Wendy",
"Isabelle",
"Koopa Troopa",
"Lakitu",
"Bowser Jr",
"Toad",
"Shy Guy",
"Larry",
"Cat Peach",
"Villager Girl",
"Inkling Girl",
"Peach",
"Daisy",
"Yoshi",
"Tanooki Mario",
"Villager Boy",
"Inkling Boy",
"Mario",
"Ludwig",
"Luigi",
"Iggy",
"Metal Mario",
"Pink Gold Peach",
"Rosalina",
"Link",
"King Boo",
"Donkey Kong",
"Waluigi",
"Roy",
"Wario",
"Dry Bowser",
"Bowser",
"Morton",
// skins
"Shy Guy",
"Green Shy Guy",
"Blue Shy Guy",
"Light Blue Shy Guy",
"Yellow Shy Guy",
"Pink Shy Guy",
"Black Shy Guy",
"White Shy Guy",
"Orange Shy Guy",
"Inkling Girl",
"Green Inkling Girl",
"Pink Inkling Girl",
"Yoshi",
"Red Yoshi",
"Blue Yoshi",
"Light Blue Yoshi",
"Yellow Yoshi",
"Pink Yoshi",
"Black Yoshi",
"White Yoshi",
"Orange Yoshi",
"Inkling Boy",
"Purple Inkling Boy",
"Light Blue Inkling Boy",
"Metal Mario",
"Gold Mario",
"Link",
"Breath of the wild Link"];

var vehicles = ["Standard Kart",
"Pipe Frame",
"Mach 8",
"Steel Driver",
"Cat Cruiser",
"Circuit Special",
"Tri-Speeder",
"Badwagon",
"Prancer",
"Buggybud",
"Landship",
"Bounder",
"Sports Coup&eacute;",
"Gold Kart",
"GLA",
"W 25 Silver Arrow",
"300 SL Roadster",
"Blue Falcon",
"Tanooki Kart",
"B Dasher",
"Streetle",
"P-Wing",
"Koopa Clown",
"Standard Bike",
"The Duke",
"Flame Rider",
"Varmint",
"Mr Scooty",
"City Tripper",
"Master Cycle Zero",
"Comet",
"Sport Bike",
"Jet Bike",
"Yoshi Bike",
"Master Cycle",
"Standard Quad",
"Wild Wiggler",
"Teddy Buggy",
"Bone Rattler",
"Splat Buggy",
"Inkstriker"];

var tyres = ["Normal",
"Monster",
"Roller",
"Slim",
"Slick",
"Metal",
"Button",
"Off-Road",
"Sponge",
"Wooden",
"Cushion",
"Normal Blue",
"Funky Monster",
"Azure Roller",
"Crimson Slim",
"Cyber Slick",
"Retro Off-Road",
"Gold Wheels",
"GLA Wheels",
"Triforce Tyres",
"Leaf Tyres",
"Ancient Tyres"];

var gliders = ["Super Glider",
"Cloud Glider",
"Wario Wing",
"Waddle Wing",
"Peach Parasol",
"Parachute",
"Parafoil",
"Flower Glider",
"Bowser Kite",
"Plane Glider",
"MKTV Parafoil",
"Gold Glider",
"Hylian Kite",
"Paper Glider",
"Paraglider"]

// These correspond to the colors used by different characters
// for vehicle parts that have different colors
// but not for every single character
// in order they are:
// Sport Bike
// City Tripper
// Peach Parasol
// Circuit Special
// GLA
// Koopa Clown
// Landship
// Bounder
// Buggybud
// Splat Buggy
// Inkstriker

var vehicleIDs = 
[[2, 1, 0, 2, 4, 0, 0, 3, 4, 0, 0],
[2, 4, 1, 2, 4, 0, 0, 0, 3, 0, 0],
[2, 3, 2, 0, 1, 0, 0, 3, 2, 0, 0],
[1, 10, 0, 1, 8, 2, 2, 0, 2, 0, 0],
[0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],
[1, 7, 0, 1, 5, 0, 0, 2, 1, 0, 0],
[1, 3, 0, 0, 7, 0, 0, 1, 2, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[2, 1, 0, 2, 2, 0, 0, 3, 4, 0, 0],
[2, 5, 0, 3, 4, 3, 3, 3, 4, 0, 0],
[1, 0, 0, 2, 2, 0, 0, 3, 1, 0, 0],
[1, 7, 0, 1, 7, 0, 0, 0, 1, 0, 0],
[1, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0],
[1, 8, 0, 1, 0, 0, 0, 1, 1, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 2, 2, 0, 0],
[0, 6, 0, 3, 3, 0, 0, 1, 0, 0, 0],
[0, 3, 0, 2, 7, 1, 1, 0, 3, 0, 0],
[2, 11, 0, 2, 2, 0, 0, 3, 4, 0, 0],
[2, 1, 0, 2, 2, 0, 0, 3, 4, 0, 0],
[2, 6, 0, 2, 4, 0, 0, 0, 0, 1, 1],
[2, 1, 0, 2, 4, 0, 0, 3, 4, 0, 0],
[2, 4, 1, 2, 4, 0, 0, 0, 3, 0, 0],
[1, 0, 0, 1, 2, 0, 0, 2, 1, 0, 0],
[2, 6, 0, 2, 4, 0, 0, 0, 0, 0, 0],
[1, 6, 0, 1, 5, 0, 0, 2, 0, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 0, 2, 4, 4],
[0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0],
[1, 9, 0, 0, 5, 4, 4, 1, 2, 0, 0],
[1, 7, 0, 1, 5, 0, 0, 2, 1, 0, 0],
[1, 7, 0, 1, 0, 5, 5, 1, 1, 0, 0],
[0, 8, 0, 3, 1, 0, 0, 1, 0, 0, 0],
[2, 11, 0, 2, 8, 0, 0, 3, 4, 0, 0],
[2, 3, 2, 0, 1, 0, 0, 3, 2, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 2, 1, 0, 0],
[0, 8, 0, 3, 6, 0, 0, 1, 0, 0, 0],
[2, 6, 0, 2, 8, 0, 0, 2, 0, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 0, 2, 0, 0],
[0, 5, 0, 3, 6, 6, 6, 0, 4, 0, 0],
[0, 10, 0, 3, 5, 0, 0, 0, 3, 0, 0],
[0, 8, 0, 3, 0, 0, 0, 1, 3, 0, 0],
[0, 8, 0, 3, 3, 0, 0, 1, 3, 0, 0],
[0, 8, 0, 3, 2, 7, 7, 1, 0, 0, 0],
[0, 6, 0, 3, 3, 0, 0, 1, 0, 0, 0],
[1, 7, 0, 1, 1, 0, 0, 2, 1, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 2, 2, 0, 0],
[0, 3, 0, 0, 7, 0, 0, 3, 2, 0, 0],
[2, 10, 0, 3, 0, 0, 0, 0, 3, 0, 0],
[2, 1, 0, 2, 2, 0, 0, 3, 4, 0, 0],
[0, 8, 0, 3, 3, 0, 0, 1, 0, 0, 0],
[1, 2, 0, 0, 2, 0, 0, 3, 2, 0, 0],
[2, 4, 0, 2, 4, 0, 0, 1, 3, 0, 0],
[2, 6, 0, 2, 4, 0, 0, 0, 0, 1, 1],
[1, 7, 0, 1, 3, 0, 0, 1, 1, 2, 2],
[0, 11, 0, 3, 2, 0, 0, 2, 4, 3, 3],
[1, 0, 0, 1, 2, 0, 0, 2, 1, 0, 0],
[0, 6, 0, 0, 4, 0, 0, 2, 0, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 2, 2, 0, 0],
[0, 3, 0, 0, 7, 0, 0, 3, 2, 0, 0],
[2, 10, 0, 3, 0, 0, 0, 0, 3, 0, 0],
[2, 1, 0, 2, 2, 0, 0, 3, 4, 0, 0],
[0, 8, 0, 3, 3, 0, 0, 1, 0, 0, 0],
[1, 2, 0, 0, 2, 0, 0, 3, 2, 0, 0],
[2, 4, 0, 2, 4, 0, 0, 1, 3, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 0, 2, 4, 4],
[2, 8, 0, 3, 6, 0, 0, 1, 3, 5, 5],
[1, 3, 0, 1, 1, 0, 0, 2, 1, 6, 6],
[0, 8, 0, 3, 1, 0, 0, 1, 0, 0, 0],
[0, 8, 0, 3, 1, 0, 0, 1, 0, 0, 0],
[0, 9, 0, 0, 5, 0, 0, 2, 1, 0, 0],
[0, 6, 0, 1, 1, 0, 0, 1, 0, 0, 0]];