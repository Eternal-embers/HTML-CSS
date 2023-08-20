/* checkbox */
var options = [
    "season1",
    "season2",
    "season3",
    "season4",
    "season5",
    "season6",
    "season7",
    "season8",
    "season9",
    "seasonX",
    "Chapter 2 Season 1",
    "Chapter 2 Season 2",
    "Chapter 2 Season 3",
    "Chapter 2 Season 4",
    "Chapter 2 Season 5",
    "Chapter 2 Season 6",
    "Chapter 2 Season 7",
    "Chapter 2 Season 8",
    "Chapter 3 Season 1",
    "Chapter 3 Season 2",
    "Chapter 3 Season 3",
    "Chapter 3 Season 4",
    "Chapter 4 Season 1",
    "Chapter 4 Season 2",
    "Chapter 4 Season 3",
    "Fortnite Crew",
    "Other",
    "VALENTINE'S DAY SKINS",
    "SAINT PATRICK'S DAY SKINS",
    "EASTER EVENT SKINS",
    "HALLOWEEN SKINS",
    "CHRISTMAS SKINS",
    "MARVEL SKINS",
    "NARUTO",
    "全选",
    "清空",
];
var input = document.querySelectorAll('div.filter input');
var label = document.querySelectorAll('div.filter label');
var length = input.length;
var i;
for (i = 0; i < length; i++) {
    input[i].setAttribute('id', "filter" + i);
    if (i < length - 2) {
        input[i].checked = true;
        input[i].onchange = function () { filter(this); };
    }
    else {
        input.checked = false;
        input[i].onchange = function () { wholeFilter(this) };
    }
    label[i].innerHTML = options[i];
    label[i].setAttribute('for', "filter" + i);
}
/* 全选或清空 */
function wholeFilter(input) {
    var len = options.length - 2;
    /* 全选 */
    if (input.id.match("filter34") && input.checked) {
        document.getElementById("filter35").checked = false;
        for (var i = 0; i < len; i++) {
            var input = document.getElementById("filter" + i);
            if (!input.checked) {
                input.checked = true;
                filter(input);
            }
        }
    }
    /* 清空 */
    else if (input.id.match("filter35") && input.checked) {
        document.getElementById("filter34").checked = false;
        for (var i = 0; i < len; i++) {
            var input = document.getElementById("filter" + i);
            if (input.checked) {
                input.checked = false;
                filter(input);
            }
        }
    }
}
/* 单独筛选 */
function filter(input) {
    var id = input.id;
    var element = "roles" + id.split('filter')[1];
    var value = input.checked ? "flex" : "none";
    if (input.checked)
        document.getElementById("filter35").checked = false;//取消清空
    else
        document.getElementById("filter34").checked = false;//取消全选
    document.getElementsByClassName(element)[0].style.display = value;
}



/* roles0 */
var paths = [
    "../Resource/outfit/season1/Aerial Assault Trooper.png",
    "../Resource/outfit/season1/Renegade Raider.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles0 a");
var roles = document.querySelectorAll('.roles0 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles1 */
var paths = [
    "../Resource/outfit/season2/Black Knight.png",
    "../Resource/outfit/season2/Blue Squire Skin.png",
    "../Resource/outfit/season2/Blue Squire.png",
    "../Resource/outfit/season2/Royale Knight.png",
    "../Resource/outfit/season2/Sparkle Specialist.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles1 a");
var roles = document.querySelectorAll('.roles1 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles2 */
var paths = [
    "../Resource/outfit/season3/Dark Vanguard.png",
    "../Resource/outfit/season3/Dark Voyager.png",
    "../Resource/outfit/season3/Elite Agent.png",
    "../Resource/outfit/season3/Mission Specialist.png",
    "../Resource/outfit/season3/Moonwalker.png",
    "../Resource/outfit/season3/Rust Lord.png",
    "../Resource/outfit/season3/The Reaper.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles2 a");
var roles = document.querySelectorAll('.roles2 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles3 */
var paths = [
    "../Resource/outfit/season4/Battlehawk.png",
    "../Resource/outfit/season4/Carbide.png",
    "../Resource/outfit/season4/Squad Leader.png",
    "../Resource/outfit/season4/Teknique.png",
    "../Resource/outfit/season4/Valor.png",
    "../Resource/outfit/season4/Zoey.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles3 a");
var roles = document.querySelectorAll('.roles3 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles4 */
var paths = [
    "../Resource/outfit/season5/Drift.png",
    "../Resource/outfit/season5/Enforcer.png",
    "../Resource/outfit/season5/Huntress.png",
    "../Resource/outfit/season5/Ragnarok.png",
    "../Resource/outfit/season5/Redline.png",
    "../Resource/outfit/season5/Rook.png",
    "../Resource/outfit/season5/Sledgehammer.png",
    "../Resource/outfit/season5/Sun Strider.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles4 a");
var roles = document.querySelectorAll('.roles4 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles5 */
var paths = [
    "../Resource/outfit/season6/Calamity.jpg",
    "../Resource/outfit/season6/Dire.png",
    "../Resource/outfit/season6/DJ Yonder.png",
    "../Resource/outfit/season6/Dusk.jpg",
    "../Resource/outfit/season6/Fable.jpg",
    "../Resource/outfit/season6/Giddy-Up.png",
    "../Resource/outfit/season6/Nightshade.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles5 a");
var roles = document.querySelectorAll('.roles5 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles6 */
var paths = [
    "../Resource/outfit/season7/Lynx.png",
    "../Resource/outfit/season7/The Ice King.png",
    "../Resource/outfit/season7/Trog.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles6 a");
var roles = document.querySelectorAll('.roles6 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles7 */
var paths = [
    "../Resource/outfit/season8/Blackheart.png",
    "../Resource/outfit/season8/Ember.jpg",
    "../Resource/outfit/season8/Hybrid.jpg",
    "../Resource/outfit/season8/Luxe.png",
    "../Resource/outfit/season8/Master Key.png",
    "../Resource/outfit/season8/Peely.png",
    "../Resource/outfit/season8/Sidewinder.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles7 a");
var roles = document.querySelectorAll('.roles7 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles8 */
var paths = [
    "../Resource/outfit/season9/Bunker Jonesy.jpg",
    "../Resource/outfit/season9/Demi.png",
    "../Resource/outfit/season9/Rox.jpg",
    "../Resource/outfit/season9/Sentinel.png",
    "../Resource/outfit/season9/Stratus.jpg",
    "../Resource/outfit/season9/Vega.png",
    "../Resource/outfit/season9/Vendetta.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles8 a");
var roles = document.querySelectorAll('.roles8 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles9 */
var paths = [
    "../Resource/outfit/seasonX/Catalyst Skin.png",
    "../Resource/outfit/seasonX/Catalyst.png",
    "../Resource/outfit/seasonX/Eternal Voyager Skin.png",
    "../Resource/outfit/seasonX/Eternal Voyager.png",
    "../Resource/outfit/seasonX/Sparkle Supreme.png",
    "../Resource/outfit/seasonX/Tilted Teknique Skin.png",
    "../Resource/outfit/seasonX/Tilted Teknique.png",
    "../Resource/outfit/seasonX/Ultima Knight Skin.png",
    "../Resource/outfit/seasonX/Ultima Knight.png",
    "../Resource/outfit/seasonX/X-Lord.png",
    "../Resource/outfit/seasonX/Yond3r.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles9 a");
var roles = document.querySelectorAll('.roles9 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* role10 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 1/8-Ball.png",
    "../Resource/outfit/Chapter 2 Season 1/Cameo.png",
    "../Resource/outfit/Chapter 2 Season 1/Chic.png",
    "../Resource/outfit/Chapter 2 Season 1/Female Recruit 1.png",
    "../Resource/outfit/Chapter 2 Season 1/Female Recruit 2.png",
    "../Resource/outfit/Chapter 2 Season 1/Female Recruit 3.png",
    "../Resource/outfit/Chapter 2 Season 1/Female Recruit 4.png",
    "../Resource/outfit/Chapter 2 Season 1/Fusion Variant.png",
    "../Resource/outfit/Chapter 2 Season 1/Fusion.png",
    "../Resource/outfit/Chapter 2 Season 1/Hazard.png",
    "../Resource/outfit/Chapter 2 Season 1/Journey.png",
    "../Resource/outfit/Chapter 2 Season 1/Male Recruit 1.png",
    "../Resource/outfit/Chapter 2 Season 1/Male Recruit 2.png",
    "../Resource/outfit/Chapter 2 Season 1/Male Recruit 3.png",
    "../Resource/outfit/Chapter 2 Season 1/Male Recruit 4.png",
    "../Resource/outfit/Chapter 2 Season 1/Remedy.png",
    "../Resource/outfit/Chapter 2 Season 1/Rippley.png",
    "../Resource/outfit/Chapter 2 Season 1/Riptide.png",
    "../Resource/outfit/Chapter 2 Season 1/Scratch.png",
    "../Resource/outfit/Chapter 2 Season 1/Sludge.png",
    "../Resource/outfit/Chapter 2 Season 1/Toxin.png",
    "../Resource/outfit/Chapter 2 Season 1/Turk.png"
];
var length = paths.length;
var links = document.querySelectorAll(".roles10 a");
var roles = document.querySelectorAll('.roles10 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles11 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 2/Agent Peely (Ghost).png",
    "../Resource/outfit/Chapter 2 Season 2/Agent Peely (Shadow).png",
    "../Resource/outfit/Chapter 2 Season 2/Agent Peely.png",
    "../Resource/outfit/Chapter 2 Season 2/Henchman (Ghost).png",
    "../Resource/outfit/Chapter 2 Season 2/Henchman (Shadow).png",
    "../Resource/outfit/Chapter 2 Season 2/Henchman (with glasses).png",
    "../Resource/outfit/Chapter 2 Season 2/Henchman.png",
    "../Resource/outfit/Chapter 2 Season 2/Maya.png",
    "../Resource/outfit/Chapter 2 Season 2/Meowscles (Ghost).png",
    "../Resource/outfit/Chapter 2 Season 2/Meowscles (Shadow).png",
    "../Resource/outfit/Chapter 2 Season 2/Meowscles.png",
    "../Resource/outfit/Chapter 2 Season 2/Midas (Ghost).png",
    "../Resource/outfit/Chapter 2 Season 2/Midas (Shadow).png",
    "../Resource/outfit/Chapter 2 Season 2/Midas.png",
    "../Resource/outfit/Chapter 2 Season 2/Skye (Ghost).png",
    "../Resource/outfit/Chapter 2 Season 2/Skye (Shadow).png",
    "../Resource/outfit/Chapter 2 Season 2/Skye.png",
    "../Resource/outfit/Chapter 2 Season 2/TNTina (Ghost).png",
    "../Resource/outfit/Chapter 2 Season 2/TNTina (Shadow).png",
    "../Resource/outfit/Chapter 2 Season 2/TNTina.png"
];
var length = paths.length;
var links = document.querySelectorAll(".roles11 a");
var roles = document.querySelectorAll('.roles11 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles12 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 3/Action Kit.png",
    "../Resource/outfit/Chapter 2 Season 3/Advanced Scuba Jonesy.png",
    "../Resource/outfit/Chapter 2 Season 3/Aquaman.png",
    "../Resource/outfit/Chapter 2 Season 3/Arthur Curry.png",
    "../Resource/outfit/Chapter 2 Season 3/Black Eternal Knight.png",
    "../Resource/outfit/Chapter 2 Season 3/Blue Siona.png",
    "../Resource/outfit/Chapter 2 Season 3/Blue Voyage Siona.png",
    "../Resource/outfit/Chapter 2 Season 3/Cove Rider Ocean.png",
    "../Resource/outfit/Chapter 2 Season 3/Eternal Knight.png",
    "../Resource/outfit/Chapter 2 Season 3/Fade.png",
    "../Resource/outfit/Chapter 2 Season 3/Gold Eternal Knight.png",
    "../Resource/outfit/Chapter 2 Season 3/Happy Kit.png",
    "../Resource/outfit/Chapter 2 Season 3/Jules.png",
    "../Resource/outfit/Chapter 2 Season 3/Kit.png",
    "../Resource/outfit/Chapter 2 Season 3/Masked Fade.png",
    "../Resource/outfit/Chapter 2 Season 3/Masked Scuba Jonesy.png",
    "../Resource/outfit/Chapter 2 Season 3/Nova Siona.png",
    "../Resource/outfit/Chapter 2 Season 3/Ocean.png",
    "../Resource/outfit/Chapter 2 Season 3/Riptide Ocean.png",
    "../Resource/outfit/Chapter 2 Season 3/Sacred Eternal Knight.png",
    "../Resource/outfit/Chapter 2 Season 3/Scuba Jonesy.png",
    "../Resource/outfit/Chapter 2 Season 3/Shadow Jules.png",
    "../Resource/outfit/Chapter 2 Season 3/Siona.png",
    "../Resource/outfit/Chapter 2 Season 3/Spacewalk Siona.png",
    "../Resource/outfit/Chapter 2 Season 3/Supernova Siona.png",
    "../Resource/outfit/Chapter 2 Season 3/Tactical Scuba Jonesy.png",
    "../Resource/outfit/Chapter 2 Season 3/Voyager Fade.png",
    "../Resource/outfit/Chapter 2 Season 3/Welder Jules.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles12 a");
var roles = document.querySelectorAll('.roles12 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles13 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 4/Crimson Jennifer Walters.png",
    "../Resource/outfit/Chapter 2 Season 4/Doctor Doom.png",
    "../Resource/outfit/Chapter 2 Season 4/God Emperor Doom.png",
    "../Resource/outfit/Chapter 2 Season 4/Green She-Hulk.png",
    "../Resource/outfit/Chapter 2 Season 4/Groot + Rocket.png",
    "../Resource/outfit/Chapter 2 Season 4/Groot.png",
    "../Resource/outfit/Chapter 2 Season 4/Iron Man.png",
    "../Resource/outfit/Chapter 2 Season 4/Jennifer Walters.png",
    "../Resource/outfit/Chapter 2 Season 4/Mystique.png",
    "../Resource/outfit/Chapter 2 Season 4/Punk Storm.png",
    "../Resource/outfit/Chapter 2 Season 4/Red She-Hulk.png",
    "../Resource/outfit/Chapter 2 Season 4/Storm Thor.png",
    "../Resource/outfit/Chapter 2 Season 4/Storm.png",
    "../Resource/outfit/Chapter 2 Season 4/Tactical Mystique.png",
    "../Resource/outfit/Chapter 2 Season 4/Thor.png",
    "../Resource/outfit/Chapter 2 Season 4/Tony Stark.png",
    "../Resource/outfit/Chapter 2 Season 4/Wolverine Classic.png",
    "../Resource/outfit/Chapter 2 Season 4/Wolverine.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles13 a");
var roles = document.querySelectorAll('.roles13 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles14 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 5/Beskar Armor Mandalorian.png",
    "../Resource/outfit/Chapter 2 Season 5/Challenger Menace No Plume.png",
    "../Resource/outfit/Chapter 2 Season 5/Challenger Menace.png",
    "../Resource/outfit/Chapter 2 Season 5/Dark Deeds Mancake.png",
    "../Resource/outfit/Chapter 2 Season 5/Galactic Ranger Reese.png",
    "../Resource/outfit/Chapter 2 Season 5/Infiltrator Lexa.png",
    "../Resource/outfit/Chapter 2 Season 5/Kondor.png",
    "../Resource/outfit/Chapter 2 Season 5/Lexa.png",
    "../Resource/outfit/Chapter 2 Season 5/Lonesome Hero Mancake.png",
    "../Resource/outfit/Chapter 2 Season 5/Mancake.png",
    "../Resource/outfit/Chapter 2 Season 5/Mandalorian Variant.png",
    "../Resource/outfit/Chapter 2 Season 5/Mandalorian.png",
    "../Resource/outfit/Chapter 2 Season 5/Mave.png",
    "../Resource/outfit/Chapter 2 Season 5/Mechafusion Infiltrator Lexa.png",
    "../Resource/outfit/Chapter 2 Season 5/Mechafusion Lexa.png",
    "../Resource/outfit/Chapter 2 Season 5/Mechafusion Warstrike Lexa.png",
    "../Resource/outfit/Chapter 2 Season 5/Menace Mask On.png",
    "../Resource/outfit/Chapter 2 Season 5/Menace.png",
    "../Resource/outfit/Chapter 2 Season 5/Nebula Racer Reese.png",
    "../Resource/outfit/Chapter 2 Season 5/Reese.png",
    "../Resource/outfit/Chapter 2 Season 5/Shieldbreaker Mave.png",
    "../Resource/outfit/Chapter 2 Season 5/The Cake With No Name.png",
    "../Resource/outfit/Chapter 2 Season 5/Undefeated Menace No Plume.png",
    "../Resource/outfit/Chapter 2 Season 5/Undefeated Menace.png",
    "../Resource/outfit/Chapter 2 Season 5/Unshackled Kondor.png",
    "../Resource/outfit/Chapter 2 Season 5/Unshackled Wrath Kondor.png",
    "../Resource/outfit/Chapter 2 Season 5/Unstoppable Mave.png",
    "../Resource/outfit/Chapter 2 Season 5/Warstrike Lexa.png",
    "../Resource/outfit/Chapter 2 Season 5/Wrath Kondor.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles14 a");
var roles = document.querySelectorAll('.roles14 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles15 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 6/Agent Jones (Variant 1).png",
    "../Resource/outfit/Chapter 2 Season 6/Agent Jones (Variant 2).png",
    "../Resource/outfit/Chapter 2 Season 6/Agent Jones (Variant 3).png",
    "../Resource/outfit/Chapter 2 Season 6/Agent Jones (Variant 4).png",
    "../Resource/outfit/Chapter 2 Season 6/Agent Jones (Variant 5).png",
    "../Resource/outfit/Chapter 2 Season 6/Agent Jones.png",
    "../Resource/outfit/Chapter 2 Season 6/Cluck (Eggsplosive Variant).png",
    "../Resource/outfit/Chapter 2 Season 6/Cluck.png",
    "../Resource/outfit/Chapter 2 Season 6/Lara Croft (25th Anniversary Variant).png",
    "../Resource/outfit/Chapter 2 Season 6/Lara Croft (Classic Variant).png",
    "../Resource/outfit/Chapter 2 Season 6/Lara Croft (Gold Anniversary Variant).png",
    "../Resource/outfit/Chapter 2 Season 6/Lara Croft.png",
    "../Resource/outfit/Chapter 2 Season 6/Raven (Classic Variant).png",
    "../Resource/outfit/Chapter 2 Season 6/Raven (Rachel Roth Variant).png",
    "../Resource/outfit/Chapter 2 Season 6/Raz Glyph Acolyte.png",
    "../Resource/outfit/Chapter 2 Season 6/Raz Glyph Master.png",
    "../Resource/outfit/Chapter 2 Season 6/Rebirth Raven.png",
    "../Resource/outfit/Chapter 2 Season 6/Spire Assassin (unmasked).png",
    "../Resource/outfit/Chapter 2 Season 6/Spire Assassin.png",
    "../Resource/outfit/Chapter 2 Season 6/Tarana Indigo.png",
    "../Resource/outfit/Chapter 2 Season 6/Tarana Indigoing X-Tinct.png",
    "../Resource/outfit/Chapter 2 Season 6/Tarana X-Tinction Armor.png",
    "../Resource/outfit/Chapter 2 Season 6/Tarana.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles15 a");
var roles = document.querySelectorAll('.roles15 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles16 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 7/Battlestripe Slone.png",
    "../Resource/outfit/Chapter 2 Season 7/Battlesuit Slone (Glasses).png",
    "../Resource/outfit/Chapter 2 Season 7/Battlesuit Slone.png",
    "../Resource/outfit/Chapter 2 Season 7/Clark Kent.png",
    "../Resource/outfit/Chapter 2 Season 7/Doctor Slone (No Glasses).png",
    "../Resource/outfit/Chapter 2 Season 7/Doctor Slone (Ponytail).png",
    "../Resource/outfit/Chapter 2 Season 7/Doctor Slone.png",
    "../Resource/outfit/Chapter 2 Season 7/Guggimon (Masked).png",
    "../Resource/outfit/Chapter 2 Season 7/Guggimon.png",
    "../Resource/outfit/Chapter 2 Season 7/Joey (Alien).png",
    "../Resource/outfit/Chapter 2 Season 7/Joey (Human).png",
    "../Resource/outfit/Chapter 2 Season 7/Kymera.png",
    "../Resource/outfit/Chapter 2 Season 7/Mechaglow Zyg & Choppy.png",
    "../Resource/outfit/Chapter 2 Season 7/Molten Midnight Zyg & Choppy.png",
    "../Resource/outfit/Chapter 2 Season 7/Rick Sanchez.png",
    "../Resource/outfit/Chapter 2 Season 7/Sandstone Joey (Alien).png",
    "../Resource/outfit/Chapter 2 Season 7/Sandstone Joey (Human).png",
    "../Resource/outfit/Chapter 2 Season 7/Sunny.png",
    "../Resource/outfit/Chapter 2 Season 7/Superman (Shadow) Pose.png",
    "../Resource/outfit/Chapter 2 Season 7/Superman (Shadow).png",
    "../Resource/outfit/Chapter 2 Season 7/Superman.png",
    "../Resource/outfit/Chapter 2 Season 7/Toxic Rick.png",
    "../Resource/outfit/Chapter 2 Season 7/Voyager Sunny.png",
    "../Resource/outfit/Chapter 2 Season 7/Zyg & Choppy.png",

];
var length = paths.length;
var links = document.querySelectorAll(".roles16 a");
var roles = document.querySelectorAll('.roles16 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles17 */
var paths = [
    "../Resource/outfit/Chapter 2 Season 8/Bold Charlotte.png",
    "../Resource/outfit/Chapter 2 Season 8/Charlotte Hagiri.png",
    "../Resource/outfit/Chapter 2 Season 8/Charlotte.png",
    "../Resource/outfit/Chapter 2 Season 8/Fabio Sparklemane.png",
    "../Resource/outfit/Chapter 2 Season 8/Flame-Roasted Fabio.png",
    "../Resource/outfit/Chapter 2 Season 8/Golden Crunch Fabio.png",
    "../Resource/outfit/Chapter 2 Season 8/J.B. Chimpanski (Helmet ON).png",
    "../Resource/outfit/Chapter 2 Season 8/J.B. Chimpanski.png",
    "../Resource/outfit/Chapter 2 Season 8/Kor Arctic Operative (Trenchcoat).png",
    "../Resource/outfit/Chapter 2 Season 8/Kor Arctic Operative.png",
    "../Resource/outfit/Chapter 2 Season 8/Kor Tactical Gray (Trenchcoat).png",
    "../Resource/outfit/Chapter 2 Season 8/Kor Tactical Gray.png",
    "../Resource/outfit/Chapter 2 Season 8/Kor Trenchcoat.png",
    "../Resource/outfit/Chapter 2 Season 8/Kor.png",
    "../Resource/outfit/Chapter 2 Season 8/Lunar Surface J.B..png",
    "../Resource/outfit/Chapter 2 Season 8/Nebula Rose J.B..png",
    "../Resource/outfit/Chapter 2 Season 8/Sideways Stalker.png",
    "../Resource/outfit/Chapter 2 Season 8/Sideways Warrior (Variant).png",
    "../Resource/outfit/Chapter 2 Season 8/Sideways Warrior.png",
    "../Resource/outfit/Chapter 2 Season 8/Spirit Charlotte.png",
    "../Resource/outfit/Chapter 2 Season 8/Toona Fish (Jonesy).png",
    "../Resource/outfit/Chapter 2 Season 8/Toona Fish (Love Ranger).png",
    "../Resource/outfit/Chapter 2 Season 8/Toona Fish.png",
    "../Resource/outfit/Chapter 2 Season 8/Torin.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles17 a");
var roles = document.querySelectorAll('.roles17 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles18 */
var paths = [
    "../Resource/outfit/Chapter 3 Season 1/Bitter Gumbo.png",
    "../Resource/outfit/Chapter 3 Season 1/Future Foundation Suit.png",
    "../Resource/outfit/Chapter 3 Season 1/Gumbo.png",
    "../Resource/outfit/Chapter 3 Season 1/Harlowe (Blue Helmet).png",
    "../Resource/outfit/Chapter 3 Season 1/Harlowe (Future Frost).png",
    "../Resource/outfit/Chapter 3 Season 1/Harlowe (Jacket).png",
    "../Resource/outfit/Chapter 3 Season 1/Harlowe (Sleeveless).png",
    "../Resource/outfit/Chapter 3 Season 1/Harlowe Helmet.png",
    "../Resource/outfit/Chapter 3 Season 1/Harlowe.png",
    "../Resource/outfit/Chapter 3 Season 1/Haven (Cat Mask).png",
    "../Resource/outfit/Chapter 3 Season 1/Haven (Dark).png",
    "../Resource/outfit/Chapter 3 Season 1/Haven (Hat).png",
    "../Resource/outfit/Chapter 3 Season 1/Haven (Horned Mask).png",
    "../Resource/outfit/Chapter 3 Season 1/Haven.png",
    "../Resource/outfit/Chapter 3 Season 1/Lt. John Llama (Classic).png",
    "../Resource/outfit/Chapter 3 Season 1/Lt. John Llama (Special Forces).png",
    "../Resource/outfit/Chapter 3 Season 1/Lt. John Llama.png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin (Cape Helmet).png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin (Cape).png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin (Vest).png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin Azure.png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin Crimson Helmet.png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin Crimson.png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin Emerald (Cape Helmet).png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin Emerald.png",
    "../Resource/outfit/Chapter 3 Season 1/Ronin.png",
    "../Resource/outfit/Chapter 3 Season 1/Shanta (Armor + No Mask).png",
    "../Resource/outfit/Chapter 3 Season 1/Shanta (Armor).png",
    "../Resource/outfit/Chapter 3 Season 1/Shanta.png",
    "../Resource/outfit/Chapter 3 Season 1/Sour Gumbo.png",
    "../Resource/outfit/Chapter 3 Season 1/Spider-Man (Alt).png",
    "../Resource/outfit/Chapter 3 Season 1/Spider-Man.png",
    "../Resource/outfit/Chapter 3 Season 1/Symbiote Suit.png",
    "../Resource/outfit/Chapter 3 Season 1/The Foundation (Combat).png",
    "../Resource/outfit/Chapter 3 Season 1/The Foundation.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles18 a");
var roles = document.querySelectorAll('.roles18 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles19 */
var paths = [
    "../Resource/outfit/Chapter 3 Season 2/Dazzling Spirit.png",
    "../Resource/outfit/Chapter 3 Season 2/Doctor Strange.png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa (Blue Cape).png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa (Blue Helmet).png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa (Blue).png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa (Cape).png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa (Green Cape).png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa (Green).png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa (Helmet).png",
    "../Resource/outfit/Chapter 3 Season 2/Erisa.png",
    "../Resource/outfit/Chapter 3 Season 2/Gunnar (Green).png",
    "../Resource/outfit/Chapter 3 Season 2/Gunnar (Helmet On).png",
    "../Resource/outfit/Chapter 3 Season 2/Gunnar (Orange).png",
    "../Resource/outfit/Chapter 3 Season 2/Gunnar (White).png",
    "../Resource/outfit/Chapter 3 Season 2/Gunnar.png",
    "../Resource/outfit/Chapter 3 Season 2/Iridium.png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O. (Battle Gold).png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O. (Battle Gold, Glasses Off).png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O. (Combat Rebel Glasses On).png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O. (Combat Rebel).png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O. (Glasses Off).png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O. (Gold Jacket).png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O. (Pastel Jacket).png",
    "../Resource/outfit/Chapter 3 Season 2/Kiara K.O..png",
    "../Resource/outfit/Chapter 3 Season 2/Prowler (Cape Off).png",
    "../Resource/outfit/Chapter 3 Season 2/Prowler.png",
    "../Resource/outfit/Chapter 3 Season 2/Shimmering Pearl.png",
    "../Resource/outfit/Chapter 3 Season 2/The Imagined (Combat Elite Storm).png",
    "../Resource/outfit/Chapter 3 Season 2/The Imagined (Combat Elite).png",
    "../Resource/outfit/Chapter 3 Season 2/The Imagined (Storm).png",
    "../Resource/outfit/Chapter 3 Season 2/The Imagined (Viridian).png",
    "../Resource/outfit/Chapter 3 Season 2/The Imagined.png",
    "../Resource/outfit/Chapter 3 Season 2/The Origin (Combat Elite).png",
    "../Resource/outfit/Chapter 3 Season 2/The Origin (Granite Grey) .png",
    "../Resource/outfit/Chapter 3 Season 2/The Origin (On Point).png",
    "../Resource/outfit/Chapter 3 Season 2/The Origin (Spacevoid Black).png",
    "../Resource/outfit/Chapter 3 Season 2/The Origin.png",
    "../Resource/outfit/Chapter 3 Season 2/Tsuki 2.0.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles19 a");
var roles = document.querySelectorAll('.roles19 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles20 */
var paths = [
    "../Resource/outfit/Chapter 3 Season 3/Adira (Battle Mask).png",
    "../Resource/outfit/Chapter 3 Season 3/Adira (Elite).png",
    "../Resource/outfit/Chapter 3 Season 3/Adira (Infiltrator).png",
    "../Resource/outfit/Chapter 3 Season 3/Adira.png",
    "../Resource/outfit/Chapter 3 Season 3/Bad Luck.png",
    "../Resource/outfit/Chapter 3 Season 3/Blackout.png",
    "../Resource/outfit/Chapter 3 Season 3/Darth Vader.png",
    "../Resource/outfit/Chapter 3 Season 3/Evie.png",
    "../Resource/outfit/Chapter 3 Season 3/Indiana Jones.png",
    "../Resource/outfit/Chapter 3 Season 3/Malik (Exalted).png",
    "../Resource/outfit/Chapter 3 Season 3/Malik (Midnight Sentinel).png",
    "../Resource/outfit/Chapter 3 Season 3/Malik.png",
    "../Resource/outfit/Chapter 3 Season 3/Neon Couture.png",
    "../Resource/outfit/Chapter 3 Season 3/Ninth Life.png",
    "../Resource/outfit/Chapter 3 Season 3/Sabina (Burning Ember).png",
    "../Resource/outfit/Chapter 3 Season 3/Sabina (Ponytail).png",
    "../Resource/outfit/Chapter 3 Season 3/Sabina.png",
    "../Resource/outfit/Chapter 3 Season 3/Snap.png",
    "../Resource/outfit/Chapter 3 Season 3/Storm Brawler.png",
    "../Resource/outfit/Chapter 3 Season 3/Stormfarer.png",
    "../Resource/outfit/Chapter 3 Season 3/Summer Strider.png",
    "../Resource/outfit/Chapter 3 Season 3/Syndicate Couture.png",
    "../Resource/outfit/Chapter 3 Season 3/Tover.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles20 a");
var roles = document.querySelectorAll('.roles20 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles21 */
var paths = [
    "../Resource/outfit/Chapter 3 Season 4/Bytes.png",
    "../Resource/outfit/Chapter 3 Season 4/Bytes_LoneTraveler.png",
    "../Resource/outfit/Chapter 3 Season 4/Bytes_PonyTails.png",
    "../Resource/outfit/Chapter 3 Season 4/Bytes_Wanderer.png",
    "../Resource/outfit/Chapter 3 Season 4/Grizz.png",
    "../Resource/outfit/Chapter 3 Season 4/LennoxRose.png",
    "../Resource/outfit/Chapter 3 Season 4/LennoxRose_BubblegumPunk.png",
    "../Resource/outfit/Chapter 3 Season 4/LennoxRose_FreshVandal.png",
    "../Resource/outfit/Chapter 3 Season 4/MeowSkulls.png",
    "../Resource/outfit/Chapter 3 Season 4/MeowSkulls_CloudNine.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_(Reality-659).png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_AuroraBattlesuit.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_MoonbaseBattlesuit.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_MoonbaseBattlesuit_8UP.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_MoonbaseBattlesuit_B.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_MoonbaseBattlesuit_C.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_MoonbaseBattlesuit_D.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_NanofiberSuit.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_OceanicCamoflage.png",
    "../Resource/outfit/Chapter 3 Season 4/Paradigm_SparringSuit.png",
    "../Resource/outfit/Chapter 3 Season 4/SpiderGwen.png",
    "../Resource/outfit/Chapter 3 Season 4/SpiderGwen_NoMask.png",
    "../Resource/outfit/Chapter 3 Season 4/Stryder.png",
    "../Resource/outfit/Chapter 3 Season 4/Stryder_Pastel.png",
    "../Resource/outfit/Chapter 3 Season 4/SypherPK.png",
    "../Resource/outfit/Chapter 3 Season 4/TheHerald.png",
    "../Resource/outfit/Chapter 3 Season 4/Twyn.png",
    "../Resource/outfit/Chapter 3 Season 4/Twyn_XenonEspionage.png",
    "../Resource/outfit/Chapter 3 Season 4/WildBearyGrizz.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles21 a");
var roles = document.querySelectorAll('.roles21 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles22 */
var paths = [
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Ascension_Nezumi.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Doom_Slayer.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Doom_Slayer_Astro_Armor.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Doom_Slayer_Ember_Armor.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Doom_Slayer_Phobos_Armor.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Dusty.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Dusty_Away_Game_Dusty.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Dusty_Boneyard_Dusty.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Dusty_Bullpen_Brawler_Dusty.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Exile_Nezumi.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Helsie.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Helsie_Bobarista_Helsie.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Helsie_Club_President_Helsie.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Massai.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Massai_Air_Walker_Massai.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Massai_Glasses_Off.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Massai_Thrasher_Massai.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Moonglow Selene_Moonglow_Selene.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Nezumi.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Selene.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_Selene_Sunlit_Selene.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_The_Ageless.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_The_Ageless_Armor.png",
    "../Resource/outfit/Chapter 4 Season 1/23BR_BP_Outfit_The_Ageless_Helmet.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles22 a");
var roles = document.querySelectorAll('.roles22 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles23 */
var paths = [
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Erin_Jaeger.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Erin_Jaeger_Scout_Regiment_Cloak.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Highwire.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Highwire_Bubblegum_Highwire.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Highwire_Bubblegum_Highwire_HoodDown.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Highwire_HoodDown.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Highwire_Wolfwalker_Highwire.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Imani.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Imani_Future-fi_Imani.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Imani_GlassesOff.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Imani_Headliner_Imani.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Imani_NoFX.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mizuki.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mizuki_Magmatic_Mizuki.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mizuki_Magmatic_Mizuki_Skirt.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mizuki_River_Empress_Mizuki_MaskOff.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mizuki_River_Empress_Mizuki_MaskOn.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mizuki_Skirt_MaskOn.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mystica.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mystica_Crimsonbloom_Mystica.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Mystica_Wintersong_Mystica.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Renzo_the_Destroyer.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Renzo_the_Destroyer_NonReactive.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Renzo_the_Destroyer_Renzo_the_Magnificent.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Renzo_the_Destroyer_Rococo_Cloak-o.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Stray.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Stray_HoodDown.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Stray_NoFX.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Stray_Renegade_Stray.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Stray_Stealth_Stray.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Thunder.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Thunder_Midnight_Snack_Thunder.png",
    "../Resource/outfit/Chapter 4 Season 2/24BR_BP_Outfit_Thunder_Rumbling_Thunder.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles23 a");
var roles = document.querySelectorAll('.roles23 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles24 */
var paths = [
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Era.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Era_Hat_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Era_Iconic_Era.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Era_Timeless_Era.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Era_Timeless_EraNo_Cape.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Era_Timeless_Era_Hat_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Lorenzo.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Lorenzo_Lorenzo_the_Dashing.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Lorenzo_Lorenzo_the_DashingMask_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Lorenzo_Lorenzo_the_Reckless.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Lorenzo_Lorenzo_the_Reckless_Mask_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Lorenzo_Mask_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Mariposa.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Mariposa_Dynamo_Mariposa.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Mariposa_Dynamo_Mariposa_Mask_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Mariposa_Mask_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Mariposa_Midnight_Mariposa.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Purradise_Meowscles.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Purradise_Meowscles_Clawesome_Meowscles.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Purradise_Meowscles_Furmidable_Meowscles.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Relik.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Relik_Deepwalker_Relik.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Relik_Deepwalker_RelikMask_OnSkirt_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Relik_Mask_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Relik_Skirt_On.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Relik_Wildguard_Relik.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Rian.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Rian_Rockslide_Rian.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Rian_Rockslide_Rian_Vest_Off.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Rian_Stonewash_Rian.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Rian_Vest_Off.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Trace.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Trace_Hood_Up.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Trace_Luminary_Trace.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Trace_Reactivity_Off.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Trace_Rebel_Trace.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_BP_Outfit_Trace_Rebel_TraceHood_Up.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_Outfit_Designer_Tsuki.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_Outfit_Innovator_Slone.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_Outfit_Kimiko_Five-Tails.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_Outfit_Kimiko_Five-Tails_Reactive.png",
    "../Resource/outfit/Chapter 4 Season 3/25BR_Outfit_Safari_Stealth.png",
    "../Resource/outfit/Chapter 4 Season 3/wp12455246-optimus-prime-fortnite-wallpapers.jpg",
];
var length = paths.length;
var links = document.querySelectorAll(".roles24 a");
var roles = document.querySelectorAll('.roles24 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles25 */
var paths = [
    "../Resource/outfit/Fortnite Crew/23BR_Outfit_Rift_Knight_Kieran.png",
    "../Resource/outfit/Fortnite Crew/24BR_Outfit_Styx.png",
    "../Resource/outfit/Fortnite Crew/24BR_Outfit_Styx_ReactiveOn.png",
    "../Resource/outfit/Fortnite Crew/Alli.png",
    "../Resource/outfit/Fortnite Crew/Deimos Variant Glow.png",
    "../Resource/outfit/Fortnite Crew/Deimos Variant.png",
    "../Resource/outfit/Fortnite Crew/Deimos.png",
    "../Resource/outfit/Fortnite Crew/DespairM.png",
    "../Resource/outfit/Fortnite Crew/DespairM_NoMask.png",
    "../Resource/outfit/Fortnite Crew/ForsakeF.png",
    "../Resource/outfit/Fortnite Crew/Galaxia Variant.png",
    "../Resource/outfit/Fortnite Crew/Galaxia.png",
    "../Resource/outfit/Fortnite Crew/Llambro.png",
    "../Resource/outfit/Fortnite Crew/Mecha Cuddle Master Dark.png",
    "../Resource/outfit/Fortnite Crew/Mecha Cuddle Master Light.png",
    "../Resource/outfit/Fortnite Crew/Mecha Cuddle Master.png",
    "../Resource/outfit/Fortnite Crew/Mecha Strike Commander.png",
    "../Resource/outfit/Fortnite Crew/Summer Skye (with Hat).png",
    "../Resource/outfit/Fortnite Crew/Summer Skye.png",
    "../Resource/outfit/Fortnite Crew/The Burning Wolf.png",
    "../Resource/outfit/Fortnite Crew/Vi.png",
]
var length = paths.length;
var links = document.querySelectorAll(".roles25 a");
var roles = document.querySelectorAll('.roles25 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles26 */
var paths = [
    "../Resource/outfit/Other/-erisa.jpeg",
    "../Resource/outfit/Other/Battle-Breakers Razor.png",
    "../Resource/outfit/Other/Captain America.png",
    "../Resource/outfit/Other/dahlia (2).jpeg",
    "../Resource/outfit/Other/dahlia.jpeg",
    "../Resource/outfit/Other/etheria.jpg",
    "../Resource/outfit/Other/keleritas.jpeg",
    "../Resource/outfit/Other/marigold.jpg",
    "../Resource/outfit/Other/mina-park.jpeg",
    "../Resource/outfit/Other/Phaedra.png",
    "../Resource/outfit/Other/Relaxed Fit Jonesy.png",
    "../Resource/outfit/Other/slayer-charlotte.jpeg",
    "../Resource/outfit/Other/snowdancer (2).webp",
    "../Resource/outfit/Other/snowdancer.webp",
    "../Resource/outfit/Other/tsuki.png",
    "../Resource/outfit/Other/Yee-haw.png",
    "../Resource/outfit/Other/Zenith.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles26 a");
var roles = document.querySelectorAll('.roles26 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles27 */
var paths = [
    "../Resource/outfit/VALENTINE'S DAY SKINS/Candyman.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Crusher.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Cuddle Team Leader.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Ex.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Fallen Love Ranger.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Heartbreaker.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Love Ranger.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Lovely Fortnite.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Pinkie.png",
    "../Resource/outfit/VALENTINE'S DAY SKINS/Skully.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles27 a");
var roles = document.querySelectorAll('.roles27 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles28 */
var paths = [
    "../Resource/outfit/SAINT PATRICK'S DAY SKINS/Battle Hound.png",
    "../Resource/outfit/SAINT PATRICK'S DAY SKINS/Chance.png",
    "../Resource/outfit/SAINT PATRICK'S DAY SKINS/Clover Team Leader.png",
    "../Resource/outfit/SAINT PATRICK'S DAY SKINS/Highland Warrior.png",
    "../Resource/outfit/SAINT PATRICK'S DAY SKINS/Sgt. Green Clover.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles28 a");
var roles = document.querySelectorAll('.roles28 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles29 */
var paths = [
    "../Resource/outfit/EASTER EVENT SKINS/Babbit.png",
    "../Resource/outfit/EASTER EVENT SKINS/Bun Bun.png",
    "../Resource/outfit/EASTER EVENT SKINS/Bunny Brawler.png",
    "../Resource/outfit/EASTER EVENT SKINS/Bunya.png",
    "../Resource/outfit/EASTER EVENT SKINS/Ceecee.png",
    "../Resource/outfit/EASTER EVENT SKINS/Dutch.png",
    "../Resource/outfit/EASTER EVENT SKINS/Hit Man.png",
    "../Resource/outfit/EASTER EVENT SKINS/Hopper.png",
    "../Resource/outfit/EASTER EVENT SKINS/Hopscotch.png",
    "../Resource/outfit/EASTER EVENT SKINS/Megg.png",
    "../Resource/outfit/EASTER EVENT SKINS/Nitehare.png",
    "../Resource/outfit/EASTER EVENT SKINS/Quackling.png",
    "../Resource/outfit/EASTER EVENT SKINS/Rabbit Raider.png",
    "../Resource/outfit/EASTER EVENT SKINS/Stella.png",
    "../Resource/outfit/EASTER EVENT SKINS/Webster.png",
    "../Resource/outfit/EASTER EVENT SKINS/Whiska.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles29 a");
var roles = document.querySelectorAll('.roles29 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles30 */
var paths = [
    "../Resource/outfit/HALLOWEEN SKINS/All-Hallows Steve.png",
    "../Resource/outfit/HALLOWEEN SKINS/Baba Yaga.jpg",
    "../Resource/outfit/HALLOWEEN SKINS/Big Mouth.png",
    "../Resource/outfit/HALLOWEEN SKINS/Blacklight.png",
    "../Resource/outfit/HALLOWEEN SKINS/Bone Boss.png",
    "../Resource/outfit/HALLOWEEN SKINS/Bone Ravage.png",
    "../Resource/outfit/HALLOWEEN SKINS/Bonejamin.jpeg",
    "../Resource/outfit/HALLOWEEN SKINS/Boo-Lastoff.png",
    "../Resource/outfit/HALLOWEEN SKINS/Brainiac.png",
    "../Resource/outfit/HALLOWEEN SKINS/Bunnymoon.png",
    "../Resource/outfit/HALLOWEEN SKINS/Burial Threat.png",
    "../Resource/outfit/HALLOWEEN SKINS/Catrina.png",
    "../Resource/outfit/HALLOWEEN SKINS/Chaos Agent.jpg",
    "../Resource/outfit/HALLOWEEN SKINS/Chaos Agent.png",
    "../Resource/outfit/HALLOWEEN SKINS/Chrome Punk.png",
    "../Resource/outfit/HALLOWEEN SKINS/Crypt Crosser.png",
    "../Resource/outfit/HALLOWEEN SKINS/Curdle Scream Leader.jpg",
    "../Resource/outfit/HALLOWEEN SKINS/Dante.png",
    "../Resource/outfit/HALLOWEEN SKINS/Dark Tricera.png",
    "../Resource/outfit/HALLOWEEN SKINS/Deadeye.png",
    "../Resource/outfit/HALLOWEEN SKINS/Deadfire.png",
    "../Resource/outfit/HALLOWEEN SKINS/Decaying Dribbler.png",
    "../Resource/outfit/HALLOWEEN SKINS/Delirium.png",
    "../Resource/outfit/HALLOWEEN SKINS/Doom Dancer.png",
    "../Resource/outfit/HALLOWEEN SKINS/Extinguished Firebrand.png",
    "../Resource/outfit/HALLOWEEN SKINS/Fatal Finisher.png",
    "../Resource/outfit/HALLOWEEN SKINS/Fishskull.png",
    "../Resource/outfit/HALLOWEEN SKINS/Frankenstein's Monster.png",
    "../Resource/outfit/HALLOWEEN SKINS/Ghoul Trooper.png",
    "../Resource/outfit/HALLOWEEN SKINS/Grisabelle.png",
    "../Resource/outfit/HALLOWEEN SKINS/Gummy Fishstick.png",
    "../Resource/outfit/HALLOWEEN SKINS/Hay Man.png",
    "../Resource/outfit/HALLOWEEN SKINS/Haze.png",
    "../Resource/outfit/HALLOWEEN SKINS/Headlock.png",
    "../Resource/outfit/HALLOWEEN SKINS/Hemlock.png",
    "../Resource/outfit/HALLOWEEN SKINS/Hollowhead.png",
    "../Resource/outfit/HALLOWEEN SKINS/Horrorsonic.png",
    "../Resource/outfit/HALLOWEEN SKINS/Ione.jpeg",
    "../Resource/outfit/HALLOWEEN SKINS/Jack Gourdon.png",
    "../Resource/outfit/HALLOWEEN SKINS/Jack O'Sassin.png",
    "../Resource/outfit/HALLOWEEN SKINS/Jett.jpeg",
    "../Resource/outfit/HALLOWEEN SKINS/Jolterror.png",
    "../Resource/outfit/HALLOWEEN SKINS/Kaws Skeleton.png",
    "../Resource/outfit/HALLOWEEN SKINS/Midfield Montrosity.png",
    "../Resource/outfit/HALLOWEEN SKINS/Party Trooper.png",
    "../Resource/outfit/HALLOWEEN SKINS/Patch Patroller.png",
    "../Resource/outfit/HALLOWEEN SKINS/Patch.png",
    "../Resource/outfit/HALLOWEEN SKINS/Peely Bone.png",
    "../Resource/outfit/HALLOWEEN SKINS/Plague.png",
    "../Resource/outfit/HALLOWEEN SKINS/Punk.png",
    "../Resource/outfit/HALLOWEEN SKINS/Putrid Playmaker.png",
    "../Resource/outfit/HALLOWEEN SKINS/Putrid Polarity.png",
    "../Resource/outfit/HALLOWEEN SKINS/Ravina.png",
    "../Resource/outfit/HALLOWEEN SKINS/Rosa.png",
    "../Resource/outfit/HALLOWEEN SKINS/Scourge.png",
    "../Resource/outfit/HALLOWEEN SKINS/Sinister Glare.jpeg",
    "../Resource/outfit/HALLOWEEN SKINS/Sinister Striker.png",
    "../Resource/outfit/HALLOWEEN SKINS/Skeletra.jpg",
    "../Resource/outfit/HALLOWEEN SKINS/Skull Squad Leader.png",
    "../Resource/outfit/HALLOWEEN SKINS/Soulless Sweeper.png",
    "../Resource/outfit/HALLOWEEN SKINS/Spooky Team Leader.png",
    "../Resource/outfit/HALLOWEEN SKINS/Straw Ops.png",
    "../Resource/outfit/HALLOWEEN SKINS/Teef.png",
    "../Resource/outfit/HALLOWEEN SKINS/The Bitey Volt.png",
    "../Resource/outfit/HALLOWEEN SKINS/The Good Doctor.png",
    "../Resource/outfit/HALLOWEEN SKINS/The Mummy.jpeg",
    "../Resource/outfit/HALLOWEEN SKINS/Theyre Back-Lash.png",
    "../Resource/outfit/HALLOWEEN SKINS/Undying Sorrow.jpeg",
    "../Resource/outfit/HALLOWEEN SKINS/Wanderlost.png",
    "../Resource/outfit/HALLOWEEN SKINS/Willow.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles30 a");
var roles = document.querySelectorAll('.roles30 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles31 */
var paths = [
    "../Resource/outfit/CHRISTMAS SKINS/Arctic Adeline.png",
    "../Resource/outfit/CHRISTMAS SKINS/Blinky.jpg",
    "../Resource/outfit/CHRISTMAS SKINS/Codename.png",
    "../Resource/outfit/CHRISTMAS SKINS/Cozy Commander.png",
    "../Resource/outfit/CHRISTMAS SKINS/Crackabella.png",
    "../Resource/outfit/CHRISTMAS SKINS/Crackshot.png",
    "../Resource/outfit/CHRISTMAS SKINS/Cutiepie.png",
    "../Resource/outfit/CHRISTMAS SKINS/Dolph.png",
    "../Resource/outfit/CHRISTMAS SKINS/Fa-La-La-La Fishstick.jpg",
    "../Resource/outfit/CHRISTMAS SKINS/Ginger Gunner.png",
    "../Resource/outfit/CHRISTMAS SKINS/Gingerbread Raider.jpg",
    "../Resource/outfit/CHRISTMAS SKINS/Gingerbread Raider.png",
    "../Resource/outfit/CHRISTMAS SKINS/Glimmer.png",
    "../Resource/outfit/CHRISTMAS SKINS/Guff Gringle.png",
    "../Resource/outfit/CHRISTMAS SKINS/Holly Jammer.png",
    "../Resource/outfit/CHRISTMAS SKINS/Jolly Jammer.png",
    "../Resource/outfit/CHRISTMAS SKINS/Kane.png",
    "../Resource/outfit/CHRISTMAS SKINS/Krampus.png",
    "../Resource/outfit/CHRISTMAS SKINS/LT. Evergreen.png",
    "../Resource/outfit/CHRISTMAS SKINS/Merry Marauder.png",
    "../Resource/outfit/CHRISTMAS SKINS/Nog Ops.png",
    "../Resource/outfit/CHRISTMAS SKINS/Red Nosed Raider.png",
    "../Resource/outfit/CHRISTMAS SKINS/Red-nosed Ranger.png",
    "../Resource/outfit/CHRISTMAS SKINS/Sled Ready Guff.jpeg",
    "../Resource/outfit/CHRISTMAS SKINS/Snowbell.jpg",
    "../Resource/outfit/CHRISTMAS SKINS/Sugarplum.png",
    "../Resource/outfit/CHRISTMAS SKINS/Tinseltoes.png",
    "../Resource/outfit/CHRISTMAS SKINS/Yule Trooper.png",
    "../Resource/outfit/CHRISTMAS SKINS/Yuletide Ranger.png",
];
var length = paths.length;
var links = document.querySelectorAll(".roles31 a");
var roles = document.querySelectorAll('.roles31 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles32 */
var paths = [
    "../Resource/outfit/MARVEL SKINS/Ant-Man.png",
    "../Resource/outfit/MARVEL SKINS/Black Panther.jpg",
    "../Resource/outfit/MARVEL SKINS/Black Widow Outfit.png",
    "../Resource/outfit/MARVEL SKINS/Black Widow.png",
    "../Resource/outfit/MARVEL SKINS/Blade.jpg",
    "../Resource/outfit/MARVEL SKINS/Britestar.jpeg",
    "../Resource/outfit/MARVEL SKINS/Cable.png",
    "../Resource/outfit/MARVEL SKINS/Captain America.png",
    "../Resource/outfit/MARVEL SKINS/Captain America.webp",
    "../Resource/outfit/MARVEL SKINS/Clint Barton.png",
    "../Resource/outfit/MARVEL SKINS/Daredevil.png",
    "../Resource/outfit/MARVEL SKINS/Dark Phoenix.jpeg",
    "../Resource/outfit/MARVEL SKINS/Deadpool.jpg",
    "../Resource/outfit/MARVEL SKINS/Domino.png",
    "../Resource/outfit/MARVEL SKINS/Eddie Brock.jpeg",
    "../Resource/outfit/MARVEL SKINS/Gambit.jpeg",
    "../Resource/outfit/MARVEL SKINS/Gamora.png",
    "../Resource/outfit/MARVEL SKINS/Ghost Rider.png",
    "../Resource/outfit/MARVEL SKINS/Green Goblin.png",
    "../Resource/outfit/MARVEL SKINS/Hulk.jpeg",
    "../Resource/outfit/MARVEL SKINS/Iron Man.jpeg",
    "../Resource/outfit/MARVEL SKINS/Kate Bishop.jpeg",
    "../Resource/outfit/MARVEL SKINS/Loki Laufeyson.png",
    "../Resource/outfit/MARVEL SKINS/Mary Jane.png",
    "../Resource/outfit/MARVEL SKINS/MJ No Way Home.png",
    "../Resource/outfit/MARVEL SKINS/Moon Knight.jpg",
    "../Resource/outfit/MARVEL SKINS/Nick Fury.png",
    "../Resource/outfit/MARVEL SKINS/Ravenpool.jpg",
    "../Resource/outfit/MARVEL SKINS/Rogue.jpeg",
    "../Resource/outfit/MARVEL SKINS/Scarlet Witch.jpg",
    "../Resource/outfit/MARVEL SKINS/Shang-Chi.png",
    "../Resource/outfit/MARVEL SKINS/Silver Surfer.png",
    "../Resource/outfit/MARVEL SKINS/Spider-Man.jpeg",
    "../Resource/outfit/MARVEL SKINS/Spider-Man1.webp",
    "../Resource/outfit/MARVEL SKINS/Spider-Man2.webp",
    "../Resource/outfit/MARVEL SKINS/Star-Lord Outfit.png",
    "../Resource/outfit/MARVEL SKINS/Taskmaster.png",
    "../Resource/outfit/MARVEL SKINS/Thanos.jpg",
    "../Resource/outfit/MARVEL SKINS/Venom.png",
    "../Resource/outfit/MARVEL SKINS/Wolverine Zero.jpeg",
];
var length = paths.length;
var links = document.querySelectorAll(".roles32 a");
var roles = document.querySelectorAll('.roles32 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}

/* roles33 */
var paths = [
    "../Resource/outfit/NARUTO/Gaara.jpeg",
    "../Resource/outfit/NARUTO/Hinata Hyuga.jpeg",
    "../Resource/outfit/NARUTO/Itachi Uchiha.jpeg",
    "../Resource/outfit/NARUTO/Kakashi Hatake.png",
    "../Resource/outfit/NARUTO/Naruto Uzumaki.jpeg",
    "../Resource/outfit/NARUTO/Orochimaru.jpeg",
    "../Resource/outfit/NARUTO/Sakura Haruno.jpeg",
    "../Resource/outfit/NARUTO/Sasuke Uchiha.jpeg",
];
var length = paths.length;
var links = document.querySelectorAll(".roles33 a");
var roles = document.querySelectorAll('.roles33 img');
for (var i = 0; i < length; i++) {
    links[i].setAttribute('href', paths[i]);
    roles[i].setAttribute('src', paths[i]);
}
